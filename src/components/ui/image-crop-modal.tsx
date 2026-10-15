"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ZoomIn,
  Crop as CropIcon,
  Maximize2,
  Check,
  X,
  Smartphone,
  Monitor,
  Square,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

interface ImageCropModalProps {
  isOpen: boolean;
  imageFile: File | null;
  aspectRatio?: number; // e.g. 3/4, 4/5, 16/9, 4/3, 1
  onCropComplete: (croppedFile: File) => void;
  onClose: () => void;
}

export function ImageCropModal({
  isOpen,
  imageFile,
  aspectRatio = 3 / 4,
  onCropComplete,
  onClose,
}: ImageCropModalProps) {
  const { lang } = useLanguage();
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [selectedRatio, setSelectedRatio] = useState<number>(aspectRatio);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Sync ratio when prop changes
  useEffect(() => {
    setSelectedRatio(aspectRatio);
  }, [aspectRatio]);

  // Load image file to object URL
  useEffect(() => {
    if (!imageFile) {
      setImageSrc(null);
      return;
    }
    const url = URL.createObjectURL(imageFile);
    setImageSrc(url);
    setZoom(1);
    setRotation(0);
    setPan({ x: 0, y: 0 });

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [imageFile]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    setNaturalSize({ width: naturalWidth, height: naturalHeight });
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Mouse / Touch drag to pan
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    setZoom((prev) => Math.min(Math.max(prev + delta, 0.8), 3.5));
  };

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - pan.x,
        y: e.touches[0].clientY - pan.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPan({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y,
    });
  };

  const handleRatioChange = (newRatio: number) => {
    setSelectedRatio(newRatio);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleCrop = async () => {
    if (!imgRef.current || !containerRef.current || !imageFile) return;

    const img = imgRef.current;
    const cropBox = containerRef.current.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();

    // Canvas output setup
    const isPortrait = selectedRatio < 1;
    let outputWidth = Math.min(1920, naturalSize.width || 1600);
    let outputHeight = Math.round(outputWidth / selectedRatio);

    if (isPortrait) {
      outputHeight = Math.min(1920, naturalSize.height || 1600);
      outputWidth = Math.round(outputHeight * selectedRatio);
    }

    const canvas = document.createElement("canvas");
    canvas.width = outputWidth;
    canvas.height = outputHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingQuality = "high";

    // Scale factor between rendered image and natural image
    const scale = naturalSize.width / imgRect.width;

    const cropX = (cropBox.left - imgRect.left) * scale;
    const cropY = (cropBox.top - imgRect.top) * scale;
    const cropW = cropBox.width * scale;
    const cropH = cropBox.height * scale;

    ctx.save();
    // Fill background with clean white
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, outputWidth, outputHeight);

    // Draw the cropped portion to canvas
    ctx.drawImage(
      img,
      cropX,
      cropY,
      cropW,
      cropH,
      0,
      0,
      outputWidth,
      outputHeight
    );
    ctx.restore();

    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const originalName = imageFile.name.replace(/\.[^/.]+$/, "");
        const croppedFile = new File([blob], `${originalName}-cropped.jpg`, {
          type: "image/jpeg",
          lastModified: Date.now(),
        });
        onCropComplete(croppedFile);
        onClose();
      },
      "image/jpeg",
      0.93
    );
  };

  if (!isOpen || !imageSrc) return null;

  const isCurrentPortrait = selectedRatio < 1;

  const ratioOptions = [
    { label: "Dọc 3:4", value: 3 / 4, icon: Smartphone, tag: "Chuẩn dọc" },
    { label: "Dọc 4:5", value: 4 / 5, icon: Smartphone, tag: "Instagram" },
    { label: "Vuông 1:1", value: 1, icon: Square, tag: "1:1" },
    { label: "Ngang 4:3", value: 4 / 3, icon: Monitor, tag: "Ngang chuẩn" },
    { label: "Ngang 16:9", value: 16 / 9, icon: Monitor, tag: "Banner" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#FAF7F2] border border-[#1B3B2B]/20 shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-[#1B3B2B]/15 bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#7B0323] text-white flex items-center justify-center shadow-xs shrink-0">
              <CropIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-anton text-base sm:text-lg uppercase tracking-tight text-[#242220]">
                {lang === "vi" ? "Căn Chỉnh & Cắt Ảnh Full Khung" : "Crop & Position Photo"}
              </h3>
              <p className="text-[11px] text-[#242220]/65">
                {lang === "vi"
                  ? "Kéo ảnh để căn chỉnh vị trí. Bạn có thể chọn tỉ lệ Khung Dọc hoặc Ngang bên dưới."
                  : "Drag photo to reposition. You can switch between Portrait & Landscape ratios."}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/5 text-[#242220]/60 hover:text-[#242220] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Aspect Ratio Switcher Bar */}
        <div className="px-5 sm:px-6 py-2.5 bg-[#FAF7F2] border-b border-[#1B3B2B]/10 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#7B0323] flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {lang === "vi" ? "Tỉ lệ hiển thị:" : "Ratio:"}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {ratioOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = Math.abs(selectedRatio - opt.value) < 0.02;
              return (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => handleRatioChange(opt.value)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#7B0323] text-white shadow-xs"
                      : "bg-white text-[#242220]/75 border border-[#1B3B2B]/15 hover:border-[#7B0323]/50 hover:bg-white"
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Viewport / Crop Area */}
        <div
          className="relative flex-1 bg-[#151515] overflow-hidden flex items-center justify-center p-4 sm:p-6 select-none min-h-[350px] sm:min-h-[420px]"
          onWheel={handleWheel}
        >
          {/* Crop Boundary Box */}
          <div
            ref={containerRef}
            style={
              isCurrentPortrait
                ? {
                    aspectRatio: `${selectedRatio}`,
                    height: "min(390px, 55vh)",
                    width: `calc(min(390px, 55vh) * ${selectedRatio})`,
                    maxWidth: "92%",
                  }
                : {
                    aspectRatio: `${selectedRatio}`,
                    width: "min(92%, 560px)",
                    maxHeight: "390px",
                  }
            }
            className="relative overflow-hidden border-2 border-dashed border-[#FAF7F2] shadow-[0_0_0_9999px_rgba(0,0,0,0.72)] rounded-2xl cursor-grab active:cursor-grabbing transition-all duration-200"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* The Image Being Manipulated */}
            <img
              ref={imgRef}
              src={imageSrc}
              alt="Crop preview"
              onLoad={handleImageLoad}
              draggable={false}
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom}) rotate(${rotation}deg)`,
                transformOrigin: "center center",
                transition: isDragging ? "none" : "transform 0.1s ease-out",
                maxWidth: "none",
              }}
              className="absolute pointer-events-none select-none max-w-none"
            />

            {/* Rule of thirds grid lines */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-40">
              <div className="border-r border-b border-white/50" />
              <div className="border-r border-b border-white/50" />
              <div className="border-b border-white/50" />
              <div className="border-r border-b border-white/50" />
              <div className="border-r border-b border-white/50" />
              <div className="border-b border-white/50" />
              <div className="border-r border-b border-white/50" />
              <div className="border-r border-b border-white/50" />
              <div />
            </div>
          </div>
        </div>

        {/* Controls Toolbar */}
        <div className="px-5 sm:px-6 py-3.5 bg-white border-t border-[#1B3B2B]/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Zoom & Reset Tools */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <span className="text-xs font-mono font-semibold text-[#242220]/70 flex items-center gap-1.5 shrink-0">
              <ZoomIn className="w-3.5 h-3.5 text-[#7B0323]" />
              {lang === "vi" ? "Thu / Phóng:" : "Zoom:"}
            </span>
            <input
              type="range"
              min="0.8"
              max="3"
              step="0.05"
              value={zoom}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              className="w-28 sm:w-36 h-1.5 bg-[#1B3B2B]/15 rounded-lg appearance-none cursor-pointer accent-[#7B0323]"
            />
            <span className="text-xs font-mono text-[#242220]/60 w-10 text-right">
              {Math.round(zoom * 100)}%
            </span>

            <button
              type="button"
              onClick={() => {
                setZoom(1);
                setPan({ x: 0, y: 0 });
              }}
              title={lang === "vi" ? "Đặt lại vị trí" : "Reset position"}
              className="p-1.5 rounded-lg border border-[#1B3B2B]/15 text-[#242220]/70 hover:bg-[#FAF7F2] hover:text-[#242220] transition-colors ml-1 cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-[#1B3B2B]/20 text-xs font-semibold text-[#242220] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
            >
              {lang === "vi" ? "Hủy" : "Cancel"}
            </button>
            <button
              type="button"
              onClick={handleCrop}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#7B0323] hover:bg-[#5E021A] text-white text-xs font-semibold shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>{lang === "vi" ? "Cắt & Tải ảnh lên" : "Crop & Upload"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
