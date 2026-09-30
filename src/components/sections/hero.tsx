"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowDown, FileText, ShieldCheck } from "lucide-react";
import { ResumeModal } from "@/components/ui/resume-modal";
import { ProjectImageUpload } from "@/components/ui/project-image-upload";
import { AvatarUpload } from "@/components/ui/avatar-upload";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);
  const { t } = useLanguage();

  const pillars = [
    {
      id: 0,
      slotId: "hero-cafloop",
      title: t("hero.slide0.title"),
      category: t("hero.slide0.category"),
      tag: t("hero.slide0.tag"),
      stat: t("hero.slide0.stat"),
      guideline: {
        vi: "Ảnh minh họa dự án CAFLOOP: Vỏ cà phê, quy trình phơi sấy, hoặc bao bì thương mại có mã QR.",
        en: "CAFLOOP project photo: coffee husk, drying process, or commercial QR packaging."
      },
      alt: "Phan Hoàng Quỳnh Chi in Dak Lak Coffee Farm",
      description: t("hero.slide0.desc"),
      link: "#the-mind",
    },
    {
      id: 1,
      slotId: "hero-econometrics",
      title: t("hero.slide1.title"),
      category: t("hero.slide1.category"),
      tag: t("hero.slide1.tag"),
      stat: t("hero.slide1.stat"),
      guideline: {
        vi: "Ảnh minh họa nghiên cứu định lượng: Biểu đồ hồi quy SPSS, bảng mô hình kinh tế lượng hoặc khảo sát thực địa.",
        en: "Quantitative research photo: SPSS regression charts, econometric tables, or field survey."
      },
      alt: "Data Analytics and Econometric Modeling",
      description: t("hero.slide1.desc"),
      link: "#the-mind",
    },
    {
      id: 2,
      slotId: "hero-trung",
      title: t("hero.slide2.title"),
      category: t("hero.slide2.category"),
      tag: t("hero.slide2.tag"),
      stat: t("hero.slide2.stat"),
      guideline: {
        vi: "Ảnh minh họa di sản văn hóa: Độc tấu đàn T'rưng Tây Nguyên hoặc lớp học truyền dạy âm nhạc truyền thống.",
        en: "Cultural heritage photo: Traditional T'rưng performance or classroom workshop."
      },
      alt: "Traditional T'rưng Bamboo Instrument",
      description: t("hero.slide2.desc"),
      link: "#the-heart",
    },
  ];

  const current = pillars[activeSlide];

  return (
    <>
      <section className="relative pt-32 sm:pt-36 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Headline Section */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10 sm:mb-14">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <AvatarUpload />
              <div>
                <h1 className="font-anton text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#2C2E2B] leading-none">
                  PHAN HOÀNG QUỲNH CHI
                </h1>
                <p className="text-base sm:text-xl text-[#335C33] font-semibold mt-2 min-h-[1.75rem] flex items-center">
                  {t("hero.subtitle")}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-3.5 mb-12">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#335C33] text-[#F6F6EE] hover:bg-[#284828] transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              <span>{t("hero.cta.explore")}</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#FAF9F2] border border-[#335C33]/25 text-[#2C2E2B] hover:bg-[#E3EDD3] hover:border-[#335C33]/40 transition-all duration-200 shadow-sm"
            >
              <FileText className="w-4 h-4 text-[#8C5A35]" />
              <span>{t("hero.cta.resume")}</span>
            </button>
          </div>

          {/* Subtle Horizontal Divider */}
          <div className="border-t border-[#335C33]/15 mb-12" />

          {/* Featured Showcase Card */}
          <div className="relative rounded-3xl border border-[#335C33]/20 bg-[#FAF9F2] blueprint-grid p-6 sm:p-10 overflow-hidden shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 relative z-20">
              <div className="flex-1 min-w-0">
                <h2 className="font-anton text-2xl sm:text-4xl uppercase text-[#2C2E2B] tracking-tight">
                  {current.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#2C2E2B]/60 mt-1 max-w-xl min-h-[2.5rem] sm:min-h-[2.75rem] leading-relaxed">
                  {current.description}
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-2.5 shrink-0 pt-1">
                <div className="flex items-center gap-2">
                  {pillars.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSlide(i)}
                      aria-label={`View slide ${i + 1}: ${item.title}`}
                      className={`h-2 rounded-full transition-all duration-300 ${i === activeSlide
                        ? "w-8 bg-[#335C33]"
                        : "w-3 bg-[#335C33]/20 hover:bg-[#335C33]/40"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Project Image Upload & Preview */}
            <div className="relative">
              <ProjectImageUpload
                key={current.slotId}
                slotId={current.slotId}
                guideline={current.guideline}
                aspectRatio="aspect-[16/9] sm:aspect-[21/9]"
                heightClass="min-h-[260px] sm:min-h-[380px]"
              />
            </div>

            {/* 3 Tab Selector Buttons */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {pillars.map((item, idx) => {
                const isSelected = idx === activeSlide;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`p-3.5 rounded-2xl text-left border transition-all duration-200 cursor-pointer h-full min-h-[70px] flex flex-col justify-between ${isSelected
                      ? "bg-[#335C33] text-[#F6F6EE] border-[#335C33] shadow-sm"
                      : "bg-[#FAF9F2]/80 text-[#2C2E2B] border-[#335C33]/20 hover:bg-[#E3EDD3]/50"
                      }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isSelected ? "text-[#E3EDD3]" : "text-[#8C5A35]"}`}>
                        {"0"}{idx + 1}
                      </span>
                    </div>
                    <div className="font-anton text-xs sm:text-sm uppercase tracking-tight line-clamp-1">
                      {item.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-14 flex flex-col items-center">
            <a href="#about" aria-label="Scroll to About Me" className="group flex flex-col items-center">
              <div className="w-5 h-8 border-2 border-[#2C2E2B] rounded-full flex justify-center pt-1.5 transition-transform group-hover:translate-y-1">
                <div className="w-1 h-2 bg-[#335C33] rounded-full animate-bounce" />
              </div>
              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-[#2C2E2B] mt-1" />
            </a>
          </div>
        </div>
      </section>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
