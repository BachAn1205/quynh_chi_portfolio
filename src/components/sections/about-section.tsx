"use client";

import Image from "next/image";
import { User, TrendingUp, Sparkles, BarChart3, Binary } from "lucide-react";

export function AboutSection() {
  const dataPills = [
    { label: "1.6M Tons Ag Waste", bg: "bg-[#183e2b] text-white -rotate-3" },
    { label: "1.8M Tons CO2 Impact", bg: "bg-white text-[#1c1510] border border-[#d8d2c7] rotate-2" },
    { label: "$80M Carbon Value Loss", bg: "bg-[#d9531e] text-white -rotate-2" },
    { label: "SPSS Econometric Modeling", bg: "bg-[#382215] text-[#f6f3eb] rotate-3" },
    { label: "83.5% Predictive Accuracy", bg: "bg-white text-[#183e2b] border border-[#183e2b]/40 -rotate-1" },
    { label: "T'rưng Oral Heritage", bg: "bg-[#183e2b] text-white rotate-2" },
    { label: "2,300+ Students Engaged", bg: "bg-[#d97706] text-white -rotate-3" },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 overflow-hidden bg-[#ebe6dd]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-[#d8d2c7]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#183e2b] flex items-center justify-center shrink-0 shadow-sm text-white">
              <User className="w-6 h-6" />
            </div>
            <div>

              <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-[#1c1510]">
                ABOUT ME
              </h2>
            </div>
          </div>

        </div>

        {/* Hero Narrative Block: The Mind of an Analyst. The Heart of the Highlands. */}
        <div className="relative rounded-3xl border border-[#d8d2c7] bg-[#f6f3eb] blueprint-grid p-8 sm:p-12 mb-12 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 Cols: Complete Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-[#1c1510] leading-tight">
                The Mind of an Analyst. The Heart of the Highlands.
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#382215] leading-relaxed font-normal">
                <p>
                  Growing up in Dak Lak, the coffee capital of Vietnam, my childhood was defined by two distinct sensory memories: the resonant echoes of the indigenous T’rưng instrument fading through neighborhood loudspeakers, and the acrid smell of coffee husks burning along the highways. For a long time, I accepted these simply as the background of my hometown.
                </p>
                <p>
                  But as I grew older, the data began to tell a different, more urgent story. I learned that the <strong>1.6 million tons of agricultural waste</strong> burned annually in Vietnam generated <strong>1.8 million tons of CO2</strong>—stripping farmers of over <strong>$80 million</strong> in potential carbon market value simply because they lacked the Data Science tools for Measurement, Reporting, and Verification (MRV). Similarly, behind the stage lights, T&apos;rưng artisans were abandoning their craft because cultural nostalgia alone could not sustain a livelihood without a viable economic ecosystem.
                </p>
                <p className="font-medium text-[#183e2b] bg-[#183e2b]/5 p-4 rounded-2xl border-l-4 border-[#183e2b]">
                  These harsh realities taught me a vital lesson: <em>empathy is merely a starting point. To protect what I love, I need empirical tools.</em> Economics provides me with the systems-thinking required to design sustainable value chains, while Data Science equips me with the evidence needed to transform invisible assets—from a musical note to a carbon credit—into measurable, equitable impact. I don&apos;t just crunch numbers; I code solutions that protect the soil and elevate the soul of the Central Highlands.
                </p>
              </div>
            </div>

            {/* Right 5 Cols: Candid Research Visual & Empirical Badges */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#24160e] border border-[#d8d2c7] shadow-md group">
                <Image
                  src="/images/quynhchi/about-analyst.jpg"
                  alt="Quỳnh Chi analyzing econometrics data at desk"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <div className="font-mono text-[#22c55e] font-semibold text-[11px] mb-0.5">
                    {"// Grounded Quantitative Research"}
                  </div>
                  <div className="font-anton text-base uppercase">
                    Translating Highland Realities Into Empirical Models
                  </div>
                </div>
              </div>

              {/* Data tags cluster */}
              <div className="p-4 rounded-2xl bg-white border border-[#d8d2c7]">
                <span className="font-mono text-[10px] text-[#5e544a] font-bold uppercase tracking-wider block mb-2">
                  {"// Core Methodologies & Research Focus"}
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
          {/* Card 1: 1.6M Tons Ag Waste & Carbon MRV */}
          <div className="relative rounded-3xl border border-[#d8d2c7] bg-[#f6f3eb] blueprint-grid p-8 flex flex-col justify-between overflow-hidden min-h-[320px] shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#d9531e] font-bold">{"// ECOLOGICAL CRISIS"}</span>
                <BarChart3 className="w-5 h-5 text-[#d9531e]" />
              </div>
              <div className="font-anton text-5xl sm:text-6xl text-[#1c1510] leading-none mb-2">
                1.6M
              </div>
              <div className="text-[#183e2b] font-bold text-base mb-3">
                Tons Agricultural Waste Analyzed
              </div>
              <p className="text-xs text-[#5e544a] leading-relaxed">
                Addressing 1.8M tons of CO2 generated annually along Central Highlands highways by modeling decentralized circular Cascara &amp; carbon credits.
              </p>
            </div>

          </div>

          {/* Card 2: 83.5% Model Accuracy (Dark Coffee / Forest Card) */}
          <div className="relative rounded-3xl border border-[#233529] bg-[#111f16] p-8 flex flex-col justify-between overflow-hidden min-h-[320px] shadow-md text-white">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#22c55e] font-bold">{"// PREDICTIVE ANALYTICS"}</span>
                <Binary className="w-5 h-5 text-[#22c55e]" />
              </div>
              <div className="font-anton text-5xl sm:text-6xl text-white leading-none mb-2">
                83.5%
              </div>
              <div className="text-[#22c55e] font-bold text-base mb-3">
                SPSS Predictive Model Accuracy
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Independent quantitative survey across 200 high school students in Dak Lak, establishing a 3.482x odds multiplier for sustainable career choices.
              </p>
            </div>

          </div>

          {/* Card 3: 2,300+ Students Engaged in Heritage */}
          <div className="relative rounded-3xl border border-[#d8d2c7] bg-[#f6f3eb] blueprint-grid p-8 flex flex-col justify-between overflow-hidden min-h-[320px] shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#d97706] font-bold">{"// CULTURAL REVITALIZATION"}</span>
                <TrendingUp className="w-5 h-5 text-[#d97706]" />
              </div>
              <div className="font-anton text-5xl sm:text-6xl text-[#1c1510] leading-none mb-2">
                2,300+
              </div>
              <div className="text-[#183e2b] font-bold text-base mb-3">
                Students Across 12+ Schools
              </div>
              <p className="text-xs text-[#5e544a] leading-relaxed">
                Empowering the next generation with indigenous T&apos;rưng oral music curricula, digitized YouTube archives, and community road safety actions.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
