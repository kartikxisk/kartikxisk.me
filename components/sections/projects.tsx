"use client";
import { SpotlightCard } from "@/components/ui/spotlight";
import { GradientText } from "@/components/ui/text-reveal";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "Groupsgyani",
    subtitle: "WhatsApp, Telegram and Discord Directory",
    description:
      "A comprehensive directory platform for WhatsApp, Telegram, and Discord communities with responsive design and optimized database queries.",
    tech: ["Laravel (PHP)", "MySQL", "Bootstrap 4", "JavaScript", "jQuery"],
    features: [
      "Responsive design",
      "Optimized database queries",
      "Intuitive community discovery",
    ],
  },
  {
    title: "Library Management System",
    subtitle: "Full-Stack Library Solution",
    description:
      "A comprehensive library management solution with real-time book tracking, user management, and AJAX-based interactions.",
    tech: [
      "Java",
      "JSP",
      "HTML/CSS",
      "Bootstrap 4",
      "jQuery",
      "AJAX",
      "Oracle 10g",
    ],
    features: [
      "Real-time book tracking",
      "User management",
      "Optimized database schema",
    ],
  },
  {
    title: "Cyberyami Platform",
    subtitle: "E-Learning & CTF Integration",
    description:
      "Job and Compete module with CTF integration, Micro Learning module, Partner Portal, and Community Forum to enhance user engagement.",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "CTF Integration",
      "Micro Learning",
      "Community Forum",
      "Partner Portal",
    ],
  },
  {
    title: "LevelUp Certification Portal",
    subtitle: "Windows Examination Application",
    description:
      "A Windows-based examination application with integrated proctoring to ensure secure and monitored assessments.",
    tech: ["Electron.js", "React.js", "Node.js"],
    features: [
      "Integrated proctoring",
      "Secure assessments",
      "Windows desktop app",
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1 text-sm text-pink-400">
            Portfolio
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <SpotlightCard className="h-full">
                <div className="relative z-10">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        <GradientText>{project.title}</GradientText>
                      </h3>
                      <p className="text-sm text-neutral-500">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="rounded-lg border border-white/10 bg-white/5 p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white">
                        <Github className="h-4 w-4" />
                      </button>
                      <button className="rounded-lg border border-white/10 bg-white/5 p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <p className="mb-4 text-sm text-neutral-400">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
                      Key Features
                    </p>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-neutral-400"
                        >
                          <span className="h-1 w-1 rounded-full bg-cyan-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
