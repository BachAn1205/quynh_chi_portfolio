"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  Printer,
  ArrowLeft,
  Mail,
  MapPin,
  Award,
  BookOpen,
  Briefcase,
  Sparkles,
  Heart,
  Globe,
  CheckCircle2,
  Quote,
  BarChart2,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useProjectImages } from "@/lib/project-images-context";

export default function PrintPortfolioPage() {
  const { lang, setLang } = useLanguage();
  const { getImage } = useProjectImages();

  const avatarUrl =
    getImage("profile-avatar") ||
    getImage("hero-avatar") ||
    "/images/quynhchi/avatar.jpg";

  useEffect(() => {
    document.title =
      lang === "vi"
        ? "Phan Hoàng Quỳnh Chi - Hồ Sơ Năng Lực Toàn Diện (Bản In PDF)"
        : "Phan Hoang Quynh Chi - Comprehensive Portfolio Dossier (Print PDF)";
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#242220] font-sans antialiased">
      {/* ─── INLINE PRINT STYLES ────────────────────────────────────── */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm 15mm;
          }
          html,
          body {
            background-color: #ffffff !important;
            color: #242220 !important;
            font-size: 11pt !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-hidden,
          .no-print {
            display: none !important;
          }
          .page-break-before {
            page-break-before: always !important;
            break-before: page !important;
          }
          .page-break-inside-avoid {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          a {
            text-decoration: none !important;
            color: inherit !important;
          }
        }
      `}</style>

      {/* ─── FLOATING ACTION BAR (HIDDEN IN PRINT) ──────────────────── */}
      <div className="print-hidden sticky top-0 z-50 bg-[#1B3B2B] text-white shadow-lg border-b border-[#1B3B2B]/40 px-4 py-3">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === "vi" ? "Quay lại Website" : "Back to Website"}</span>
            </Link>
            <span className="text-xs text-white/70 hidden sm:inline">
              {lang === "vi"
                ? "Bản in tổng hợp toàn bộ 5 phần (Trải phẳng tất cả các tab)"
                : "Full portfolio print version (All tabs unrolled)"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/20 text-xs">
              <button
                onClick={() => setLang("vi")}
                className={`px-2.5 py-1 rounded-full font-medium transition-colors ${
                  lang === "vi" ? "bg-[#7B0323] text-white font-bold" : "text-white/80 hover:text-white"
                }`}
              >
                Tiếng Việt
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full font-medium transition-colors ${
                  lang === "en" ? "bg-[#7B0323] text-white font-bold" : "text-white/80 hover:text-white"
                }`}
              >
                English
              </button>
            </div>

            {/* Print Trigger Button */}
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#7B0323] hover:bg-[#5E021A] text-white shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{lang === "vi" ? "In / Lưu PDF ngay (Ctrl + P)" : "Print / Save PDF (Ctrl + P)"}</span>
            </button>
          </div>
        </div>

        {/* Browser print settings tips */}
        <div className="max-w-5xl mx-auto mt-2 pt-2 border-t border-white/10 text-[11px] text-white/80 flex flex-wrap items-center justify-between gap-2">
          <div>
            💡 <strong>Mẹo in PDF chuẩn đẹp:</strong> Chọn khổ giấy <strong>A4</strong>, bật tùy chọn{" "}
            <strong>&quot;Background graphics&quot; (Đồ họa nền)</strong> và bỏ chọn{" "}
            <strong>&quot;Headers and footers&quot;</strong>.
          </div>
        </div>
      </div>

      {/* ─── PRINTABLE DOCUMENT BODY ───────────────────────────────── */}
      <main className="max-w-5xl mx-auto p-4 sm:p-8 lg:p-12 space-y-12">
        {/* ══════════════════════════════════════════════════════════════
            HEADER & COVER PROFILE
            ══════════════════════════════════════════════════════════════ */}
        <section className="page-break-inside-avoid border-b-2 border-[#1B3B2B]/20 pb-8 pt-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div className="space-y-3 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B3B2B]/10 text-[#1B3B2B] text-xs font-mono font-semibold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#7B0323]" />
                <span>
                  {lang === "vi"
                    ? "Hồ Sơ Năng Lực Toàn Diện • Cập Nhật 2026"
                    : "Comprehensive Academic & Research Dossier • 2026"}
                </span>
              </div>

              <h1 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-[#242220] leading-none">
                PHAN HOÀNG <span className="text-[#7B0323]">QUỲNH CHI</span>
              </h1>

              <p className="text-sm sm:text-base font-semibold text-[#1B3B2B]">
                {lang === "vi"
                  ? "Nhà nghiên cứu Định lượng • Chiến lược gia Kinh tế Tuần hoàn • Nghệ sĩ Độc tấu Đàn T'rưng"
                  : "Quantitative Researcher • Circular Economy Strategist • Traditional T'rưng Artist"}
              </p>

              <div className="text-xs text-[#242220]/75 space-y-1 font-mono">
                <p>
                  <strong>
                    {lang === "vi"
                      ? "Trường THPT Năng khiếu – ĐHQG-HCM"
                      : "VNUHCM - High School for The Gifted"}
                  </strong>{" "}
                  • {lang === "vi" ? "Chuyên Tiếng Anh (Khóa 2024 – 2027)" : "English Major (2024 – 2027)"}
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1 text-[11px]">
                  <span className="inline-flex items-center gap-1">
                    <Mail className="w-3 h-3 text-[#7B0323]" />
                    liliesmyllerz2k9@gmail.com
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#1B3B2B]" />
                    Đắk Lắk & TP. Hồ Chí Minh, Việt Nam
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Globe className="w-3 h-3 text-[#1B3B2B]" />
                    linkedin.com/in/phanhoangquynhchi
                  </span>
                </div>
              </div>
            </div>

            {/* Profile Avatar */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#1B3B2B]/20 relative shrink-0 shadow-sm">
              <Image
                src={avatarUrl}
                alt="Phan Hoàng Quỳnh Chi"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            MỤC 1: CÂU CHUYỆN & TRIẾT LÝ NỀN TẢNG (ABOUT)
            ══════════════════════════════════════════════════════════════ */}
        <section className="page-break-inside-avoid space-y-6">
          <div className="flex items-center gap-3 border-b border-[#1B3B2B]/15 pb-3">
            <div className="w-8 h-8 rounded-lg bg-[#1B3B2B] text-white flex items-center justify-center font-anton text-sm">
              01
            </div>
            <div>
              <h2 className="font-anton text-2xl uppercase tracking-tight text-[#1B3B2B]">
                {lang === "vi" ? "Nguồn Cội & Triết Lý Nền Tảng" : "Origins & Core Philosophy"}
              </h2>
              <p className="text-xs text-[#242220]/60 font-mono">
                {lang === "vi"
                  ? "Tư duy của Nhà phân tích • Trái tim của Vùng cao Tây Nguyên"
                  : "The Mind of an Analyst • The Heart of the Highlands"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 space-y-3 text-xs sm:text-sm text-[#242220]/80 leading-relaxed text-justify">
              <p>
                {lang === "vi"
                  ? "Lớn lên ở Đắk Lắk, thủ phủ cà phê của Việt Nam, tuổi thơ tôi gắn liền với hai ký ức cảm quan: tiếng vang vọng của đàn T'rưng bản địa qua loa phát thanh xóm nhỏ, và mùi khét của vỏ cà phê cháy dọc các trục đường quốc lộ. Trong nhiều năm, tôi từng coi đó là điều hiển nhiên của quê hương."
                  : "Growing up in Dak Lak, the coffee capital of Vietnam, my childhood was defined by two distinct sensory memories: the resonant echoes of the indigenous T'rưng instrument fading through neighborhood loudspeakers, and the acrid smell of coffee husks burning along highways."}
              </p>
              <p>
                {lang === "vi"
                  ? "Nhưng khi tiếp cận với dữ liệu kinh tế, tôi nhận ra một sự thật nghiệt ngã: 1,6 triệu tấn phế phụ phẩm cà phê bị đốt hàng năm tại Việt Nam tạo ra 1,8 triệu tấn CO2, đồng thời tước đoạt của người nông dân hơn 80 triệu USD giá trị thị trường carbon tiềm năng chỉ vì thiếu công cụ Đo lường, Báo cáo và Thẩm tra dữ liệu (MRV). Tương tự, sau ánh đèn sân khấu, các nghệ nhân T'rưng buộc phải rời bỏ nghề vì sự hoài niệm văn hóa không thể nuôi sống họ nếu thiếu một hệ sinh thái kinh tế bền vững."
                  : "Data revealed an urgent reality: 1.6 million tons of agricultural coffee waste burned annually in Vietnam generates 1.8 million tons of CO2, stripping farmers of over $80 million in potential carbon market value simply because they lacked data tools for MRV. Similarly, T'rưng artisans were abandoning their craft because cultural nostalgia alone could not sustain livelihoods without an economic ecosystem."}
              </p>
              <div className="p-3.5 rounded-xl bg-[#7B0323]/5 border-l-4 border-[#7B0323] text-[#7B0323] font-medium italic">
                {lang === "vi"
                  ? "“Tôi không chỉ tính toán những con số; tôi lập trình những giải pháp bảo vệ đất mẹ và nâng tầm tâm hồn Tây Nguyên.”"
                  : "“I don't just crunch numbers; I code solutions that protect the soil and elevate the soul of the Central Highlands.”"}
              </div>
            </div>

            <div className="md:col-span-4 p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15 space-y-3">
              <h3 className="font-anton text-xs uppercase tracking-wider text-[#1B3B2B]">
                {lang === "vi" ? "Phương Pháp & Công Cụ Nghiên Cứu" : "Methodologies & Tools"}
              </h3>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                {[
                  "SPSS Econometrics",
                  "ANOVA Testing",
                  "Logistic Regression",
                  "Linux HPC / DFT",
                  "QR Traceability",
                  "Cascara Circular Design",
                  "T'rưng Oral Heritage",
                  "Game Theory / Nash",
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#1B3B2B]/15 text-[#242220]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 5 Kinh nghiệm & Sáng kiến */}
          <div className="pt-2">
            <h3 className="font-anton text-sm uppercase tracking-wider text-[#7B0323] mb-3">
              {lang === "vi" ? "Kinh Nghiệm & Sáng Kiến Vận Hành" : "Experience & Operating Initiatives"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <span className="font-mono text-[10px] text-[#7B0323] font-bold block">
                  09/2024 – {lang === "vi" ? "Hiện tại" : "Present"}
                </span>
                <h4 className="font-bold text-[#242220]">
                  {lang === "vi" ? "Nhà Sáng Lập & Chiến Lược Gia Sản Phẩm" : "Founder & Product Strategist"} – CAFLOOP
                </h4>
                <p className="text-[#242220]/75 mt-1 leading-relaxed">
                  {lang === "vi"
                    ? "Chuyển hóa phế phẩm vỏ cà phê Đắk Lắk thành trà Cascara thương mại, quản lý chi phí giá vốn (COGS), tích hợp mã QR truy xuất và tài trợ 77 xe đạp & 2 TV thông minh cho học sinh Buôn Đrăng Phốk."
                    : "Upcycling coffee husks into commercial Cascara tea, managing COGS, package QR traceability, and funding 77 bikes & 2 TVs for rural students."}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <span className="font-mono text-[10px] text-[#7B0323] font-bold block">07/2025 – 08/2025</span>
                <h4 className="font-bold text-[#242220]">
                  {lang === "vi"
                    ? "Thực Tập Sinh Phân Tích Kinh Doanh & Tài Chính"
                    : "Business & Financial Analysis Intern"}{" "}
                  – SI CAFE
                </h4>
                <p className="text-[#242220]/75 mt-1 leading-relaxed">
                  {lang === "vi"
                    ? "Quan sát luồng vận hành chuỗi cung ứng và kiểm toán số liệu tồn kho tại nhà máy chế biến cà phê Đắk Lắk, đối chiếu lý thuyết kinh tế vào vận hành thực tiễn."
                    : "Shadowed supply-chain workflows and audited inventory data entry at a coffee processing facility, grounding economic theory into agriculture operations."}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <span className="font-mono text-[10px] text-[#7B0323] font-bold block">
                  2024 – {lang === "vi" ? "Hiện tại" : "Present"}
                </span>
                <h4 className="font-bold text-[#242220]">
                  {lang === "vi"
                    ? "Chủ Nhiệm Học Thuật & Giảng Viên Kinh Tế"
                    : "Academic Head & Economics Instructor"}{" "}
                  – Shark Club & Geniusstar
                </h4>
                <p className="text-[#242220]/75 mt-1 leading-relaxed">
                  {lang === "vi"
                    ? "Biên soạn giáo trình kinh tế vi mô, tài chính và cố vấn các đội tuyển học sinh tham gia các kỳ thi nghiên cứu và kinh doanh quốc tế."
                    : "Authored microeconomics and finance curricula, mentoring high school teams competing in international business challenges."}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                <span className="font-mono text-[10px] text-[#7B0323] font-bold block">07/2025 – 08/2025</span>
                <h4 className="font-bold text-[#242220]">
                  {lang === "vi"
                    ? "Nghiên Cứu Sinh Mùa Hè Vật Liệu Tính Toán"
                    : "Computational Materials Summer Researcher"}{" "}
                  – NSYSU (Taiwan)
                </h4>
                <p className="text-[#242220]/75 mt-1 leading-relaxed">
                  {lang === "vi"
                    ? "Mô phỏng cấu trúc tinh thể bằng phần mềm VESTA và tính toán DFT trên cụm máy tính hiệu năng cao Linux HPC."
                    : "Modeled crystal structures via VESTA and computed DFT simulations on Linux High-Performance Computing clusters."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            MỤC 2: TƯ DUY & NGHIÊN CỨU ĐỊNH LƯỢNG (THE MIND) - UNROLLED
            ══════════════════════════════════════════════════════════════ */}
        <section className="page-break-before space-y-6">
          <div className="flex items-center gap-3 border-b border-[#1B3B2B]/15 pb-3">
            <div className="w-8 h-8 rounded-lg bg-[#7B0323] text-white flex items-center justify-center font-anton text-sm">
              02
            </div>
            <div>
              <h2 className="font-anton text-2xl uppercase tracking-tight text-[#7B0323]">
                {lang === "vi" ? "Tư Duy: Nghiên Cứu Định Lượng & Đổi Mới Tuần Hoàn" : "The Mind: Quantitative Research & Circular Enterprise"}
              </h2>
              <p className="text-xs text-[#242220]/60 font-mono">
                {lang === "vi"
                  ? "Dùng dữ liệu thực nghiệm để thu hẹp bất bình đẳng và giải quyết bài toán môi trường"
                  : "Leveraging empirical data to bridge societal gaps and solve environmental challenges"}
              </p>
            </div>
          </div>

          {/* 4 Công trình nghiên cứu & Sáng kiến định lượng trải phẳng */}
          <div className="space-y-4">
            {/* Initiative 1: Nghiên cứu độc lập */}
            <div className="page-break-inside-avoid p-5 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
              <div className="flex justify-between items-start gap-4 mb-2">
                <div>
                  <span className="inline-block text-[10px] font-mono uppercase font-bold text-[#7B0323] px-2 py-0.5 rounded bg-[#7B0323]/10 mb-1">
                    {lang === "vi" ? "Nghiên cứu Định lượng Độc lập" : "Independent Quantitative Research"}
                  </span>
                  <h3 className="font-anton text-lg uppercase text-[#242220]">
                    {lang === "vi" ? "Làm Sáng Tỏ Bất Bình Đẳng Qua Dữ Liệu" : "Revealing Disparities Through Data"}
                  </h3>
                </div>
                <BarChart2 className="w-5 h-5 text-[#1B3B2B] shrink-0" />
              </div>

              <div className="space-y-3 text-xs leading-relaxed text-[#242220]/80">
                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <h4 className="font-bold text-[#242220] text-xs">
                    {lang === "vi"
                      ? "1. Chênh lệch Nhận thức trong Lựa chọn Nghề nghiệp Bền vững (2024)"
                      : "1. Awareness Disparities in Sustainable Career Choices (2024)"}
                  </h4>
                  <p className="mt-1">
                    {lang === "vi"
                      ? "Khảo sát cắt ngang 200 học sinh THPT tại Đắk Lắk. Ứng dụng ANOVA và Hồi quy Logistic Nhị phân trên SPSS, xây dựng mô hình dự báo chính xác 83,5% chứng minh rằng: nhận thức xanh tăng 1 đơn vị làm tăng xác suất chọn ngành bền vững lên 3,482 lần. Nghiên cứu chỉ ra rào cản thông tin nghề nghiệp nghiêm trọng của học sinh vùng sâu vùng xa."
                      : "Conducted stratified survey of 200 high schoolers in Dak Lak. Built an 83.5% accuracy logistic regression model proving 1-unit increase in awareness boosts green career choice odds by 3.482x, exposing rural information gaps."}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <h4 className="font-bold text-[#242220] text-xs">
                    {lang === "vi"
                      ? "2. Hệ thống Truy xuất Nguồn gốc Thực phẩm qua Mã QR (12/2025)"
                      : "2. QR Code-Based Food Traceability (Dec 2025)"}
                  </h4>
                  <p className="mt-1">
                    {lang === "vi"
                      ? "Đồng tác giả bài báo đăng trên Tạp chí Quốc tế về Trao quyền & Dịch vụ Cộng đồng Tennessee. Khảo sát 400+ người tiêu dùng tại Hà Nội & TP.HCM, chứng minh truy xuất số giúp giảm thiểu rủi ro cảm nhận nhưng lợi ích còn lệch về phía nhóm thu nhập cao."
                      : "Co-authored paper published in the Tennessee Community Service International Journal. Surveyed 400+ consumers in Hanoi & HCMC, proving digital traceability reduces perceived risk."}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <h4 className="font-bold text-[#242220] text-xs">
                    {lang === "vi"
                      ? "3. Tín chỉ Tuần hoàn cho Nông dân – C4F (01/2026)"
                      : "3. Circular Credits for Farmers – C4F (Jan 2026)"}
                  </h4>
                  <p className="mt-1">
                    {lang === "vi"
                      ? "Đạt Giải Bài viết Xuất sắc Toàn cầu từ Tạp chí Quốc tế Harvard (Harvard International Review). Đề xuất mô hình blockchain phi tập trung để phân phối lại doanh thu thị trường carbon cho người nông dân xử lý 1,6 triệu tấn phế phụ phẩm tại Tây Nguyên."
                      : "Awarded Global Outstanding Writing Content Prize by Harvard International Review. Proposed decentralized blockchain carbon credit reward model for farmers handling 1.6M tons of waste in Dak Lak."}
                  </p>
                </div>
              </div>
            </div>

            {/* Initiative 2: CAFLOOP & Operations */}
            <div className="page-break-inside-avoid p-5 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
              <div className="flex justify-between items-start gap-4 mb-2">
                <div>
                  <span className="inline-block text-[10px] font-mono uppercase font-bold text-[#1B3B2B] px-2 py-0.5 rounded bg-[#1B3B2B]/10 mb-1">
                    {lang === "vi" ? "Khởi nghiệp & Tối ưu Vận hành" : "Enterprise & Operational Optimization"}
                  </span>
                  <h3 className="font-anton text-lg uppercase text-[#242220]">
                    CAFLOOP: {lang === "vi" ? "Dự Án Vỏ Cà Phê Xanh & Chuỗi Cung Ứng" : "Green Coffee Husk Project & Supply Chain"}
                  </h3>
                </div>
                <Briefcase className="w-5 h-5 text-[#7B0323] shrink-0" />
              </div>
              <p className="text-xs text-[#242220]/80 leading-relaxed">
                {lang === "vi"
                  ? "Tái chế phụ phẩm vỏ cà phê thải khí nhà kính thành trà Cascara thương mại. Quản lý chi phí sản xuất (COGS), cấu trúc bảng cân đối thử nghiệm, áp dụng mã QR minh bạch chuỗi cung ứng. Dự án cũng xuất sắc lọt vào Top 30 Chung kết Toàn cầu cuộc thi Harvard Crimson Business Case Competition (HCBC 2025)."
                  : "Upcycling coffee husks into commercial Cascara tea. Managing unit economics (COGS), validating packaging QR traceability. Propelled into Global Top 30 at Harvard Crimson Business Case Competition 2025."}
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            MỤC 3: TRÁI TIM & BẢO TỒN VĂN HÓA (THE HEART) - UNROLLED
            ══════════════════════════════════════════════════════════════ */}
        <section className="page-break-before space-y-6">
          <div className="flex items-center gap-3 border-b border-[#1B3B2B]/15 pb-3">
            <div className="w-8 h-8 rounded-lg bg-[#1B3B2B] text-white flex items-center justify-center font-anton text-sm">
              03
            </div>
            <div>
              <h2 className="font-anton text-2xl uppercase tracking-tight text-[#1B3B2B]">
                {lang === "vi" ? "Trái Tim: Bảo Tồn Văn Hóa & Tác Động Xã Hội" : "The Heart: Cultural Preservation & Social Impact"}
              </h2>
              <p className="text-xs text-[#242220]/60 font-mono">
                {lang === "vi"
                  ? "Bảo tồn di sản truyền khẩu Đàn T'rưng, nghệ thuật biểu diễn và cứu trợ giáo dục vùng cao"
                  : "Preserving T'rưng oral traditions, artistic expression, and rural education relief"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Project 1 */}
            <div className="page-break-inside-avoid p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15 space-y-2">
              <span className="font-mono text-[10px] text-[#7B0323] font-bold uppercase block">
                {lang === "vi" ? "Bảo tồn Văn hóa" : "Cultural Preservation"} • 2.300+ {lang === "vi" ? "Học sinh" : "Students"} • 12+ {lang === "vi" ? "Trường học" : "Schools"}
              </span>
              <h3 className="font-anton text-base uppercase text-[#242220]">
                {lang === "vi" ? "Dự Án Giáo Dục Văn Hóa Đàn T'rưng" : "T'rưng Cultural Education Project"}
              </h3>
              <p className="text-[#242220]/75 leading-relaxed">
                {lang === "vi"
                  ? "Không để âm nhạc bản địa bị lãng quên trong bảo tàng, tôi sáng lập sáng kiến đưa di sản truyền khẩu Tây Nguyên vào giáo trình tương tác tại 12+ trường học cho hơn 2.300 học sinh. Quản lý trang truyền thông văn hóa (5.000+ người theo dõi) và số hóa kho lưu trữ biểu diễn trên YouTube (10.000+ lượt xem)."
                  : "Refusing to let indigenous music become a relic, I organized interactive workshops across 12+ schools engaging ~2,300 students. Managed media channel (5,000+ followers) and digitized YouTube archive (10,000+ views)."}
              </p>
            </div>

            {/* Project 2 */}
            <div className="page-break-inside-avoid p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15 space-y-2">
              <span className="font-mono text-[10px] text-[#1B3B2B] font-bold uppercase block">
                {lang === "vi" ? "Biểu Đạt Nghệ Thuật" : "Artistic Expression"} • {lang === "vi" ? "Độc tấu & Triển lãm Quốc tế" : "Soloist & Exhibition"}
              </span>
              <h3 className="font-anton text-base uppercase text-[#242220]">
                {lang === "vi" ? "Tiếng Nói Nghệ Sĩ: Kết Nối Qua Nghệ Thuật" : "The Artist's Voice: Bridging Gaps"}
              </h3>
              <p className="text-[#242220]/75 leading-relaxed">
                {lang === "vi"
                  ? "Nghệ sĩ độc tấu Đàn T'rưng tại Lễ hội 'Thanh Âm Đất Việt' (TP.HCM), đưa âm vang tre nứa Tây Nguyên đến với khán giả hiện đại. Đồng thời là nhà triển lãm nghệ thuật thị giác tại Bảo tàng Museo ning Angeles, Philippines."
                  : "Featured T'rưng Soloist at 'Thanh Am Dat Viet' showcase (HCMC), and visual artist exhibitor at Museo ning Angeles, Philippines."}
              </p>
            </div>

            {/* Project 3 */}
            <div className="page-break-inside-avoid p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15 space-y-2">
              <span className="font-mono text-[10px] text-[#7B0323] font-bold uppercase block">
                {lang === "vi" ? "Cứu Trợ Giáo Dục" : "Educational Relief"} • 77 {lang === "vi" ? "Xe đạp" : "Bicycles"} • 2 Smart TV
              </span>
              <h3 className="font-anton text-base uppercase text-[#242220]">
                {lang === "vi" ? "Trao Tặng Học Đường Trường Ea Wer" : "Ea Wer Primary School Relief"}
              </h3>
              <p className="text-[#242220]/75 leading-relaxed">
                {lang === "vi"
                  ? "Trực tiếp dùng lợi nhuận từ CAFLOOP trao tặng 77 xe đạp và 2 TV thông minh cho học sinh tiểu học điểm trường Buôn Đrăng Phốk (Buôn Đôn), rút ngắn quãng đường vượt rừng đến trường của trẻ em vùng sâu."
                  : "Channeled early CAFLOOP proceeds to donate 77 bicycles and 2 smart TVs to Buon Drang Phok primary school students, shortening miles of dirt trails to school."}
              </p>
            </div>

            {/* Project 4 */}
            <div className="page-break-inside-avoid p-4 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/15 space-y-2">
              <span className="font-mono text-[10px] text-[#1B3B2B] font-bold uppercase block">
                {lang === "vi" ? "Tư Duy Tranh Biện" : "Critical Inquiry"} • {lang === "vi" ? "Trọng tài Tranh biện THPT" : "Debate Adjudication"}
              </span>
              <h3 className="font-anton text-base uppercase text-[#242220]">
                {lang === "vi" ? "Trọng Tài Chuyên Môn & Đạo Đức Tranh Biện" : "The Logical Adjudicator"}
              </h3>
              <p className="text-[#242220]/75 leading-relaxed">
                {lang === "vi"
                  ? "Đảm nhận vai trò giám khảo chuyên môn tại các giải tranh biện cấp trường và liên tỉnh, huấn luyện tư duy logic, lắng nghe đa chiều và đạo đức học thuật cho thế hệ tranh biện trẻ."
                  : "Adjudicated competitive debate tournaments, mentoring students on formal argumentation, active listening, and evidence verification."}
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            MỤC 4: THÀNH TÍCH HỌC THUẬT & DANH HIỆU (THE COMPETITOR) - UNROLLED
            ══════════════════════════════════════════════════════════════ */}
        <section className="page-break-before space-y-6">
          <div className="flex items-center gap-3 border-b border-[#1B3B2B]/15 pb-3">
            <div className="w-8 h-8 rounded-lg bg-[#7B0323] text-white flex items-center justify-center font-anton text-sm">
              04
            </div>
            <div>
              <h2 className="font-anton text-2xl uppercase tracking-tight text-[#7B0323]">
                {lang === "vi" ? "Thành Tích: Hồ Sơ Học Thuật & Danh Hiệu Quốc Tế" : "The Competitor: Academic Honors & Global Accolades"}
              </h2>
              <p className="text-xs text-[#242220]/60 font-mono">
                {lang === "vi"
                  ? "Trải phẳng đầy đủ 4 nhóm danh hiệu: Học thuật, Olympic, Tranh biện & Kỹ năng"
                  : "Fully unrolled all 4 categories: Academics, Olympiads, Debate & Technical Competencies"}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* ── TAB 1 TRẢI PHẲNG: HỒ SƠ HỌC THUẬT & ĐIỂM THI ── */}
            <div className="page-break-inside-avoid">
              <h3 className="font-anton text-sm uppercase tracking-wider text-[#1B3B2B] mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#7B0323]" />
                <span>
                  {lang === "vi"
                    ? "4.1. Hồ Sơ Học Thuật & Điểm Thi Chuẩn Hóa"
                    : "4.1. Academic Profile & Standardized Testing"}
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-[#242220]">
                      {lang === "vi"
                        ? "Trường THPT Năng khiếu – ĐHQG-HCM"
                        : "VNUHCM - High School for The Gifted"}
                    </h4>
                    <span className="font-mono text-[#7B0323] font-bold">2024 – 2027</span>
                  </div>
                  <p className="text-xs text-[#7B0323] font-semibold mb-2">
                    {lang === "vi" ? "Chuyên Anh" : "English Major"} • GPA: 9.6 / 10.0 • Top 6% {lang === "vi" ? "Toàn khối" : "Grade"}
                  </p>
                  <p className="text-[#242220]/75">
                    {lang === "vi"
                      ? "Là 1 trong 2 học sinh duy nhất của tỉnh Đắk Lắk trúng tuyển vào ngôi trường chuyên giàu truyền thống hàng đầu Việt Nam."
                      : "Selected as 1 of only 2 admitted students from Dak Lak Province to one of Vietnam's most selective institutions."}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-[#242220]">
                      {lang === "vi" ? "Điểm Thi Chuẩn Hóa & Điểm Tuyệt Đối AP" : "Standardized Metrics & Perfect AP Scores"}
                    </h4>
                    <span className="font-mono text-[#1B3B2B] font-bold">Verified</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 my-2">
                    <div className="p-2 rounded-lg bg-[#FAF7F2] text-center border border-[#1B3B2B]/10">
                      <span className="font-mono text-[10px] text-[#242220]/60 block">SAT Composite</span>
                      <span className="font-anton text-lg text-[#7B0323]">1510</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#FAF7F2] text-center border border-[#1B3B2B]/10">
                      <span className="font-mono text-[10px] text-[#242220]/60 block">IELTS Academic</span>
                      <span className="font-anton text-lg text-[#1B3B2B]">7.5 Overall</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#242220]/80">
                    <strong>4x AP Perfect 5s:</strong> AP Calculus AB (5), AP Statistics (5), AP Microeconomics (5), AP Macroeconomics (5).
                  </p>
                </div>
              </div>
            </div>

            {/* ── TAB 2 TRẢI PHẲNG: OLYMPIC KINH TẾ & KINH DOANH ── */}
            <div className="page-break-inside-avoid">
              <h3 className="font-anton text-sm uppercase tracking-wider text-[#1B3B2B] mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#7B0323]" />
                <span>
                  {lang === "vi"
                    ? "4.2. Các Kỳ Thi Olympic Kinh Tế & Kinh Doanh Quốc Tế"
                    : "4.2. Economics & Business Olympiads"}
                </span>
              </h3>
              <div className="divide-y divide-[#1B3B2B]/10 border border-[#1B3B2B]/15 rounded-xl bg-[#FFFFFF] overflow-hidden text-xs">
                <div className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#242220]">Harvard Crimson Business Case Competition (HCBC 2025)</span>
                    <p className="text-[#242220]/70">
                      {lang === "vi"
                        ? "Top 30 Chung kết Toàn cầu (Top 30/2000 đội). Đội đại diện Việt Nam duy nhất được mời đến khuôn viên Đại học Harvard."
                        : "Global Finalist (Top 30/2000). Sole Vietnamese team invited to Harvard campus."}
                    </p>
                  </div>
                  <span className="font-mono font-bold text-[#7B0323] shrink-0">Global Top 30</span>
                </div>

                <div className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#242220]">World Economics Cup (WEC 2025)</span>
                    <p className="text-[#242220]/70">
                      {lang === "vi"
                        ? "Huy chương Bạc (Phân khu Châu Á - Châu Đại Dương) & Top 10 Điểm Kiến thức Nền tảng Toàn cầu."
                        : "Silver Award (Asia & Oceania) & Top 10 Fundamentals Worldwide."}
                    </p>
                  </div>
                  <span className="font-mono font-bold text-[#1B3B2B] shrink-0">Silver Medal</span>
                </div>

                <div className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#242220]">International Economics Olympiad (IEO 2025 & 2026)</span>
                    <p className="text-[#242220]/70">
                      {lang === "vi"
                        ? "Vòng tuyển chọn Đội tuyển Quốc gia Top 5 (Xếp hạng 3 Toàn quốc trên toàn Việt Nam)."
                        : "National Top 5 Selection (Ranked 3rd Nationally across Vietnam)."}
                    </p>
                  </div>
                  <span className="font-mono font-bold text-[#7B0323] shrink-0">National Rank 3</span>
                </div>

                <div className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#242220]">Vietnam Economics Olympiad (VEO 2025 & 2026)</span>
                    <p className="text-[#242220]/70">
                      {lang === "vi"
                        ? "Huy chương Đồng Quốc gia môn Lý thuyết Kinh tế học & Phân tích Tình huống."
                        : "National Bronze Medalist in economic theory and case analysis."}
                    </p>
                  </div>
                  <span className="font-mono font-bold text-[#242220]/60 shrink-0">Bronze Medal</span>
                </div>

                <div className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#242220]">Vietnam Business Innovation Challenge (VBIC 2025)</span>
                    <p className="text-[#242220]/70">
                      {lang === "vi"
                        ? "Top 10 Chung kết Toàn quốc với vai trò Trưởng nhóm Chiến lược & Tài chính."
                        : "Top 10 Grand Final as Team Lead for strategy, marketing, and finance."}
                    </p>
                  </div>
                  <span className="font-mono font-bold text-[#1B3B2B] shrink-0">Top 10 Final</span>
                </div>

                <div className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#242220]">Aspiring Vietnam Contest & Học Bổng ACCA Futurist 2025</span>
                    <p className="text-[#242220]/70">
                      {lang === "vi"
                        ? "Top 4 Cá nhân (Bảng Thương mại) & Top 50 Tài năng Tài chính Trẻ Toàn quốc."
                        : "Top 4 Individual (Trade Division) & Top 50 Vietnam merit award for emerging finance talents."}
                    </p>
                  </div>
                  <span className="font-mono font-bold text-[#7B0323] shrink-0">Top 4 / Top 50</span>
                </div>
              </div>
            </div>

            {/* ── TAB 3 TRẢI PHẲNG: TRANH BIỆN, MUN & NGHỆ THUẬT ── */}
            <div className="page-break-inside-avoid">
              <h3 className="font-anton text-sm uppercase tracking-wider text-[#1B3B2B] mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#7B0323]" />
                <span>
                  {lang === "vi"
                    ? "4.3. Tranh Biện, Mô Phỏng LHQ (MUN) & Nghệ Thuật"
                    : "4.3. Debate, MUN & Performing Arts"}
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                  <span className="font-mono font-bold text-[#7B0323] text-[10px] block">CHAMPION</span>
                  <h4 className="font-bold text-[#242220]">DAS-DO Debate Tournament 2024</h4>
                  <p className="text-[#242220]/70 mt-1">
                    {lang === "vi"
                      ? "Đoạt ngôi Quán quân tranh biện, thể hiện tư duy phản biện sắc bén và khả năng cấu trúc lập luận chính sách công vững chắc."
                      : "Grand Champion. Demonstrated analytical rebuttal and structural public-policy argumentation under tight pressure."}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#1B3B2B]/15">
                  <span className="font-mono font-bold text-[#1B3B2B] text-[10px] block">BEST POSITION PAPER</span>
                  <h4 className="font-bold text-[#242220]">VSGMUN Conference 2024</h4>
                  <p className="text-[#242220]/70 mt-1">
                    {lang === "vi"
                      ? "Giải thưởng Bài lập trường xuất sắc nhất tại Hội nghị Mô phỏng Liên Hợp Quốc về hợp tác kinh tế đa phương."
                      : "Awarded Best Position Paper at Vietnam Secondary Government Model UN on multilateral economic cooperation."}
                  </p>
                </div>
              </div>
            </div>

            {/* ── TAB 4 TRẢI PHẲNG: KỸ NĂNG CHUYÊN MÔN & HỒ SƠ NĂNG LỰC ── */}
            <div className="page-break-inside-avoid p-4 rounded-xl bg-[#E2ECE5]/40 border border-[#1B3B2B]/15 text-xs">
              <h3 className="font-anton text-sm uppercase text-[#1B3B2B] tracking-wider mb-2">
                {lang === "vi"
                  ? "4.4. Kỹ Năng Chuyên Môn, Công Nghệ & Năng Khiếu Nghệ Thuật"
                  : "4.4. Technical Skills, Languages & Arts"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
                <div>
                  <span className="font-bold text-[#242220] block mb-0.5">
                    {lang === "vi" ? "Dữ liệu & Kinh tế lượng:" : "Data & Econometrics:"}
                  </span>
                  <p className="text-[#242220]/75">
                    SPSS, ANOVA, Logistic Regression, MS Excel/Google Sheets, C++, Linux HPC, VESTA, DFT Simulation.
                  </p>
                </div>
                <div>
                  <span className="font-bold text-[#242220] block mb-0.5">
                    {lang === "vi" ? "Ngoại ngữ:" : "Languages:"}
                  </span>
                  <p className="text-[#242220]/75">
                    Tiếng Việt (Bản ngữ), Tiếng Anh (IELTS 7.5 Academic), Tiếng Nhật (Cơ bản).
                  </p>
                </div>
                <div>
                  <span className="font-bold text-[#242220] block mb-0.5">
                    {lang === "vi" ? "Nghệ thuật & Đời sống:" : "Arts & Life:"}
                  </span>
                  <p className="text-[#242220]/75">
                    Độc tấu đàn T&apos;rưng truyền thống, Lý thuyết trò chơi (Game Theory), Trọng tài tranh biện, Bơi lội, Cầu lông.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            MỤC 5: TẦM NHÌN & LỜI KẾT (VISION & CLOSING)
            ══════════════════════════════════════════════════════════════ */}
        <section className="page-break-inside-avoid border-t-2 border-[#1B3B2B]/20 pt-8 space-y-4">
          <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#1B3B2B]/20 space-y-3">
            <h3 className="font-anton text-lg uppercase text-[#1B3B2B] tracking-tight">
              {lang === "vi" ? "Tầm Nhìn & Cam Kết Tương Lai" : "Vision & Long-Term Commitment"}
            </h3>
            <p className="text-xs sm:text-sm text-[#242220]/80 leading-relaxed text-justify">
              {lang === "vi"
                ? "Mục tiêu của tôi là ứng dụng Phân tích Kinh doanh và Khoa học Dữ liệu vào chuỗi cung ứng nông nghiệp Việt Nam, xây dựng các kiến trúc số hóa giúp dữ liệu nông sản trở nên minh bạch và có thể hành động. Tôi tin rằng công nghệ và tư duy định lượng chỉ thực sự có giá trị khi bảo vệ được tài nguyên bản địa và mang lại sự công bằng bền vững cho những người trực tiếp canh tác đất mẹ."
                : "My vision is to build data architectures that make agricultural data transparent, accessible, and actionable, ensuring that local resources and the people who cultivate them are accurately valued and equitably rewarded."}
            </p>

            <div className="pt-4 border-t border-[#1B3B2B]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="text-[#242220]/60 font-mono">
                {lang === "vi" ? "Xác nhận hồ sơ năng lực • Phan Hoàng Quỳnh Chi" : "Verified Academic Profile • Phan Hoang Quynh Chi"}
              </div>
              <div className="font-heading italic text-[#7B0323] text-base font-semibold">
                Phan Hoàng Quỳnh Chi
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
