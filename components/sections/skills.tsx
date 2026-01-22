"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Code2,
  Database,
  Wrench,
  Lightbulb,
  Globe,
  Layers,
  Gauge,
  Monitor,
  Search,
  Webhook,
  Users,
  Bug,
  HardDrive,
  GraduationCap,
  BookOpen,
  Building2,
  FileCode,
} from "lucide-react";

// Skill icon mapping using Devicon classes
const getSkillIcon = (skill: string): string | null => {
  const iconMap: { [key: string]: string } = {
    "JavaScript (ES6)": "devicon-javascript-plain",
    "TypeScript": "devicon-typescript-plain",
    "PHP": "devicon-php-plain",
    "SQL": "devicon-azuresqldatabase-plain",
    "React.js": "devicon-react-original",
    "Next.js": "devicon-nextjs-plain",
    "Redux": "devicon-redux-original",
    "Tailwind CSS": "devicon-tailwindcss-original",
    "MUI": "devicon-materialui-plain",
    "jQuery": "devicon-jquery-plain",
    "Bootstrap": "devicon-bootstrap-plain",
    "Laravel": "devicon-laravel-original",
    "Electron.js": "devicon-electron-original",
    "MySQL": "devicon-mysql-original",
    "Git": "devicon-git-plain",
    "Postman": "devicon-postman-plain",
    "AWS": "devicon-amazonwebservices-plain-wordmark",
    "Docker": "devicon-docker-plain",
  };
  return iconMap[skill] || null;
};

// Lucide icons for skills without Devicon support
const getLucideIcon = (skill: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    "JMeter": <Gauge className="h-4 w-4" />,
    "Lighthouse": <Gauge className="h-4 w-4" />,
    "Chrome DevTools": <Monitor className="h-4 w-4" />,
    "SEO": <Search className="h-4 w-4" />,
    "REST APIs": <Webhook className="h-4 w-4" />,
    "Agile/Scrum": <Users className="h-4 w-4" />,
    "Profiling & Debugging": <Bug className="h-4 w-4" />,
    "Caching Strategies": <HardDrive className="h-4 w-4" />,
    "LMS Development": <GraduationCap className="h-4 w-4" />,
    "SCORM Integration": <FileCode className="h-4 w-4" />,
    "E-Learning Platforms": <BookOpen className="h-4 w-4" />,
    "Enterprise Applications": <Building2 className="h-4 w-4" />,
  };
  return iconMap[skill] || null;
};

