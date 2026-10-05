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
  Quote,
  BarChart2,
  CheckCircle2,
  Compass,
  FileText,
  Target,
  Users,
  Layers,
  Leaf,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useProjectImages } from "@/lib/project-images-context";

export default function PrintPortfolioPage() {
  const { lang, setLang, t } = useLanguage();
  const { getImage } = useProjectImages();

  // ─── DYNAMIC IMAGE RESOLUTION WITH ROBUST FALLBACKS ──────────
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
    "/images/quynhchi/1.heic" ||
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

  const competitorProfileUrl =
    getImage("competitor-profile") ||
    "/images/quynhchi/contact-portrait.jpg";

  const contactPortraitUrl =
    getImage("contact-portrait") ||
    "/images/quynhchi/contact-portrait.jpg";

  useEffect(() => {
    document.title =
      lang === "vi"
        ? "Phan Hoàng Quỳnh Chi - Toàn Bộ Portfolio Bản In (A4 PDF)"
        : "Phan Hoang Quynh Chi - Full Comprehensive Portfolio (A4 Print PDF)";
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#242220] font-sans antialiased">
      {/* ─── PRINT CSS RULES (OPTIMIZED FOR A4 HARDCOPY & PDF) ───── */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm 14mm;
          }
          html,
          body {
            background-color: #ffffff !important;
            color: #242220 !important;
            font-size: 10.5pt !important;
            line-height: 1.5 !important;
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
          img {
            max-width: 100% !important;
            page-break-inside: avoid !important;
          }
          a {
            text-decoration: none !important;
            color: inherit !important;
          }
        }
      `}</style>

      {/* ─── FLOATING CONTROL BAR (HIDDEN IN PRINT) ──────────────────── */}
      <div className="print-hidden sticky top-0 z-50 bg-[#1B3B2B] text-white shadow-xl border-b border-[#1B3B2B]/40 px-4 py-3">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === "vi" ? "Quay lại Website" : "Back to Website"}</span>
            </Link>
            <span className="text-xs text-white/80 font-medium">
              {lang === "vi"
                ? "Bản in tổng hợp toàn bộ từ Home đến Contact (Mở toàn bộ tab, nội dung & ảnh)"
                : "Full 1:1 exhaustive portfolio dossier (All pages, tabs & images unrolled)"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/20 text-xs">
              <button
                onClick={() => setLang("vi")}
                className={`px-3 py-1 rounded-full font-medium transition-colors ${
                  lang === "vi" ? "bg-[#7B0323] text-white font-bold" : "text-white/80 hover:text-white"
                }`}
              >
                Tiếng Việt
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full font-medium transition-colors ${
                  lang === "en" ? "bg-[#7B0323] text-white font-bold" : "text-white/80 hover:text-white"
                }`}
              >
                English
              </button>
            </div>

            {/* Print Trigger Button */}
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#7B0323] hover:bg-[#5E021A] text-white shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{lang === "vi" ? "In / Lưu PDF ngay (Ctrl + P)" : "Print / Save PDF (Ctrl + P)"}</span>
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-2 pt-2 border-t border-white/10 text-[11px] text-white/80">
          💡 <strong>Hướng dẫn in bản đẹp:</strong> Khổ giấy <strong>A4</strong>, Tùy chọn: Bật{" "}
          <strong>&quot;Background graphics&quot; (Đồ họa nền)</strong> và bỏ chọn{" "}
          <strong>&quot;Headers and footers&quot;</strong>.
        </div>
      </div>

      {/* ─── PRINTABLE DOSSIER CONTAINER ───────────────────────────── */}
      <main className="max-w-6xl mx-auto p-4 sm:p-8 lg:p-12 space-y-12 bg-white sm:bg-[#FAF7F2] sm:my-6 rounded-3xl sm:border sm:border-[#1B3B2B]/15 sm:shadow-sm">
        
        {/* ══════════════════════════════════════════════════════════════
            0. BÌA & THÔNG TIN ĐỊNH DANH (COVER & PROFILE)
            ══════════════════════════════════════════════════════════════ */}
        <section className="page-break-inside-avoid border-b-2 border-[#1B3B2B]/20 pb-8 pt-2">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div className="space-y-3 flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B3B2B]/10 text-[#1B3B2B] text-xs font-mono font-semibold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#7B0323]" />
                <span>
                  {lang === "vi"
                    ? "Hồ Sơ Năng Lực Toàn Diện • Khóa 2024 – 2027"
                    : "Comprehensive Portfolio Dossier • Class of 2024 – 2027"}
                </span>
              </div>

              <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#242220] leading-none">
                PHAN HOÀNG <span className="text-[#7B0323]">QUỲNH CHI</span>
              </h1>

              <p className="text-sm sm:text-base font-light tracking-wide text-[#7B0323] italic">
                {lang === "vi"
                  ? "Tò mò là bản năng. Chiến lược là tư duy. Sáng tạo là động lực."
                  : "Curious by nature. Strategic by thought. Driven to create."}
              </p>

              <div className="text-xs text-[#242220]/80 space-y-1 font-mono pt-1">
                <p className="font-semibold text-[#1B3B2B]">
                  {lang === "vi"
                    ? "Trường THPT Năng khiếu – ĐHQG-HCM • Chuyên Tiếng Anh"
                    : "VNUHCM - High School for The Gifted • English Specialization"}
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1 text-[11px]">
                  <span className="inline-flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#7B0323]" />
                    liliesmyllerz2k9@gmail.com
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#1B3B2B]" />
                    {lang === "vi" ? "Đắk Lắk & TP. Hồ Chí Minh, Việt Nam" : "Dak Lak & Ho Chi Minh City, Vietnam"}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-[#1B3B2B]" />
                    linkedin.com/in/phanhoangquynhchi
                  </span>
                </div>
              </div>
            </div>

            {/* Avatar Photo */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-[#1B3B2B]/20 relative shrink-0 shadow-md">
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
        </section>

        {/* ══════════════════════════════════════════════════════════════
            1. PHẦN TRANG CHỦ: TIÊU ĐIỂM & CAROUSEL TRẢI PHẲNG (HOME HERO)
            ══════════════════════════════════════════════════════════════ */}
        <section className="page-break-inside-avoid space-y-6">
          <div className="flex items-center gap-3 border-b border-[#1B3B2B]/15 pb-3">
            <div className="w-8 h-8 rounded-lg bg-[#1B3B2B] text-white flex items-center justify-center font-anton text-sm">
              01
            </div>
            <div>
              <h2 className="font-anton text-2xl uppercase tracking-tight text-[#1B3B2B]">
                {lang === "vi" ? "Trang Chủ: Tiêu Điểm Hoạt Động & Năng Lực Cốt Lõi" : "Home: Core Capabilities & Strategic Focus"}
              </h2>
              <p className="text-xs text-[#242220]/60 font-mono">
                {lang === "vi"
                  ? "Trải phẳng đầy đủ 3 chủ đề hoạt động trọng tâm"
                  : "Unrolled all 3 strategic hero initiatives"}
              </p>
            </div>
          </div>

          {/* SLIDE 0: CAFLOOP & HỆ THỐNG TUẦN HOÀN */}
          <div className="page-break-inside-avoid p-5 rounded-2xl bg-white border border-[#1B3B2B]/15 space-y-4 shadow-xs">
            <div className="flex flex-col md:flex-row gap-5 items-start">
              <div className="w-full md:w-5/12 h-52 relative rounded-xl overflow-hidden border border-[#1B3B2B]/15 shrink-0">
                <Image
                  src={cafloopUrl}
                  alt="CAFLOOP Cascara"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="w-full md:w-7/12 space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#7B0323]/10 text-[#7B0323] text-[11px] font-mono font-bold">
                  01 • {lang === "vi" ? "Đổi Mới Tuần Hoàn" : "Circular Innovation"}
                </div>
                <h3 className="font-anton text-xl uppercase text-[#242220]">
                  {lang === "vi" ? "Từ Vỏ Cà Phê Đến Tương Lai Tươi Sáng" : "From Coffee Husk to Bright Future"}
                </h3>
                <p className="text-xs text-[#242220]/80 leading-relaxed">
                  {lang === "vi"
                    ? "Sáng lập dự án kinh tế tuần hoàn chuyển hóa phế phụ phẩm vỏ cà phê tại Đắk Lắk thành trà Cascara thương mại, theo dõi chi phí COGS, tích hợp mã QR truy xuất chuỗi cung ứng và tái đầu tư lợi nhuận ban đầu vào đồ dùng học tập cho học sinh vùng khó khăn."
                    : "Founded a circular-economy venture transforming CO2-emitting coffee husks in Dak Lak into commercial Cascara tea, auditing unit economics (COGS), integrating packaging QR traceability, and reinvesting early margins into 77 bicycles and smart education equipment for rural students."}
                </p>
                <div className="flex gap-4 pt-1 text-[11px] font-mono text-[#7B0323]">
                  <span>• 1,6 triệu tấn phế phụ phẩm</span>
                  <span>• Tiềm năng thị trường $80M</span>
                </div>
              </div>
            </div>

            {/* 6 Core capabilities as founder */}
            <div className="pt-2 border-t border-[#1B3B2B]/10">
              <h4 className="font-anton text-xs uppercase tracking-wider text-[#7B0323] mb-2.5">
                {lang === "vi" ? "Vai Trò Của Tôi Với Tư Cách Founder (6 Năng Lực Cốt Lõi)" : "My Role as Founder (6 Core Capabilities)"}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-[11px]">
                <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <span className="font-bold text-[#7B0323] block">01. {lang === "vi" ? "PHÁT TRIỂN SẢN PHẨM" : "PRODUCT DEV"}</span>
                  <p className="text-[#242220]/75 mt-0.5">{lang === "vi" ? "Từ phụ phẩm vỏ cà phê thành trà Cascara và quà tặng sinh thái." : "From coffee by-products into Cascara tea."}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <span className="font-bold text-[#7B0323] block">02. {lang === "vi" ? "TÀI CHÍNH & PRICING" : "FINANCE & PRICING"}</span>
                  <p className="text-[#242220]/75 mt-0.5">{lang === "vi" ? "Theo dõi COGS, xây dựng ngân sách và định giá giai đoạn đầu." : "Tracking unit COGS and calibrating pricing."}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <span className="font-bold text-[#7B0323] block">03. {lang === "vi" ? "TRUY XUẤT NGUỒN GỐC" : "TRACEABILITY"}</span>
                  <p className="text-[#242220]/75 mt-0.5">{lang === "vi" ? "Tích hợp QR code vào bao bì minh bạch chuỗi cung ứng." : "Packaging QR codes for radical transparency."}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <span className="font-bold text-[#7B0323] block">04. {lang === "vi" ? "MÔ HÌNH KINH DOANH" : "BUSINESS MODEL"}</span>
                  <p className="text-[#242220]/75 mt-0.5">{lang === "vi" ? "Chuỗi khép kín: thu gom - chế biến - đóng gói - thị trường." : "Sourcing, processing, packaging, validation."}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <span className="font-bold text-[#7B0323] block">05. {lang === "vi" ? "TÁC ĐỘNG CỘNG ĐỒNG" : "COMMUNITY IMPACT"}</span>
                  <p className="text-[#242220]/75 mt-0.5">{lang === "vi" ? "Tái đầu tư lợi nhuận vào 77 xe đạp & 2 TV cho học sinh nghèo." : "Reinvesting profits into 77 bikes & 2 TVs."}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <span className="font-bold text-[#7B0323] block">06. {lang === "vi" ? "TƯ DUY HỆ THỐNG" : "SYSTEMS THINKING"}</span>
                  <p className="text-[#242220]/75 mt-0.5">{lang === "vi" ? "Kết nối nông nghiệp – sản phẩm – dữ liệu – xã hội." : "Interconnecting agriculture, data & society."}</p>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 1 & SLIDE 2: KINH TẾ LƯỢNG & ĐÀN T'RƯNG */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Slide 1 */}
            <div className="page-break-inside-avoid p-4 rounded-2xl bg-white border border-[#1B3B2B]/15 space-y-3">
              <div className="w-full h-44 relative rounded-xl overflow-hidden border border-[#1B3B2B]/15">
                <Image
                  src={mindResearchUrl}
                  alt="SPSS Econometrics"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#1B3B2B]/10 text-[#1B3B2B] text-[11px] font-mono font-bold">
                02 • {lang === "vi" ? "Nghiên Cứu Định Lượng" : "Quantitative Research"}
              </div>
              <h3 className="font-anton text-lg uppercase text-[#242220]">
                {lang === "vi" ? "Kinh Tế Lượng Dự Báo & Khảo Sát Đắk Lắk" : "Predictive Econometrics & Survey"}
              </h3>
              <p className="text-xs text-[#242220]/80 leading-relaxed">
                {lang === "vi"
                  ? "Khảo sát cắt ngang 200 học sinh THPT chứng minh xác suất chọn nghề xanh tăng 3,482 lần với mô hình hồi quy Logistic nhị phân SPSS đạt độ chính xác 83,5%."
                  : "Cross-sectional survey of 200 high school students proving a 3.482x odds increase in green career choices via SPSS binary logistic regression (83.5% accuracy)."}
              </p>
            </div>

            {/* Slide 2 */}
            <div className="page-break-inside-avoid p-4 rounded-2xl bg-white border border-[#1B3B2B]/15 space-y-3">
              <div className="w-full h-44 relative rounded-xl overflow-hidden border border-[#1B3B2B]/15">
                <Image
                  src={trungPreservationUrl}
                  alt="T'rưng Cultural Heritage"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#7B0323]/10 text-[#7B0323] text-[11px] font-mono font-bold">
                03 • {lang === "vi" ? "Bảo Tồn Đàn T'rưng" : "T'rưng Cultural Preservation"}
              </div>
              <h3 className="font-anton text-lg uppercase text-[#242220]">
                {lang === "vi" ? "Di Sản Truyền Khẩu & Biểu Diễn Đô Thị" : "Oral Heritage & Urban Showcases"}
              </h3>
              <p className="text-xs text-[#242220]/80 leading-relaxed">
                {lang === "vi"
                  ? "Hệ thống hóa di sản truyền khẩu Tây Nguyên thành giáo trình tương tác tại 12+ trường học, tiếp cận 2.300+ học sinh và số hóa kho lưu trữ biểu diễn 10.000+ views."
                  : "Synthesizing oral Central Highlands heritage into structured school curricula across 12+ schools for 2,300+ students, with 10,000+ views digital archive."}
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            2. PHẦN VỀ TÔI: NGUỒN CỘI, NARRATIVE & 5 KINH NGHIỆM (ABOUT)
            ══════════════════════════════════════════════════════════════ */}
        <section className="page-break-before space-y-6">
          <div className="flex items-center gap-3 border-b border-[#1B3B2B]/15 pb-3">
            <div className="w-8 h-8 rounded-lg bg-[#7B0323] text-white flex items-center justify-center font-anton text-sm">
              02
            </div>
            <div>
              <h2 className="font-anton text-2xl uppercase tracking-tight text-[#7B0323]">
                {lang === "vi" ? "Về Tôi: Nguồn Cội & Triết Lý Nền Tảng (About Me)" : "About Me: Origins & Core Philosophy"}
              </h2>
              <p className="text-xs text-[#242220]/60 font-mono">
                {lang === "vi" ? "Câu chuyện Tây Nguyên • Phương pháp nghiên cứu • 5 sáng kiến vận hành" : "Highland Story • Research Focus • 5 Operating Experiences"}
              </p>
            </div>
          </div>

          {/* Banner ảnh lớn */}
          <div className="page-break-inside-avoid w-full h-64 sm:h-80 relative rounded-2xl overflow-hidden border border-[#1B3B2B]/20 shadow-sm">
            <Image
              src={aboutBannerUrl}
              alt="About Banner Quynh Chi"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Story Narrative & Analyst Image */}
          <div className="page-break-inside-avoid grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 space-y-3 text-xs sm:text-sm text-[#242220]/80 leading-relaxed text-justify">
              <h3 className="font-anton text-xl uppercase tracking-tight text-[#242220]">
                {lang === "vi" ? "Tư Duy của Nhà Phân Tích. Trái Tim của Vùng Cao." : "The Mind of an Analyst. The Heart of the Highlands."}
              </h3>
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
              <p>
                {lang === "vi"
                  ? "Những thực tế nghiệt ngã đó dạy tôi một bài học quan trọng: đồng cảm chỉ là điểm khởi đầu. Để bảo vệ những gì tôi yêu thương, tôi cần công cụ thực nghiệm. Kinh tế học cho tôi tư duy hệ thống để thiết kế chuỗi giá trị bền vững, còn Khoa học Dữ liệu trang bị cho tôi bằng chứng cần thiết để biến các tài sản vô hình, từ một nốt nhạc đến một tín chỉ carbon, thành tác động đo lường được và công bằng."
                  : "These harsh realities taught me that empathy is merely a starting point. Economics gives me systems-thinking to design sustainable value chains, while Data Science equips me to transform invisible assets—from a musical note to a carbon credit—into measurable, equitable impact."}
              </p>
              <div className="p-3.5 rounded-xl bg-[#7B0323]/5 border-l-4 border-[#7B0323] text-[#7B0323] font-medium italic">
                {lang === "vi"
                  ? "“Tôi không chỉ tính toán những con số; tôi lập trình những giải pháp bảo vệ đất mẹ và nâng tầm tâm hồn Tây Nguyên.”"
                  : "“I don't just crunch numbers; I code solutions that protect the soil and elevate the soul of the Central Highlands.”"}
              </div>
            </div>

            <div className="md:col-span-4 space-y-4">
              <div className="w-full h-52 relative rounded-2xl overflow-hidden border border-[#1B3B2B]/20">
                <Image
                  src={aboutAnalystUrl}
                  alt="Analyst Quynh Chi"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#1B3B2B]/15 space-y-2">
                <span className="font-mono text-[10px] text-[#242220]/60 font-bold uppercase tracking-wider block">
                  {lang === "vi" ? "Phương Pháp & Trọng Tâm Nghiên Cứu" : "Methodologies & Research Focus"}
                </span>
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
                  ].map((p, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#1B3B2B]/15 text-[#242220]">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Toàn bộ 5 Kinh nghiệm & Sáng kiến (Experience & Initiatives) */}
          <div className="page-break-inside-avoid space-y-3 pt-2">
            <h3 className="font-anton text-sm uppercase tracking-wider text-[#1B3B2B]">
              {lang === "vi" ? "Kinh Nghiệm & Sáng Kiến Vận Hành (Experience & Initiatives)" : "Experience & Operating Initiatives"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
              <div className="p-4 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-1.5">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-[#242220]">
                    {lang === "vi" ? "Nhà Sáng Lập & Chiến Lược Gia Sản Phẩm" : "Founder & Product Strategist"}
                  </h4>
                  <span className="font-mono text-[10px] text-[#7B0323] font-bold">09/2024 – {lang === "vi" ? "Hiện tại" : "Present"}</span>
                </div>
                <p className="text-xs font-semibold text-[#7B0323]">CAFLOOP (Green Coffee Husk Project)</p>
                <ul className="text-[#242220]/80 space-y-1 pt-1 list-disc pl-4">
                  <li>{lang === "vi" ? "Khởi xướng dự án kinh tế tuần hoàn chuyển hóa vỏ cà phê thải CO2 thành trà Cascara." : "Initiated circular-economy venture transforming coffee husks into Cascara tea."}</li>
                  <li>{lang === "vi" ? "Theo dõi chi phí sản xuất (COGS), cấu trúc ngân sách và tối ưu hóa giá bán." : "Tracked production costs (COGS), structured budgets, and optimized pricing."}</li>
                  <li>{lang === "vi" ? "Tích hợp hệ thống mã QR trên bao bì đảm bảo minh bạch chuỗi cung ứng." : "Integrated QR-code traceability system on packaging for radical transparency."}</li>
                  <li>{lang === "vi" ? "Dành toàn bộ lợi nhuận trao tặng 77 xe đạp & 2 TV thông minh cho học sinh Buôn Đrăng Phốk." : "Directed profits to donate 77 bicycles and 2 smart TVs to Buon Drang Phok students."}</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-1.5">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-[#242220]">
                    {lang === "vi" ? "Thực Tập Sinh Phân Tích Kinh Doanh & Tài Chính" : "Student Intern, Business & Financial Analysis"}
                  </h4>
                  <span className="font-mono text-[10px] text-[#7B0323] font-bold">07/2025 – 08/2025</span>
                </div>
                <p className="text-xs font-semibold text-[#7B0323]">SI CAFE (Dak Lak Branch)</p>
                <ul className="text-[#242220]/80 space-y-1 pt-1 list-disc pl-4">
                  <li>{lang === "vi" ? "Quan sát quy trình vận hành chuỗi cung ứng và kiểm toán dữ liệu nhập kho." : "Shadowed operational supply-chain workflows and audited inventory data entry."}</li>
                  <li>{lang === "vi" ? "Vận dụng lý thuyết kinh tế học vào vận hành thực tế cơ sở chế biến nông sản." : "Grounded theoretical economics into daily agricultural facility operations."}</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-1.5">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-[#242220]">
                    {lang === "vi" ? "Chủ Nhiệm Học Thuật & Giảng Viên Kinh Tế" : "Academic Head & Economics Instructor"}
                  </h4>
                  <span className="font-mono text-[10px] text-[#7B0323] font-bold">2024 – {lang === "vi" ? "Hiện tại" : "Present"}</span>
                </div>
                <p className="text-xs font-semibold text-[#7B0323]">Shark Club & CLB Geniusstar</p>
                <ul className="text-[#242220]/80 space-y-1 pt-1 list-disc pl-4">
                  <li>{lang === "vi" ? "Biên soạn và giảng dạy giáo trình kinh tế học vi mô, tài chính và khởi nghiệp cho học sinh." : "Authored and taught microeconomics, financial literacy, and entrepreneurship curricula."}</li>
                  <li>{lang === "vi" ? "Hướng dẫn học sinh phân tích case study và thi đấu các giải kinh tế quốc tế." : "Mentored students through case analyses and business competitions."}</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-1.5">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-[#242220]">
                    {lang === "vi" ? "Nghiên Cứu Sinh Mùa Hè Vật Liệu Tính Toán" : "Computational Materials Science Researcher"}
                  </h4>
                  <span className="font-mono text-[10px] text-[#7B0323] font-bold">07/2025 – 08/2025</span>
                </div>
                <p className="text-xs font-semibold text-[#7B0323]">National Sun Yat-sen University (NSYSU, Taiwan)</p>
                <ul className="text-[#242220]/80 space-y-1 pt-1 list-disc pl-4">
                  <li>{lang === "vi" ? "Mô phỏng cấu trúc tinh thể với VESTA và tính toán DFT trên cụm máy tính Linux HPC." : "Modeled crystal structures via VESTA and computed DFT simulations on Linux HPC."}</li>
                  <li>{lang === "vi" ? "Rèn luyện phương pháp nghiên cứu định lượng độc lập và tư duy giải quyết vấn đề." : "Developed empirical discipline and rigorous computational research skills."}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3 Work Snapshots Gallery */}
          <div className="page-break-inside-avoid grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
            <div className="space-y-1.5">
              <div className="w-full h-36 relative rounded-xl overflow-hidden border border-[#1B3B2B]/15">
                <Image src={cafloopUrl} alt="Cascara QR" fill className="object-cover" unoptimized />
              </div>
              <span className="font-anton text-[11px] uppercase text-[#7B0323] block text-center">
                {lang === "vi" ? "Trà Cascara CAFLOOP & Mã QR" : "CAFLOOP Cascara Tea & QR"}
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="w-full h-36 relative rounded-xl overflow-hidden border border-[#1B3B2B]/15">
                <Image src={mindResearchUrl} alt="SPSS Regression" fill className="object-cover" unoptimized />
              </div>
              <span className="font-anton text-[11px] uppercase text-[#7B0323] block text-center">
                {lang === "vi" ? "Kinh Tế Lượng Định Lượng SPSS" : "SPSS Quantitative Econometrics"}
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="w-full h-36 relative rounded-xl overflow-hidden border border-[#1B3B2B]/15">
                <Image src={trungPreservationUrl} alt="T'rưng Project" fill className="object-cover" unoptimized />
              </div>
              <span className="font-anton text-[11px] uppercase text-[#7B0323] block text-center">
                {lang === "vi" ? "Giáo Dục Văn Hóa Đàn T'rưng" : "T'rưng Cultural Education"}
              </span>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            3. PHẦN TƯ DUY: CẢ 4 DỰ ÁN NGHIÊN CỨU & KHỞI NGHIỆP (THE MIND)
            ══════════════════════════════════════════════════════════════ */}
        <section className="page-break-before space-y-6">
          <div className="flex items-center gap-3 border-b border-[#1B3B2B]/15 pb-3">
            <div className="w-8 h-8 rounded-lg bg-[#1B3B2B] text-white flex items-center justify-center font-anton text-sm">
              03
            </div>
            <div>
              <h2 className="font-anton text-2xl uppercase tracking-tight text-[#1B3B2B]">
                {lang === "vi" ? "Tư Duy: Nghiên Cứu Định Lượng & Khởi Nghiệp (The Mind)" : "The Mind: Quantitative Research & Enterprise"}
              </h2>
              <p className="text-xs text-[#242220]/60 font-mono">
                {lang === "vi" ? "Trải phẳng đầy đủ 4 đề tài nghiên cứu & sáng kiến lớn" : "Unrolled all 4 independent research & enterprise projects"}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Project 1: Nghiên cứu Định lượng Độc lập */}
            <div className="page-break-inside-avoid p-5 rounded-2xl bg-white border border-[#1B3B2B]/15 space-y-4">
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-full sm:w-5/12 h-56 relative rounded-xl overflow-hidden border border-[#1B3B2B]/15 shrink-0">
                  <Image src={mindResearchUrl} alt="Mind Research" fill className="object-cover" unoptimized />
                </div>
                <div className="w-full sm:w-7/12 space-y-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#7B0323] px-2.5 py-0.5 rounded bg-[#7B0323]/10 inline-block">
                    {lang === "vi" ? "Nghiên Cứu Định Lượng Độc Lập" : "Independent Quantitative Research"}
                  </span>
                  <h3 className="font-anton text-xl uppercase text-[#242220]">
                    {lang === "vi" ? "Làm Sáng Tỏ Bất Bình Đẳng Qua Dữ Liệu" : "Revealing Disparities Through Data"}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#1B3B2B]/15">SPSS Statistics</span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#1B3B2B]/15">Binary Logistic Regression</span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#1B3B2B]/15">ANOVA</span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#1B3B2B]/15">Empirical Economics</span>
                  </div>
                </div>
              </div>

              {/* 3 Papers / Highlights */}
              <div className="space-y-3 pt-2 text-xs border-t border-[#1B3B2B]/10">
                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <h4 className="font-bold text-[#242220]">
                    {lang === "vi"
                      ? "1. Chênh Lệch Nhận Thức Trong Lựa Chọn Nghề Nghiệp Bền Vững (2024)"
                      : "1. Awareness Disparities in Sustainable Career Choices (2024)"}
                  </h4>
                  <p className="text-[#242220]/75 mt-1 leading-relaxed">
                    {lang === "vi"
                      ? "Khảo sát cắt ngang phân tầng 200 học sinh THPT tại Đắk Lắk. Ứng dụng ANOVA và Hồi quy Logistic Nhị phân trên SPSS, xây dựng mô hình dự báo đạt độ chính xác 83,5%, chứng minh rằng nhận thức bền vững tăng 1 đơn vị sẽ giúp tăng xác suất chọn nghề xanh lên 3,482 lần. Phát hiện khoảng trống tiếp cận thông tin nghề nghiệp nghiêm trọng của học sinh nông thôn."
                      : "Stratified cross-sectional survey of 200 high schoolers in Dak Lak. Built an 83.5% accuracy logistic regression model proving 1-unit increase in awareness boosts green career choice odds by 3.482x, exposing rural information gaps."}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <h4 className="font-bold text-[#242220]">
                    {lang === "vi"
                      ? "2. Hệ Thống Truy Xuất Nguồn Gốc Thực Phẩm Qua Mã QR (12/2025)"
                      : "2. QR Code-Based Food Traceability (Dec 2025)"}
                  </h4>
                  <p className="text-[#242220]/75 mt-1 leading-relaxed">
                    {lang === "vi"
                      ? "Đồng tác giả bài báo đăng trên Tạp chí Quốc tế về Trao quyền & Dịch vụ Cộng đồng Tennessee. Khảo sát 400+ người tiêu dùng tại Hà Nội và TP.HCM, ứng dụng mô hình kinh tế lượng chứng minh truy xuất số giúp giảm thiểu rủi ro cảm nhận của người tiêu dùng."
                      : "Co-authored paper published in Tennessee Community Service International Journal. Surveyed 400+ consumers in Hanoi & HCMC, utilizing econometric models to prove digital traceability reduces perceived risk."}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <h4 className="font-bold text-[#242220]">
                    {lang === "vi"
                      ? "3. Tín Chỉ Tuần Hoàn Cho Nông Dân – C4F (01/2026)"
                      : "3. Circular Credits for Farmers – C4F (Jan 2026)"}
                  </h4>
                  <p className="text-[#242220]/75 mt-1 leading-relaxed">
                    {lang === "vi"
                      ? "Đạt Giải Bài Viết Xuất Sắc Toàn Cầu từ Tạp chí Quốc tế Harvard (Harvard International Review). Đề xuất giải pháp blockchain phi tập trung trả lại giá trị thị trường carbon cho người nông dân xử lý 1,6 triệu tấn phế phụ phẩm tại Tây Nguyên."
                      : "Awarded Global Outstanding Writing Content Prize by Harvard International Review. Proposed decentralized blockchain model to return carbon market rewards to farmers managing 1.6M tons of waste in Dak Lak."}
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2: CAFLOOP & Vận hành */}
            <div className="page-break-inside-avoid p-5 rounded-2xl bg-white border border-[#1B3B2B]/15 space-y-4">
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-full sm:w-5/12 h-56 relative rounded-xl overflow-hidden border border-[#1B3B2B]/15 shrink-0">
                  <Image src={cafloopUrl} alt="CAFLOOP Project" fill className="object-cover" unoptimized />
                </div>
                <div className="w-full sm:w-7/12 space-y-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#1B3B2B] px-2.5 py-0.5 rounded bg-[#1B3B2B]/10 inline-block">
                    {lang === "vi" ? "Khởi Nghiệp Tuần Hoàn & Vận Hành" : "Circular Enterprise & Operations"}
                  </span>
                  <h3 className="font-anton text-xl uppercase text-[#242220]">
                    {lang === "vi" ? "CAFLOOP: Đổi Mới Chuỗi Giá Trị Vỏ Cà Phê" : "CAFLOOP: Coffee Husk Value Chain"}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#1B3B2B]/15">Unit Economics (COGS)</span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#1B3B2B]/15">Supply Chain Logistics</span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#1B3B2B]/15">Packaging QR</span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#1B3B2B]/15">Harvard HCBC Finalist</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs border-t border-[#1B3B2B]/10">
                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <h4 className="font-bold text-[#242220]">{lang === "vi" ? "1. Tái chế vỏ cà phê & Tối ưu giá vốn (COGS)" : "1. Upcycling Coffee Husks & COGS Optimization"}</h4>
                  <p className="text-[#242220]/75 mt-1 leading-relaxed">{lang === "vi" ? "Thu gom phế phụ phẩm vỏ cà phê, xử lý sấy lạnh đạt chuẩn làm trà Cascara, tối ưu định mức giá thành và dán mã QR minh bạch." : "Organized husk collection, low-temp drying for Cascara tea, calibrated unit costs, and affixed QR codes."}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <h4 className="font-bold text-[#242220]">{lang === "vi" ? "2. Thực tập sinh phân tích vận hành tại SI CAFE" : "2. Supply Chain Internship at SI CAFE"}</h4>
                  <p className="text-[#242220]/75 mt-1 leading-relaxed">{lang === "vi" ? "Kiểm toán đối soát dữ liệu xuất nhập tồn kho, hiểu sâu sắc về rào cản tài chính và logistics của nông hộ nhỏ." : "Audited inventory logs, evaluated warehouse flow bottlenecks, gaining insight into smallholder farmer economics."}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#1B3B2B]/10">
                  <h4 className="font-bold text-[#242220]">{lang === "vi" ? "3. Chung kết Toàn cầu Harvard Crimson Case (HCBC 2025)" : "3. Global Finalist at Harvard Crimson Business Case"}</h4>
                  <p className="text-[#242220]/75 mt-1 leading-relaxed">{lang === "vi" ? "Dẫn dắt đề tài mô hình kinh doanh tuần hoàn lọt vào Top 30/2000 đội thi toàn cầu và là đại diện Việt Nam duy nhất tại Harvard." : "Advanced to Top 30 worldwide out of 2,000 teams, sole representative team from Vietnam."}</p>
                </div>
              </div>
            </div>

            {/* Project 3 & 4: NSYSU & Shark Club */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Project 3: NSYSU */}
              <div className="page-break-inside-avoid p-4 rounded-2xl bg-white border border-[#1B3B2B]/15 space-y-3">
                <div className="w-full h-44 relative rounded-xl overflow-hidden border border-[#1B3B2B]/15">
                  <Image src={mindLabUrl} alt="NSYSU Lab" fill className="object-cover" unoptimized />
                </div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#1B3B2B] px-2.5 py-0.5 rounded bg-[#1B3B2B]/10 inline-block">
                  {lang === "vi" ? "Vật Liệu Tính Toán" : "Computational Materials"}
                </span>
                <h3 className="font-anton text-base uppercase text-[#242220]">
                  {lang === "vi" ? "Phòng Thí Nghiệm ĐH Tôn Dật Tiên (NSYSU, Đài Loan)" : "NSYSU Taiwan Materials Laboratory"}
                </h3>
                <p className="text-xs text-[#242220]/80 leading-relaxed">
                  {lang === "vi"
                    ? "Mô phỏng cấu trúc tinh thể trên phần mềm VESTA và chạy tính toán lý thuyết phiếm hàm mật độ (DFT) trên siêu máy tính Linux HPC, rèn luyện tính chặt chẽ trong phương pháp nghiên cứu thực nghiệm."
                    : "Simulated crystal lattices with VESTA and computed DFT simulations on Linux High-Performance Computing clusters."}
                </p>
              </div>

              {/* Project 4: Sư phạm kinh tế */}
              <div className="page-break-inside-avoid p-4 rounded-2xl bg-white border border-[#1B3B2B]/15 space-y-3">
                <div className="w-full h-44 relative rounded-xl overflow-hidden border border-[#1B3B2B]/15">
                  <Image src={mindPedagogyUrl} alt="Pedagogy Shark Club" fill className="object-cover" unoptimized />
                </div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#7B0323] px-2.5 py-0.5 rounded bg-[#7B0323]/10 inline-block">
                  {lang === "vi" ? "Sư Phạm & Lan Tỏa Tri Thức" : "Economic Pedagogy & Mentorship"}
                </span>
                <h3 className="font-anton text-base uppercase text-[#242220]">
                  {lang === "vi" ? "Shark Club & CLB Geniusstar" : "Shark Club & Geniusstar"}
                </h3>
                <p className="text-xs text-[#242220]/80 leading-relaxed">
                  {lang === "vi"
                    ? "Biên soạn giáo trình kinh tế học và tài chính vi mô, huấn luyện kỹ năng phân tích tình huống kinh doanh và cố vấn học sinh chuẩn bị cho các kỳ thi học thuật quốc tế."
                    : "Authored microeconomics curricula, mentored high school students through business case studies and international academic challenges."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            4. PHẦN TRÁI TIM: CẢ 5 DỰ ÁN VĂN HÓA & XÃ HỘI (THE HEART)
            ══════════════════════════════════════════════════════════════ */}
        <section className="page-break-before space-y-6">
          <div className="flex items-center gap-3 border-b border-[#1B3B2B]/15 pb-3">
            <div className="w-8 h-8 rounded-lg bg-[#7B0323] text-white flex items-center justify-center font-anton text-sm">
              04
            </div>
            <div>
              <h2 className="font-anton text-2xl uppercase tracking-tight text-[#7B0323]">
                {lang === "vi" ? "Trái Tim: Bảo Tồn Văn Hóa & Tác Động Xã Hội (The Heart)" : "The Heart: Cultural Preservation & Social Impact"}
              </h2>
              <p className="text-xs text-[#242220]/60 font-mono">
                {lang === "vi" ? "Trải phẳng toàn bộ 5 dự án văn hóa, biểu diễn nghệ thuật & cứu trợ giáo dục" : "Unrolled all 5 cultural advocacy, artistic & educational relief initiatives"}
              </p>
            </div>
          </div>

          {/* Featured Showcase Banner: Âm vang Tây Nguyên */}
          <div className="page-break-inside-avoid p-5 rounded-2xl bg-[#1B3B2B] text-white space-y-4">
            <div className="flex flex-col md:flex-row gap-5 items-center">
              <div className="w-full md:w-5/12 h-52 relative rounded-xl overflow-hidden border border-white/20 shrink-0">
                <Image src={trungPreservationUrl} alt="T'rung Soloist" fill className="object-cover" unoptimized />
              </div>
              <div className="w-full md:w-7/12 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 text-[#E2ECE5] text-[11px] font-mono">
                  {lang === "vi" ? "Nghệ sĩ Độc tấu Đàn T'rưng Bản địa" : "Featured Traditional T'rưng Soloist"}
                </div>
                <h3 className="font-anton text-2xl uppercase tracking-tight text-white">
                  {lang === "vi" ? "Âm Vang Đại Ngàn Tây Nguyên" : "Echoes of the Central Highlands"}
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  {lang === "vi"
                    ? "Từ chối để âm nhạc bản địa trở thành hiện vật bảo tàng, tôi đã hệ thống hóa di sản truyền khẩu thành chương trình giảng dạy tương tác tại 12+ trường học cho hơn 2.300 học sinh, độc tấu tại TP.HCM kết nối văn hóa vùng cao với khán giả đô thị."
                    : "Refusing to let indigenous music become a museum relic, I synthesized oral traditions into interactive curricula across 12+ schools for 2,300+ students, performing as featured soloist in Ho Chi Minh City to bridge highland culture with metropolitan audiences."}
                </p>
                <div className="flex gap-4 pt-1 text-[11px] font-mono text-[#E2ECE5]">
                  <span>• Kho lưu trữ số: 10.000+ views</span>
                  <span>• 5.000+ người theo dõi cộng đồng</span>
                </div>
              </div>
            </div>
          </div>

          {/* Toàn bộ 5 dự án trải phẳng */}
          <div className="space-y-4">
            {/* Project 1 */}
            <div className="page-break-inside-avoid p-4 rounded-2xl bg-white border border-[#1B3B2B]/15 flex flex-col sm:flex-row gap-4 items-start">
              <div className="w-full sm:w-44 h-36 relative rounded-xl overflow-hidden border border-[#1B3B2B]/15 shrink-0">
                <Image src={trungPreservationUrl} alt="T'rưng Project" fill className="object-cover" unoptimized />
              </div>
              <div className="flex-1 space-y-1.5">
                <span className="text-[10px] font-mono uppercase font-bold text-[#7B0323]">
                  {lang === "vi" ? "Bảo Tồn Văn Hóa • 2.300+ Học Sinh • 12+ Trường Học" : "Cultural Preservation • 2,300+ Students • 12+ Schools"}
                </span>
                <h3 className="font-anton text-lg uppercase text-[#242220]">
                  {lang === "vi" ? "Dự Án Giáo Dục Văn Hóa Đàn T'rưng" : "T'rưng Cultural Education Project"}
                </h3>
                <p className="text-xs text-[#242220]/75 leading-relaxed">
                  {lang === "vi"
                    ? "Biên soạn giáo trình di sản truyền khẩu Tây Nguyên thành chuỗi workshop trực quan tại 12+ trường học, tiếp cận ~2.300 học sinh. Điều hành trang truyền thông văn hóa (5.000+ followers) và số hóa kho lưu trữ biểu diễn qua YouTube (10.000+ lượt xem)."
                    : "Synthesized indigenous oral heritage into structured curriculum across 12+ schools engaging ~2,300 students. Managed media page (5,000+ followers) and digitized YouTube archive (10,000+ views)."}
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="page-break-inside-avoid p-4 rounded-2xl bg-white border border-[#1B3B2B]/15 flex flex-col sm:flex-row gap-4 items-start">
              <div className="w-full sm:w-44 h-36 relative rounded-xl overflow-hidden border border-[#1B3B2B]/15 shrink-0">
                <Image src={artistVoiceUrl} alt="Artist Voice" fill className="object-cover" unoptimized />
              </div>
              <div className="flex-1 space-y-1.5">
                <span className="text-[10px] font-mono uppercase font-bold text-[#1B3B2B]">
                  {lang === "vi" ? "Đại Sứ Văn Hóa & Nghệ Thuật Biểu Diễn" : "Cultural Ambassadorship & Artistic Expression"}
                </span>
                <h3 className="font-anton text-lg uppercase text-[#242220]">
                  {lang === "vi" ? "Tiếng Nói Nghệ Sĩ: Kết Nối Khoảng Cách Qua Nghệ Thuật" : "The Artist's Voice: Bridging Gaps Through Arts"}
                </h3>
                <p className="text-xs text-[#242220]/75 leading-relaxed">
                  {lang === "vi"
                    ? "Độc tấu đàn T'rưng truyền thống tại Lễ hội 'Thanh Âm Đất Việt' (TP.HCM), đưa văn hóa vùng cao đến với khán giả hiện đại. Triển lãm nghệ thuật thị giác tại Bảo tàng Museo ning Angeles, Philippines."
                    : "Traditional T'rưng Soloist at 'Thanh Am Dat Viet' (HCMC), bringing highland sounds to metropolitan stages. Exhibited visual art at Museo ning Angeles, Philippines."}
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="page-break-inside-avoid p-4 rounded-2xl bg-white border border-[#1B3B2B]/15 flex flex-col sm:flex-row gap-4 items-start">
              <div className="w-full sm:w-44 h-36 relative rounded-xl overflow-hidden border border-[#1B3B2B]/15 shrink-0">
                <Image src={eaWerUrl} alt="Ea Wer Relief" fill className="object-cover" unoptimized />
              </div>
              <div className="flex-1 space-y-1.5">
                <span className="text-[10px] font-mono uppercase font-bold text-[#7B0323]">
                  {lang === "vi" ? "Cứu Trợ Giáo Dục • 77 Xe Đạp • 2 Smart TV" : "Educational Relief • 77 Bicycles • 2 Smart TVs"}
                </span>
                <h3 className="font-anton text-lg uppercase text-[#242220]">
                  {lang === "vi" ? "Trao Tặng Học Đường Trường Ea Wer (Buôn Đrăng Phốk)" : "Ea Wer Primary School Educational Relief"}
                </h3>
                <p className="text-xs text-[#242220]/75 leading-relaxed">
                  {lang === "vi"
                    ? "Dùng toàn bộ lợi nhuận từ CAFLOOP trao tặng 77 xe đạp và 2 TV thông minh cho học sinh nghèo vượt khó tại Buôn Đôn, rút ngắn con đường đến trường và mở rộng cơ hội tiếp cận tri thức số cho trẻ em vùng sâu."
                    : "Directed CAFLOOP proceeds to donate 77 bicycles and 2 smart TVs to primary students at Buon Drang Phok, bridging rural educational access."}
                </p>
              </div>
            </div>

            {/* Project 4 & 5 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="page-break-inside-avoid p-4 rounded-2xl bg-white border border-[#1B3B2B]/15 space-y-2">
                <div className="w-full h-36 relative rounded-xl overflow-hidden border border-[#1B3B2B]/15">
                  <Image src={wildlifeUrl} alt="Wildlife" fill className="object-cover" unoptimized />
                </div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#1B3B2B] block">
                  {lang === "vi" ? "Môi Trường & Kết Nối Nông Thôn" : "Ecological Voice & Rural Bridge"}
                </span>
                <h3 className="font-anton text-base uppercase text-[#242220]">
                  {lang === "vi" ? "Tiếng Nói Hoang Dã & Cầu Hoa Sen" : "Whisper of the Wild & Hoa Sen Bridge"}
                </h3>
                <p className="text-xs text-[#242220]/75 leading-relaxed">
                  {lang === "vi"
                    ? "Sáng kiến nâng cao nhận thức bảo tồn sinh thái động vật hoang dã Tây Nguyên và dự án cầu Hoa Sen kết nối giao thông an toàn cho học sinh qua suối mùa lũ."
                    : "Grassroots ecological awareness campaign and bridge initiative improving safety for rural school commutes during rainy seasons."}
                </p>
              </div>

              <div className="page-break-inside-avoid p-4 rounded-2xl bg-white border border-[#1B3B2B]/15 space-y-2">
                <div className="w-full h-36 relative rounded-xl overflow-hidden border border-[#1B3B2B]/15">
                  <Image src={adjudicatorUrl} alt="Adjudicator" fill className="object-cover" unoptimized />
                </div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#7B0323] block">
                  {lang === "vi" ? "Trọng Tài Tranh Biện THPT" : "Debate Adjudication"}
                </span>
                <h3 className="font-anton text-base uppercase text-[#242220]">
                  {lang === "vi" ? "Trọng Tài Chuyên Môn & Đạo Đức Tranh Luận" : "The Logical Adjudicator"}
                </h3>
                <p className="text-xs text-[#242220]/75 leading-relaxed">
                  {lang === "vi"
                    ? "Đảm nhiệm vai trò giám khảo tại các giải đấu tranh biện THPT, bồi dưỡng tư duy phản biện, kỹ năng thẩm định luận cứ và đạo đức học thuật cho thế hệ học sinh kế cận."
                    : "Adjudicated competitive debate tournaments, mentoring students on analytical reasoning, active listening, and evidence verification."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            5. PHẦN THÀNH TÍCH: TRẢI PHẲNG TOÀN BỘ 4 TABS (THE COMPETITOR)
            ══════════════════════════════════════════════════════════════ */}
        <section className="page-break-before space-y-6">
          <div className="flex items-center gap-3 border-b border-[#1B3B2B]/15 pb-3">
            <div className="w-8 h-8 rounded-lg bg-[#1B3B2B] text-white flex items-center justify-center font-anton text-sm">
              05
            </div>
            <div>
              <h2 className="font-anton text-2xl uppercase tracking-tight text-[#1B3B2B]">
                {lang === "vi" ? "Thành Tích: Học Thuật, Olympic & Kỹ Năng (The Competitor)" : "The Competitor: Global Accolades & Technical Profile"}
              </h2>
              <p className="text-xs text-[#242220]/60 font-mono">
                {lang === "vi" ? "Trải phẳng đầy đủ toàn bộ 4 tabs: Học thuật, Olympic, Tranh biện & Kỹ năng" : "Unrolled all 4 categories: Academics, Olympiads, Debate & Skills"}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* ── TAB 1 TRẢI PHẲNG: HỒ SƠ HỌC THUẬT & KIỂM TRA CHUẨN HÓA ── */}
            <div className="page-break-inside-avoid space-y-3">
              <h3 className="font-anton text-base uppercase tracking-wider text-[#7B0323] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#7B0323]" />
                <span>{lang === "vi" ? "5.1. Hồ Sơ Học Thuật & Điểm Thi Chuẩn Hóa (Tab 1)" : "5.1. Academic Profile & Testing (Tab 1)"}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                {/* Gifted High School */}
                <div className="p-4 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-1.5">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-[#242220]">
                      {lang === "vi" ? "Trường THPT Năng khiếu – ĐHQG-HCM" : "VNUHCM - High School for The Gifted"}
                    </h4>
                    <span className="font-mono text-[#7B0323] font-bold">2024 – 2027</span>
                  </div>
                  <p className="text-xs font-semibold text-[#7B0323]">
                    {lang === "vi" ? "Chuyên Anh • GPA: 9.6 / 10.0 • Top 6% Học sinh giỏi khối" : "English Specialization • GPA: 9.6 / 10.0 • Top 6% Student of Grade"}
                  </p>
                  <p className="text-[#242220]/75 leading-relaxed">
                    {lang === "vi"
                      ? "Là 1 trong 2 học sinh duy nhất của tỉnh Đắk Lắk trúng tuyển vào ngôi trường chuyên giàu truyền thống hàng đầu Việt Nam."
                      : "Selected as 1 of only 2 admitted students from Dak Lak Province to one of Vietnam's most selective institutions."}
                  </p>
                </div>

                {/* Phan Chu Trinh Secondary */}
                <div className="p-4 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-1.5">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-[#242220]">
                      {lang === "vi" ? "Trường THCS Phan Chu Trinh" : "Phan Chu Trinh Secondary School"}
                    </h4>
                    <span className="font-mono text-[#7B0323] font-bold">2020 – 2024</span>
                  </div>
                  <p className="text-xs font-semibold text-[#7B0323]">
                    {lang === "vi" ? "GPA: 8.8 / 10.0 • Giải Ba HSG Tiếng Anh cấp Tỉnh (2023)" : "GPA: 8.8 / 10.0 • Provincial Third Prize in English (2023)"}
                  </p>
                  <p className="text-[#242220]/75 leading-relaxed">
                    {lang === "vi"
                      ? "Thành tích học thuật xuất sắc và đạt nhiều giải thưởng học sinh giỏi các môn khoa học xã hội."
                      : "Consistent academic leadership and provincial distinctions in humanities and language."}
                  </p>
                </div>

                {/* Standardized Testing */}
                <div className="p-4 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-1.5">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-[#242220]">
                      {lang === "vi" ? "Điểm Thi Chuẩn Hóa (SAT & IELTS)" : "Standardized Metrics (SAT & IELTS)"}
                    </h4>
                    <span className="font-mono text-[#1B3B2B] font-bold">Verified</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 my-1.5">
                    <div className="p-2 rounded-lg bg-[#FAF7F2] text-center border border-[#1B3B2B]/10">
                      <span className="font-mono text-[10px] text-[#242220]/60 block">SAT Composite</span>
                      <span className="font-anton text-lg text-[#7B0323]">1510</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#FAF7F2] text-center border border-[#1B3B2B]/10">
                      <span className="font-mono text-[10px] text-[#242220]/60 block">IELTS Academic</span>
                      <span className="font-anton text-lg text-[#1B3B2B]">7.5 Overall</span>
                    </div>
                  </div>
                  <p className="text-[#242220]/75 leading-relaxed">
                    {lang === "vi" ? "Năng lực tư duy định lượng nâng cao và khả năng thành thạo tiếng Anh học thuật quốc tế." : "Demonstrated advanced quantitative reasoning and English proficiency."}
                  </p>
                </div>

                {/* Advanced Placement */}
                <div className="p-4 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-1.5">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-[#242220]">
                      {lang === "vi" ? "Kỳ Thi Xếp Lớp Nâng Cao (AP Exams)" : "Advanced Placement (AP Exams)"}
                    </h4>
                    <span className="font-mono text-[#7B0323] font-bold">4x Perfect 5</span>
                  </div>
                  <p className="text-xs font-semibold text-[#7B0323]">
                    {lang === "vi" ? "4 Điểm 5 Tuyệt Đối Thuộc Các Lĩnh Vực Định Lượng & Kinh Tế" : "Four Perfect Scores of 5 across Quantitative & Economic Fields"}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#1B3B2B]/15">AP Calculus AB: 5</span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#1B3B2B]/15">AP Statistics: 5</span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#1B3B2B]/15">AP Microeconomics: 5</span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#1B3B2B]/15">AP Macroeconomics: 5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── TAB 2 TRẢI PHẲNG: OLYMPIC KINH TẾ & KINH DOANH ── */}
            <div className="page-break-inside-avoid space-y-3">
              <h3 className="font-anton text-base uppercase tracking-wider text-[#7B0323] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#7B0323]" />
                <span>{lang === "vi" ? "5.2. Các Kỳ Thi Olympic Kinh Tế & Kinh Doanh Quốc Tế (Tab 2)" : "5.2. Economics & Business Olympiads (Tab 2)"}</span>
              </h3>
              <div className="divide-y divide-[#1B3B2B]/10 border border-[#1B3B2B]/15 rounded-xl bg-white overflow-hidden text-xs">
                <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#242220]">Harvard Crimson Business Case Competition (HCBC 2025)</span>
                    <p className="text-[#242220]/70">
                      {lang === "vi"
                        ? "Top 30 Chung kết Toàn cầu (Top 30/2000 đội thi). Đội đại diện Việt Nam duy nhất được mời đến khuôn viên Đại học Harvard."
                        : "Global Finalist (Top 30/2000). Sole Vietnamese representative team invited to Harvard campus."}
                    </p>
                  </div>
                  <span className="font-mono font-bold text-[#7B0323] shrink-0">Global Top 30</span>
                </div>

                <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#242220]">World Economics Cup (WEC 2025)</span>
                    <p className="text-[#242220]/70">
                      {lang === "vi"
                        ? "Huy chương Bạc (Phân khu Châu Á - Châu Đại Dương) & Top 10 Điểm Kiến thức Nền tảng Toàn cầu."
                        : "Silver Award (Asia & Oceania Division) & Top 10 Fundamentals Worldwide."}
                    </p>
                  </div>
                  <span className="font-mono font-bold text-[#1B3B2B] shrink-0">Silver Medal</span>
                </div>

                <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
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

                <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#242220]">Vietnam Economics Olympiad (VEO 2025 & 2026)</span>
                    <p className="text-[#242220]/70">
                      {lang === "vi"
                        ? "Huy chương Đồng Quốc gia môn Lý thuyết Kinh tế học & Phân tích Tình huống."
                        : "National Bronze Medalist in competitive economic theory and case analysis."}
                    </p>
                  </div>
                  <span className="font-mono font-bold text-[#242220]/60 shrink-0">Bronze Medal</span>
                </div>

                <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#242220]">Vietnam Business Innovation Challenge (VBIC 2025)</span>
                    <p className="text-[#242220]/70">
                      {lang === "vi"
                        ? "Top 10 Chung kết Toàn quốc với vai trò Trưởng nhóm Chiến lược, Marketing & Tài chính."
                        : "Top 10 Grand Final as Team Lead for strategy, marketing, and finance."}
                    </p>
                  </div>
                  <span className="font-mono font-bold text-[#1B3B2B] shrink-0">Top 10 Final</span>
                </div>

                <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
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
            <div className="page-break-inside-avoid space-y-3">
              <h3 className="font-anton text-base uppercase tracking-wider text-[#7B0323] flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#7B0323]" />
                <span>{lang === "vi" ? "5.3. Tranh Biện, Mô Phỏng LHQ (MUN) & Nghệ Thuật (Tab 3)" : "5.3. Debate, MUN & Performing Arts (Tab 3)"}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div className="p-4 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-1">
                  <span className="font-mono font-bold text-[#7B0323] text-[10px] block">CHAMPION</span>
                  <h4 className="font-bold text-[#242220]">DAS-DO Debate Tournament 2024</h4>
                  <p className="text-[#242220]/75 leading-relaxed">
                    {lang === "vi"
                      ? "Đoạt ngôi Quán quân tranh biện, thể hiện tư duy phản biện sắc bén và khả năng cấu trúc lập luận chính sách công vững chắc."
                      : "Grand Champion. Demonstrated analytical rebuttal and structural public-policy argumentation."}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-1">
                  <span className="font-mono font-bold text-[#1B3B2B] text-[10px] block">BEST POSITION PAPER</span>
                  <h4 className="font-bold text-[#242220]">VSGMUN Conference 2024</h4>
                  <p className="text-[#242220]/75 leading-relaxed">
                    {lang === "vi"
                      ? "Giải thưởng Bài lập trường xuất sắc nhất tại Hội nghị Mô phỏng Liên Hợp Quốc về hợp tác kinh tế đa phương."
                      : "Awarded Best Position Paper at Vietnam Secondary Government Model UN on multilateral economic cooperation."}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-1">
                  <span className="font-mono font-bold text-[#7B0323] text-[10px] block">SOLOIST</span>
                  <h4 className="font-bold text-[#242220]">Thanh Âm Đất Việt 2024</h4>
                  <p className="text-[#242220]/75 leading-relaxed">
                    {lang === "vi"
                      ? "Nghệ sĩ độc tấu đàn T'rưng tại Lễ hội âm nhạc truyền thống TP.HCM, kết nối văn hóa Tây Nguyên với thanh niên đô thị."
                      : "Lead Traditional T'rưng Soloist at Ho Chi Minh City cultural concert showcase."}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#1B3B2B]/15 space-y-1">
                  <span className="font-mono font-bold text-[#1B3B2B] text-[10px] block">INTERNATIONAL EXHIBITOR</span>
                  <h4 className="font-bold text-[#242220]">Museo ning Angeles (Philippines)</h4>
                  <p className="text-[#242220]/75 leading-relaxed">
                    {lang === "vi"
                      ? "Nhà triển lãm nghệ thuật thị giác quốc tế giới thiệu vẻ đẹp và bản sắc văn hóa Việt Nam."
                      : "Visual arts exhibitor promoting indigenous Vietnamese identity and craft."}
                  </p>
                </div>
              </div>
            </div>

            {/* ── TAB 4 TRẢI PHẲNG: KỸ NĂNG CHUYÊN MÔN & HỒ SƠ NĂNG LỰC ── */}
            <div className="page-break-inside-avoid p-5 rounded-2xl bg-[#E2ECE5]/40 border border-[#1B3B2B]/15 space-y-3">
              <h3 className="font-anton text-base uppercase text-[#1B3B2B] tracking-wider">
                {lang === "vi" ? "5.4. Kỹ Năng Chuyên Môn, Công Nghệ & Năng Khiếu Nghệ Thuật (Tab 4)" : "5.4. Technical Skills, Languages & Arts (Tab 4)"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="font-bold text-[#242220] block mb-1">
                    {lang === "vi" ? "Kinh Tế Lượng & Khoa Học Dữ Liệu:" : "Econometrics & Data Science:"}
                  </span>
                  <p className="text-[#242220]/75 leading-relaxed">
                    SPSS, ANOVA, Binary Logistic Regression, MS Excel/Google Sheets nâng cao, C++, Linux HPC, VESTA, Mô phỏng DFT.
                  </p>
                </div>
                <div>
                  <span className="font-bold text-[#242220] block mb-1">
                    {lang === "vi" ? "Năng Lực Ngoại Ngữ:" : "Languages:"}
                  </span>
                  <p className="text-[#242220]/75 leading-relaxed">
                    Tiếng Việt (Bản ngữ), Tiếng Anh (Thành thạo - IELTS 7.5 Academic, Chuyên Anh Năng Khiếu), Tiếng Nhật (Cơ bản).
                  </p>
                </div>
                <div>
                  <span className="font-bold text-[#242220] block mb-1">
                    {lang === "vi" ? "Nghệ Thuật & Đời Sống:" : "Arts & Life:"}
                  </span>
                  <p className="text-[#242220]/75 leading-relaxed">
                    Độc tấu Đàn T&apos;rưng tre nứa, Lý thuyết trò chơi (Game Theory / Cân bằng Nash), Trọng tài tranh biện, Bơi lội, Cầu lông.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            6. PHẦN LIÊN HỆ & TẦM NHÌN TƯƠNG LAI (CONTACT & VISION)
            ══════════════════════════════════════════════════════════════ */}
        <section className="page-break-before space-y-6">
          <div className="flex items-center gap-3 border-b border-[#1B3B2B]/15 pb-3">
            <div className="w-8 h-8 rounded-lg bg-[#7B0323] text-white flex items-center justify-center font-anton text-sm">
              06
            </div>
            <div>
              <h2 className="font-anton text-2xl uppercase tracking-tight text-[#7B0323]">
                {lang === "vi" ? "Liên Hệ & Tầm Nhìn Tương Lai (Contact & Vision)" : "Contact & Long-Term Vision"}
              </h2>
              <p className="text-xs text-[#242220]/60 font-mono">
                {lang === "vi" ? "Lời ngỏ gửi hội đồng tuyển sinh, giáo sư & đối tác hợp tác" : "Direct dialogue for admissions committees, professors & partners"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left Card: Portrait & Credentials */}
            <div className="md:col-span-5 p-5 rounded-2xl bg-[#1B3B2B] text-white space-y-4">
              <div className="w-full h-56 relative rounded-xl overflow-hidden border border-white/20">
                <Image
                  src={contactPortraitUrl}
                  alt="Contact Portrait Quynh Chi"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="space-y-2 text-xs font-mono pt-1">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#7B0323]" />
                  <span>liliesmyllerz2k9@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#E2ECE5]" />
                  <span>{lang === "vi" ? "Đắk Lắk & TP. Hồ Chí Minh, Việt Nam" : "Dak Lak & Ho Chi Minh City, Vietnam"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-white/80" />
                  <span>linkedin.com/in/phanhoangquynhchi</span>
                </div>
              </div>
            </div>

            {/* Right Card: Vision Statement & Dialogue Form Template */}
            <div className="md:col-span-7 p-6 rounded-2xl bg-white border border-[#1B3B2B]/15 space-y-4">
              <h3 className="font-anton text-xl uppercase tracking-tight text-[#242220]">
                {lang === "vi" ? "Kiến Tạo Những Hệ Sinh Thái Minh Bạch" : "Building Transparent Ecosystems"}
              </h3>
              <p className="text-xs sm:text-sm text-[#242220]/80 leading-relaxed text-justify">
                {lang === "vi"
                  ? "Khi hoàn thành bằng cử nhân về Phân tích Kinh doanh và Hệ thống Thông tin (Business Analytics & Information Systems), điểm đến đầu tiên của tôi sẽ là chuỗi cung ứng nông nghiệp vùng Tây Nguyên. Tầm nhìn của tôi là xây dựng những kiến trúc dữ liệu có tính hệ thống, giúp số liệu nông nghiệp trở nên minh bạch, có thể hành động và tiếp cận được—đảm bảo các nguồn tài nguyên bản địa cùng những con người trực tiếp canh tác được định giá đúng mực và tưởng thưởng công bằng."
                  : "When I hold my degree in Business Analytics and Information Systems, my first destination will be the agricultural supply chains of the Central Highlands. My vision is to build systemic data architectures that make agricultural data transparent, accessible, and actionable, ensuring that local resources and the people who cultivate them are accurately valued and equitably rewarded."}
              </p>
              <p className="text-xs text-[#242220]/75 leading-relaxed">
                {lang === "vi"
                  ? "Dù quý vị là hội đồng tuyển sinh đại học đang tìm kiếm một ứng viên đam mê đổi mới dựa trên dữ liệu, một giáo sư cần một nhà nghiên cứu định lượng tận tâm, hay một đối tác muốn đồng hành cùng các mô hình tuần hoàn vì cộng đồng, tôi luôn sẵn sàng lắng nghe và kết nối."
                  : "Whether you are a university admissions committee seeking a data-driven innovator, a professor looking for a dedicated quantitative researcher, or a partner passionate about circular economies, I would love to connect."}
              </p>

              {/* Inquiry form template representation */}
              <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#1B3B2B]/15 text-xs space-y-2">
                <span className="font-anton text-[11px] uppercase tracking-wider text-[#1B3B2B] block">
                  {lang === "vi" ? "Kênh Tiếp Nhận Ý Kiến & Đề Xuất Hợp Tác" : "Inquiry & Academic Collaboration Channels"}
                </span>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#242220]/70">
                  <div><strong>Email trực tiếp:</strong> liliesmyllerz2k9@gmail.com</div>
                  <div><strong>Hồ sơ xác thực:</strong> quynhchi-portfolio.vercel.app</div>
                </div>
              </div>

              {/* Official Sign-off */}
              <div className="pt-3 border-t border-[#1B3B2B]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="text-[#242220]/60 font-mono">
                  {lang === "vi" ? "Xác nhận hồ sơ năng lực • Phan Hoàng Quỳnh Chi" : "Verified Academic Portfolio • Phan Hoang Quynh Chi"}
                </div>
                <div className="font-heading italic text-[#7B0323] text-lg font-semibold">
                  Phan Hoàng Quỳnh Chi
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
