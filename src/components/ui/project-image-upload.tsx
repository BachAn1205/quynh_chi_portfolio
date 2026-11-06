"use client";

import React from "react";
import Image from "next/image";
import { STATIC_PROJECT_IMAGES } from "@/lib/project-images-context";

interface ProjectImageUploadProps {
  slotId: string;
  guideline?: {
    vi: string;
    en: string;
  } | string;
  buttonText?: {
    vi: string;
    en: string;
  } | string;
  dark?: boolean;
  aspectRatio?: string;
  className?: string;
  heightClass?: string;
  roundedClass?: string;
  showPreviewText?: boolean;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
}

export function ProjectImageUpload({
  slotId,
  aspectRatio = "aspect-[16/10]",
  className = "",
  heightClass = "",
  roundedClass = "rounded-2xl",
  objectFit = "cover",
  objectPosition,
}: ProjectImageUploadProps) {
  const imgSrc =
    STATIC_PROJECT_IMAGES[slotId] ||
    "/images/static/about-banner.jpg";

  const effectivePosition =
    objectPosition ||
    (slotId === "heart-highland-girls-fund" ? "center bottom" : "center");

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`relative w-full ${aspectRatio} ${heightClass} ${roundedClass} overflow-hidden border border-[#1B3B2B]/15 bg-white shadow-xs`}
      >
        <Image
          src={imgSrc}
          alt={slotId}
          fill
          className={objectFit === "contain" ? "object-contain" : "object-cover"}
          style={{ objectPosition: effectivePosition }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
      </div>
    </div>
  );
}
