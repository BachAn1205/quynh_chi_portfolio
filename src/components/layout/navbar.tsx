"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FileText, Menu, X, Mail } from "lucide-react";
import { ResumeModal } from "@/components/ui/resume-modal";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/the-mind", label: "The Mind" },
    { href: "/the-heart", label: "The Heart" },
    { href: "/the-competitor", label: "The Competitor" },
    { href: "/contact", label: "Connect" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-40 pointer-events-none px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-end relative">
          {/* Center Pill: Desktop Navigation — absolutely centered */}
          <nav className="pointer-events-auto hidden lg:flex items-center gap-1 bg-white/95 backdrop-blur-md border border-[#d8d2c7] px-4 py-2 rounded-full shadow-sm absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link, idx) => (
              <div key={link.href} className="flex items-center gap-1">
                <Link
                  href={link.href}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-150 uppercase tracking-wide ${
                    isActive(link.href)
                      ? "bg-[#183e2b] text-white shadow-sm"
                      : "text-[#382215] hover:text-[#d9531e] hover:bg-black/5"
                  }`}
                >
                  {link.label}
                </Link>
                {idx < navLinks.length - 1 && (
                  <span className="text-[#c4bcaf] text-xs select-none">•</span>
                )}
              </div>
            ))}
          </nav>

          {/* Right Pill: Resume & Contact CTAs */}
          <div className="pointer-events-auto flex items-center gap-2">
            <button
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-semibold bg-[#183e2b] text-white hover:bg-[#122e20] transition-all duration-200 shadow-sm hover:shadow"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-semibold bg-[#d9531e] text-white hover:bg-[#c24616] transition-all duration-200 shadow-sm hover:shadow"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Connect</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden bg-white/95 backdrop-blur-md border border-[#d8d2c7] p-2 sm:p-2.5 rounded-full text-[#1c1510] hover:text-[#d9531e] transition-colors shadow-sm"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto lg:hidden mt-3 max-w-sm mx-auto bg-white/98 backdrop-blur-xl border border-[#d8d2c7] rounded-3xl p-5 shadow-2xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? "bg-[#183e2b] text-white"
                    : "text-[#1c1510] hover:bg-[#f6f3eb] hover:text-[#d9531e]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#d8d2c7] mt-1 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setResumeModalOpen(true);
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-[#183e2b] text-white"
              >
                <FileText className="w-3.5 h-3.5" />
                Resume
              </button>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-[#d9531e] text-white"
              >
                <Mail className="w-3.5 h-3.5" />
                Connect
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </>
  );
}
