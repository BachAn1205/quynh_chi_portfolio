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
  const { lang, t } = useLanguage();

  const projects = [
    {
      id: "trung-preservation",
      icon: Music,
      category: lang === "vi" ? "Bảo tồn Văn hóa" : "Cultural Preservation",
      badge: lang === "vi" ? "2.300+ Học sinh • 12+ Trường học" : "2,300+ Students • 12+ Schools",
      title:
        lang === "vi"
          ? "Dự án Giáo dục Văn hóa Đàn T'rưng"
          : "T'rưng Cultural Education Project",
      role:
        lang === "vi"
          ? "Người sáng lập & Điều phối (Tháng 11/2024 . Hiện tại)"
          : "Founder & Organizer (Nov 2024 . Present)",
      description:
        lang === "vi"
          ? "Từ chối để âm nhạc bản địa trở thành hiện vật bảo tàng, tôi khởi xướng sáng kiến giáo dục có hệ thống. Tôi hệ thống hóa di sản truyền khẩu Tây Nguyên thành chương trình giảng dạy bài bản. Mở rộng tác động, tôi điều phối các buổi biểu diễn và workshop tương tác tại 12+ trường học, tiếp cận ~2.300 học sinh."
          : "Refusing to let indigenous music become a museum relic, I launched a systemic educational initiative. I synthesized indigenous oral heritage from the Central Highlands into a structured curriculum. Scaling the impact, I coordinated performances and interactive workshops across 12+ schools, engaging ~2,300 students.",
      impact:
        lang === "vi"
          ? "Tác động số: Quản lý trang truyền thông văn hóa (5.000+ người theo dõi) và số hóa các màn trình diễn qua kho lưu trữ YouTube (10.000+ lượt xem) để thúc đẩy bảo tồn văn hóa."
          : "Digital Impact: Managed a cultural media page (5,000+ followers) and digitized performances via a YouTube archive (10,000+ views) to promote cultural preservation.",
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
      category:
        lang === "vi"
          ? "Đại sứ Văn hóa & Biểu đạt Nghệ thuật"
          : "Cultural Ambassadorship & Artistic Expression",
      badge:
        lang === "vi"
          ? "Nghệ sĩ Độc tấu chính & Triển lãm Quốc tế"
          : "Lead Soloist & International Exhibitor",
      title:
        lang === "vi"
          ? "Tiếng nói Nghệ sĩ: Gắn kết Khoảng cách qua Nghệ thuật"
          : "The Artist's Voice: Bridging Gaps Through Arts",
      role:
        lang === "vi"
          ? "Nghệ sĩ Độc tấu Đàn T'rưng & Tác giả Triển lãm Quốc tế"
          : "Traditional T'rưng Soloist & International Exhibitor",
      description:
        lang === "vi"
          ? "Nghệ thuật là cầu nối trực giác và sâu sắc nhất để bảo tồn văn hóa. Tôi tích cực mang tâm hồn Tây Nguyên đến với công chúng rộng rãi thông qua cả âm nhạc và nghệ thuật thị giác."
          : "Art is the most visceral medium for cultural preservation. I actively bring the soul of the Central Highlands to broader audiences through both music and visual arts.",
      subItems: [
        {
          label:
            lang === "vi"
              ? "Biểu diễn Âm nhạc (Thanh Âm Đất Việt 2025, TP.HCM)"
              : "Musical Performance (Thanh Âm Đất Việt 2025, HCMC)",
          text:
            lang === "vi"
              ? "Nghệ sĩ độc tấu chính (Đàn T'rưng truyền thống) cho ~150 khán giả đô thị, dùng nghệ thuật để thu hẹp khoảng cách văn hóa giữa vùng cao và đô thị hiện đại."
              : "Served as the featured lead artist (Traditional T'rưng Soloist) for ~150 urban attendees, intentionally using art to bridge the cultural gap between rural highlands and the modern metropolis.",
        },
        {
          label:
            lang === "vi"
              ? "Nghệ thuật Thị giác & Triển lãm Quốc tế (Philippines 2026)"
              : "Visual Arts & International Exhibition (Philippines 2026)",
          text:
            lang === "vi"
              ? "Tác phẩm tranh 'Bên dòng nước Thủy điện Sêrêpôk 3, Đắk Lắk' được trưng bày tại triển lãm quốc tế ở Bảo tàng Museo ning Angeles (Tháng 7/2026), lan tỏa thông điệp sinh thái quê hương ra thế giới."
              : "My artwork, 'Along the Waters of Srepok 3 Hydropower Plant, Dak Lak,' was featured in an international exhibition at the Museo ning Angeles, Philippines (Jul 2026), projecting hometown ecological narratives on a global stage.",
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
      category: lang === "vi" ? "Thiện nguyện & Sự Đồng cảm" : "Philanthropy & Empathy",
      badge: lang === "vi" ? "77 Xe đạp • 2 Smart TV" : "77 Bicycles • 2 Smart TVs",
      title:
        lang === "vi"
          ? "Dự án Ea Wer & Tái Đầu tư Xã hội"
          : "The Ea Wer Project & Social Reinvestment",
      role: lang === "vi" ? "Điều phối viên (2024 . Hiện tại)" : "Coordinator (2024 . Present)",
      description:
        lang === "vi"
          ? "Dành toàn bộ lợi nhuận ban đầu từ CAFLOOP và vận động nguồn lực cộng đồng để trao tặng 77 xe đạp và 2 Smart TV cho học sinh tiểu học buôn Đrăng Phốk (xã Ea Wer, Đắk Lắk). Tận mắt chứng kiến sự tương phản giữa những chiếc xe đạp mới bóng loáng và những chiếc xe máy rỉ sét cũ kỹ của gia đình các em đã củng cố niềm tin trong tôi: món quà trao đi không chỉ là phương tiện di chuyển, mà là điểm tựa giữ vững ước mơ đến trường trước những khắc nghiệt đời thường."
          : "Directed early profits from CAFLOOP and mobilized community resources to donate 77 bicycles and 2 smart TVs to underserved primary students in Dak Lak (Buon Drang Phok). Visiting their homes... cemented my belief that our gifts were not just vehicles, but essential fulcrums holding up their dreams of education amidst harsh realities.",
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
      category:
        lang === "vi"
          ? "Hành động vì Môi trường & Cộng đồng"
          : "Environmental & Community Advocacy",
      badge:
        lang === "vi"
          ? "Bảo vệ Động vật hoang dã & An toàn Giao thông"
          : "Wildlife & Road Safety",
      title:
        lang === "vi"
          ? "Whisper of the Wild & Liên minh Hoa Sen Bridge"
          : "Whisper of the Wild & Hoa Sen Bridge Alliance",
      role:
        lang === "vi"
          ? "Trưởng chiến dịch & Hoạt động Công ích"
          : "Campaign Lead & Public Service",
      description:
        lang === "vi"
          ? "Thúc đẩy các hành động thiết thực từ cơ sở thông qua kỷ luật tài chính và mạng lưới liên minh thanh niên quốc tế."
          : "Mobilizing tangible grassroots action through financial discipline and international youth alliances.",
      subItems: [
        {
          label:
            lang === "vi"
              ? "Whisper of the Wild (Trưởng ban Đối ngoại)"
              : "Whisper of the Wild (Head of External Relations)",
          text:
            lang === "vi"
              ? "Thương mại hóa hoạt động bảo tồn qua gây quỹ sản phẩm. Sử dụng bảng tính quản trị chi phí COGS, đem lại 4.000.000 VNĐ lợi nhuận ròng tài trợ Trạm cứu hộ Động vật hoang dã Củ Chi thông qua sổ tay tương tác và phong bao lì xì sinh thái."
              : "Monetized conservation through product-based fundraising. Utilized financial spreadsheets to track COGS and generated 4,000,000 VND net profit for the Củ Chi Wildlife Rescue Station through interactive notebooks and eco-red packets.",
        },
        {
          label:
            lang === "vi"
              ? "Liên minh Hoa Sen Bridge (Tháng 7/2026 . Hiện tại)"
              : "Hoa Sen Bridge Alliance (Jul 2026 . Present)",
          text:
            lang === "vi"
              ? "Đồng tổ chức chiến dịch an toàn giao thông do thanh niên dẫn dắt cùng IKU và KIYA. Trong số 35.000 vòng tay phản quang phân phối toàn cầu, trực tiếp trao tặng 500 vòng tay và tổ chức workshop cho học sinh vùng khó khăn tại Đắk Lắk."
              : "Co-organized a youth-led road safety campaign with IKU and KIYA. Out of 35,000 reflective wristbands distributed globally, directly presented 500 wristbands and hosted workshops for students in a disadvantaged Dak Lak commune.",
        },
        {
          label:
            lang === "vi"
              ? "Phục vụ Học thuật Cộng đồng"
              : "Public Academic Service",
          text:
            lang === "vi"
              ? "Hỗ trợ hậu cần cho Ngày hội Toán học Mở VIASM và làm phiên dịch viên tại Triển lãm Trường Nội trú Hoa Kỳ."
              : "Supported logistics for the VIASM Math Open Day and served as a translator for US Boarding School Fairs.",
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
      category: lang === "vi" ? "Chính sách Công & Tranh biện" : "Public Policy & Debate",
      badge:
        lang === "vi"
          ? "Trọng tài Breaking Judge & Quán quân"
          : "Breaking Judge & Champion",
      title:
        lang === "vi"
          ? "Trọng tài Tranh biện dựa trên Logic & Kinh tế"
          : "The Logical Adjudicator",
      role:
        lang === "vi"
          ? "Quán quân Tranh biện Toàn quốc & Trọng tài Breaking Judge"
          : "National Debate Champion & Breaking Judge",
      description:
        lang === "vi"
          ? "Với vai trò Trọng tài Breaking Judge tại các giải tranh biện quốc gia và Quán quân toàn quốc, tôi đánh giá lập luận không dựa trên tài hùng biện suông, mà qua lăng kính kinh tế học và logic thực nghiệm. Tôi phân tích các giả định ngầm, đối chiếu bằng chứng thực nghiệm và phân tích động cơ hành vi của con người, luôn đặt câu hỏi: 'Nếu chính sách này được ban hành, các bên liên quan sẽ thực sự phản ứng như thế nào?'"
          : "Serving as a Breaking Judge at national debates and a National Champion Competitor, I assess claims not by rhetoric, but through economics and logic. I dissect assumptions, trace empirical evidence, and analyze human incentives, constantly asking: 'If this policy is enacted, how will stakeholders actually react?'",
      slotId: "heart-debate",
      guideline: {
        vi: "Ảnh làm trọng tài Breaking Judge hoặc thi đấu tại giải tranh biện toàn quốc.",
        en: "Photo as Breaking Judge or competitor at National Debate Championship."
      },
      accent: "text-[#8C5A35]",
    },
  ];

  return (
    <section id="the-heart" className="bg-[#FAF7F2] text-[#242220] pt-6 sm:pt-8 pb-12 sm:pb-16 overflow-hidden blueprint-grid border-t border-[#1B3B2B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8 pb-4 sm:pb-5 border-b border-[#1B3B2B]/15">
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
