"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { RevealWords } from "@/components/ui/reveal";
import { Rule, StatusStamp } from "@/components/ui/blueprint";

/** Pointer crosshair with a live coordinate readout — drafting-cursor feel. */
const Crosshair = ({ container }: { container: React.RefObject<HTMLElement | null> }) => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  // Listeners live on the section itself. An overlay div would sit on top of
  // the buttons underneath it and swallow their clicks.
  useEffect(() => {
    const el = container.current;
    if (!el || reduced) return;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = el.getBoundingClientRect();
      const px = Math.round(e.clientX - rect.left);
      const py = Math.round(e.clientY - rect.top);
      x.set(px);
      y.set(py);
      setCoords({ x: px, y: py });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [container, reduced, x, y]);

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 hidden md:block"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        className="absolute top-0 h-full w-px bg-[var(--accent-line)]"
        style={{ x }}
      />
      <motion.span
        className="absolute left-0 h-px w-full bg-[var(--accent-line)]"
        style={{ y }}
      />
      <motion.span
        className="u-mono absolute text-[0.625rem] tracking-[0.15em] text-[var(--accent)]"
        style={{ x, y }}
      >
        <span className="u-num ml-2 mt-2 inline-block">
          x{String(coords.x).padStart(4, "0")} y{String(coords.y).padStart(4, "0")}
        </span>
      </motion.span>
    </motion.div>
  );
};

const specs = [
  { k: "Role", v: siteConfig.role },
  { k: "Experience", v: "3+ years" },
  { k: "Stack", v: "React · Next.js · TypeScript" },
  { k: "Based in", v: `${siteConfig.location} · ${siteConfig.timezone}` },
];

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      aria-labelledby="hero-title"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden px-5 pb-24 pt-28 md:px-10"
    >
      <Crosshair container={ref} />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] lg:pl-36">
        {/* sheet meta line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          <span className="u-label text-[var(--accent)]">{siteConfig.sheet.drawing}</span>
          <span className="u-label text-faint">{siteConfig.sheet.revision}</span>
          <span className="u-label hidden sm:inline text-faint">scale {siteConfig.sheet.scale}</span>
          {siteConfig.availability.open && (
            <StatusStamp label={siteConfig.availability.label} />
          )}
        </motion.div>

        {/* dimension bracket above the name */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex origin-left items-center gap-2 md:mt-14"
        >
          <span className="h-2.5 w-px bg-[var(--line-strong)]" />
          <span className="bp-leader h-px w-full max-w-[36rem] opacity-70" />
          <span className="h-2.5 w-px bg-[var(--line-strong)]" />
        </motion.div>

        <motion.h1
          style={reduced ? undefined : { y: nameY }}
          id="hero-title"
          className="mt-4 font-display text-[clamp(3rem,12vw,9.5rem)] font-semibold leading-[0.86] tracking-[-0.05em] text-[var(--fg)]"
        >
          <RevealWords text="Kartik Kumar" delay={0.2} />
        </motion.h1>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <p className="u-measure text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl">
              I build learning platforms, exam portals and client web apps —
              the kind with role permissions, SCORM players and dashboards that
              stay fast once real data lands in them.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group u-label tap-44 flex items-center justify-center gap-2 bg-[var(--accent)] px-5 py-3 text-[var(--ink-900)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                View the work
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="u-label tap-44 flex items-center gap-2 border border-[var(--line-interactive)] px-5 py-3 text-[var(--fg)] transition-colors duration-200 hover:border-[var(--accent-line)] hover:text-[var(--accent)] active:translate-y-px"
              >
                <Mail className="h-3.5 w-3.5" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="tap-44 flex items-center justify-center border border-[var(--line-interactive)] text-[var(--fg-muted)] transition-colors hover:border-[var(--accent-line)] hover:text-[var(--accent)]"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="tap-44 flex items-center justify-center border border-[var(--line-interactive)] text-[var(--fg-muted)] transition-colors hover:border-[var(--accent-line)] hover:text-[var(--accent)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* spec table — reads like a drawing legend */}
          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="border-t border-[var(--line)]"
          >
            {specs.map((s) => (
              <div
                key={s.k}
                className="flex items-baseline justify-between gap-4 border-b border-[var(--line)] py-3"
              >
                <dt className="u-label text-faint">{s.k}</dt>
                <dd className="u-mono text-right text-[0.8125rem] text-[var(--fg)]">
                  {s.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <Rule note="scroll to read the sheet" className="mt-16" />
      </div>

      <motion.a
        href="#about"
        style={reduced ? undefined : { opacity: fade }}
        className="group u-label tap-44 absolute bottom-20 right-5 z-10 flex items-center justify-end gap-2 text-[var(--fg-faint)] transition-colors hover:text-[var(--accent)] md:right-10 lg:bottom-10"
      >
        01 / 07
        <ArrowDown className="h-3.5 w-3.5 animate-bounce group-hover:animate-none" />
      </motion.a>
    </section>
  );
};
