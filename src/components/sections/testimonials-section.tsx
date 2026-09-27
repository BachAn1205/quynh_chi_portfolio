import Image from "next/image";
import { MessageSquare, Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Daniel Carter",
      role: "Founder of Flowbit",
      quote:
        "Antony transformed our concept into a product that’s intuitive and visually striking. His attention to detail is unmatched.",
      avatar: "/images/antony/bGAtZNi3tiQ4rG2sry01yv1bQoE.png",
      rating: 5,
    },
    {
      name: "Michael Reeves",
      role: "PM at NexaLabs",
      quote:
        "Working with Antony elevated our entire design system. The speed, craft, and clear communication made the project seamless.",
      avatar: "/images/antony/JHIkiomqUxRNi0VEAeFjTMFRJXg.png",
      rating: 5,
    },
    {
      name: "Sarah Jenkins",
      role: "Head of Product at PulseTech",
      quote:
        "Antony has an extraordinary eye for digital aesthetics and functional usability. He exceeded our expectations in every milestone.",
      avatar: "/images/antony/pd795bR34H9CSKKR7dW265jmg.png",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-[#d6d6d6]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e74723] flex items-center justify-center shrink-0 shadow-sm text-white">
              <MessageSquare className="w-6 h-6 fill-white/20" />
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-black">
              TESTIMONIALS
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#444444] max-w-sm">
            Hear from those who’ve experienced Antony’s design expertise firsthand.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-[#d6d6d6] bg-[#f5f2eb] blueprint-grid p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:border-[#b8b8b8] transition-all duration-300"
            >
              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-6 text-[#e74723]">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base sm:text-lg text-black font-normal leading-relaxed mb-8 italic">
                “{t.quote}”
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#d6d6d6]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-black/10 shrink-0 border border-[#d6d6d6]">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-anton text-lg uppercase text-black leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#666666] font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
