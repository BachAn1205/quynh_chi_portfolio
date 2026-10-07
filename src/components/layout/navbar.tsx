"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FileText, Menu, X, Mail, Globe, User, Printer } from "lucide-react";
import { ResumeModal } from "@/components/ui/resume-modal";
import { useLanguage } from "@/lib/i18n";
import { useProjectImages } from "@/lib/project-images-context";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const { getImage } = useProjectImages();
  const avatarUrl = getImage("profile-avatar");

  const navLinks = [
    { href: "/", label: t("nav.home"), slotWidth: "w-[86px] xl:w-[92px]" },
    { href: "/about", label: t("nav.about"), slotWidth: "w-[68px] xl:w-[74px]" },
    { href: "/the-mind", label: t("nav.mind"), slotWidth: "w-[68px] xl:w-[74px]" },
    { href: "/the-heart", label: t("nav.heart"), slotWidth: "w-[84px] xl:w-[90px]" },
    { href: "/the-competitor", label: t("nav.competitor"), slotWidth: "w-[128px] xl:w-[136px]" },
    { href: "/contact", label: t("nav.contact"), slotWidth: "w-[76px] xl:w-[82px]" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-40 px-3 sm:px-4">
        {/* ── DESKTOP: single unified pill with stable geometry ── */}
        <div className="hidden lg:flex w-full max-w-6xl xl:max-w-7xl mx-auto items-center justify-between bg-[#FAF7F2]/95 backdrop-blur-md border border-[#1B3B2B]/15 rounded-full shadow-sm px-3.5 py-1.5 gap-2">

          {/* LEFT: Identity / Brand Logo */}
          <div className="shrink-0 flex items-center justify-start pl-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 py-1 px-2 rounded-full hover:bg-[#1B3B2B]/5 transition-colors group select-none"
            >
              <div suppressHydrationWarning className="w-7 h-7 rounded-full overflow-hidden bg-[#1B3B2B] flex items-center justify-center text-white shrink-0 border border-[#1B3B2B]/20 shadow-xs relative">
                {avatarUrl ? (
                  <Image
                    src={avatarUrl}
                    alt="Quỳnh Chi"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <User className="w-3.5 h-3.5 text-white/90" />
                )}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-anton text-xs xl:text-sm tracking-wide text-[#242220] group-hover:text-[#7B0323] transition-colors leading-tight whitespace-nowrap">
                  QUỲNH CHI
                </span>
                <span className="text-[9px] font-mono text-[#7B0323] leading-none whitespace-nowrap hidden xl:inline">
                  Central Highlands
                </span>
              </div>
            </Link>
          </div>

          {/* CENTER: Nav links ,  each link has fixed-width slot so positions NEVER shift */}
          <nav className="flex-1 flex items-center justify-center overflow-hidden">
            {navLinks.map((link, idx) => (
              <div key={link.href} className="flex items-center shrink-0">
                <div className={`${link.slotWidth} flex items-center justify-center shrink-0`}>
                  <Link
                    href={link.href}
                    className={`inline-flex items-center justify-center whitespace-nowrap text-[11px] xl:text-xs font-semibold px-2 xl:px-2.5 py-1.5 rounded-full transition-all duration-150 uppercase tracking-wide text-center ${isActive(link.href)
                        ? "bg-[#1B3B2B] text-white shadow-sm"
                        : "text-[#242220] hover:text-[#7B0323] hover:bg-[#1B3B2B]/5"
                      }`}
                  >
                    {link.label}
                  </Link>
                </div>
                {idx < navLinks.length - 1 && (
                  <span className="text-[#1B3B2B]/25 text-[10px] select-none shrink-0 w-2 text-center">•</span>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT: Language Switcher + Resume + Connect */}
          <div className="shrink-0 flex items-center justify-end gap-2 pr-1">
            {/* Language Toggle Capsule */}
            <button
              onClick={() => setLang(lang === "en" ? "vi" : "en")}
              title={lang === "en" ? "Chuyển sang Tiếng Việt" : "Switch to English"}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#E2ECE5] text-[#1B3B2B] border border-[#1B3B2B]/20 hover:bg-[#D2E2D7] transition-all duration-200 select-none cursor-pointer shadow-xs whitespace-nowrap"
            >
              <Globe className="w-3.5 h-3.5 text-[#1B3B2B] shrink-0" />
              <span className="font-mono text-xs font-bold tracking-wider">{lang === "en" ? "EN" : "VI"}</span>
            </button>

            {/* Print Portfolio Full Dossier */}
            <Link
              href="/print"
              title={lang === "vi" ? "Xem & In bản PDF toàn bộ Portfolio" : "View & Print Full Portfolio PDF"}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] xl:text-xs font-semibold bg-[#E2ECE5] text-[#1B3B2B] hover:bg-[#D2E2D7] border border-[#1B3B2B]/20 transition-all duration-200 shadow-xs whitespace-nowrap cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#7B0323] shrink-0" />
              <span>{lang === "vi" ? "Bản in PDF" : "Print PDF"}</span>
            </Link>

            <button
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] xl:text-xs font-semibold bg-[#1B3B2B] text-white hover:bg-[#142C20] transition-all duration-200 shadow-sm whitespace-nowrap cursor-pointer min-w-[76px]"
            >
              <FileText className="w-3 h-3 xl:w-3.5 xl:h-3.5 shrink-0" />
              <span>{t("nav.resume")}</span>
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] xl:text-xs font-semibold bg-[#7B0323] text-white hover:bg-[#5E021A] transition-all duration-200 shadow-sm whitespace-nowrap min-w-[76px]"
            >
              <Mail className="w-3 h-3 xl:w-3.5 xl:h-3.5 shrink-0" />
              <span>{t("nav.contact")}</span>
            </Link>
          </div>
        </div>

        {/* ── MOBILE: floating bar ── */}
        <div className="lg:hidden flex items-center justify-between bg-[#FAF7F2]/95 backdrop-blur-md border border-[#1B3B2B]/15 rounded-full shadow-sm px-3 py-1.5">
          {/* Left: Avatar / Logo */}
          <Link href="/" className="inline-flex items-center gap-2 select-none">
            <div suppressHydrationWarning className="w-6 h-6 rounded-full overflow-hidden bg-[#1B3B2B] flex items-center justify-center text-white shrink-0 border border-[#1B3B2B]/20 relative">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt="Quỳnh Chi"
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <User className="w-3 h-3 text-white/90" />
              )}
            </div>
            <span className="font-anton text-xs uppercase tracking-wide text-[#242220]">
              QUỲNH CHI
            </span>
          </Link>

          {/* Right cluster: Language toggle + Resume + Menu button */}
          <div className="flex items-center gap-1.5">
            {/* Language toggle pill */}
            <button
              onClick={() => setLang(lang === "en" ? "vi" : "en")}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold bg-[#E2ECE5] text-[#1B3B2B] border border-[#1B3B2B]/20 hover:bg-[#D2E2D7] transition-all shadow-xs select-none"
            >
              <Globe className="w-3 h-3 text-[#1B3B2B]" />
              <span className="font-mono text-[11px] font-bold">{lang === "en" ? "EN" : "VI"}</span>
            </button>

            {/* Resume */}
            <button
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold bg-[#1B3B2B] text-white shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-[#FAF7F2]/95 border border-[#1B3B2B]/15 p-1.5 rounded-full text-[#242220] hover:text-[#7B0323] transition-colors shadow-xs"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU DROPDOWN ── */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 w-full max-w-sm sm:max-w-md ml-auto bg-[#FAF7F2]/98 backdrop-blur-xl border border-[#1B3B2B]/15 rounded-3xl p-4 sm:p-5 shadow-2xl flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${isActive(link.href)
                    ? "bg-[#1B3B2B] text-white"
                    : "text-[#242220] hover:bg-[#E2ECE5] hover:text-[#1B3B2B]"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "vi" : "en")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-[#1B3B2B] bg-[#E2ECE5] hover:bg-[#D2E2D7] transition-colors mt-1"
            >
              <span className="text-base">{lang === "en" ? "🇻🇳" : "🇬🇧"}</span>
              <span>{lang === "en" ? "Tiếng Việt" : "English"}</span>
            </button>

            <div className="pt-2 border-t border-[#1B3B2B]/15 grid grid-cols-3 gap-1.5">
              <button
                onClick={() => { setMobileMenuOpen(false); setResumeModalOpen(true); }}
                className="flex items-center justify-center gap-1 py-2.5 rounded-xl text-xs font-semibold bg-[#1B3B2B] text-white"
              >
                <FileText className="w-3 h-3" />
                {t("nav.resume")}
              </button>
              <Link
                href="/print"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1 py-2.5 rounded-xl text-xs font-semibold bg-[#E2ECE5] text-[#1B3B2B] border border-[#1B3B2B]/20"
              >
                <Printer className="w-3 h-3 text-[#7B0323]" />
                {lang === "vi" ? "In PDF" : "Print"}
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1 py-2.5 rounded-xl text-xs font-semibold bg-[#7B0323] text-white"
              >
                <Mail className="w-3 h-3" />
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        )}
      </header>

      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </>
  );
}
