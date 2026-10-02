"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TheHeartSection } from "@/components/sections/the-heart-section";
import { PageNav } from "@/components/ui/page-nav";
import { useLanguage } from "@/lib/i18n";

export default function TheHeartPage() {
  const { lang } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col min-h-screen bg-[#FAF7F2] blueprint-grid pt-20 sm:pt-24">
        <TheHeartSection />
        <div className="bg-[#FAF7F2] blueprint-grid">
          <PageNav
            prevHref="/the-mind"
            prevLabel={lang === "vi" ? "Tư Duy" : "The Mind"}
            prevSub={lang === "vi" ? "Nghiên Cứu & Doanh Nghiệp" : "Quantitative Research & Enterprise"}
            nextHref="/the-competitor"
            nextLabel={lang === "vi" ? "Thành Tích" : "The Competitor"}
            nextSub={lang === "vi" ? "Hồ sơ Học thuật & Danh hiệu" : "Academic Profile & Awards"}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
