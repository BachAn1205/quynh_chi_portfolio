import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TheHeartSection } from "@/components/sections/the-heart-section";
import { PageNav } from "@/components/ui/page-nav";

export const metadata = {
  title: "The Heart | Phan Hoàng Quỳnh Chi",
  description: "Culture, Empathy & Advocacy . T'rưng Heritage, Social Projects and Community Action",
};

export default function TheHeartPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col min-h-screen bg-[#EAF1E4]">
        <TheHeartSection />
        <div className="bg-[#EAF1E4]">
          <PageNav
            prevHref="/the-mind"
            prevLabel="The Mind"
            nextHref="/the-competitor"
            nextLabel="The Competitor"
            nextSub="Academic Profile & Awards"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
