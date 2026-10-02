/**
 * SYNC DATABASE IMAGES TO LOCAL STATIC ASSETS
 * 
 * Script này dùng khi bạn đã tải lên xong tất cả ảnh qua giao diện web:
 * 1. Tự động tải tất cả ảnh từ Supabase Cloud Database về thư mục tĩnh `public/images/static/`.
 * 2. Cập nhật file `src/data/project-images.json` với đường dẫn cục bộ `/images/static/<slotId>.<ext>`.
 * 3. Kích hoạt cờ `NEXT_PUBLIC_USE_STATIC_IMAGES=true` trong `.env.local`.
 * 4. Website sẽ chuyển hoàn toàn sang dùng ảnh tĩnh cục bộ (load tức thì 0s, không tốn quota, chạy offline mượt mà).
 * 
 * Cách dùng:
 *   npm run sync-images
 * Hoặc:
 *   node scripts/sync-to-static.js
 * 
 * Để chuyển lại sang chế độ database (nếu muốn up tiếp ảnh mới):
 *   node scripts/sync-to-static.js --db
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

// Load .env.local
const envPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  envContent.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
      const [key, ...vals] = trimmed.split("=");
      const val = vals.join("=").trim().replace(/^["']|["']$/g, "");
      process.env[key.trim()] = val;
    }
  });
}

const isSwitchToDb = process.argv.includes("--db");

async function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    const client = url.startsWith("https") ? https : http;

    client.get(url, (response) => {
      // Handle redirect
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
      }

      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(destPath);
        return reject(new Error(`Failed to download ${url}: Status code ${response.statusCode}`));
      }

      response.pipe(file);
      file.on("finish", () => {
        file.close(resolve);
      });
    }).on("error", (err) => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      reject(err);
    });
  });
}

function updateEnvStaticMode(enableStatic) {
  let content = fs.existsSync(envPath) ? fs.readFileSync(envPath, "utf-8") : "";
  const key = "NEXT_PUBLIC_USE_STATIC_IMAGES";
  const regex = new RegExp(`^${key}=.*$`, "m");

  if (regex.test(content)) {
    content = content.replace(regex, `${key}=${enableStatic ? "true" : "false"}`);
  } else {
    content += `\n# Static Images Mode (Bật để website dùng ảnh tĩnh từ public/images/static thay vì Supabase)\n${key}=${enableStatic ? "true" : "false"}\n`;
  }

  fs.writeFileSync(envPath, content, "utf-8");
}

async function main() {
  console.log("=======================================================");
  console.log("  🔄 QUỲNH CHI PORTFOLIO - IMAGE SYNC TOOL");
  console.log("=======================================================\n");

  if (isSwitchToDb) {
    updateEnvStaticMode(false);
    console.log("✅ Đã chuyển website về CHẾ ĐỘ DATABASE (Supabase).");
    console.log("👉 Bạn có thể tiếp tục tải lên ảnh mới trực tiếp trên web.");
    return;
  }

  const { createClient } = require("@supabase/supabase-js");

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("❌ Không tìm thấy cấu hình Supabase trong .env.local!");
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  console.log("📡 Đang kết nối tới Supabase để lấy danh sách ảnh đã upload...");
  const { data, error } = await supabase
    .from("project_images")
    .select("id, image_url, updated_at");

  if (error) {
    console.error("❌ Lỗi truy vấn bảng project_images:", error.message);
    process.exit(1);
  }

  if (!data || data.length === 0) {
    console.log("⚠️ Không có ảnh nào trong database để đồng bộ.");
    return;
  }

  console.log(`📸 Tìm thấy ${data.length} ảnh trong database.\n`);

  // Target directory
  const staticDir = path.join(process.cwd(), "public", "images", "static");
  fs.mkdirSync(staticDir, { recursive: true });

  const staticMap = {};
  let successCount = 0;

  for (const item of data) {
    const { id, image_url } = item;
    if (!id || !image_url) continue;

    // Detect extension from url or fallback to jpg
    let ext = ".jpg";
    const cleanUrl = image_url.split("?")[0];
    const match = cleanUrl.match(/\.(png|jpe?g|webp|gif|svg|avif)$/i);
    if (match) {
      ext = match[0].toLowerCase();
      if (ext === ".jpeg") ext = ".jpg";
    }

    const localFileName = `${id}${ext}`;
    const localFilePath = path.join(staticDir, localFileName);
    const webPath = `/images/static/${localFileName}`;

    console.log(`⏳ [${id}] Đang tải về...`);
    try {
      await downloadFile(image_url, localFilePath);
      const stats = fs.statSync(localFilePath);
      const sizeKb = (stats.size / 1024).toFixed(1);
      console.log(`   ✅ Đã lưu: ${webPath} (${sizeKb} KB)`);
      staticMap[id] = webPath;
      successCount++;
    } catch (downloadErr) {
      console.error(`   ❌ Lỗi tải [${id}]:`, downloadErr.message);
    }
  }

  // Save to src/data/project-images.json
  const jsonPath = path.join(process.cwd(), "src", "data", "project-images.json");
  fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
  fs.writeFileSync(jsonPath, JSON.stringify(staticMap, null, 2), "utf-8");
  console.log(`\n📄 Đã cập nhật file dữ liệu tĩnh: src/data/project-images.json`);

  // Update .env.local to enable static images mode
  updateEnvStaticMode(true);
  console.log(`⚙️  Đã kích hoạt NEXT_PUBLIC_USE_STATIC_IMAGES=true trong .env.local`);

  console.log("\n=======================================================");
  console.log(`🎉 HOÀN TẤT! Đã chuyển đổi thành công ${successCount}/${data.length} ảnh sang tĩnh.`);
  console.log("⚡ Website bây giờ sẽ tự động sử dụng 100% ảnh tĩnh nội bộ.");
  console.log("🚀 Tốc độ tải ảnh tức thì 0s, không tốn quota Supabase!");
  console.log("👉 Khi muốn quay lại chế độ Database để up thêm ảnh mới, chạy: node scripts/sync-to-static.js --db");
  console.log("=======================================================\n");
}

main().catch((err) => {
  console.error("Lỗi:", err);
  process.exit(1);
});
