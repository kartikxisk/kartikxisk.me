"use client";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data/site";
import { StatusStamp } from "@/components/ui/blueprint";

/** Drawing title block, pinned to the top of the sheet. */
export const SiteHeader = () => {
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setCondensed(v > 80));

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        condensed
          ? "border-[var(--line)] bg-[var(--ink-900)]/88 backdrop-blur"
          : "border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-5 py-3 md:px-10">
        <a href="#home" className="group flex min-h-11 items-center gap-3">
          <span className="font-display text-sm font-semibold tracking-[-0.02em] text-[var(--fg)]">
            {siteConfig.name}
          </span>
          <span className="u-label hidden sm:inline text-faint">{siteConfig.role}</span>
        </a>

        <span aria-hidden className="bp-leader h-px flex-1 opacity-40" />

        {siteConfig.availability.open && condensed && (
          <StatusStamp label={siteConfig.availability.label} className="hidden md:inline-flex" />
        )}

        <a
          href={`mailto:${siteConfig.email}`}
          className="u-label tap-44 flex items-center border border-[var(--accent-line)] px-4 text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--ink-900)] active:translate-y-px"
        >
          Hire me
        </a>
      </div>
    </motion.header>
  );
};
