"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TheMindSection } from "@/components/sections/the-mind-section";
import { PageNav } from "@/components/ui/page-nav";
import { useLanguage } from "@/lib/i18n";

export default function TheMindPage() {
  const { lang } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col min-h-screen pt-20 sm:pt-24 blueprint-grid">
        <TheMindSection />
        <PageNav
          prevHref="/about"
          prevLabel={lang === "vi" ? "Build: Dự Án & Sáng Kiến" : "Build: Experience & Initiatives"}
          prevSub={lang === "vi" ? "Khởi nghiệp tuần hoàn, Di sản & CLB" : "Circular Ventures, Heritage & Leadership"}
          nextHref="/the-heart"
          nextLabel={lang === "vi" ? "Preserve: Cộng Đồng & Thiện Nguyện" : "Preserve: Community & Philanthropy"}
          nextSub={lang === "vi" ? "Thiện nguyện, Lao động Xã hội & Di sản" : "Charity, Social Action & Heritage"}
        />
      </main>
      <Footer />
    </>
  );
}
