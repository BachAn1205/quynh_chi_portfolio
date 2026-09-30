import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "src", "data", "project-images.json");
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

async function getImagesDb(): Promise<Record<string, string>> {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return {};
  }
}

async function saveImagesDb(data: Record<string, string>): Promise<void> {
  await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET() {
  const images = await getImagesDb();
  return NextResponse.json(images);
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

    // Ensure upload dir exists
    await fs.mkdir(UPLOAD_DIR, { recursive: true });

    // Determine extension
    const originalName = file.name || "image.png";
    const extMatch = originalName.match(/\.([a-zA-Z0-9]+)$/);
    const ext = extMatch ? extMatch[1].toLowerCase() : "jpg";

    const fileName = `${slotId.replace(/[^a-zA-Z0-9_-]/g, "_")}-${Date.now()}.${ext}`;
    const filePath = path.join(UPLOAD_DIR, fileName);

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    await fs.writeFile(filePath, buffer);

    const publicUrl = `/uploads/${fileName}`;

    // Update DB
    const db = await getImagesDb();
    db[slotId] = publicUrl;
    await saveImagesDb(db);

    return NextResponse.json({ success: true, url: publicUrl });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
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

    const db = await getImagesDb();
    const existingFile = db[slotId];

    if (existingFile && existingFile.startsWith("/uploads/")) {
      const fileName = existingFile.replace("/uploads/", "");
      const filePath = path.join(UPLOAD_DIR, fileName);
      try {
        await fs.unlink(filePath);
      } catch {
        // File may not exist on disk, ignore
      }
    }

    delete db[slotId];
    await saveImagesDb(db);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete image" },
      { status: 500 }
    );
  }
}
