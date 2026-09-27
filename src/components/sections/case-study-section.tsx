import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowUpRight } from "lucide-react";

export function CaseStudySection() {
  const projects = [
    {
      title: "VIRTUAL GYM EXPERIENCE SHOWCASE",
      href: "/case-study/virtual-gym-experience-showcase",
      tags: ["// UX Research", "// App Interface Design", "// Prototyping"],
      image: "/images/antony/GRCsI1zOLMyTjOiJCJu4aOIA9yE.png",
      alt: "Virtual Gym Experience Showcase",
    },
    {
      title: "ELECTRIC MOBILITY EXPERIENCE",
      href: "/case-study/electric-mobility-experience",
      tags: ["// UX Research", "// App Interface Design", "// Prototyping"],
      image: "/images/antony/tkSyO98ImodSNmtLPVp9zliejs.png",
      alt: "Electric Mobility Experience",
    },
    {
      title: "TROPICAL ESCAPE IDENTITY",
      href: "/case-study/tropical-escape-identity",
      tags: ["// Brand Identity", "// Art Direction", "// Digital Experience"],
      image: "/images/antony/su8cOCaIFPkB6haNNxeyF5WWWs.png",
      alt: "Tropical Escape Identity",
    },
  ];

  return (
    <section className="bg-[#0d130d] text-white py-24 sm:py-32 overflow-hidden blueprint-grid-dark">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-[#2c332c]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e74723] flex items-center justify-center shrink-0 shadow-sm text-white">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-white">
              CASE STUDY
            </h2>
          </div>

          <p className="text-base sm:text-lg text-white/60 max-w-sm">
            In-depth looks at how design solved complex product challenges.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-24 sm:space-y-32">
          {projects.map((project, idx) => (
            <div key={idx} className="group">
              {/* Top row: Title and Tags */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#2c332c]/60">
                <Link
                  href={project.href}
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

              {/* Large Image Preview Card */}
              <Link
                href={project.href}
                className="block relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] max-h-[520px] bg-[#1a201a] border border-[#2c332c] shadow-2xl transition-all duration-300 group-hover:border-[#e74723]/50"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Scroll Mouse Icon Indicator */}
        <div className="mt-20 flex flex-col items-center">
          <div className="w-5 h-8 border-2 border-white/60 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/80 rounded-full animate-bounce" />
          </div>
          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-white/60 mt-1" />
        </div>
      </div>
    </section>
  );
}
