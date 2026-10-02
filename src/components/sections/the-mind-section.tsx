"use client";

import { useState } from "react";
import { ProjectImageUpload } from "@/components/ui/project-image-upload";
import {
  BrainCircuit,
  BarChart2,
  Boxes,
  Cpu,
  GraduationCap
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
          ? "Nghiên cứu Định lượng Độc lập"
          : "Independent Quantitative Research",
      icon: BarChart2,
      title:
        lang === "vi"
          ? "Làm Sáng Tỏ Bất Bình Đẳng Qua Dữ Liệu"
          : "Revealing Disparities Through Data",
      highlights: [
        {
          heading:
            lang === "vi"
              ? "Chênh lệch Nhận thức trong Lựa chọn Nghề nghiệp Bền vững (2024)"
              : "Awareness Disparities in Sustainable Career Choices (2024)",
          detail:
            lang === "vi"
              ? "Thực hiện khảo sát cắt ngang phân tầng nông thôn - thành thị trên 200 học sinh THPT tại Đắk Lắk. Áp dụng ANOVA và Hồi quy Logistic Nhị phân trên SPSS, tôi xây dựng mô hình dự báo (độ chính xác 83,5%) chứng minh rằng nhận thức về tính bền vững tăng 1 đơn vị sẽ giúp tăng xác suất chọn nghề nghiệp xanh lên 3,482 lần. Nghiên cứu chỉ ra khoảng trống nghiêm trọng trong tiếp cận thông tin nghề nghiệp của học sinh nông thôn."
              : "Conducted an urban-rural stratified cross-sectional survey among 200 high school students in Dak Lak. Applying ANOVA and Binary Logistic Regression via SPSS, I built a predictive model (83.5% accuracy) proving that a one-unit increase in sustainability awareness boosts the odds of choosing a sustainable career by 3.482 times. It exposed a critical information access gap for rural youth.",
        },
        {
          heading:
            lang === "vi"
              ? "Truy xuất Nguồn gốc Thực phẩm dựa trên Mã QR (Tháng 12/2025)"
              : "QR Code-Based Food Traceability (Dec 2025)",
          detail:
            lang === "vi"
              ? "Đồng tác giả bài báo khoa học xuất bản trên Tạp chí Trao quyền Quốc tế Phục vụ Cộng đồng Tennessee. Hỗ trợ thiết kế khảo sát cắt ngang trên 400+ người tiêu dùng tại Hà Nội và TP.HCM, sử dụng mô hình kinh tế lượng chứng minh truy xuất nguồn gốc số giúp giảm rủi ro cảm nhận, dù tác động nghiêng nhiều về nhóm thu nhập cao."
              : "Co-authored a paper published in the Tennessee Community Service International of Empowerment Journal. Assisted in designing a cross-sectional survey of 400+ consumers in Hanoi and HCMC, utilizing econometric models to prove that digital traceability reduces perceived risk, though its impact skews heavily toward higher-income demographics.",
        },
        {
          heading:
            lang === "vi"
              ? "Tín chỉ Tuần hoàn cho Nông dân - C4F (Tháng 1/2026)"
              : "Circular Credits for Farmers - C4F (Jan 2026)",
          detail:
            lang === "vi"
              ? "Đoạt Giải Bài viết Xuất sắc Toàn cầu từ Tạp chí Quan hệ Quốc tế Harvard (Harvard International Review). Đề xuất mô hình sổ cái blockchain phân quyền giá trị carbon, đặt câu hỏi về quyền sở hữu dữ liệu và phân phối lợi ích kinh tế công bằng cho nông dân canh tác bền vững tại Gia Lai và Đắk Lắk."
              : "Awarded the Global Outstanding Writing Content Prize by the Harvard International Review. Proposed a conceptual blockchain-based model to decentralize carbon value distribution, questioning who truly owns the data and reaps the economic rewards of sustainable farming in Gia Lai and Dak Lak.",
        },
      ],
      slotId: "mind-research",
      guideline: {
        vi: "Ảnh chụp màn hình phân tích mô hình SPSS, bảng số liệu hồi quy/ANOVA, hoặc khảo sát thực địa học sinh Đắk Lắk.",
        en: "SPSS econometrics model screenshot, ANOVA regression table, or field survey."
      },
      tags: ["SPSS", "ANOVA", "Binary Logistic Regression", "Econometrics", "Blockchain Carbon Ledger"],
    },
    {
      id: "startup",
      category:
        lang === "vi"
          ? "Khởi nghiệp Tuần hoàn & Vận hành Doanh nghiệp"
          : "Circular Economy Startup & Operations",
      icon: Boxes,
      title:
        lang === "vi" ? (
          <>
            Dự án Vỏ Cà phê Xanh CAFLOOP
            <br className="hidden sm:inline" /> &amp; Vận Hành Doanh Nghiệp
          </>
        ) : (
          <>
            CAFLOOP (Green Coffee Husk Project)
            <br className="hidden sm:inline" /> &amp; Business Operations
          </>
        ),
      subtitle:
        lang === "vi"
          ? "Người sáng lập & Chiến lược Sản phẩm (Tháng 9/2024 . Hiện tại)"
          : "Founder & Product Strategist (Sep 2024 . Present)",
      highlights: [
        {
          heading:
            lang === "vi"
              ? "Tự lực Vốn (Bootstrapping) & Kỹ thuật Chuỗi Giá trị"
              : "Bootstrapping & Value Chain Engineering",
          detail:
            lang === "vi"
              ? "Khởi xướng doanh nghiệp kinh tế tuần hoàn chuyển hóa vỏ cà phê phát thải CO2 tại Đắk Lắk thành trà Cascara thương mại. Quản lý giai đoạn tự lực vốn bằng cách kiểm soát chặt chẽ giá vốn hàng bán (COGS), lập ngân sách và tối ưu hóa giá bán. Tích hợp hệ thống truy xuất mã QR trên bao bì để minh bạch tuyệt đối chuỗi cung ứng."
              : "Initiated a circular-economy venture transforming CO2-emitting coffee husks in Dak Lak into commercial Cascara tea. Managed the bootstrapping phase by tracking production costs (COGS), structuring budgets, and optimizing pricing. To ensure radical transparency, integrated a QR-code traceability system on the packaging.",
        },
        {
          heading:
            lang === "vi"
              ? "Trải nghiệm Chuỗi Cung ứng Ngành (SI CAFE Đắk Lắk)"
              : "Industry Supply Chain Experience (SI CAFE Dak Lak)",
          detail:
            lang === "vi"
              ? "Thực tập sinh Phân tích Kinh doanh & Tài chính tại SI CAFE (Chi nhánh Đắk Lắk, Tháng 7-8/2025), theo dõi quy trình chuỗi cung ứng và nhập liệu kho vận tại cơ sở chế biến cà phê địa phương."
              : "Served as Student Intern for Business & Financial Analysis at SI CAFE (Dak Lak Branch, Jul-Aug 2025), shadowing supply-chain operations and managing data entry for a local coffee processing facility.",
        },
        {
          heading:
            lang === "vi"
              ? "Tình huống Kinh doanh Harvard Crimson (HCBC 2025)"
              : "Harvard Crimson Business Case (HCBC 2025)",
          detail:
            lang === "vi"
              ? "Trưởng nhóm Tài chính & Chiến lược, đồng xây dựng mô hình tài chính dự báo doanh thu và bảng điều khiển mô phỏng CAC/LTV, lọt vào Chung kết Toàn cầu (Top 30/2000 đội thi toàn thế giới)."
              : "Acted as Team Lead for Finance & Strategy, co-developing a financial model for revenue forecasting and building a mock CAC/LTV dashboard, advancing to Global Finalist (Top 30/2000).",
        },
      ],
      slotId: "mind-startup",
      guideline: {
        vi: "Ảnh chụp thực tế vỏ cà phê thải, quy trình sấy chế biến Cascara hoặc sản phẩm bao bì CAFLOOP có mã QR.",
        en: "Real coffee husk upcycling photo, cascara drying/processing, or CAFLOOP QR packaging."
      },
      tags: ["Circular Economy", "COGS Budgeting", "Traceability QR", "CAC/LTV Modeling", "Supply Chain"],
    },
    {
      id: "lab",
      category:
        lang === "vi" ? "Phòng Thí nghiệm Dữ liệu Quốc tế" : "International Data Lab",
      icon: Cpu,
      title:
        lang === "vi"
          ? "Trại Khoa học & Đổi mới Sáng tạo NSYSU"
          : "NSYSU Science & Innovation Camp",
      subtitle:
        lang === "vi"
          ? "Nhà nghiên cứu Học bổng Toàn phần, Đài Loan, Tháng 7/2026"
          : "Fully-Funded Researcher, Taiwan, Jul 2026",
      highlights: [
        {
          heading:
            lang === "vi"
              ? "Điện toán Hiệu năng cao & Mô phỏng Vật liệu"
              : "High-Performance Computing & Materials Simulation",
          detail:
            lang === "vi"
              ? "Đạt học bổng 100% tham gia nghiên cứu vật liệu dựa trên dữ liệu tại Phòng Lab Vật liệu Tính toán. Dù chưa từng học lập trình trước đó, tôi đã phối hợp cùng các cố vấn quốc tế để làm chủ C++ cơ bản, môi trường Linux/HPC và các phần mềm như VESTA, DFT chỉ trong vài ngày."
              : "Awarded a 100% scholarship to participate in data-driven materials research at the Computational Materials Research Lab. Despite having no prior coding background, collaborated with international mentors to master basic C++, Linux/HPC environments, and software like VESTA and DFT within days.",
        },
        {
          heading:
            lang === "vi"
              ? "Vượt qua Bẫy 'Hộp Đen' của Khoa học Dữ liệu"
              : "Overcoming the 'Black Box' Trap of Data Science",
          detail:
            lang === "vi"
              ? "Nhận ra rằng dữ liệu tính toán chỉ có sức mạnh thực sự khi bám sát thực tế vật lý khách quan, giúp tôi luôn kiểm định nghiêm ngặt tập dữ liệu và tránh cạm bẫy 'hộp đen' của các mô hình trừu tượng."
              : "Realized that computational data is only as powerful as its adherence to physical reality.teaching me to critically audit my datasets and avoid the black box trap of abstract modeling.",
        },
        {
          heading:
            lang === "vi"
              ? "Ý tưởng Khởi nghiệp Xử lý Nước thải"
              : "Wastewater Innovation Pitch",
          detail:
            lang === "vi"
              ? "Tổng hợp các hiểu biết mô phỏng vật liệu tính toán thành dự án khởi nghiệp lọc nước thải và thuyết trình trực tiếp trước hội đồng giáo sư đại học."
              : "Synthesized computational material simulation insights into a conceptual wastewater purification startup pitched directly to university faculty.",
        },
      ],
      slotId: "mind-lab",
      guideline: {
        vi: "Ảnh chụp phòng lab mô phỏng vật liệu DFT/VESTA, máy chủ HPC hoặc buổi báo cáo khoa học tại Đài Loan (NSYSU).",
        en: "DFT/VESTA material simulation lab, Linux HPC terminal, or research presentation at NSYSU (Taiwan)."
      },
      tags: ["C++", "Linux HPC", "VESTA", "DFT", "Materials Data", "Wastewater Pitch"],
    },
    {
      id: "pedagogy",
      category:
        lang === "vi"
          ? "Cố vấn & Lãnh đạo Học thuật"
          : "Mentorship & Academic Leadership",
      icon: GraduationCap,
      title:
        lang === "vi"
          ? "Shark Club & CLB Kinh doanh Geniusstar"
          : "Shark Club & Geniusstar Business Club",
      subtitle:
        lang === "vi"
          ? "Trưởng ban Chuyên môn (Shark Club) & Cố vấn Lý thuyết Trò chơi (Geniusstar)"
          : "Head of Expert (Shark Club) & Mentor of Game Theory (Geniusstar Business Club)",
      highlights: [
        {
          heading:
            lang === "vi"
              ? "Shark Club (Trưởng ban Chuyên môn)"
              : "Shark Club (Head of Expert)",
          detail:
            lang === "vi"
              ? "Biên soạn chương trình học thuật về độ co giãn cung cầu và cơ chế thị trường. Hướng dẫn các thành viên học sinh nắm vững các nguyên lý kinh tế nền tảng và phân tích tình huống thực tế."
              : "Curated academic curricula on supply-demand elasticity and market mechanics. Guided student members through foundational economic principles and real-world case analysis.",
        },
        {
          heading:
            lang === "vi"
              ? "CLB Kinh doanh Geniusstar (Cố vấn Lý thuyết Trò chơi)"
              : "Geniusstar Business Club (Mentor of Game Theory)",
          detail:
            lang === "vi"
              ? "Thiết kế giáo trình về ra quyết định chiến lược. Giảng dạy Cân bằng Nash thông qua mô phỏng tương tác '2 Quán kem trên bãi biển', giúp học sinh tự suy luận ra điểm cân bằng trước khi tiếp cận công thức toán học."
              : "Designed curricula on strategic decision-making. Taught Nash Equilibrium through a '2 Ice Cream Shops on a Beach' simulation, prompting students to deduce the equilibrium before revealing the formal mathematical theory.",
        },
        {
          heading:
            lang === "vi"
              ? "Đại sứ Youth For Impact & Cố vấn Tình huống - AIESEC Việt Nam"
              : "Youth For Impact Ambassador & Case Mentorship - AIESEC Vietnam",
          detail:
            lang === "vi"
              ? "Cố vấn riêng cho Đội Lục Long Công Chúa (đội giành chức Quán quân) và phụ trách vận hành Chuỗi đào tạo Doanh nghiệp & Vòng chung kết, lan tỏa Mục tiêu SDG 8.6 đến hơn 200 người tham dự."
              : "Acted as a private mentor for Team Lục Long Công Chúa (the eventual Champions) and served as core operations staff for the Business Training Series and Final Pitch, advocating for SDG 8.6 and impacting over 200 attendees.",
        },
      ],
      slotId: "mind-pedagogy",
      guideline: {
        vi: "Ảnh sinh hoạt tại Shark Club, Geniusstar Business Club, hoặc buổi giảng dạy mô hình Game Theory cho học sinh.",
        en: "Shark Club, Geniusstar Business Club activities, or Game Theory teaching session."
      },
      tags: ["Shark Club", "Geniusstar", "Game Theory", "Nash Equilibrium", "CaseBank", "SDG 12", "SDG 8.6"],
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
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-anton text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#242220]">
                {t("mind.title")}
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
            {t("mind.tab.all")}
          </button>
          <button
            onClick={() => setActiveTab("research")}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${activeTab === "research"
                ? "bg-[#1B3B2B] text-white shadow-sm"
                : "bg-[#FFFFFF] text-[#242220] border border-[#1B3B2B]/20 hover:bg-[#E2ECE5]"
              }`}
          >
            {t("mind.tab.research")}
          </button>
          <button
            onClick={() => setActiveTab("startup")}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${activeTab === "startup"
                ? "bg-[#1B3B2B] text-white shadow-sm"
                : "bg-[#FFFFFF] text-[#242220] border border-[#1B3B2B]/20 hover:bg-[#E2ECE5]"
              }`}
          >
            {t("mind.tab.startup")}
          </button>
          <button
            onClick={() => setActiveTab("lab")}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${activeTab === "lab"
                ? "bg-[#1B3B2B] text-white shadow-sm"
                : "bg-[#FFFFFF] text-[#242220] border border-[#1B3B2B]/20 hover:bg-[#E2ECE5]"
              }`}
          >
            {t("mind.tab.lab")}
          </button>
          <button
            onClick={() => setActiveTab("pedagogy")}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${activeTab === "pedagogy"
                ? "bg-[#1B3B2B] text-white shadow-sm"
                : "bg-[#FFFFFF] text-[#242220] border border-[#1B3B2B]/20 hover:bg-[#E2ECE5]"
              }`}
          >
            {t("mind.tab.pedagogy")}
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

                  {item.badge && (
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#7B0323]/10 text-[#7B0323] border border-[#7B0323]/20">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center">
                  {/* Left 7 Cols: Detailed Highlights */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h3 className="font-anton text-lg sm:text-2xl lg:text-3xl uppercase tracking-tight text-[#242220] leading-tight">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-xs sm:text-sm text-[#7B0323] font-semibold mt-1">
                          {item.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Sub-item highlights */}
                    <div className="space-y-4">
                      {item.highlights.map((h, hIdx) => (
                        <div
                          key={hIdx}
                          className="p-3.5 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#1B3B2B]/15 shadow-xs space-y-2 hover:border-[#1B3B2B]/35 transition-colors"
                        >
                          {h.metric ? (
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                              <h4 className="font-bold text-xs sm:text-sm text-[#242220] leading-snug flex-1">
                                {h.heading}
                              </h4>
                              <span className="text-[11px] font-mono font-bold text-[#7B0323] bg-[#7B0323]/10 px-2.5 py-0.5 rounded-full shrink-0 self-start">
                                {h.metric}
                              </span>
                            </div>
                          ) : (
                            <h4 className="font-bold text-xs sm:text-sm text-[#242220] leading-snug">
                              {h.heading}
                            </h4>
                          )}
                          <p className="text-xs text-[#242220]/70 leading-relaxed">
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
