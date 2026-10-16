"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  UploadCloud,
  ImageIcon,
  Trash2,
  RefreshCw,
  CheckCircle2,
  Save,
  ArrowUpRight,
} from "lucide-react";
import { useProjectImages } from "@/lib/project-images-context";
import { useLanguage } from "@/lib/i18n";

export interface HonorCardData {
  id: number;
  slotId: string;
  title: string;
  subtitle: string;
  description: string;
}

const DEFAULT_CARDS: HonorCardData[] = [
  {
    id: 1,
    slotId: "mind-honors-1",
    title: "Chè 24",
    subtitle: "Chiến lược thương hiệu & trải nghiệm",
    description: "ASPIRING VIETNAM CONTEST 2025 • Top 4",
  },
  {
    id: 2,
    slotId: "mind-honors-2",
    title: "Loom Lore",
    subtitle: "Sản phẩm văn hóa & thấu hiểu người tiêu dùng",
    description: "ASPIRING VIETNAM CONTEST 2025 • Top 4",
  },
  {
    id: 3,
    slotId: "mind-honors-3",
    title: "TERRA",
    subtitle: "Đổi mới sáng tạo & phát triển bền vững",
    description: "ASEEDER Business Simulation • Top 1",
  },
  {
    id: 4,
    slotId: "mind-honors-4",
    title: "KEY COMMERCE",
    subtitle: "Vận hành, logistics & tài chính",
    description: "Phân tích mô hình kinh doanh & giải pháp tuần hoàn",
  },
];

const DEFAULT_HEADLINE = "Turning complex problems into strategic solutions.";
const DEFAULT_BODY_CONTENT = `Tôi phát triển chiến lược thương hiệu cho Chè 24, phân tích insight người tiêu dùng và trải nghiệm bảo tàng qua The Tactics, nghiên cứu xu hướng công nghệ và tăng trưởng thị trường với TERRA, đồng thời xây dựng mô hình tài chính và dự báo đầu tư cho RE:SOUL. Qua mỗi business case, tôi vận dụng phân tích thị trường, dữ liệu và tư duy kinh tế để phát triển các giải pháp kinh doanh khả thi.`;

const DEFAULT_TEXT_CONTENT = `${DEFAULT_HEADLINE}\n\n${DEFAULT_BODY_CONTENT}`;

const LOCAL_STORAGE_KEY = "quynhchi_honors_cards_data";
const LOCAL_STORAGE_TEXT_KEY = "quynhchi_honors_left_text";

function splitHeadlineAndBody(raw: string): { headline: string; body: string } {
  const trimmed = (raw || "").trim();
  if (!trimmed) {
    return { headline: DEFAULT_HEADLINE, body: DEFAULT_BODY_CONTENT };
  }
  const paragraphs = trimmed.split(/\n\s*\n/);
  if (paragraphs.length >= 2) {
    return {
      headline: paragraphs[0].trim(),
      body: paragraphs.slice(1).join("\n\n").trim(),
    };
  }
  // If old cached text didn't have the English headline yet, prepend it
  if (!trimmed.toLowerCase().includes("turning complex problems")) {
    return {
      headline: DEFAULT_HEADLINE,
      body: trimmed,
    };
  }
  return { headline: DEFAULT_HEADLINE, body: DEFAULT_BODY_CONTENT };
}

interface AcademicHonorsSectionProps {
  title: string | React.ReactNode;
}

