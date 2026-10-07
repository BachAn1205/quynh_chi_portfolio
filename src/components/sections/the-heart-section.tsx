"use client";

import { ProjectImageUpload } from "@/components/ui/project-image-upload";
import {
  HeartHandshake,
  Music,
  Bike,
  ShieldAlert,
  GraduationCap,
  Users,
  Video,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function TheHeartSection() {
  const { lang, t } = useLanguage();

  const projects = [
    {
      id: "ea-wer",
      icon: Bike,
      category: lang === "vi" ? "Thiện nguyện & Đồng hành cùng Học sinh Nghèo" : "Philanthropy & Underserved Student Aid",
      badge: lang === "vi" ? "77 Xe đạp • 2 Smart TV • Buôn Đrăng Phốk" : "77 Bicycles • 2 Smart TVs • Buon Drang Phok",
      title:
        lang === "vi"
          ? "Dự án Thiện nguyện Ea Wer & Hỗ trợ Giáo dục Buôn Đrăng Phốk"
          : "The Ea Wer Project & Buon Drang Phok Educational Support",
      role: lang === "vi" ? "Điều phối viên Dự án (2024 . Hiện tại)" : "Project Coordinator (2024 . Present)",
      description:
        lang === "vi"
          ? "Vận động nguồn lực cộng đồng và trích toàn bộ lợi nhuận ban đầu từ dự án kinh tế tuần hoàn CAFLOOP để trao tặng 77 xe đạp và 2 Smart TV cho học sinh tiểu học có hoàn cảnh đặc biệt khó khăn tại xã Ea Wer và buôn Đrăng Phốk (tỉnh Đắk Lắk). Trực tiếp đến thăm từng gia đình, thấu hiểu quãng đường bùn đất hiểm trở hàng ngày các em phải cuốc bộ tới trường, biến sự đồng cảm thành những chiếc xe đạp và thiết bị học tập thực tế giúp giữ vững ước mơ học tập."
          : "Mobilized community resources and directed early profits from CAFLOOP venture to donate 77 bicycles and 2 smart TVs to underserved primary students in Dak Lak (Buon Drang Phok, Ea Wer commune). Visiting student homes cemented the conviction that these bicycles were not just transportation, but vital fulcrums keeping educational dreams alive.",
      impact:
        lang === "vi"
          ? "Tác động thực chứng: 77 học sinh có phương tiện đến trường, giảm thiểu tỷ lệ bỏ học mùa mưa lũ; 2 Smart TV hỗ trợ phòng học số hóa cho trường tiểu học buôn vùng sâu."
          : "Verifiable Impact: 77 students empowered with reliable school transport reducing dropout rates; 2 smart TVs equipped for rural primary school classrooms.",
      slotId: "heart-ea-wer",
      guideline: {
        vi: "Ảnh lễ trao tặng 77 xe đạp và smart TV cho học sinh tiểu học tại buôn Đrăng Phốk hoặc ảnh thực tế hỗ trợ tại xã Ea Wer.",
        en: "Photo of donating 77 bicycles and smart TVs in Buon Drang Phok or community work in Ea Wer."
      },
      accent: "text-[#1B3B2B]",
    },
    {
      id: "wildlife",
      icon: ShieldAlert,
      category:
        lang === "vi"
          ? "Bảo vệ Động vật Hoang dã & Gây quỹ Xã hội"
          : "Wildlife Conservation & Social Fundraising",
      badge:
        lang === "vi"
          ? "4.000.000 VNĐ Lợi nhuận Ròng • Trạm Cứu hộ Củ Chi"
          : "4,000,000 VND Net Profit • Cu Chi Wildlife Station",
      title:
        lang === "vi"
          ? "Whisper of the Wild - Gây quỹ Bảo tồn Động vật Hoang dã"
          : "Whisper of the Wild - Cu Chi Wildlife Rescue Fundraiser",
      role:
        lang === "vi"
          ? "Trưởng ban Đối ngoại (2024 . Hiện tại)"
          : "Head of External Relations (2024 . Present)",
      description:
        lang === "vi"
          ? "Trực tiếp chỉ đạo và điều hành chiến dịch gây quỹ thương mại hóa các sản phẩm sáng tạo nhằm gây quỹ cho Trạm Cứu hộ Động vật Hoang dã Củ Chi. Ứng dụng kỹ năng tài chính và bảng tính phân tích giá vốn (COGS) chặt chẽ, tối ưu hóa chi phí sản xuất sổ tay tương tác và phong bao lì xì sinh thái, đem lại 4.000.000 VNĐ lợi nhuận ròng tài trợ trực tiếp cho công tác chăm sóc động vật được cứu hộ."
          : "Directed a product-based fundraising campaign, utilizing financial spreadsheets to track COGS and generating 4,000,000 VND in net profit for the Cu Chi Wildlife Rescue Station. Monetized conservation through interactive notebooks and eco-red packets with rigorous unit economics.",
      impact:
        lang === "vi"
          ? "Tác động tài chính & bảo tồn: 4.000.000 VNĐ lợi nhuận ròng giải ngân cho y tế & dinh dưỡng thú hoang dã cứu hộ; lan tỏa thông điệp bảo vệ hệ sinh thái rừng đến giới trẻ."
          : "Conservation Impact: 4,000,000 VND net profit directly disbursed for medical supplies and nutrition at Cu Chi Station; raised wildlife awareness across youth networks.",
      slotId: "heart-wildlife",
      guideline: {
        vi: "Ảnh các sản phẩm gây quỹ sổ tay/bao lì xì Whisper of the Wild, hoặc hoạt động trao quỹ tại Trạm Cứu hộ Củ Chi.",
        en: "Photo of Whisper of the Wild fundraising notebooks/packets or donation at Cu Chi Wildlife Station."
      },
      accent: "text-[#7B0323]",
    },
    {
      id: "public-service",
      icon: GraduationCap,
      category:
        lang === "vi"
          ? "Phục vụ Học thuật & Hoạt động Công ích"
          : "Public Academic Service & Educational Volunteerism",
      badge:
        lang === "vi"
          ? "VIASM Math Open Day • US Boarding School Fairs"
          : "VIASM Math Open Day • US Boarding School Fairs",
      title:
        lang === "vi"
          ? "Hoạt động Công ích & Phục vụ Học thuật Cộng đồng"
          : "Public Academic Service & Educational Volunteering",
      role:
        lang === "vi"
          ? "Tình nguyện viên Hậu cần & Phiên dịch viên (2024 . Hiện tại)"
          : "Logistics Volunteer & Event Translator (2024 . Present)",
      description:
        lang === "vi"
          ? "Tích cực cống hiến sức trẻ cho các sự kiện học thuật cộng đồng quy mô lớn. Đảm nhận công tác hỗ trợ hậu cần điều phối trong Ngày hội Toán học Mở (Math Open Day) do Viện Nghiên cứu Cao cấp về Toán (VIASM) chủ trì; đồng thời tình nguyện làm phiên dịch viên Anh - Việt tại Triển lãm Du học Trường Nội trú Hoa Kỳ (US Boarding School Fairs), hỗ trợ hàng trăm học sinh và phụ huynh tiếp cận thông tin học thuật và học bổng quốc tế."
          : "Supported logistics for the VIASM Math Open Day organized by the Vietnam Institute for Advanced Study in Mathematics, and served as a dedicated translator for US Boarding School Fairs, assisting hundreds of students and parents in navigating scholarship and academic opportunities.",
      impact:
        lang === "vi"
          ? "Đóng góp công ích: Hỗ trợ vận hành sự kiện toán học học thuật cho hàng nghìn người tham dự và làm cầu nối ngôn ngữ cho các gia đình tìm kiếm cơ hội học tập quốc tế."
          : "Public Contribution: Supported major academic mathematics outreach and provided bilingual bridging for students seeking international education.",
      slotId: "heart-public-service",
      guideline: {
        vi: "Ảnh hoạt động hỗ trợ hậu cần tại Ngày hội Toán học VIASM hoặc ảnh làm phiên dịch viên tại Triển lãm Du học Nội trú Mỹ.",
        en: "Photo supporting VIASM Math Open Day logistics or serving as translator at US Boarding School Fairs."
      },
      accent: "text-[#1B3B2B]",
    },
    {
      id: "road-safety",
      icon: Users,
      category:
        lang === "vi"
          ? "Chiến dịch An toàn Giao thông & Sức khỏe Cộng đồng"
          : "Youth Road Safety & Community Health Advocacy",
      badge:
        lang === "vi"
          ? "500 Vòng tay Phản quang • Xã khó khăn Đắk Lắk"
          : "500 Reflective Wristbands • Rural Dak Lak",
      title:
        lang === "vi"
          ? "Liên minh Hoa Sen Bridge - An toàn Giao thông Học đường"
          : "Hoa Sen Bridge Alliance - Youth-Led Road Safety",
      role:
        lang === "vi"
          ? "Điều phối viên Chiến dịch Địa phương"
          : "Local Campaign Coordinator",
      description:
        lang === "vi"
          ? "Đồng tổ chức chiến dịch an toàn giao thông do thanh niên dẫn dắt phối hợp cùng liên minh IKU và KIYA. Trước thực trạng các tuyến đường liên thôn vùng cao thiếu đèn chiếu sáng khiến học sinh gặp nhiều rủi ro khi tan học vào buổi tối, tôi trực tiếp vận chuyển và trao tặng 500 vòng tay phản quang chuyên dụng, đồng thời tổ chức workshop kỹ năng nhận diện rủi ro giao thông cho học sinh tại xã vùng khó khăn thuộc tỉnh Đắk Lắk."
          : "Co-organized a youth-led road safety campaign with international youth alliances IKU and KIYA. Addressing the hazard of unlit rural roads in the Central Highlands, directly distributed 500 reflective safety wristbands and hosted interactive road safety workshops for students in a disadvantaged Dak Lak commune.",
      impact:
        lang === "vi"
          ? "Bảo vệ cộng đồng: 500 học sinh nông thôn được trang bị thiết bị phản quang nhận diện từ xa, giảm thiểu tai nạn giao thông học đường trong điều kiện thiếu sáng."
          : "Safety Impact: 500 rural students equipped with high-visibility reflective wristbands, substantially improving commuting safety in unlit conditions.",
      slotId: "heart-road-safety",
      guideline: {
        vi: "Ảnh trao tặng 500 vòng tay phản quang hoặc workshop an toàn giao thông cho học sinh tại xã vùng cao Đắk Lắk.",
        en: "Photo distributing reflective safety wristbands or conducting road safety workshop in rural Dak Lak."
      },
      accent: "text-[#7B0323]",
    },
    {
      id: "trung-preservation",
      icon: Music,
      category: lang === "vi" ? "Bảo tồn Văn hóa & Giáo dục Di sản" : "Cultural Heritage & Educational Preservation",
      badge: lang === "vi" ? "2.300+ Học sinh • 12+ Trường • 10k+ Views" : "2,300+ Students • 12+ Schools • 10k+ Views",
      title:
        lang === "vi"
          ? "Giáo dục Di sản Văn hóa Đàn T'rưng cho Thế hệ Trẻ"
          : "T'rưng Cultural Heritage & Youth Education Project",
      role:
        lang === "vi"
          ? "Người sáng lập, Điều phối viên & Nghệ sĩ Độc tấu (Tháng 11/2024 . Hiện tại)"
          : "Founder, Organizer & Traditional Soloist (Nov 2024 . Present)",
      description:
        lang === "vi"
          ? "Từ chối để âm nhạc bản địa trở thành hiện vật bảo tàng, tôi khởi xướng sáng kiến đưa văn hóa cồng chiêng và đàn T'rưng trở lại đời sống giới trẻ. Hệ thống hóa di sản truyền khẩu Tây Nguyên thành giáo trình trực quan; điều phối chuỗi biểu diễn và workshop tương tác tại 12+ trường học, tiếp cận ~2.300 học sinh; quản lý trang truyền thông (5.000+ followers) và số hóa kho lưu trữ YouTube (10.000+ views); nghệ sĩ độc tấu tại showcase 'Thanh Âm Đất Việt' (TP.HCM, 2025) và triển lãm nghệ thuật tại Bảo tàng Museo ning Angeles, Philippines (2026)."
          : "Refusing to let indigenous music become a museum relic, launched an educational initiative synthesizing oral T'rưng traditions into structured curricula across 12+ schools for ~2,300 students. Managed media channel (5,000+ followers) and digitized YouTube archive (10,000+ views); lead soloist at 'Thanh Am Dat Viet' in HCMC and visual art exhibitor at Museo ning Angeles, Philippines.",
      impact:
        lang === "vi"
          ? "Tác động văn hóa rộng khắp: 2.300+ học sinh được tiếp cận đàn T'rưng trực tiếp; 10.000+ lượt xem số hóa toàn cầu; gắn kết văn hóa Tây Nguyên với đô thị hiện đại."
          : "Cultural Impact: 2,300+ students directly engaged with T'rưng workshops; 10,000+ digital archive views; bridged highland heritage with urban metropolitan audiences.",
      slotId: "heart-trung-preservation",
      guideline: {
        vi: "Ảnh lớp học truyền dạy đàn T'rưng, buổi hòa nhạc tương tác cùng học sinh tại 12+ trường học hoặc ảnh độc tấu trên sân khấu.",
        en: "Photo teaching T'rưng at schools, interactive workshops with 2,300+ students, or live stage performance."
      },
      accent: "text-[#1B3B2B]",
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
                PRESERVE <span className="text-[#7B0323]">. PHAN HOÀNG QUỲNH CHI</span>
              </h2>
              <p className="text-xs sm:text-sm font-mono text-[#7B0323] font-semibold mt-1">
                {lang === "vi" ? "Dự Án Cộng Đồng, Thiện Nguyện, Lao Động Xã Hội & Bảo Tồn Di Sản" : "Community Initiatives, Philanthropy, Public Service & Cultural Preservation"}
              </p>
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
