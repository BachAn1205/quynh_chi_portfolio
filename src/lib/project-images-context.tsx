"use client";

import React, { createContext, useContext, useMemo } from "react";

export const STATIC_PROJECT_IMAGES: Record<string, string> = {
  "hero-avatar": "/images/static/profile-avatar.jpg",
  "profile-avatar": "/images/static/profile-avatar.jpg",
  "hero-cafloop": "/images/static/hero-cafloop.jpg",
  "hero-econometrics": "/images/static/hero-econometrics.png",
  "hero-trung": "/images/static/hero-trung.jpg",
  "about-banner": "/images/static/about-banner.jpg",
  "about-analyst": "/images/static/about-analyst.jpg",
  "build-cafloop": "/images/static/build-cafloop.jpg",
  "build-dakonomics": "/images/static/build-dakonomics.jpg",
  "build-trung": "/images/static/build-trung.jpg",
  "mind-startup": "/images/static/mind-startup.png",
  "mind-research": "/images/static/mind-research.png",
  "mind-lab": "/images/static/mind-lab.jpg",
  "mind-pedagogy": "/images/static/mind-pedagogy.jpg",
  "mind-sifarm": "/images/static/mind-sifarm.jpg",
  "mind-honors": "/images/static/mind-honors-1.jpg",
  "mind-honors-1": "/images/static/mind-honors-1.jpg",
  "mind-honors-2": "/images/static/mind-honors-2.jpg",
  "mind-honors-3": "/images/static/mind-honors-3.jpg",
  "mind-honors-4": "/images/static/mind-honors-4.jpg",
  "heart-showcase": "/images/static/heart-showcase.jpg",
  "heart-trung-preservation": "/images/static/heart-trung-preservation.jpg",
  "heart-artistic-voice": "/images/static/heart-artistic-voice.jpg",
  "heart-ea-wer": "/images/static/heart-ea-wer.jpg",
  "heart-wildlife": "/images/static/heart-wildlife.jpg",
  "heart-public-service": "/images/static/heart-public-service.jpg",
  "heart-road-safety": "/images/static/heart-road-safety.jpg",
  "heart-highland-girls-fund": "/images/static/heart-highland-girls-fund.jpg",
  "heart-debate": "/images/static/heart-debate.jpg",
  "heart-adjudicator": "/images/quynhchi/2.jpg",
  "contact-portrait": "/images/static/contact-portrait.jpg",
};

interface ProjectImagesContextType {
  images: Record<string, string>;
  isLoading: boolean;
  getImage: (slotId: string) => string | undefined;
  uploadImage: (slotId: string, file: File) => Promise<string | null>;
  deleteImage: (slotId: string) => Promise<boolean>;
}

const ProjectImagesContext = createContext<ProjectImagesContextType>({
  images: STATIC_PROJECT_IMAGES,
  isLoading: false,
  getImage: (slotId: string) => STATIC_PROJECT_IMAGES[slotId],
  uploadImage: async () => null,
  deleteImage: async () => false,
});

export function ProjectImageProvider({
  children,
}: {
  children: React.ReactNode;
  initialImages?: Record<string, string>;
}) {
  const getImage = (slotId: string) => {
    return STATIC_PROJECT_IMAGES[slotId] || undefined;
  };

  const uploadImage = async () => null;
  const deleteImage = async () => false;

  const contextValue = useMemo(
    () => ({
      images: STATIC_PROJECT_IMAGES,
      isLoading: false,
      getImage,
      uploadImage,
      deleteImage,
    }),
    []
  );

  return (
    <ProjectImagesContext.Provider value={contextValue}>
      {children}
    </ProjectImagesContext.Provider>
  );
}

export const useProjectImages = () => useContext(ProjectImagesContext);
