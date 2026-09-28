"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowDown, FileText, Sparkles, ShieldCheck } from "lucide-react";
import { ResumeModal } from "@/components/ui/resume-modal";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);

  const pillars = [
    {
      id: 0,
      title: "CIRCULAR SYSTEMS & CAFLOOP",
      category: "// Circular Innovation",
      tag: "1.6M Tons Ag Waste",
      stat: "$80M Market Potential",
      image: "/images/quynhchi/hero-coffee-farm.jpg",
      alt: "Phan Hoàng Quỳnh Chi in Dak Lak Coffee Farm",
      description: "Transforming CO2-emitting coffee husks in Dak Lak into commercial Cascara tea and decentralized carbon credits (C4F).",
      link: "#the-mind",
    },
    {
      id: 1,
      title: "PREDICTIVE ECONOMETRICS",
      category: "// Quantitative Research",
      tag: "SPSS ANOVA & Logistic Regression",
      stat: "83.5% Model Accuracy",
      image: "/images/quynhchi/about-analyst.jpg",
      alt: "Data Analytics and Econometric Modeling",
      description: "Cross-sectional survey of 200 high school students proving a 3.482x odds increase in green career choices with statistical significance.",
      link: "#the-mind",
    },
    {
      id: 2,
      title: "T'RƯNG CULTURAL PRESERVATION",
      category: "// Cultural Advocacy & Soloist",
      tag: "12+ Schools Reached",
      stat: "2,300+ Students Impacted",
      image: "/images/quynhchi/trung-heritage.jpg",
      alt: "Traditional T'rưng Bamboo Instrument",
      description: "Synthesizing oral Central Highlands heritage into structured school curricula, digital archives, and urban concert showcases.",
      link: "#the-heart",
    },
  ];

  const current = pillars[activeSlide];

  return (
    <>
      <section className="relative pt-32 sm:pt-36 pb-12 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          {/* Top Pill / Badge */}


          {/* Top Headline Section */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 sm:mb-14">
            {/* Left: Avatar Sculpture + Name + Subtitle */}
            <div className="flex items-start sm:items-center gap-4 sm:gap-6">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-3xl overflow-hidden bg-[#24160e] shrink-0 shadow-md border-2 border-[#183e2b]/30">
                <Image
                  src="/images/quynhchi/avatar.jpg"
                  alt="Phan Hoàng Quỳnh Chi Portrait"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div>

                <h1 className="font-anton text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#1c1510] leading-none">
                  PHAN HOÀNG QUỲNH CHI
                </h1>
                <p className="text-base sm:text-xl text-[#183e2b] font-semibold mt-2">
                  Curious by nature. Strategic by thought. Driven to create.
                </p>
              </div>
            </div>

            {/* Right: Tagline */}
            <div className="max-w-md lg:text-right">
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-3.5 mb-12">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#183e2b] text-white hover:bg-[#122e20] transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white border border-[#d8d2c7] text-[#1c1510] hover:bg-[#f2eee6] hover:border-[#b8b0a2] transition-all duration-200 shadow-sm"
            >
              <FileText className="w-4 h-4 text-[#d9531e]" />
              <span>Download Full Resume</span>
            </button>
          </div>

          {/* Subtle Horizontal Divider */}
          <div className="border-t border-[#d8d2c7] mb-12" />

          {/* Featured Showcase Card Container */}
          <div className="relative rounded-3xl border border-[#d8d2c7] bg-[#f6f3eb] blueprint-grid p-6 sm:p-10 overflow-hidden shadow-sm">
            {/* Card Top Row: Pillar Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-20">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#d9531e] font-semibold mb-1">
                  <span>{current.category}</span>
                  <span>•</span>
                  <span className="text-[#183e2b]">{current.tag}</span>
                </div>
                <h2 className="font-anton text-2xl sm:text-4xl uppercase text-[#1c1510] tracking-tight">
                  {current.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#5e544a] mt-1 max-w-xl">
                  {current.description}
                </p>
              </div>

              {/* Right indicators and pagination */}
              <div className="flex flex-col sm:items-end gap-2.5 shrink-0">
                <div className="px-3 py-1 rounded-full bg-white border border-[#d8d2c7] text-xs font-mono font-bold text-[#183e2b] shadow-xs">
                  {current.stat}
                </div>
                <div className="flex items-center gap-2">
                  {pillars.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSlide(i)}
                      aria-label={`View slide ${i + 1}: ${item.title}`}
                      className={`h-2 rounded-full transition-all duration-300 ${i === activeSlide
                        ? "w-8 bg-[#183e2b]"
                        : "w-3 bg-black/20 hover:bg-black/40"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Preview Graphic */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] max-h-[500px] bg-[#1a201a] border border-[#d8d2c7] shadow-inner">
              <Image
                src={current.image}
                alt={current.alt}
                fill
                priority
                className="object-cover object-center transition-all duration-700"
              />

              {/* Data Overlay Badge on Bottom Right */}
              <div className="absolute right-4 bottom-4 z-20 backdrop-blur-md bg-black/60 border border-white/20 rounded-2xl p-4 text-white max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-xs text-[#22c55e] font-mono mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Central Highlands Field Research</span>
                </div>
                <div className="font-anton text-lg tracking-tight">
                  {current.tag}
                </div>
                <div className="text-[11px] text-white/80 mt-0.5">
                  Audited econometric &amp; field data • Dak Lak Province
                </div>
              </div>

              {/* Gradient overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* 3 Interactive Tab Selector Buttons */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {pillars.map((item, idx) => {
                const isSelected = idx === activeSlide;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`p-3.5 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${isSelected
                      ? "bg-[#183e2b] text-white border-[#183e2b] shadow-sm"
                      : "bg-white/80 text-[#1c1510] border-[#d8d2c7] hover:bg-white"
                      }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isSelected ? "text-[#22c55e]" : "text-[#d9531e]"
                        }`}>
                        {"// 0"}{idx + 1}
                      </span>
                      <span className={`text-[11px] font-mono ${isSelected ? "text-white/80" : "text-[#5e544a]"}`}>
                        {item.stat}
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

          {/* Scroll Mouse Icon Indicator */}
          <div className="mt-14 flex flex-col items-center">
            <a href="#about" aria-label="Scroll to About Me" className="group flex flex-col items-center">
              <div className="w-5 h-8 border-2 border-[#1c1510] rounded-full flex justify-center pt-1.5 transition-transform group-hover:translate-y-1">
                <div className="w-1 h-2 bg-[#d9531e] rounded-full animate-bounce" />
              </div>
              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-[#1c1510] mt-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
