"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Mail, FileText, ArrowUpRight, MapPin, Sparkles, Send } from "lucide-react";
import { ResumeModal } from "@/components/ui/resume-modal";

export function Footer() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <>
      <footer id="vision" className="w-full pt-16 pb-8 overflow-hidden bg-[#ebe6dd] border-t border-[#d8d2c7]">
        {/* Top CTA Banner: SECTION 6: FOOTER / VISION */}
        <div className="max-w-6xl mx-auto px-4 mb-20">
          <div className="relative rounded-3xl border border-[#d8d2c7] bg-[#f6f3eb] blueprint-grid overflow-hidden py-16 sm:py-24 px-6 sm:px-12 text-center shadow-sm">
            {/* Subtle background overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply">
              <Image
                src="/images/quynhchi/hero-coffee-farm.jpg"
                alt="Coffee farm backdrop"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#183e2b]/10 border border-[#183e2b]/20 text-[#183e2b] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Section 6 // Vision &amp; Partnership</span>
              </div>

              {/* Headline */}
              <h2 className="font-anton text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#1c1510] mb-6 leading-[1.05]">
                Building Transparent Ecosystems.
              </h2>

              {/* Vision Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-[#4a3f35] leading-relaxed mb-10 max-w-2xl font-normal">
                <p>
                  When I hold my degree in <strong>Business Analytics and Information Systems</strong>, my first destination will be the agricultural supply chains of the Central Highlands. My vision is to build systemic data architectures that make agricultural data transparent, accessible, and actionable—ensuring that local resources and the people who cultivate them are accurately valued and equitably rewarded.
                </p>
                <p className="text-xs sm:text-sm text-[#5e544a]">
                  Whether you are a university admissions committee seeking a data-driven innovator, a professor looking for a dedicated quantitative researcher, or a partner passionate about circular economies—I would love to connect.
                </p>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setResumeModalOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold bg-[#183e2b] text-white hover:bg-[#122e20] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Full Resume PDF</span>
                </button>

                <a
                  href="mailto:quynhchi.phanhoang@gmail.com"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold bg-[#d9531e] text-white hover:bg-[#c24616] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send an Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation & Contact Info Columns */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            {/* Column 1: Identity & Location */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl overflow-hidden bg-[#e0ded6] border border-[#d8d2c7] shrink-0">
                  <Image
                    src="/images/quynhchi/avatar.jpg"
                    alt="Phan Hoàng Quỳnh Chi"
                    width={36}
                    height={36}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-anton text-xl uppercase text-[#1c1510] tracking-tight">
                    PHAN HOÀNG QUỲNH CHI
                  </h3>
                  <p className="text-xs text-[#5e544a] font-mono">
                    High School for The Gifted (VNUHCM) • Central Highlands, VN
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#5e544a] leading-relaxed max-w-md">
                Curious by nature. Strategic by thought. Driven to create. Bridging Vietnam&apos;s Central Highlands cultural heritage with predictive analytics, economic systems, and circular innovation.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#183e2b]">
                <MapPin className="w-4 h-4 text-[#d9531e]" />
                <span>Dak Lak &amp; Ho Chi Minh City, Vietnam</span>
              </div>
            </div>

            {/* Column 2: Core Sections */}
            <div>
              <h4 className="font-anton text-sm uppercase text-[#1c1510] tracking-wider mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs text-[#4a3f35] font-medium">
                <li>
                  <Link href="/#about" className="hover:text-[#d9531e] transition-colors">
                    About Quỳnh Chi
                  </Link>
                </li>
                <li>
                  <Link href="/#the-mind" className="hover:text-[#d9531e] transition-colors">
                    The Mind: Quantitative Research
                  </Link>
                </li>
                <li>
                  <Link href="/#the-heart" className="hover:text-[#d9531e] transition-colors">
                    The Heart: Culture &amp; Advocacy
                  </Link>
                </li>
                <li>
                  <Link href="/#the-competitor" className="hover:text-[#d9531e] transition-colors">
                    The Competitor: Academic Profile
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#d9531e] transition-colors">
                    Contact &amp; Dialogue
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Direct Connect */}
            <div>
              <h4 className="font-anton text-sm uppercase text-[#1c1510] tracking-wider mb-4">
                Connect Directly
              </h4>
              <ul className="space-y-2.5 text-xs text-[#4a3f35] font-medium">
                <li>
                  <a
                    href="mailto:quynhchi.phanhoang@gmail.com"
                    className="hover:text-[#d9531e] transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#d9531e]" />
                    <span>quynhchi.phanhoang@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/quynhchi-phanhoang"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#d9531e] transition-colors flex items-center gap-1.5"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#183e2b]" />
                    <span>LinkedIn Profile</span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setResumeModalOpen(true)}
                    className="hover:text-[#d9531e] transition-colors flex items-center gap-1.5 text-left"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#d97706]" />
                    <span>View Verified Dossier (PDF)</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dotted separator with mouse scroll icon */}
        <div className="max-w-6xl mx-auto px-4 relative my-10">
          <div className="border-t border-dashed border-[#b8b0a2] w-full" />
          <div className="absolute left-1/2 -top-4 -translate-x-1/2 bg-[#ebe6dd] px-3 flex flex-col items-center">
            <div className="w-4 h-6 border-[1.5px] border-[#382215] rounded-full flex justify-center pt-1">
              <div className="w-0.5 h-1.5 bg-[#382215] rounded-full" />
            </div>
          </div>
        </div>

        {/* Credits Row */}
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5e544a] mb-10">
          <div>Curated for: <span className="text-[#1c1510] font-semibold">University Admissions &amp; Research</span></div>
          <div>Copyright &copy; 2026 Phan Hoàng Quỳnh Chi. All rights reserved.</div>
          <div>Field: <span className="text-[#183e2b] font-semibold">Business Analytics &amp; Information Systems</span></div>
        </div>

        {/* Giant Dashed QUYNH CHI Typography at bottom */}
        <div className="w-full flex justify-center overflow-hidden px-4 pointer-events-none select-none">
          <div
            className="font-anton text-[11vw] uppercase tracking-wider leading-none text-center"
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px #d9531e",
              opacity: 0.28,
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
