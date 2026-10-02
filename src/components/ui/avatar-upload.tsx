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
  showGuide?: boolean;
}

export function AvatarUpload({
  slotId = "profile-avatar",
  sizeClass = "w-48 h-56 sm:w-60 sm:h-72 md:w-68 md:h-80 lg:w-76 lg:h-92",
  className = "",
  showGuide = true,
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
    const fileName = file.name.toLowerCase();
    const isImageExt = /\.(png|jpe?g|webp|gif|svg|jfif|bmp|avif)$/i.test(fileName);
    const isImageMime = file.type ? file.type.startsWith("image/") : false;

    if (!isImageMime && !isImageExt) {
      if (fileName.endsWith(".pdf") || file.type === "application/pdf") {
        alert(
          lang === "vi"
            ? "⚠️ Bạn đang chọn tệp PDF (thường do Canva mặc định chọn PDF).\n\n👉 Cách khắc phục: Trên Canva, bạn bấm 'Chia sẻ' > 'Tải xuống' > đổi mục 'Loại tệp' thành PNG hoặc JPG rồi tải lại nhé!"
            : "⚠️ You selected a PDF file. Please download as PNG or JPG and try again!"
        );
      } else if (fileName.endsWith(".zip") || file.type.includes("zip")) {
        alert(
          lang === "vi"
            ? "⚠️ Bạn đang chọn tệp nén ZIP. Vui lòng giải nén để lấy file ảnh PNG/JPG bên trong rồi tải lên nhé!"
            : "⚠️ You selected a ZIP file. Please extract the PNG/JPG image first!"
        );
      } else {
        alert(lang === "vi" ? "Vui lòng chọn một tệp hình ảnh (.png, .jpg, .webp)!" : "Please select an image file (.png, .jpg, .webp)!");
      }
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
    <div className={`flex flex-col items-center sm:items-start gap-3 ${className}`}>
      {/* Avatar Box */}
      <div
        onClick={() => fileInputRef.current?.click()}
        style={{ aspectRatio: "3 / 2" }}
        className={`relative ${sizeClass} rounded-3xl overflow-hidden shrink-0 shadow-lg border-2 cursor-pointer transition-all duration-300 group ${
          hasValidAvatar
            ? "border-[#1B3B2B]/30 bg-[#FAF7F2] hover:shadow-xl"
            : "border-dashed border-[#1B3B2B]/40 bg-[#E2ECE5]/50 hover:border-[#1B3B2B] hover:bg-[#E2ECE5]/80 hover:scale-[1.01]"
        }`}
        title={lang === "vi" ? "Nhấp để tải hoặc thay đổi ảnh chân dung" : "Click to upload or change portrait photo"}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg,image/webp,image/gif,image/*,.png,.jpg,.jpeg,.webp"
          className="hidden"
          onChange={handleFileChange}
        />

        {hasValidAvatar ? (
          <div className="absolute inset-0 w-full h-full">
            <img
              src={currentAvatar!}
              alt="Phan Hoàng Quỳnh Chi"
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="w-full h-full transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
              loading="eager"
              fetchPriority="high"
            />
            {/* Quick Actions overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3.5">
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  disabled={isUploading}
                  title={lang === "vi" ? "Đổi ảnh" : "Change photo"}
                  className="p-2 rounded-full bg-white/95 text-[#1B3B2B] shadow-md hover:bg-white hover:scale-110 transition-all"
                >
                  <RefreshCw className={`w-4 h-4 ${isUploading ? "animate-spin" : ""}`} />
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  title={lang === "vi" ? "Xóa ảnh" : "Remove photo"}
                  className="p-2 rounded-full bg-red-600 text-white shadow-md hover:bg-red-700 hover:scale-110 transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-white text-xs font-medium py-1 px-3 rounded-full bg-black/40 backdrop-blur-xs self-center">
                {lang === "vi" ? "Nhấp để thay ảnh mới" : "Click to change photo"}
              </div>
            </div>

            {uploadSuccess && (
              <div className="absolute bottom-2.5 right-2.5 bg-[#1B3B2B] text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-md flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{lang === "vi" ? "Đã lưu" : "Saved"}</span>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#1B3B2B]">
            {isUploading ? (
              <>
                <RefreshCw className="w-10 h-10 animate-spin text-[#7B0323] mb-3" />
                <span className="text-xs font-semibold text-[#7B0323]">
                  {lang === "vi" ? "Đang xử lý tải ảnh..." : "Processing upload..."}
                </span>
              </>
            ) : (
              <>
                <div className="w-14 h-14 rounded-2xl bg-[#1B3B2B]/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#1B3B2B]/20 transition-all">
                  <Camera className="w-7 h-7 text-[#1B3B2B]" />
                </div>
                <span className="font-anton text-sm sm:text-base uppercase tracking-wider text-[#242220] mb-1">
                  {lang === "vi" ? "Tải ảnh chân dung" : "Upload Portrait"}
                </span>
                <span className="text-[11px] text-[#242220]/65 leading-tight">
                  {lang === "vi"
                    ? "Nhấp vào khung hoặc kéo thả ảnh vào đây"
                    : "Click or drag and drop photo here"}
                </span>
              </>
            )}
          </div>
        )}
      </div>

      {/* Button & actions below avatar box */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={isUploading}
          onClick={() => fileInputRef.current?.click()}
          className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#7B0323]/30 text-[#7B0323] hover:bg-[#7B0323] hover:text-white text-xs font-semibold active:scale-95 transition-all flex items-center gap-1.5 shadow-2xs"
        >
          <Camera className="w-3.5 h-3.5" />
          <span>
            {hasValidAvatar
              ? lang === "vi"
                ? "Đổi ảnh chân dung"
                : "Change portrait"
              : lang === "vi"
              ? "Chọn ảnh tải lên"
              : "Select photo"}
          </span>
        </button>

        {hasValidAvatar && (
          <button
            type="button"
            onClick={handleDelete}
            title={lang === "vi" ? "Xóa ảnh" : "Remove"}
            className="p-1.5 rounded-full text-red-600 hover:bg-red-50 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {showGuide && (
        <span className="text-[11px] text-[#242220]/65 max-w-[400px] leading-tight text-center sm:text-left">
          {lang === "vi"
            ? "Gợi ý: Ảnh chân dung hoặc ảnh hoạt động nghệ thuật sắc nét."
            : "Recommended: Sharp portrait or artistic activity photo."}
        </span>
      )}
    </div>
  );
}
