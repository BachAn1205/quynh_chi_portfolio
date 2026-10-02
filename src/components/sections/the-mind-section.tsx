"use client";

import { useState } from "react";
import { ProjectImageUpload } from "@/components/ui/project-image-upload";
import {
  BrainCircuit,
  BarChart2,
  Boxes,
  Cpu,
  GraduationCap
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

interface ProjectHighlight {
  heading: string;
  detail: string;
  metric?: string;
}

interface ProjectItem {
  id: string;
  category: string;
  icon: any;
  badge?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  highlights: ProjectHighlight[];
  slotId: string;
  guideline: {
    vi: string;
    en: string;
  };
  tags: string[];
}

export function TheMindSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const { t } = useLanguage();

  const projects: ProjectItem[] = [
    {
      id: "research",
      category: "Independent Quantitative Research",
      icon: BarChart2,
      title: "Revealing Disparities Through Data",
      highlights: [
        {
          heading: "Awareness Disparities in Sustainable Career Choices (2024)",
          detail:
            "Conducted an urban-rural stratified cross-sectional survey among 200 high school students in Dak Lak. Applying ANOVA and Binary Logistic Regression via SPSS, I built a predictive model (83.5% accuracy) proving that a one-unit increase in sustainability awareness boosts the odds of choosing a sustainable career by 3.482 times. It exposed a critical information access gap for rural youth.",
        },
        {
          heading: "QR Code-Based Food Traceability (Dec 2025)",
          detail:
            "Co-authored a paper published in the Tennessee Community Service International of Empowerment Journal. Assisted in designing a cross-sectional survey of 400+ consumers in Hanoi and HCMC, utilizing econometric models to prove that digital traceability reduces perceived risk, though its impact skews heavily toward higher-income demographics.",
        },
        {
          heading: "Circular Credits for Farmers - C4F (Jan 2026)",
          detail:
            "Awarded the Global Outstanding Writing Content Prize by the Harvard International Review. Proposed a conceptual blockchain-based model to decentralize carbon value distribution, questioning who truly owns the data and reaps the economic rewards of sustainable farming in Gia Lai and Dak Lak.",
        },
      ],
      slotId: "mind-research",
      guideline: {
        vi: "Ảnh chụp màn hình phân tích mô hình SPSS, bảng số liệu hồi quy/ANOVA, hoặc khảo sát thực địa học sinh Đắk Lắk.",
        en: "SPSS econometrics model screenshot, ANOVA regression table, or field survey."
      },
      tags: ["SPSS", "ANOVA", "Binary Logistic Regression", "Econometrics", "Blockchain Carbon Ledger"],
    },
    {
      id: "startup",
      category: "Circular Economy Startup & Operations",
      icon: Boxes,
      title: (
        <>
          CAFLOOP (Green Coffee Husk Project)
          <br className="hidden sm:inline" /> &amp; Business Operations
        </>
      ),
      subtitle: "Founder & Product Strategist (Sep 2024 . Present)",
      highlights: [
        {
          heading: "Bootstrapping & Value Chain Engineering",
          detail:
            "Initiated a circular-economy venture transforming CO2-emitting coffee husks in Dak Lak into commercial Cascara tea. Managed the bootstrapping phase by tracking production costs (COGS), structuring budgets, and optimizing pricing. To ensure radical transparency, integrated a QR-code traceability system on the packaging.",
        },
        {
          heading: "Industry Supply Chain Experience (SI CAFE Dak Lak)",
          detail:
            "Served as Student Intern for Business & Financial Analysis at SI CAFE (Dak Lak Branch, Jul-Aug 2025), shadowing supply-chain operations and managing data entry for a local coffee processing facility.",
        },
        {
          heading: "Harvard Crimson Business Case (HCBC 2025)",
          detail:
            "Acted as Team Lead for Finance & Strategy, co-developing a financial model for revenue forecasting and building a mock CAC/LTV dashboard, advancing to Global Finalist (Top 30/2000).",
        },
      ],
      slotId: "mind-startup",
      guideline: {
        vi: "Ảnh chụp thực tế vỏ cà phê thải, quy trình sấy chế biến Cascara hoặc sản phẩm bao bì CAFLOOP có mã QR.",
        en: "Real coffee husk upcycling photo, cascara drying/processing, or CAFLOOP QR packaging."
      },
      tags: ["Circular Economy", "COGS Budgeting", "Traceability QR", "CAC/LTV Modeling", "Supply Chain"],
    },
    {
      id: "lab",
      category: "International Data Lab",
      icon: Cpu,
      title: "NSYSU Science & Innovation Camp",
      subtitle: "Fully-Funded Researcher, Taiwan, Jul 2026",
      highlights: [
        {
          heading: "High-Performance Computing & Materials Simulation",
          detail:
            "Awarded a 100% scholarship to participate in data-driven materials research at the Computational Materials Research Lab. Despite having no prior coding background, collaborated with international mentors to master basic C++, Linux/HPC environments, and software like VESTA and DFT within days.",
        },
        {
          heading: "Overcoming the 'Black Box' Trap of Data Science",
          detail:
            "Realized that computational data is only as powerful as its adherence to physical reality.teaching me to critically audit my datasets and avoid the black box trap of abstract modeling.",
        },
        {
          heading: "Wastewater Innovation Pitch",
          detail:
            "Synthesized computational material simulation insights into a conceptual wastewater purification startup pitched directly to university faculty.",
        },
      ],
      slotId: "mind-lab",
      guideline: {
        vi: "Ảnh chụp phòng lab mô phỏng vật liệu DFT/VESTA, máy chủ HPC hoặc buổi báo cáo khoa học tại Đài Loan (NSYSU).",
        en: "DFT/VESTA material simulation lab, Linux HPC terminal, or research presentation at NSYSU (Taiwan)."
      },
      tags: ["C++", "Linux HPC", "VESTA", "DFT", "Materials Data", "Wastewater Pitch"],
    },
    {
      id: "pedagogy",
      category: "Mentorship & Academic Leadership",
      icon: GraduationCap,
      title: "Shark Club & Geniusstar Business Club",
      subtitle: "Head of Expert (Shark Club) & Mentor of Game Theory (Geniusstar Business Club)",
      highlights: [
        {
          heading: "Shark Club (Head of Expert)",
          detail:
            "Curated academic curricula on supply-demand elasticity and market mechanics. Guided student members through foundational economic principles and real-world case analysis.",
        },
        {
          heading: "Geniusstar Business Club (Mentor of Game Theory)",
          detail:
            "Designed curricula on strategic decision-making. Taught Nash Equilibrium through a '2 Ice Cream Shops on a Beach' simulation, prompting students to deduce the equilibrium before revealing the formal mathematical theory.",
        },
        {
          heading: "Youth For Impact Ambassador & Case Mentorship - AIESEC Vietnam",
          detail:
            "Acted as a private mentor for Team Lục Long Công Chúa (the eventual Champions) and served as core operations staff for the Business Training Series and Final Pitch, advocating for SDG 8.6 and impacting over 200 attendees.",
        },
      ],
      slotId: "mind-pedagogy",
      guideline: {
        vi: "Ảnh sinh hoạt tại Shark Club, Geniusstar Business Club, hoặc buổi giảng dạy mô hình Game Theory cho học sinh.",
        en: "Shark Club, Geniusstar Business Club activities, or Game Theory teaching session."
      },
      tags: ["Shark Club", "Geniusstar", "Game Theory", "Nash Equilibrium", "CaseBank", "SDG 12", "SDG 8.6"],
    },
  ];

  const filteredProjects = activeTab === "all" ? projects : projects.filter((p) => p.id === activeTab);

  return (
    <section id="the-mind" className="pt-6 sm:pt-8 pb-12 sm:pb-16 overflow-hidden bg-[#FAF7F2] border-t border-[#1B3B2B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8 pb-4 sm:pb-5 border-b border-[#1B3B2B]/15">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1B3B2B] flex items-center justify-center shrink-0 shadow-sm text-white">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-anton text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#242220]">
                {t("mind.title")}
              </h2>
            </div>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${activeTab === "all"
                ? "bg-[#1B3B2B] text-white shadow-sm"
                : "bg-[#FFFFFF] text-[#242220] border border-[#1B3B2B]/20 hover:bg-[#E2ECE5]"
              }`}
          >
            {t("mind.tab.all")}
          </button>
          <button
            onClick={() => setActiveTab("research")}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${activeTab === "research"
                ? "bg-[#1B3B2B] text-white shadow-sm"
                : "bg-[#FFFFFF] text-[#242220] border border-[#1B3B2B]/20 hover:bg-[#E2ECE5]"
              }`}
          >
            {t("mind.tab.research")}
          </button>
          <button
            onClick={() => setActiveTab("startup")}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${activeTab === "startup"
                ? "bg-[#1B3B2B] text-white shadow-sm"
                : "bg-[#FFFFFF] text-[#242220] border border-[#1B3B2B]/20 hover:bg-[#E2ECE5]"
              }`}
          >
            {t("mind.tab.startup")}
          </button>
          <button
            onClick={() => setActiveTab("lab")}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${activeTab === "lab"
                ? "bg-[#1B3B2B] text-white shadow-sm"
                : "bg-[#FFFFFF] text-[#242220] border border-[#1B3B2B]/20 hover:bg-[#E2ECE5]"
              }`}
          >
            {t("mind.tab.lab")}
          </button>
          <button
            onClick={() => setActiveTab("pedagogy")}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${activeTab === "pedagogy"
                ? "bg-[#1B3B2B] text-white shadow-sm"
                : "bg-[#FFFFFF] text-[#242220] border border-[#1B3B2B]/20 hover:bg-[#E2ECE5]"
              }`}
          >
            {t("mind.tab.pedagogy")}
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-8 sm:space-y-12">
          {filteredProjects.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-3xl border border-[#1B3B2B]/15 bg-[#FFFFFF] blueprint-grid p-5 sm:p-8 lg:p-10 shadow-sm hover:border-[#1B3B2B]/35 transition-all duration-300"
              >
                {/* Top Row: Meta Badge & Category */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#1B3B2B]/15">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#1B3B2B] text-white flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-[#7B0323] uppercase tracking-wide">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {item.badge && (
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#7B0323]/10 text-[#7B0323] border border-[#7B0323]/20">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center">
                  {/* Left 7 Cols: Detailed Highlights */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h3 className="font-anton text-lg sm:text-2xl lg:text-3xl uppercase tracking-tight text-[#242220] leading-tight">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-xs sm:text-sm text-[#7B0323] font-semibold mt-1">
                          {item.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Sub-item highlights */}
                    <div className="space-y-4">
                      {item.highlights.map((h, hIdx) => (
                        <div
                          key={hIdx}
                          className="p-3.5 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#1B3B2B]/15 shadow-xs space-y-2 hover:border-[#1B3B2B]/35 transition-colors"
                        >
                          {h.metric ? (
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                              <h4 className="font-bold text-xs sm:text-sm text-[#242220] leading-snug flex-1">
                                {h.heading}
                              </h4>
                              <span className="text-[11px] font-mono font-bold text-[#7B0323] bg-[#7B0323]/10 px-2.5 py-0.5 rounded-full shrink-0 self-start">
                                {h.metric}
                              </span>
                            </div>
                          ) : (
                            <h4 className="font-bold text-xs sm:text-sm text-[#242220] leading-snug">
                              {h.heading}
                            </h4>
                          )}
                          <p className="text-xs text-[#242220]/70 leading-relaxed">
                            {h.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right 5 Cols: Project Image Upload */}
                  <div className="lg:col-span-5 flex flex-col justify-center self-center w-full">
                    <ProjectImageUpload
                      slotId={item.slotId}
                      guideline={item.guideline}
                      aspectRatio="aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
