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
  prevSub?: string;
  dark?: boolean;
}

export function PageNav({ nextHref, nextLabel, nextSub, prevHref, prevLabel, prevSub, dark }: PageNavProps) {
  const { t } = useLanguage();
  const borderColor = dark ? "border-[#1B3B2B]/40" : "border-[#1B3B2B]/15";
  const prevTextColor = dark ? "text-white/60 hover:text-white" : "text-[#242220]/60 hover:text-[#7B0323]";

  return (
    <div className={`w-full border-t ${borderColor} mt-0`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex items-center justify-between gap-4">
        {/* Prev */}
        {prevHref && prevLabel ? (
          <div className="shrink-0">
            <Link
              href={prevHref}
              className={`inline-flex items-center gap-2 text-xs font-mono font-semibold transition-colors group ${prevTextColor}`}
            >
              <ArrowRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
              <span className="uppercase tracking-wide">
                {prevLabel}
                {prevSub && <span className="opacity-70 font-normal hidden sm:inline"> • {prevSub}</span>}
              </span>
            </Link>
          </div>
        ) : (
          <div />
        )}

        {/* Next CTA - Luôn lệch qua ngoài cùng bên phải */}
        <div className="ml-auto flex justify-end shrink-0">
          <Link
            href={nextHref}
            className="inline-flex items-center gap-3 px-5 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#7B0323] text-[#FFFFFF] hover:bg-[#5E021A] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group cursor-pointer"
          >
            <div className="text-left">
              <div className="text-[10px] font-mono text-white/70 uppercase tracking-widest mb-0.5">
                {t("pagenav.upnext")}
              </div>
              <div className="text-sm font-semibold leading-none flex items-center gap-2">
                <span>{nextLabel}</span>
                {nextSub && (
                  <span className="text-white/70 text-xs font-normal hidden sm:inline">• {nextSub}</span>
                )}
              </div>
            </div>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
