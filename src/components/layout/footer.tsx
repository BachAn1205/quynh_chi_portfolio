"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Mail, FileText, ArrowUpRight, MapPin, Send, User } from "lucide-react";
import { ResumeModal } from "@/components/ui/resume-modal";
import { useLanguage } from "@/lib/i18n";
import { useProjectImages } from "@/lib/project-images-context";

export function Footer() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const { t } = useLanguage();
  const { getImage } = useProjectImages();
  const avatarUrl = getImage("profile-avatar");

  return (
    <>
      <footer id="vision" className="w-full pt-16 pb-8 overflow-hidden bg-[#FAF7F2] border-t border-[#1B3B2B]/15">
        {/* Top CTA Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="relative rounded-3xl border border-[#1B3B2B]/20 bg-[#FFFFFF] blueprint-grid overflow-hidden py-16 sm:py-24 px-6 sm:px-12 text-center shadow-sm">
            {/* Subtle background overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-multiply">
              <Image
                src="/images/quynhchi/hero-coffee-farm.jpg"
                alt="Coffee farm backdrop"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              {/* Headline */}
              <h2 className="font-anton text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-[#242220] mb-6 leading-[1.05] break-words">
                {t("footer.headline")}
              </h2>

              {/* Vision Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-[#242220]/75 leading-relaxed mb-10 max-w-2xl font-normal">
                <p>
                  {t("footer.p1")}
                </p>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
                <button
                  onClick={() => setResumeModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold bg-[#7B0323] text-[#FFFFFF] hover:bg-[#5E021A] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer min-w-0 sm:min-w-[210px]"
                >
                  <FileText className="w-4 h-4 shrink-0" />
                  <span>{t("footer.cta.resume")}</span>
                </button>

                <a
                  href="mailto:liliesmyllerz2k9@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold bg-[#1B3B2B] text-[#FFFFFF] hover:bg-[#142C20] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer min-w-0 sm:min-w-[170px]"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>{t("footer.cta.email")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation & Contact Info Columns */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 items-start">
            {/* Column 1: Identity & Location */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl overflow-hidden bg-[#E2ECE5] border border-[#1B3B2B]/20 shrink-0 relative flex items-center justify-center">
                  {avatarUrl ? (
                    <Image
                      src={avatarUrl}
                      alt="Phan Hoàng Quỳnh Chi"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <User className="w-4 h-4 text-[#1B3B2B]" />
                  )}
                </div>
                <div>
                  <h3 className="font-anton text-xl uppercase text-[#242220] tracking-tight">
                    PHAN HOÀNG QUỲNH CHI
                  </h3>
                  <p className="text-xs text-[#242220]/60 font-mono">
                    High School for The Gifted (VNUHCM) • Central Highlands, VN
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#242220]/60 leading-relaxed max-w-md">
                {t("footer.bio")}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#1B3B2B]">
                <MapPin className="w-4 h-4 text-[#7B0323]" />
                <span>{t("footer.location")}</span>
              </div>
            </div>

            {/* Column 2: Core Sections */}
            <div>
              <h4 className="font-anton text-sm uppercase text-[#242220] tracking-wider mb-4">
                {t("footer.nav.title")}
              </h4>
              <ul className="space-y-2.5 text-xs text-[#242220]/70 font-medium">
                <li>
                  <Link href="/about" className="hover:text-[#7B0323] transition-colors">
                    {t("footer.nav.about")}
                  </Link>
                </li>
                <li>
                  <Link href="/the-mind" className="hover:text-[#7B0323] transition-colors">
                    {t("footer.nav.mind")}
                  </Link>
                </li>
                <li>
                  <Link href="/the-heart" className="hover:text-[#7B0323] transition-colors">
                    {t("footer.nav.heart")}
                  </Link>
                </li>
                <li>
                  <Link href="/the-competitor" className="hover:text-[#7B0323] transition-colors">
                    {t("footer.nav.competitor")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#7B0323] transition-colors">
                    {t("footer.nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Direct Connect */}
            <div>
              <h4 className="font-anton text-sm uppercase text-[#242220] tracking-wider mb-4">
                {t("footer.connect.title")}
              </h4>
              <ul className="space-y-2.5 text-xs text-[#242220]/70 font-medium">
                <li>
                  <a
                    href="mailto:liliesmyllerz2k9@gmail.com"
                    className="hover:text-[#7B0323] transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#7B0323]" />
                    <span>liliesmyllerz2k9@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/phanhoangquynhchi/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#7B0323] transition-colors flex items-center gap-1.5"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#1B3B2B]" />
                    <span>{t("footer.connect.linkedin")}</span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setResumeModalOpen(true)}
                    className="hover:text-[#7B0323] transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#7B0323]" />
                    <span>{t("footer.connect.dossier")}</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dotted separator with mouse scroll icon */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative my-10">
          <div className="border-t border-dashed border-[#1B3B2B]/20 w-full" />
          <div className="absolute left-1/2 -top-4 -translate-x-1/2 bg-[#FAF7F2] px-3 flex flex-col items-center">
            <div className="w-4 h-6 border-[1.5px] border-[#242220] rounded-full flex justify-center pt-1">
              <div className="w-0.5 h-1.5 bg-[#7B0323] rounded-full" />
            </div>
          </div>
        </div>

        {/* Credits Row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#242220]/50 mb-10">
          <div>Copyright &copy; 2026 Phan Hoàng Quỳnh Chi. All rights reserved.</div>
        </div>

        {/* Giant Dashed QUYNH CHI Typography at bottom */}
        <div className="w-full flex justify-center overflow-hidden px-4 pointer-events-none select-none">
          <div
            className="font-anton text-[11vw] uppercase tracking-wider leading-none text-center"
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px #1B3B2B",
              opacity: 0.15,
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