export function AcademicHonorsSection({ title }: AcademicHonorsSectionProps) {
  const { lang } = useLanguage();
  const [cards, setCards] = useState<HonorCardData[]>(DEFAULT_CARDS);
  const [headlineText, setHeadlineText] = useState<string>(DEFAULT_HEADLINE);
  const [bodyText, setBodyText] = useState<string>(DEFAULT_BODY_CONTENT);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const headlineRef = useRef<HTMLTextAreaElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize both headline and body textareas to fit content dynamically
  useEffect(() => {
    if (headlineRef.current) {
      headlineRef.current.style.height = "auto";
      headlineRef.current.style.height = `${headlineRef.current.scrollHeight}px`;
    }
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [headlineText, bodyText]);

  // Load saved data on mount
  useEffect(() => {
    // 1. LocalStorage for instant render
    try {
      const cachedCards = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (cachedCards) {
        const parsed = JSON.parse(cachedCards);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCards(parsed);
        }
      }

      const cachedText = localStorage.getItem(LOCAL_STORAGE_TEXT_KEY);
      if (cachedText) {
        const { headline, body } = splitHeadlineAndBody(cachedText);
        setHeadlineText(headline);
        setBodyText(body);
      }
    } catch {
      // ignore
    }

    // 2. Fetch from API
    fetch("/api/honors-cards")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!data) return;

        if (Array.isArray(data) && data.length > 0) {
          setCards(data);
          try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
          } catch {
            // ignore
          }
        } else if (typeof data === "object") {
          if (Array.isArray(data.cards) && data.cards.length > 0) {
            setCards(data.cards);
            try {
              localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data.cards));
            } catch {
              // ignore
            }
          }
          if (typeof data.textContent === "string" && data.textContent.trim()) {
            const { headline, body } = splitHeadlineAndBody(data.textContent);
            setHeadlineText(headline);
            setBodyText(body);
            try {
              localStorage.setItem(LOCAL_STORAGE_TEXT_KEY, `${headline}\n\n${body}`);
            } catch {
              // ignore
            }
          }
        }
      })
      .catch((err) => {
        console.warn("Could not sync honors data:", err);
      });
  }, []);

  const handleCardTextChange = (
    index: number,
    field: keyof Omit<HonorCardData, "id" | "slotId">,
    value: string
  ) => {
    setCards((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [field]: value,
      };
      return updated;
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    const combinedTextContent = `${headlineText.trim()}\n\n${bodyText.trim()}`;
    try {
      // Save locally
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cards));
      localStorage.setItem(LOCAL_STORAGE_TEXT_KEY, combinedTextContent);

      // Save via API
      await fetch("/api/honors-cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cards,
          textContent: combinedTextContent,
        }),
      });

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      console.error("Save error:", err);
      alert(
        lang === "vi"
          ? "Đã lưu vào bộ nhớ trình duyệt!"
          : "Saved to browser memory!"
      );
    } finally {
      setIsSaving(false);
    }
  };

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
            {/* Lead Title: đỏ rượu vang gốc #7B0323, +2 size, bold như tiêu đề */}
            <textarea
              ref={headlineRef}
              value={headlineText}
              onChange={(e) => setHeadlineText(e.target.value)}
              rows={2}
              placeholder="Turning complex problems into strategic solutions."
              style={{
                fontFamily:
                  "var(--font-lexend), 'Lexend', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
                color: "#7B0323",
              }}
              className="w-full bg-transparent text-lg sm:text-xl lg:text-[22px] font-bold leading-snug focus:outline-none resize-none p-1 rounded-xl transition-all border border-transparent focus:border-[#7B0323]/40 focus:bg-white/60 overflow-hidden tracking-tight caret-[#7B0323]"
            />

            {/* Subtle Wine Red Editorial Divider */}
            <div className="w-12 h-0.5 rounded-full bg-gradient-to-r from-[#7B0323] to-transparent ml-1" />

            {/* Body Paragraph */}
            <textarea
              ref={textareaRef}
              value={bodyText}
              onChange={(e) => setBodyText(e.target.value)}
              placeholder={
                lang === "vi"
                  ? "Nhập nội dung chiến lược & dự án..."
                  : "Enter strategic content..."
              }
              style={{
                fontFamily:
                  "var(--font-lexend), 'Lexend', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
              }}
              className="w-full bg-transparent text-sm sm:text-base lg:text-[17px] leading-relaxed sm:leading-loose text-[#630E24]/85 font-normal focus:outline-none resize-none p-1 rounded-xl transition-all border border-transparent focus:border-[#7B0323]/30 focus:bg-white/60 overflow-hidden tracking-normal"
            />
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
            {/* 4 Convergence Streams flowing down from the 4 Business Cases mentioned in the text */}
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

      {/* Right 7 Cols: 4 Photos Grid + Save Button */}
      <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
        {/* 4 Cards Grid (2x2) with larger photo aspect ratio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {cards.map((card, idx) => (
            <SingleHonorCard
              key={card.id || idx}
              card={card}
              index={idx}
              onChange={handleCardTextChange}
            />
          ))}
        </div>

        {/* Action Row: Save Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs text-white transition-all shadow-sm active:scale-95 cursor-pointer ${
              saveSuccess
                ? "bg-[#1B3B2B] hover:bg-[#1B3B2B]"
                : "bg-[#7B0323] hover:bg-[#5E021A]"
            }`}
          >
            {saveSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>{lang === "vi" ? "Đã lưu thành công!" : "Saved successfully!"}</span>
              </>
            ) : isSaving ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>{lang === "vi" ? "Đang lưu..." : "Saving..."}</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>{lang === "vi" ? "Lưu thông tin" : "Save information"}</span>
              </>
            )}
          </button>

          <span className="text-[11px] text-[#242220]/60 italic text-center sm:text-right">
            {lang === "vi"
              ? "Chỉnh sửa nội dung thẻ & mô tả ảnh rồi bấm Lưu"
              : "Edit card content & photos text, then click Save"}
          </span>
        </div>
      </div>
    </div>
  );
}

interface SingleHonorCardProps {
  card: HonorCardData;
  index: number;
  onChange: (
    index: number,
    field: keyof Omit<HonorCardData, "id" | "slotId">,
    value: string
  ) => void;
}

function SingleHonorCard({ card, index, onChange }: SingleHonorCardProps) {
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
      alert(lang === "vi" ? "Vui lòng chọn một tệp hình ảnh (.png, .jpg, .webp)!" : "Please select an image file (.png, .jpg, .webp)!");
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
      alert(lang === "vi" ? "Tải ảnh thất bại, vui lòng thử lại." : "Failed to upload image.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm(lang === "vi" ? "Bạn có chắc muốn xóa ảnh này?" : "Remove this image?")) {
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

  return (
    <div className="flex flex-col rounded-2xl border border-[#1B3B2B]/15 bg-[#FAF7F2] p-2 sm:p-2.5 shadow-xs hover:border-[#1B3B2B]/35 transition-all duration-200">
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

      {/* Text Editing Inputs Directly Below - Reduced Line Spacing, Increased Title Size */}
      <div className="mt-2 space-y-0.5">
        {/* Line 1: Title (Increased size: font-anton text-base sm:text-lg) */}
        <div className="flex items-center justify-between gap-1">
          <input
            type="text"
            value={card.title}
            onChange={(e) => onChange(index, "title", e.target.value)}
            placeholder={lang === "vi" ? "Tên dự án (VD: Chè 24)" : "Project title"}
            className="w-full font-anton text-base sm:text-lg uppercase tracking-tight text-[#242220] bg-transparent border-b border-transparent hover:border-[#1B3B2B]/20 focus:border-[#7B0323] focus:bg-white px-1 py-0 rounded transition-all outline-none leading-snug"
          />
          <ArrowUpRight className="w-4 h-4 text-[#242220]/40 shrink-0" />
        </div>

        {/* Line 2: Subtitle / Field (Tight spacing) */}
        <input
          type="text"
          value={card.subtitle}
          onChange={(e) => onChange(index, "subtitle", e.target.value)}
          placeholder={lang === "vi" ? "Chiến lược thương hiệu & trải nghiệm" : "Subtitle / Field"}
          className="w-full text-xs font-medium text-[#242220]/80 bg-transparent border-b border-transparent hover:border-[#1B3B2B]/20 focus:border-[#7B0323] focus:bg-white px-1 py-0 rounded transition-all outline-none leading-snug"
        />

        {/* Line 3: Competition / Achievement Details (Tight spacing) */}
        <input
          type="text"
          value={card.description}
          onChange={(e) => onChange(index, "description", e.target.value)}
          placeholder={lang === "vi" ? "ASPIRING VIETNAM CONTEST 2025 • Top 4" : "Contest & Distinction"}
          className="w-full font-mono text-[11px] text-[#7B0323] font-semibold bg-transparent border-b border-transparent hover:border-[#1B3B2B]/20 focus:border-[#7B0323] focus:bg-white px-1 py-0 rounded transition-all outline-none leading-snug"
        />
      </div>

    </div>
  );
}
