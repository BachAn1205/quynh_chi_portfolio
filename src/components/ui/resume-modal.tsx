"use client";

import {
  X,
  Download,
  FileText,
  Award,
  BookOpen,
  Sparkles,
  Briefcase,
  Users,
  Landmark,
  Mic2,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { lang } = useLanguage();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF7F2] border border-[#1B3B2B]/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-[#1B3B2B]/15 bg-[#FAF7F2] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#1B3B2B] text-white flex items-center justify-center">
              <FileText className="w-4 h-4 text-[#E2ECE5]" />
            </div>
            <div>
              <h3 className="font-anton text-lg uppercase tracking-tight text-[#242220]">
                {lang === "vi"
                  ? "Phan Hoàng Quỳnh Chi . Hồ sơ toàn diện"
                  : "Phan Hoàng Quỳnh Chi . Comprehensive Profile"}
              </h3>
              <p className="text-xs text-[#242220]/60 font-mono">
                {lang === "vi"
                  ? "Sơ yếu lý lịch • Cập nhật 2026 • Dữ liệu học thuật đã kiểm chứng"
                  : "Curriculum Vitae • Updated 2026 • Verified Academic Data"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/uploads/Resume.pdf"
              download="Resume PHAN HOANG QUYNH CHI.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#FFFFFF] border border-[#1B3B2B]/20 text-[#242220] hover:bg-[#E2ECE5] transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#7B0323]" />
              <span className="hidden sm:inline">
                {lang === "vi" ? "Lưu tệp PDF" : "Save as PDF"}
              </span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#FFFFFF] border border-[#1B3B2B]/20 hover:bg-[#E2ECE5] text-[#242220] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-[#242220]">
          {/* Header */}
          <div className="border-b border-[#1B3B2B]/15 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="font-anton text-3xl sm:text-4xl uppercase tracking-tight text-[#242220]">
                PHAN HOÀNG <span className="text-[#7B0323]">QUỲNH CHI</span>
              </h1>
              <p className="text-sm text-[#242220]/70 font-medium mt-1">
                Quantitative Researcher • Circular Economy Strategist • Traditional
                T&apos;rưng Artist
              </p>
            </div>
            <div className="font-mono text-xs text-[#242220]/60 space-y-0.5 sm:text-right">
              <div>(+84) 972 582 580</div>
              <div>Dak Lak &amp; Ho Chi Minh City, Vietnam</div>
              <div className="text-[#7B0323] font-semibold">
                student242706@ptnk.edu.vn
              </div>
              <div>linkedin.com/in/phanhoangquynhchi/</div>
            </div>
          </div>

          {/* 1. Education */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-[#1B3B2B]" />
              <h2 className="font-anton text-xl uppercase tracking-tight text-[#1B3B2B]">
                1. Education &amp; Standardized Testing
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <div className="flex justify-between items-start gap-3 mb-1">
                  <h3 className="font-bold text-sm text-[#242220]">
                    VNUHCM - High School for The Gifted
                  </h3>
                  <span className="font-mono text-xs text-[#242220]/60 shrink-0">
                    Aug 2024 – Jun 2027
                  </span>
                </div>
                <p className="text-xs text-[#7B0323] font-semibold mb-2">
                  English Specialization • Ho Chi Minh City
                </p>
                <ul className="text-xs text-[#242220]/80 space-y-1">
                  <li>
                    • <strong>GPA: 9.6 / 10.0</strong> (Grade 10 &amp; 11)
                  </li>
                  <li>
                    • Selected as <strong>1 of only 2 admits</strong> from Dak Lak
                    Province to one of Vietnam&apos;s most selective high schools
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-sm text-[#242220]">
                    Standardized Testing &amp; AP Exams
                  </h3>
                  <span className="font-mono text-xs text-[#7B0323] font-semibold">
                    Verified
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="p-2 rounded-xl bg-[#FAF7F2] border border-[#1B3B2B]/10">
                    <span className="font-mono text-[11px] text-[#242220]/60 block">
                      SAT (Superscore)
                    </span>
                    <span className="font-anton text-lg text-[#242220]">1530</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#FAF7F2] border border-[#1B3B2B]/10">
                    <span className="font-mono text-[11px] text-[#242220]/60 block">
                      IELTS Academic
                    </span>
                    <span className="font-anton text-lg text-[#242220]">
                      7.5 Overall
                    </span>
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-[#1B3B2B]/10">
                  <span className="font-mono text-[11px] text-[#242220]/60 block mb-1">
                    Advanced Placement (AP):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Calculus AB: 5",
                      "Statistics: 5",
                      "Microeconomics: 5",
                      "Macroeconomics: 5",
                    ].map((ap, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-[#1B3B2B]/10 text-[#1B3B2B] text-[11px] font-mono font-semibold"
                      >
                        {ap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15 md:col-span-2">
                <div className="flex justify-between items-start gap-3 mb-1">
                  <h3 className="font-bold text-sm text-[#242220]">
                    Phan Chu Trinh Secondary School, Dak Lak Province
                  </h3>
                  <span className="font-mono text-xs text-[#242220]/60 shrink-0">
                    Aug 2020 – May 2024
                  </span>
                </div>
                <ul className="text-xs text-[#242220]/80 space-y-1">
                  <li>
                    • <strong>GPA: 8.8 / 10.0</strong> (Grade 9)
                  </li>
                  <li>• Provincial Third Prize in English (2024)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Honors & Awards */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-[#7B0323]" />
              <h2 className="font-anton text-xl uppercase tracking-tight text-[#1B3B2B]">
                2. Honors &amp; Awards
              </h2>
            </div>
            <div className="divide-y divide-[#1B3B2B]/10 border border-[#1B3B2B]/15 rounded-2xl bg-[#FFFFFF] overflow-hidden text-xs">
              {[
                {
                  title:
                    "Fully-Funded Research Delegate (100% Scholarship) — NSYSU Science & Innovation Camp, Taiwan",
                  detail:
                    "Selected for data-driven materials research; pitched a conceptual wastewater purification startup to university faculty.",
                  tag: "2026",
                },
                {
                  title:
                    "Global Outstanding Writing Content Prize — Harvard International Review",
                  detail:
                    "Academic Writing Contest award for Circular Credits for Farmers (C4F) research paper.",
                  tag: "2026",
                },
                {
                  title:
                    "International Economics Olympiad (IEO) 2025 & 2026",
                  detail:
                    "National Top 5 Selection (Ranked 3rd Nationally across Vietnam).",
                  tag: "National Rank 3",
                },
                {
                  title: "Vietnam Economics Olympiad (VEO) 2025 & 2026",
                  detail:
                    "National Bronze Medalist in competitive economic theory and case analysis.",
                  tag: "Bronze Medal",
                },
                {
                  title: "Harvard Crimson Business Case (HCBC) 2025",
                  detail:
                    "Global Finalist (Top 30/2000). Sole Vietnamese representative team invited to Harvard campus.",
                  tag: "Global Top 30",
                },
                {
                  title: "World Economics Cup (WEC) 2025",
                  detail:
                    "Silver Award (Asia & Oceania) & Top 10 Fundamentals Worldwide.",
                  tag: "Silver Medal",
                },
                {
                  title:
                    "Vietnam Business Innovation Challenge (VBIC) 2025",
                  detail:
                    "Top 10 Grand Final as Team Lead for strategy, marketing and finance.",
                  tag: "Top 10 Final",
                },
                {
                  title: "Aspiring Vietnam Contest 2025",
                  detail:
                    "Top 4 Individual, Trade Division (Final Round).",
                  tag: "Top 4",
                },
                {
                  title: "ACCA Futurist Scholarship 2025",
                  detail:
                    "Top 50 Vietnam — merit-based award for emerging finance talents.",
                  tag: "Top 50",
                },
                {
                  title:
                    "ASEEDER Business Simulation (ABS) — Cognia-accredited",
                  detail:
                    "Business Excellence; Operational Excellence; Prototype Awards (2024–2025).",
                  tag: "Excellence",
                },
                {
                  title: "Strategic Debate & MUN",
                  detail:
                    "National Champion at DAS-DO Debate Open 2025 (4th Seed); Best Position Paper at VSGMUN 2026 (UNHCR).",
                  tag: "Champion",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 hover:bg-[#FAF7F2]"
                >
                  <div>
                    <span className="font-bold text-[#242220]">{item.title}</span>
                    <p className="text-[#242220]/60">{item.detail}</p>
                  </div>
                  <span className="font-mono font-semibold text-[#7B0323] sm:text-right shrink-0">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Research & Applied Analytics */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#1B3B2B]" />
              <h2 className="font-anton text-xl uppercase tracking-tight text-[#1B3B2B]">
                3. Research &amp; Applied Analytics
              </h2>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                  <h3 className="font-bold text-sm text-[#242220]">
                    Circular Credits for Farmers (C4F): A Democratic Game for Farmers
                  </h3>
                  <span className="font-mono text-xs text-[#7B0323] font-semibold shrink-0">
                    Student Researcher • Jan 2026
                  </span>
                </div>
                <p className="text-[#242220]/80 leading-relaxed">
                  Awarded Global Outstanding Writing Content Prize, Harvard International
                  Review Academic Writing Contest. Investigated systemic inequalities in
                  global carbon markets with a focus on coffee farming in Gia Lai &amp;
                  Dak Lak. Proposed a conceptual blockchain-based circular credit model to
                  decentralize carbon value distribution and link credits to verifiable
                  farming actions.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                  <h3 className="font-bold text-sm text-[#242220]">
                    QR Code-Based Food Traceability and Consumer Behavior Toward Food
                    Safety in Vietnam
                  </h3>
                  <span className="font-mono text-xs text-[#1B3B2B] font-semibold shrink-0">
                    Co-Author &amp; Data Assistant • Dec 2025
                  </span>
                </div>
                <p className="text-[#242220]/80 leading-relaxed">
                  Publication: Tennessee Community Service International of Empowerment,
                  2(2), 18–36. Co-authored with Dr. Do Hai Yen, Dean of the Faculty of
                  Economics &amp; Business Administration — Tan Trao University. Assisted
                  in designing and executing a cross-sectional survey of 400+ consumers in
                  Hanoi and Ho Chi Minh City; explored econometric models evaluating the
                  correlation between digital traceability and purchase intent.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                  <h3 className="font-bold text-sm text-[#242220]">
                    Awareness Disparities in Sustainable Development &amp; Sustainable
                    Career Choice — Dak Lak High School Students
                  </h3>
                  <span className="font-mono text-xs text-[#1B3B2B] font-semibold shrink-0">
                    Student Researcher • 2024
                  </span>
                </div>
                <p className="text-[#242220]/80 leading-relaxed">
                  Surveyed 200 Grade 12 students to analyze demographic disparities in
                  sustainability awareness by gender and geography. Applied ANOVA and
                  logistic regression via SPSS; built an <strong>89.5% accurate</strong>{" "}
                  predictive model (p &lt; 0.001) showing higher sustainability awareness
                  correlates with sustainable career choices.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Entrepreneurship & Community Impact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-[#7B0323]" />
              <h2 className="font-anton text-xl uppercase tracking-tight text-[#1B3B2B]">
                4. Entrepreneurship &amp; Community Impact
              </h2>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                  <h3 className="font-bold text-sm text-[#242220]">
                    CAFLOOP (Green Coffee Husk Project) — Founder
                  </h3>
                  <span className="font-mono text-xs text-[#7B0323] font-semibold shrink-0">
                    Sep 2024 – Present
                  </span>
                </div>
                <p className="text-[#242220]/80 leading-relaxed mb-2">
                  Circular-economy venture upcycling CO₂-emitting coffee husks in Dak Lak
                  into commercial Cascara tea. Managed end-to-end bootstrapping: tracked
                  COGS, optimized pricing, and developed a QR-code traceability system for
                  packing.
                </p>
                <p className="text-[#242220]/80 leading-relaxed">
                  <strong>Highland Girl&apos;s Fund:</strong> Generated 12,000,000 VND in
                  net profit to finance school supplies, renovate community living spaces,
                  and organize workshops on sex education and life skills. Partnered with
                  the Ea Wer Project and Hoa Sen Bridge Alliance.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                  <h3 className="font-bold text-sm text-[#242220]">
                    T&apos;rưng Cultural Education Project — Founder &amp; Organizer
                  </h3>
                  <span className="font-mono text-xs text-[#1B3B2B] font-semibold shrink-0">
                    Nov 2024 – Present
                  </span>
                </div>
                <p className="text-[#242220]/80 leading-relaxed">
                  Synthesized indigenous T&apos;rưng oral heritage from the Central
                  Highlands into a structured educational curriculum. Coordinated
                  performances and interactive workshops across <strong>12+ schools</strong>{" "}
                  engaging ~<strong>2,300 students</strong>. Managed a cultural media page
                  (5,000+ followers) and digitized performances via a YouTube archive
                  (10,000+ views).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                  <h3 className="font-bold text-sm text-[#242220]">
                    Dakonomics Club — Founder &amp; President
                  </h3>
                  <span className="font-mono text-xs text-[#1B3B2B] font-semibold shrink-0">
                    May 2025 – Present
                  </span>
                </div>
                <p className="text-[#242220]/80 leading-relaxed">
                  First high-school economics and business club in Dak Lak Province.
                  Established a 9-person core team across 5 local high schools; built a
                  digital &quot;CaseBank&quot;; organized the Green Ideas Competition (SDG
                  12) with participants from 18 provinces. Selected Top 14 semifinalists
                  and 7 finalists; ran a workshop for 50+ students and a mentoring program
                  with Vietnam National Startup Support Center and universities.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Academic Leadership & Experience */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Landmark className="w-5 h-5 text-[#1B3B2B]" />
              <h2 className="font-anton text-xl uppercase tracking-tight text-[#1B3B2B]">
                5. Academic Leadership &amp; Experience
              </h2>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <h3 className="font-bold text-sm text-[#242220] mb-2">
                  High School Economics Leadership
                </h3>
                <ul className="text-[#242220]/80 space-y-1.5">
                  <li>
                    • <strong>Shark Club (VNUHCM)</strong> — Member → Head of Expert
                    (2024–Present): Directed the academic committee; designed curriculum
                    on supply-demand elasticity and market strategies.
                  </li>
                  <li>
                    • <strong>GeniusStar (Mentor)</strong> (2024–Present): Mentored peers
                    in Game Theory and Oligopoly Markets.
                  </li>
                  <li>
                    • <strong>AIESEC — Youth For Impact</strong> (Mentor &amp; Ambassador):
                    Mentored the 2025 National Champion team in business strategy;
                    co-coordinated the Final Pitch for 200+ attendees.
                  </li>
                </ul>
              </div>

              <div className="divide-y divide-[#1B3B2B]/10 border border-[#1B3B2B]/15 rounded-2xl bg-[#FFFFFF] overflow-hidden">
                <div className="p-3.5 flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#242220]">
                      Team Lead — Finance &amp; Strategy | Harvard Crimson Business Case
                    </span>
                    <p className="text-[#242220]/60">
                      Co-developed a financial model for revenue forecasting and built a
                      mock CAC/LTV dashboard for a business simulation.
                    </p>
                  </div>
                  <span className="font-mono font-semibold text-[#7B0323] shrink-0">
                    2025
                  </span>
                </div>
                <div className="p-3.5 flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#242220]">
                      Research Delegate | NSYSU Science &amp; Innovation Camp (Taiwan)
                    </span>
                    <p className="text-[#242220]/60">
                      Participated in data-driven materials research; pitched a conceptual
                      wastewater purification startup to university faculty.
                    </p>
                  </div>
                  <span className="font-mono font-semibold text-[#7B0323] shrink-0">
                    Jul 2026
                  </span>
                </div>
                <div className="p-3.5 flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#242220]">
                      Student Intern — Business &amp; Financial Analysis | SI CAFE (Dak
                      Lak)
                    </span>
                    <p className="text-[#242220]/60">
                      Shadowed supply-chain operations; assisted with data entry and
                      operational tracking at a local coffee facility.
                    </p>
                  </div>
                  <span className="font-mono font-semibold text-[#7B0323] shrink-0">
                    Jul–Aug 2025
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Community Volunteer */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-[#7B0323]" />
              <h2 className="font-anton text-xl uppercase tracking-tight text-[#1B3B2B]">
                6. Community Volunteer Initiatives
              </h2>
            </div>
            <div className="space-y-2 text-xs">
              {[
                {
                  title: "Hoa Sen Bridge Alliance (Vietnam's Representative)",
                  detail:
                    "Led local safety workshops & distributed 500 reflective wristbands in Dak Lak, contributing to a 35,000-item tri-nation campaign (Vietnam, Korea, Philippines).",
                },
                {
                  title: "Whisper of the Wild (Head of External Relations)",
                  detail:
                    "Directed a product-based fundraising campaign; tracked COGS via financial spreadsheets, generating 4,000,000 VND in net profit for the Cu Chi Wildlife Rescue Station.",
                },
                {
                  title: "Ea Wer Project (Coordinator)",
                  detail:
                    "Mobilized resources to donate 77 bicycles and 2 smart TVs to underserved primary students in Dak Lak.",
                },
                {
                  title: "Public Service",
                  detail:
                    "Supported logistics for the VIASM Math Open Day and served as a translator for US Boarding School Fairs.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15"
                >
                  <span className="font-bold text-[#242220]">{item.title}</span>
                  <p className="text-[#242220]/75 mt-0.5 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Debate & MUN */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mic2 className="w-5 h-5 text-[#1B3B2B]" />
              <h2 className="font-anton text-xl uppercase tracking-tight text-[#1B3B2B]">
                7. Strategic Debate &amp; Model United Nations
              </h2>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15 text-xs space-y-2">
              <p className="text-[#242220]/80 leading-relaxed">
                <strong>Debate Champion &amp; Breaking Judge:</strong> Champion (4th Seed)
                at DAS-DO Debate Open 2025; consistently advanced to Quarterfinals across
                3 major national tournaments. Invited as Breaking Judge/Adjudicator for 8
                regional and international competitions (e.g., FLSS, Connit, DAS-DO).
              </p>
              <p className="text-[#242220]/80 leading-relaxed">
                <strong>MUN Leadership (Chair &amp; Content Developer):</strong> Directed
                the SPECPOL Committee (27 delegates) at DONMUN. Authored academic dossiers
                and crisis matrices on global security, human trafficking, and post-war
                economics for NKO-MUN, FORTUNNA, and SVMUN.
              </p>
              <p className="text-[#242220]/80 leading-relaxed">
                <strong>Delegate Awards:</strong> Best Position Paper at VSGMUN 2026
                (UNHCR); Honorable Mention at TOMUN 2026 (DISEC).
              </p>
            </div>
          </div>

          {/* 8. Arts, Skills & Interests */}
          <div className="p-4 rounded-2xl bg-[#E2ECE5]/50 border border-[#1B3B2B]/15 text-xs">
            <h3 className="font-anton text-sm uppercase text-[#1B3B2B] tracking-wider mb-3">
              8. Arts, Skills &amp; Interests
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="font-bold text-[#242220] block mb-1">Arts:</span>
                <p className="text-[#242220]/75 leading-relaxed">
                  Traditional T&apos;rưng Artist (Soloist): Featured lead artist at
                  &quot;Thanh Am Dat Viet&quot; showcase in Ho Chi Minh City (2025),
                  performing for ~150 urban attendees. International Exhibitor: featured
                  in &quot;Along the Waters of Srepok 3 Hydropower Plant, Dak Lak&quot; at
                  Museo ning Angeles, Philippines (Jul 2026).
                </p>
              </div>
              <div>
                <span className="font-bold text-[#242220] block mb-1">
                  Technical / Analytical:
                </span>
                <p className="text-[#242220]/75 leading-relaxed">
                  Analytical, Econometrics, ANOVA, Logistic Regression, Excel/Google
                  Sheets, Python (Basic); Financial Modeling, COGS, Pricing, Market
                  Analysis, Case Analysis Strategy.
                </p>
              </div>
              <div>
                <span className="font-bold text-[#242220] block mb-1">Languages:</span>
                <p className="text-[#242220]/75">
                  Vietnamese (Native), English (IELTS 7.5), Japanese (Basic).
                </p>
              </div>
              <div>
                <span className="font-bold text-[#242220] block mb-1">Interests:</span>
                <p className="text-[#242220]/75">
                  T&apos;rưng Performing, Game Theory, Swimming, Badminton, Economics,
                  Business Case, Debate &amp; MUN.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 border-t border-[#1B3B2B]/15 bg-[#FAF7F2] flex items-center justify-between shrink-0">
          <p className="text-xs text-[#242220]/60 font-mono">
            Phan Hoàng Quỳnh Chi • Ready for University Admissions &amp; Research Labs
          </p>
          <a
            href="/uploads/Resume.pdf"
            download="Resume PHAN HOANG QUYNH CHI.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#7B0323] text-[#FFFFFF] hover:bg-[#5E021A] transition-all shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download / Save Dossier</span>
          </a>
        </div>
      </div>
    </div>
  );
}
