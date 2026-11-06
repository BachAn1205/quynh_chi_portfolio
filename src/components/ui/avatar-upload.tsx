"use client";

import React from "react";
import Image from "next/image";
import { STATIC_PROJECT_IMAGES } from "@/lib/project-images-context";

interface AvatarUploadProps {
  slotId?: string;
  sizeClass?: string;
  className?: string;
  showGuide?: boolean;
}

export function AvatarUpload({
  slotId = "profile-avatar",
  sizeClass = "w-48 h-56 sm:w-60 sm:h-72 md:w-68 md:h-80 lg:w-76 lg:h-92",
  className = "",
}: AvatarUploadProps) {
  const avatarSrc =
    STATIC_PROJECT_IMAGES[slotId] ||
    STATIC_PROJECT_IMAGES["profile-avatar"] ||
    "/images/static/profile-avatar.jpg";

  return (
    <div className={`flex flex-col items-center sm:items-start gap-3 ${className}`}>
      {/* Avatar Box (Fixed Aspect Ratio 3:2, Static) */}
      <div
        style={{ aspectRatio: "3 / 2" }}
        className={`relative ${sizeClass} rounded-3xl overflow-hidden shrink-0 shadow-lg border-2 border-[#1B3B2B]/30 bg-[#FAF7F2]`}
      >
        <Image
          src={avatarSrc}
          alt="Phan Hoàng Quỳnh Chi"
          fill
          className="object-cover"
          style={{ objectPosition: "center" }}
          priority
          unoptimized
        />
      </div>
    </div>
  );
}
