"use client";

import { useState } from "react";
import {
  Trophy,
  Award,
  GraduationCap,
  Code2,
  FileText
} from "lucide-react";
import { ResumeModal } from "@/components/ui/resume-modal";
import { useLanguage } from "@/lib/i18n";

export function TheCompetitorSection() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [resumeOpen, setResumeOpen] = useState(false);
  const { lang, t } = useLanguage();

  const categories = [
    {
      id: 0,
      title: t("competitor.tab0"),
      shortTitle: lang === "vi" ? "Học thuật" : "Academics",
      icon: GraduationCap,
      items: [
        {
          title:
            lang === "vi"
              ? "Trường Phổ thông Năng khiếu - ĐHQG TP.HCM (2024 . 2027)"
              : "VNUHCM - High School for The Gifted (2024 . 2027)",
          subtitle:
            lang === "vi"
              ? "Chuyên Anh • GPA: 9.6 / 10.0 • Top 6% Học sinh Xuất sắc toàn khối"
              : "English Specialization • GPA: 9.6 / 10.0 • Top 6% Student of Grade",
          detail:
            lang === "vi"
              ? "1 trong 2 học sinh duy nhất của tỉnh Đắk Lắk trúng tuyển vào một trong những ngôi trường trung học chuyên chọn lọc nhất Việt Nam."
              : "Selected as 1 of only 2 admitted students from Dak Lak Province to one of Vietnam's most selective institutions.",
          badge: lang === "vi" ? "Top 6% • 1/2 Học sinh Đắk Lắk" : "Top 6% • 1 of 2 Dak Lak Admits",
          highlight: true,
        },
        {
          title:
            lang === "vi"
              ? "THCS Phan Chu Trinh (2020 . 2024)"
              : "Phan Chu Trinh Secondary School (2020 . 2024)",
          subtitle:
            lang === "vi"
              ? "GPA: 8.8 / 10.0 • Giải Ba Học sinh giỏi Tiếng Anh cấp Tỉnh (2023)"
              : "GPA: 8.8 / 10.0 • Provincial Third Prize in English (2023)",
          detail:
            lang === "vi"
              ? "Duy trì năng lực học thuật xuất sắc và đạt nhiều giải thưởng học sinh giỏi cấp tỉnh môn khoa học xã hội."
              : "Consistent academic leadership and provincial distinctions in humanities.",
          badge: lang === "vi" ? "Giải Ba Cấp Tỉnh" : "Provincial Prize",
          highlight: false,
        },
        {
          title:
            lang === "vi"
              ? "Bài thi Chuẩn hóa Quốc tế (SAT & IELTS)"
              : "Standardized Testing (SAT & IELTS)",
          subtitle:
            lang === "vi"
              ? "SAT: 1510 / 1600 • IELTS Academic: 7.5 Overall"
              : "SAT: 1510 Composite • IELTS Academic: 7.5 Overall",
          detail:
            lang === "vi"
              ? "Khẳng định tư duy định lượng vượt trội và năng lực tiếng Anh học thuật xuất sắc qua các kỳ thi chuẩn hóa quốc tế."
              : "Demonstrated advanced quantitative reasoning and English proficiency across standardized metrics.",
          badge: "SAT 1510 • IELTS 7.5",
          highlight: true,
        },
        {
          title:
            lang === "vi"
              ? "Kỳ thi Nâng cao AP (Advanced Placement)"
              : "Advanced Placement (AP Exams)",
          subtitle:
            lang === "vi"
              ? "Bốn Điểm 5 Tuyệt đối trong các lĩnh vực Định lượng & Kinh tế học"
              : "Four Perfect Scores of 5 across Quantitative & Economic Fields",
          detail:
            lang === "vi"
              ? "AP Calculus AB (Điểm 5), AP Statistics (Điểm 5), AP Microeconomics (Điểm 5), AP Macroeconomics (Điểm 5)."
              : "AP Calculus AB (5), AP Statistics (5), AP Microeconomics (5), AP Macroeconomics (5).",
          badge: lang === "vi" ? "4x Điểm 5 Tuyệt đối" : "4x Perfect Score of 5",
          highlight: true,
        },
      ],
    },
    {
      id: 1,
      title: t("competitor.tab1"),
      shortTitle: lang === "vi" ? "Olympic" : "Olympiads",
      icon: Trophy,
      items: [
        {
          title: "Harvard Crimson Business Case (HCBC) 2025",
          subtitle:
            lang === "vi"
              ? "Chung kết Toàn cầu (Top 30 / 2.000 Đội thi Toàn thế giới)"
              : "Global Finalist (Top 30 / 2,000 Teams Worldwide)",
          detail:
            lang === "vi"
              ? "Đội đại diện duy nhất của Việt Nam được mời tranh tài trực tiếp tại khuôn viên Đại học Harvard (Boston, MA). Xây dựng mô hình dự báo tài chính và bảng điều khiển CAC/LTV."
              : "Sole Vietnamese representative team invited to compete on Harvard campus in Boston, MA. Built financial forecasting and CAC/LTV models.",
          badge: lang === "vi" ? "Top 30 Toàn Cầu @ Harvard" : "Global Top 30 @ Harvard",
          highlight: true,
        },
        {
          title: "World Economics Cup (WEC) 2025",
          subtitle:
            lang === "vi"
              ? "Huy chương Bạc (Châu Á & Châu Đại Dương) & Top 10 Điểm Lý thuyết Toàn cầu"
              : "Silver Award (Asia & Oceania) & Top 10 Fundamentals Worldwide",
          detail:
            lang === "vi"
              ? "Bài thi lý thuyết toàn diện bao quát kinh tế vi mô, kinh tế vĩ mô và thương mại quốc tế."
              : "Comprehensive theoretical examination spanning micro, macro, and international trade.",
          badge: lang === "vi" ? "Huy Chương Bạc WEC" : "Silver Medalist",
          highlight: true,
        },
        {
          title: "International Economics Olympiad (IEO) 2025 & 2026",
          subtitle:
            lang === "vi"
              ? "Top 5 Tuyển chọn Đội tuyển Quốc gia (Xếp hạng 3 toàn quốc Việt Nam)"
              : "National Top 5 Selection (Ranked 3rd Nationally across Vietnam)",
          detail:
            lang === "vi"
              ? "Đại diện nhóm học sinh tinh hoa quốc gia qua các vòng thi lý thuyết kinh tế chuyên sâu và mô phỏng giải quyết tình huống kinh doanh thực tế."
              : "Represented elite national cohort through intensive economic theory and simulated business rounds.",
          badge: lang === "vi" ? "Top 3 Toàn Quốc" : "National Rank 3",
          highlight: true,
        },
        {
          title: "Vietnam Economics Olympiad (VEO) 2025 & 2026",
          subtitle:
            lang === "vi"
              ? "Huy chương Đồng Toàn quốc (Hai năm liên tiếp)"
              : "National Bronze Medalist (Two Consecutive Years)",
          detail:
            lang === "vi"
              ? "Kỳ thi kinh tế học danh giá và cạnh tranh khốc liệt nhất giữa các học sinh THPT chuyên trên toàn quốc."
              : "Competitive examination among Vietnam's top high school economics scholars.",
          badge: lang === "vi" ? "Huy Chương Đồng" : "Bronze Medalist",
          highlight: false,
        },
        {
          title: "Vietnam Business Innovation Challenge (VBIC) 2025",
          subtitle:
            lang === "vi"
              ? "Top 10 Chung kết Toàn quốc (Trưởng nhóm)"
              : "Top 10 Grand Final (Team Lead)",
          detail:
            lang === "vi"
              ? "Dẫn dắt chiến lược sản phẩm, kế hoạch thâm nhập thị trường (go-to-market) và mô hình hóa tài chính cho mô hình kinh doanh có khả năng nhân rộng."
              : "Led product strategy, go-to-market plan, and financial modeling for scalable venture concept.",
          badge: lang === "vi" ? "Top 10 Toàn Quốc" : "Top 10 Finalist",
          highlight: false,
        },
        {
          title: "Aspiring Vietnam Contest 2025 & Học bổng ACCA Futurist",
          subtitle:
            lang === "vi"
              ? "Top 4 Cá nhân (Bảng Thương mại) & Giải Danh dự Top 50 Việt Nam"
              : "Top 4 Individual (Trade Division) & Top 50 Vietnam Merit Award",
          detail:
            lang === "vi"
              ? "Được vinh danh là tài năng tài chính trẻ triển vọng bởi Hiệp hội Kế toán Công chứng Anh quốc (ACCA)."
              : "Recognized as emerging finance talent by the Association of Chartered Certified Accountants (ACCA).",
          badge: "Top 4 / Top 50 ACCA",
          highlight: false,
        },
      ],
    },
    {
      id: 2,
      title: t("competitor.tab2"),
      shortTitle: lang === "vi" ? "Tranh biện & Nghệ thuật" : "Debate & Arts",
      icon: Award,
      items: [
        {
          title:
            lang === "vi"
              ? "Tranh biện Chiến lược: DAS-DO Debate Open 2025"
              : "Strategic Debate: DAS-DO Debate Open 2025",
          subtitle:
            lang === "vi" ? "Quán quân Toàn quốc (Hạt giống số 4)" : "National Champion (4th Seed)",
          detail:
            lang === "vi"
              ? "Tranh biện và phản biện các kiến nghị chính sách quan trọng bằng lập luận thực nghiệm và động lực kinh tế học."
              : "Adjudicated and competed on high-stakes policy motions using empirical logic and economic incentives.",
          badge: lang === "vi" ? "Quán Quân Toàn Quốc" : "National Champion",
          highlight: true,
        },
        {
          title:
            lang === "vi"
              ? "Mô phỏng Liên Hợp Quốc: VSGMUN 2026"
              : "Model United Nations: VSGMUN 2026",
          subtitle:
            lang === "vi"
              ? "Giải Bài lập trường Xuất sắc nhất (Hội đồng UNHCR)"
              : "Best Position Paper Award (UNHCR Council)",
          detail:
            lang === "vi"
              ? "Tác giả khung chính sách giải quyết vấn đề người tị nạn do biến đổi khí hậu và bảo vệ sinh kế nông thôn."
              : "Authored policy framework addressing displaced climate refugees and rural livelihood protections.",
          badge: lang === "vi" ? "Bài Lập Trường Xuất Sắc" : "Best Position Paper",
          highlight: false,
        },
        {
          title:
            lang === "vi"
              ? "Nghệ sĩ Độc tấu Đàn T'rưng Truyền thống"
              : "Traditional T'rưng Artist (Lead Soloist)",
          subtitle:
            lang === "vi"
              ? "Nghệ sĩ Độc tấu chính tại Đêm nhạc 'Thanh Âm Đất Việt' (TP.HCM 2025)"
              : "Featured Soloist at 'Thanh Âm Đất Việt' Showcase (HCMC 2025)",
          detail:
            lang === "vi"
              ? "Trình diễn âm nhạc bản địa Tây Nguyên trước ~150 khán giả đô thị nhằm kết nối di sản vùng cao với nhịp sống hiện đại."
              : "Performed Central Highlands indigenous music for ~150 urban attendees to bridge rural-urban cultural gaps.",
          badge: lang === "vi" ? "Nghệ Sĩ Độc Tấu Chính" : "Lead Soloist",
          highlight: true,
        },
        {
          title:
            lang === "vi"
              ? "Triển lãm Nghệ thuật Quốc tế (Philippines 2026)"
              : "International Art Exhibition (Philippines 2026)",
          subtitle:
            lang === "vi"
              ? "Trưng bày tác phẩm tại Bảo tàng Museo ning Angeles, Philippines (Tháng 7/2026)"
              : "Exhibited at Museo ning Angeles, Philippines (Jul 2026)",
          detail:
            lang === "vi"
              ? "Trưng bày tác phẩm hội họa gốc 'Bên dòng nước Thủy điện Sêrêpôk 3, Đắk Lắk', lan tỏa thông điệp sinh thái quê hương ra trường quốc tế."
              : "Exhibited original visual work 'Along the Waters of Srepok 3 Hydropower Plant, Dak Lak' highlighting ecological narratives.",
          badge: lang === "vi" ? "Triển Lãm Quốc Tế" : "International Exhibitor",
          highlight: true,
        },
      ],
    },
    {
      id: 3,
      title: t("competitor.tab3"),
      shortTitle: lang === "vi" ? "Kỹ năng & Hồ sơ" : "Skills & Profile",
      icon: Code2,
      items: [
        {
          title:
            lang === "vi"
              ? "Phương pháp Kỹ thuật & Nghiên cứu Định lượng"
              : "Technical & Quantitative Methodologies",
          subtitle:
            lang === "vi"
              ? "Kinh tế lượng • ANOVA • Hồi quy Logistic • Khoa học Dữ liệu"
              : "Econometrics • ANOVA • Logistic Regression • Data Science",
          detail:
            lang === "vi"
              ? "Mô hình hóa kinh tế lượng trên SPSS, hồi quy nhị phân Binary Logistic, xây dựng mô hình tài chính trên MS Excel/Google Sheets, thiết kế truyền thông trực quan trên Canva."
              : "SPSS Econometric modeling, Binary Logistic Regression, MS Excel/Google Sheets advanced modeling, Canva visual communication.",
          badge: "SPSS Econometrics",
          highlight: true,
        },
        {
          title:
            lang === "vi"
              ? "Môi trường Điện toán & Mô phỏng Khoa học"
              : "Computational & Scientific Environments",
          subtitle:
            lang === "vi"
              ? "C++ cơ bản • Môi trường Linux HPC • VESTA • Mô phỏng Vật liệu DFT"
              : "Basic C++ • Linux HPC • VESTA • DFT Materials Modeling",
          detail:
            lang === "vi"
              ? "Thành thạo trong quá trình nghiên cứu tại Phòng Lab Vật liệu Tính toán NSYSU (Đài Loan) phục vụ mô phỏng cấu trúc vật lý và xử lý dữ liệu lớn."
              : "Mastered at NSYSU Computational Materials Research Lab for physical modeling and simulations.",
          badge: "HPC & DFT",
          highlight: false,
        },
        {
          title: lang === "vi" ? "Ngôn ngữ" : "Languages",
          subtitle:
            lang === "vi"
              ? "Tiếng Việt (Bản ngữ) • Tiếng Anh (Thành thạo - IELTS 7.5) • Tiếng Nhật (Cơ bản)"
              : "Vietnamese (Native) • English (Proficient - IELTS 7.5) • Japanese (Basic)",
          detail:
            lang === "vi"
              ? "Giao tiếp và tranh biện học thuật lưu loát bằng tiếng Anh; kỹ năng thuyết trình và bảo vệ đề án chuyên nghiệp."
              : "Fluent academic and debate discourse in English; professional presentation skills.",
          badge: lang === "vi" ? "Đa Ngôn Ngữ" : "Multilingual",
          highlight: false,
        },
        {
          title:
            lang === "vi"
              ? "Sở thích & Tư duy Chiến lược"
              : "Interests & Strategic Thinking",
          subtitle:
            lang === "vi"
              ? "Biểu diễn đàn T'rưng • Lý thuyết Trò chơi (Game Theory) • Bơi lội • Cầu lông"
              : "T'rưng Performance • Game Theory • Swimming • Badminton",
          detail:
            lang === "vi"
              ? "Đam mê phân tích các tương tác chiến lược thông qua mô phỏng Cân bằng Nash (Nash Equilibrium) và cảm thụ đa nhịp điệu của âm nhạc truyền thống."
              : "Passionate about analyzing strategic interaction through Nash Equilibrium simulations and traditional polyrhythms.",
          badge: "Game Theory & T'rưng",
          highlight: false,
        },
      ],
    },
  ];

  const current = categories[activeCategory];

  return (
    <>
      <section id="the-competitor" className="pt-6 sm:pt-8 pb-12 sm:pb-16 overflow-hidden bg-[#FAF7F2] blueprint-grid border-t border-[#1B3B2B]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 sm:pb-5 border-b border-[#1B3B2B]/15">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1B3B2B] flex items-center justify-center shrink-0 shadow-sm text-[#FAF7F2]">
                <Trophy className="w-6 h-6 text-[#E2ECE5]" />
              </div>
              <div>
                <h2 className="font-anton text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#242220]">
                  {t("competitor.title")}
                </h2>
              </div>
            </div>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isSelected = idx === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(idx)}
                  className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${isSelected
                      ? "bg-[#1B3B2B] text-[#FAF7F2] shadow-sm"
                      : "bg-[#FFFFFF] text-[#242220] border border-[#1B3B2B]/20 hover:bg-[#E2ECE5]"
                    }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Category Content Box */}
          <div className="rounded-3xl border border-[#1B3B2B]/15 bg-[#FFFFFF] blueprint-grid p-4 sm:p-8 lg:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-6 pb-4 border-b border-[#1B3B2B]/15">
              <div>
                <h3 className="font-anton text-xl sm:text-3xl uppercase tracking-tight text-[#242220]">
                  {current.title}
                </h3>
              </div>

              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#FAF7F2] border border-[#7B0323]/30 text-[#7B0323] hover:bg-[#7B0323] hover:text-[#FFFFFF] transition-all self-start sm:self-auto shrink-0 cursor-pointer shadow-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{t("competitor.open")}</span>
              </button>
            </div>

            {/* Items List */}
            <div className="divide-y divide-[#1B3B2B]/10">
              {current.items.map((item, iIdx) => (
                <div
                  key={iIdx}
                  className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 group hover:bg-[#1B3B2B]/[0.02] px-3 -mx-3 rounded-2xl transition-colors"
                >
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <h4 className="font-anton text-base sm:text-lg uppercase tracking-tight text-[#242220] group-hover:text-[#7B0323] transition-colors leading-snug flex-1">
                        {item.title}
                      </h4>
                      {item.highlight && (
                        <span className="w-2 h-2 rounded-full bg-[#7B0323] shrink-0" />
                      )}
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-[#7B0323]">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-[#242220]/70 leading-relaxed pt-1">
                      {item.detail}
                    </p>
                  </div>

                  <div className="shrink-0 self-start">
                    <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-[#FAF7F2] border border-[#1B3B2B]/15 text-[#1B3B2B] shadow-xs">
                      {item.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
