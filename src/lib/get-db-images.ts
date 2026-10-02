import { promises as fs } from "fs";
import path from "path";
import {
  getServiceSupabase,
  isSupabaseConfigured,
  TABLE_NAME,
} from "@/lib/supabase";

/**
 * Fetches current images directly from Supabase Cloud Database (with local JSON fallback).
 * Used by Server Components (layout.tsx) and API routes to ensure 100% database accuracy.
 */
export async function fetchDatabaseImages(): Promise<Record<string, string>> {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "project-images.json");
    
    // 0. Nếu người dùng bật chế độ ảnh tĩnh cục bộ (Static Mode)
    const isStaticMode =
      process.env.NEXT_PUBLIC_USE_STATIC_IMAGES === "true" ||
      process.env.USE_STATIC_IMAGES === "true";

    if (isStaticMode) {
      const fileData = await fs.readFile(filePath, "utf-8").catch(() => "{}");
      return JSON.parse(fileData);
    }

    // 1. Query Supabase Database
    if (isSupabaseConfigured()) {
      const supabase = getServiceSupabase();
      if (supabase) {
        const { data, error } = await supabase
          .from(TABLE_NAME)
          .select("id, image_url");

        if (!error && data && data.length > 0) {
          const map: Record<string, string> = {};
          for (const item of data) {
            if (item.id && item.image_url) {
              map[item.id] = item.image_url;
            }
          }
          return map;
        } else if (error) {
          console.warn("Supabase fetch images error:", error.message);
        }
      }
    }

    // 2. Fallback to local JSON if Supabase is not configured or offline
    const fileData = await fs.readFile(filePath, "utf-8").catch(() => "{}");
    return JSON.parse(fileData);
  } catch (err) {
    console.error("Error fetching database images:", err);
    return {};
  }
}
