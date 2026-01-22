"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextReveal = ({ text, className, delay = 0 }: TextRevealProps) => {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      className={cn("inline-block", className)}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.3,
            delay: delay + index * 0.03,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export const GradientText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
};

export const AnimatedUnderline = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={cn("group relative", className)}>
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-linear-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
    </span>
  );
};
