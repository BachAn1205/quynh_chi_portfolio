"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { caseStudies } from "@/data/case-studies";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { ProjectImageUpload } from "@/components/ui/project-image-upload";

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
              <h1 className="font-anton text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-white break-words">
                CASE STUDY
              </h1>
            </div>

            <p className="text-sm sm:text-lg text-white/60 max-w-sm">
              In-depth looks at how design decisions solved real business challenges.
            </p>
          </div>

          {/* Case Studies List */}
          <div className="space-y-16 sm:space-y-32">
            {caseStudies.map((project, idx) => (
              <div key={idx} className="group">
                {/* Title & Tags Row */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#2c332c]/60">
                  <Link
                    href={`/case-study/${project.slug}`}
                    className="font-anton text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white group-hover:text-[#e74723] transition-colors leading-[1.1] max-w-2xl flex items-start gap-2 break-words"
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

                {/* Large Image Preview Card / Upload */}
                <div className="mb-4">
                  <ProjectImageUpload
                    slotId={
                      project.slug === "cafloop-circular-coffee-husk"
                        ? "mind-startup"
                        : project.slug === "predictive-econometrics-sustainable-careers"
                        ? "mind-research"
                        : "heart-trung-preservation"
                    }
                    guideline={{
                      vi:
                        project.slug === "cafloop-circular-coffee-husk"
                          ? "Ảnh chụp thực tế vỏ cà phê, chế biến Cascara hoặc bao bì thương mại CAFLOOP."
                          : project.slug === "predictive-econometrics-sustainable-careers"
                          ? "Ảnh phân tích mô hình kinh tế lượng SPSS, bảng số liệu hoặc khảo sát học sinh Đắk Lắk."
                          : "Ảnh trình diễn nhạc cụ dân tộc đàn T'rưng hoặc lớp học truyền dạy âm nhạc Tây Nguyên.",
                      en:
                        project.slug === "cafloop-circular-coffee-husk"
                          ? "Real coffee husk processing photo or commercial CAFLOOP packaging."
                          : project.slug === "predictive-econometrics-sustainable-careers"
                          ? "SPSS econometric model screenshot, regression tables, or survey photo."
                          : "T'rưng performance or classroom workshop photo.",
                    }}
                    aspectRatio="aspect-[16/9] sm:aspect-[21/9]"
                    heightClass="min-h-[260px] sm:min-h-[400px]"
                  />
                </div>

                <div className="flex justify-end">
                  <Link
                    href={`/case-study/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#e74723] hover:underline"
                  >
                    <span>Xem chi tiết Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
