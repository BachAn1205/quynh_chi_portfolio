import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import {
  getServiceSupabase,
  isSupabaseConfigured,
  BUCKET_NAME,
  TABLE_NAME,
} from "@/lib/supabase";

const DB_PATH = path.join(process.cwd(), "src", "data", "project-images.json");
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

async function getLocalDb(): Promise<Record<string, string>> {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return {};
  }
}

async function saveLocalDb(data: Record<string, string>): Promise<void> {
  try {
    await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.warn("Could not save to local filesystem:", err);
  }
}

export async function GET() {
  try {
    // 1. Try Supabase Cloud Database first
    if (isSupabaseConfigured()) {
      const supabase = getServiceSupabase();
      if (supabase) {
        const { data, error } = await supabase
          .from(TABLE_NAME)
          .select("id, image_url");

        if (!error && data) {
          const map: Record<string, string> = {};
          for (const item of data) {
            map[item.id] = item.image_url;
          }
          return NextResponse.json(map);
        } else if (error) {
          console.warn("Supabase query error:", error.message);
        }
      }
    }

    // 2. Fallback to local JSON
    const images = await getLocalDb();
    return NextResponse.json(images);
  } catch (error) {
    console.error("GET images error:", error);
    return NextResponse.json({});
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const slotId = formData.get("slotId") as string;
    const file = formData.get("file") as File | null;

    if (!slotId || !file) {
      return NextResponse.json(
        { error: "Missing slotId or file" },
        { status: 400 }
      );
    }

    const originalName = file.name || "image.png";
    const extMatch = originalName.match(/\.([a-zA-Z0-9]+)$/);
    const ext = extMatch ? extMatch[1].toLowerCase() : "jpg";
    const cleanSlot = slotId.replace(/[^a-zA-Z0-9_-]/g, "_");
    const fileName = `${cleanSlot}-${Date.now()}.${ext}`;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 1. If Supabase is configured, upload to Supabase Storage & Database
    if (isSupabaseConfigured()) {
      const supabase = getServiceSupabase();
      if (supabase) {
        // Ensure bucket exists
        try {
          await supabase.storage.createBucket(BUCKET_NAME, { public: true });
        } catch {
          // bucket may already exist
        }

        const mimeType = file.type || "image/jpeg";
        const { error: storageError } = await supabase.storage
          .from(BUCKET_NAME)
          .upload(fileName, buffer, {
            contentType: mimeType,
            upsert: true,
          });

        if (storageError) {
          console.error("Supabase Storage upload error:", storageError);
          // If storage fails (e.g. policy error), throw to try fallback
          throw storageError;
        }

        const { data: urlData } = supabase.storage
          .from(BUCKET_NAME)
          .getPublicUrl(fileName);

        const publicUrl = urlData.publicUrl;

        // Upsert into Supabase Table
        const { error: dbError } = await supabase.from(TABLE_NAME).upsert({
          id: slotId,
          image_url: publicUrl,
          updated_at: new Date().toISOString(),
        });

        if (dbError) {
          console.warn("Supabase Table upsert warning:", dbError.message);
        }

        return NextResponse.json({
          success: true,
          url: publicUrl,
          cloud: "supabase",
        });
      }
    }

    // 2. Local Fallback (for development or before Supabase keys added)
    try {
      await fs.mkdir(UPLOAD_DIR, { recursive: true });
      const filePath = path.join(UPLOAD_DIR, fileName);
      await fs.writeFile(filePath, buffer);

      const publicUrl = `/uploads/${fileName}`;

      const db = await getLocalDb();
      db[slotId] = publicUrl;
      await saveLocalDb(db);

      return NextResponse.json({
        success: true,
        url: publicUrl,
        cloud: "local",
      });
    } catch (fsError) {
      console.warn("Local filesystem write failed (likely serverless/Vercel):", fsError);
      // Fallback to base64 inline URL if serverless and no Supabase configured
      const base64Data = buffer.toString("base64");
      const mimeType = file.type || "image/jpeg";
      const dataUrl = `data:${mimeType};base64,${base64Data}`;

      return NextResponse.json({
        success: true,
        url: dataUrl,
        cloud: "inline-base64",
        warning: "Vui lòng cấu hình Supabase để lưu trữ ảnh vĩnh viễn trên production.",
      });
    }
  } catch (error: unknown) {
    console.error("Upload error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to upload image";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const slotId = searchParams.get("slotId");

    if (!slotId) {
      return NextResponse.json({ error: "Missing slotId" }, { status: 400 });
    }

    // 1. Try Supabase deletion
    if (isSupabaseConfigured()) {
      const supabase = getServiceSupabase();
      if (supabase) {
        const { data: row } = await supabase
          .from(TABLE_NAME)
          .select("image_url")
          .eq("id", slotId)
          .single();

        if (row?.image_url) {
          const parts = row.image_url.split("/");
          const fileName = parts[parts.length - 1];
          if (fileName) {
            await supabase.storage.from(BUCKET_NAME).remove([fileName]);
          }
        }

        await supabase.from(TABLE_NAME).delete().eq("id", slotId);
      }
    }

    // 2. Also clean local if exists
    try {
      const db = await getLocalDb();
      const existingFile = db[slotId];
      if (existingFile && existingFile.startsWith("/uploads/")) {
        const fileName = existingFile.replace("/uploads/", "");
        const filePath = path.join(UPLOAD_DIR, fileName);
        await fs.unlink(filePath).catch(() => {});
      }
      delete db[slotId];
      await saveLocalDb(db);
    } catch {
      // ignore
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete image" },
      { status: 500 }
    );
  }
}