// Background SVG patterns for each card
const BackgroundPatterns = {
  grid: () => (
    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M0 32V0h32" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  ),
  dots: () => (
    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="rgba(34,211,238,0.1)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots-pattern)" />
    </svg>
  ),
  waves: () => (
    <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="rgba(34,211,238,0.05)" d="M47.5,-57.2C59.9,-46.9,67.5,-30.8,70.8,-13.6C74.1,3.6,73.1,21.9,65.2,36.5C57.3,51.1,42.5,62,26.1,68.1C9.7,74.2,-8.3,75.5,-24.5,70.1C-40.7,64.7,-55.1,52.6,-64.3,37.3C-73.5,22,-77.5,3.5,-74.1,-13.3C-70.7,-30.1,-59.9,-45.2,-46,-56.1C-32.1,-67,-15.1,-73.7,1.3,-75.3C17.7,-76.9,35.1,-67.4,47.5,-57.2Z" transform="translate(100 100)" />
    </svg>
  ),
  circuit: () => (
    <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuit-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
          <circle cx="25" cy="25" r="2" fill="rgba(168,85,247,0.4)" />
          <path d="M25 0v20M25 30v20M0 25h20M30 25h20" stroke="rgba(168,85,247,0.2)" strokeWidth="1" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
    </svg>
  ),
  hexagon: () => (
    <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hex-pattern" width="56" height="100" patternUnits="userSpaceOnUse">
          <path d="M28 66L0 50V16L28 0l28 16v34L28 66zm0-32L14 42V26l14-8 14 8v16L28 34z" fill="none" stroke="rgba(34,211,238,0.15)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex-pattern)" />
    </svg>
  ),
  cross: () => (
    <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="cross-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M12 0v24M0 12h24" stroke="rgba(236,72,153,0.15)" strokeWidth="1" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cross-pattern)" />
    </svg>
  ),
};

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="h-6 w-6" />,
    skills: ["JavaScript (ES6)", "TypeScript", "PHP", "SQL"],
    gradient: "from-yellow-500/20 via-orange-500/10 to-transparent",
    borderColor: "hover:border-yellow-500/50",
    iconBg: "bg-yellow-500/10 text-yellow-400",
    pattern: "grid",
  },
  {
    title: "Technologies",
    icon: <Layers className="h-6 w-6" />,
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
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderColor: "hover:border-cyan-500/50",
    iconBg: "bg-cyan-500/10 text-cyan-400",
    pattern: "dots",
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["MySQL"],
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    borderColor: "hover:border-green-500/50",
    iconBg: "bg-green-500/10 text-green-400",
    pattern: "waves",
  },
  {
    title: "Tools",
    icon: <Wrench className="h-6 w-6" />,
    skills: [
      "Git",
      "JMeter",
      "Lighthouse",
      "Chrome DevTools",
      "Postman",
      "AWS",
      "Docker",
    ],
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    borderColor: "hover:border-purple-500/50",
    iconBg: "bg-purple-500/10 text-purple-400",
    pattern: "circuit",
  },
  {
    title: "Concepts",
    icon: <Lightbulb className="h-6 w-6" />,
    skills: [
      "SEO",
      "REST APIs",
      "Agile/Scrum",
      "Profiling & Debugging",
      "Caching Strategies",
    ],
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    borderColor: "hover:border-pink-500/50",
    iconBg: "bg-pink-500/10 text-pink-400",
    pattern: "cross",
  },
  {
    title: "Domain Expertise",
    icon: <Globe className="h-6 w-6" />,
    skills: [
      "LMS Development",
      "SCORM Integration",
      "E-Learning Platforms",
      "Enterprise Applications",
    ],
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    borderColor: "hover:border-indigo-500/50",
    iconBg: "bg-indigo-500/10 text-indigo-400",
    pattern: "hexagon",
  },
];

// Skill Badge Component
const SkillBadge = ({ skill }: { skill: string }) => {
  const deviconClass = getSkillIcon(skill);
  const lucideIcon = getLucideIcon(skill);

  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-neutral-300 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:scale-105">
      {deviconClass ? (
        <i className={`${deviconClass} text-lg`} />
      ) : lucideIcon ? (
        <span className="opacity-70">{lucideIcon}</span>
      ) : (
        <Code2 className="h-4 w-4 opacity-70" />
      )}
      {skill}
    </span>
  );
};

// Bento Card Component
const BentoCard = ({
  category,
  index,
  className,
}: {
  category: (typeof skillCategories)[0];
  index: number;
  className?: string;
}) => {
  const Pattern = BackgroundPatterns[category.pattern as keyof typeof BackgroundPatterns];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/50 p-6 backdrop-blur-sm transition-all duration-500",
        category.borderColor,
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-150">
        <Pattern />
      </div>

      {/* Gradient Overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-linear-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          category.gradient
        )}
      />

      {/* Glow Effect */}
      <div className="absolute -inset-px rounded-2xl bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-5 flex items-center gap-3">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 transition-all duration-300 group-hover:scale-110",
              category.iconBg
            )}
          >
            {category.icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            <p className="text-xs text-neutral-500">{category.skills.length} skills</p>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
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
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            A curated collection of technologies and tools I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {/* Row 1 */}
          <BentoCard 
            category={skillCategories[0]} 
            index={0} 
            className="md:col-span-1"
          />
          <BentoCard 
            category={skillCategories[1]} 
            index={1} 
            className="md:col-span-2"
          />
          <BentoCard 
            category={skillCategories[2]} 
            index={2} 
            className="md:col-span-1"
          />
          
          {/* Row 2 */}
          <BentoCard 
            category={skillCategories[3]} 
            index={3} 
            className="md:col-span-2"
          />
          <BentoCard 
            category={skillCategories[4]} 
            index={4} 
            className="md:col-span-2"
          />
          
          {/* Row 3 - Full width */}
          <BentoCard 
            category={skillCategories[5]} 
            index={5} 
            className="md:col-span-4"
          />
        </div>
      </div>
    </section>
  );
};
