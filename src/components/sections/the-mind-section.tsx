"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  BrainCircuit, 
  BarChart2, 
  Boxes, 
  Cpu, 
  GraduationCap, 
  FileCheck2 
} from "lucide-react";

export function TheMindSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const projects = [
    {
      id: "research",
      category: "Independent Quantitative Research",
      icon: BarChart2,
      badge: "Econometrics & Empirical Surveys",
      title: "Revealing Disparities Through Data",
      subtitle: "Uncovering the hidden inequalities behind sustainable development.",
      highlights: [
        {
          heading: "Awareness Disparities in Sustainable Career Choices (2024)",
          detail:
            "Conducted an urban-rural stratified cross-sectional survey among 200 high school students in Dak Lak. Applying ANOVA and Binary Logistic Regression via SPSS, I built a predictive model (83.5% accuracy) proving that a one-unit increase in sustainability awareness boosts the odds of choosing a sustainable career by 3.482 times. It exposed a critical information access gap for rural youth.",
          metric: "83.5% Accuracy • 3.482x Odds Ratio",
        },
        {
          heading: "QR Code-Based Food Traceability (Dec 2025)",
          detail:
            "Co-authored a paper published in the Tennessee Community Service International of Empowerment Journal. Assisted in designing a cross-sectional survey of 400+ consumers in Hanoi and HCMC, utilizing econometric models to prove that digital traceability reduces perceived risk, though its impact skews heavily toward higher-income demographics.",
          metric: "Published Paper • 400+ Consumers",
        },
        {
          heading: "Circular Credits for Farmers - C4F (Jan 2026)",
          detail:
            "Awarded the Global Outstanding Writing Content Prize by the Harvard International Review. Proposed a conceptual blockchain-based model to decentralize carbon value distribution, questioning who truly owns the data and reaps the economic rewards of sustainable farming in Gia Lai and Dak Lak.",
          metric: "Global Outstanding Prize @ Harvard Int'l Review",
        },
      ],
      image: "/images/quynhchi/about-analyst.jpg",
      tags: ["SPSS", "ANOVA", "Binary Logistic Regression", "Econometrics", "Blockchain Carbon Ledger"],
    },
    {
      id: "startup",
      category: "Circular Economy Startup & Operations",
      icon: Boxes,
      badge: "Venture Building & COGS",
      title: "CAFLOOP (Green Coffee Husk Project) & Business Operations",
      subtitle: "Founder & Product Strategist (Sep 2024 — Present)",
      highlights: [
        {
          heading: "Bootstrapping & Value Chain Engineering",
          detail:
            "Initiated a circular-economy venture transforming CO2-emitting coffee husks in Dak Lak into commercial Cascara tea. Managed the bootstrapping phase by tracking production costs (COGS), structuring budgets, and optimizing pricing. To ensure radical transparency, integrated a QR-code traceability system on the packaging.",
          metric: "100% QR Batch Traceability • COGS Optimization",
        },
        {
          heading: "Industry Supply Chain Experience (SI CAFE Dak Lak)",
          detail:
            "Served as Student Intern for Business & Financial Analysis at SI CAFE (Dak Lak Branch, Jul-Aug 2025), shadowing supply-chain operations and managing data entry for a local coffee processing facility.",
          metric: "Supply Chain Auditing • Facility Data Entry",
        },
        {
          heading: "Harvard Crimson Business Case (HCBC 2025)",
          detail:
            "Acted as Team Lead for Finance & Strategy, co-developing a financial model for revenue forecasting and building a mock CAC/LTV dashboard, advancing to Global Finalist (Top 30/2000).",
          metric: "Global Top 30 Finalist @ Harvard Campus",
        },
      ],
      image: "/images/quynhchi/cafloop-cascara.jpg",
      tags: ["Circular Economy", "COGS Budgeting", "Traceability QR", "CAC/LTV Modeling", "Supply Chain"],
    },
    {
      id: "lab",
      category: "International Data Lab",
      icon: Cpu,
      badge: "Fully-Funded Researcher (100% Scholarship)",
      title: "NSYSU Science & Innovation Camp (Taiwan, Jul 2026)",
      subtitle: "Computational Materials Research Lab • Auditing Data Against Physical Reality",
      highlights: [
        {
          heading: "High-Performance Computing & Materials Simulation",
          detail:
            "Awarded a 100% scholarship to participate in data-driven materials research at the Computational Materials Research Lab. Despite having no prior coding background, collaborated with international mentors to master basic C++, Linux/HPC environments, and software like VESTA and DFT within days.",
          metric: "C++ • Linux/HPC • VESTA • DFT Modeling",
        },
        {
          heading: "Overcoming the 'Black Box' Trap of Data Science",
          detail:
            "Realized that computational data is only as powerful as its adherence to physical reality—teaching me to critically audit my datasets and avoid the black box trap of abstract modeling.",
          metric: "Empirical Ground-Truth Auditing",
        },
        {
          heading: "Wastewater Innovation Pitch",
          detail:
            "Synthesized computational material simulation insights into a conceptual wastewater purification startup pitched directly to university faculty.",
          metric: "Faculty Pitch • Clean Water Innovation",
        },
      ],
      image: "/images/quynhchi/hero-coffee-farm.jpg",
      tags: ["C++", "Linux HPC", "VESTA", "DFT", "Materials Data", "Wastewater Pitch"],
    },
    {
      id: "pedagogy",
      category: "Economic Pedagogy & Mentorship",
      icon: GraduationCap,
      badge: "Empowering 500+ Peers",
      title: "Translating Theory into Action",
      subtitle: "Systematically breaking down complex economic frameworks to educate peers.",
      highlights: [
        {
          heading: "Dakonomics Club (Founder & President)",
          detail:
            "Established the first high-school economics club in Dak Lak with a 9-person core team across 5 schools. Built a digital 'CaseBank' for real-world business analysis. Organized the 'Dakonomics Green Ideas Competition' (focusing on SDG 12), engaging participants from 18 provinces. Selected Top 14 and organized workshops for 50+ students with national startup experts.",
          metric: "18 Provinces • 50+ Workshop Attendees • SDG 12",
        },
        {
          heading: "Shark Club & Geniusstar Mentor (Head of Expert)",
          detail:
            "Designed curricula on supply-demand elasticity. Taught Nash Equilibrium through a '2 Ice Cream Shops on a Beach' simulation, prompting students to deduce the equilibrium before revealing the formal mathematical theory.",
          metric: "Game Theory • Nash Equilibrium Pedagogy",
        },
        {
          heading: "Youth For Impact (Season 12)",
          detail:
            "Acted as a private mentor for Team Lục Long Công Chúa (the eventual Champions) and served as core operations staff for the Business Training Series and Final Pitch, advocating for SDG 8.6 and impacting over 200 attendees.",
          metric: "Championship Mentor • 200+ Attendees • SDG 8.6",
        },
      ],
      image: "/images/quynhchi/trung-heritage.jpg",
      tags: ["Dakonomics", "Game Theory", "CaseBank", "SDG 12", "SDG 8.6", "Youth For Impact"],
    },
  ];

  const filteredProjects = activeTab === "all" ? projects : projects.filter((p) => p.id === activeTab);

  return (
    <section id="the-mind" className="py-24 sm:py-32 overflow-hidden bg-[#ebe6dd] border-t border-[#d8d2c7]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-[#d8d2c7]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#183e2b] flex items-center justify-center shrink-0 shadow-sm text-white">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-[#1c1510]">
                THE MIND
              </h2>
            </div>
          </div>

          <div className="max-w-md">
            <h3 className="font-anton text-xl uppercase text-[#183e2b] mb-1">
              Quantitative Research &amp; Enterprise
            </h3>
            <p className="text-xs sm:text-sm text-[#5e544a]">
              Leveraging data to drive circular economies and bridge societal gaps.
            </p>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "all"
                ? "bg-[#183e2b] text-white shadow-sm"
                : "bg-white text-[#1c1510] border border-[#d8d2c7] hover:bg-[#f6f3eb]"
            }`}
          >
            All Initiatives (4)
          </button>
          <button
            onClick={() => setActiveTab("research")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "research"
                ? "bg-[#183e2b] text-white shadow-sm"
                : "bg-white text-[#1c1510] border border-[#d8d2c7] hover:bg-[#f6f3eb]"
            }`}
          >
            Quantitative Research
          </button>
          <button
            onClick={() => setActiveTab("startup")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "startup"
                ? "bg-[#183e2b] text-white shadow-sm"
                : "bg-white text-[#1c1510] border border-[#d8d2c7] hover:bg-[#f6f3eb]"
            }`}
          >
            CAFLOOP &amp; Operations
          </button>
          <button
            onClick={() => setActiveTab("lab")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "lab"
                ? "bg-[#183e2b] text-white shadow-sm"
                : "bg-white text-[#1c1510] border border-[#d8d2c7] hover:bg-[#f6f3eb]"
            }`}
          >
            NSYSU Taiwan Lab
          </button>
          <button
            onClick={() => setActiveTab("pedagogy")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "pedagogy"
                ? "bg-[#183e2b] text-white shadow-sm"
                : "bg-white text-[#1c1510] border border-[#d8d2c7] hover:bg-[#f6f3eb]"
            }`}
          >
            Economic Pedagogy
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {filteredProjects.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-3xl border border-[#d8d2c7] bg-[#f6f3eb] blueprint-grid p-6 sm:p-10 shadow-sm hover:border-[#b8b0a2] transition-all duration-300"
              >
                {/* Top Row: Meta Badge & Category */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#d8d2c7]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#183e2b] text-white flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-[#d9531e] uppercase tracking-wide">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#183e2b]/10 text-[#183e2b] border border-[#183e2b]/20">
                    {item.badge}
                  </span>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left 7 Cols: Detailed Highlights */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h3 className="font-anton text-2xl sm:text-4xl uppercase tracking-tight text-[#1c1510] leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#183e2b] font-semibold mt-1">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Sub-item highlights */}
                    <div className="space-y-4">
                      {item.highlights.map((h, hIdx) => (
                        <div
                          key={hIdx}
                          className="p-4 sm:p-5 rounded-2xl bg-white border border-[#d8d2c7] shadow-xs space-y-2 hover:border-[#183e2b]/40 transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <h4 className="font-bold text-xs sm:text-sm text-[#1c1510] whitespace-nowrap overflow-hidden text-ellipsis min-w-0">
                              {h.heading}
                            </h4>
                            <span className="text-[11px] font-mono font-bold text-[#d9531e] bg-[#d9531e]/10 px-2.5 py-0.5 rounded-full shrink-0">
                              {h.metric}
                            </span>
                          </div>
                          <p className="text-xs text-[#4a3f35] leading-relaxed">
                            {h.detail}
                          </p>
                        </div>
                      ))}
                    </div>


                  </div>

                  {/* Right 5 Cols: Visual Representation */}
                  <div className="lg:col-span-5 flex flex-col gap-4">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#24160e] border border-[#d8d2c7] shadow-md group">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[10px] font-mono font-bold text-[#22c55e] uppercase block mb-1">
                          {"// Field Evidence"}
                        </span>
                        <div className="font-anton text-sm sm:text-base uppercase line-clamp-1">
                          {item.title}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#ece7df] border border-[#d8d2c7] text-xs space-y-1.5">
                      <div className="flex items-center gap-1.5 font-bold text-[#183e2b]">
                        <FileCheck2 className="w-4 h-4 text-[#d9531e]" />
                        <span>Peer-Reviewed &amp; Globally Recognized</span>
                      </div>
                      <p className="text-[11px] text-[#5e544a] leading-normal">
                        Every initiative pairs rigorous empirical research with real stakeholder actions across Dak Lak and international stages.
                      </p>
                    </div>
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
