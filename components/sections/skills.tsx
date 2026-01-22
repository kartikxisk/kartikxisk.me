"use client";
import { GlowingBorderCard } from "@/components/ui/glowing-card";
import { motion } from "motion/react";
import {
  Code2,
  Database,
  Wrench,
  Lightbulb,
  Globe,
  Layers,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="h-5 w-5" />,
    skills: ["JavaScript (ES6)", "TypeScript", "PHP", "SQL"],
  },
  {
    title: "Technologies",
    icon: <Layers className="h-5 w-5" />,
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "MUI",
      "jQuery",
      "Bootstrap",
      "Laravel",
      "Electron.js",
    ],
  },
  {
    title: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: ["MySQL"],
  },
  {
    title: "Tools",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      "Git",
      "JMeter",
      "Lighthouse",
      "Chrome DevTools",
      "Postman",
      "AWS",
      "Docker",
    ],
  },
  {
    title: "Concepts",
    icon: <Lightbulb className="h-5 w-5" />,
    skills: [
      "SEO",
      "REST APIs",
      "Agile/Scrum",
      "Profiling & Debugging",
      "Caching Strategies",
    ],
  },
  {
    title: "Domain Expertise",
    icon: <Globe className="h-5 w-5" />,
    skills: [
      "LMS Development",
      "SCORM Integration",
      "E-Learning Platforms",
      "Enterprise Applications",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm text-purple-400">
            Technical Skills
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            My Tech Stack
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlowingBorderCard className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-400">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300 transition-colors hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlowingBorderCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
