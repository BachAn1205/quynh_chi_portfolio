"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TheCompetitorSection } from "@/components/sections/the-competitor-section";
import { PageNav } from "@/components/ui/page-nav";
import { useLanguage } from "@/lib/i18n";

export default function TheCompetitorPage() {
  const { lang } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col min-h-screen pt-20 sm:pt-24 blueprint-grid">
        <TheCompetitorSection />
        <PageNav
          prevHref="/the-heart"
          prevLabel={lang === "vi" ? "Trái Tim" : "The Heart"}
          prevSub={lang === "vi" ? "Văn Hóa & Cộng Đồng" : "Heritage & Community"}
          nextHref="/contact"
          nextLabel={lang === "vi" ? "Liên Hệ" : "Connect"}
          nextSub={lang === "vi" ? "Kết nối trực tiếp" : "Get in Touch"}
        />
      </main>
      <Footer />
    </>
  );
}
