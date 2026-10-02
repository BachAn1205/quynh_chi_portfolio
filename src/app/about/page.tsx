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

  const experiences = [
    {
      role:
        lang === "vi"
          ? "Người sáng lập & Chiến lược Sản phẩm"
          : "Founder & Product Strategist",
      company:
        lang === "vi"
          ? "CAFLOOP (Dự án Vỏ Cà phê Xanh)"
          : "CAFLOOP (Green Coffee Husk Project)",
      period: lang === "vi" ? "Tháng 9/2024 . Hiện tại" : "Sep 2024 . Present",
      bullets: [
        lang === "vi"
          ? "Khởi xướng doanh nghiệp kinh tế tuần hoàn chuyển hóa vỏ cà phê phát thải CO2 tại Đắk Lắk thành trà Cascara thương mại."
          : "Initiated a circular-economy venture transforming CO2-emitting coffee husks in Dak Lak into commercial Cascara tea.",
        lang === "vi"
          ? "Quản lý giai đoạn tự lực vốn bằng cách kiểm soát chặt chẽ giá vốn hàng bán (COGS), lập ngân sách và tối ưu hóa giá bán."
          : "Managed the bootstrapping phase by tracking production costs (COGS), structuring budgets, and optimizing pricing.",
        lang === "vi"
          ? "Tích hợp hệ thống truy xuất mã QR trên bao bì để minh bạch tuyệt đối chuỗi cung ứng."
          : "Integrated a QR-code traceability system on packaging for radical transparency.",
        lang === "vi"
          ? "Dành toàn bộ lợi nhuận ban đầu trao tặng 77 xe đạp và 2 Smart TV cho học sinh tiểu học buôn Đrăng Phốk."
          : "Directed venture profits to donate 77 bicycles and 2 smart TVs to primary students at Buon Drang Phok.",
      ],
    },
    {
      role:
        lang === "vi"
          ? "Thực tập sinh Phân tích Kinh doanh & Tài chính"
          : "Student Intern, Business & Financial Analysis",
      company:
        lang === "vi" ? "SI CAFE (Chi nhánh Đắk Lắk)" : "SI CAFE (Dak Lak Branch)",
      period: lang === "vi" ? "Tháng 7 - Tháng 8/2025" : "Jul . Aug 2025",
      bullets: [
        lang === "vi"
          ? "Quan sát quy trình vận hành chuỗi cung ứng và kiểm toán số liệu nhập kho tại cơ sở chế biến cà phê địa phương."
          : "Shadowed operational supply-chain workflows and audited inventory data entry at a local coffee processing facility.",
        lang === "vi"
          ? "Áp dụng lý thuyết kinh tế học vào thực tế vận hành cơ sở nông nghiệp và logistics chuỗi cung ứng hàng ngày."
          : "Grounded theoretical economics into daily agricultural facility operations and supply-chain logistics.",
      ],
    },
    {
      role:
        lang === "vi"
          ? "Trưởng ban Chuyên môn & Cố vấn Lý thuyết Trò chơi"
          : "Head of Expert & Mentor of Game Theory",
      company:
        lang === "vi"
          ? "Shark Club (Trưởng ban Chuyên môn) & CLB Kinh doanh Geniusstar (Cố vấn)"
          : "Shark Club (Head of Expert) & Geniusstar Business Club (Mentor of Game Theory)",
      period: lang === "vi" ? "2024 . Hiện tại" : "2024 . Present",
      bullets: [
        lang === "vi"
          ? "Trưởng ban Chuyên môn tại Shark Club, biên soạn giáo trình kinh tế và hướng dẫn học sinh phân tích thực nghiệm."
          : "Head of Expert at Shark Club, curating economic curricula and guiding peers through empirical analysis.",
        lang === "vi"
          ? "Cố vấn Lý thuyết Trò chơi tại CLB Kinh doanh Geniusstar, giảng dạy Cân bằng Nash và mô phỏng ra quyết định chiến lược."
          : "Mentor of Game Theory at Geniusstar Business Club, teaching Nash Equilibrium and strategic decision-making simulations.",
        lang === "vi"
          ? "Giảng dạy khung kinh tế tương tác ('2 Quán kem trên bãi biển') giúp học sinh tự suy luận điểm cân bằng thị trường."
          : "Taught interactive economic frameworks ('2 Ice Cream Shops on a Beach') to help peers deduce market equilibria.",
        lang === "vi"
          ? "Điều phối các workshop và cố vấn các đội thi học sinh trong các cuộc thi tình huống kinh doanh."
          : "Facilitated workshops and mentored youth teams in business case competitions.",
      ],
    },
    {
      role:
        lang === "vi"
          ? "Nhà nghiên cứu Học bổng Toàn phần"
          : "Fully-Funded Student Researcher",
      company:
        lang === "vi"
          ? "Phòng Lab Vật liệu Tính toán NSYSU (Đài Loan)"
          : "NSYSU Computational Materials Lab (Taiwan)",
      period: lang === "vi" ? "Tháng 7/2026" : "Jul 2026",
      bullets: [
        lang === "vi"
          ? "Đạt học bổng 100% tham gia mô phỏng vật liệu tính toán hiệu năng cao tại Đài Loan."
          : "Awarded a 100% scholarship for high-performance computational materials simulations in Taiwan.",
        lang === "vi"
          ? "Làm chủ C++ cơ bản, môi trường Linux/HPC, VESTA và Lý thuyết Phiếm hàm Mật độ (DFT) chỉ trong vài ngày."
          : "Mastered basic C++, Linux/HPC environments, VESTA, and Density Functional Theory (DFT) within days.",
        lang === "vi"
          ? "Nhận thức sâu sắc mô hình tính toán phải phản ánh đúng thực tế vật lý; thuyết trình dự án khởi nghiệp nước thải trước hội đồng giáo sư."
          : "Realized that computational models must answer to physical ground truths; pitched a wastewater startup to faculty.",
      ],
    },
    {
      role:
        lang === "vi"
          ? "Người sáng lập, Điều phối viên & Nghệ sĩ Độc tấu Đàn T'rưng"
          : "Founder, Organizer & Traditional Soloist",
      company:
        lang === "vi"
          ? "Dự án Di sản & Giáo dục Văn hóa Đàn T'rưng"
          : "T'rưng Cultural Education & Heritage Project",
      period: lang === "vi" ? "Tháng 11/2024 . Hiện tại" : "Nov 2024 . Present",
      bullets: [
        lang === "vi"
          ? "Hệ thống hóa di sản âm nhạc truyền khẩu Tây Nguyên thành chương trình workshop bài bản tại 12+ trường học cho ~2.300 học sinh."
          : "Synthesized oral Central Highlands music heritage into structured workshop curricula across 12+ schools for ~2,300 students.",
        lang === "vi"
          ? "Quản lý trang truyền thông văn hóa (5.000+ người theo dõi) và số hóa kho lưu trữ biểu diễn YouTube (10.000+ lượt xem)."
          : "Managed cultural media page (5,000+ followers) and digitized YouTube performance archives (10,000+ views).",
        lang === "vi"
          ? "Nghệ sĩ độc tấu chính tại 'Thanh Âm Đất Việt' tại TP.HCM; triển lãm nghệ thuật thị giác tại Bảo tàng Museo ning Angeles, Philippines."
          : "Lead soloist at 'Thanh Âm Đất Việt' in HCMC; exhibited visual art at Museo ning Angeles, Philippines.",
      ],
    },
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
                {lang === "vi" ? "VỀ" : "ABOUT"} <span className="text-[#7B0323]">QUỲNH CHI</span>
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

          {/* Experience Section */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12 pb-6 border-b border-[#1B3B2B]/15">
              <div className="w-12 h-12 rounded-2xl bg-[#1B3B2B] flex items-center justify-center shrink-0 shadow-sm text-white">
                <Briefcase className="w-6 h-6 text-[#E2ECE5]" />
              </div>
              <div>
                <h2 className="font-anton text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#242220] break-words">
                  {lang === "vi" ? "KINH NGHIỆM & SÁNG KIẾN" : "EXPERIENCE & INITIATIVES"}
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#1B3B2B]/15 bg-[#FFFFFF] blueprint-grid p-4 sm:p-6 lg:p-8 shadow-sm hover:border-[#1B3B2B]/35 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#1B3B2B]/15">
                    <div>
                      <h3 className="font-anton text-xl sm:text-2xl uppercase text-[#242220]">
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#7B0323]">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#1B3B2B] bg-[#FAF7F2] px-3.5 py-1 rounded-full border border-[#1B3B2B]/15 self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#242220]/75">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-[#7B0323] font-bold mt-0.5">•</span>
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
            <div className="flex flex-col">
              <span className="font-anton text-xs uppercase text-[#7B0323] mb-2 tracking-wide">
                {lang === "vi" ? "Trà Cascara CAFLOOP & Mã QR" : "CAFLOOP Cascara Tea & QR"}
              </span>
              <ProjectImageUpload
                slotId="mind-startup"
                guideline={{
                  vi: "Ảnh chế biến vỏ cà phê hoặc bao bì CAFLOOP.",
                  en: "CAFLOOP coffee husk or packaging photo."
                }}
                aspectRatio="aspect-[4/3]"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-anton text-xs uppercase text-[#7B0323] mb-2 tracking-wide">
                {lang === "vi" ? "Kinh tế lượng định lượng SPSS" : "SPSS Quantitative Econometrics"}
              </span>
              <ProjectImageUpload
                slotId="mind-research"
                guideline={{
                  vi: "Ảnh mô hình hồi quy SPSS hoặc số liệu nghiên cứu.",
                  en: "SPSS regression model or research survey data."
                }}
                aspectRatio="aspect-[4/3]"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-anton text-xs uppercase text-[#7B0323] mb-2 tracking-wide">
                {lang === "vi" ? "Giáo dục văn hóa Đàn T'rưng" : "T'rưng Cultural Education"}
              </span>
              <ProjectImageUpload
                slotId="heart-trung-preservation"
                guideline={{
                  vi: "Ảnh trình diễn hoặc lớp học đàn T'rưng.",
                  en: "T'rưng performance or classroom workshop photo."
                }}
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </main>
      <PageNav
        prevHref="/"
        prevLabel={lang === "vi" ? "Trang chủ" : "Home"}
        nextHref="/the-mind"
        nextLabel={lang === "vi" ? "Tư Duy" : "The Mind"}
        nextSub={lang === "vi" ? "Nghiên cứu Định lượng & Khởi nghiệp" : "Quantitative Research & Enterprise"}
      />
      <Footer />
    </>
  );
}
