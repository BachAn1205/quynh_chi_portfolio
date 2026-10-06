"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  FileText,
  ArrowUpRight,
  Package,
  TrendingUp,
  QrCode,
  Layers,
  HeartHandshake,
  Network,
  Sparkles,
} from "lucide-react";
import { ResumeModal } from "@/components/ui/resume-modal";
import { ProjectImageUpload } from "@/components/ui/project-image-upload";
import { AvatarUpload } from "@/components/ui/avatar-upload";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);
  const { t } = useLanguage();

  const founderRoles = [
    {
      icon: Package,
      titleKey: "hero.cafloop.role1.title",
      descKey: "hero.cafloop.role1.desc",
    },
    {
      icon: TrendingUp,
      titleKey: "hero.cafloop.role2.title",
      descKey: "hero.cafloop.role2.desc",
    },
    {
      icon: QrCode,
      titleKey: "hero.cafloop.role3.title",
      descKey: "hero.cafloop.role3.desc",
    },
    {
      icon: Layers,
      titleKey: "hero.cafloop.role4.title",
      descKey: "hero.cafloop.role4.desc",
    },
    {
      icon: HeartHandshake,
      titleKey: "hero.cafloop.role5.title",
      descKey: "hero.cafloop.role5.desc",
    },
    {
      icon: Network,
      titleKey: "hero.cafloop.role6.title",
      descKey: "hero.cafloop.role6.desc",
    },
  ];

  const pillars = [
    {
      id: 0,
      slotId: "hero-cafloop",
      title: t("hero.slide0.title"),
      category: t("hero.slide0.category"),
      tag: t("hero.slide0.tag"),
      stat: t("hero.slide0.stat"),
      guideline: {
        vi: "Ảnh Quỳnh Chi đang trực tiếp làm CAFLOOP / sản phẩm trà Cascara / quy trình phơi ủ xử lý / bao bì sản phẩm có mã QR.",
        en: "Quynh Chi working on CAFLOOP, Cascara tea products, processing workflows, or QR-traceable packaging."
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
      <section className="relative pt-32 sm:pt-36 pb-4 sm:pb-6 overflow-hidden blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Headline Section with Enlarged Avatar & Actions under Name */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 mb-10 sm:mb-14">
            {/* Left Column: Enlarged Landscape Avatar */}
            <div className="shrink-0 w-full md:w-auto flex justify-center md:block">
              <AvatarUpload
                sizeClass="w-full max-w-[340px] sm:max-w-[420px] md:w-[380px] lg:w-[460px] xl:w-[500px] aspect-[3/2]"
                showGuide={true}
              />
            </div>

            {/* Right Column: Name, Slogan, Badges & Action Buttons */}
            <div className="flex-1 flex flex-col justify-center pt-1 sm:pt-3 text-center md:text-left">
              <h1 className="font-anton text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.05] md:whitespace-nowrap">
                <span className="text-[#1B3B2B]">PHAN HOÀNG</span>{" "}
                <span className="text-[#7B0323]">QUỲNH CHI</span>
              </h1>
              <p className="text-xs sm:text-base md:text-lg text-[#7B0323] font-light tracking-wide mt-2 mb-6 min-h-[1.75rem] flex items-center justify-center md:justify-start">
                {t("hero.subtitle")}
              </p>

              {/* Action Buttons directly under the Name & Slogan */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#7B0323] text-white hover:bg-[#5E021A] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{t("hero.cta.explore")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => setResumeOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#FAF7F2] border border-[#7B0323]/25 text-[#242220] hover:bg-[#7B0323]/10 hover:border-[#7B0323]/50 transition-all duration-200 shadow-xs hover:shadow cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#7B0323]" />
                  <span>{t("hero.cta.resume")}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Subtle Horizontal Divider */}
          <div className="border-t border-[#1B3B2B]/15 mb-10 sm:mb-12" />

          {/* Featured Showcase Card */}
          <div className="relative rounded-3xl border border-[#1B3B2B]/15 bg-[#FFFFFF] blueprint-grid p-4 sm:p-8 lg:p-10 overflow-hidden shadow-sm">
            {activeSlide === 0 ? (
              /* ─── TAB 1: CAFLOOP FOUNDER SECTION (SLIDE 1 MOCKUP) ─── */
              <div>
                {/* Header: 01, Slogan, Intro & View Project CTA */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 relative z-20">
                  <div className="flex-1 min-w-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B0323]/10 border border-[#7B0323]/20 mb-2">
                      <span className="font-mono text-xs font-bold text-[#7B0323]">01</span>
                      <span className="text-[10px] font-mono uppercase text-[#7B0323] font-semibold tracking-wider">
                        {t("hero.slide0.category")}
                      </span>
                    </div>
                    <h2 className="font-anton text-2xl sm:text-3xl lg:text-4xl uppercase text-[#242220] tracking-tight leading-tight">
                      {t("hero.cafloop.slogan")}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#242220]/75 mt-2 max-w-3xl leading-relaxed">
                      {t("hero.cafloop.desc")}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-3 shrink-0 pt-1">
                    <Link
                      href="https://www.cafloop.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold bg-[#FAF7F2] border border-[#1B3B2B]/20 text-[#1B3B2B] hover:bg-[#1B3B2B] hover:text-white transition-all shadow-xs cursor-pointer"
                    >
                      <span>{t("hero.cafloop.viewProject")}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    {/* Slide Dots Indicator */}
                    <div className="flex items-center gap-2 pt-1">
                      {pillars.map((item, i) => (
                        <button
                          key={item.id}
                          onClick={() => setActiveSlide(i)}
                          aria-label={`View slide ${i + 1}: ${item.title}`}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === activeSlide
                            ? "w-8 bg-[#7B0323]"
                            : "w-3 bg-[#1B3B2B]/20 hover:bg-[#1B3B2B]/40"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Horizontal Image Upload */}
                <div className="relative">
                  <ProjectImageUpload
                    key="hero-cafloop"
                    slotId="hero-cafloop"
                    guideline={{
                      vi: "Ảnh Chi đang trực tiếp làm CAFLOOP / sản phẩm trà Cascara / quy trình xử lý phơi sấy / bao bì sản phẩm + mã QR truy xuất.",
                      en: "Photo of Quynh Chi working on CAFLOOP, Cascara tea products, processing workflows, or QR-traceable packaging."
                    }}
                    aspectRatio="aspect-[16/10] sm:aspect-[16/9]"
                    heightClass="min-h-[320px] sm:min-h-[440px] lg:min-h-[500px]"
                    objectFit="contain"
                  />
                </div>

                {/* Founder Section Header Bar */}
                <div className="mt-8 mb-4 px-4 py-2.5 rounded-2xl bg-[#E2ECE5]/70 border border-[#1B3B2B]/15 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#1B3B2B]" />
                    <span className="font-anton text-xs sm:text-sm uppercase tracking-wider text-[#1B3B2B]">
                      {t("hero.cafloop.founderRoles")}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-anton uppercase tracking-wider text-[#1B3B2B] font-bold">
                    {t("hero.cafloop.coreCapabilities")}
                  </span>
                </div>

                {/* 6 Founder Capabilities Grid: 2 dòng, mỗi dòng 3 thẻ */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 mb-2">
                  {founderRoles.map((role, rIdx) => {
                    const Icon = role.icon;
                    return (
                      <div
                        key={rIdx}
                        className="rounded-2xl border border-[#1B3B2B]/15 bg-[#FAF7F2] p-4 sm:p-5 flex flex-col justify-between hover:border-[#7B0323]/40 hover:shadow-xs transition-all duration-200 group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-[#1B3B2B]/10">
                            <span className="text-xs font-mono font-bold text-[#7B0323]">
                              0{rIdx + 1}
                            </span>
                            <Icon className="w-4 h-4 text-[#1B3B2B] group-hover:text-[#7B0323] transition-colors" />
                          </div>
                          <h4 className="font-anton text-xs sm:text-sm uppercase text-[#1B3B2B] mb-2 leading-snug tracking-tight">
                            {t(role.titleKey)}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-[#242220]/75 leading-relaxed">
                            {t(role.descKey)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* ─── TABS 2 & 3: STANDARD SHOWCASE LAYOUT ─── */
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 relative z-20">
                  <div className="flex-1 min-w-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B0323]/10 border border-[#7B0323]/20 mb-2">
                      <span className="font-mono text-xs font-bold text-[#7B0323]">
                        0{activeSlide + 1}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-[#7B0323] font-semibold tracking-wider">
                        {current.category}
                      </span>
                    </div>
                    <h2 className="font-anton text-xl sm:text-3xl lg:text-4xl uppercase text-[#242220] tracking-tight">
                      {current.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#242220]/70 mt-1 max-w-xl min-h-[2.5rem] sm:min-h-[2.75rem] leading-relaxed">
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
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === activeSlide
                            ? "w-8 bg-[#7B0323]"
                            : "w-3 bg-[#1B3B2B]/20 hover:bg-[#1B3B2B]/40"
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
              </div>
            )}

            {/* 3 Tab Selector Buttons */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#1B3B2B]/10">
              {pillars.map((item, idx) => {
                const isSelected = idx === activeSlide;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`p-3.5 rounded-2xl text-left border transition-all duration-200 cursor-pointer h-full min-h-[70px] flex flex-col justify-between ${isSelected
                      ? "bg-[#1B3B2B] text-white border-[#1B3B2B] shadow-sm"
                      : "bg-[#FAF7F2] text-[#242220] border-[#1B3B2B]/15 hover:bg-[#E2ECE5]/50"
                      }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isSelected ? "text-[#E2ECE5]" : "text-[#7B0323]"}`}>
                        {item.title.includes(":") ? item.title.split(":")[0].trim() : `0${idx + 1}`}
                      </span>
                    </div>
                    <div className="font-anton text-xs sm:text-sm uppercase tracking-tight line-clamp-1">
                      {item.title.includes(":") ? item.title.split(":")[1].trim() : item.title}
                    </div>
                    <div className={`text-[10px] font-mono mt-1 line-clamp-1 ${isSelected ? "text-white/80" : "text-[#242220]/65"}`}>
                      {item.category}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-6 sm:mt-8 flex flex-col items-center">
            <Link href="/about" aria-label="Go to About Me" className="group flex flex-col items-center cursor-pointer">
              <div className="w-5 h-8 border-2 border-[#242220] rounded-full flex justify-center pt-1.5 transition-transform group-hover:translate-y-1">
                <div className="w-1 h-2 bg-[#7B0323] rounded-full animate-bounce" />
              </div>
              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-[#242220] mt-1" />
            </Link>
          </div>
        </div>
      </section>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
