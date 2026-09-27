import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { caseStudies } from "@/data/case-studies";
import { BookOpen, ArrowUpRight } from "lucide-react";

export default function CaseStudyListPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0d130d] text-white pt-32 sm:pt-36 pb-24 blueprint-grid-dark min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-[#2c332c]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#e74723] flex items-center justify-center shrink-0 shadow-sm text-white">
                <BookOpen className="w-6 h-6" />
              </div>
              <h1 className="font-anton text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white">
                CASE STUDY
              </h1>
            </div>

            <p className="text-base sm:text-lg text-white/60 max-w-sm">
              In-depth looks at how design decisions solved real business challenges.
            </p>
          </div>

          {/* Case Studies List */}
          <div className="space-y-24 sm:space-y-32">
            {caseStudies.map((project, idx) => (
              <div key={idx} className="group">
                {/* Title & Tags Row */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#2c332c]/60">
                  <Link
                    href={`/case-study/${project.slug}`}
                    className="font-anton text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white group-hover:text-[#e74723] transition-colors leading-[1.1] max-w-2xl flex items-start gap-2"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 opacity-0 group-hover:opacity-100 transition-opacity text-[#e74723] shrink-0 mt-1" />
                  </Link>

                  <div className="flex flex-col gap-1.5 lg:items-end font-mono text-sm sm:text-base text-[#e74723]">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Subtitle Description */}
                <p className="text-base sm:text-lg text-white/70 max-w-3xl mb-8 leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Large Image Preview Card */}
                <Link
                  href={`/case-study/${project.slug}`}
                  className="block relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] max-h-[520px] bg-[#1a201a] border border-[#2c332c] shadow-2xl transition-all duration-300 group-hover:border-[#e74723]/50"
                >
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    priority={idx === 0}
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
