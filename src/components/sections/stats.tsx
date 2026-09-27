"use client";

import Image from "next/image";
import { CheckCheck } from "lucide-react";

export function Stats() {
  const pills = [
    { name: "Real Estate", bg: "bg-[#181a18] text-white -rotate-6" },
    { name: "Fintech", bg: "bg-white text-black border border-[#d6d6d6] rotate-3" },
    { name: "e-Commerce", bg: "bg-[#1b4322] text-[#34d399] -rotate-3" },
    { name: "Branding", bg: "bg-[#181a18] text-white rotate-6" },
    { name: "Web3", bg: "bg-white text-black border border-[#d6d6d6] -rotate-2" },
    { name: "Medical", bg: "bg-[#e74723] text-white rotate-2" },
    { name: "Law & Attorney", bg: "bg-white text-black border border-[#d6d6d6] -rotate-6" },
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-[#d6d6d6]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e74723] flex items-center justify-center shrink-0 shadow-sm text-white">
              {/* Analytics bar chart icon */}
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3v18h18" />
                <path d="M18 17V9" />
                <path d="M13 17V5" />
                <path d="M8 17v-3" />
              </svg>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-black">
              STATS
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#444444] max-w-sm">
            A quick look at the measurable impact behind Antony’s design journey.
          </p>
        </div>

        {/* 3 Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: 80+ Successful Projects */}
          <div className="relative rounded-3xl border border-[#d6d6d6] bg-[#f5f2eb] blueprint-grid p-8 sm:p-10 flex flex-col justify-between overflow-hidden min-h-[420px] shadow-sm">
            <div>
              <div className="font-anton text-6xl sm:text-7xl text-black leading-none mb-2">
                80+
              </div>
              <div className="text-[#e74723] font-semibold text-base">
                Successful Projects
              </div>
            </div>

            {/* Floating tilted pills cluster */}
            <div className="relative w-full h-48 mt-6 flex flex-wrap gap-2 items-center justify-center p-2">
              {pills.map((pill, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-2 rounded-full text-xs font-semibold shadow-sm transition-transform duration-300 hover:scale-105 cursor-default ${pill.bg}`}
                >
                  {pill.name}
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: 95% Client Satisfaction Rate (Dark Card) */}
          <div className="relative rounded-3xl border border-[#2c332c] bg-[#121612] p-8 sm:p-10 flex flex-col justify-between overflow-hidden min-h-[420px] shadow-md">
            <div>
              <div className="font-anton text-6xl sm:text-7xl text-white leading-none mb-2">
                95%
              </div>
              <div className="text-[#1fc932] font-semibold text-base">
                Client Satisfaction Rate
              </div>
            </div>

            {/* Client Chat simulation */}
            <div className="mt-8 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f0f0f0] border border-white/20 shrink-0 overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/antony/GeQkLZvjwA6BbhPtqTOKIbUMM.png"
                  alt="Client avatar"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>

              <div className="flex-1 space-y-2">
                <div className="inline-block bg-[#222822] text-white/90 text-xs px-3.5 py-2 rounded-2xl rounded-tl-sm">
                  Hi, Antony
                </div>
                <div className="bg-[#222822] text-white/90 text-xs sm:text-sm px-4 py-3 rounded-2xl leading-relaxed">
                  Huge thanks for the effort. You totally exceeded my expectations!
                  <div className="flex items-center gap-1 text-[10px] text-[#1fc932] font-mono mt-1.5 justify-end">
                    <CheckCheck className="w-3.5 h-3.5" />
                    <span>5m ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: 06+ Years of Experience */}
          <div className="relative rounded-3xl border border-[#d6d6d6] bg-[#f5f2eb] blueprint-grid p-8 sm:p-10 flex flex-col justify-between overflow-hidden min-h-[420px] shadow-sm">
            <div>
              <div className="font-anton text-6xl sm:text-7xl text-black leading-none mb-2">
                06+
              </div>
              <div className="text-[#e74723] font-semibold text-base">
                Years of Experience
              </div>
            </div>

            {/* Speedometer Gauge Graphic */}
            <div className="relative w-full flex flex-col items-center justify-end pt-4 pb-2">
              <div className="relative w-48 h-28 overflow-hidden flex justify-center items-end">
                {/* SVG Dial Arc */}
                <svg
                  className="w-48 h-48 absolute -bottom-0"
                  viewBox="0 0 200 200"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="none"
                    stroke="#e0ded6"
                    strokeWidth="12"
                    strokeDasharray="267 267"
                    transform="rotate(180 100 100)"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="none"
                    stroke="#e74723"
                    strokeWidth="12"
                    strokeDasharray="180 267"
                    transform="rotate(180 100 100)"
                  />
                </svg>

                {/* Dial numbers */}
                <div className="absolute inset-x-0 bottom-4 flex justify-between px-3 text-[11px] font-mono font-medium text-[#777]">
                  <span>03</span>
                  <span>04</span>
                  <span>05</span>
                  <span className="text-[#e74723] font-bold text-sm -mt-2">06</span>
                  <span>07</span>
                  <span>08</span>
                  <span>09</span>
                </div>

                {/* Needle */}
                <div className="relative z-10 flex flex-col items-center -bottom-1">
                  <div className="w-0.5 h-16 bg-[#e74723] rounded-full shadow-sm" />
                  <div className="w-4 h-4 rounded-full bg-black border-2 border-white -mt-1 shadow" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Mouse Icon Indicator */}
        <div className="mt-14 flex flex-col items-center">
          <div className="w-5 h-8 border-2 border-black rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-black rounded-full animate-bounce" />
          </div>
          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-black mt-1" />
        </div>
      </div>
    </section>
  );
}
