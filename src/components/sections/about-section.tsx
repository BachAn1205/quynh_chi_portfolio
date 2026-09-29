"use client";

import Image from "next/image";
import { User, TrendingUp, BarChart3, Binary } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function AboutSection() {
  const { t } = useLanguage();

  const dataPills = [
    { label: "1.6M Tons Ag Waste", bg: "bg-[#335C33] text-[#F6F6EE] -rotate-3" },
    { label: "1.8M Tons CO2 Impact", bg: "bg-[#FAF9F2] text-[#2C2E2B] border border-[#335C33]/20 rotate-2" },
    { label: "$80M Carbon Value Loss", bg: "bg-[#8C5A35] text-[#F6F6EE] -rotate-2" },
    { label: "SPSS Econometric Modeling", bg: "bg-[#284828] text-[#E3EDD3] rotate-3" },
    { label: "83.5% Predictive Accuracy", bg: "bg-[#FAF9F2] text-[#335C33] border border-[#335C33]/40 -rotate-1" },
    { label: "T'rưng Oral Heritage", bg: "bg-[#335C33] text-[#F6F6EE] rotate-2" },
    { label: "2,300+ Students Engaged", bg: "bg-[#8C5A35] text-[#F6F6EE] -rotate-3" },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 overflow-hidden bg-[#F6F6EE]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-[#335C33]/15">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#335C33] flex items-center justify-center shrink-0 shadow-sm text-[#F6F6EE]">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-[#2C2E2B]">
                {t("about.title")}
              </h2>
            </div>
          </div>
        </div>

        {/* Hero Narrative Block */}
        <div className="relative rounded-3xl border border-[#335C33]/15 bg-[#FAF9F2] blueprint-grid p-8 sm:p-12 mb-12 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-[#2C2E2B] leading-tight">
                {t("about.headline")}
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#2C2E2B]/80 leading-relaxed font-normal">
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p className="font-medium text-[#335C33] bg-[#335C33]/5 p-4 rounded-2xl border-l-4 border-[#335C33]">
                  <em>{t("about.p3")}</em>
                </p>
              </div>
            </div>

            {/* Right: Photo & Tags */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#284828] border border-[#335C33]/20 shadow-md group">
                <Image
                  src="/images/quynhchi/about-analyst.jpg"
                  alt="Quỳnh Chi analyzing econometrics data at desk"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <div className="font-mono text-[#4A7F4A] font-semibold text-[11px] mb-0.5">
                    {t("about.photo.label")}
                  </div>
                  <div className="font-anton text-base uppercase">
                    {t("about.photo.caption")}
                  </div>
                </div>
              </div>

              {/* Data tags cluster */}
              <div className="p-4 rounded-2xl bg-[#FAF9F2] border border-[#335C33]/15">
                <span className="font-mono text-[10px] text-[#2C2E2B]/60 font-bold uppercase tracking-wider block mb-2">
                  {t("about.methods")}
                </span>
                <div className="flex flex-wrap gap-2">
                  {dataPills.map((pill, idx) => (
                    <div
                      key={idx}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-xs transition-transform duration-200 hover:scale-105 select-none cursor-default ${pill.bg}`}
                    >
                      {pill.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Quantitative Impact Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative rounded-3xl border border-[#335C33]/15 bg-[#FAF9F2] blueprint-grid p-8 flex flex-col justify-between overflow-hidden min-h-[320px] shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#8C5A35] font-bold">{t("about.card1.label")}</span>
                <BarChart3 className="w-5 h-5 text-[#8C5A35]" />
              </div>
              <div className="font-anton text-5xl sm:text-6xl text-[#2C2E2B] leading-none mb-2">1.6M</div>
              <div className="text-[#335C33] font-bold text-base mb-3 min-h-[3rem] flex items-center">{t("about.card1.metric")}</div>
              <p className="text-xs text-[#2C2E2B]/60 leading-relaxed min-h-[3.5rem]">{t("about.card1.desc")}</p>
            </div>
          </div>

          {/* Card 2: Dark */}
          <div className="relative rounded-3xl border border-[#284828] bg-[#1E3B1E] p-8 flex flex-col justify-between overflow-hidden min-h-[320px] shadow-md text-white blueprint-grid-dark">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#4A7F4A] font-bold">{t("about.card2.label")}</span>
                <Binary className="w-5 h-5 text-[#4A7F4A]" />
              </div>
              <div className="font-anton text-5xl sm:text-6xl text-white leading-none mb-2">83.5%</div>
              <div className="text-[#4A7F4A] font-bold text-base mb-3 min-h-[3rem] flex items-center">{t("about.card2.metric")}</div>
              <p className="text-xs text-white/70 leading-relaxed min-h-[3.5rem]">{t("about.card2.desc")}</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-3xl border border-[#335C33]/15 bg-[#FAF9F2] blueprint-grid p-8 flex flex-col justify-between overflow-hidden min-h-[320px] shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#8C5A35] font-bold">{t("about.card3.label")}</span>
                <TrendingUp className="w-5 h-5 text-[#8C5A35]" />
              </div>
              <div className="font-anton text-5xl sm:text-6xl text-[#2C2E2B] leading-none mb-2">2,300+</div>
              <div className="text-[#335C33] font-bold text-base mb-3 min-h-[3rem] flex items-center">{t("about.card3.metric")}</div>
              <p className="text-xs text-[#2C2E2B]/60 leading-relaxed min-h-[3.5rem]">{t("about.card3.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
