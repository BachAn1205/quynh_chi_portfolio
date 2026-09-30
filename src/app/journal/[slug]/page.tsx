import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { journalPosts } from "@/data/journal-posts";
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return journalPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function JournalDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = journalPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const moreArticles = journalPosts.filter((item) => item.slug !== slug);

  return (
    <>
      <Navbar />
      <main className="bg-[#0b1710] text-white pt-32 sm:pt-36 pb-24 blueprint-grid-dark min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back link */}
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-[#22c55e] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Journal</span>
          </Link>

          {/* Article Header */}
          <div className="mb-10 pb-8 border-b border-[#233529]">
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-[#22c55e] mb-4">
              <span className="font-semibold">{post.category}</span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5 text-white/60">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5 text-white/60">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-anton text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[1.1] mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#335C33] border border-[#22c55e]/40 overflow-hidden flex items-center justify-center shrink-0 text-white font-bold font-mono text-sm">
                QC
              </div>
              <div className="text-sm">
                <span className="font-bold text-white block">Phan Hoàng Quỳnh Chi</span>
                <span className="text-xs text-[#22c55e] font-mono">Researcher &amp; Founder • Dak Lak</span>
              </div>
            </div>
          </div>

          {/* Hero Feature Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-[#121f16] border border-[#233529] shadow-2xl mb-14">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Intro Paragraph */}
          <div className="text-lg sm:text-xl text-white/90 leading-relaxed font-normal mb-12 pb-8 border-b border-[#233529]">
            {post.intro}
          </div>

          {/* Article Sections */}
          <div className="space-y-12 mb-20">
            {post.sections.map((sec, sIdx) => (
              <div key={sIdx} className="space-y-4">
                <h2 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-white">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg text-white/75 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* More Articles Section */}
          <div className="pt-16 border-t border-[#233529]">
            <h2 className="font-anton text-3xl sm:text-4xl uppercase tracking-tight text-white mb-8">
              More Research &amp; Articles
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {moreArticles.slice(0, 2).map((item, idx) => (
                <Link
                  key={idx}
                  href={`/journal/${item.slug}`}
                  className="group rounded-3xl border border-[#233529] bg-[#121f16] p-5 hover:border-[#22c55e]/60 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#1a201a] mb-5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#22c55e] block mb-2 font-semibold">
                      {item.category}
                    </span>
                    <h3 className="font-anton text-xl uppercase text-white group-hover:text-[#22c55e] transition-colors leading-snug flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#22c55e] shrink-0 ml-2" />
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
