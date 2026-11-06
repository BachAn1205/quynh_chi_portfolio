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

export interface HonorCardStaticData {
  id: number;
  slotId: string;
  title: string;
  subtitle: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
}

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

const STRATEGIC_HEADLINE = {
  vi: "Biến bài toán phức tạp thành giải pháp chiến lược.",
  en: "Turning complex problems into strategic solutions.",
};

const STRATEGIC_BODY = {
  vi: "Tôi phát triển chiến lược thương hiệu cho Chè 24, phân tích insight người tiêu dùng và trải nghiệm bảo tàng qua The Tactics, nghiên cứu xu hướng công nghệ và tăng trưởng thị trường với TERRA, đồng thời xây dựng mô hình tài chính và dự báo đầu tư cho RE:SOUL. Qua mỗi business case, tôi vận dụng phân tích thị trường, dữ liệu và tư duy kinh tế để phát triển các giải pháp kinh doanh khả thi.",
  en: "I developed brand strategy for Chè 24, analyzed consumer insights and museum experiences through The Tactics, researched technology trends and market growth with TERRA, and built financial models and investment forecasts for RE:SOUL. Across each business case, I apply market analysis, data analytics, and economic thinking to develop actionable business solutions.",
};

interface AcademicHonorsSectionProps {
  title: string | React.ReactNode;
}

