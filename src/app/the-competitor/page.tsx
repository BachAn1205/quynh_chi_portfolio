"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TheCompetitorSection } from "@/components/sections/the-competitor-section";
import { PageNav } from "@/components/ui/page-nav";
import { useLanguage } from "@/lib/i18n";

export default function TheCompetitorPage() {
  const { lang, t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col min-h-screen pt-20 sm:pt-24 blueprint-grid">
        <TheCompetitorSection />
        <PageNav
          prevHref="/the-heart"
          prevLabel="Preserve"
          nextHref="/contact"
          nextLabel={t("nav.contact")}
        />
      </main>
      <Footer />
    </>
  );
}
