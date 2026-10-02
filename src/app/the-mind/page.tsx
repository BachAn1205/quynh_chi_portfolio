import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TheMindSection } from "@/components/sections/the-mind-section";
import { PageNav } from "@/components/ui/page-nav";

export const metadata = {
  title: "The Mind | Phan Hoàng Quỳnh Chi",
  description: "Quantitative Research, Econometrics, Circular Economy Startup & International Data Lab",
};

export default function TheMindPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col min-h-screen pt-20 sm:pt-24 blueprint-grid">
        <TheMindSection />
        <PageNav
          prevHref="/about"
          prevLabel="About"
          nextHref="/the-heart"
          nextLabel="The Heart"
          nextSub="Culture, Empathy & Advocacy"
        />
      </main>
      <Footer />
    </>
  );
}
