"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { TextReveal, GradientText } from "@/components/ui/text-reveal";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";

export const Hero = () => {
  const roles = [
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "LMS Specialist",
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Background gradient orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-lg text-neutral-400"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
          <TextReveal text="Kartik Kumar" delay={0.3} />
        </h1>

        {/* Role with FlipWords */}
        <div className="mb-8 flex h-12 items-center justify-center text-2xl md:text-3xl overflow-hidden">
          <span className="text-neutral-400">I&apos;m a </span>
          <span className="ml-2 overflow-hidden">
            <FlipWords words={roles} className="font-semibold" />
          </span>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-neutral-400"
        >
          3+ years of experience building{" "}
          <GradientText>scalable web applications</GradientText>, LMS solutions,
          and e-learning platforms with{" "}
          <GradientText>React.js & Next.js</GradientText>
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-12 flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/kartikxisk"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:border-white/20 hover:bg-white/10"
          >
            <Github className="h-5 w-5 text-white" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100">
              GitHub
            </span>
          </a>
          <a
            href="https://linkedin.com/in/kartikxisk"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:border-white/20 hover:bg-white/10"
          >
            <Linkedin className="h-5 w-5 text-white" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100">
              LinkedIn
            </span>
          </a>
          <a
            href="mailto:ki.kartik11@gmail.com"
            className="group relative rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:border-white/20 hover:bg-white/10"
          >
            <Mail className="h-5 w-5 text-white" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100">
              Email
            </span>
          </a>
          <a
            href="tel:+918743870095"
            className="group relative rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:border-white/20 hover:bg-white/10"
          >
            <Phone className="h-5 w-5 text-white" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100">
              Call
            </span>
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#experience"
            className="group relative overflow-hidden rounded-full bg-linear-to-r from-cyan-500 to-purple-500 px-8 py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-transparent px-8 py-3 font-medium text-white transition-all hover:bg-white/5"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-neutral-500"
        >
          <span className="mb-2 text-xs">Scroll Down</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};
