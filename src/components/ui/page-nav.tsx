"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

interface PageNavProps {
  nextHref: string;
  nextLabel: string;
  nextSub?: string;
  prevHref?: string;
  prevLabel?: string;
  dark?: boolean;
}

export function PageNav({ nextHref, nextLabel, nextSub, prevHref, prevLabel, dark }: PageNavProps) {
  const { t } = useLanguage();
  const borderColor = dark ? "border-[#335C33]/40" : "border-[#335C33]/15";
  const prevTextColor = dark ? "text-white/50 hover:text-white/80" : "text-[#2C2E2B]/60 hover:text-[#2C2E2B]";

  return (
    <div className={`max-w-6xl mx-auto px-4 py-14 flex flex-col sm:flex-row items-center justify-between gap-6 border-t ${borderColor} mt-0`}>
      {/* Prev */}
      <div className="flex-1">
        {prevHref && prevLabel && (
          <Link
            href={prevHref}
            className={`inline-flex items-center gap-2 text-xs font-mono font-semibold transition-colors group ${prevTextColor}`}
          >
            <ArrowRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            <span className="uppercase tracking-wide">{prevLabel}</span>
          </Link>
        )}
      </div>

      {/* Next CTA */}
      <Link
        href={nextHref}
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#335C33] text-[#F6F6EE] hover:bg-[#284828] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
      >
        <div className="text-left">
          <div className="text-[10px] font-mono text-white/60 uppercase tracking-widest mb-0.5">
            {t("pagenav.upnext")}
          </div>
          <div className="text-sm font-semibold leading-none flex items-center gap-2">
            {nextLabel}
            {nextSub && (
              <span className="text-white/60 text-xs font-normal hidden sm:inline">. {nextSub}</span>
            )}
          </div>
        </div>
        <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
