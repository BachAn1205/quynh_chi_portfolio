"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What’s your typical design process like?",
      answer:
        "I follow a clear process that starts with understanding your goals, then moves through wireframing, visual design, and final delivery with your feedback at every step.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Timelines depend on scope, but a standard branding or website design takes about 2 to 4 weeks from kickoff to handover.",
    },
    {
      question: "Do you also offer development or only design?",
      answer:
        "I specialize in UI/UX and product design, but I also build production-ready sites in Framer and Next.js, or collaborate directly with your engineering team.",
    },
    {
      question: "What tools do you use for your design work?",
      answer:
        "I work primarily with Figma, Framer, Blender, and Adobe Creative Suite to craft end-to-end design experiences.",
    },
    {
      question: "Can you redesign my existing website instead of starting from scratch?",
      answer:
        "Yes, I regularly audit and redesign existing products to optimize conversion, accessibility, and modern aesthetic standards.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Scroll Mouse Icon Indicator */}
        <div className="mb-14 flex flex-col items-center">
          <div className="w-5 h-8 border-2 border-black rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-black rounded-full animate-bounce" />
          </div>
          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-black mt-1" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-[#d6d6d6]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e74723] flex items-center justify-center shrink-0 shadow-sm text-white">
              <HelpCircle className="w-6 h-6 fill-white/20" />
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-black">
              FAQ
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#444444] max-w-sm">
            Answers to the most common questions about my design process and services.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#d6d6d6] bg-[#f5f2eb] overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-base sm:text-lg font-semibold text-black">
                    {faq.question}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#e74723] shrink-0">
                    {isOpen ? (
                      <>
                        <span>Collapse</span>
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <span>Expand</span>
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#555555] leading-relaxed border-t border-[#e2ded6]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
