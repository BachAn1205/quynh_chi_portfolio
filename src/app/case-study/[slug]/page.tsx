import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { caseStudies } from "@/data/case-studies";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const moreProjects = caseStudies.filter((item) => item.slug !== slug);

  return (
    <>
      <Navbar />
      <main className="bg-[#0d130d] text-white pt-32 sm:pt-36 pb-24 blueprint-grid-dark min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          {/* Back link */}
          <Link
            href="/case-study"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-[#e74723] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </Link>

          {/* Project Title & Tags */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8 pb-8 border-b border-[#2c332c]">
            <div className="max-w-3xl">
              <h1 className="font-anton text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[1.05] mb-4">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                {project.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-1.5 lg:items-end font-mono text-sm sm:text-base text-[#e74723] shrink-0">
              {project.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Hero Feature Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] max-h-[580px] bg-[#1a201a] border border-[#2c332c] shadow-2xl mb-24">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Challenge & Solutions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {/* Challenge Card */}
            <div className="rounded-3xl border border-[#2c332c] bg-[#121612] p-8 sm:p-12 shadow-lg">
              <span className="font-mono text-xs font-semibold text-[#e74723] uppercase tracking-wider block mb-3">
                {"// The Problem"}
              </span>
              <h2 className="font-anton text-3xl sm:text-4xl uppercase text-white mb-6">
                Challenges
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solutions Card */}
            <div className="rounded-3xl border border-[#2c332c] bg-[#121612] p-8 sm:p-12 shadow-lg">
              <span className="font-mono text-xs font-semibold text-[#e74723] uppercase tracking-wider block mb-3">
                {"// The Approach"}
              </span>
              <h2 className="font-anton text-3xl sm:text-4xl uppercase text-white mb-6">
                Solutions
              </h2>
              <ul className="space-y-4">
                {project.solutions.map((sol, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-3.5 text-base sm:text-lg text-white/80 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-[#e74723] shrink-0 mt-1" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results Section */}
          <div className="mb-24">
            <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-white mb-10 pb-4 border-b border-[#2c332c]">
              Results
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.results.map((res, rIdx) => (
                <div
                  key={rIdx}
                  className="rounded-3xl border border-[#2c332c] bg-[#121612] p-8 flex flex-col justify-between"
                >
                  <div className="font-anton text-5xl sm:text-6xl text-[#e74723] mb-4">
                    {res.value}
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {res.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* More Project Images if present */}
          {project.moreImages && project.moreImages.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-24">
              {project.moreImages.map((img, mIdx) => (
                <div
                  key={mIdx}
                  className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#1a201a] border border-[#2c332c] shadow-lg"
                >
                  <Image
                    src={img}
                    alt={`${project.title} mockup ${mIdx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* More Projects Section */}
          <div className="pt-16 border-t border-[#2c332c]">
            <h2 className="font-anton text-3xl sm:text-4xl uppercase tracking-tight text-white mb-8">
              More Project
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {moreProjects.map((item, idx) => (
                <Link
                  key={idx}
                  href={`/case-study/${item.slug}`}
                  className="group rounded-3xl border border-[#2c332c] bg-[#121612] p-6 hover:border-[#e74723]/60 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#1a201a] mb-6">
                    <Image
                      src={item.heroImage}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="font-anton text-2xl uppercase text-white group-hover:text-[#e74723] transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#e74723]" />
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
