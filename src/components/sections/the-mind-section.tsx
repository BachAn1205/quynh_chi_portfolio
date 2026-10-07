"use client";

import { useState } from "react";
import { ProjectImageUpload } from "@/components/ui/project-image-upload";
import {
  BrainCircuit,
  BarChart2,
  Boxes,
  Cpu,
  Trophy,
  Award,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

interface ProjectHighlight {
  heading: string;
  detail: string;
  metric?: string;
}

interface ProjectItem {
  id: string;
  category: string;
  icon: any;
  badge?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  highlights: ProjectHighlight[];
  slotId: string;
  guideline: {
    vi: string;
    en: string;
  };
  tags: string[];
}

export function TheMindSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const { t, lang } = useLanguage();

  const projects: ProjectItem[] = [
    {
      id: "research",
      category:
        lang === "vi"
          ? "Nghiên cứu Định lượng Độc lập & Công bố Khoa học"
          : "Independent Quantitative Research & Publications",
      badge: lang === "vi" ? "Harvard Review • Tạp chí Quốc tế" : "Harvard Review • International Journal",
      icon: BarChart2,
      title:
        lang === "vi"
          ? "Làm Sáng Tỏ Bất Bình Đẳng Qua Dữ Liệu"
          : "Revealing Disparities Through Data",
      subtitle:
        lang === "vi"
          ? "Nghiên cứu Kinh tế lượng, Thói quen Tiêu dùng & Tín chỉ Carbon (2024 - 2026)"
          : "Econometrics Research, Consumer Behavior & Circular Carbon Credits (2024 - 2026)",
      highlights: [
        {
          heading:
            lang === "vi"
              ? "Tín chỉ Tuần hoàn cho Nông dân (C4F) - Harvard International Review (Tháng 1/2026)"
              : "Circular Credits for Farmers (C4F) - Harvard International Review (Jan 2026)",
          detail:
            lang === "vi"
              ? "Đoạt Giải Bài viết Xuất sắc Toàn cầu (Global Outstanding Writing Content Prize) từ Tạp chí Quan hệ Quốc tế Harvard. Điều tra sự bất bình đẳng mang tính hệ thống trên thị trường carbon toàn cầu đối với ngành canh tác cà phê tại Gia Lai và Đắk Lắk. Đề xuất mô hình tín chỉ tuần hoàn phi tập trung trên nền tảng blockchain nhằm liên kết giá trị carbon trực tiếp với hành động canh tác thực tế của nông dân."
              : "Awarded the Global Outstanding Writing Content Prize at the Harvard International Review Academic Writing Contest 2026. Investigated systemic inequalities in global carbon markets with a focus on coffee farming in Gia Lai and Dak Lak. Proposed a conceptual blockchain-based circular credit model (C4F) to decentralize carbon value distribution and link carbon credits directly to verifiable farming actions.",
        },
        {
          heading:
            lang === "vi"
              ? "Truy xuất Nguồn gốc Thực phẩm dựa trên Mã QR & Hành vi Tiêu dùng (Tháng 12/2025)"
              : "QR Code-Based Food Traceability & Consumer Behavior Toward Food Safety (Dec 2025)",
          detail:
            lang === "vi"
              ? "Đồng tác giả (Co-Author) bài báo khoa học xuất bản trên Tạp chí Tennessee Community Service International of Empowerment (Vol. 2, Iss. 2, pp. 18-36) cùng TS. Đỗ Hải Yến (Trưởng khoa Kinh tế & Quản trị Kinh doanh - Đại học Tân Trào). Thiết kế và triển khai khảo sát cắt ngang trên 400+ người tiêu dùng tại Hà Nội và TP.HCM; ứng dụng mô hình kinh tế lượng phân tích mối tương quan giữa truy xuất số và ý định mua hàng."
              : "Co-authored a paper published in the Tennessee Community Service International of Empowerment Journal, 2(2), 18-36, with Dr. Do Hai Yen (Dean of Faculty of Economics & Business Administration, Tan Trao University). Designed and executed a cross-sectional survey of 400+ consumers in Hanoi and HCMC; utilized econometric models to evaluate correlation between digital traceability and consumer purchase intent.",
        },
        {
          heading:
            lang === "vi"
              ? "Chênh lệch Nhận thức Phát triển Bền vững & Lựa chọn Nghề nghiệp THPT Đắk Lắk (2024)"
              : "Awareness Disparities in Sustainable Development & Career Choices in Dak Lak (2024)",
          detail:
            lang === "vi"
              ? "Thực hiện khảo sát cắt ngang phân tầng nông thôn - thành thị trên học sinh THPT tại tỉnh Đắk Lắk. Áp dụng phương pháp phân tích phương sai ANOVA và Hồi quy Logistic Nhị phân trên phần mềm SPSS, xây dựng mô hình dự báo đạt độ chính xác 83,5%, chứng minh nhận thức bền vững tăng 1 đơn vị giúp tăng xác suất chọn nghề nghiệp xanh lên 3,482 lần."
              : "Conducted an urban-rural stratified cross-sectional survey among high school students in Dak Lak Province. Applied ANOVA and logistic regression via SPSS to build an 83.5% accuracy predictive model evaluating factors influencing sustainable career orientations.",
        },
      ],
      slotId: "mind-research",
      guideline: {
        vi: "Ảnh bài báo khoa học, giải thưởng Harvard International Review, hoặc biểu đồ mô hình hồi quy SPSS/khảo sát thực địa.",
        en: "Photo of journal paper, Harvard International Review award, or SPSS regression model charts."
      },
      tags: ["Harvard International Review", "C4F Carbon Model", "Tennessee Journal", "Dr. Do Hai Yen", "SPSS ANOVA & Logistic Regression", "Food Safety Traceability"],
    },
    {
      id: "lab",
      category:
        lang === "vi" ? "Nghiên cứu Vật liệu & Điện toán Hiệu năng cao" : "Computational Materials & HPC Research",
      badge: lang === "vi" ? "Học bổng Toàn phần 100% • Đài Loan" : "100% Fully-Funded Delegate • Taiwan",
      icon: Cpu,
      title:
        lang === "vi"
          ? "Trại Khoa học & Đổi mới Sáng tạo NSYSU"
          : "NSYSU Science & Innovation Camp",
      subtitle:
        lang === "vi"
          ? "Đại biểu Học bổng Toàn phần, Đại học Quốc lập Tôn Trung Sơn (Đài Loan, Tháng 7/2026)"
          : "Fully-Funded Delegate, National Sun Yat-sen University (Taiwan, Jul 2026)",
      highlights: [
        {
          heading:
            lang === "vi"
              ? "Nghiên cứu Vật liệu Dựa trên Dữ liệu & Điện toán Hiệu năng cao (HPC)"
              : "Data-Driven Materials Research & High-Performance Computing",
          detail:
            lang === "vi"
              ? "Đạt học bổng toàn phần 100% tham gia nghiên cứu vật liệu tính toán tại Đại học Quốc lập Tôn Trung Sơn (NSYSU). Làm chủ cú pháp C++ cơ bản, làm việc trên môi trường máy chủ Linux/HPC và vận hành các công cụ tính toán mô phỏng VESTA và Lý thuyết Phiếm hàm Mật độ (DFT) chỉ trong vài ngày."
              : "Awarded a 100% scholarship to participate in data-driven materials research at NSYSU. Mastered basic C++, Linux/HPC high-performance terminal environments, and computational simulation tools including VESTA and Density Functional Theory (DFT).",
        },
        {
          heading:
            lang === "vi"
              ? "Thuyết trình Dự án Khởi nghiệp Xử lý Nước thải trước Hội đồng Giáo sư"
              : "Conceptual Wastewater Purification Startup Pitch to Faculty",
          detail:
            lang === "vi"
              ? "Ứng dụng các hiểu biết mô phỏng vật liệu để phát triển ý tưởng khởi nghiệp hệ thống lọc nước thải dựa trên cấu trúc vật liệu mới, trực tiếp thuyết trình và bảo vệ đề tài trước hội đồng giáo sư chuyên môn quốc tế."
              : "Synthesized materials research insights to pitch a conceptual wastewater purification startup directly to university faculty, bridging deep tech with ecological problem-solving.",
        },
        {
          heading:
            lang === "vi"
              ? "Vượt qua Bẫy 'Hộp Đen' trong Khoa học Dữ liệu"
              : "Critical Dataset Auditing & Overcoming the Black-Box Trap",
          detail:
            lang === "vi"
              ? "Kinh nghiệm thực nghiệm giúp nhận thức sâu sắc rằng dữ liệu tính toán chỉ có giá trị thực sự khi bám sát thực tế vật lý khách quan, rèn luyện tư duy kiểm toán dữ liệu nghiêm ngặt và không phụ thuộc mù quáng vào các mô hình trừu tượng."
              : "Gained firsthand insight that computational simulations must answer to physical ground truths, establishing a disciplined habit of auditing datasets and avoiding abstract black-box assumptions.",
        },
      ],
      slotId: "mind-lab",
      guideline: {
        vi: "Ảnh chụp tại Trại khoa học NSYSU Đài Loan, buổi thuyết trình dự án nước thải hoặc làm việc với phần mềm mô phỏng VESTA/HPC.",
        en: "Photo at NSYSU Taiwan camp, wastewater startup presentation, or working with VESTA/HPC terminal."
      },
      tags: ["National Sun Yat-sen University", "100% Scholarship", "C++", "Linux HPC", "VESTA", "DFT", "Wastewater Pitch"],
    },
    {
      id: "sifarm",
      category:
        lang === "vi"
          ? "Phân tích Chuỗi Cung ứng & Kinh tế Nông nghiệp Thực địa"
          : "Agricultural Supply Chain & Field Operations Analysis",
      badge: lang === "vi" ? "SI CAFE Đắk Lắk • Thực tế Nông nghiệp" : "SI CAFE Dak Lak • Field Operations",
      icon: Boxes,
      title: "SiFarm (SI CAFE Agricultural Supply Chain)",
      subtitle:
        lang === "vi"
          ? "Thực tập sinh Phân tích Kinh doanh & Tài chính, SI CAFE - Chi nhánh Đắk Lắk (Tháng 7 - Tháng 8/2025)"
          : "Student Intern - Business & Financial Analysis, SI CAFE (Dak Lak Branch, Jul - Aug 2025)",
      highlights: [
        {
          heading:
            lang === "vi"
              ? "Khảo sát Thực tế Vận hành Chuỗi Cung ứng Nông sản Địa phương"
              : "Shadowing Ground-Level Agricultural Supply Chain Operations",
          detail:
            lang === "vi"
              ? "Trực tiếp khảo sát và học hỏi quy trình vận hành chuỗi cung ứng tại cơ sở sơ chế và chế biến cà phê địa phương ở Đắk Lắk. Quan sát các điểm nghẽn thực tế từ thu hoạch nông hộ, phân loại nhân, phơi sấy đến lưu kho bảo quản."
              : "Shadowed supply-chain operations and assisted with operational tracking at a local coffee processing facility in Dak Lak Province, observing real bottlenecks across farmer sourcing, sorting, drying, and storage.",
        },
        {
          heading:
            lang === "vi"
              ? "Kiểm toán Số liệu Nhập kho & Theo dõi Chi phí Vận hành"
              : "Inventory Data Entry, Cost Auditing & Facility Tracking",
          detail:
            lang === "vi"
              ? "Hỗ trợ nhập liệu số liệu kho vận hàng ngày, đối soát hóa đơn đầu vào, kiểm kê hao hụt tỷ lệ độ ẩm và theo dõi chi phí nhân công, năng lượng sơ chế tại xưởng."
              : "Assisted with basic data entry, daily inventory tracking, moisture loss audits, and operational cost accounting at the processing plant.",
        },
        {
          heading:
            lang === "vi"
              ? "Gắn kết Lý thuyết Kinh tế học vào Thực tế Nông trường Tây Nguyên"
              : "Connecting Theoretical Economics with Highland Agricultural Realities",
          detail:
            lang === "vi"
              ? "Trải nghiệm tại SI CAFE là bước đệm then chốt giúp chuyển hóa lý thuyết kinh tế học vĩ mô và vi mô thành sự hiểu biết sâu sắc về sinh kế của người nông dân và cấu trúc chi phí thật của chuỗi giá trị nông nghiệp Tây Nguyên."
              : "Grounded academic economic theories into physical agricultural realities, developing an authentic understanding of farmer livelihoods and value-chain economics in the Central Highlands.",
        },
      ],
      slotId: "mind-sifarm",
      guideline: {
        vi: "Ảnh thực tế cơ sở chế biến cà phê SI CAFE Đắk Lắk, quy trình phân loại nông sản hoặc hoạt động nhập liệu kho vận.",
        en: "Photo of SI CAFE coffee processing facility in Dak Lak, sorting workflow, or inventory tracking."
      },
      tags: ["SI CAFE", "Agricultural Supply Chain", "Dak Lak Facility", "Inventory Audit", "Field Economics", "Value Chain"],
    },
    {
      id: "honors",
      category:
        lang === "vi"
          ? "Giải Thưởng Học Thuật & Olympic Kinh Tế Quốc Tế"
          : "Academic Honors, Olympiads & Case Competitions",
      badge: lang === "vi" ? "Top 3 Quốc gia IEO • Chung kết Harvard" : "National Top 3 IEO • Harvard HCBC Finalist",
      icon: Trophy,
      title:
        lang === "vi"
          ? "Các Giải Thưởng & Olympic Học Thuật Quốc Tế"
          : "International Academic Honors & Business Olympiads",
      subtitle:
        lang === "vi"
          ? "Thành tích Nổi bật tại các Đấu trường Học thuật Quốc gia & Toàn cầu"
          : "Verified Distinctions in Global Economics, Finance, Business Cases & Policy Debate",
      highlights: [
        {
          heading:
            lang === "vi"
              ? "Olympic Kinh tế Quốc tế (IEO 2025 & 2026) & Olympic Kinh tế Việt Nam (VEO)"
              : "International Economics Olympiad (IEO) & Vietnam Economics Olympiad (VEO)",
          detail:
            lang === "vi"
              ? "Đạt Top 5 Tuyển chọn Toàn quốc (Xếp hạng 3 Quốc gia) tham gia Đội tuyển Olympic Kinh tế Quốc tế (IEO) cả 2 năm 2025 & 2026; Huy chương Đồng Quốc gia (National Bronze Medalist) tại Vietnam Economics Olympiad (VEO) 2025 & 2026."
              : "National Top 5 Selection (Ranked 3rd Nationally) for International Economics Olympiad (IEO) in both 2025 & 2026; National Bronze Medalist at Vietnam Economics Olympiad (VEO) in 2025 & 2026.",
        },
        {
          heading:
            lang === "vi"
              ? "Harvard Crimson Business Case Competition (HCBC 2025) - Chung kết Toàn cầu tại Mỹ"
              : "Harvard Crimson Business Case (HCBC 2025) - Global Finalist (Top 30/2000)",
          detail:
            lang === "vi"
              ? "Lọt vào Chung kết Toàn cầu (Top 30/2000 đội thi toàn thế giới) - Đội thi duy nhất đại diện Việt Nam được mời tham dự vòng chung kết trực tiếp tại khuôn viên Đại học Harvard (Mỹ). Đảm nhận vai trò Trưởng nhóm Tài chính & Chiến lược (Team Lead - Finance & Strategy), đồng phát triển mô hình tài chính dự báo doanh thu và bảng điều khiển mô phỏng CAC/LTV."
              : "Global Finalist (Top 30/2000 teams worldwide). Sole Vietnamese representative team invited to compete on Harvard campus. Served as Team Lead - Finance & Strategy: co-developed a financial model for revenue forecasting and built a mock CAC/LTV dashboard.",
        },
        {
          heading:
            lang === "vi"
              ? "World Economics Cup (WEC 2025) & Vietnam Business Innovation Challenge (VBIC)"
              : "World Economics Cup (WEC 2025) & Vietnam Business Innovation Challenge (VBIC)",
          detail:
            lang === "vi"
              ? "Đạt Giải Bạc (Silver Award) khu vực Châu Á & Châu Đại Dương và Top 10 Kiến thức Nền tảng (Top 10 Fundamentals) tại World Economics Cup (WEC 2025); Trưởng nhóm đưa đội lọt vào Top 10 Chung kết Toàn quốc (Top 10 Grand Final) tại Vietnam Business Innovation Challenge (VBIC 2025)."
              : "Silver Award (Asia & Oceania) & Top 10 Fundamentals at World Economics Cup (WEC 2025); Team Lead leading squad to Top 10 Grand Final at Vietnam Business Innovation Challenge (VBIC 2025).",
        },
        {
          heading:
            lang === "vi"
              ? "Học bổng Tài chính ACCA Futurist, Aspiring Vietnam & Tranh biện Quốc gia"
              : "ACCA Futurist Scholarship Top 50, Aspiring Vietnam & Debate Champion",
          detail:
            lang === "vi"
              ? "Top 50 Toàn quốc Học bổng ACCA Futurist 2025 (học bổng danh giá dành cho tài năng tài chính trẻ); Top 4 Cá nhân Vòng Chung kết phân ban Thương mại cuộc thi Aspiring Vietnam Contest 2025; Quán quân Toàn quốc giải Tranh biện DAS-DO Debate Open 2025 (4th Seed); Best Position Paper tại Hội nghị Mô phỏng LHQ VSGMUN 2026 (UNHCR)."
              : "Top 50 Vietnam: ACCA Futurist Scholarship 2025; Top 4 Individual, Trade Division (Final Round) at Aspiring Vietnam Contest 2025; National Champion at DAS-DO Debate Open 2025; Best Position Paper at VSGMUN 2026 (UNHCR).",
        },
      ],
      slotId: "mind-honors",
      guideline: {
        vi: "Ảnh nhận huy chương/giấy chứng nhận IEO, VEO, Harvard HCBC, World Economics Cup hoặc bằng khen tranh biện.",
        en: "Photo of medals or award certificates from IEO, VEO, Harvard HCBC, WEC, or debate competitions."
      },
      tags: ["IEO Rank 3 Nationally", "VEO Bronze Medalist", "Harvard HCBC Top 30", "WEC Silver Award", "VBIC Top 10", "ACCA Futurist Top 50", "National Debate Champion"],
    },
  ];

  const filteredProjects = activeTab === "all" ? projects : projects.filter((p) => p.id === activeTab);

  return (
    <section id="the-mind" className="pt-6 sm:pt-8 pb-12 sm:pb-16 overflow-hidden bg-[#FAF7F2] blueprint-grid border-t border-[#1B3B2B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8 pb-4 sm:pb-5 border-b border-[#1B3B2B]/15">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1B3B2B] flex items-center justify-center shrink-0 shadow-sm text-white">
              <BrainCircuit className="w-6 h-6 text-[#E2ECE5]" />
            </div>
            <div>
              <h2 className="font-anton text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#242220]">
                THINK <span className="text-[#7B0323]">. PHAN HOÀNG QUỲNH CHI</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${activeTab === "all"
                ? "bg-[#1B3B2B] text-white shadow-sm"
                : "bg-[#FFFFFF] text-[#242220] border border-[#1B3B2B]/20 hover:bg-[#E2ECE5]"
              }`}
          >
            {lang === "vi" ? "Tất cả (4)" : "All Initiatives (4)"}
          </button>
          <button
            onClick={() => setActiveTab("research")}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${activeTab === "research"
                ? "bg-[#1B3B2B] text-white shadow-sm"
                : "bg-[#FFFFFF] text-[#242220] border border-[#1B3B2B]/20 hover:bg-[#E2ECE5]"
              }`}
          >
            {lang === "vi" ? "Nghiên cứu Dữ liệu (C4F & QR)" : "Data Research (C4F & QR)"}
          </button>
          <button
            onClick={() => setActiveTab("lab")}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${activeTab === "lab"
                ? "bg-[#1B3B2B] text-white shadow-sm"
                : "bg-[#FFFFFF] text-[#242220] border border-[#1B3B2B]/20 hover:bg-[#E2ECE5]"
              }`}
          >
            {lang === "vi" ? "Trại Khoa học NSYSU" : "NSYSU Science Camp"}
          </button>
          <button
            onClick={() => setActiveTab("sifarm")}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${activeTab === "sifarm"
                ? "bg-[#1B3B2B] text-white shadow-sm"
                : "bg-[#FFFFFF] text-[#242220] border border-[#1B3B2B]/20 hover:bg-[#E2ECE5]"
              }`}
          >
            {lang === "vi" ? "SiFarm & Chuỗi Cung Ứng" : "SiFarm Operations"}
          </button>
          <button
            onClick={() => setActiveTab("honors")}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${activeTab === "honors"
                ? "bg-[#1B3B2B] text-white shadow-sm"
                : "bg-[#FFFFFF] text-[#242220] border border-[#1B3B2B]/20 hover:bg-[#E2ECE5]"
              }`}
          >
            {lang === "vi" ? "Giải Học Thuật & Olympic" : "Academic Honors & Olympiads"}
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-8 sm:space-y-12">
          {filteredProjects.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-3xl border border-[#1B3B2B]/15 bg-[#FFFFFF] blueprint-grid p-5 sm:p-8 lg:p-10 shadow-sm hover:border-[#1B3B2B]/35 transition-all duration-300"
              >
                {/* Top Row: Meta Badge & Category */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#1B3B2B]/15">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#1B3B2B] text-white flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-[#7B0323] uppercase tracking-wide">
                        {item.category}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center">
                  {/* Left 7 Cols: Detailed Highlights */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h3 className="font-anton text-lg sm:text-2xl lg:text-3xl uppercase tracking-tight text-[#242220] leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Sub-item highlights */}
                    <div className="space-y-3.5 sm:space-y-4">
                      {item.highlights.map((h, hIdx) => (
                        <div
                          key={hIdx}
                          className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#1B3B2B]/15 shadow-xs hover:border-[#1B3B2B]/35 transition-colors"
                        >
                          <p className="text-xs sm:text-sm text-[#242220]/80 leading-relaxed">
                            {h.detail}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Right 5 Cols: Project Image Upload */}
                  <div className="lg:col-span-5 flex flex-col justify-center self-center w-full">
                    <ProjectImageUpload
                      slotId={item.slotId}
                      guideline={item.guideline}
                      aspectRatio="aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4]"
                      heightClass="min-h-[360px] sm:min-h-[460px] lg:min-h-[500px]"
                      objectFit="contain"
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
