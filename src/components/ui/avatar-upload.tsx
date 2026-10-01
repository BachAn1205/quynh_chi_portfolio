"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Camera, RefreshCw, Trash2, CheckCircle2, AlertCircle } from "lucide-react";
import { useProjectImages } from "@/lib/project-images-context";
import { useLanguage } from "@/lib/i18n";

interface AvatarUploadProps {
  slotId?: string;
  sizeClass?: string;
  className?: string;
}

export function AvatarUpload({
  slotId = "profile-avatar",
  sizeClass = "w-24 h-24 sm:w-28 sm:h-28",
  className = "",
}: AvatarUploadProps) {
  const { getImage, uploadImage, deleteImage } = useProjectImages();
  const { lang } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [previewBlob, setPreviewBlob] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  const currentAvatar = previewBlob || getImage(slotId);

  useEffect(() => {
    setImageError(false);
  }, [currentAvatar]);

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

    const localUrl = URL.createObjectURL(file);
    setPreviewBlob(localUrl);
    setImageError(false);

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
    if (
      confirm(
        lang === "vi"
          ? "Bạn có chắc chắn muốn xóa ảnh đại diện này?"
          : "Are you sure you want to remove your profile photo?"
      )
    ) {
      setPreviewBlob(null);
      setImageError(false);
      await deleteImage(slotId);
    }
  };

  const hasValidAvatar = Boolean(currentAvatar && !imageError);

  return (
    <div className={`flex flex-col gap-2.5 max-w-full ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
        {/* Avatar Box */}
        <div
          onClick={() => fileInputRef.current?.click()}
          className={`relative ${sizeClass} rounded-3xl overflow-hidden shrink-0 shadow-md border-2 cursor-pointer transition-all duration-300 group ${
            hasValidAvatar
              ? "border-[#1B3B2B]/40 bg-[#1B3B2B]"
              : "border-dashed border-[#1B3B2B]/40 bg-[#E2ECE5]/50 hover:border-[#1B3B2B] hover:bg-[#E2ECE5]/80"
          }`}
          title={lang === "vi" ? "Nhấp để tải ảnh đại diện lên" : "Click to upload profile photo"}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          {hasValidAvatar ? (
            <div className="absolute inset-0 w-full h-full">
              <img
                src={currentAvatar!}
                alt="Phan Hoàng Quỳnh Chi"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  disabled={isUploading}
                  title={lang === "vi" ? "Đổi ảnh" : "Change photo"}
                  className="p-1.5 rounded-full bg-white text-[#1B3B2B] shadow hover:scale-110 transition-transform"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isUploading ? "animate-spin" : ""}`} />
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  title={lang === "vi" ? "Xóa ảnh" : "Remove photo"}
                  className="p-1.5 rounded-full bg-red-600 text-white shadow hover:scale-110 transition-transform"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {uploadSuccess && (
                <div className="absolute bottom-1.5 right-1.5 bg-[#1B3B2B] text-white p-1 rounded-full shadow-md">
                  <CheckCircle2 className="w-3 h-3" />
                </div>
              )}
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center text-[#1B3B2B]">
              {isUploading ? (
                <RefreshCw className="w-6 h-6 animate-spin text-[#1B3B2B]" />
              ) : (
                <>
                  <div className="w-8 h-8 rounded-full bg-[#1B3B2B]/15 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                    <Camera className="w-4 h-4 text-[#1B3B2B]" />
                  </div>
                  <span className="text-[10px] font-bold leading-tight uppercase tracking-wider">
                    {lang === "vi" ? "Tải ảnh" : "Upload"}
                  </span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Upload Action Button & Guide */}
        <div className="flex flex-col justify-center">
          <button
            type="button"
            disabled={isUploading}
            onClick={() => fileInputRef.current?.click()}
            className="self-start px-3 py-1.5 rounded-xl bg-[#7B0323] text-white text-xs font-semibold hover:bg-[#5E021A] active:scale-95 transition-all flex items-center gap-1.5 shadow-xs mb-1"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>
              {isUploading
                ? lang === "vi"
                  ? "Đang tải lên..."
                  : "Uploading..."
                : hasValidAvatar
                ? lang === "vi"
                  ? "Đổi ảnh đại diện"
                  : "Change profile photo"
                : lang === "vi"
                ? "Tải ảnh đại diện lên"
                : "Upload profile photo"}
            </span>
          </button>
          <span className="text-[11px] text-[#242220]/70 font-sans">
            {lang === "vi"
              ? "Tự do tải ảnh chân dung cá nhân của bạn"
              : "Upload your personal profile portrait"}
          </span>
        </div>
      </div>

      {/* Instruction Line Underneath */}
      <div className="flex items-start gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#1B3B2B]/15 text-[11px] text-[#242220]/85 max-w-lg">
        <AlertCircle className="w-3.5 h-3.5 text-[#7B0323] shrink-0 mt-0.5" />
        <div>
          <strong className="text-[#7B0323] font-semibold">
            {lang === "vi" ? "Hướng dẫn ảnh chân dung: " : "Recommended Photo: "}
          </strong>
          <span>
            {lang === "vi"
              ? "Tải ảnh chân dung cá nhân của Quỳnh Chi (ảnh cận cảnh hoặc nửa người, tỷ lệ vuông 1:1, hình ảnh rõ nét)."
              : "Upload a personal portrait of Quynh Chi (close-up or half-body shot, square 1:1 aspect ratio, high resolution)."}
          </span>
        </div>
      </div>
    </div>
  );
}
