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
import { useLanguage } from "@/lib/i18n";

export function TheCompetitorSection() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [resumeOpen, setResumeOpen] = useState(false);
  const { t } = useLanguage();

  const categories = [
    {
      id: 0,
      title: t("competitor.tab0"),
      shortTitle: "Academics",
      icon: GraduationCap,
      description: "Selective high school admittance, near-perfect GPA, and top standardized test scores.",
      items: [
        {
          title: "VNUHCM - High School for The Gifted (2024 . 2027)",
          subtitle: "English Specialization • GPA: 9.6 / 10.0 • Top 6% Student of Grade",
          detail: "Selected as 1 of only 2 admitted students from Dak Lak Province to one of Vietnam's most selective institutions.",
          badge: "Top 6% • 1 of 2 Dak Lak Admits",
          highlight: true,
        },
        {
          title: "Phan Chu Trinh Secondary School (2020 . 2024)",
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
      title: t("competitor.tab1"),
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
      title: t("competitor.tab2"),
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
      title: t("competitor.tab3"),
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
      <section id="the-competitor" className="py-24 sm:py-32 overflow-hidden bg-[#F6F6EE] border-t border-[#335C33]/15">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#335C33]/15">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#335C33] flex items-center justify-center shrink-0 shadow-sm text-[#F6F6EE]">
                <Trophy className="w-6 h-6 text-[#E3EDD3]" />
              </div>
              <div>
                <span className="font-mono text-xs font-semibold text-[#8C5A35] uppercase tracking-wider block">
                  {"// Section 05 • Comprehensive Resume & Honors"}
                </span>
                <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-[#2C2E2B]">
                  {t("competitor.title")}
                </h2>
              </div>
            </div>

            <div className="max-w-md">
              <h3 className="font-anton text-xl uppercase text-[#335C33] mb-1">
                {t("competitor.sub.title")}
              </h3>
              <p className="text-xs sm:text-sm text-[#2C2E2B]/60">
                {t("competitor.sub.desc")}
              </p>
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
                      ? "bg-[#335C33] text-[#F6F6EE] shadow-sm"
                      : "bg-[#FAF9F2] text-[#2C2E2B] border border-[#335C33]/20 hover:bg-[#E3EDD3]"
                    }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Category Content Box */}
          <div className="rounded-3xl border border-[#335C33]/15 bg-[#FAF9F2] blueprint-grid p-6 sm:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-6 pb-4 border-b border-[#335C33]/15">
              <div>
                <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-[#2C2E2B]">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2C2E2B]/60 mt-0.5">
                  {current.description}
                </p>
              </div>

              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#FAF9F2] border border-[#335C33]/20 text-[#335C33] hover:bg-[#E3EDD3] transition-colors self-start sm:self-auto shrink-0 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{t("competitor.open")}</span>
              </button>
            </div>

            {/* Items List */}
            <div className="divide-y divide-[#335C33]/10">
              {current.items.map((item, iIdx) => (
                <div
                  key={iIdx}
                  className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 group hover:bg-[#335C33]/[0.02] px-3 -mx-3 rounded-2xl transition-colors"
                >
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <h4 className="font-anton text-base sm:text-lg uppercase tracking-tight text-[#2C2E2B] group-hover:text-[#335C33] transition-colors leading-snug flex-1">
                        {item.title}
                      </h4>
                      {item.highlight && (
                        <span className="w-2 h-2 rounded-full bg-[#335C33] shrink-0" />
                      )}
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-[#335C33]">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-[#2C2E2B]/60 leading-relaxed pt-1">
                      {item.detail}
                    </p>
                  </div>

                  <div className="shrink-0 self-start">
                    <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-[#F6F6EE] border border-[#335C33]/20 text-[#2C2E2B] shadow-xs">
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
