"use client";

import React, { useRef, useState, useEffect } from "react";
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
}

export function ProjectImageUpload({
  slotId,
  guideline,
  buttonText,
  dark = false,
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
  const [imageLoadError, setImageLoadError] = useState(false);
  const [previewBlob, setPreviewBlob] = useState<string | null>(null);

  const currentImage = previewBlob || getImage(slotId);

  useEffect(() => {
    setImageLoadError(false);
  }, [currentImage]);

  const instructionText =
    typeof guideline === "string"
      ? guideline
      : lang === "vi"
      ? guideline.vi
      : guideline.en;

  const resolvedButtonText = buttonText
    ? typeof buttonText === "string"
      ? buttonText
      : lang === "vi"
      ? buttonText.vi
      : buttonText.en
    : lang === "vi"
    ? "Tải ảnh dự án lên"
    : "Upload project photo";

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await processUpload(file);
  };

  const processUpload = async (file: File) => {
    const fileName = file.name.toLowerCase();
    const isImageExt = /\.(png|jpe?g|webp|gif|svg|jfif|bmp|avif)$/i.test(fileName);
    const isImageMime = file.type ? file.type.startsWith("image/") : false;

    if (!isImageMime && !isImageExt) {
      if (fileName.endsWith(".pdf") || file.type === "application/pdf") {
        alert(
          lang === "vi"
            ? "⚠️ Bạn đang chọn tệp PDF (thường do Canva mặc định chọn PDF).\n\n👉 Cách khắc phục: Trên Canva, bạn bấm 'Chia sẻ' > 'Tải xuống' > đổi mục 'Loại tệp' thành PNG hoặc JPG rồi tải lại nhé!"
            : "⚠️ You selected a PDF file (often default in Canva).\n\nPlease download from Canva as PNG or JPG and try again!"
        );
      } else if (fileName.endsWith(".zip") || file.type.includes("zip")) {
        alert(
          lang === "vi"
            ? "⚠️ Bạn đang chọn tệp nén ZIP. Vui lòng giải nén để lấy file ảnh PNG/JPG bên trong rồi tải lên nhé!"
            : "⚠️ You selected a ZIP file. Please extract the PNG/JPG image first!"
        );
      } else if (fileName.endsWith(".pptx") || fileName.endsWith(".ppt")) {
        alert(
          lang === "vi"
            ? "⚠️ Bạn đang chọn file PowerPoint. Vui lòng lưu slide thành file ảnh PNG/JPG rồi tải lên nhé!"
            : "⚠️ You selected a PowerPoint file. Please save as PNG/JPG first!"
        );
      } else {
        alert(lang === "vi" ? "Vui lòng chọn một tệp hình ảnh (.png, .jpg, .webp)!" : "Please select an image file (.png, .jpg, .webp)!");
      }
      return;
    }

    // Instant local preview
    const localUrl = URL.createObjectURL(file);
    setPreviewBlob(localUrl);
    setImageLoadError(false);

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
      setPreviewBlob(null);
      setImageLoadError(false);
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

  const hasValidImage = Boolean(currentImage && !imageLoadError);

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
        onClick={() => !hasValidImage && fileInputRef.current?.click()}
        className={`relative w-full overflow-hidden transition-all duration-300 ${roundedClass} ${aspectRatio} ${
          heightClass ? heightClass : ""
        } ${
          hasValidImage
            ? dark
              ? "border border-[#233529] shadow-md bg-[#121f16]/60 group"
              : "border border-[#1B3B2B]/20 shadow-sm bg-[#1B3B2B]/5 group"
            : dark
            ? `border-2 border-dashed cursor-pointer ${
                isDragOver
                  ? "border-[#22c55e] bg-[#22c55e]/15 shadow-md scale-[1.005]"
                  : "border-[#233529] hover:border-[#22c55e]/60 bg-[#121f16]/80 hover:bg-[#121f16]"
              }`
            : `border-2 border-dashed cursor-pointer ${
                isDragOver
                  ? "border-[#1B3B2B] bg-[#E2ECE5]/40 shadow-md scale-[1.005]"
                  : "border-[#1B3B2B]/30 hover:border-[#1B3B2B] bg-[#FAF7F2]/90 hover:bg-[#FAF7F2]"
              }`
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg,image/webp,image/gif,image/*,.png,.jpg,.jpeg,.webp"
          className="hidden"
          onChange={handleFileChange}
        />

        {hasValidImage ? (
          /* Render Uploaded Image with Action Overlay */
          <div className="absolute inset-0 w-full h-full">
            <img
              src={currentImage!}
              alt="Project media"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageLoadError(true)}
              loading="eager"
              fetchPriority="high"
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
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/95 text-[#1B3B2B] shadow-md hover:bg-white hover:shadow-lg transition-all"
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
              <div className="absolute bottom-3 left-3 bg-[#1B3B2B] text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{lang === "vi" ? "Đã lưu ảnh" : "Saved"}</span>
              </div>
            )}
          </div>
        ) : imageLoadError ? (
          /* Error State when remote image cannot load */
          <div className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6 text-center ${
            dark ? "bg-[#121f16]" : "bg-[#FAF7F2]"
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-2">
              <AlertCircle className="w-6 h-6" />
            </div>
            <p className={`text-xs font-bold mb-1 ${dark ? "text-white" : "text-[#242220]"}`}>
              {lang === "vi" ? "Ảnh chưa tải được hoặc cần cập nhật" : "Image failed to load"}
            </p>
            <p className={`text-[11px] max-w-xs mb-3 font-sans ${dark ? "text-white/60" : "text-[#242220]/65"}`}>
              {lang === "vi"
                ? "Liên kết ảnh cũ không tìm thấy. Nhấp bên dưới để tải ảnh mới lên."
                : "Image source not found. Click below to upload a new photo."}
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="px-4 py-2 rounded-xl bg-[#7B0323] text-white text-xs font-semibold shadow hover:bg-[#5E021A] transition-all flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{lang === "vi" ? "Tải ảnh mới lên" : "Upload new photo"}</span>
            </button>
          </div>
        ) : (
          /* Empty State: Upload Button & Icon */
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6 text-center">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${
              dark ? "bg-[#22c55e]/15 text-[#22c55e]" : "bg-[#E2ECE5]/60 text-[#1B3B2B]"
            }`}>
              {isUploading ? (
                <RefreshCw className="w-7 h-7 animate-spin" />
              ) : (
                <UploadCloud className="w-7 h-7" />
              )}
            </div>

            <button
              type="button"
              disabled={isUploading}
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className={`px-5 py-2.5 rounded-xl text-white font-medium text-sm shadow active:scale-95 transition-all flex items-center gap-2 mb-2 ${
                dark ? "bg-[#183e2b] hover:bg-[#22c55e] hover:text-[#0b1710]" : "bg-[#7B0323] hover:bg-[#5E021A]"
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>
                {isUploading
                  ? lang === "vi"
                    ? "Đang tải lên..."
                    : "Uploading..."
                  : resolvedButtonText}
              </span>
            </button>

            <span className={`text-xs font-sans ${dark ? "text-white/60" : "text-[#242220]/60"}`}>
              {lang === "vi"
                ? "Kéo thả ảnh vào đây hoặc nhấp để chọn tệp"
                : "Drag & drop photo here or click to browse"}
            </span>
          </div>
        )}
      </div>

      {/* Guideline Box Directly Underneath */}
      {showPreviewText && (
        <div className={`flex items-start gap-2 px-3 py-2 rounded-xl text-xs leading-relaxed ${
          dark
            ? "bg-[#121f16] border border-[#233529] text-white/80"
            : "bg-[#FAF7F2] border border-[#1B3B2B]/15 text-[#242220]/85"
        }`}>
          <AlertCircle className={`w-4 h-4 shrink-0 mt-0.5 ${dark ? "text-[#d97706]" : "text-[#7B0323]"}`} />
          <div>
            <strong className={`font-semibold ${dark ? "text-[#22c55e]" : "text-[#7B0323]"}`}>
              {lang === "vi" ? "Ảnh phù hợp mô tả: " : "Recommended Photo: "}
            </strong>
            <span>{instructionText}</span>
          </div>
        </div>
      )}
    </div>
  );
}
