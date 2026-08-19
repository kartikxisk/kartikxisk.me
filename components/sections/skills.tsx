"use client";
import {
  Accessibility,
  Boxes,
  Bug,
  Building2,
  BookOpen,
  Code2,
  Component,
  FileCode,
  Gauge,
  GraduationCap,
  HardDrive,
  KeyRound,
  Layers,
  Monitor,
  MonitorCheck,
  Search,
  ShieldCheck,
  Users,
  Webhook,
} from "lucide-react";
import {
  deviconMap,
  lucideSkillIconMap,
  skillCategories,
} from "@/lib/data/skills";
import { SectionHead } from "@/components/ui/blueprint";
import { Reveal, ScrollStrip, Stagger, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const fallbackIcons: Record<string, React.ReactNode> = {
  Gauge: <Gauge className="h-3.5 w-3.5" />,
  Monitor: <Monitor className="h-3.5 w-3.5" />,
  Search: <Search className="h-3.5 w-3.5" />,
  Webhook: <Webhook className="h-3.5 w-3.5" />,
  Users: <Users className="h-3.5 w-3.5" />,
  Bug: <Bug className="h-3.5 w-3.5" />,
  HardDrive: <HardDrive className="h-3.5 w-3.5" />,
  GraduationCap: <GraduationCap className="h-3.5 w-3.5" />,
  FileCode: <FileCode className="h-3.5 w-3.5" />,
  BookOpen: <BookOpen className="h-3.5 w-3.5" />,
  Building2: <Building2 className="h-3.5 w-3.5" />,
  Layers: <Layers className="h-3.5 w-3.5" />,
  ShieldCheck: <ShieldCheck className="h-3.5 w-3.5" />,
  Component: <Component className="h-3.5 w-3.5" />,
  Boxes: <Boxes className="h-3.5 w-3.5" />,
  KeyRound: <KeyRound className="h-3.5 w-3.5" />,
  Accessibility: <Accessibility className="h-3.5 w-3.5" />,
  MonitorCheck: <MonitorCheck className="h-3.5 w-3.5" />,
};

const SkillIcon = ({ skill }: { skill: string }) => {
  const devicon = deviconMap[skill];
  if (devicon)
    return <i aria-hidden className={cn(devicon, "text-base leading-none opacity-80")} />;

  const fallback = lucideSkillIconMap[skill];
  return (
    <span aria-hidden className="text-[var(--fg-faint)]">
      {(fallback && fallbackIcons[fallback]) ?? <Code2 className="h-3.5 w-3.5" />}
    </span>
  );
};

const allSkills = skillCategories.flatMap((c) => c.skills);

const Ticker = ({ items, travel }: { items: string[]; travel: number }) => (
  <ScrollStrip travel={travel} className="border-y border-[var(--line)] py-3">
    {items.map((skill, i) => (
      <span
        key={`${skill}-${i}`}
        className="u-mono flex shrink-0 items-center gap-2 whitespace-nowrap px-4 text-[0.75rem] text-[var(--fg-faint)]"
      >
        <span className="h-1 w-1 rounded-full bg-[var(--accent)] opacity-70" />
        {skill}
      </span>
    ))}
  </ScrollStrip>
);

export const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto w-full max-w-[1440px] lg:pl-36">
        <SectionHead
          id="skills-title"
          index="03"
          path="lib/data/skills.ts"
          title="Parts list"
          note="Everything here is in something I have shipped — not a list of things I have read about. Grouped the way I actually reach for them."
        />
      </div>

      {/* scroll-driven tickers, opposite directions */}
      <div className="my-4 space-y-px">
        <Ticker items={allSkills} travel={220} />
        <Ticker items={[...allSkills].reverse()} travel={-220} />
      </div>

      <div className="mx-auto mt-16 w-full max-w-[1440px] md:mt-24 lg:pl-36">
        <div className="border-t border-[var(--line-strong)]">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.04}>
              <div
                className={cn(
                  "grid gap-y-5 border-b border-[var(--line)] py-8 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:gap-x-12 md:py-10",
                  // asymmetric: alternate bands sit inset from the left rule
                  i % 2 === 1 && "md:pl-12"
                )}
              >
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="u-mono text-[0.625rem] tracking-[0.2em] text-[var(--accent)]">
                      {category.code}
                    </span>
                    <span className="u-mono text-[0.625rem] text-[var(--fg-faint)] u-num">
                      {String(category.skills.length).padStart(2, "0")} items
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-medium tracking-[-0.03em] text-[var(--fg)]">
                    {category.title}
                  </h3>
                  <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-[var(--fg-muted)]">
                    {category.note}
                  </p>
                </div>

                <Stagger as="ul" className="flex flex-wrap gap-x-2 gap-y-2 md:items-start" step={0.03}>
                  {category.skills.map((skill) => (
                    <StaggerItem
                      as="li"
                      key={skill}
                      className="group flex items-center gap-2 border border-[var(--line)] px-3 py-2 transition-colors duration-200 hover:border-[var(--accent-line)]"
                    >
                      <SkillIcon skill={skill} />
                      <span className="u-mono text-[0.75rem] text-[var(--fg-muted)] transition-colors group-hover:text-[var(--fg)]">
                        {skill}
                      </span>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
