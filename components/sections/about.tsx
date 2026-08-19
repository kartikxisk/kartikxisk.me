"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { aboutFacts, aboutIntro, aboutStats } from "@/lib/data/about";
import { workSystems, workTotals } from "@/lib/data/work";
import { articles } from "@/lib/data/writing";
import { siteConfig } from "@/lib/data/site";
import { ArrowUpRight } from "lucide-react";
import { DimBracket, Rule, SectionHead } from "@/components/ui/blueprint";
import { Parallax, Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const SystemRow = ({
  system,
  index,
}: {
  system: (typeof workSystems)[number];
  index: number;
}) => {
  const [open, setOpen] = useState(false);
  const panelId = `system-${index}-detail`;

  return (
    <StaggerItem as="li" className="border-b border-[var(--line)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group grid min-h-11 w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 gap-y-1 py-4 text-left md:grid-cols-[3rem_minmax(0,18rem)_minmax(0,1fr)_5.5rem_7rem]"
      >
        <span className="u-mono text-[0.625rem] tracking-[0.2em] text-[var(--fg-faint)] u-num">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="font-display text-base font-medium text-[var(--fg)] transition-colors group-hover:text-[var(--accent)] md:text-lg">
          {system.name}
        </span>

        <span className="u-label col-start-2 md:col-start-3 md:text-[0.6875rem]">
          {system.kind}
        </span>

        <span className="u-mono hidden justify-self-end text-[0.75rem] text-[var(--fg-muted)] u-num md:block">
          {system.commits.toLocaleString("en-IN")}
        </span>

        <span className="u-mono col-start-3 row-start-1 justify-self-end text-[0.6875rem] text-[var(--fg-faint)] md:col-start-5 md:row-auto">
          {system.years}
        </span>

        <Plus
          aria-hidden
          className={cn(
            "col-start-3 row-start-2 h-3.5 w-3.5 justify-self-end text-[var(--fg-faint)] transition-transform duration-300 md:hidden",
            open && "rotate-45"
          )}
        />
      </button>

      <motion.div
        id={panelId}
        role="region"
        aria-label={`${system.name} detail`}
        inert={!open}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="pb-5 md:grid md:grid-cols-[3rem_minmax(0,1fr)] md:gap-x-4">
          <span aria-hidden className="hidden md:block" />
          <div>
            <p className="u-measure text-sm leading-relaxed text-[var(--fg-muted)]">
              {system.summary}
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              {system.stack.map((tech) => (
                <li key={tech} className="u-mono text-[0.6875rem] text-[var(--fg-faint)]">
                  {tech}
                </li>
              ))}
              <li className="u-mono text-[0.6875rem] text-[var(--accent)] md:hidden">
                {system.commits.toLocaleString("en-IN")} commits
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </StaggerItem>
  );
};

export const About = () => {
  return (
    <section id="about" aria-labelledby="about-title" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto w-full max-w-[1440px] lg:pl-36">
        <SectionHead
          id="about-title"
          index="02"
          path="lib/data/about.ts"
          title="What I actually build"
        />

        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <Reveal>
              <p className="u-measure text-xl leading-[1.55] text-[var(--fg)] md:text-2xl md:leading-[1.5]">
                {aboutIntro[0]}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="u-measure mt-7 text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
                {aboutIntro[1]}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="u-measure mt-5 text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
                {aboutIntro[2]}
              </p>
            </Reveal>
          </div>

          {/* legend — offset down so the columns are not symmetrical */}
          <Parallax distance={26} className="lg:pt-16">
            <Reveal delay={0.12}>
              <dl className="border-t border-[var(--line-strong)]">
                {aboutFacts.map((fact) => (
                  <div
                    key={fact.k}
                    className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 border-b border-[var(--line)] py-3.5"
                  >
                    <dt className="u-label pt-0.5 text-faint">{fact.k}</dt>
                    <dd className="u-mono text-[0.8125rem] leading-snug text-[var(--fg)]">
                      {fact.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </Parallax>
        </div>

        {/* measured stats */}
        <Stagger className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 md:mt-28 md:grid-cols-4">
          {aboutStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <DimBracket value={stat.value} label={stat.label} />
              {stat.note && (
                <p className="u-mono mt-1.5 text-[0.6875rem] text-[var(--fg-faint)]">
                  {stat.note}
                </p>
              )}
            </StaggerItem>
          ))}
        </Stagger>

        {/* systems shipped at work */}
        <div className="mt-24 md:mt-36">
          <Rule note={`${workTotals.systems} systems · ${workTotals.commits.toLocaleString("en-IN")} commits`} />
          <Reveal>
            <h3 className="mt-8 font-display text-2xl font-medium tracking-[-0.03em] text-[var(--fg)] md:text-3xl">
              Systems running in production
            </h3>
            <p className="u-measure mt-3 text-sm leading-relaxed text-[var(--fg-muted)] md:text-base">
              Employer products I contributed to between 2022 and 2026. Commit
              counts are my own commits in each repository — tap a row for what
              it does and what it runs on.
            </p>
          </Reveal>

          <Stagger as="ul" className="mt-10 border-t border-[var(--line-strong)]" step={0.05}>
            {workSystems.map((system, i) => (
              <SystemRow key={system.name} system={system} index={i} />
            ))}
          </Stagger>
        </div>

        {/* writing */}
        <div className="mt-24 md:mt-36">
          <Rule note="published writing" />
          <Reveal>
            <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
              <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-[var(--fg)] md:text-3xl">
                Notes I have written up
              </h3>
              <a
                href={siteConfig.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="u-label tap-44 flex items-center gap-2 text-[var(--fg-muted)] transition-colors hover:text-[var(--accent)]"
              >
                All posts on Medium
                <span className="sr-only">— opens in a new tab</span>
                <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>

          <Stagger as="ul" className="mt-8 border-t border-[var(--line-strong)]" step={0.05}>
            {articles.map((article) => (
              <StaggerItem as="li" key={article.url} className="border-b border-[var(--line)]">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid min-h-11 items-baseline gap-x-6 gap-y-1 py-4 md:grid-cols-[minmax(0,1fr)_8rem_5.5rem]"
                >
                  <span className="text-base leading-snug text-[var(--fg)] transition-colors group-hover:text-[var(--accent)] md:text-lg">
                    {article.title}
                    <span className="sr-only">— opens in a new tab</span>
                  </span>
                  <span className="u-label text-faint">{article.topic}</span>
                  <span className="u-mono text-[0.75rem] text-[var(--fg-muted)] md:justify-self-end">
                    {article.date}
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
};
