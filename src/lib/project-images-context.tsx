"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

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

export function ProjectImageProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Fetch initial images from API with localStorage fallback
  const fetchImages = useCallback(async () => {
    try {
      // First try localStorage for instant UI display
      if (typeof window !== "undefined") {
        const cached = localStorage.getItem(STORAGE_KEY);
        if (cached) {
          try {
            setImages(JSON.parse(cached));
          } catch {
            // ignore
          }
        }
      }

      const res = await fetch("/api/upload");
      if (res.ok) {
        const data = await res.json();
        setImages((prev) => {
          // If server returned valid keys, use server state as authority; keep only unsynced base64 uploads if any
          const merged = { ...data };
          for (const key in prev) {
            if (prev[key]?.startsWith("data:") && !merged[key]) {
              merged[key] = prev[key];
            }
          }
          if (typeof window !== "undefined") {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          }
          return merged;
        });
      }
    } catch (err) {
      console.error("Failed to load project images:", err);
    } finally {
      setIsLoading(false);
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
    try {
      const formData = new FormData();
      formData.append("slotId", slotId);
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      const data = await res.json();
      const newUrl = data.url;

      setImages((prev) => {
        const next = { ...prev, [slotId]: newUrl };
        if (typeof window !== "undefined") {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
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
              localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            }
            return next;
          });
          resolve(base64Url);
        };
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(file);
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
