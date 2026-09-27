import { Trophy } from "lucide-react";

export function AwardsSection() {
  const awards = [
    {
      title: "BEST UI/UX DESIGNER OF THE YEAR",
      organization: "Awarded by Design Excellence Awards",
      year: "2024",
    },
    {
      title: "TOP PRODUCT DESIGN AWARD",
      organization: "Recognized by Global UX Summit",
      year: "2023",
    },
    {
      title: "INNOVATION IN INTERACTION DESIGN",
      organization: "Honored by Digital Creators Conference",
      year: "2022",
    },
    {
      title: "MOBILE EXPERIENCE OF THE YEAR",
      organization: "Presented by App Design Awards",
      year: "2021",
    },
    {
      title: "CREATIVE EXCELLENCE IN WEB DESIGN",
      organization: "Recognized by Web Innovators Forum",
      year: "2020",
    },
  ];

  return (
    <section className="bg-[#0d130d] text-white py-24 sm:py-32 overflow-hidden blueprint-grid-dark">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-[#2c332c]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e74723] flex items-center justify-center shrink-0 shadow-sm text-white">
              <Trophy className="w-6 h-6" />
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-white">
              AWARDS
            </h2>
          </div>

          <p className="text-base sm:text-lg text-white/60 max-w-sm">
            Where ideas meet industry recognition across meaningful digital experiences.
          </p>
        </div>

        {/* Awards Rows List */}
        <div className="divide-y divide-[#2c332c]">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="py-8 sm:py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group transition-colors duration-200 hover:bg-white/[0.02] px-4 -mx-4 rounded-xl"
            >
              <div>
                <h3 className="font-anton text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white group-hover:text-[#e74723] transition-colors leading-tight">
                  {award.title}
                </h3>
                <p className="text-sm text-white/60 mt-1">
                  {award.organization}
                </p>
              </div>

              <div className="font-anton text-4xl sm:text-5xl text-white/90 group-hover:text-[#e74723] transition-colors shrink-0">
                {award.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
