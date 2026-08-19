"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import React, { useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Wipe reveal — content is unmasked upward instead of the usual
 * fade-and-slide. Falls back to a plain render when the visitor asked
 * for reduced motion.
 */
export const Reveal = ({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span";
}) => {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 28, clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
};

/** Stagger container — children mount in sequence, never all at once. */
export const Stagger = ({
  children,
  className,
  step = 0.07,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  step?: number;
  as?: "div" | "ul" | "ol";
}) => {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={{ hidden: {}, shown: { transition: { staggerChildren: step } } }}
    >
      {children}
    </MotionTag>
  );
};

export const StaggerItem = ({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
}) => {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 18 },
        shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      {children}
    </MotionTag>
  );
};

/** Word-by-word reveal for display headings. */
export const RevealWords = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const reduced = useReducedMotion();
  if (reduced) return <span className={className}>{text}</span>;

  return (
    <motion.span
      className={cn("inline-flex flex-wrap", className)}
      initial="hidden"
      animate="shown"
      variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.09, delayChildren: delay } } }}
    >
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="overflow-hidden pb-[0.08em] pr-[0.28em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              shown: { y: "0%", transition: { duration: 0.9, ease: EASE } },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

/** Depth: moves an element against the scroll direction. */
export const Parallax = ({
  children,
  distance = 60,
  className,
}: {
  children: React.ReactNode;
  distance?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const y = useSpring(raw, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduced ? undefined : { y }}>{children}</motion.div>
    </div>
  );
};

/**
 * Horizontal strip driven by vertical scroll — the page scrolls down,
 * the strip travels sideways.
 */
export const ScrollStrip = ({
  children,
  className,
  travel = 240,
}: {
  children: React.ReactNode;
  className?: string;
  travel?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [travel, -travel]);
  const x = useSpring(raw, { stiffness: 70, damping: 26, mass: 0.5 });

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div className="flex w-max gap-3" style={reduced ? undefined : { x }}>
        {children}
      </motion.div>
    </div>
  );
};

/** Shared helper for sections that need their own scroll progress value. */
export const useSectionProgress = (
  ref: React.RefObject<HTMLElement | null>
): MotionValue<number> => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return scrollYProgress;
};
