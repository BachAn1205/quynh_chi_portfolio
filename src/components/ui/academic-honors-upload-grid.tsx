"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  UploadCloud,
  ImageIcon,
  Trash2,
  RefreshCw,
  ArrowUpRight,
} from "lucide-react";
import { useProjectImages } from "@/lib/project-images-context";
import { useLanguage } from "@/lib/i18n";
import { HonorCardStaticData } from "./academic-honors-section";

const HONOR_CARDS: HonorCardStaticData[] = [
  {
    id: 1,
    slotId: "mind-honors-1",
    title: "CHÈ 24",
    subtitle: {
      vi: "Chiến lược thương hiệu & trải nghiệm",
      en: "Brand Strategy & Customer Experience",
    },
    description: {
      vi: "ASPIRING VIETNAM CONTEST 2025 • Top 4",
      en: "ASPIRING VIETNAM CONTEST 2025 • Top 4",
    },
  },
  {
    id: 2,
    slotId: "mind-honors-2",
    title: "THE TACTICS",
    subtitle: {
      vi: "Phân tích insight người tiêu dùng & đổi mới trải nghiệm bảo tàng",
      en: "Consumer Insights & Museum Experience Innovation",
    },
    description: {
      vi: "VIETNAM BUSINESS INNOVATION CHALLENGE • Top 10",
      en: "VIETNAM BUSINESS INNOVATION CHALLENGE • Top 10",
    },
  },
  {
    id: 3,
    slotId: "mind-honors-3",
    title: "TERRA",
    subtitle: {
      vi: "Đổi mới sáng tạo & phát triển bền vững",
      en: "Innovation & Sustainable Development",
    },
    description: {
      vi: "ASEEDER Business Simulation • Top 1",
      en: "ASEEDER Business Simulation • Top 1",
    },
  },
  {
    id: 4,
    slotId: "mind-honors-4",
    title: "RE:SOUL",
    subtitle: {
      vi: "Vận hành, logistics & tài chính",
      en: "Operations, Logistics & Finance",
    },
    description: {
      vi: "Phân tích mô hình kinh doanh & giải pháp tuần hoàn",
      en: "Business Model Analysis & Circular Solutions",
    },
  },
];

interface AcademicHonorsUploadGridProps {
  guideline?: {
    vi: string;
    en: string;
  } | string;
}

export function AcademicHonorsUploadGrid(_props: AcademicHonorsUploadGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {HONOR_CARDS.map((card) => (
        <SingleCard key={card.id} card={card} />
      ))}
    </div>
  );
}

function SingleCard({ card }: { card: HonorCardStaticData }) {
  const { getImage, uploadImage, deleteImage } = useProjectImages();
  const { lang } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [previewBlob, setPreviewBlob] = useState<string | null>(null);
  const [imageLoadError, setImageLoadError] = useState(false);

  const storedImage =
    getImage(card.slotId) ||
    (card.slotId === "mind-honors-1" ? getImage("mind-honors") : undefined);

  const currentImage = previewBlob || storedImage;

  useEffect(() => {
    setImageLoadError(false);
  }, [currentImage]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    validateAndUpload(file);
  };

  const validateAndUpload = (file: File) => {
    const fileName = file.name.toLowerCase();
    const isImageExt = /\.(png|jpe?g|webp|gif|svg|jfif|bmp|avif)$/i.test(fileName);
    const isImageMime = file.type ? file.type.startsWith("image/") : false;

    if (!isImageMime && !isImageExt) {
      alert(
        lang === "vi"
          ? "Vui lòng chọn một tệp hình ảnh (.png, .jpg, .webp)!"
          : "Please select an image file (.png, .jpg, .webp)!"
      );
      return;
    }

    processUpload(file);
  };

  const processUpload = async (file: File) => {
    const localUrl = URL.createObjectURL(file);
    setPreviewBlob(localUrl);
    setImageLoadError(false);

    try {
      setIsUploading(true);
      await uploadImage(card.slotId, file);
    } catch (err) {
      console.error(err);
      alert(
        lang === "vi"
          ? "Tải ảnh thất bại, vui lòng thử lại."
          : "Failed to upload image."
      );
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
        lang === "vi" ? "Bạn có chắc muốn xóa ảnh này?" : "Remove this image?"
      )
    ) {
      setPreviewBlob(null);
      setImageLoadError(false);
      await deleteImage(card.slotId);
      if (card.slotId === "mind-honors-1" && getImage("mind-honors")) {
        await deleteImage("mind-honors");
      }
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      validateAndUpload(file);
    }
  };

  const hasValidImage = Boolean(currentImage && !imageLoadError);
  const subtitleText = lang === "vi" ? card.subtitle.vi : card.subtitle.en;
  const descriptionText = lang === "vi" ? card.description.vi : card.description.en;

  return (
    <div className="flex flex-col rounded-2xl border border-[#1B3B2B]/15 bg-[#FAF7F2] p-2.5 sm:p-3 shadow-xs hover:border-[#1B3B2B]/35 transition-all duration-200">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={handleDrop}
        onClick={() => !hasValidImage && fileInputRef.current?.click()}
        className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden transition-all duration-200 ${
          hasValidImage
            ? "border border-[#1B3B2B]/15 bg-white group"
            : `border-2 border-dashed cursor-pointer ${
                isDragOver
                  ? "border-[#1B3B2B] bg-[#E2ECE5]/50 scale-[1.01]"
                  : "border-[#1B3B2B]/30 hover:border-[#7B0323] bg-white/60 hover:bg-white"
              }`
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg,image/webp,image/gif,image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {hasValidImage ? (
          <div className="absolute inset-0 w-full h-full">
            <img
              src={currentImage!}
              alt={card.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageLoadError(true)}
              loading="lazy"
            />
            <div className="absolute top-2 right-2 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                disabled={isUploading}
                title={lang === "vi" ? "Thay đổi ảnh" : "Change photo"}
                className="p-1.5 rounded-lg bg-white/95 text-[#1B3B2B] shadow hover:bg-white transition-all cursor-pointer"
              >
                <RefreshCw className={`w-3 h-3 ${isUploading ? "animate-spin" : ""}`} />
              </button>
              <button
                type="button"
                onClick={handleDelete}
                title={lang === "vi" ? "Xóa ảnh" : "Remove photo"}
                className="p-1.5 rounded-lg text-white bg-red-600/90 hover:bg-red-600 shadow transition-all cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
            <div className="w-10 h-10 rounded-xl bg-[#E2ECE5]/70 text-[#1B3B2B] flex items-center justify-center mb-2">
              {isUploading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <UploadCloud className="w-5 h-5" />
              )}
            </div>
            <button
              type="button"
              disabled={isUploading}
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="px-3 py-1.5 rounded-lg bg-[#7B0323] hover:bg-[#5E021A] text-white text-xs font-medium shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>{isUploading ? "..." : lang === "vi" ? "Tải ảnh" : "Upload"}</span>
            </button>
          </div>
        )}
      </div>

      <div className="mt-2.5 space-y-1">
        <div className="flex items-center justify-between gap-1">
          <h4 className="font-anton text-base sm:text-lg uppercase tracking-tight text-[#242220] leading-snug m-0">
            {card.title}
          </h4>
          <ArrowUpRight className="w-4 h-4 text-[#242220]/40 shrink-0" />
        </div>
        <p className="text-xs font-medium text-[#242220]/80 leading-snug line-clamp-2 m-0">
          {subtitleText}
        </p>
        <p className="font-mono text-[11px] text-[#7B0323] font-semibold leading-snug m-0">
          {descriptionText}
        </p>
      </div>
    </div>
  );
}
