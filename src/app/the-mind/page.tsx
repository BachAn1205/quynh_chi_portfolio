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
          prevLabel={lang === "vi" ? "Về Tôi" : "About"}
          prevSub={lang === "vi" ? "Nguồn cội & Triết lý" : "Origins & Philosophy"}
          nextHref="/the-heart"
          nextLabel={lang === "vi" ? "Trái Tim" : "The Heart"}
          nextSub={lang === "vi" ? "Văn Hóa, Đồng Cảm & Cộng Đồng" : "Culture, Empathy & Advocacy"}
        />
      </main>
      <Footer />
    </>
  );
}
