"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  UploadCloud,
  ImageIcon,
  Trash2,
  RefreshCw,
  AlertCircle,
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

const LOCAL_STORAGE_KEY = "quynhchi_honors_cards_data";

interface AcademicHonorsUploadGridProps {
  guideline?: {
    vi: string;
    en: string;
  } | string;
}

export function AcademicHonorsUploadGrid({
  guideline,
}: AcademicHonorsUploadGridProps) {
  const { lang } = useLanguage();
  const [cards, setCards] = useState<HonorCardData[]>(DEFAULT_CARDS);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Load saved text data on mount
  useEffect(() => {
    // 1. Try local storage first for instant load
    try {
      const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCards(parsed);
        }
      }
    } catch {
      // ignore
    }

    // 2. Sync with API
    fetch("/api/honors-cards")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setCards(data);
          try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
          } catch {
            // ignore
          }
        }
      })
      .catch((err) => {
        console.warn("Could not sync honors cards:", err);
      });
  }, []);

  const handleTextChange = (
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
    try {
      // Save locally
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cards));

      // Save via API
      await fetch("/api/honors-cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cards),
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

  const instructionText =
    typeof guideline === "string"
      ? guideline
      : lang === "vi"
      ? guideline?.vi
      : guideline?.en;

  return (
    <div className="w-full flex flex-col gap-4">
      {/* 4 Cards Grid (2x2) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {cards.map((card, idx) => (
          <SingleHonorCard
            key={card.id || idx}
            card={card}
            index={idx}
            onChange={handleTextChange}
          />
        ))}
      </div>

      {/* Save Button Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={handleSave}
          disabled={isSaving}
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white transition-all shadow-sm active:scale-95 cursor-pointer ${
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
            ? "Nhập văn bản bên dưới mỗi ảnh và bấm Lưu để lưu trữ"
            : "Edit text below photos and click Save"}
        </span>
      </div>

      {/* Guideline Box Directly Underneath */}
      {instructionText && (
        <div className="flex items-start gap-2 px-3 py-2.5 rounded-xl text-xs leading-relaxed bg-[#FAF7F2] border border-[#1B3B2B]/15 text-[#242220]/85">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#7B0323]" />
          <div>
            <strong className="font-semibold text-[#7B0323]">
              {lang === "vi" ? "Ảnh phù hợp mô tả: " : "Recommended Photo: "}
            </strong>
            <span>{instructionText}</span>
          </div>
        </div>
      )}
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

  // Fallback to mind-honors if mind-honors-1 is empty
  const storedImage =
    getImage(card.slotId) ||
    (card.slotId === "mind-honors-1" ? getImage("mind-honors") : undefined);

  const currentImage = previewBlob || storedImage;

  useEffect(() => {
    setImageLoadError(false);
  }, [currentImage]);

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
      alert(lang === "vi" ? "Vui lòng chọn một tệp hình ảnh (.png, .jpg, .webp)!" : "Please select an image file (.png, .jpg, .webp)!");
      return;
    }

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
    <div className="flex flex-col rounded-2xl border border-[#1B3B2B]/15 bg-[#FAF7F2] p-2.5 sm:p-3 shadow-xs hover:border-[#1B3B2B]/35 transition-all duration-200">
      {/* Photo Upload Area */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={handleDrop}
        onClick={() => !hasValidImage && fileInputRef.current?.click()}
        className={`relative w-full aspect-[16/10] rounded-xl overflow-hidden transition-all duration-200 ${
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
            <div className="w-9 h-9 rounded-xl bg-[#E2ECE5]/70 text-[#1B3B2B] flex items-center justify-center mb-1.5">
              {isUploading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <UploadCloud className="w-4 h-4" />
              )}
            </div>
            <button
              type="button"
              disabled={isUploading}
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="px-2.5 py-1 rounded-lg bg-[#7B0323] hover:bg-[#5E021A] text-white text-[11px] font-medium shadow-xs flex items-center gap-1 transition-all cursor-pointer"
            >
              <ImageIcon className="w-3 h-3" />
              <span>{isUploading ? "..." : lang === "vi" ? "Tải ảnh" : "Upload"}</span>
            </button>
          </div>
        )}
      </div>

      {/* Text Editing Inputs Directly Below */}
      <div className="mt-2.5 space-y-1.5">
        {/* Line 1: Title */}
        <div className="flex items-center justify-between gap-1">
          <input
            type="text"
            value={card.title}
            onChange={(e) => onChange(index, "title", e.target.value)}
            placeholder={lang === "vi" ? "Tên dự án (VD: Chè 24)" : "Project title"}
            className="w-full font-anton text-sm uppercase tracking-tight text-[#242220] bg-transparent border-b border-transparent hover:border-[#1B3B2B]/20 focus:border-[#7B0323] focus:bg-white px-1 py-0.5 rounded transition-all outline-none"
          />
          <ArrowUpRight className="w-3.5 h-3.5 text-[#242220]/40 shrink-0" />
        </div>

        {/* Line 2: Subtitle / Field */}
        <input
          type="text"
          value={card.subtitle}
          onChange={(e) => onChange(index, "subtitle", e.target.value)}
          placeholder={lang === "vi" ? "Chiến lược thương hiệu & trải nghiệm" : "Subtitle / Field"}
          className="w-full text-[11px] font-medium text-[#242220]/80 bg-transparent border-b border-transparent hover:border-[#1B3B2B]/20 focus:border-[#7B0323] focus:bg-white px-1 py-0.5 rounded transition-all outline-none"
        />

        {/* Line 3: Competition / Achievement Details */}
        <input
          type="text"
          value={card.description}
          onChange={(e) => onChange(index, "description", e.target.value)}
          placeholder={lang === "vi" ? "ASPIRING VIETNAM CONTEST 2025 • Top 4" : "Contest & Distinction"}
          className="w-full font-mono text-[10px] text-[#7B0323] font-semibold bg-transparent border-b border-transparent hover:border-[#1B3B2B]/20 focus:border-[#7B0323] focus:bg-white px-1 py-0.5 rounded transition-all outline-none"
        />
      </div>
    </div>
  );
}
