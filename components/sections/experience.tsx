"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { experienceData } from "@/lib/data/experience";
import { SectionHead } from "@/components/ui/blueprint";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

/** {{highlighted}} spans become the accent mark. */
const renderHighlight = (text: string) =>
  text.split(/\{\{(.+?)\}\}/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong
        key={i}
        className="font-medium text-[var(--fg)] [box-shadow:inset_0_-0.35em_0_var(--accent-soft)]"
      >
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );

export const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });
  const draw = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    mass: 0.3,
  });

  return (
    <section id="experience" aria-labelledby="experience-title" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto w-full max-w-[1440px] lg:pl-36">
        <SectionHead
          id="experience-title"
          index="04"
          path="lib/data/experience.ts"
          title="Revision history"
          note="Three roles, one continuous thread: education software that has to work on exam day."
        />

        <div ref={ref} className="relative pl-8 md:pl-0">
          {/* drawn scale line */}
          <span
            aria-hidden
            className="absolute left-0 top-0 h-full w-px bg-[var(--line)] md:left-[13.5rem]"
          />
          <motion.span
            aria-hidden
            style={reduced ? { scaleY: 1 } : { scaleY: draw }}
            className="absolute left-0 top-0 h-full w-px origin-top bg-[var(--accent)] md:left-[13.5rem]"
          />

          {experienceData.map((role, i) => {
            const [company, place] = role.subtitle.split("•").map((s) => s.trim());
            return (
              <Reveal key={role.title} delay={i * 0.05}>
                <article className="relative grid gap-6 pb-16 md:grid-cols-[13.5rem_minmax(0,1fr)] md:gap-x-12 md:pb-24">
                  {/* left: date + company, holds position while the bullets scroll */}
                  <div className="md:sticky md:top-28 md:self-start md:pr-10 md:text-right">
                    <p className="u-mono text-[0.75rem] tracking-[0.1em] text-[var(--accent)]">
                      {role.date}
                    </p>
                    <p className="mt-2 font-display text-sm font-medium text-[var(--fg)]">
                      {company}
                    </p>
                    <p className="u-label mt-1.5 text-faint">{place}</p>
                  </div>

                  {/* node marker on the scale */}
                  <span
                    aria-hidden
                    className="absolute -left-[0.3125rem] top-1.5 h-2.5 w-2.5 rotate-45 border border-[var(--accent)] bg-[var(--ink-900)] md:left-[13.1rem]"
                  />

                  <div className="md:pl-10">
                    <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-[var(--fg)] md:text-3xl">
                      {role.title}
                    </h3>
                    <Stagger as="ul" className="mt-6 space-y-3" step={0.05}>
                      {role.highlights.map((h, hi) => (
                        <StaggerItem
                          as="li"
                          key={hi}
                          className="u-measure grid grid-cols-[1.5rem_minmax(0,1fr)] text-sm leading-relaxed text-[var(--fg-muted)] md:text-[0.9375rem]"
                        >
                          <span className="u-mono pt-1 text-[0.625rem] text-[var(--fg-faint)] u-num">
                            {String(hi + 1).padStart(2, "0")}
                          </span>
                          <span>{renderHighlight(h)}</span>
                        </StaggerItem>
                      ))}
                    </Stagger>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
