"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { UploadCloud, Image as ImageIcon, Trash2, RefreshCw, AlertCircle, CheckCircle2 } from "lucide-react";
import { useProjectImages } from "@/lib/project-images-context";
import { useLanguage } from "@/lib/i18n";

interface ProjectImageUploadProps {
  slotId: string;
  guideline: {
    vi: string;
    en: string;
  } | string;
  aspectRatio?: string;
  className?: string;
  heightClass?: string;
  roundedClass?: string;
  showPreviewText?: boolean;
}

export function ProjectImageUpload({
  slotId,
  guideline,
  aspectRatio = "aspect-[16/10]",
  className = "",
  heightClass,
  roundedClass = "rounded-2xl",
  showPreviewText = true,
}: ProjectImageUploadProps) {
  const { getImage, uploadImage, deleteImage } = useProjectImages();
  const { lang } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const currentImage = getImage(slotId);

  const instructionText =
    typeof guideline === "string"
      ? guideline
      : lang === "vi"
      ? guideline.vi
      : guideline.en;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await processUpload(file);
  };

  const processUpload = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert(lang === "vi" ? "Vui lòng chọn một tệp hình ảnh!" : "Please select an image file!");
      return;
    }

    try {
      setIsUploading(true);
      await uploadImage(slotId, file);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      alert(lang === "vi" ? "Tải ảnh thất bại, vui lòng thử lại." : "Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm(lang === "vi" ? "Bạn có chắc chắn muốn xóa ảnh này?" : "Are you sure you want to remove this image?")) {
      await deleteImage(slotId);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      await processUpload(file);
    }
  };

  return (
    <div className={`w-full flex flex-col gap-2.5 ${className}`}>
      {/* Upload Box / Image Container */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={handleDrop}
        onClick={() => !currentImage && fileInputRef.current?.click()}
        className={`relative w-full overflow-hidden transition-all duration-300 ${roundedClass} ${
          heightClass ? heightClass : aspectRatio
        } ${
          currentImage
            ? "border border-[#335C33]/20 shadow-sm bg-[#1B2A1E]/5 group"
            : `border-2 border-dashed cursor-pointer ${
                isDragOver
                  ? "border-[#335C33] bg-[#E3EDD3]/40 shadow-md scale-[1.005]"
                  : "border-[#335C33]/30 hover:border-[#335C33] bg-[#FAF9F2]/90 hover:bg-[#FAF9F2]"
              }`
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {currentImage ? (
          /* Render Uploaded Image with Action Overlay */
          <div className="relative w-full h-full">
            <Image
              src={currentImage}
              alt="Project media"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Quick Actions Bar */}
            <div className="absolute top-3 right-3 flex items-center gap-2 z-10 opacity-90 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                disabled={isUploading}
                title={lang === "vi" ? "Thay đổi ảnh" : "Change photo"}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/95 text-[#335C33] shadow-md hover:bg-white hover:shadow-lg transition-all"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isUploading ? "animate-spin" : ""}`} />
                <span>{lang === "vi" ? "Thay ảnh" : "Change"}</span>
              </button>
              <button
                type="button"
                onClick={handleDelete}
                title={lang === "vi" ? "Xóa ảnh" : "Remove photo"}
                className="p-1.5 rounded-full text-white bg-red-600/90 hover:bg-red-600 shadow-md hover:shadow-lg transition-all"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {uploadSuccess && (
              <div className="absolute bottom-3 left-3 bg-[#335C33] text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{lang === "vi" ? "Đã lưu ảnh" : "Saved"}</span>
              </div>
            )}
          </div>
        ) : (
          /* Empty State: Upload Button & Icon */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#E3EDD3]/60 flex items-center justify-center text-[#335C33] mb-3 group-hover:scale-110 transition-transform">
              {isUploading ? (
                <RefreshCw className="w-7 h-7 animate-spin text-[#335C33]" />
              ) : (
                <UploadCloud className="w-7 h-7 text-[#335C33]" />
              )}
            </div>

            <button
              type="button"
              disabled={isUploading}
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="px-5 py-2.5 rounded-xl bg-[#335C33] text-white font-medium text-sm shadow hover:bg-[#254425] active:scale-95 transition-all flex items-center gap-2 mb-2"
            >
              <ImageIcon className="w-4 h-4" />
              <span>
                {isUploading
                  ? lang === "vi"
                    ? "Đang tải lên..."
                    : "Uploading..."
                  : lang === "vi"
                  ? "Tải ảnh dự án lên"
                  : "Upload project photo"}
              </span>
            </button>

            <span className="text-xs text-[#2C2E2B]/60 font-sans">
              {lang === "vi"
                ? "Kéo thả ảnh vào đây hoặc nhấp để chọn tệp"
                : "Drag & drop photo here or click to browse"}
            </span>
          </div>
        )}
      </div>

      {/* Guideline Box Directly Underneath */}
      {showPreviewText && (
        <div className="flex items-start gap-2 px-3 py-2 rounded-xl bg-[#FAF9F2] border border-[#335C33]/15 text-xs text-[#2C2E2B]/85 leading-relaxed">
          <AlertCircle className="w-4 h-4 text-[#8C5A35] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#335C33] font-semibold">
              {lang === "vi" ? "Ảnh phù hợp mô tả: " : "Recommended Photo: "}
            </strong>
            <span>{instructionText}</span>
          </div>
        </div>
      )}
    </div>
  );
}
