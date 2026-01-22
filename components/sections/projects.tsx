"use client";
import { SpotlightCard } from "@/components/ui/spotlight";
import { GradientText } from "@/components/ui/text-reveal";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projectsData = [
  {
    title: "Savant Solutions",
    subtitle: "Business Consulting Platform",
    description:
      "A comprehensive business consulting website offering strategic services including research, IT development, marketing, and sustainability consulting. Features modern animations and responsive design.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    features: [
      "Modern UI with animations",
      "10+ service pages",
      "Responsive design",
    ],
    image: "/images/project/savantsolution.png",
    liveUrl: "https://savantsolutions.in/",
  },
  {
    title: "Belsync",
    subtitle: "AI-Powered E-Commerce & POS Platform",
    description:
      "A modern SaaS platform empowering businesses with AI-driven eCommerce solutions, seamless POS integration, and smart automation for streamlined operations and growth.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "AI Integration"],
    features: [
      "AI-powered recommendations",
      "Global server infrastructure",
      "Integrated ecosystem",
    ],
    image: "/images/project/belsync.png",
    liveUrl: "https://www.belsync.com/",
  },
  {
    title: "ZenCap Fund",
    subtitle: "Investment Fund Management Platform",
    description:
      "A professional website for SEBI-registered Category II Alternative Investment Fund, featuring fund information, team profiles, and investment process documentation.",
    tech: ["Bootstrap", "JavaScript", "HTML/CSS", "Responsive Design"],
    features: [
      "Fund information display",
      "Team showcase",
      "Investment process flow",
    ],
    image: "/images/project/zencapfund.png",
    liveUrl: "https://zencapfund.com/",
  },
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
    image: "/images/project/groupsgyani.png",
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
    image: "/images/project/library.png",
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
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            A showcase of websites and applications I&apos;ve built for clients and personal projects
          </p>
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
                  {/* Project Image */}
                  {project.image && (
                    <div className="relative mb-4 overflow-hidden rounded-lg border border-white/10">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={340}
                        className="w-full h-64 object-cover object-top transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    </div>
                  )}

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
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-white/10 bg-white/5 p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <button className="rounded-lg border border-white/10 bg-white/5 p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      )}
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
