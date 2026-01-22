"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  content: React.ReactNode;
}

export const Timeline = ({
  items,
  className,
}: {
  items: TimelineItem[];
  className?: string;
}) => {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-px bg-linear-to-b from-cyan-500/50 via-purple-500/50 to-transparent md:left-1/2 md:-translate-x-px" />

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className={cn(
            "relative mb-12 pl-12 md:w-1/2 md:pl-0",
            index % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
          )}
        >
          {/* Timeline dot */}
          <div
            className={cn(
              "absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-cyan-500 bg-black md:left-auto",
              index % 2 === 0
                ? "md:-right-1.5 md:left-auto"
                : "md:-left-1.5 md:right-auto"
            )}
          />

          {/* Content card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 rounded-xl bg-linear-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 blur transition duration-500 group-hover:opacity-100" />
            <div className="relative rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm">
              <span className="mb-2 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
                {item.date}
              </span>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-neutral-400">{item.subtitle}</p>
              <div className="mt-4 text-neutral-300">{item.content}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
