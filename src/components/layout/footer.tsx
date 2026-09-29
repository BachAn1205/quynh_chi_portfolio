"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Mail, FileText, ArrowUpRight, MapPin, Sparkles, Send } from "lucide-react";
import { ResumeModal } from "@/components/ui/resume-modal";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <footer id="vision" className="w-full pt-16 pb-8 overflow-hidden bg-[#F6F6EE] border-t border-[#335C33]/15">
        {/* Top CTA Banner */}
        <div className="max-w-6xl mx-auto px-4 mb-20">
          <div className="relative rounded-3xl border border-[#335C33]/20 bg-[#FAF9F2] blueprint-grid overflow-hidden py-16 sm:py-24 px-6 sm:px-12 text-center shadow-sm">
            {/* Subtle background overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-15 mix-blend-multiply">
              <Image
                src="/images/quynhchi/hero-coffee-farm.jpg"
                alt="Coffee farm backdrop"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#335C33]/10 border border-[#335C33]/20 text-[#335C33] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("footer.badge")}</span>
              </div>

              {/* Headline */}
              <h2 className="font-anton text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#2C2E2B] mb-6 leading-[1.05]">
                {t("footer.headline")}
              </h2>

              {/* Vision Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-[#2C2E2B]/75 leading-relaxed mb-10 max-w-2xl font-normal">
                <p>
                  {t("footer.p1")}
                </p>
                <p className="text-xs sm:text-sm text-[#2C2E2B]/60">
                  {t("footer.p2")}
                </p>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setResumeModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold bg-[#335C33] text-[#F6F6EE] hover:bg-[#284828] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer min-w-[210px]"
                >
                  <FileText className="w-4 h-4 shrink-0" />
                  <span>{t("footer.cta.resume")}</span>
                </button>

                <a
                  href="mailto:quynhchi.phanhoang@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold bg-[#8C5A35] text-[#F6F6EE] hover:bg-[#7a4d2d] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer min-w-[170px]"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>{t("footer.cta.email")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation & Contact Info Columns */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 items-start">
            {/* Column 1: Identity & Location */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl overflow-hidden bg-[#E3EDD3] border border-[#335C33]/20 shrink-0">
                  <Image
                    src="/images/quynhchi/avatar.jpg"
                    alt="Phan Hoàng Quỳnh Chi"
                    width={36}
                    height={36}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-anton text-xl uppercase text-[#2C2E2B] tracking-tight">
                    PHAN HOÀNG QUỲNH CHI
                  </h3>
                  <p className="text-xs text-[#2C2E2B]/60 font-mono">
                    High School for The Gifted (VNUHCM) • Central Highlands, VN
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#2C2E2B]/60 leading-relaxed max-w-md">
                {t("footer.bio")}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#335C33]">
                <MapPin className="w-4 h-4 text-[#8C5A35]" />
                <span>{t("footer.location")}</span>
              </div>
            </div>

            {/* Column 2: Core Sections */}
            <div>
              <h4 className="font-anton text-sm uppercase text-[#2C2E2B] tracking-wider mb-4">
                {t("footer.nav.title")}
              </h4>
              <ul className="space-y-2.5 text-xs text-[#2C2E2B]/70 font-medium">
                <li>
                  <Link href="/#about" className="hover:text-[#335C33] transition-colors">
                    {t("footer.nav.about")}
                  </Link>
                </li>
                <li>
                  <Link href="/#the-mind" className="hover:text-[#335C33] transition-colors">
                    {t("footer.nav.mind")}
                  </Link>
                </li>
                <li>
                  <Link href="/#the-heart" className="hover:text-[#335C33] transition-colors">
                    {t("footer.nav.heart")}
                  </Link>
                </li>
                <li>
                  <Link href="/#the-competitor" className="hover:text-[#335C33] transition-colors">
                    {t("footer.nav.competitor")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#335C33] transition-colors">
                    {t("footer.nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Direct Connect */}
            <div>
              <h4 className="font-anton text-sm uppercase text-[#2C2E2B] tracking-wider mb-4">
                {t("footer.connect.title")}
              </h4>
              <ul className="space-y-2.5 text-xs text-[#2C2E2B]/70 font-medium">
                <li>
                  <a
                    href="mailto:quynhchi.phanhoang@gmail.com"
                    className="hover:text-[#335C33] transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#8C5A35]" />
                    <span>quynhchi.phanhoang@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/quynhchi-phanhoang"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#335C33] transition-colors flex items-center gap-1.5"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#335C33]" />
                    <span>{t("footer.connect.linkedin")}</span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setResumeModalOpen(true)}
                    className="hover:text-[#335C33] transition-colors flex items-center gap-1.5 text-left"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#8C5A35]" />
                    <span>{t("footer.connect.dossier")}</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dotted separator with mouse scroll icon */}
        <div className="max-w-6xl mx-auto px-4 relative my-10">
          <div className="border-t border-dashed border-[#335C33]/25 w-full" />
          <div className="absolute left-1/2 -top-4 -translate-x-1/2 bg-[#F6F6EE] px-3 flex flex-col items-center">
            <div className="w-4 h-6 border-[1.5px] border-[#2C2E2B] rounded-full flex justify-center pt-1">
              <div className="w-0.5 h-1.5 bg-[#335C33] rounded-full" />
            </div>
          </div>
        </div>

        {/* Credits Row */}
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2C2E2B]/50 mb-10">
          <div>Copyright &copy; 2026 Phan Hoàng Quỳnh Chi. All rights reserved.</div>
        </div>

        {/* Giant Dashed QUYNH CHI Typography at bottom */}
        <div className="w-full flex justify-center overflow-hidden px-4 pointer-events-none select-none">
          <div
            className="font-anton text-[11vw] uppercase tracking-wider leading-none text-center"
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px #335C33",
              opacity: 0.2,
            }}
          >
            QUYNH CHI
          </div>
        </div>
      </footer>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </>
  );
}
