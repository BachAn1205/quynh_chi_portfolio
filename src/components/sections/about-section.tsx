"use client";

import { ProjectImageUpload } from "@/components/ui/project-image-upload";
import { TrendingUp, BarChart3, Binary } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function AboutSection() {
  const { t } = useLanguage();

  const dataPills = [
    { label: "1.6M Tons Ag Waste", bg: "bg-[#1B3B2B] text-white -rotate-3" },
    { label: "1.8M Tons CO2 Impact", bg: "bg-[#FAF7F2] text-[#242220] border border-[#1B3B2B]/20 rotate-2" },
    { label: "$80M Carbon Value Loss", bg: "bg-[#7B0323] text-white -rotate-2" },
    { label: "SPSS Econometric Modeling", bg: "bg-[#142C20] text-[#E2ECE5] rotate-3" },
    { label: "83.5% Predictive Accuracy", bg: "bg-[#FAF7F2] text-[#7B0323] border border-[#7B0323]/30 -rotate-1" },
    { label: "T'rưng Oral Heritage", bg: "bg-[#1B3B2B] text-white rotate-2" },
    { label: "2,300+ Students Engaged", bg: "bg-[#7B0323] text-white -rotate-3" },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 overflow-hidden bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Narrative Block */}
        <div className="relative rounded-3xl border border-[#1B3B2B]/15 bg-[#FFFFFF] blueprint-grid p-5 sm:p-8 lg:p-12 mb-12 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: Story Text */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <h3 className="font-anton text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#242220] leading-tight">
                {t("about.headline")}
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#242220]/80 leading-relaxed font-normal">
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p className="font-medium text-[#7B0323] bg-[#7B0323]/5 p-4 rounded-2xl border-l-4 border-[#7B0323]">
                  <em>{t("about.p3")}</em>
                </p>
              </div>
            </div>

            {/* Right: Photo & Tags */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <ProjectImageUpload
                slotId="about-analyst"
                guideline={{
                  vi: "Ảnh Quỳnh Chi đang làm việc, nghiên cứu số liệu kinh tế lượng tại bàn hoặc trao đổi học thuật.",
                  en: "Photo of Quynh Chi researching econometrics data at desk or academic work."
                }}
                aspectRatio="aspect-[4/3]"
              />

              {/* Data tags cluster */}
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#1B3B2B]/15">
                <span className="font-mono text-[10px] text-[#242220]/60 font-bold uppercase tracking-wider block mb-2">
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
          <div className="relative rounded-3xl border border-[#1B3B2B]/15 bg-[#FFFFFF] blueprint-grid p-6 sm:p-8 flex flex-col justify-between overflow-hidden min-h-0 sm:min-h-[300px] shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#7B0323] font-bold">{t("about.card1.label")}</span>
                <BarChart3 className="w-5 h-5 text-[#7B0323]" />
              </div>
              <div className="font-anton text-4xl sm:text-5xl lg:text-6xl text-[#242220] leading-none mb-2">1.6M</div>
              <div className="text-[#1B3B2B] font-bold text-sm sm:text-base mb-2 min-h-0 sm:min-h-[2.5rem] flex items-center">{t("about.card1.metric")}</div>
              <p className="text-xs text-[#242220]/60 leading-relaxed">{t("about.card1.desc")}</p>
            </div>
          </div>

          {/* Card 2: Dark Emerald Green */}
          <div className="relative rounded-3xl border border-[#142C20] bg-[#1B3B2B] p-6 sm:p-8 flex flex-col justify-between overflow-hidden min-h-0 sm:min-h-[300px] shadow-md text-white blueprint-grid-dark">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#E2ECE5] font-bold">{t("about.card2.label")}</span>
                <Binary className="w-5 h-5 text-[#E2ECE5]" />
              </div>
              <div className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white leading-none mb-2">83.5%</div>
              <div className="text-[#E2ECE5] font-bold text-sm sm:text-base mb-2 min-h-0 sm:min-h-[2.5rem] flex items-center">{t("about.card2.metric")}</div>
              <p className="text-xs text-white/70 leading-relaxed">{t("about.card2.desc")}</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-3xl border border-[#1B3B2B]/15 bg-[#FFFFFF] blueprint-grid p-6 sm:p-8 flex flex-col justify-between overflow-hidden min-h-0 sm:min-h-[300px] shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#7B0323] font-bold">{t("about.card3.label")}</span>
                <TrendingUp className="w-5 h-5 text-[#7B0323]" />
              </div>
              <div className="font-anton text-4xl sm:text-5xl lg:text-6xl text-[#242220] leading-none mb-2">2,300+</div>
              <div className="text-[#1B3B2B] font-bold text-sm sm:text-base mb-2 min-h-0 sm:min-h-[2.5rem] flex items-center">{t("about.card3.metric")}</div>
              <p className="text-xs text-[#242220]/60 leading-relaxed">{t("about.card3.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
