import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TheCompetitorSection } from "@/components/sections/the-competitor-section";
import { PageNav } from "@/components/ui/page-nav";

export const metadata = {
  title: "The Competitor | Phan Hoàng Quỳnh Chi",
  description: "Comprehensive Academic Profile . GPA, AP Exams, Olympiads, Debate & Technical Skills",
};

export default function TheCompetitorPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col min-h-screen pt-20 sm:pt-24 blueprint-grid">
        <TheCompetitorSection />
        <PageNav
          prevHref="/the-heart"
          prevLabel="The Heart"
          nextHref="/contact"
          nextLabel="Connect"
          nextSub="Get in Touch"
        />
      </main>
      <Footer />
    </>
  );
}
