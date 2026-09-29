"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FileText, Menu, X, Mail } from "lucide-react";
import { ResumeModal } from "@/components/ui/resume-modal";
import { useLanguage } from "@/lib/i18n";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav.home"), slotWidth: "w-[86px] xl:w-[92px]" },
    { href: "/about", label: t("nav.about"), slotWidth: "w-[72px] xl:w-[78px]" },
    { href: "/the-mind", label: t("nav.mind"), slotWidth: "w-[84px] xl:w-[90px]" },
    { href: "/the-heart", label: t("nav.heart"), slotWidth: "w-[90px] xl:w-[96px]" },
    { href: "/the-competitor", label: t("nav.competitor"), slotWidth: "w-[134px] xl:w-[140px]" },
    { href: "/contact", label: t("nav.contact"), slotWidth: "w-[80px] xl:w-[86px]" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-40 px-3 sm:px-4">
        {/* ── DESKTOP: single unified pill with stable geometry ── */}
        <div className="hidden lg:flex w-full max-w-5xl xl:max-w-6xl mx-auto items-center justify-between bg-[#FAF9F2]/95 backdrop-blur-md border border-[#335C33]/20 rounded-full shadow-sm px-3.5 py-1.5 gap-2">

          {/* LEFT: Language toggle (fixed width zone to preserve center alignment) */}
          <div className="w-[170px] shrink-0 flex items-center justify-start gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "vi" : "en")}
              title={lang === "en" ? "Chuyển sang Tiếng Việt" : "Switch to English"}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold text-[#335C33] hover:bg-[#E3EDD3] transition-all duration-200 select-none cursor-pointer"
            >
              <span className="text-base leading-none">{lang === "en" ? "🇻🇳" : "🇬🇧"}</span>
              <span className="font-mono tracking-wider text-[11px] font-bold">{lang === "en" ? "VI" : "EN"}</span>
            </button>
            <div className="w-px h-4 bg-[#335C33]/20 shrink-0" />
          </div>

          {/* CENTER: Nav links — each link has fixed-width slot so positions NEVER shift */}
          <nav className="flex-1 flex items-center justify-center overflow-hidden">
            {navLinks.map((link, idx) => (
              <div key={link.href} className="flex items-center shrink-0">
                <div className={`${link.slotWidth} flex items-center justify-center shrink-0`}>
                  <Link
                    href={link.href}
                    className={`inline-flex items-center justify-center whitespace-nowrap text-[11px] xl:text-xs font-semibold px-2 xl:px-2.5 py-1.5 rounded-full transition-all duration-150 uppercase tracking-wide text-center ${
                      isActive(link.href)
                        ? "bg-[#335C33] text-[#F6F6EE] shadow-sm"
                        : "text-[#2C2E2B] hover:text-[#8C5A35] hover:bg-[#335C33]/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </div>
                {idx < navLinks.length - 1 && (
                  <span className="text-[#335C33]/25 text-[10px] select-none shrink-0 w-2 text-center">•</span>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT: Resume + Connect (fixed width zone matching left for perfect balance) */}
          <div className="w-[170px] shrink-0 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] xl:text-xs font-semibold bg-[#335C33] text-[#F6F6EE] hover:bg-[#284828] transition-all duration-200 shadow-sm whitespace-nowrap cursor-pointer min-w-[78px]"
            >
              <FileText className="w-3 h-3 xl:w-3.5 xl:h-3.5 shrink-0" />
              <span>{t("nav.resume")}</span>
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] xl:text-xs font-semibold bg-[#8C5A35] text-[#F6F6EE] hover:bg-[#7a4d2d] transition-all duration-200 shadow-sm whitespace-nowrap min-w-[78px]"
            >
              <Mail className="w-3 h-3 xl:w-3.5 xl:h-3.5 shrink-0" />
              <span>{t("nav.contact")}</span>
            </Link>
          </div>
        </div>

        {/* ── MOBILE: floating right cluster ── */}
        <div className="lg:hidden flex items-center justify-end gap-2">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "vi" : "en")}
            className="inline-flex items-center gap-1 px-2.5 py-2 rounded-full text-xs font-bold bg-[#FAF9F2]/95 border border-[#335C33]/20 text-[#335C33] hover:bg-[#E3EDD3] transition-all shadow-sm select-none"
          >
            <span className="text-base leading-none">{lang === "en" ? "🇻🇳" : "🇬🇧"}</span>
          </button>

          {/* Resume */}
          <button
            onClick={() => setResumeModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold bg-[#335C33] text-[#F6F6EE] shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-[#FAF9F2]/95 backdrop-blur-md border border-[#335C33]/20 p-2 rounded-full text-[#2C2E2B] hover:text-[#335C33] transition-colors shadow-sm"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* ── MOBILE MENU DROPDOWN ── */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 max-w-xs ml-auto bg-[#FAF9F2]/98 backdrop-blur-xl border border-[#335C33]/20 rounded-3xl p-4 shadow-2xl flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? "bg-[#335C33] text-[#F6F6EE]"
                    : "text-[#2C2E2B] hover:bg-[#E3EDD3] hover:text-[#335C33]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "vi" : "en")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-[#335C33] bg-[#E3EDD3] hover:bg-[#D5E3C0] transition-colors mt-1"
            >
              <span className="text-base">{lang === "en" ? "🇻🇳" : "🇬🇧"}</span>
              <span>{lang === "en" ? "Tiếng Việt" : "English"}</span>
            </button>

            <div className="pt-2 border-t border-[#335C33]/15 grid grid-cols-2 gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); setResumeModalOpen(true); }}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold bg-[#335C33] text-[#F6F6EE]"
              >
                <FileText className="w-3.5 h-3.5" />
                {t("nav.resume")}
              </button>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold bg-[#8C5A35] text-[#F6F6EE]"
              >
                <Mail className="w-3.5 h-3.5" />
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
