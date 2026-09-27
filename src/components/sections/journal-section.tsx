import Image from "next/image";
import Link from "next/link";
import { Newspaper, ArrowUpRight } from "lucide-react";

export function JournalSection() {
  const articles = [
    {
      title: "The Art of Minimalist UI: How Less Can Truly Be More",
      slug: "/journal/the-art-of-minimalist-ui-how-less-can-truly-be-more",
      category: "// UI/UX Design",
      date: "May 12, 2026",
      readTime: "4 min read",
      image: "/images/antony/MbRaQgVXHD7FGpjELAJTJmmzwQQ.png",
      alt: "Minimalist UI Art",
    },
    {
      title: "Designing for Conversion: Turning Visitors into Loyal Users",
      slug: "/journal/designing-for-conversion-turning-visitors-into-loyal-users",
      category: "// Product Strategy",
      date: "Apr 28, 2026",
      readTime: "6 min read",
      image: "/images/antony/XZHoNERV3SpKtQQP70ROInrkqc.png",
      alt: "Designing for Conversion Art",
    },
    {
      title: "Designing Beyond Aesthetics: How Strategy Shapes Great User Experiences",
      slug: "/journal/designing-beyond-aesthetics-how-strategy-shapes-great-user-experiences",
      category: "// Design Strategy",
      date: "Apr 15, 2026",
      readTime: "5 min read",
      image: "/images/antony/LgP296OKVLRO4eC8ahqdeZbB6K8.png",
      alt: "Design Strategy Art",
    },
    {
      title: "From Concept to Pixel: The Creative Journey Behind My Recent SaaS Redesign",
      slug: "/journal/designing-for-conversion-turning-visitors-into-loyal-users-copy",
      category: "// Case Breakdown",
      date: "Mar 22, 2026",
      readTime: "7 min read",
      image: "/images/antony/G1TmWb0DgHKYLbL5cnGAyW75Wr8.png",
      alt: "Creative Journey SaaS Redesign",
    },
  ];

  return (
    <section className="bg-[#0d130d] text-white py-24 sm:py-32 overflow-hidden blueprint-grid-dark">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-[#2c332c]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e74723] flex items-center justify-center shrink-0 shadow-sm text-white">
              <Newspaper className="w-6 h-6" />
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-white">
              JOURNAL
            </h2>
          </div>

          <p className="text-base sm:text-lg text-white/60 max-w-sm">
            Thoughts, lessons, and behind-the-scenes insights from my design journey.
          </p>
        </div>

        {/* 2-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((item, idx) => (
            <Link
              key={idx}
              href={item.slug}
              className="group flex flex-col justify-between rounded-3xl border border-[#2c332c] bg-[#121612] p-5 sm:p-6 transition-all duration-300 hover:border-[#e74723]/60 shadow-lg"
            >
              <div>
                {/* Artwork Thumbnail */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#1a201a] mb-6">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between gap-4 mb-3 text-xs sm:text-sm">
                  <span className="font-mono text-[#e74723] font-semibold">
                    {item.category}
                  </span>
                  <span className="text-white/50">{item.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-anton text-xl sm:text-2xl uppercase tracking-tight text-white group-hover:text-[#e74723] transition-colors leading-snug mb-4">
                  {item.title}
                </h3>
              </div>

              {/* Read Link */}
              <div className="pt-4 border-t border-[#2c332c] flex items-center justify-between text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                <span>Read article</span>
                <ArrowUpRight className="w-4 h-4 text-[#e74723] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
