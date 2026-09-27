import Image from "next/image";
import { Zap } from "lucide-react";

export function CapabilitiesSection() {
  const capabilities = [
    {
      title: "Branding",
      image: "/images/antony/hHv5XpuyTJ1TFxZCZXoXNlnhtj0.png",
      alt: "Branding Design Work",
    },
    {
      title: "Website",
      image: "/images/antony/emmKkc4zHIHVsXJQJsBz0NLRL3s.png",
      alt: "Website Design Work",
    },
    {
      title: "App",
      image: "/images/antony/CgAmbjyaMnrdLeVNFmq2dixJc.png",
      alt: "App UI/UX Design Work",
    },
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-[#d6d6d6]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e74723] flex items-center justify-center shrink-0 shadow-sm text-white">
              <Zap className="w-6 h-6 fill-white" />
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-black">
              CAPABILITIES
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#444444] max-w-sm">
            Here’s how I help businesses bring their ideas to life through design.
          </p>
        </div>

        {/* 3 Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-[#d6d6d6] bg-[#f5f2eb] blueprint-grid p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-sm hover:border-[#b8b8b8] transition-all duration-300"
            >
              {/* Graphic container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/5 mb-5 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <div className="text-center pb-2">
                <span className="font-sans text-base sm:text-lg font-semibold text-black group-hover:text-[#e74723] transition-colors">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
