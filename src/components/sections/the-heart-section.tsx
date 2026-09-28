"use client";

import Image from "next/image";
import {
  HeartHandshake,
  Music,
  Palette,
  Bike,
  ShieldAlert,
  Scale,
  Play,
  Video
} from "lucide-react";

export function TheHeartSection() {

  const projects = [
    {
      id: "trung-preservation",
      icon: Music,
      category: "Cultural Preservation",
      badge: "2,300+ Students • 12+ Schools",
      title: "T'rưng Cultural Education Project",
      role: "Founder & Organizer (Nov 2024 — Present)",
      description:
        "Refusing to let indigenous music become a museum relic, I launched a systemic educational initiative. I synthesized indigenous oral heritage from the Central Highlands into a structured curriculum. Scaling the impact, I coordinated performances and interactive workshops across 12+ schools, engaging ~2,300 students.",
      impact:
        "Digital Impact: Managed a cultural media page (5,000+ followers) and digitized performances via a YouTube archive (10,000+ views) to promote cultural preservation.",
      image: "/images/quynhchi/trung-heritage.jpg",
      accent: "text-[#22c55e]",
    },
    {
      id: "artistic-voice",
      icon: Palette,
      category: "Cultural Ambassadorship & Artistic Expression",
      badge: "Lead Soloist & International Exhibitor",
      title: "The Artist's Voice: Bridging Gaps Through Arts",
      role: "Traditional T'rưng Soloist & International Exhibitor",
      description:
        "Art is the most visceral medium for cultural preservation. I actively bring the soul of the Central Highlands to broader audiences through both music and visual arts.",
      subItems: [
        {
          label: "Musical Performance (Thanh Âm Đất Việt 2025, HCMC)",
          text: "Served as the featured lead artist (Traditional T'rưng Soloist) for ~150 urban attendees, intentionally using art to bridge the cultural gap between rural highlands and the modern metropolis.",
        },
        {
          label: "Visual Arts & International Exhibition (Philippines 2026)",
          text: "My artwork, 'Along the Waters of Srepok 3 Hydropower Plant, Dak Lak,' was featured in an international exhibition at the Museo ning Angeles, Philippines (Jul 2026), projecting hometown ecological narratives on a global stage.",
        },
      ],
      image: "/images/quynhchi/trung-heritage.jpg",
      accent: "text-[#d97706]",
    },
    {
      id: "ea-wer",
      icon: Bike,
      category: "Philanthropy & Empathy",
      badge: "77 Bicycles • 2 Smart TVs",
      title: "The Ea Wer Project & Social Reinvestment",
      role: "Coordinator (2024 — Present)",
      description:
        "Directed early profits from CAFLOOP and mobilized community resources to donate 77 bicycles and 2 smart TVs to underserved primary students in Dak Lak (Buon Drang Phok). Visiting their homes—seeing the stark contrast between the shiny new bicycles we donated and their families' stripped-down, rusty motorcycles—cemented my belief that our gifts were not just vehicles, but essential fulcrums holding up their dreams of education amidst harsh realities.",
      image: "/images/quynhchi/hero-coffee-farm.jpg",
      accent: "text-[#d9531e]",
    },
    {
      id: "advocacy",
      icon: ShieldAlert,
      category: "Environmental & Community Advocacy",
      badge: "Wildlife & Road Safety",
      title: "Whisper of the Wild & Hoa Sen Bridge Alliance",
      role: "Campaign Lead & Public Service",
      description:
        "Mobilizing tangible grassroots action through financial discipline and international youth alliances.",
      subItems: [
        {
          label: "Whisper of the Wild (Head of External Relations)",
          text: "Monetized conservation through product-based fundraising. Utilized financial spreadsheets to track COGS and generated 4,000,000 VND net profit for the Củ Chi Wildlife Rescue Station through interactive notebooks and eco-red packets.",
        },
        {
          label: "Hoa Sen Bridge Alliance (Jul 2026 — Present)",
          text: "Co-organized a youth-led road safety campaign with IKU and KIYA. Out of 35,000 reflective wristbands distributed globally, directly presented 500 wristbands and hosted workshops for students in a disadvantaged Dak Lak commune.",
        },
        {
          label: "Public Academic Service",
          text: "Supported logistics for the VIASM Math Open Day and served as a translator for US Boarding School Fairs.",
        },
      ],
      image: "/images/quynhchi/cafloop-cascara.jpg",
      accent: "text-[#22c55e]",
    },
    {
      id: "debate",
      icon: Scale,
      category: "Public Policy & Debate",
      badge: "Breaking Judge & Champion",
      title: "The Logical Adjudicator",
      role: "National Debate Champion & Breaking Judge",
      description:
        "Serving as a Breaking Judge at national debates and a National Champion Competitor, I assess claims not by rhetoric, but through economics and logic. I dissect assumptions, trace empirical evidence, and analyze human incentives, constantly asking: 'If this policy is enacted, how will stakeholders actually react?'",
      image: "/images/quynhchi/about-analyst.jpg",
      accent: "text-[#d97706]",
    },
  ];

  return (
    <section id="the-heart" className="bg-[#0b1710] text-white py-24 sm:py-32 overflow-hidden blueprint-grid-dark">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-[#233529]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#d9531e] flex items-center justify-center shrink-0 shadow-sm text-white">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-white">
                THE HEART
              </h2>
            </div>
          </div>


        </div>

        {/* Featured Multimedia Showcase: T'rưng Heritage & Music */}
        <div className="relative rounded-3xl border border-[#233529] bg-[#121f16] p-6 sm:p-10 mb-16 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual stage / instrument */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/9] bg-black border border-white/10 group">
              <Image
                src="/images/quynhchi/trung-heritage.jpg"
                alt="Traditional T'rưng performance showcase"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Play simulation button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#d9531e]/90 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer">
                  <Play className="w-7 h-7 fill-white translate-x-0.5" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#22c55e] font-mono border border-white/10">
                  Live Showcase • Thanh Âm Đất Việt
                </span>
                <span className="font-mono text-white/70">
                  10,000+ YouTube Archive Views
                </span>
              </div>
            </div>

            {/* Showcase story */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20 text-xs font-mono font-semibold">
                <Music className="w-3.5 h-3.5" />
                <span>Featured Traditional T&apos;rưng Soloist</span>
              </div>
              <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                Echoes of the Central Highlands
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                Refusing to let indigenous music become a museum relic, I synthesized oral traditions into interactive curricula across 12+ schools for 2,300+ students, performing as featured soloist in Ho Chi Minh City to bridge highland culture with metropolitan audiences.
              </p>
              <div className="p-3.5 rounded-2xl bg-black/40 border border-[#233529] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-[#d97706]">
                  <Video className="w-4 h-4 text-red-400" />
                  <span>Digital Archive: 10,000+ Views</span>
                </div>
                <span className="text-[#22c55e]">5,000+ Community Followers</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const isWide = idx === 0 || idx === 1;
            return (
              <div
                key={project.id}
                className={`rounded-3xl border border-[#233529] bg-[#121f16] p-6 sm:p-8 flex flex-col justify-between hover:border-[#22c55e]/50 transition-all duration-300 shadow-lg ${isWide && idx === 0 ? "lg:col-span-2" : ""
                  }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#233529]">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-[#1c2e21] text-[#22c55e] flex items-center justify-center shrink-0 border border-white/5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[11px] font-bold text-white/60 uppercase">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white/5 text-white/80 border border-white/10 shrink-0">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h4 className="font-anton text-xl sm:text-2xl uppercase tracking-tight text-white mb-1 leading-snug">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-[#d9531e] font-semibold mb-4">
                    {project.role}
                  </p>

                  {/* Body Text */}
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Sub-items if present */}
                  {project.subItems && (
                    <div className="space-y-2.5 pt-2">
                      {project.subItems.map((sub, sIdx) => (
                        <div key={sIdx} className="p-3 rounded-xl bg-black/30 border border-white/5 text-xs">
                          <span className="font-bold text-white block mb-0.5">
                            {sub.label}
                          </span>
                          <span className="text-white/60 leading-relaxed block">
                            {sub.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Impact detail if present */}
                  {project.impact && (
                    <div className="mt-3 p-3 rounded-xl bg-[#183e2b]/30 border border-[#22c55e]/20 text-xs text-[#22c55e]">
                      {project.impact}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
