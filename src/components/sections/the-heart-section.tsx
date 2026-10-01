"use client";

import { ProjectImageUpload } from "@/components/ui/project-image-upload";
import {
  HeartHandshake,
  Music,
  Palette,
  Bike,
  ShieldAlert,
  Scale,
  Video
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function TheHeartSection() {
  const { t } = useLanguage();

  const projects = [
    {
      id: "trung-preservation",
      icon: Music,
      category: "Cultural Preservation",
      badge: "2,300+ Students • 12+ Schools",
      title: "T'rưng Cultural Education Project",
      role: "Founder & Organizer (Nov 2024 . Present)",
      description:
        "Refusing to let indigenous music become a museum relic, I launched a systemic educational initiative. I synthesized indigenous oral heritage from the Central Highlands into a structured curriculum. Scaling the impact, I coordinated performances and interactive workshops across 12+ schools, engaging ~2,300 students.",
      impact:
        "Digital Impact: Managed a cultural media page (5,000+ followers) and digitized performances via a YouTube archive (10,000+ views) to promote cultural preservation.",
      slotId: "heart-trung-preservation",
      guideline: {
        vi: "Ảnh lớp học truyền dạy đàn T'rưng, buổi hòa nhạc tương tác cùng học sinh tại 12+ trường học.",
        en: "Workshops teaching T'rưng or interactive performances at schools."
      },
      accent: "text-[#4A7F4A]",
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
      slotId: "heart-artistic-voice",
      guideline: {
        vi: "Ảnh biểu diễn tại Thanh Âm Đất Việt hoặc ảnh tranh nghệ thuật trưng bày tại triển lãm Philippines.",
        en: "Performance at Thanh Âm Đất Việt or artwork in Philippines exhibition."
      },
      accent: "text-[#8C5A35]",
    },
    {
      id: "ea-wer",
      icon: Bike,
      category: "Philanthropy & Empathy",
      badge: "77 Bicycles • 2 Smart TVs",
      title: "The Ea Wer Project & Social Reinvestment",
      role: "Coordinator (2024 . Present)",
      description:
        "Directed early profits from CAFLOOP and mobilized community resources to donate 77 bicycles and 2 smart TVs to underserved primary students in Dak Lak (Buon Drang Phok). Visiting their homes.seeing the stark contrast between the shiny new bicycles we donated and their families' stripped-down, rusty motorcycles.cemented my belief that our gifts were not just vehicles, but essential fulcrums holding up their dreams of education amidst harsh realities.",
      slotId: "heart-ea-wer",
      guideline: {
        vi: "Ảnh hoạt động thiện nguyện trao tặng 77 xe đạp và smart TV cho học sinh nghèo tại buôn Đrăng Phốk.",
        en: "Charity event donating 77 bicycles and 2 smart TVs in Buon Drang Phok."
      },
      accent: "text-[#8C5A35]",
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
          label: "Hoa Sen Bridge Alliance (Jul 2026 . Present)",
          text: "Co-organized a youth-led road safety campaign with IKU and KIYA. Out of 35,000 reflective wristbands distributed globally, directly presented 500 wristbands and hosted workshops for students in a disadvantaged Dak Lak commune.",
        },
        {
          label: "Public Academic Service",
          text: "Supported logistics for the VIASM Math Open Day and served as a translator for US Boarding School Fairs.",
        },
      ],
      slotId: "heart-advocacy",
      guideline: {
        vi: "Ảnh chiến dịch gây quỹ Trạm cứu hộ Củ Chi hoặc hoạt động trao tặng vòng tay phản quang an toàn giao thông.",
        en: "Cu Chi Wildlife rescue fundraiser or reflective safety wristband campaign."
      },
      accent: "text-[#4A7F4A]",
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
      slotId: "heart-debate",
      guideline: {
        vi: "Ảnh làm trọng tài Breaking Judge hoặc thi đấu tại giải tranh biện toàn quốc.",
        en: "Photo as Breaking Judge or competitor at National Debate Championship."
      },
      accent: "text-[#8C5A35]",
    },
  ];

  return (
    <section id="the-heart" className="bg-[#FAF7F2] text-[#242220] py-24 sm:py-32 overflow-hidden blueprint-grid border-t border-[#1B3B2B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-[#1B3B2B]/15">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1B3B2B] flex items-center justify-center shrink-0 shadow-sm text-[#FAF7F2]">
              <HeartHandshake className="w-6 h-6 text-[#E2ECE5]" />
            </div>
            <div>
              <h2 className="font-anton text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#242220]">
                {t("heart.title")}
              </h2>
            </div>
          </div>
        </div>

        {/* Featured Multimedia Showcase: T'rưng Heritage & Music */}
        <div className="relative rounded-3xl border border-[#1B3B2B]/15 bg-[#FFFFFF] p-4 sm:p-8 lg:p-10 mb-12 sm:mb-16 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center">
            {/* Visual stage / instrument upload */}
            <div className="lg:col-span-7 self-center">
              <ProjectImageUpload
                slotId="heart-showcase"
                guideline={{
                  vi: "Ảnh sân khấu trình diễn độc tấu đàn T'rưng dân tộc hoặc hình ảnh nghệ thuật âm nhạc Tây Nguyên.",
                  en: "Stage performance playing traditional T'rưng or Central Highlands musical arts."
                }}
                aspectRatio="aspect-[16/9]"
              />
            </div>

            {/* Showcase story */}
            <div className="lg:col-span-5 space-y-4 self-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7B0323]/10 text-[#7B0323] border border-[#7B0323]/20 text-xs font-mono font-semibold">
                <Music className="w-3.5 h-3.5" />
                <span>{t("heart.showcase.badge")}</span>
              </div>
              <h3 className="font-anton text-xl sm:text-3xl uppercase tracking-tight text-[#242220] leading-tight">
                {t("heart.showcase.title")}
              </h3>
              <p className="text-xs sm:text-sm text-[#242220]/75 leading-relaxed">
                {t("heart.showcase.desc")}
              </p>
              <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#1B3B2B]/15 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-[#7B0323]">
                  <Video className="w-4 h-4 text-[#7B0323]" />
                  <span>{t("heart.showcase.stat1")}</span>
                </div>
                <span className="text-[#1B3B2B] font-bold">{t("heart.showcase.stat2")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const isFeatured = idx === 0;
            return (
              <div
                key={project.id}
                className={`rounded-3xl border border-[#1B3B2B]/15 bg-[#FFFFFF] p-6 sm:p-8 flex flex-col justify-between hover:border-[#1B3B2B]/35 hover:shadow-md transition-all duration-300 shadow-sm ${
                  isFeatured ? "md:col-span-2" : ""
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#1B3B2B]/15">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-xl bg-[#1B3B2B] text-[#FAF7F2] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#E2ECE5]" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#7B0323] uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    <span className="self-start sm:self-auto text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#7B0323]/10 text-[#7B0323] border border-[#7B0323]/20 shrink-0">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h4 className="font-anton text-xl sm:text-2xl uppercase tracking-tight text-[#242220] mb-1 leading-snug min-h-[2.5rem] flex items-center">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-[#7B0323] font-semibold mb-4 min-h-[1.25rem] flex items-center">
                    {project.role}
                  </p>

                  {/* Body Text */}
                  <p className="text-xs sm:text-sm text-[#242220]/75 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Sub-items if present */}
                  {project.subItems && (
                    <div className="space-y-2.5 pt-2">
                      {project.subItems.map((sub, sIdx) => (
                        <div key={sIdx} className="p-3 rounded-xl bg-[#FAF7F2] border border-[#1B3B2B]/15 text-xs">
                          <span className="font-bold text-[#242220] block mb-0.5">
                            {sub.label}
                          </span>
                          <span className="text-[#242220]/70 leading-relaxed block">
                            {sub.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Impact detail if present */}
                  {project.impact && (
                    <div className="mt-3 p-3 rounded-xl bg-[#E2ECE5]/50 border border-[#1B3B2B]/20 text-xs text-[#1B3B2B] font-medium">
                      {project.impact}
                    </div>
                  )}

                  {/* Upload & Preview */}
                  <div className="mt-6 pt-4 border-t border-[#1B3B2B]/15">
                    <ProjectImageUpload
                      slotId={project.slotId}
                      guideline={project.guideline}
                      aspectRatio="aspect-[16/9]"
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
