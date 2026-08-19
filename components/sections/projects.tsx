"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { projectsData, projectTabs, type Project, type ProjectType } from "@/lib/data/projects";
import { CornerMarks, SectionHead } from "@/components/ui/blueprint";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/** One plan sheet. Cards stack on scroll: each pins, the one below slides over it. */
const ProjectSheet = ({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 12%", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  // dim with an opaque overlay, not element opacity — a translucent card
  // would let the sheet stacked underneath show through.
  const dim = useTransform(scrollYProgress, [0, 0.9], [0, 0.72]);

  return (
    <div
      ref={ref}
      className="md:sticky"
      style={{ top: `calc(6.5rem + ${index * 0.85}rem)` }}
    >
      <motion.article
        style={reduced ? undefined : { scale }}
        className="group relative mb-6 overflow-hidden border border-[var(--line)] bg-[var(--ink-850)] md:mb-10"
      >
        <CornerMarks />
        {!reduced && (
          <motion.span
            aria-hidden
            style={{ opacity: dim }}
            className="pointer-events-none absolute inset-0 z-20 bg-[var(--ink-900)]"
          />
        )}

        {/* title block */}
        <header className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-[var(--line)] px-5 py-3.5 md:px-7">
          <span className="u-mono text-[0.625rem] tracking-[0.2em] text-[var(--accent)] u-num">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <h3 className="font-display text-lg font-medium tracking-[-0.02em] text-[var(--fg)]">
            {project.title}
          </h3>
          <span className="u-label text-faint">
            {project.type === "portfolio" ? "Company site" : "Application"}
          </span>
          <span aria-hidden className="bp-leader hidden h-px flex-1 opacity-40 sm:block" />
          <div className="ml-auto flex items-center gap-2">
            {project.gitUrl && (
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source on GitHub`}
                className="tap-44 flex items-center justify-center border border-[var(--line-interactive)] text-[var(--fg-muted)] transition-colors hover:border-[var(--accent-line)] hover:text-[var(--accent)]"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="u-label tap-44 flex items-center gap-1.5 border border-[var(--line-interactive)] px-4 text-[var(--fg-muted)] transition-colors hover:border-[var(--accent-line)] hover:text-[var(--accent)]"
              >
                <span className="sr-only">Visit {project.title} — opens in a new tab</span>
                <span aria-hidden>Visit</span>
                <ArrowUpRight aria-hidden className="h-3 w-3" />
              </a>
            )}
          </div>
        </header>

        <div className="grid gap-0 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          {/* viewport */}
          {project.image && (
            <div className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--ink-900)] md:border-b-0 md:border-r">
              <Image
                src={project.image}
                alt={`${project.title} — ${project.subtitle}`}
                width={1600}
                height={900}
                sizes="(max-width: 768px) 100vw, 55vw"
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] md:aspect-auto md:h-full md:min-h-[20rem]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, var(--ink-900) 100%)",
                  opacity: 0.4,
                }}
              />
            </div>
          )}

          {/* spec */}
          <div className="flex flex-col gap-6 p-5 md:p-7">
            <p className="u-label border-b border-[var(--line)] pb-4 text-[var(--fg-muted)]">
              {project.subtitle}
            </p>
            <p className="u-measure -mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
              {project.description}
            </p>

            <div>
              <p className="u-label mb-3 text-faint">Build notes</p>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="grid grid-cols-[1rem_minmax(0,1fr)] items-baseline text-sm text-[var(--fg)]"
                  >
                    <span aria-hidden className="h-px w-2.5 translate-y-[-0.3em] bg-[var(--accent)]" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto border-t border-[var(--line)] pt-4">
              <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
                {project.tech.map((tech) => (
                  <li key={tech} className="u-mono text-[0.6875rem] text-[var(--fg-faint)]">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectType | "all">("all");
  const filtered =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.type === activeTab);

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto w-full max-w-[1440px] lg:pl-36">
        <SectionHead
          id="projects-title"
          index="05"
          path="lib/data/projects.ts"
          title="Selected sheets"
          note="Client and personal builds, most recent first. Each sheet pins while you read it."
        />

        {/* segmented filter — square, mono, no pills */}
        <div className="mb-12 flex flex-wrap items-center gap-3">
          <span className="u-label text-faint">Filter</span>
          <div className="flex border border-[var(--line-interactive)]">
            {projectTabs.map((tab) => {
              const isActive = activeTab === tab.value;
              const count =
                tab.value === "all"
                  ? projectsData.length
                  : projectsData.filter((p) => p.type === tab.value).length;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveTab(tab.value)}
                  aria-pressed={isActive}
                  className={cn(
                    "u-mono flex min-h-11 items-center gap-2 border-r border-[var(--line-interactive)] px-4 text-[0.6875rem] uppercase tracking-[0.16em] transition-colors last:border-r-0",
                    isActive
                      ? "bg-[var(--accent)] text-[var(--ink-900)]"
                      : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                  )}
                >
                  {tab.label}
                  <span className="u-num opacity-60">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <Reveal>
          <div className="relative">
            {filtered.map((project, i) => (
              <ProjectSheet
                key={project.title}
                project={project}
                index={i}
                total={filtered.length}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