export function AcademicHonorsSection({ title }: AcademicHonorsSectionProps) {
  const { lang } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
      {/* Left 5 Cols: Title + Card + Below-Card Blueprint Orbital Vector */}
      <div className="lg:col-span-5 flex flex-col">
        <div className="mb-4">
          <h3 className="font-anton text-lg sm:text-2xl lg:text-3xl uppercase tracking-tight text-[#242220] leading-tight">
            {title}
          </h3>
        </div>

        {/* THE TEXT CARD — khung tổng đỏ rượu vang gốc */}
        <div className="relative flex flex-col rounded-t-3xl rounded-b-2xl bg-[#FAF7F2] border border-[#7B0323] shadow-xs p-5 sm:p-6 lg:p-7 transition-all duration-300 overflow-hidden hover:border-[#5E021A]">
          {/* Corner Crosshairs — wine red */}
          <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-[#7B0323]/50 pointer-events-none" />
          <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-[#7B0323]/50 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-[#7B0323]/50 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-[#7B0323]/50 pointer-events-none" />

          <div className="relative z-10 flex flex-col space-y-3 sm:space-y-4">
            {/* Lead Title: đỏ rượu vang gốc #7B0323, +2 size, bold */}
            <h4
              style={{
                fontFamily:
                  "var(--font-lexend), 'Lexend', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
                color: "#7B0323",
              }}
              className="text-lg sm:text-xl lg:text-[22px] font-bold leading-snug tracking-tight m-0"
            >
              {lang === "vi" ? STRATEGIC_HEADLINE.vi : STRATEGIC_HEADLINE.en}
            </h4>

            {/* Subtle Wine Red Editorial Divider */}
            <div className="w-12 h-0.5 rounded-full bg-gradient-to-r from-[#7B0323] to-transparent ml-0.5" />

            {/* Body Paragraph */}
            <p
              style={{
                fontFamily:
                  "var(--font-lexend), 'Lexend', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
              }}
              className="text-sm sm:text-base lg:text-[17px] leading-relaxed sm:leading-loose text-[#630E24]/85 font-normal tracking-normal text-justify sm:text-left m-0"
            >
              {lang === "vi" ? STRATEGIC_BODY.vi : STRATEGIC_BODY.en}
            </p>
          </div>
        </div>

        {/* BELOW-CARD SPACE: ARCHITECTURAL BLUEPRINT & STRATEGIC CONVERGENCE VECTOR */}
        <div className="relative flex-1 flex flex-col justify-between min-h-[190px] -mt-1 pt-2 px-4 pb-4 rounded-b-3xl border-x border-b border-dashed border-[#1B3B2B]/25 bg-[#FAF7F2]/50 overflow-hidden select-none pointer-events-none">
          <svg
            viewBox="0 0 400 165"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full my-auto"
          >
            {/* 4 Convergence Streams flowing down from the 4 Business Cases */}
            <path
              d="M65 0 C 65 45, 155 45, 200 85"
              stroke="#1B3B2B"
              strokeWidth="1"
              strokeOpacity="0.3"
              strokeDasharray="3 3"
            />
            <path
              d="M145 0 C 145 35, 180 50, 200 85"
              stroke="#7B0323"
              strokeWidth="1.1"
              strokeOpacity="0.35"
            />
            <path
              d="M255 0 C 255 35, 220 50, 200 85"
              stroke="#7B0323"
              strokeWidth="1.1"
              strokeOpacity="0.35"
            />
            <path
              d="M335 0 C 335 45, 245 45, 200 85"
              stroke="#1B3B2B"
              strokeWidth="1"
              strokeOpacity="0.3"
              strokeDasharray="3 3"
            />

            {/* Top Connection Nodes */}
            <circle cx="65" cy="4" r="2.5" fill="#1B3B2B" fillOpacity="0.4" />
            <circle cx="145" cy="4" r="2.5" fill="#7B0323" fillOpacity="0.5" />
            <circle cx="255" cy="4" r="2.5" fill="#7B0323" fillOpacity="0.5" />
            <circle cx="335" cy="4" r="2.5" fill="#1B3B2B" fillOpacity="0.4" />

            {/* Overlapping Venn / Orbital Strategic Rings */}
            <circle
              cx="175"
              cy="92"
              r="38"
              stroke="#1B3B2B"
              strokeWidth="0.9"
              strokeOpacity="0.28"
            />
            <circle
              cx="225"
              cy="92"
              r="38"
              stroke="#7B0323"
              strokeWidth="0.9"
              strokeOpacity="0.28"
            />
            <circle
              cx="200"
              cy="92"
              r="54"
              stroke="#1B3B2B"
              strokeWidth="0.75"
              strokeDasharray="4 4"
              strokeOpacity="0.22"
            />

            {/* Econometric Growth Trajectory Curve Cutting Through the Synthesis Core */}
            <path
              d="M25 135 Q 115 130, 165 102 T 305 55 T 375 30"
              stroke="#7B0323"
              strokeWidth="1.5"
              strokeOpacity="0.55"
              strokeLinecap="round"
            />
            <circle cx="200" cy="85" r="4.5" fill="#7B0323" fillOpacity="0.8" />
            <circle
              cx="200"
              cy="85"
              r="9"
              stroke="#7B0323"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            <circle cx="305" cy="55" r="3" fill="#1B3B2B" fillOpacity="0.6" />
            <circle cx="120" cy="120" r="2.5" fill="#1B3B2B" fillOpacity="0.45" />

            {/* Architectural Ruler Ticks along the bottom */}
            <line
              x1="20"
              y1="152"
              x2="380"
              y2="152"
              stroke="#1B3B2B"
              strokeWidth="0.6"
              strokeOpacity="0.25"
            />
            {Array.from({ length: 19 }).map((_, i) => {
              const x = 20 + i * 20;
              const isMajor = i % 3 === 0;
              return (
                <line
                  key={i}
                  x1={x}
                  y1={isMajor ? 146 : 149}
                  x2={x}
                  y2="152"
                  stroke={isMajor ? "#7B0323" : "#1B3B2B"}
                  strokeWidth={isMajor ? "1" : "0.6"}
                  strokeOpacity={isMajor ? "0.45" : "0.25"}
                />
              );
            })}
          </svg>
        </div>
      </div>

      {/* Right 7 Cols: 4 Photos Grid */}
      <div className="lg:col-span-7 flex flex-col justify-between">
        {/* 4 Cards Grid (2x2) with 4/3 Aspect Ratio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {HONOR_CARDS.map((card) => (
            <SingleHonorCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface SingleHonorCardProps {
  card: HonorCardStaticData;
}

function SingleHonorCard({ card }: SingleHonorCardProps) {
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
      {/* Photo Upload Area - Enlarged with 4/3 Aspect Ratio */}
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
            {/* Quick Actions */}
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

      {/* Card Info Fixed Typography Directly Below */}
      <div className="mt-2.5 space-y-1">
        {/* Line 1: Title & Arrow */}
        <div className="flex items-center justify-between gap-1">
          <h4 className="font-anton text-base sm:text-lg uppercase tracking-tight text-[#242220] leading-snug m-0">
            {card.title}
          </h4>
          <ArrowUpRight className="w-4 h-4 text-[#242220]/40 shrink-0" />
        </div>

        {/* Line 2: Subtitle */}
        <p className="text-xs font-medium text-[#242220]/80 leading-snug line-clamp-2 m-0">
          {subtitleText}
        </p>

        {/* Line 3: Competition / Award Distinction */}
        <p className="font-mono text-[11px] text-[#7B0323] font-semibold leading-snug m-0">
          {descriptionText}
        </p>
      </div>
    </div>
  );
}
