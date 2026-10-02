"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { User, Briefcase, Quote } from "lucide-react";
import { PageNav } from "@/components/ui/page-nav";
import { ProjectImageUpload } from "@/components/ui/project-image-upload";
import { useLanguage } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useLanguage();

  const dataPills = [
    { label: "1.6M Tons Ag Waste", bg: "bg-[#1B3B2B] text-[#FAF7F2] -rotate-3" },
    { label: "1.8M Tons CO2 Impact", bg: "bg-[#FFFFFF] text-[#242220] border border-[#1B3B2B]/20 rotate-2" },
    { label: "$80M Carbon Value Loss", bg: "bg-[#7B0323] text-[#FFFFFF] -rotate-2" },
    { label: "SPSS Econometric Modeling", bg: "bg-[#1B3B2B] text-[#E2ECE5] rotate-3" },
    { label: "83.5% Predictive Accuracy", bg: "bg-[#FFFFFF] text-[#7B0323] border border-[#7B0323]/30 -rotate-1" },
    { label: "T'rưng Oral Heritage", bg: "bg-[#1B3B2B] text-[#FAF7F2] rotate-2" },
    { label: "2,300+ Students Engaged", bg: "bg-[#7B0323] text-[#FFFFFF] -rotate-3" },
  ];
  const experiences = [
    {
      role: "Founder & Product Strategist",
      company: "CAFLOOP (Green Coffee Husk Project)",
      period: "Sep 2024 . Present",
      bullets: [
        "Initiated a circular-economy venture transforming CO2-emitting coffee husks in Dak Lak into commercial Cascara tea.",
        "Managed the bootstrapping phase by tracking production costs (COGS), structuring budgets, and optimizing pricing.",
        "Integrated a QR-code traceability system on packaging for radical transparency.",
        "Directed venture profits to donate 77 bicycles and 2 smart TVs to primary students at Buon Drang Phok.",
      ],
    },
    {
      role: "Student Intern, Business & Financial Analysis",
      company: "SI CAFE (Dak Lak Branch)",
      period: "Jul . Aug 2025",
      bullets: [
        "Shadowed operational supply-chain workflows and audited inventory data entry at a local coffee processing facility.",
        "Grounded theoretical economics into daily agricultural facility operations and supply-chain logistics.",
      ],
    },
    {
      role: "Head of Expert & Mentor of Game Theory",
      company: "Shark Club (Head of Expert) & Geniusstar Business Club (Mentor of Game Theory)",
      period: "2024 . Present",
      bullets: [
        "Head of Expert at Shark Club, curating economic curricula and guiding peers through empirical analysis.",
        "Mentor of Game Theory at Geniusstar Business Club, teaching Nash Equilibrium and strategic decision-making simulations.",
        "Taught interactive economic frameworks ('2 Ice Cream Shops on a Beach') to help peers deduce market equilibria.",
        "Facilitated workshops and mentored youth teams in business case competitions.",
      ],
    },
    {
      role: "Fully-Funded Student Researcher",
      company: "NSYSU Computational Materials Lab (Taiwan)",
      period: "Jul 2026",
      bullets: [
        "Awarded a 100% scholarship for high-performance computational materials simulations in Taiwan.",
        "Mastered basic C++, Linux/HPC environments, VESTA, and Density Functional Theory (DFT) within days.",
        "Realized that computational models must answer to physical ground truths; pitched a wastewater startup to faculty.",
      ],
    },
    {
      role: "Founder, Organizer & Traditional Soloist",
      company: "T'rưng Cultural Education & Heritage Project",
      period: "Nov 2024 . Present",
      bullets: [
        "Synthesized oral Central Highlands music heritage into structured workshop curricula across 12+ schools for ~2,300 students.",
        "Managed cultural media page (5,000+ followers) and digitized YouTube performance archives (10,000+ views).",
        "Lead soloist at 'Thanh Âm Đất Việt' in HCMC; exhibited visual art at Museo ning Angeles, Philippines.",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 sm:pt-28 pb-8 sm:pb-10 bg-[#FAF7F2] blueprint-grid min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="flex items-center gap-4 mb-6 sm:mb-8 pb-4 sm:pb-5 border-b border-[#1B3B2B]/15">
            <div className="w-12 h-12 rounded-2xl bg-[#1B3B2B] flex items-center justify-center shrink-0 shadow-sm text-white">
              <User className="w-6 h-6 text-[#E2ECE5]" />
            </div>
            <div>
              <h1 className="font-anton text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-[#242220] break-words">
                ABOUT <span className="text-[#7B0323]">QUỲNH CHI</span>
              </h1>
            </div>
          </div>

          {/* Large Glowing Portrait Banner */}
          <div className="mb-10 sm:mb-14">
            <ProjectImageUpload
              slotId="about-banner"
              guideline={{
                vi: "Ảnh phong cảnh Tây Nguyên / Đắk Lắk hoặc ảnh ngoại cảnh hoạt động của Quỳnh Chi.",
                en: "Central Highlands landscape or outdoor activity portrait of Quynh Chi."
              }}
              aspectRatio="aspect-[3/2]"
              heightClass="min-h-[360px] sm:min-h-[480px] lg:min-h-[560px]"
              objectFit="cover"
            />
          </div>

          {/* Hero Narrative Block: The Mind of an Analyst. The Heart of the Highlands. */}
          <div className="relative rounded-3xl border border-[#1B3B2B]/15 bg-[#FFFFFF] blueprint-grid p-5 sm:p-8 lg:p-12 mb-14 sm:mb-20 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left: Story Text */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <h2 className="font-anton text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight text-[#242220] leading-tight">
                  {t("about.headline")}
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-[#242220]/75 leading-relaxed font-normal">
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

          {/* Quote Banner */}
          <div className="rounded-3xl bg-[#1B3B2B] text-white p-6 sm:p-10 lg:p-14 mb-16 sm:mb-24 relative overflow-hidden blueprint-grid-dark shadow-xl border border-[#1B3B2B]/30">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#E2ECE5] mb-3 sm:mb-5 opacity-80" />
            <blockquote className="font-heading italic text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 leading-relaxed max-w-4xl font-normal">
              {t("about.quote")}
            </blockquote>
          </div>

          {/* Experience Section */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12 pb-6 border-b border-[#1B3B2B]/15">
              <div className="w-12 h-12 rounded-2xl bg-[#1B3B2B] flex items-center justify-center shrink-0 shadow-sm text-white">
                <Briefcase className="w-6 h-6 text-[#E2ECE5]" />
              </div>
              <div>
                <h2 className="font-anton text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#242220] break-words">
                  EXPERIENCE &amp; INITIATIVES
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#1B3B2B]/15 bg-[#FFFFFF] blueprint-grid p-4 sm:p-6 lg:p-8 shadow-sm hover:border-[#1B3B2B]/35 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#1B3B2B]/15">
                    <div>
                      <h3 className="font-anton text-xl sm:text-2xl uppercase text-[#242220]">
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#7B0323]">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#1B3B2B] bg-[#FAF7F2] px-3.5 py-1 rounded-full border border-[#1B3B2B]/15 self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#242220]/75">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-[#7B0323] font-bold mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Work Snapshots Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
            <div className="flex flex-col">
              <span className="font-anton text-xs uppercase text-[#7B0323] mb-2 tracking-wide">
                CAFLOOP Cascara Tea &amp; QR
              </span>
              <ProjectImageUpload
                slotId="mind-startup"
                guideline={{
                  vi: "Ảnh chế biến vỏ cà phê hoặc bao bì CAFLOOP.",
                  en: "CAFLOOP coffee husk or packaging photo."
                }}
                aspectRatio="aspect-[4/3]"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-anton text-xs uppercase text-[#7B0323] mb-2 tracking-wide">
                SPSS Quantitative Econometrics
              </span>
              <ProjectImageUpload
                slotId="mind-research"
                guideline={{
                  vi: "Ảnh mô hình hồi quy SPSS hoặc số liệu nghiên cứu.",
                  en: "SPSS regression model or research survey data."
                }}
                aspectRatio="aspect-[4/3]"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-anton text-xs uppercase text-[#7B0323] mb-2 tracking-wide">
                T&apos;rưng Cultural Education
              </span>
              <ProjectImageUpload
                slotId="heart-trung-preservation"
                guideline={{
                  vi: "Ảnh trình diễn hoặc lớp học đàn T'rưng.",
                  en: "T'rưng performance or classroom workshop photo."
                }}
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </main>
      <PageNav
        prevHref="/"
        prevLabel="Home"
        nextHref="/the-mind"
        nextLabel="The Mind"
        nextSub="Quantitative Research & Enterprise"
      />
      <Footer />
    </>
  );
}
