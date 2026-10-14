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
  Edit3,
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

const DEFAULT_TEXT_CONTENT = `Đạt Top 5 Tuyển chọn Toàn quốc (Xếp hạng 3 Quốc gia) tham gia Đội tuyển Olympic Kinh tế Quốc tế (IEO) cả 2 năm 2025 & 2026; Huy chương Đồng Quốc gia (National Bronze Medalist) tại Vietnam Economics Olympiad (VEO) 2025 & 2026.

Lọt vào Chung kết Toàn cầu (Top 30/2000 đội thi toàn thế giới) - Đội thi duy nhất đại diện Việt Nam được mời tham dự vòng chung kết trực tiếp tại khuôn viên Đại học Harvard (Mỹ). Đảm nhận vai trò Trưởng nhóm Tài chính & Chiến lược (Team Lead - Finance & Strategy), đồng phát triển mô hình tài chính dự báo doanh thu và bảng điều khiển mô phỏng CAC/LTV.

Đạt Giải Bạc (Silver Award) khu vực Châu Á & Châu Đại Dương và Top 10 Kiến thức Nền tảng (Top 10 Fundamentals) tại World Economics Cup (WEC 2025); Trưởng nhóm đưa đội lọt vào Top 10 Chung kết Toàn quốc (Top 10 Grand Final) tại Vietnam Business Innovation Challenge (VBIC 2025).

Top 50 Toàn quốc Học bổng ACCA Futurist 2025 (học bổng danh giá dành cho tài năng tài chính trẻ); Top 4 Cá nhân Vòng Chung kết phân ban Thương mại cuộc thi Aspiring Vietnam Contest 2025; Quán quân Toàn quốc giải Tranh biện DAS-DO Debate Open 2025 (4th Seed); Best Position Paper tại Hội nghị Mô phỏng LHQ VSGMUN 2026 (UNHCR).`;

const LOCAL_STORAGE_KEY = "quynhchi_honors_cards_data";
const LOCAL_STORAGE_TEXT_KEY = "quynhchi_honors_left_text";

interface AcademicHonorsSectionProps {
  title: string | React.ReactNode;
}

export function AcademicHonorsSection({ title }: AcademicHonorsSectionProps) {
  const { lang } = useLanguage();
  const [cards, setCards] = useState<HonorCardData[]>(DEFAULT_CARDS);
  const [textContent, setTextContent] = useState<string>(DEFAULT_TEXT_CONTENT);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

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
        setTextContent(cachedText);
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
        } else if (typeof data === "object") {
          if (Array.isArray(data.cards) && data.cards.length > 0) {
            setCards(data.cards);
          }
          if (typeof data.textContent === "string" && data.textContent.trim()) {
            setTextContent(data.textContent);
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
    try {
      // Save locally
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cards));
      localStorage.setItem(LOCAL_STORAGE_TEXT_KEY, textContent);

      // Save via API
      await fetch("/api/honors-cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cards,
          textContent,
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
      {/* Left 5 Cols: Title and Single Unified Card with Text Field */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-anton text-lg sm:text-2xl lg:text-3xl uppercase tracking-tight text-[#242220] leading-tight">
            {title}
          </h3>
        </div>

        {/* 1 Single Card with the same background as current cards, containing editable text field */}
        <div className="flex-1 flex flex-col rounded-3xl bg-[#FAF7F2] border border-[#1B3B2B]/15 shadow-xs p-4 sm:p-5 hover:border-[#1B3B2B]/35 transition-colors">
          <div className="flex items-center justify-between gap-2 pb-2.5 mb-2 border-b border-[#1B3B2B]/10">
            <span className="text-[11px] font-mono font-bold text-[#7B0323] uppercase tracking-wider flex items-center gap-1.5">
              <Edit3 className="w-3.5 h-3.5" />
              {lang === "vi" ? "Nội dung thành tích & giải thưởng" : "Honors & Achievements Content"}
            </span>
            <span className="text-[10px] text-[#242220]/50 italic">
              {lang === "vi" ? "Có thể nhập nội dung" : "Editable"}
            </span>
          </div>

          <textarea
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
            placeholder={
              lang === "vi"
                ? "Nhập nội dung các giải thưởng & thành tích học thuật..."
                : "Enter academic honors & achievements content..."
            }
            rows={14}
            className="w-full flex-1 bg-transparent text-xs sm:text-sm text-[#242220]/85 leading-relaxed focus:outline-none resize-none font-sans p-1 rounded-xl transition-all border border-transparent focus:border-[#7B0323]/30 focus:bg-white/60"
          />
        </div>
      </div>

      {/* Right 7 Cols: 4 Photos Grid (Enlarged, Reduced Gap, No Guideline Box) + Save Button */}
      <div className="lg:col-span-7 flex flex-col justify-center space-y-3.5">
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
