"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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
  Quote,
  BarChart2,
  Send,
  FileText,
  ArrowUpRight,
  User,
} from "lucide-react";
import { ResumeModal } from "@/components/ui/resume-modal";
import { useLanguage } from "@/lib/i18n";
import { useProjectImages } from "@/lib/project-images-context";

export default function PrintPortfolioPage() {
  const { lang, setLang, t } = useLanguage();
  const { getImage } = useProjectImages();
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // ─── DYNAMIC IMAGE RESOLUTION ────────────────────────────────
  const avatarUrl =
    getImage("profile-avatar") ||
    getImage("hero-avatar") ||
    "/images/quynhchi/avatar.jpg";

  const aboutBannerUrl =
    getImage("about-banner") ||
    "/images/quynhchi/about-banner-1790924182563.jpg" ||
    "/images/quynhchi/hero-coffee-farm.jpg";

  const aboutAnalystUrl =
    getImage("about-analyst") ||
    "/images/quynhchi/about-analyst.jpg";

  const cafloopUrl =
    getImage("mind-startup") ||
    "/images/quynhchi/cafloop-cascara.jpg";

  const mindResearchUrl =
    getImage("mind-research") ||
    "/images/quynhchi/about-analyst.jpg";

  const mindLabUrl =
    getImage("mind-lab") ||
    "/images/quynhchi/about-banner-1790924182563.jpg";

  const mindPedagogyUrl =
    getImage("mind-pedagogy") ||
    "/images/quynhchi/2.jpg";

  const trungPreservationUrl =
    getImage("heart-trung-preservation") ||
    "/images/quynhchi/trung-heritage.jpg";

  const artistVoiceUrl =
    getImage("heart-artist-voice") ||
    "/images/quynhchi/trung-collage-1920x820.png";

  const eaWerUrl =
    getImage("heart-ea-wer") ||
    "/images/quynhchi/3.jpg";

  const wildlifeUrl =
    getImage("heart-wildlife") ||
    "/images/quynhchi/hero-coffee-farm.jpg";

  const adjudicatorUrl =
    getImage("heart-adjudicator") ||
    "/images/quynhchi/2.jpg";

  const contactPortraitUrl =
    getImage("contact-portrait") ||
    "/images/quynhchi/contact-portrait.jpg";

  useEffect(() => {
    document.title =
      lang === "vi"
        ? "Phan Hoàng Quỳnh Chi - Hồ Sơ Năng Lực Toàn Diện (Bản In Chuẩn Tỷ Lệ)"
        : "Phan Hoang Quynh Chi - Full Portfolio Dossier (Exact Aspect Ratios)";
  }, [lang]);

  return (
    <div className="min-h-screen bg-white text-[#242220] font-sans antialiased">
      {/* ─── CONTINUOUS SEAMLESS PRINT CSS RULES ────────────────────── */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 8mm 10mm;
          }
          html,
          body {
            background-color: #ffffff !important;
            color: #242220 !important;
            font-size: 9.5pt !important;
            line-height: 1.35 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-hidden,
          .no-print {
            display: none !important;
          }
          /* Eliminate all artificial page breaks: let content flow continuously */
          section,
          article,
          div {
            break-before: auto !important;
            page-break-before: auto !important;
            break-after: auto !important;
            page-break-after: auto !important;
          }
          /* Keep headings with their immediate content */
          h1,
          h2,
          h3,
          h4 {
            break-after: avoid !important;
            page-break-after: avoid !important;
          }
          /* Only individual small item cards avoid breaking in the middle */
          .item-card {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
          img {
            max-width: 100% !important;
          }
          a {
            text-decoration: none !important;
            color: inherit !important;
          }
        }
      `}</style>

      {/* ─── FLOATING CONTROL BAR (HIDDEN IN PRINT) ──────────────────── */}
      <div className="print-hidden sticky top-0 z-50 bg-[#1B3B2B] text-white shadow-xl border-b border-[#1B3B2B]/40 px-4 py-2.5">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === "vi" ? "Quay lại Website" : "Back to Website"}</span>
            </Link>
            <span className="text-xs text-white/80 font-medium hidden sm:inline">
              {lang === "vi"
                ? "Bản in chuẩn tỷ lệ gốc trên web (Không bóp méo ảnh, gom kín trang A4)"
                : "Exact web aspect ratio dossier (No distorted photos, continuous A4 flow)"}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Language toggle */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/20 text-xs">
              <button
                onClick={() => setLang("vi")}
                className={`px-3 py-0.5 rounded-full font-medium transition-colors ${
                  lang === "vi" ? "bg-[#7B0323] text-white font-bold" : "text-white/80 hover:text-white"
                }`}
              >
                Tiếng Việt
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-0.5 rounded-full font-medium transition-colors ${
                  lang === "en" ? "bg-[#7B0323] text-white font-bold" : "text-white/80 hover:text-white"
                }`}
              >
                English
              </button>
            </div>

            {/* Print Trigger Button */}
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#7B0323] hover:bg-[#5E021A] text-white shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{lang === "vi" ? "In / Lưu PDF ngay (Ctrl + P)" : "Print / Save PDF (Ctrl + P)"}</span>
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-1 pt-1 border-t border-white/10 text-[11px] text-white/80">
          💡 <strong>Mẹo in PDF chuẩn A4:</strong> Tùy chọn in: Bật{" "}
          <strong>&quot;Background graphics&quot; (Đồ họa nền)</strong> và bỏ chọn{" "}
          <strong>&quot;Headers and footers&quot;</strong>.
        </div>
      </div>

      {/* ─── CONTINUOUS SEAMLESS DOSSIER BODY ───────────────────────── */}
      <main className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 space-y-5 bg-white text-[#242220]">
        
        {/* ══════════════════════════════════════════════════════════════
            0. HEADER / MASTHEAD (AVATAR TỶ LỆ 3/2 NHƯ TRÊN WEB)
            ══════════════════════════════════════════════════════════════ */}
        <header className="item-card border-b-2 border-[#1B3B2B]/20 pb-4">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5 flex-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1B3B2B]/10 text-[#1B3B2B] text-[10px] font-mono font-bold uppercase">
                <Sparkles className="w-3 h-3 text-[#7B0323]" />
                <span>
                  {lang === "vi"
                    ? "Hồ Sơ Năng Lực Toàn Diện • Khóa 2024 – 2027"
                    : "Comprehensive Portfolio Dossier • Class of 2024 – 2027"}
                </span>
              </div>

              <h1 className="font-anton text-3xl sm:text-4xl uppercase tracking-tight text-[#242220] leading-none">
                PHAN HOÀNG <span className="text-[#7B0323]">QUỲNH CHI</span>
              </h1>

              <p className="text-xs font-semibold text-[#7B0323] italic">
                {lang === "vi"
                  ? "Tò mò là bản năng. Chiến lược là tư duy. Sáng tạo là động lực."
                  : "Curious by nature. Strategic by thought. Driven to create."}
              </p>

              <div className="text-[11px] text-[#242220]/80 space-y-0.5 font-mono">
                <p className="font-bold text-[#1B3B2B]">
                  {lang === "vi"
                    ? "Trường THPT Năng khiếu – ĐHQG-HCM • Chuyên Tiếng Anh"
                    : "VNUHCM - High School for The Gifted • English Specialization"}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-0.5 text-[10.5px]">
                  <span className="inline-flex items-center gap-1">
                    <Mail className="w-3 h-3 text-[#7B0323]" />
                    liliesmyllerz2k9@gmail.com
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#1B3B2B]" />
                    {lang === "vi" ? "Đắk Lắk & TP. Hồ Chí Minh, Việt Nam" : "Dak Lak & Ho Chi Minh City, Vietnam"}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Globe className="w-3 h-3 text-[#1B3B2B]" />
                    linkedin.com/in/phanhoangquynhchi
                  </span>
                </div>
              </div>
            </div>

            {/* Avatar Tỷ lệ 3/2 chuẩn web */}
            <div className="w-32 sm:w-40 aspect-[3/2] rounded-xl overflow-hidden border-2 border-[#1B3B2B]/20 relative shrink-0 shadow-sm">
              <Image
                src={avatarUrl}
                alt="Phan Hoàng Quỳnh Chi"
                fill
                className="object-cover"
                unoptimized
                priority
              />
            </div>
          </div>
        </header>

        {/* ══════════════════════════════════════════════════════════════
            1. PHẦN TRANG CHỦ: TIÊU ĐIỂM HOẠT ĐỘNG & CAROUSEL (HOME)
            ══════════════════════════════════════════════════════════════ */}
        <section className="space-y-3 pt-1">
          <div className="flex items-center gap-2 border-b border-[#1B3B2B]/15 pb-1.5">
            <span className="w-6 h-6 rounded-md bg-[#1B3B2B] text-white flex items-center justify-center font-anton text-xs">
              01
            </span>
            <h2 className="font-anton text-lg uppercase tracking-tight text-[#1B3B2B]">
              {lang === "vi" ? "Trang Chủ: Tiêu Điểm Hoạt Động & 6 Năng Lực Founder" : "Home: Core Capabilities & Strategic Focus"}
            </h2>
          </div>

          {/* SLIDE 0: CAFLOOP (TỶ LỆ 16/10 CHUẨN WEB) */}
          <div className="item-card p-3.5 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-2.5">
            <div className="flex flex-col sm:flex-row gap-3.5 items-start">
              <div className="w-full sm:w-5/12 aspect-[16/10] relative rounded-lg overflow-hidden border border-[#1B3B2B]/15 shrink-0">
                <Image
                  src={cafloopUrl}
                  alt="CAFLOOP Cascara"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-1 space-y-1">
                <div className="text-[10px] font-mono font-bold text-[#1B3B2B]">
                  01 • {lang === "vi" ? "Đổi Mới Tuần Hoàn" : "Circular Innovation"}
                </div>
                <h3 className="font-anton text-base uppercase text-[#242220] leading-tight">
                  {lang === "vi" ? "Từ Vỏ Cà Phê Đến Tương Lai Tươi Sáng" : "From Coffee Husk to Bright Future"}
                </h3>
                <p className="text-[11px] text-[#242220]/80 leading-relaxed">
                  {lang === "vi"
                    ? "Sáng lập dự án kinh tế tuần hoàn chuyển hóa phế phụ phẩm vỏ cà phê tại Đắk Lắk thành trà Cascara thương mại, theo dõi chi phí COGS, tích hợp mã QR truy xuất chuỗi cung ứng và tái đầu tư lợi nhuận ban đầu vào đồ dùng học tập cho học sinh vùng khó khăn."
                    : "Founded a circular-economy venture transforming coffee husks in Dak Lak into commercial Cascara tea, auditing unit economics (COGS), integrating QR traceability, and donating 77 bikes & 2 TVs to rural students."}
                </p>
                <div className="flex gap-3 text-[10.5px] font-mono text-[#7B0323] pt-0.5 font-bold">
                  <span>• 1,6 triệu tấn phế phụ phẩm</span>
                  <span>• Tiềm năng thị trường $80M</span>
                </div>
              </div>
            </div>

            {/* 6 Core capabilities as founder */}
            <div className="pt-1.5 border-t border-[#1B3B2B]/10">
              <h4 className="font-anton text-[11px] uppercase tracking-wider text-[#7B0323] mb-1.5">
                {lang === "vi" ? "Vai Trò Của Tôi Với Tư Cách Founder (6 Năng Lực Cốt Lõi)" : "My Role as Founder (6 Core Capabilities)"}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[10px]">
                <div className="p-2 rounded-md bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <span className="font-bold text-[#7B0323] block">01. {lang === "vi" ? "PHÁT TRIỂN SẢN PHẨM" : "PRODUCT DEV"}</span>
                  <p className="text-[#242220]/75 mt-0.5">{lang === "vi" ? "Từ phụ phẩm vỏ cà phê thành trà Cascara và quà tặng sinh thái." : "From coffee by-products into Cascara tea."}</p>
                </div>
                <div className="p-2 rounded-md bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <span className="font-bold text-[#7B0323] block">02. {lang === "vi" ? "TÀI CHÍNH & PRICING" : "FINANCE & PRICING"}</span>
                  <p className="text-[#242220]/75 mt-0.5">{lang === "vi" ? "Theo dõi COGS, xây dựng ngân sách và định giá giai đoạn đầu." : "Tracking unit COGS and pricing."}</p>
                </div>
                <div className="p-2 rounded-md bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <span className="font-bold text-[#7B0323] block">03. {lang === "vi" ? "TRUY XUẤT NGUỒN GỐC" : "TRACEABILITY"}</span>
                  <p className="text-[#242220]/75 mt-0.5">{lang === "vi" ? "Tích hợp QR code vào bao bì minh bạch chuỗi cung ứng." : "Packaging QR codes for transparency."}</p>
                </div>
                <div className="p-2 rounded-md bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <span className="font-bold text-[#7B0323] block">04. {lang === "vi" ? "MÔ HÌNH KINH DOANH" : "BUSINESS MODEL"}</span>
                  <p className="text-[#242220]/75 mt-0.5">{lang === "vi" ? "Chuỗi khép kín: thu gom - chế biến - đóng gói - thị trường." : "Sourcing, processing, packaging."}</p>
                </div>
                <div className="p-2 rounded-md bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <span className="font-bold text-[#7B0323] block">05. {lang === "vi" ? "TÁC ĐỘNG CỘNG ĐỒNG" : "COMMUNITY IMPACT"}</span>
                  <p className="text-[#242220]/75 mt-0.5">{lang === "vi" ? "Tái đầu tư lợi nhuận vào 77 xe đạp & 2 TV cho học sinh nghèo." : "Reinvesting profits into 77 bikes & 2 TVs."}</p>
                </div>
                <div className="p-2 rounded-md bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <span className="font-bold text-[#7B0323] block">06. {lang === "vi" ? "TƯ DUY HỆ THỐNG" : "SYSTEMS THINKING"}</span>
                  <p className="text-[#242220]/75 mt-0.5">{lang === "vi" ? "Kết nối nông nghiệp – sản phẩm – dữ liệu – xã hội." : "Interconnecting agriculture, data & society."}</p>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 1 & SLIDE 2: KINH TẾ LƯỢNG & ĐÀN T'RƯNG (TỶ LỆ 16/9 CHUẨN WEB) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Slide 1 */}
            <div className="item-card p-3 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-2">
              <div className="w-full aspect-[16/9] relative rounded-lg overflow-hidden border border-[#1B3B2B]/15">
                <Image src={mindResearchUrl} alt="SPSS Econometrics" fill className="object-cover" unoptimized />
              </div>
              <div>
                <span className="px-2 py-0.5 rounded-full bg-[#1B3B2B]/10 text-[#1B3B2B] text-[9.5px] font-mono font-bold">
                  02 • {lang === "vi" ? "Nghiên Cứu Định Lượng" : "Quantitative Research"}
                </span>
                <h3 className="font-anton text-sm uppercase text-[#242220] leading-tight mt-0.5">
                  {lang === "vi" ? "Kinh Tế Lượng Dự Báo (SPSS 83,5%)" : "Predictive Econometrics (SPSS 83.5%)"}
                </h3>
              </div>
              <p className="text-[10.5px] text-[#242220]/80 leading-relaxed">
                {lang === "vi"
                  ? "Khảo sát cắt ngang 200 học sinh THPT chứng minh xác suất chọn nghề xanh tăng 3,482 lần với mô hình hồi quy Logistic nhị phân SPSS đạt độ chính xác 83,5%."
                  : "Cross-sectional survey of 200 high school students proving 3.482x odds increase in green career choices via SPSS binary logistic regression (83.5% accuracy)."}
              </p>
            </div>

            {/* Slide 2 */}
            <div className="item-card p-3 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-2">
              <div className="w-full aspect-[16/9] relative rounded-lg overflow-hidden border border-[#1B3B2B]/15">
                <Image src={trungPreservationUrl} alt="T'rưng Cultural Heritage" fill className="object-cover" unoptimized />
              </div>
              <div>
                <span className="text-[9.5px] font-mono font-bold text-[#1B3B2B]">
                  03 • {lang === "vi" ? "Bảo Tồn Đàn T'rưng" : "T'rưng Cultural Preservation"}
                </span>
                <h3 className="font-anton text-sm uppercase text-[#242220] leading-tight mt-0.5">
                  {lang === "vi" ? "Di Sản Truyền Khẩu & Biểu Diễn Đô Thị" : "Oral Heritage & Urban Showcases"}
                </h3>
              </div>
              <p className="text-[10.5px] text-[#242220]/80 leading-relaxed">
                {lang === "vi"
                  ? "Hệ thống hóa di sản truyền khẩu Tây Nguyên thành giáo trình tương tác tại 12+ trường học cho hơn 2.300 học sinh và số hóa kho lưu trữ biểu diễn YouTube 10.000+ views."
                  : "Synthesizing oral Central Highlands heritage into structured school curricula across 12+ schools for 2,300+ students, with 10,000+ views digital archive."}
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            2. PHẦN VỀ TÔI: NGUỒN CỘI, NARRATIVE & 5 KINH NGHIỆM (ABOUT)
            ══════════════════════════════════════════════════════════════ */}
        <section className="space-y-3 pt-2">
          <div className="flex items-center gap-2 border-b border-[#1B3B2B]/15 pb-1.5">
            <span className="w-6 h-6 rounded-md bg-[#7B0323] text-white flex items-center justify-center font-anton text-xs">
              02
            </span>
            <h2 className="font-anton text-lg uppercase tracking-tight text-[#7B0323]">
              {lang === "vi" ? "Về Tôi: Nguồn Cội & Triết Lý Nền Tảng (About Me)" : "About Me: Origins & Core Philosophy"}
            </h2>
          </div>

          {/* Banner ảnh Tỷ lệ 3/2 chuẩn web */}
          <div className="item-card w-full aspect-[3/2] max-h-80 relative rounded-xl overflow-hidden border border-[#1B3B2B]/20">
            <Image
              src={aboutBannerUrl}
              alt="About Banner Quynh Chi"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Story Narrative & Analyst Image (Tỷ lệ 4/3 chuẩn web) */}
          <div className="item-card grid grid-cols-1 md:grid-cols-12 gap-3.5 items-start">
            <div className="md:col-span-8 space-y-2 text-[11px] text-[#242220]/80 leading-relaxed text-justify">
              <h3 className="font-anton text-base uppercase tracking-tight text-[#242220]">
                {lang === "vi" ? "Tư Duy của Nhà Phân Tích. Trái Tim của Vùng Cao." : "The Mind of an Analyst. The Heart of the Highlands."}
              </h3>
              <p>
                {lang === "vi"
                  ? "Lớn lên ở Đắk Lắk, thủ phủ cà phê của Việt Nam, tuổi thơ tôi gắn liền với tiếng đàn T'rưng qua loa phát thanh và mùi khét của vỏ cà phê cháy dọc quốc lộ. Khi tiếp cận dữ liệu, tôi nhận ra 1,6 triệu tấn phế phụ phẩm cà phê bị đốt hàng năm tại Việt Nam tạo ra 1,8 triệu tấn CO2, tước đoạt của nông dân hơn 80 triệu USD thị trường carbon chỉ vì thiếu công cụ MRV. Tương tự, nghệ nhân T'rưng bỏ nghề vì sự hoài niệm không thể nuôi sống họ nếu thiếu hệ sinh thái kinh tế bền vững."
                  : "Growing up in Dak Lak, the coffee capital of Vietnam, my childhood was defined by the echoes of T'rưng instruments and burning coffee husks. Data revealed that 1.6M tons of waste burned annually creates 1.8M tons of CO2, stripping farmers of $80M in carbon market potential due to a lack of MRV tools."}
              </p>
              <div className="p-2.5 rounded-lg bg-[#7B0323]/5 border-l-4 border-[#7B0323] text-[#7B0323] font-medium italic text-[11px]">
                {lang === "vi"
                  ? "“Tôi không chỉ tính toán những con số; tôi lập trình những giải pháp bảo vệ đất mẹ và nâng tầm tâm hồn Tây Nguyên.”"
                  : "“I don't just crunch numbers; I code solutions that protect the soil and elevate the soul of the Central Highlands.”"}
              </div>
            </div>

            <div className="md:col-span-4 space-y-2">
              <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden border border-[#1B3B2B]/20">
                <Image src={aboutAnalystUrl} alt="Analyst Quynh Chi" fill className="object-cover" unoptimized />
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-1">
                <span className="font-mono text-[9.5px] text-[#242220]/60 font-bold uppercase tracking-wider block">
                  {lang === "vi" ? "Phương Pháp Nghiên Cứu:" : "Methodologies:"}
                </span>
                <div className="flex flex-wrap gap-1 text-[9.5px] font-mono">
                  {["SPSS", "ANOVA", "Logistic Regression", "Linux HPC", "QR Traceability", "Cascara Design", "T'rưng", "Game Theory"].map((p, i) => (
                    <span key={i} className="px-1.5 py-0.5 rounded bg-[#FAF7F2] border border-[#1B3B2B]/15 text-[#242220]">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 5 Kinh nghiệm & Sáng kiến (Compact 2 columns) */}
          <div className="space-y-2 pt-1">
            <h3 className="font-anton text-xs uppercase tracking-wider text-[#1B3B2B]">
              {lang === "vi" ? "Kinh Nghiệm & Sáng Kiến Vận Hành (Experience & Initiatives)" : "Experience & Operating Initiatives"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10.5px]">
              <div className="item-card p-2.5 rounded-lg bg-white border border-[#1B3B2B]/15 space-y-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-[#242220]">{lang === "vi" ? "Sáng Lập & Chiến Lược Gia" : "Founder & Strategist"} – CAFLOOP</h4>
                  <span className="font-mono text-[9.5px] text-[#7B0323] font-bold">09/2024 – Nay</span>
                </div>
                <p className="text-[#242220]/75 leading-relaxed">
                  {lang === "vi"
                    ? "Chuyển hóa vỏ cà phê thành trà Cascara thương mại, quản lý giá vốn (COGS), tích hợp mã QR truy xuất và tài trợ 77 xe đạp & 2 TV thông minh cho học sinh Buôn Đrăng Phốk."
                    : "Upcycling coffee husks into Cascara tea, managing COGS, package QR traceability, donating 77 bikes & 2 TVs."}
                </p>
              </div>

              <div className="item-card p-2.5 rounded-lg bg-white border border-[#1B3B2B]/15 space-y-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-[#242220]">{lang === "vi" ? "Thực Tập Sinh Phân Tích Kinh Doanh" : "Business Intern"} – SI CAFE</h4>
                  <span className="font-mono text-[9.5px] text-[#7B0323] font-bold">07/2025 – 08/2025</span>
                </div>
                <p className="text-[#242220]/75 leading-relaxed">
                  {lang === "vi"
                    ? "Quan sát luồng vận hành chuỗi cung ứng và kiểm toán dữ liệu tồn kho tại nhà máy chế biến cà phê Đắk Lắk, đối chiếu kinh tế học vào thực tiễn."
                    : "Shadowed supply-chain workflows and audited inventory logs at a coffee processing facility."}
                </p>
              </div>

              <div className="item-card p-2.5 rounded-lg bg-white border border-[#1B3B2B]/15 space-y-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-[#242220]">{lang === "vi" ? "Chủ Nhiệm Học Thuật & Giảng Viên" : "Academic Head"} – Shark Club & Geniusstar</h4>
                  <span className="font-mono text-[9.5px] text-[#7B0323] font-bold">2024 – Nay</span>
                </div>
                <p className="text-[#242220]/75 leading-relaxed">
                  {lang === "vi"
                    ? "Biên soạn và giảng dạy giáo trình kinh tế học vi mô, tài chính cho học sinh THPT, hướng dẫn phân tích case study thi đấu quốc tế."
                    : "Authored microeconomics curricula, mentored high school students through business case studies."}
                </p>
              </div>

              <div className="item-card p-2.5 rounded-lg bg-white border border-[#1B3B2B]/15 space-y-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-[#242220]">{lang === "vi" ? "Nghiên Cứu Sinh Mùa Hè" : "Summer Researcher"} – NSYSU (Đài Loan)</h4>
                  <span className="font-mono text-[9.5px] text-[#7B0323] font-bold">07/2025 – 08/2025</span>
                </div>
                <p className="text-[#242220]/75 leading-relaxed">
                  {lang === "vi"
                    ? "Mô phỏng cấu trúc tinh thể bằng VESTA và tính toán DFT trên siêu máy tính Linux HPC, rèn luyện tư duy thực nghiệm định lượng."
                    : "Modeled crystal structures via VESTA and computed DFT simulations on Linux HPC clusters."}
                </p>
              </div>
            </div>
          </div>

          {/* 3 Work Snapshots Gallery (Tỷ lệ 4/3 chuẩn web) */}
          <div className="grid grid-cols-3 gap-2.5 pt-1">
            <div className="item-card space-y-1">
              <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden border border-[#1B3B2B]/15">
                <Image src={cafloopUrl} alt="Cascara QR" fill className="object-cover" unoptimized />
              </div>
              <span className="font-anton text-[9.5px] uppercase text-[#7B0323] block text-center">
                {lang === "vi" ? "Trà Cascara CAFLOOP & Mã QR" : "CAFLOOP Cascara Tea & QR"}
              </span>
            </div>
            <div className="item-card space-y-1">
              <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden border border-[#1B3B2B]/15">
                <Image src={mindResearchUrl} alt="SPSS Regression" fill className="object-cover" unoptimized />
              </div>
              <span className="font-anton text-[9.5px] uppercase text-[#7B0323] block text-center">
                {lang === "vi" ? "Kinh Tế Lượng SPSS" : "SPSS Quantitative Econometrics"}
              </span>
            </div>
            <div className="item-card space-y-1">
              <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden border border-[#1B3B2B]/15">
                <Image src={trungPreservationUrl} alt="T'rưng Project" fill className="object-cover" unoptimized />
              </div>
              <span className="font-anton text-[9.5px] uppercase text-[#7B0323] block text-center">
                {lang === "vi" ? "Giáo Dục Đàn T'rưng" : "T'rưng Cultural Education"}
              </span>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            3. PHẦN TƯ DUY: CẢ 4 DỰ ÁN NGHIÊN CỨU & KHỞI NGHIỆP (THE MIND)
            (ẢNH TỶ LỆ 4/3 CHUẨN WEB)
            ══════════════════════════════════════════════════════════════ */}
        <section className="space-y-3 pt-2">
          <div className="flex items-center gap-2 border-b border-[#1B3B2B]/15 pb-1.5">
            <span className="w-6 h-6 rounded-md bg-[#1B3B2B] text-white flex items-center justify-center font-anton text-xs">
              03
            </span>
            <h2 className="font-anton text-lg uppercase tracking-tight text-[#1B3B2B]">
              {lang === "vi" ? "Tư Duy: Nghiên Cứu Định Lượng & Khởi Nghiệp (The Mind)" : "The Mind: Quantitative Research & Enterprise"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Project 1: Nghiên cứu Định lượng Độc lập (Ảnh 4/3 chuẩn web) */}
            <div className="item-card p-3 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-2">
              <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden border border-[#1B3B2B]/15">
                <Image src={mindResearchUrl} alt="Mind Research" fill className="object-cover" unoptimized />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase font-bold text-[#1B3B2B]">
                  {lang === "vi" ? "Nghiên Cứu Độc Lập" : "Independent Research"}
                </span>
                <h3 className="font-anton text-sm uppercase text-[#242220] leading-tight mt-0.5">
                  {lang === "vi" ? "Làm Sáng Tỏ Bất Bình Đẳng Qua Dữ Liệu" : "Revealing Disparities"}
                </h3>
              </div>
              <ul className="text-[10px] text-[#242220]/80 space-y-1 list-disc pl-3.5">
                <li><strong>Khảo sát nghề bền vững 2024:</strong> 200 học sinh Đắk Lắk, mô hình hồi quy SPSS 83,5%, xác suất tăng 3,482 lần.</li>
                <li><strong>Truy xuất thực phẩm mã QR (12/2025):</strong> Công bố trên tạp chí quốc tế Tennessee (khảo sát 400+ người tiêu dùng).</li>
                <li><strong>Tín chỉ tuần hoàn C4F (01/2026):</strong> Giải xuất sắc toàn cầu từ <em>Harvard International Review</em> (tái chế 1,6M tấn vỏ cà phê).</li>
              </ul>
            </div>

            {/* Project 2: CAFLOOP & Vận hành (Ảnh 4/3 chuẩn web) */}
            <div className="item-card p-3 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-2">
              <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden border border-[#1B3B2B]/15">
                <Image src={cafloopUrl} alt="CAFLOOP Project" fill className="object-cover" unoptimized />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase font-bold text-[#1B3B2B] px-1.5 py-0.5 rounded bg-[#1B3B2B]/10">
                  {lang === "vi" ? "Khởi Nghiệp Tuần Hoàn" : "Circular Enterprise"}
                </span>
                <h3 className="font-anton text-sm uppercase text-[#242220] leading-tight mt-0.5">
                  {lang === "vi" ? "CAFLOOP & Vận Hành Chuỗi Cung Ứng" : "CAFLOOP & Operations"}
                </h3>
              </div>
              <ul className="text-[10px] text-[#242220]/80 space-y-1 list-disc pl-3.5">
                <li><strong>Trà Cascara & Định mức giá vốn (COGS):</strong> Thu gom vỏ cà phê, dán mã QR truy xuất minh bạch.</li>
                <li><strong>Thực tập sinh chuỗi cung ứng SI CAFE:</strong> Kiểm toán dữ liệu tồn kho, tìm hiểu kinh tế nông hộ nhỏ.</li>
                <li><strong>Harvard Crimson Case (HCBC 2025):</strong> Top 30 Chung kết toàn cầu (Top 30/2000), đại diện Việt Nam duy nhất tại Harvard.</li>
              </ul>
            </div>

            {/* Project 3: NSYSU (Ảnh 4/3 chuẩn web) */}
            <div className="item-card p-3 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-1.5">
              <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden border border-[#1B3B2B]/15">
                <Image src={mindLabUrl} alt="NSYSU Lab" fill className="object-cover" unoptimized />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase font-bold text-[#1B3B2B]">
                  {lang === "vi" ? "Vật Liệu Tính Toán" : "Materials Science"}
                </span>
                <h3 className="font-anton text-xs uppercase text-[#242220]">
                  {lang === "vi" ? "Phòng Lab ĐH Tôn Dật Tiên (NSYSU, Đài Loan)" : "NSYSU Taiwan Lab"}
                </h3>
              </div>
              <p className="text-[10px] text-[#242220]/75 leading-relaxed">
                {lang === "vi"
                  ? "Mô phỏng cấu trúc tinh thể với VESTA và tính toán DFT trên cụm máy tính Linux HPC, rèn luyện tính chặt chẽ trong phương pháp nghiên cứu thực nghiệm."
                  : "Simulated crystal lattices with VESTA and computed DFT simulations on Linux HPC clusters."}
              </p>
            </div>

            {/* Project 4: Sư phạm kinh tế (Ảnh 4/3 chuẩn web) */}
            <div className="item-card p-3 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-1.5">
              <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden border border-[#1B3B2B]/15">
                <Image src={mindPedagogyUrl} alt="Pedagogy Shark Club" fill className="object-cover" unoptimized />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase font-bold text-[#7B0323]">
                  {lang === "vi" ? "Sư Phạm & Lan Tỏa" : "Pedagogy"}
                </span>
                <h3 className="font-anton text-xs uppercase text-[#242220]">
                  Shark Club & CLB Geniusstar
                </h3>
              </div>
              <p className="text-[10px] text-[#242220]/75 leading-relaxed">
                {lang === "vi"
                  ? "Biên soạn giáo trình kinh tế học và tài chính vi mô, huấn luyện kỹ năng phân tích tình huống kinh doanh và cố vấn học sinh chuẩn bị cho các kỳ thi học thuật quốc tế."
                  : "Authored microeconomics curricula, mentored high school students through business case studies."}
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            4. PHẦN TRÁI TIM: CẢ 5 DỰ ÁN VĂN HÓA & XÃ HỘI (THE HEART)
            (ẢNH TỶ LỆ 16/9 CHUẨN WEB)
            ══════════════════════════════════════════════════════════════ */}
        <section className="space-y-3 pt-2">
          <div className="flex items-center gap-2 border-b border-[#1B3B2B]/15 pb-1.5">
            <span className="w-6 h-6 rounded-md bg-[#7B0323] text-white flex items-center justify-center font-anton text-xs">
              04
            </span>
            <h2 className="font-anton text-lg uppercase tracking-tight text-[#7B0323]">
              {lang === "vi" ? "Trái Tim: Bảo Tồn Văn Hóa & Tác Động Xã Hội (The Heart)" : "The Heart: Cultural Preservation & Social Impact"}
            </h2>
          </div>

          {/* Compact Featured Showcase Banner (Ảnh 16/9 chuẩn web) */}
          <div className="item-card p-3 rounded-xl bg-[#1B3B2B] text-white flex flex-col sm:flex-row gap-3.5 items-center">
            <div className="w-full sm:w-5/12 aspect-[16/9] relative rounded-lg overflow-hidden border border-white/20 shrink-0">
              <Image src={trungPreservationUrl} alt="T'rung Soloist" fill className="object-cover" unoptimized />
            </div>
            <div className="space-y-1">
              <span className="text-[9.5px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/10 text-[#E2ECE5]">
                {lang === "vi" ? "Nghệ sĩ Độc tấu Đàn T'rưng Bản địa" : "Featured Traditional T'rưng Soloist"}
              </span>
              <h3 className="font-anton text-base uppercase tracking-tight text-white">
                {lang === "vi" ? "Âm Vang Đại Ngàn Tây Nguyên" : "Echoes of the Central Highlands"}
              </h3>
              <p className="text-[10.5px] text-white/80 leading-relaxed">
                {lang === "vi"
                  ? "Hệ thống hóa di sản truyền khẩu thành chương trình giảng dạy tại 12+ trường học cho hơn 2.300 học sinh, độc tấu tại TP.HCM kết nối văn hóa vùng cao với khán giả đô thị (kho lưu trữ YouTube 10.000+ views)."
                  : "Synthesized oral traditions into interactive curricula across 12+ schools for 2,300+ students, performing in HCMC to bridge highland culture with metropolitan audiences."}
              </p>
            </div>
          </div>

          {/* Toàn bộ 5 dự án dàn trải (Ảnh 16/9 chuẩn web) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="item-card p-2.5 rounded-lg bg-white border border-[#1B3B2B]/15 flex gap-2.5 items-start">
              <div className="w-24 aspect-[16/9] relative rounded-md overflow-hidden border border-[#1B3B2B]/15 shrink-0">
                <Image src={trungPreservationUrl} alt="T'rưng Project" fill className="object-cover" unoptimized />
              </div>
              <div className="space-y-0.5 text-[10px]">
                <span className="font-mono font-bold text-[#7B0323] block">{lang === "vi" ? "Giáo Dục Đàn T'rưng" : "T'rưng Education"}</span>
                <p className="text-[#242220]/75">Biên soạn giáo trình di sản truyền khẩu, điều hành fanpage 5.000+ followers và số hóa YouTube 10.000+ views.</p>
              </div>
            </div>

            <div className="item-card p-2.5 rounded-lg bg-white border border-[#1B3B2B]/15 flex gap-2.5 items-start">
              <div className="w-24 aspect-[16/9] relative rounded-md overflow-hidden border border-[#1B3B2B]/15 shrink-0">
                <Image src={artistVoiceUrl} alt="Artist Voice" fill className="object-cover" unoptimized />
              </div>
              <div className="space-y-0.5 text-[10px]">
                <span className="font-mono font-bold text-[#1B3B2B] block">{lang === "vi" ? "Tiếng Nói Nghệ Sĩ" : "The Artist's Voice"}</span>
                <p className="text-[#242220]/75">Độc tấu tại Lễ hội &apos;Thanh Âm Đất Việt&apos; (TP.HCM) và triển lãm nghệ thuật thị giác tại Bảo tàng Philippines.</p>
              </div>
            </div>

            <div className="item-card p-2.5 rounded-lg bg-white border border-[#1B3B2B]/15 flex gap-2.5 items-start">
              <div className="w-24 aspect-[16/9] relative rounded-md overflow-hidden border border-[#1B3B2B]/15 shrink-0">
                <Image src={eaWerUrl} alt="Ea Wer Relief" fill className="object-cover" unoptimized />
              </div>
              <div className="space-y-0.5 text-[10px]">
                <span className="font-mono font-bold text-[#7B0323] block">{lang === "vi" ? "Cứu Trợ Ea Wer (77 Xe Đạp & 2 TV)" : "Ea Wer Relief"}</span>
                <p className="text-[#242220]/75">Dùng lợi nhuận CAFLOOP trao tặng 77 xe đạp & 2 TV thông minh cho học sinh nghèo Buôn Đrăng Phốk.</p>
              </div>
            </div>

            <div className="item-card p-2.5 rounded-lg bg-white border border-[#1B3B2B]/15 flex gap-2.5 items-start">
              <div className="w-24 aspect-[16/9] relative rounded-md overflow-hidden border border-[#1B3B2B]/15 shrink-0">
                <Image src={wildlifeUrl} alt="Wildlife" fill className="object-cover" unoptimized />
              </div>
              <div className="space-y-0.5 text-[10px]">
                <span className="font-mono font-bold text-[#1B3B2B] block">{lang === "vi" ? "Tiếng Nói Hoang Dã & Cầu Hoa Sen" : "Wildlife & Bridge"}</span>
                <p className="text-[#242220]/75">Nâng cao nhận thức bảo tồn sinh thái động vật hoang dã Tây Nguyên và dự án cầu Hoa Sen qua suối mùa lũ.</p>
              </div>
            </div>

            <div className="item-card sm:col-span-2 p-2.5 rounded-lg bg-white border border-[#1B3B2B]/15 flex gap-2.5 items-start">
              <div className="w-24 aspect-[16/9] relative rounded-md overflow-hidden border border-[#1B3B2B]/15 shrink-0">
                <Image src={adjudicatorUrl} alt="Adjudicator" fill className="object-cover" unoptimized />
              </div>
              <div className="space-y-0.5 text-[10px]">
                <span className="font-mono font-bold text-[#7B0323] block">{lang === "vi" ? "Trọng Tài Tranh Biện Chuyên Môn" : "The Logical Adjudicator"}</span>
                <p className="text-[#242220]/75">Giám khảo chuyên môn tại các giải tranh biện THPT, bồi dưỡng tư duy logic, lắng nghe đa chiều và đạo đức học thuật cho học sinh.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            5. PHẦN THÀNH TÍCH: TRẢI PHẲNG TOÀN BỘ 4 TABS (THE COMPETITOR)
            ══════════════════════════════════════════════════════════════ */}
        <section className="space-y-3 pt-2">
          <div className="flex items-center gap-2 border-b border-[#1B3B2B]/15 pb-1.5">
            <span className="w-6 h-6 rounded-md bg-[#1B3B2B] text-white flex items-center justify-center font-anton text-xs">
              05
            </span>
            <h2 className="font-anton text-lg uppercase tracking-tight text-[#1B3B2B]">
              {lang === "vi" ? "Thành Tích: Học Thuật, Olympic & Kỹ Năng (The Competitor)" : "The Competitor: Global Accolades & Technical Profile"}
            </h2>
          </div>

          <div className="space-y-3">
            {/* ── TAB 1: HỒ SƠ HỌC THUẬT & KIỂM TRA CHUẨN HÓA ── */}
            <div className="space-y-1.5">
              <h3 className="font-anton text-xs uppercase tracking-wider text-[#7B0323] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#7B0323]" />
                <span>{lang === "vi" ? "5.1. Học Thuật & Điểm Thi Chuẩn Hóa" : "5.1. Academic Profile & Testing"}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10.5px]">
                <div className="item-card p-2.5 rounded-lg bg-white border border-[#1B3B2B]/15 space-y-0.5">
                  <h4 className="font-bold text-[#242220]">THPT Năng khiếu – ĐHQG-HCM</h4>
                  <p className="text-[10px] text-[#7B0323] font-bold">Chuyên Anh • GPA: 9.6/10.0 • Top 6%</p>
                  <p className="text-[10px] text-[#242220]/75">1 trong 2 học sinh Đắk Lắk trúng tuyển trường chuyên hàng đầu VN.</p>
                </div>

                <div className="item-card p-2.5 rounded-lg bg-white border border-[#1B3B2B]/15 space-y-0.5">
                  <h4 className="font-bold text-[#242220]">THCS Phan Chu Trinh</h4>
                  <p className="text-[10px] text-[#7B0323] font-bold">GPA: 8.8/10.0 • Giải Ba Tỉnh môn Anh</p>
                  <p className="text-[10px] text-[#242220]/75">Thành tích xuất sắc trong học thuật và các giải thưởng khoa học xã hội.</p>
                </div>

                <div className="item-card p-2.5 rounded-lg bg-white border border-[#1B3B2B]/15 space-y-0.5">
                  <h4 className="font-bold text-[#242220]">SAT 1510 • IELTS 7.5 • 4x AP 5</h4>
                  <p className="text-[10px] text-[#1B3B2B] font-bold">4 điểm 5 Tuyệt đối AP</p>
                  <p className="text-[10px] text-[#242220]/75">AP Calculus AB (5), AP Stats (5), AP Micro (5), AP Macro (5).</p>
                </div>
              </div>
            </div>

            {/* ── TAB 2: OLYMPIC KINH TẾ & KINH DOANH (COMPACT TABLE/LIST) ── */}
            <div className="space-y-1.5">
              <h3 className="font-anton text-xs uppercase tracking-wider text-[#7B0323] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#7B0323]" />
                <span>{lang === "vi" ? "5.2. Các Kỳ Thi Olympic Kinh Tế & Kinh Doanh Quốc Tế" : "5.2. Economics & Business Olympiads"}</span>
              </h3>
              <div className="item-card divide-y divide-[#1B3B2B]/10 border border-[#1B3B2B]/15 rounded-lg bg-white overflow-hidden text-[10px]">
                <div className="p-2 flex justify-between items-center gap-2">
                  <div>
                    <strong className="text-[#242220]">Harvard Crimson Business Case (HCBC 2025):</strong> Top 30 Chung kết toàn cầu (Top 30/2000), đại diện Việt Nam duy nhất tại Harvard.
                  </div>
                  <span className="font-mono font-bold text-[#7B0323] shrink-0">Global Top 30</span>
                </div>
                <div className="p-2 flex justify-between items-center gap-2">
                  <div>
                    <strong className="text-[#242220]">World Economics Cup (WEC 2025):</strong> Huy chương Bạc Châu Á - Châu Đại Dương &amp; Top 10 Kiến thức Nền tảng toàn cầu.
                  </div>
                  <span className="font-mono font-bold text-[#1B3B2B] shrink-0">Silver Medal</span>
                </div>
                <div className="p-2 flex justify-between items-center gap-2">
                  <div>
                    <strong className="text-[#242220]">International Economics Olympiad (IEO):</strong> Vòng tuyển chọn Đội tuyển Quốc gia Top 5 (Hạng 3 Toàn quốc).
                  </div>
                  <span className="font-mono font-bold text-[#7B0323] shrink-0">National Rank 3</span>
                </div>
                <div className="p-2 flex justify-between items-center gap-2">
                  <div>
                    <strong className="text-[#242220]">Vietnam Economics Olympiad (VEO):</strong> Huy chương Đồng Quốc gia Lý thuyết Kinh tế học &amp; Phân tích tình huống.
                  </div>
                  <span className="font-mono font-bold text-[#242220]/60 shrink-0">Bronze Medal</span>
                </div>
                <div className="p-2 flex justify-between items-center gap-2">
                  <div>
                    <strong className="text-[#242220]">Vietnam Business Innovation Challenge (VBIC):</strong> Top 10 Chung kết Toàn quốc (Trưởng nhóm Chiến lược).
                  </div>
                  <span className="font-mono font-bold text-[#1B3B2B] shrink-0">Top 10 Final</span>
                </div>
                <div className="p-2 flex justify-between items-center gap-2">
                  <div>
                    <strong className="text-[#242220]">Cuộc thi Khát Vọng VN &amp; Học bổng ACCA Futurist:</strong> Top 4 Cá nhân (Bảng Thương mại) &amp; Top 50 Toàn quốc.
                  </div>
                  <span className="font-mono font-bold text-[#7B0323] shrink-0">Top 4 / Top 50</span>
                </div>
              </div>
            </div>

            {/* ── TAB 3 & 4: TRANH BIỆN & KỸ NĂNG ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="item-card p-2.5 rounded-lg bg-white border border-[#1B3B2B]/15 space-y-1">
                <span className="font-anton text-xs uppercase text-[#7B0323] block">5.3. Tranh Biện &amp; Nghệ Thuật</span>
                <ul className="text-[10px] text-[#242220]/80 space-y-0.5 list-disc pl-3.5">
                  <li><strong>DAS-DO Debate 2024:</strong> Quán quân Tranh biện toàn quốc.</li>
                  <li><strong>VSGMUN 2024:</strong> Best Position Paper (Hợp tác kinh tế đa phương).</li>
                  <li><strong>Lễ hội Thanh Âm Đất Việt:</strong> Nghệ sĩ độc tấu Đàn T&apos;rưng.</li>
                  <li><strong>Museo ning Angeles (Philippines):</strong> Triển lãm nghệ thuật thị giác.</li>
                </ul>
              </div>

              <div className="item-card p-2.5 rounded-lg bg-[#E2ECE5]/40 border border-[#1B3B2B]/15 space-y-1">
                <span className="font-anton text-xs uppercase text-[#1B3B2B] block">5.4. Kỹ Năng &amp; Hồ Sơ Năng Lực</span>
                <ul className="text-[10px] text-[#242220]/80 space-y-0.5 list-disc pl-3.5">
                  <li><strong>Dữ liệu:</strong> SPSS, ANOVA, Logistic Regression, Excel/Sheets, C++, Linux HPC, VESTA, DFT.</li>
                  <li><strong>Ngoại ngữ:</strong> Tiếng Việt (Bản ngữ), Tiếng Anh (IELTS 7.5), Tiếng Nhật (Cơ bản).</li>
                  <li><strong>Nghệ thuật &amp; Thể thao:</strong> Độc tấu đàn T&apos;rưng, Lý thuyết trò chơi, Trọng tài, Bơi lội, Cầu lông.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            6. PHẦN LIÊN HỆ & TẦM NHÌN TƯƠNG LAI (CONTACT & VISION)
            (ẢNH CHÂN DUNG TỶ LỆ 4/3 CHUẨN WEB)
            ══════════════════════════════════════════════════════════════ */}
        <section className="item-card border-t-2 border-[#1B3B2B]/20 pt-3 space-y-2.5">
          <div className="p-3.5 rounded-xl bg-white border border-[#1B3B2B]/15 flex flex-col sm:flex-row gap-3.5 items-center">
            <div className="w-28 sm:w-36 aspect-[4/3] relative rounded-lg overflow-hidden border border-[#1B3B2B]/15 shrink-0">
              <Image
                src={contactPortraitUrl}
                alt="Contact Portrait Quynh Chi"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex-1 space-y-1 text-center sm:text-left">
              <h3 className="font-anton text-base uppercase text-[#1B3B2B]">
                {lang === "vi" ? "Kiến Tạo Những Hệ Sinh Thái Minh Bạch" : "Building Transparent Ecosystems"}
              </h3>
              <p className="text-[10.5px] text-[#242220]/80 leading-relaxed text-justify">
                {lang === "vi"
                  ? "Tầm nhìn của tôi là ứng dụng Phân tích Kinh doanh và Hệ thống Thông tin vào chuỗi cung ứng nông nghiệp Tây Nguyên, xây dựng các kiến trúc số hóa giúp dữ liệu nông sản minh bạch, đảm bảo tài nguyên bản địa và người nông dân được định giá xứng đáng."
                  : "My vision is to build data architectures that make agricultural data transparent, accessible, and actionable, ensuring that local resources and the people who cultivate them are accurately valued."}
              </p>
              <div className="pt-1.5 flex flex-wrap items-center justify-between gap-2 border-t border-[#1B3B2B]/10 text-[10px] font-mono">
                <span className="text-[#242220]/60">Email: liliesmyllerz2k9@gmail.com • Đắk Lắk &amp; TP.HCM, VN</span>
                <span className="font-heading italic text-[#7B0323] text-sm font-semibold">Phan Hoàng Quỳnh Chi</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
