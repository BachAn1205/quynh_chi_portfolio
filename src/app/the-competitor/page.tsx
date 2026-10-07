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
          prevLabel={lang === "vi" ? "Preserve: Cộng Đồng & Thiện Nguyện" : "Preserve: Community & Philanthropy"}
          prevSub={lang === "vi" ? "Thiện nguyện, Xã hội & Di sản" : "Charity, Social Action & Heritage"}
          nextHref="/contact"
          nextLabel={lang === "vi" ? "Connect: Liên Hệ" : "Connect: Get in Touch"}
          nextSub={lang === "vi" ? "Kết nối trực tiếp cùng Quỳnh Chi" : "Direct Connection & Outreach"}
        />
      </main>
      <Footer />
    </>
  );
}
