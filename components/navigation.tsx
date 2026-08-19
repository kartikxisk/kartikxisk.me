"use client";
import { motion, useScroll, useSpring } from "motion/react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { navItems, sheetNo } from "@/lib/data/navigation";
import { useActiveSection } from "@/lib/hooks/use-active-section";

/**
 * Left dimension rail (desktop) + sheet index bar (mobile).
 * Doubles as scroll progress: the rail fills as the page is read.
 */
export const Navigation = () => {
  const ids = useMemo(() => navItems.map((i) => i.href.slice(1)), []);
  const active = useActiveSection(ids);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <>
      {/* desktop rail */}
      <nav
        aria-label="Sections"
        className="pointer-events-none fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      >
        <div className="relative flex flex-col gap-1 pl-5">
          {/* rail line + progress fill */}
          <span
            aria-hidden
            className="absolute left-0 top-0 h-full w-px bg-[var(--line)]"
          />
          <motion.span
            aria-hidden
            style={{ scaleY: progress }}
            className="absolute left-0 top-0 h-full w-px origin-top bg-[var(--accent)]"
          />

          {navItems.map((item, i) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className="group pointer-events-auto flex min-h-11 items-center gap-3 py-1"
              >
                <span
                  aria-hidden
                  className={cn(
                    "-ml-5 h-px transition-all duration-300",
                    isActive
                      ? "w-5 bg-[var(--accent)]"
                      : "w-2.5 bg-[var(--line-strong)] group-hover:w-4"
                  )}
                />
                <span
                  className={cn(
                    "u-mono text-[0.625rem] tracking-[0.2em] transition-colors duration-300",
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--fg-faint)] group-hover:text-[var(--fg)]"
                  )}
                >
                  {sheetNo(i)}
                </span>
                <span
                  className={cn(
                    "u-label whitespace-nowrap transition-all duration-300 text-faint",
                    isActive
                      ? "translate-x-0 text-[var(--fg)] opacity-100"
                      : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  )}
                >
                  {item.title}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* mobile index bar */}
      <nav
        aria-label="Sections, compact"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[var(--ink-900)]/92 backdrop-blur lg:hidden"
      >
        <motion.span
          aria-hidden
          style={{ scaleX: progress }}
          className="block h-px origin-left bg-[var(--accent)]"
        />
        <ul className="no-bar flex items-center gap-1 overflow-x-auto px-3 py-2">
          {navItems.map((item, i) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href} className="shrink-0">
                <a
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "u-mono flex min-h-11 shrink-0 items-center gap-1.5 whitespace-nowrap border px-3 text-[0.6875rem] tracking-[0.12em] uppercase transition-colors",
                    isActive
                      ? "border-[var(--accent-line)] text-[var(--accent)]"
                      : "border-transparent text-[var(--fg-faint)]"
                  )}
                >
                  <span className="u-num opacity-60">{sheetNo(i)}</span>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
