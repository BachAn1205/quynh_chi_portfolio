"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { compressImage } from "@/lib/image-compress";

interface ProjectImagesContextType {
  images: Record<string, string>;
  isLoading: boolean;
  getImage: (slotId: string) => string | undefined;
  uploadImage: (slotId: string, file: File) => Promise<string | null>;
  deleteImage: (slotId: string) => Promise<boolean>;
}

const ProjectImagesContext = createContext<ProjectImagesContextType>({
  images: {},
  isLoading: true,
  getImage: () => undefined,
  uploadImage: async () => null,
  deleteImage: async () => false,
});

const STORAGE_KEY = "quynhchi_portfolio_project_images";

export function ProjectImageProvider({
  children,
  initialImages,
}: {
  children: React.ReactNode;
  initialImages?: Record<string, string>;
}) {
  // Khởi tạo state bằng initialImages đồng nhất giữa Server (SSR) và Client để tránh Hydration Mismatch
  const [images, setImages] = useState<Record<string, string>>(initialImages || {});
  const [isLoading, setIsLoading] = useState(false);

  // Đọc cache từ localStorage sau khi client đã mount thành công
  useEffect(() => {
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        setImages((prev) => ({ ...parsed, ...prev }));
      }
    } catch {
      // ignore
    }
  }, []);


  // Background sync với Database API (đảm bảo luôn khớp 100% với Supabase)
  const fetchImages = useCallback(async () => {
    try {
      const res = await fetch("/api/upload", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setImages((prev) => {
          // Database là nguồn chân lý duy nhất (Source of Truth)
          const merged = { ...prev, ...data };
          if (typeof window !== "undefined") {
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
            } catch (e) {
              console.warn("LocalStorage save warning:", e);
            }
          }
          return merged;
        });
      }
    } catch (err) {
      console.warn("Database images sync error:", err);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const getImage = useCallback(
    (slotId: string) => {
      return images[slotId] || undefined;
    },
    [images]
  );

  const uploadImage = useCallback(async (slotId: string, file: File): Promise<string | null> => {
    let fileToUpload = file;
    try {
      fileToUpload = await compressImage(file);
    } catch (compressErr) {
      console.warn("Client-side compression fallback to original:", compressErr);
    }

    try {
      const formData = new FormData();
      formData.append("slotId", slotId);
      formData.append("file", fileToUpload);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errText = await res.text().catch(() => "");
        throw new Error(`Upload failed: ${res.status} ${errText}`);
      }

      const data = await res.json();
      const newUrl = data.url;

      setImages((prev) => {
        const next = { ...prev, [slotId]: newUrl };
        if (typeof window !== "undefined") {
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
          } catch (e) {
            console.warn("LocalStorage save warning:", e);
          }
        }
        return next;
      });

      return newUrl;
    } catch (error) {
      console.error("Error uploading image for slot:", slotId, error);
      // Fallback: convert file to local base64 data URL so user can still see it
      return new Promise<string | null>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Url = reader.result as string;
          setImages((prev) => {
            const next = { ...prev, [slotId]: base64Url };
            if (typeof window !== "undefined") {
              try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
              } catch (e) {
                console.warn("LocalStorage quota error:", e);
              }
            }
            return next;
          });
          resolve(base64Url);
        };
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(fileToUpload);
      });
    }
  }, []);

  const deleteImage = useCallback(async (slotId: string): Promise<boolean> => {
    try {
      await fetch(`/api/upload?slotId=${encodeURIComponent(slotId)}`, {
        method: "DELETE",
      });

      setImages((prev) => {
        const next = { ...prev };
        delete next[slotId];
        if (typeof window !== "undefined") {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        }
        return next;
      });

      return true;
    } catch (error) {
      console.error("Error deleting image for slot:", slotId, error);
      setImages((prev) => {
        const next = { ...prev };
        delete next[slotId];
        if (typeof window !== "undefined") {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        }
        return next;
      });
      return true;
    }
  }, []);

  return (
    <ProjectImagesContext.Provider
      value={{
        images,
        isLoading,
        getImage,
        uploadImage,
        deleteImage,
      }}
    >
      {children}
    </ProjectImagesContext.Provider>
  );
}

export function useProjectImages() {
  const context = useContext(ProjectImagesContext);
  if (!context) {
    throw new Error("useProjectImages must be used within a ProjectImageProvider");
  }
  return context;
}
