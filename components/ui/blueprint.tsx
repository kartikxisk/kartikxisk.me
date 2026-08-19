import { cn } from "@/lib/utils";
import React from "react";

/** Crop marks at the four corners of a panel — drafting sheet registration. */
export const CornerMarks = ({ className }: { className?: string }) => (
  <span aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
    <span className="absolute -left-px -top-px h-2 w-2 border-l border-t border-[var(--line-strong)]" />
    <span className="absolute -right-px -top-px h-2 w-2 border-r border-t border-[var(--line-strong)]" />
    <span className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-[var(--line-strong)]" />
    <span className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-[var(--line-strong)]" />
  </span>
);

/**
 * Flat drafting panel. No glow, no blur, no shadow — depth comes from the
 * hairline border and the grid showing through.
 */
export const Panel = ({
  children,
  className,
  label,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
  as?: React.ElementType;
}) => (
  <Tag
    className={cn(
      "relative border border-[var(--line)] bg-[var(--ink-850)]/70 backdrop-blur-[2px]",
      className
    )}
  >
    <CornerMarks />
    {label && (
      <span className="u-label absolute -top-2 left-4 bg-[var(--ink-900)] px-2 text-[var(--fg-faint)]">
        {label}
      </span>
    )}
    {children}
  </Tag>
);

/** Dashed rule with an optional right-hand annotation. */
export const Rule = ({ note, className }: { note?: string; className?: string }) => (
  <div className={cn("flex items-center gap-4", className)}>
    <span aria-hidden className="bp-leader h-px flex-1 opacity-60" />
    {note && <span className="u-label shrink-0 text-faint">{note}</span>}
  </div>
);

/**
 * Dimension bracket: |—— value ——|
 * Used for stats so numbers read as measurements, not marketing counters.
 */
export const DimBracket = ({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) => (
  <div className={cn("group relative", className)}>
    <div className="flex items-center gap-2" aria-hidden>
      <span className="h-3 w-px bg-[var(--line-strong)]" />
      <span className="bp-leader h-px flex-1 opacity-70 transition-opacity group-hover:opacity-100" />
      <span className="h-3 w-px bg-[var(--line-strong)]" />
    </div>
    <div className="mt-3 font-display text-4xl leading-none tracking-tight text-[var(--fg)] u-num md:text-5xl">
      {value}
    </div>
    <div className="u-label mt-2 text-faint">{label}</div>
  </div>
);

/** Live availability stamp. */
export const StatusStamp = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => (
  <span
    className={cn(
      "u-label inline-flex items-center gap-2 border border-[var(--line-strong)] px-2.5 py-1.5 text-[var(--fg-muted)]",
      className
    )}
  >
    <span aria-hidden className="relative flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--live)] opacity-70" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--live)]" />
    </span>
    {label}
  </span>
);

/**
 * Section header, drawing-sheet style: index, source path, title, note.
 * Left-aligned by design — the old centered pill+title pattern is gone.
 */
export const SectionHead = ({
  id,
  index,
  path,
  title,
  note,
  className,
}: {
  /** Heading id, so the parent section can use aria-labelledby. */
  id?: string;
  index: string;
  path: string;
  title: string;
  note?: string;
  className?: string;
}) => (
  <header className={cn("mb-12 md:mb-16", className)}>
    <div className="flex items-baseline gap-4">
      <span aria-hidden className="u-label text-[var(--accent)]">{index}</span>
      <span className="u-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--fg-faint)]">
        {path}
      </span>
      <span aria-hidden className="bp-leader h-px flex-1 opacity-50" />
    </div>
    <h2 id={id} className="mt-5 font-display text-4xl font-medium tracking-[-0.04em] text-[var(--fg)] md:text-6xl">
      {title}
    </h2>
    {note && (
      <p className="u-measure mt-4 text-sm leading-relaxed text-[var(--fg-muted)] md:text-base">
        {note}
      </p>
    )}
  </header>
);

/** Accent mark for inline emphasis — replaces the old rainbow gradient text. */
export const Mark = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={cn(
      "text-[var(--fg)] [box-shadow:inset_0_-0.35em_0_var(--accent-soft)]",
      className
    )}
  >
    {children}
  </span>
);

/** Page shell: drafting grid + edge rulers + vignette. */
export const Sheet = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("relative min-h-dvh bg-[var(--ink-900)]", className)}>
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="bp-grid absolute inset-0 opacity-90" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(125% 85% at 50% 0%, transparent 55%, var(--ink-900) 100%)",
        }}
      />
      {/* top ruler */}
      <div className="bp-tick absolute inset-x-0 top-0 h-2 opacity-40" />
    </div>
    <div className="relative z-10">{children}</div>
  </div>
);
