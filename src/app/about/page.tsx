import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { User, Briefcase, Quote } from "lucide-react";

export default function AboutPage() {
  const experiences = [
    {
      role: "Founder & Product Strategist",
      company: "CAFLOOP (Green Coffee Husk Project)",
      period: "Sep 2024 — Present",
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
      period: "Jul — Aug 2025",
      bullets: [
        "Shadowed operational supply-chain workflows and audited inventory data entry at a local coffee processing facility.",
        "Grounded theoretical economics into daily agricultural facility operations and supply-chain logistics.",
      ],
    },
    {
      role: "Founder & President",
      company: "Dakonomics Club",
      period: "2024 — Present",
      bullets: [
        "Established the first high-school economics club in Dak Lak with a 9-person core team spanning 5 schools.",
        "Curated a digital 'CaseBank' for real-world business analysis and trained students in micro/macro models.",
        "Organized the 'Dakonomics Green Ideas Competition' (SDG 12) with participants from 18 provinces.",
        "Selected Top 14 teams and facilitated workshops for 50+ students with national startup experts.",
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
      period: "Nov 2024 — Present",
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
      <main className="pt-32 sm:pt-36 pb-20 bg-[#ebe6dd] min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          {/* Page Header */}
          <div className="flex items-center gap-4 mb-12 pb-6 border-b border-[#d8d2c7]">
            <div className="w-12 h-12 rounded-2xl bg-[#183e2b] flex items-center justify-center shrink-0 shadow-sm text-white">
              <User className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-xs font-semibold text-[#d9531e] uppercase tracking-wider block">
                {"// Personal Biography & Leadership"}
              </span>
              <h1 className="font-anton text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#1c1510]">
                ABOUT QUỲNH CHI
              </h1>
            </div>
          </div>

          {/* Large Glowing Portrait Banner */}
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] max-h-[500px] bg-[#1a201a] mb-14 shadow-lg border border-[#d8d2c7]">
            <Image
              src="/images/quynhchi/hero-coffee-farm.jpg"
              alt="Phan Hoàng Quỳnh Chi in Dak Lak"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white max-w-xl">
              <span className="px-3 py-1 rounded-full bg-[#183e2b]/80 backdrop-blur-sm text-white text-xs font-mono font-semibold">
                Dak Lak • Vietnam
              </span>
              <h2 className="font-anton text-2xl sm:text-4xl uppercase tracking-tight mt-2 text-white">
                The Mind of an Analyst. The Heart of the Highlands.
              </h2>
            </div>
          </div>

          {/* Bio & Philosophy 2-Column Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="rounded-3xl border border-[#d8d2c7] bg-[#f6f3eb] blueprint-grid p-8 sm:p-10 shadow-sm">
              <span className="font-mono text-xs font-semibold text-[#d9531e] uppercase tracking-wider block mb-3">
                {"// Background & Origins"}
              </span>
              <h2 className="font-anton text-2xl sm:text-3xl uppercase text-[#1c1510] mb-4">
                Highland Roots &amp; Empirical Awakening
              </h2>
              <p className="text-sm sm:text-base text-[#382215] leading-relaxed">
                Growing up in Dak Lak, the coffee capital of Vietnam, my childhood was defined by two sensory memories: the resonant echoes of the indigenous T’rưng instrument fading through loudspeakers, and the acrid smell of coffee husks burning along the highways. For years, I accepted these simply as the background of my hometown. But as I grew older, data revealed that 1.6M tons of burned agricultural waste creates 1.8M tons of CO2—stripping farmers of $80M in carbon value due to a lack of MRV tools.
              </p>
            </div>

            <div className="rounded-3xl border border-[#d8d2c7] bg-[#f6f3eb] blueprint-grid p-8 sm:p-10 shadow-sm">
              <span className="font-mono text-xs font-semibold text-[#183e2b] uppercase tracking-wider block mb-3">
                {"// Core Philosophy"}
              </span>
              <h2 className="font-anton text-2xl sm:text-3xl uppercase text-[#1c1510] mb-4">
                Empathy Meets Empirical Tools
              </h2>
              <p className="text-sm sm:text-base text-[#382215] leading-relaxed">
                Empathy is merely a starting point. To protect what I love, I need empirical tools. Economics provides me with the systems-thinking required to design sustainable value chains, while Data Science equips me with the evidence needed to transform invisible assets—from a musical note to a carbon credit—into measurable, equitable impact. I don&apos;t just crunch numbers; I code solutions that protect the soil and elevate the soul of the Central Highlands.
              </p>
            </div>
          </div>

          {/* Quote Banner */}
          <div className="rounded-3xl bg-[#0b1710] text-white p-10 sm:p-16 mb-24 relative overflow-hidden blueprint-grid-dark shadow-xl border border-[#233529]">
            <Quote className="w-12 h-12 text-[#22c55e] mb-6 opacity-80" />
            <blockquote className="font-anton text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-tight text-white max-w-3xl">
              “I don&apos;t just crunch numbers; I code solutions that protect the soil and elevate the soul of the Central Highlands.”
            </blockquote>
            <p className="mt-4 font-mono text-xs sm:text-sm text-[#d97706]">
              {"// Phan Hoàng Quỳnh Chi — High School for The Gifted (VNUHCM)"}
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12 pb-6 border-b border-[#d8d2c7]">
              <div className="w-12 h-12 rounded-2xl bg-[#183e2b] flex items-center justify-center shrink-0 shadow-sm text-white">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs font-semibold text-[#d9531e] uppercase tracking-wider block">
                  {"// Track Record"}
                </span>
                <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-[#1c1510]">
                  EXPERIENCE &amp; INITIATIVES
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#d8d2c7] bg-[#f6f3eb] blueprint-grid p-6 sm:p-8 shadow-sm hover:border-[#b8b0a2] transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#d8d2c7]">
                    <div>
                      <h3 className="font-anton text-xl sm:text-2xl uppercase text-[#1c1510]">
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#183e2b]">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#5e544a] bg-white px-3.5 py-1 rounded-full border border-[#d8d2c7] self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#4a3f35]">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-[#d9531e] font-bold mt-0.5">•</span>
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
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/10 border border-[#d8d2c7] shadow-sm">
              <Image
                src="/images/quynhchi/cafloop-cascara.jpg"
                alt="CAFLOOP Cascara Tea Venture"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-xs font-medium">
                CAFLOOP: Circular Cascara Tea &amp; QR Traceability
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/10 border border-[#d8d2c7] shadow-sm">
              <Image
                src="/images/quynhchi/about-analyst.jpg"
                alt="Quantitative Research at desk"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-xs font-medium">
                SPSS ANOVA &amp; Logistic Regression Research
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/10 border border-[#d8d2c7] shadow-sm">
              <Image
                src="/images/quynhchi/trung-heritage.jpg"
                alt="Traditional T'rưng Solo Performance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-xs font-medium">
                T&apos;rưng Cultural Education &amp; Solo Recitals
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
