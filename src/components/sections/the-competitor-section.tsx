"use client";

import { useState } from "react";
import {
  Trophy,
  Award,
  GraduationCap,
  Code2,
  FileText
} from "lucide-react";
import { ResumeModal } from "@/components/ui/resume-modal";

export function TheCompetitorSection() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [resumeOpen, setResumeOpen] = useState(false);

  const categories = [
    {
      id: 0,
      title: "1. Academic Profile & Testing",
      shortTitle: "Academics",
      icon: GraduationCap,
      description: "Selective high school admittance, near-perfect GPA, and top standardized test scores.",
      items: [
        {
          title: "VNUHCM - High School for The Gifted (2024 — 2027)",
          subtitle: "English Specialization • GPA: 9.6 / 10.0 • Top 6% Student of Grade",
          detail: "Selected as 1 of only 2 admitted students from Dak Lak Province to one of Vietnam's most selective institutions.",
          badge: "Top 6% • 1 of 2 Dak Lak Admits",
          highlight: true,
        },
        {
          title: "Phan Chu Trinh Secondary School (2020 — 2024)",
          subtitle: "GPA: 8.8 / 10.0 • Provincial Third Prize in English (2023)",
          detail: "Consistent academic leadership and provincial distinctions in humanities.",
          badge: "Provincial Prize",
          highlight: false,
        },
        {
          title: "Standardized Testing (SAT & IELTS)",
          subtitle: "SAT: 1510 posite • IELTS Academic: 7.5 Overall",
          detail: "Demonstrated advanced quantitative reasoning and English proficiency across standardized metrics.",
          badge: "SAT 1450 • IELTS 7.5",
          highlight: true,
        },
        {
          title: "Advanced Placement (AP Exams)",
          subtitle: "Four Perfect Scores of 5 across Quantitative & Economic Fields",
          detail: "AP Calculus AB (5), AP Statistics (5), AP Microeconomics (5), AP Macroeconomics (5).",
          badge: "4x Perfect Score of 5",
          highlight: true,
        },
      ],
    },
    {
      id: 1,
      title: "2. Economics & Business Olympiads",
      shortTitle: "Olympiads",
      icon: Trophy,
      description: "International and national competition podium finishes in economics, finance, and business cases.",
      items: [
        {
          title: "Harvard Crimson Business Case (HCBC) 2025",
          subtitle: "Global Finalist (Top 30 / 2,000 Teams Worldwide)",
          detail: "Sole Vietnamese representative team invited to compete on Harvard campus in Boston, MA. Built financial forecasting and CAC/LTV models.",
          badge: "Global Top 30 @ Harvard",
          highlight: true,
        },
        {
          title: "World Economics Cup (WEC) 2025",
          subtitle: "Silver Award (Asia & Oceania) & Top 10 Fundamentals Worldwide",
          detail: "Comprehensive theoretical examination spanning micro, macro, and international trade.",
          badge: "Silver Medalist",
          highlight: true,
        },
        {
          title: "International Economics Olympiad (IEO) 2025 & 2026",
          subtitle: "National Top 5 Selection (Ranked 3rd Nationally across Vietnam)",
          detail: "Represented elite national cohort through intensive economic theory and simulated business rounds.",
          badge: "National Rank 3",
          highlight: true,
        },
        {
          title: "Vietnam Economics Olympiad (VEO) 2025 & 2026",
          subtitle: "National Bronze Medalist (Two Consecutive Years)",
          detail: "Competitive examination among Vietnam's top high school economics scholars.",
          badge: "Bronze Medalist",
          highlight: false,
        },
        {
          title: "Vietnam Business Innovation Challenge (VBIC) 2025",
          subtitle: "Top 10 Grand Final (Team Lead)",
          detail: "Led product strategy, go-to-market plan, and financial modeling for scalable venture concept.",
          badge: "Top 10 Finalist",
          highlight: false,
        },
        {
          title: "Aspiring Vietnam Contest 2025 & ACCA Futurist Scholarship",
          subtitle: "Top 4 Individual (Trade Division) & Top 50 Vietnam Merit Award",
          detail: "Recognized as emerging finance talent by the Association of Chartered Certified Accountants (ACCA).",
          badge: "Top 4 / Top 50 ACCA",
          highlight: false,
        },
      ],
    },
    {
      id: 2,
      title: "3. Debate, MUN & Arts",
      shortTitle: "Debate & Arts",
      icon: Award,
      description: "National championships in parliamentary debate, international art exhibitions, and traditional solo music.",
      items: [
        {
          title: "Strategic Debate: DAS-DO Debate Open 2025",
          subtitle: "National Champion (4th Seed)",
          detail: "Adjudicated and competed on high-stakes policy motions using empirical logic and economic incentives.",
          badge: "National Champion",
          highlight: true,
        },
        {
          title: "Model United Nations: VSGMUN 2026",
          subtitle: "Best Position Paper Award (UNHCR Council)",
          detail: "Authored policy framework addressing displaced climate refugees and rural livelihood protections.",
          badge: "Best Position Paper",
          highlight: false,
        },
        {
          title: "Traditional T'rưng Artist (Lead Soloist)",
          subtitle: "Featured Soloist at 'Thanh Âm Đất Việt' Showcase (HCMC 2025)",
          detail: "Performed Central Highlands indigenous music for ~150 urban attendees to bridge rural-urban cultural gaps.",
          badge: "Lead Soloist",
          highlight: true,
        },
        {
          title: "International Art Exhibition (Philippines 2026)",
          subtitle: "Exhibited at Museo ning Angeles, Philippines (Jul 2026)",
          detail: "Exhibited original visual work 'Along the Waters of Srepok 3 Hydropower Plant, Dak Lak' highlighting ecological narratives.",
          badge: "International Exhibitor",
          highlight: true,
        },
      ],
    },
    {
      id: 3,
      title: "4. Technical Skills & Interests",
      shortTitle: "Skills & Profile",
      icon: Code2,
      description: "Empirical data toolset, programming environments, languages, and personal passions.",
      items: [
        {
          title: "Technical & Quantitative Methodologies",
          subtitle: "Econometrics • ANOVA • Logistic Regression • Data Science",
          detail: "SPSS Econometric modeling, Binary Logistic Regression, MS Excel/Google Sheets advanced modeling, Canva visual communication.",
          badge: "SPSS Econometrics",
          highlight: true,
        },
        {
          title: "Computational & Scientific Environments",
          subtitle: "Basic C++ • Linux HPC • VESTA • DFT Materials Modeling",
          detail: "Mastered at NSYSU Computational Materials Research Lab for physical modeling and simulations.",
          badge: "HPC & DFT",
          highlight: false,
        },
        {
          title: "Languages",
          subtitle: "Vietnamese (Native) • English (Proficient - IELTS 7.5) • Japanese (Basic)",
          detail: "Fluent academic and debate discourse in English; professional presentation skills.",
          badge: "Multilingual",
          highlight: false,
        },
        {
          title: "Interests & Strategic Thinking",
          subtitle: "T'rưng Performance • Game Theory • Swimming • Badminton",
          detail: "Passionate about analyzing strategic interaction through Nash Equilibrium simulations and traditional polyrhythms.",
          badge: "Game Theory & T'rưng",
          highlight: false,
        },
      ],
    },
  ];

  const current = categories[activeCategory];

  return (
    <>
      <section id="the-competitor" className="py-24 sm:py-32 overflow-hidden bg-[#ebe6dd] border-t border-[#d8d2c7]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-[#d8d2c7]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#183e2b] flex items-center justify-center shrink-0 shadow-sm text-white">
                <Trophy className="w-6 h-6 text-[#d97706]" />
              </div>
              <div>
                <span className="font-mono text-xs font-semibold text-[#d9531e] uppercase tracking-wider block">
                  {"// Section 05 • Comprehensive Resume & Honors"}
                </span>
                <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-[#1c1510]">
                  THE COMPETITOR
                </h2>
              </div>
            </div>

            <div className="max-w-md">
              <h3 className="font-anton text-xl uppercase text-[#183e2b] mb-1">
                Global Excellence &amp; Academic Profile
              </h3>
              <p className="text-xs sm:text-sm text-[#5e544a]">
                A proven track record of excellence across academics, business strategy, public policy, and the arts.
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
            <div className="p-4 rounded-2xl bg-[#f6f3eb] border border-[#d8d2c7] shadow-xs">
              <span className="font-mono text-[10px] text-[#5e544a] uppercase font-bold block mb-1">High School GPA</span>
              <div className="font-anton text-2xl sm:text-3xl text-[#1c1510]">9.6 / 10.0</div>
              <span className="text-[11px] text-[#183e2b] font-medium">Top 6% Gifted Cohort</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#f6f3eb] border border-[#d8d2c7] shadow-xs">
              <span className="font-mono text-[10px] text-[#5e544a] uppercase font-bold block mb-1">Standardized Tests</span>
              <div className="font-anton text-2xl sm:text-3xl text-[#1c1510]">1450 • 7.5</div>
              <span className="text-[11px] text-[#183e2b] font-medium">SAT &amp; IELTS Academic</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#f6f3eb] border border-[#d8d2c7] shadow-xs">
              <span className="font-mono text-[10px] text-[#5e544a] uppercase font-bold block mb-1">Advanced Placement</span>
              <div className="font-anton text-2xl sm:text-3xl text-[#183e2b]">4x AP 5s</div>
              <span className="text-[11px] text-[#d9531e] font-medium">Calc, Stats, Micro, Macro</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#f6f3eb] border border-[#d8d2c7] shadow-xs">
              <span className="font-mono text-[10px] text-[#5e544a] uppercase font-bold block mb-1">Harvard Crimson Case</span>
              <div className="font-anton text-2xl sm:text-3xl text-[#d9531e]">Top 30</div>
              <span className="text-[11px] text-[#1c1510] font-medium">Global Finalist / 2000</span>
            </div>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isSelected = idx === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(idx)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${isSelected
                      ? "bg-[#183e2b] text-white shadow-sm"
                      : "bg-white text-[#1c1510] border border-[#d8d2c7] hover:bg-[#f6f3eb]"
                    }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Category Content Box */}
          <div className="rounded-3xl border border-[#d8d2c7] bg-[#f6f3eb] blueprint-grid p-6 sm:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#d8d2c7]">
              <div>
                <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-[#1c1510]">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5e544a] mt-0.5">
                  {current.description}
                </p>
              </div>

              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#d8d2c7] text-[#183e2b] hover:bg-[#ede8df] transition-colors self-start sm:self-auto shrink-0"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Open Dossier View</span>
              </button>
            </div>

            {/* Items List */}
            <div className="divide-y divide-[#d8d2c7]">
              {current.items.map((item, iIdx) => (
                <div
                  key={iIdx}
                  className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 group hover:bg-black/[0.02] px-3 -mx-3 rounded-2xl transition-colors"
                >
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <h4 className="font-anton text-base sm:text-lg uppercase tracking-tight text-[#1c1510] group-hover:text-[#183e2b] transition-colors whitespace-nowrap overflow-hidden text-ellipsis min-w-0">
                        {item.title}
                      </h4>
                      {item.highlight && (
                        <span className="w-2 h-2 rounded-full bg-[#d9531e]" />
                      )}
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-[#183e2b]">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-[#5e544a] leading-relaxed pt-1">
                      {item.detail}
                    </p>
                  </div>

                  <div className="shrink-0 self-start sm:self-center">
                    <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-white border border-[#d8d2c7] text-[#1c1510] shadow-xs">
                      {item.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
