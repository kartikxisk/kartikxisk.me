export interface SkillCategory {
  title: string;
  /** Lucide icon name */
  iconName: string;
  skills: string[];
  gradient: string;
  borderColor: string;
  iconBg: string;
  pattern: string;
}

/** Devicon class mapping for skills that have Devicon support */
export const deviconMap: Record<string, string> = {
  "JavaScript (ES6)": "devicon-javascript-plain",
  TypeScript: "devicon-typescript-plain",
  PHP: "devicon-php-plain",
  SQL: "devicon-azuresqldatabase-plain",
  "React.js": "devicon-react-original",
  "Next.js": "devicon-nextjs-plain",
  Redux: "devicon-redux-original",
  "Tailwind CSS": "devicon-tailwindcss-original",
  MUI: "devicon-materialui-plain",
  jQuery: "devicon-jquery-plain",
  Bootstrap: "devicon-bootstrap-plain",
  Laravel: "devicon-laravel-original",
  "Electron.js": "devicon-electron-original",
  MySQL: "devicon-mysql-original",
  Git: "devicon-git-plain",
  Postman: "devicon-postman-plain",
  AWS: "devicon-amazonwebservices-plain-wordmark",
  Docker: "devicon-docker-plain",
};

/** Lucide icon name mapping for skills without Devicon support */
export const lucideSkillIconMap: Record<string, string> = {
  JMeter: "Gauge",
  Lighthouse: "Gauge",
  "Chrome DevTools": "Monitor",
  SEO: "Search",
  "REST APIs": "Webhook",
  "Agile/Scrum": "Users",
  "Profiling & Debugging": "Bug",
  "Caching Strategies": "HardDrive",
  "LMS Development": "GraduationCap",
  "SCORM Integration": "FileCode",
  "E-Learning Platforms": "BookOpen",
  "Enterprise Applications": "Building2",
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    iconName: "Code2",
    skills: ["JavaScript (ES6)", "TypeScript", "PHP", "SQL"],
    gradient: "from-yellow-500/20 via-orange-500/10 to-transparent",
    borderColor: "hover:border-yellow-500/50",
    iconBg: "bg-yellow-500/10 text-yellow-400",
    pattern: "grid",
  },
  {
    title: "Technologies",
    iconName: "Layers",
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
    iconName: "Database",
    skills: ["MySQL"],
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    borderColor: "hover:border-green-500/50",
    iconBg: "bg-green-500/10 text-green-400",
    pattern: "waves",
  },
  {
    title: "Tools",
    iconName: "Wrench",
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
    iconName: "Lightbulb",
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
    iconName: "Globe",
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
