"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { STATIC_PROJECT_IMAGES } from "@/lib/project-images-context";
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
  const { lang } = useLanguage();
  const imgSrc = STATIC_PROJECT_IMAGES[card.slotId] || "/images/static/mind-honors-1.jpg";
  const subtitleText = lang === "vi" ? card.subtitle.vi : card.subtitle.en;
  const descriptionText = lang === "vi" ? card.description.vi : card.description.en;

  return (
    <div className="flex flex-col rounded-2xl border border-[#1B3B2B]/15 bg-[#FAF7F2] p-2.5 sm:p-3 shadow-xs hover:border-[#1B3B2B]/35 transition-all duration-200">
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#1B3B2B]/15 bg-white">
        <Image
          src={imgSrc}
          alt={card.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 300px"
          unoptimized
        />
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
