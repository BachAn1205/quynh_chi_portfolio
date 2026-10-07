"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { User, Briefcase, Quote } from "lucide-react";
import { PageNav } from "@/components/ui/page-nav";
import { ProjectImageUpload } from "@/components/ui/project-image-upload";
import { useLanguage } from "@/lib/i18n";

export default function AboutPage() {
  const { lang, t } = useLanguage();

  const dataPills = [
    {
      label: lang === "vi" ? "1,6 triệu tấn phế phụ phẩm" : "1.6M Tons Ag Waste",
      bg: "bg-[#1B3B2B] text-[#FAF7F2] -rotate-3",
    },
    {
      label: lang === "vi" ? "1,8 triệu tấn phát thải CO2" : "1.8M Tons CO2 Impact",
      bg: "bg-[#FFFFFF] text-[#242220] border border-[#1B3B2B]/20 rotate-2",
    },
    {
      label: lang === "vi" ? "Thất thoát $80M giá trị carbon" : "$80M Carbon Value Loss",
      bg: "bg-[#7B0323] text-[#FFFFFF] -rotate-2",
    },
    {
      label: lang === "vi" ? "Mô hình Kinh tế lượng SPSS" : "SPSS Econometric Modeling",
      bg: "bg-[#1B3B2B] text-[#E2ECE5] rotate-3",
    },
    {
      label: lang === "vi" ? "Độ chính xác dự báo 83,5%" : "83.5% Predictive Accuracy",
      bg: "bg-[#FFFFFF] text-[#7B0323] border border-[#7B0323]/30 -rotate-1",
    },
    {
      label: lang === "vi" ? "Di sản truyền khẩu T'rưng" : "T'rưng Oral Heritage",
      bg: "bg-[#1B3B2B] text-[#FAF7F2] rotate-2",
    },
    {
      label: lang === "vi" ? "2.300+ Học sinh tiếp cận" : "2,300+ Students Engaged",
      bg: "bg-[#7B0323] text-[#FFFFFF] -rotate-3",
    },
  ];

  const initiatives = [
    {
      title: "CAFLOOP (Green Coffee Husk Project)",
      role: lang === "vi" ? "Người sáng lập & Chiến lược Sản phẩm" : "Founder & Product Strategist",
      period: lang === "vi" ? "Tháng 9/2024 . Hiện tại" : "Sep 2024 . Present",
      category: lang === "vi" ? "Kinh tế tuần hoàn & Khởi nghiệp" : "Circular Economy & Venture",
      badge: lang === "vi" ? "1,6M Tấn Phế phẩm • Tín chỉ Carbon" : "1.6M Tons Ag Waste • Carbon Credits",
      slotId: "build-cafloop",
      guideline: {
        vi: "Ảnh Quỳnh Chi đang trực tiếp nghiên cứu vỏ cà phê / sản phẩm trà Cascara / quy trình sấy chế biến / bao bì sản phẩm có mã QR.",
        en: "Photo of Quynh Chi working with coffee husks, Cascara tea products, processing workflow, or QR packaging."
      },
      summary: lang === "vi"
        ? "Doanh nghiệp kinh tế tuần hoàn chuyển hóa phế phụ phẩm vỏ cà phê phát thải CO2 tại Đắk Lắk thành trà Cascara thương mại và các sản phẩm bền vững gia tăng giá trị."
        : "A circular-economy venture upcycling coffee agricultural waste in Dak Lak to reduce CO2 emissions and create value-added commercial Cascara tea.",
      highlights: [
        {
          title: lang === "vi" ? "Chuyển hóa Phế phẩm & Giảm Phát thải" : "Waste Upcycling & Emissions Reduction",
          desc: lang === "vi"
            ? "Khởi xướng dự án tận dụng 1,6 triệu tấn phế phụ phẩm cà phê bị đốt hàng năm tại Việt Nam, chuyển hóa thành trà Cascara thương mại đạt chuẩn an toàn vệ sinh thực phẩm."
            : "Initiated a project transforming CO2-emitting coffee husks in Dak Lak into commercial Cascara tea, addressing 1.6M tons of agricultural waste."
        },
        {
          title: lang === "vi" ? "Quản trị Chi phí (COGS) & Tự lực Vốn" : "Bootstrapping & COGS Optimization",
          desc: lang === "vi"
            ? "Tự lực vốn trong giai đoạn đầu; trực tiếp lập bảng kiểm soát giá vốn hàng bán (COGS), quản trị dòng tiền, phân bổ ngân sách và tối ưu hóa giá bán trên từng mẻ sản phẩm."
            : "Tracked production costs (COGS), structured basic budgets, and optimized pricing during the initial bootstrapping phase."
        },
        {
          title: lang === "vi" ? "Minh bạch Chuỗi cung ứng bằng Mã QR" : "QR-Code Traceability Integration",
          desc: lang === "vi"
            ? "Tích hợp hệ thống truy xuất nguồn gốc mã QR trên từng bao bì để minh bạch chuỗi cung ứng từ nông trường tới người tiêu dùng, kết hợp thu thập dữ liệu hành vi khách hàng."
            : "Integrated QR-code traceability on packaging to ensure radical supply chain transparency and study customer interaction data."
        },
        {
          title: lang === "vi" ? "Tái đầu tư Xã hội cho Buôn Đrăng Phốk" : "Social Reinvestment & Community Impact",
          desc: lang === "vi"
            ? "Trích lợi nhuận ban đầu để tài trợ đồ dùng học tập, sách vở và phương tiện cho học sinh tiểu học có hoàn cảnh khó khăn tại Buôn Đrăng Phốk, tỉnh Đắk Lắk."
            : "Reinvested early profits to fund school supplies and educational equipment for students in Buon Drang Phok, Dak Lak."
        }
      ],
      tags: ["Circular Economy", "COGS Budgeting", "Traceability QR", "Cascara Tea", "Carbon Credits", "Buon Drang Phok"]
    },
    {
      title: "T’rưng Cultural Education Project",
      role: lang === "vi" ? "Người sáng lập & Điều phối viên" : "Founder & Organizer",
      period: lang === "vi" ? "Tháng 11/2024 . Hiện tại" : "Nov 2024 . Present",
      category: lang === "vi" ? "Bảo tồn Văn hóa & Giáo dục Di sản" : "Cultural Heritage & Education",
      badge: lang === "vi" ? "12+ Trường học • 2.300+ Học sinh" : "12+ Schools • 2,300+ Students",
      slotId: "build-trung",
      guideline: {
        vi: "Ảnh Quỳnh Chi trình diễn đàn T'rưng, tổ chức workshop tương tác hoặc lớp học truyền dạy âm nhạc dân tộc tại các trường học.",
        en: "Photo of Quynh Chi playing T'rưng, hosting interactive workshops, or teaching indigenous music at schools."
      },
      summary: lang === "vi"
        ? "Sáng kiến giáo dục chuyển hóa di sản âm nhạc truyền khẩu T’rưng Tây Nguyên thành chương trình workshop bài bản nhằm trao quyền và truyền cảm hứng cho thanh thiếu niên."
        : "An educational initiative transforming indigenous T’rưng oral heritage from the Central Highlands into a structured curriculum to empower local youth.",
      highlights: [
        {
          title: lang === "vi" ? "Hệ thống hóa Di sản Truyền khẩu" : "Synthesizing Oral Traditions",
          desc: lang === "vi"
            ? "Từ chối để âm nhạc bản địa mai một thành hiện vật bảo tàng, đã tổng hợp các giai điệu và kỹ thuật diễn tấu T'rưng truyền khẩu thành giáo trình trực quan, sinh động."
            : "Synthesized indigenous T’rưng oral heritage from the Central Highlands into a structured, engaging educational curriculum."
        },
        {
          title: lang === "vi" ? "Tổ chức Workshop trên 12+ Trường học" : "12+ School Workshops & 2,300+ Students",
          desc: lang === "vi"
            ? "Điều phối các buổi biểu diễn và workshop tương tác trực tiếp tại 12+ trường học, thu hút và truyền cảm hứng gìn giữ văn hóa cho hơn 2.300 học sinh."
            : "Coordinated live performances and interactive workshops across 12+ schools and engaged ~2,300 students."
        },
        {
          title: lang === "vi" ? "Số hóa Kho Lưu trữ & Truyền thông" : "Digital Archive & Social Impact",
          desc: lang === "vi"
            ? "Xây dựng và điều hành trang truyền thông văn hóa với 5.000+ người theo dõi; số hóa các tiết mục biểu diễn qua kho lưu trữ YouTube đạt hơn 10.000 lượt xem."
            : "Managed a cultural media page (5,000+ followers) and digitized performances via a YouTube archive (10,000+ views) to promote cultural preservation."
        },
        {
          title: lang === "vi" ? "Nghệ sĩ Độc tấu & Triển lãm Quốc tế" : "Lead Soloist & International Art Exhibitor",
          desc: lang === "vi"
            ? "Nghệ sĩ độc tấu chính tại showcase 'Thanh Âm Đất Việt' (TP.HCM, 2025) cho ~150 khán giả; tác phẩm nghệ thuật thị giác trưng bày tại Bảo tàng Museo ning Angeles, Philippines (2026)."
            : "Featured lead artist (Soloist) at 'Thanh Am Dat Viet' showcase in HCMC (2025) for ~150 urban attendees; international art exhibitor at Museo ning Angeles, Philippines (2026)."
        }
      ],
      tags: ["T'rưng Oral Heritage", "12+ Schools Reached", "2,300+ Students", "YouTube Archive (10k+ Views)", "Lead Soloist"]
    },
    {
      title: "Dakonomics Club",
      role: lang === "vi" ? "Người sáng lập & Chủ tịch" : "Founder & President",
      period: lang === "vi" ? "Tháng 5/2025 . Hiện tại" : "May 2025 . Present",
      category: lang === "vi" ? "Lãnh đạo Học thuật & Kinh tế THPT" : "High-School Economics Leadership",
      badge: lang === "vi" ? "CLB Đầu tiên tại Đắk Lắk • 18 Tỉnh thành" : "First HS Club in Dak Lak • 18 Provinces",
      slotId: "build-dakonomics",
      guideline: {
        vi: "Ảnh đội ngũ nòng cốt CLB Dakonomics, buổi thi giải case Dakonomics Green Ideas Competition, hoặc workshop cố vấn cùng chuyên gia.",
        en: "Photo of Dakonomics core team, Dakonomics Green Ideas Competition finals, or expert mentoring workshop."
      },
      summary: lang === "vi"
        ? "Câu lạc bộ kinh tế và kinh doanh bậc trung học phổ thông đầu tiên tại tỉnh Đắk Lắk, kiến tạo sân chơi học thuật và tư duy giải case thực chiến cho học sinh vùng cao."
        : "The first high-school economics and business club in Dak Lak Province, creating a real-world business case solving platform for highland students.",
      highlights: [
        {
          title: lang === "vi" ? "Đội ngũ Nòng cốt & Mạng lưới 5 Trường THPT" : "Core Team & Multi-School Network",
          desc: lang === "vi"
            ? "Thành lập và điều hành ban điều hành 9 thành viên, kết nối học sinh trên 5 trường THPT trên địa bàn tỉnh Đắk Lắk để chia sẻ đam mê kinh tế học."
            : "Established and managed a 9-person core team to connect students across 5 local high schools in Dak Lak Province."
        },
        {
          title: lang === "vi" ? "Xây dựng Ngân hàng Case Study (CaseBank)" : "Digital 'CaseBank' Platform",
          desc: lang === "vi"
            ? "Biên soạn kho 'CaseBank' số hóa phân tích các tình huống kinh doanh thực tế, ứng dụng các khung tư duy chiến lược thị trường và mô hình định giá định lượng."
            : "Built a digital 'CaseBank' analyzing real-world business cases using strategic and pricing frameworks."
        },
        {
          title: lang === "vi" ? "Cuộc thi Dakonomics Green Ideas Competition" : "Dakonomics Green Ideas Competition (SDG 12)",
          desc: lang === "vi"
            ? "Khởi xướng cuộc thi giải case kinh doanh tập trung vào Mục tiêu SDG 12 (Tiêu dùng & Sản xuất Bền vững); thu hút thí sinh từ 18 tỉnh thành trên toàn quốc (bao gồm Hà Nội và TP.HCM)."
            : "Organized a nationwide business case contest focused on SDG 12, engaging participants from 18 provinces including Hanoi and HCMC."
        },
        {
          title: lang === "vi" ? "Hệ thống Đánh giá & Cố vấn Chuyên gia" : "Evaluation Systems & Mentoring Program",
          desc: lang === "vi"
            ? "Trực tiếp thiết kế đề bài tình huống và tiêu chí chấm điểm tư duy chiến lược; chọn lọc Top 14 đội bán kết và 7 đội chung kết; tổ chức workshop chuyên môn (50+ học sinh) và chương trình cố vấn cùng chuyên gia Trung tâm Khởi nghiệp Quốc gia và các trường đại học."
            : "Designed case problems and evaluation rubrics (Top 14 semifinals, 7 finalists); organized workshop (50+ students) with mentors from Vietnam National Startup Support Center and universities."
        }
      ],
      tags: ["First HS Club in Dak Lak", "9-Person Team", "Green Ideas Competition", "18 Provinces", "SDG 12", "Mentoring"]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 sm:pt-28 pb-8 sm:pb-10 bg-[#FAF7F2] blueprint-grid min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="flex items-center gap-4 mb-6 sm:mb-8 pb-4 sm:pb-5 border-b border-[#1B3B2B]/15">
            <div className="w-12 h-12 rounded-2xl bg-[#1B3B2B] flex items-center justify-center shrink-0 shadow-sm text-white">
              <User className="w-6 h-6 text-[#E2ECE5]" />
            </div>
            <div>
              <h1 className="font-anton text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-[#242220] break-words">
                BUILD <span className="text-[#7B0323]">. PHAN HOÀNG QUỲNH CHI</span>
              </h1>
            </div>
          </div>

          {/* Large Glowing Portrait Banner */}
          <div className="mb-10 sm:mb-14">
            <ProjectImageUpload
              slotId="about-banner"
              guideline={{
                vi: "Ảnh phong cảnh Tây Nguyên / Đắk Lắk hoặc ảnh ngoại cảnh hoạt động của Quỳnh Chi.",
                en: "Central Highlands landscape or outdoor activity portrait of Quynh Chi."
              }}
              aspectRatio="aspect-[3/2]"
              heightClass="min-h-[360px] sm:min-h-[480px] lg:min-h-[560px]"
              objectFit="cover"
            />
          </div>

          {/* Hero Narrative Block: The Mind of an Analyst. The Heart of the Highlands. */}
          <div className="relative rounded-3xl border border-[#1B3B2B]/15 bg-[#FFFFFF] blueprint-grid p-5 sm:p-8 lg:p-12 mb-14 sm:mb-20 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left: Story Text */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <h2 className="font-anton text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight text-[#242220] leading-tight">
                  {t("about.headline")}
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-[#242220]/75 leading-relaxed font-normal">
                  <p>{t("about.p1")}</p>
                  <p>{t("about.p2")}</p>
                  <p className="font-medium text-[#7B0323] bg-[#7B0323]/5 p-4 rounded-2xl border-l-4 border-[#7B0323]">
                    <em>{t("about.p3")}</em>
                  </p>
                </div>
              </div>

              {/* Right: Photo & Tags */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <ProjectImageUpload
                  slotId="about-analyst"
                  guideline={{
                    vi: "Ảnh Quỳnh Chi đang làm việc, nghiên cứu số liệu kinh tế lượng tại bàn hoặc trao đổi học thuật.",
                    en: "Photo of Quynh Chi researching econometrics data at desk or academic work."
                  }}
                  aspectRatio="aspect-[4/3]"
                />

                {/* Data tags cluster */}
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#1B3B2B]/15">
                  <span className="font-mono text-[10px] text-[#242220]/60 font-bold uppercase tracking-wider block mb-2">
                    {t("about.methods")}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {dataPills.map((pill, idx) => (
                      <div
                        key={idx}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-xs transition-transform duration-200 hover:scale-105 select-none cursor-default ${pill.bg}`}
                      >
                        {pill.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Banner */}
          <div className="rounded-3xl bg-[#1B3B2B] text-white p-6 sm:p-10 lg:p-14 mb-16 sm:mb-24 relative overflow-hidden blueprint-grid-dark shadow-xl border border-[#1B3B2B]/30">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#E2ECE5] mb-3 sm:mb-5 opacity-80" />
            <blockquote className="font-heading italic text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 leading-relaxed max-w-4xl font-normal">
              {t("about.quote")}
            </blockquote>
          </div>

          {/* EXPERIENCE & INITIATIVES: 3 Featured Projects */}
          <div className="mb-20 sm:mb-28">
            <div className="flex items-center gap-4 mb-8 sm:mb-12 pb-5 sm:pb-6 border-b border-[#1B3B2B]/15">
              <div className="w-12 h-12 rounded-2xl bg-[#1B3B2B] flex items-center justify-center shrink-0 shadow-sm text-white">
                <Briefcase className="w-6 h-6 text-[#E2ECE5]" />
              </div>
              <div>
                <h2 className="font-anton text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#242220] break-words">
                  {lang === "vi" ? "KINH NGHIỆM & SÁNG KIẾN" : "EXPERIENCE & INITIATIVES"}
                </h2>
                <p className="text-xs sm:text-sm font-mono text-[#7B0323] font-semibold mt-1">
                  {lang === "vi" ? "3 Dự Án & Sáng Kiến Nổi Bật Dẫn Dắt Bởi Quỳnh Chi" : "3 Flagship Initiatives Led by Quynh Chi"}
                </p>
              </div>
            </div>

            <div className="space-y-12 sm:space-y-16">
              {initiatives.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#1B3B2B]/15 bg-[#FFFFFF] blueprint-grid p-6 sm:p-8 lg:p-10 shadow-sm hover:border-[#1B3B2B]/35 transition-all duration-300"
                >
                  {/* Card Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#1B3B2B]/15">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="font-mono text-xs font-bold text-[#7B0323] uppercase tracking-wider">
                          {item.category}
                        </span>
                        <span className="text-[#1B3B2B]/30">•</span>
                        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#7B0323]/10 text-[#7B0323] border border-[#7B0323]/20">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="font-anton text-2xl sm:text-3xl lg:text-4xl uppercase text-[#242220] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-[#1B3B2B] mt-0.5">
                        {item.role}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#1B3B2B] bg-[#FAF7F2] px-4 py-1.5 rounded-full border border-[#1B3B2B]/15 self-start lg:self-auto shrink-0">
                      {item.period}
                    </span>
                  </div>

                  {/* Card Body: Image Upload + Deep Narrative & Bullets */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Dedicated Photo Upload for this project */}
                    <div className="lg:col-span-5 flex flex-col gap-3">
                      <ProjectImageUpload
                        slotId={item.slotId}
                        guideline={item.guideline}
                        aspectRatio="aspect-[4/3]"
                      />
                      <p className="text-xs text-[#242220]/60 italic font-mono px-1">
                        {lang === "vi" ? "Tải ảnh tư liệu / sản phẩm thực tế cho dự án này" : "Upload verified field/product photo for this initiative"}
                      </p>
                    </div>

                    {/* Right: Summary & Bullet Breakdown */}
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-sm sm:text-base text-[#242220]/85 font-medium leading-relaxed bg-[#FAF7F2] p-4 rounded-2xl border border-[#1B3B2B]/15">
                        {item.summary}
                      </p>

                      <div className="space-y-3 pt-2">
                        {item.highlights.map((hl, hlIdx) => (
                          <div key={hlIdx} className="flex items-start gap-3">
                            <span className="text-[#7B0323] font-bold text-base leading-tight mt-0.5">▪</span>
                            <div className="text-xs sm:text-sm text-[#242220]/80 leading-relaxed">
                              <strong className="text-[#242220] font-semibold">{hl.title}: </strong>
                              {hl.desc}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tag pill cluster */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1B3B2B]/10">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#E2ECE5] text-[#1B3B2B] border border-[#1B3B2B]/15"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <PageNav
        prevHref="/"
        prevLabel={lang === "vi" ? "About me: Về Quỳnh Chi" : "About me: Quynh Chi"}
        prevSub={lang === "vi" ? "Khởi nguồn & Triết lý" : "Origins & Philosophy"}
        nextHref="/the-mind"
        nextLabel={lang === "vi" ? "Think: Nghiên cứu Dữ liệu" : "Think: Quantitative Research"}
        nextSub={lang === "vi" ? "Khoa học, SiFarm & Olympic" : "Data, SiFarm & Academic Honors"}
      />
      <Footer />
    </>
  );
}
