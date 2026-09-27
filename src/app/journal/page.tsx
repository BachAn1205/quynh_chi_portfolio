import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { journalPosts } from "@/data/journal-posts";
import { Newspaper, ArrowUpRight } from "lucide-react";

export default function JournalListPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0b1710] text-white pt-32 sm:pt-36 pb-24 blueprint-grid-dark min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-[#233529]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#d9531e] flex items-center justify-center shrink-0 shadow-sm text-white">
                <Newspaper className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs font-semibold text-[#22c55e] uppercase tracking-wider block">
                  {"// Essays • Research • Advocacy"}
                </span>
                <h1 className="font-anton text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white">
                  JOURNAL &amp; WRITING
                </h1>
              </div>
            </div>

            <p className="text-sm sm:text-base text-white/70 max-w-sm">
              Essays, empirical research papers, and reflections on economic systems, data analytics, and cultural preservation by Phan Hoàng Quỳnh Chi.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {journalPosts.map((item, idx) => (
              <Link
                key={idx}
                href={`/journal/${item.slug}`}
                className="group flex flex-col justify-between rounded-3xl border border-[#233529] bg-[#121f16] p-6 transition-all duration-300 hover:border-[#22c55e]/60 shadow-lg"
              >
                <div>
                  {/* Artwork Preview */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#1a201a] mb-6">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={idx === 0}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center justify-between gap-4 mb-3 text-xs sm:text-sm">
                    <span className="font-mono text-[#22c55e] font-semibold">
                      {item.category}
                    </span>
                    <span className="text-white/50">{item.date}</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-white group-hover:text-[#22c55e] transition-colors leading-snug mb-4">
                    {item.title}
                  </h2>

                  <p className="text-sm text-white/70 line-clamp-3 leading-relaxed mb-6">
                    {item.intro}
                  </p>
                </div>

                {/* Read Button */}
                <div className="pt-4 border-t border-[#233529] flex items-center justify-between text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                  <span>Read article ({item.readTime})</span>
                  <ArrowUpRight className="w-4 h-4 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
