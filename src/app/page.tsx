import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about-section";
import { TheMindSection } from "@/components/sections/the-mind-section";
import { TheHeartSection } from "@/components/sections/the-heart-section";
import { TheCompetitorSection } from "@/components/sections/the-competitor-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About Me */}
        <AboutSection />

        {/* Section 3: The Mind (Quantitative Research & Enterprise) */}
        <TheMindSection />

        {/* Section 4: The Heart (Culture, Empathy & Advocacy - Dark Background) */}
        <TheHeartSection />

        {/* Section 5: The Competitor (Comprehensive Academic Profile) */}
        <TheCompetitorSection />
      </main>
      {/* Section 6: Footer / Vision */}
      <Footer />
    </>
  );
}
