import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { PageNav } from "@/components/ui/page-nav";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col min-h-screen">
        <Hero />
        <PageNav
          nextHref="/about"
          nextLabel="About Me"
          nextSub="Origins & Philosophy"
        />
      </main>
      <Footer />
    </>
  );
}
