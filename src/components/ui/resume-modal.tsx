"use client";

import { X, Download, FileText, Award, BookOpen, Sparkles } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handleSavePDF = () => {
    // Set document title for filename, then print to PDF
    const prevTitle = document.title;
    document.title = "Phan_Hoang_Quynh_Chi_Resume_2026";
    window.print();
    document.title = prevTitle;
  };

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
                Phan Hoàng Quỳnh Chi . Comprehensive Profile
              </h3>
              <p className="text-xs text-[#242220]/60 font-mono">
                Curriculum Vitae • Updated 2026 • Verified Academic Data
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSavePDF}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#FFFFFF] border border-[#1B3B2B]/20 text-[#242220] hover:bg-[#E2ECE5] transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#7B0323]" />
              <span className="hidden sm:inline">Save as PDF</span>
            </button>
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
                Quantitative Researcher • Circular Economy Strategist • Traditional T&apos;rưng Artist
              </p>
            </div>
            <div className="font-mono text-xs text-[#242220]/60 space-y-0.5 sm:text-right">
              <div>Dak Lak &amp; Ho Chi Minh City, Vietnam</div>
              <div className="text-[#7B0323] font-semibold">liliesmyllerz2k9@gmail.com</div>
              <div>linkedin.com/in/phanhoangquynhchi/</div>
            </div>
          </div>

          {/* Academic Profile & Standardized Testing */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-[#1B3B2B]" />
              <h2 className="font-anton text-xl uppercase tracking-tight text-[#1B3B2B]">
                1. Academic Profile &amp; Standardized Testing
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <div className="flex justify-between items-start gap-3 mb-1">
                  <h3 className="font-bold text-sm text-[#242220] whitespace-nowrap overflow-hidden text-ellipsis">VNUHCM - High School for The Gifted</h3>
                  <span className="font-mono text-xs text-[#242220]/60 shrink-0">2024 . 2027</span>
                </div>
                <p className="text-xs text-[#7B0323] font-semibold mb-2">English Specialization</p>
                <ul className="text-xs text-[#242220]/80 space-y-1">
                  <li>• <strong>GPA: 9.6 / 10.0</strong> . Top 6% Student of the Grade</li>
                  <li>• Selected as <strong>1 of only 2 admits</strong> from Dak Lak Province to Vietnam&apos;s most selective gifted high school</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-sm text-[#242220]">Standardized Testing &amp; AP Exams</h3>
                  <span className="font-mono text-xs text-[#7B0323] font-semibold">Verified</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="p-2 rounded-xl bg-[#FAF7F2] border border-[#1B3B2B]/10">
                    <span className="font-mono text-[11px] text-[#242220]/60 block">SAT Composite</span>
                    <span className="font-anton text-lg text-[#242220]">1510</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#FAF7F2] border border-[#1B3B2B]/10">
                    <span className="font-mono text-[11px] text-[#242220]/60 block">IELTS Academic</span>
                    <span className="font-anton text-lg text-[#242220]">7.5 Overall</span>
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-[#1B3B2B]/10">
                  <span className="font-mono text-[11px] text-[#242220]/60 block mb-1">Advanced Placement (AP):</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Calculus AB: 5", "Statistics: 5", "Microeconomics: 5", "Macroeconomics: 5"].map((ap, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-[#1B3B2B]/10 text-[#1B3B2B] text-[11px] font-mono font-semibold">
                        {ap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Economics & Business Olympiads */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-[#7B0323]" />
              <h2 className="font-anton text-xl uppercase tracking-tight text-[#1B3B2B]">
                2. Economics &amp; Business Olympiads
              </h2>
            </div>
            <div className="divide-y divide-[#1B3B2B]/10 border border-[#1B3B2B]/15 rounded-2xl bg-[#FFFFFF] overflow-hidden text-xs">
              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 hover:bg-[#E2ECE5]/30">
                <div>
                  <span className="font-bold text-[#242220]">Harvard Crimson Business Case (HCBC) 2025</span>
                  <p className="text-[#242220]/60">Global Finalist (Top 30/2000). Sole Vietnamese representative team invited to Harvard campus.</p>
                </div>
                <span className="font-mono font-semibold text-[#7B0323] sm:text-right shrink-0">Global Top 30</span>
              </div>

              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 hover:bg-[#FAF7F2]">
                <div>
                  <span className="font-bold text-[#242220]">World Economics Cup (WEC) 2025</span>
                  <p className="text-[#242220]/60">Silver Award (Asia &amp; Oceania Division) &amp; Top 10 Fundamentals Worldwide.</p>
                </div>
                <span className="font-mono font-semibold text-[#1B3B2B] sm:text-right shrink-0">Silver Medal</span>
              </div>

              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 hover:bg-[#FAF7F2]">
                <div>
                  <span className="font-bold text-[#242220]">International Economics Olympiad (IEO) 2025 &amp; 2026</span>
                  <p className="text-[#242220]/60">National Top 5 Selection (Ranked 3rd Nationally across Vietnam).</p>
                </div>
                <span className="font-mono font-semibold text-[#7B0323] sm:text-right shrink-0">National Rank 3</span>
              </div>

              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 hover:bg-[#FAF7F2]">
                <div>
                  <span className="font-bold text-[#242220]">Vietnam Economics Olympiad (VEO) 2025 &amp; 2026</span>
                  <p className="text-[#242220]/60">National Bronze Medalist in competitive economic theory and case analysis.</p>
                </div>
                <span className="font-mono font-semibold text-[#242220]/60 sm:text-right shrink-0">Bronze Medal</span>
              </div>

              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 hover:bg-[#FAF7F2]">
                <div>
                  <span className="font-bold text-[#242220]">Vietnam Business Innovation Challenge (VBIC) 2025</span>
                  <p className="text-[#242220]/60">Top 10 Grand Final as Team Lead for strategy, marketing and finance.</p>
                </div>
                <span className="font-mono font-semibold text-[#1B3B2B] sm:text-right shrink-0">Top 10 Final</span>
              </div>

              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 hover:bg-[#FAF7F2]">
                <div>
                  <span className="font-bold text-[#242220]">Aspiring Vietnam Contest &amp; ACCA Futurist Scholarship 2025</span>
                  <p className="text-[#242220]/60">Top 4 Individual (Trade Division) &amp; Top 50 Vietnam merit-based award for emerging finance talents.</p>
                </div>
                <span className="font-mono font-semibold text-[#7B0323] sm:text-right shrink-0">Top 4 / Top 50</span>
              </div>
            </div>
          </div>

          {/* Research & Key Ventures */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#1B3B2B]" />
              <h2 className="font-anton text-xl uppercase tracking-tight text-[#1B3B2B]">
                3. Quantitative Research &amp; Social Innovation
              </h2>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-sm text-[#242220]">Circular Credits for Farmers (C4F)</h3>
                  <span className="font-mono text-xs text-[#7B0323] font-semibold">Harvard Int&apos;l Review Award</span>
                </div>
                <p className="text-[#242220]/80 leading-relaxed">
                  Authored paper awarded Global Outstanding Writing Content Prize by Harvard International Review. Proposed a decentralized blockchain model to return carbon market rewards to farmers managing 1.6M tons of agricultural waste in Dak Lak.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-sm text-[#242220]">CAFLOOP: Green Coffee Husk Project</h3>
                  <span className="font-mono text-xs text-[#1B3B2B] font-semibold">Founder &amp; Strategist</span>
                </div>
                <p className="text-[#242220]/80 leading-relaxed">
                  Founded circular economy venture turning CO2-emitting coffee husks into commercial Cascara tea. Managed COGS tracking, package QR traceability, and reinvested profits to donate 77 bicycles and 2 smart TVs to Buon Drang Phok primary school.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-sm text-[#242220]">T&apos;rưng Cultural Education &amp; Preservation Project</h3>
                  <span className="font-mono text-xs text-[#1B3B2B] font-semibold">Founder &amp; Soloist</span>
                </div>
                <p className="text-[#242220]/80 leading-relaxed">
                  Synthesized oral highland traditions into school curriculum across 12+ schools reaching 2,300+ students. Lead soloist at &apos;Thanh Am Dat Viet&apos; (HCMC) and exhibited visual art at Museo ning Angeles, Philippines.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills & Interests */}
          <div className="p-4 rounded-2xl bg-[#E2ECE5]/50 border border-[#1B3B2B]/15 text-xs">
            <h3 className="font-anton text-sm uppercase text-[#1B3B2B] tracking-wider mb-2">
              4. Technical Skills, Languages &amp; Leadership
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <span className="font-bold text-[#242220] block mb-1">Technical / Data:</span>
                <p className="text-[#242220]/75">SPSS Econometrics, ANOVA, Binary Logistic Regression, MS Excel/Google Sheets, C++, Linux HPC, VESTA, DFT.</p>
              </div>
              <div>
                <span className="font-bold text-[#242220] block mb-1">Languages:</span>
                <p className="text-[#242220]/75">Vietnamese (Native), English (Proficient - IELTS 7.5), Japanese (Basic).</p>
              </div>
              <div>
                <span className="font-bold text-[#242220] block mb-1">Interests &amp; Arts:</span>
                <p className="text-[#242220]/75">Traditional T&apos;rưng Performing, Game Theory (Nash Equilibrium), Debate Adjudication, Swimming, Badminton.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 border-t border-[#1B3B2B]/15 bg-[#FAF7F2] flex items-center justify-between shrink-0">
          <p className="text-xs text-[#242220]/60 font-mono">
            Phan Hoàng Quỳnh Chi • Ready for University Admissions &amp; Research Labs
          </p>
          <button
            onClick={handleSavePDF}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#7B0323] text-[#FFFFFF] hover:bg-[#5E021A] transition-all shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download / Save Dossier</span>
          </button>
        </div>
      </div>
    </div>
  );
}
