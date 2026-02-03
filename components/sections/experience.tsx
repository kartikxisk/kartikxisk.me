"use client";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "motion/react";

const experienceData = [
  {
    title: "Sr. Software Developer",
    subtitle: "Wissenhive E-Learning Pvt. Ltd. • Uttar Pradesh, IN",
    date: "April 2025 – Present",
    content: (
      <ul className="list-disc space-y-2 pl-4 text-sm text-neutral-400">
        <li>
          Architected and developed comprehensive LMS & Exam Portal solutions
          for schools, focusing on scalable and user-centric educational content
          delivery
        </li>
        <li>
          Implemented dynamic role-based access control (RBAC) system with
          configurable modules and feature-level permissions
        </li>
        <li>
          Implemented SCORM player integration in the LMS, enabling standardized
          content packaging, tracking, and reporting
        </li>
        <li>
          Worked extensively with Next.js 12, 13, and 14 to optimize
          performance, scalability, and maintainability
        </li>
        <li>
          Optimized application performance ensuring seamless cross-device
          compatibility
        </li>
      </ul>
    ),
  },
  {
    title: "Software Developer",
    subtitle: "Dreambig IT Solutions India Pvt. Ltd. • Uttar Pradesh, IN",
    date: "Nov 2022 – April 2025",
    content: (
      <ul className="list-disc space-y-2 pl-4 text-sm text-neutral-400">
        <li>
          Designed and developed Cyberyami Job and Compete module (including CTF
          integration), Micro Learning module, Partner Portal, and Community
          Forum
        </li>
        <li>
          Worked on the LevelUp Certification Exam Portal, a Windows-based
          examination application with integrated proctoring
        </li>
        <li>
          Developed and maintained LMS platforms for colleges and universities
        </li>
        <li>
          Redesigned a legacy web application using React and Next.js, resulting
          in a <strong className="text-cyan-400">75% reduction</strong> in code
          complexity
        </li>
        <li>
          Built reusable components achieving{" "}
          <strong className="text-cyan-400">50% reduction</strong> in
          development time
        </li>
      </ul>
    ),
  },
  {
    title: "Jr. Developer Trainee",
    subtitle: "Dreambig IT Solutions India Pvt. Ltd. • Uttar Pradesh, IN",
    date: "May 2022 – Nov 2022",
    content: (
      <ul className="list-disc space-y-2 pl-4 text-sm text-neutral-400">
        <li>
          Leveraged Laravel, HTML, CSS to create a dynamic and secure CTF web
          application
        </li>
        <li>
          Crafted a user-friendly custom form similar to Google Forms to collect
          data within the CTF application
        </li>
        <li>
          Demonstrated significant growth in JavaScript proficiency while
          working on the CTF project
        </li>
      </ul>
    ),
  },
];

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

        <Timeline items={experienceData} />
      </div>
    </section>
  );
};
