"use client";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "motion/react";
import { experienceData } from "@/lib/data/experience";

/** Convert highlight strings to JSX — text wrapped in {{...}} becomes a cyan accent. */
const renderHighlight = (text: string) => {
  const parts = text.split(/\{\{(.+?)\}\}/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-cyan-400">
        {part}
      </strong>
    ) : (
      part
    )
  );
};

const timelineItems = experienceData.map((exp) => ({
  title: exp.title,
  subtitle: exp.subtitle,
  date: exp.date,
  content: (
    <ul className="list-disc space-y-2 pl-4 text-sm text-neutral-400">
      {exp.highlights.map((h, i) => (
        <li key={i}>{renderHighlight(h)}</li>
      ))}
    </ul>
  ),
}));

export const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-400">
            Work History
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Professional Experience
          </h2>
        </motion.div>

        <Timeline items={timelineItems} />
      </div>
    </section>
  );
};
