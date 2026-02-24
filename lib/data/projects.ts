export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  features: string[];
  image: string;
  liveUrl?: string;
  gitUrl?: string;
}

export const projectsData: Project[] = [
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
    title: "CSV Techno",
    subtitle: "Property Evaluation System",
    description:
      "A data-driven property evaluation system providing real-time analytics and insights for informed decision-making in real estate investments. Features interactive charts and role-based access control.",
    tech: [
      "React",
      "MUI",
      "Next.js",
      "TypeScript",
      "Apache ECharts",
      "Api Integration",
      "Optimization",
    ],
    features: [
      "Real-time case analytics",
      "Interactive charts & graphs",
      "Role-based access control",
    ],
    image: "/images/project/property-evaluation-system.png",
  },
  {
    title: "The Last Clicks",
    subtitle: "Creative Services Agency",
    description:
      "A modern creative agency website showcasing photography, videography, and editing services. Features elegant dark theme design with smooth animations and a streamlined production process flow.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    features: [
      "Dark theme with gradient accents",
      "Service showcase cards",
      "Stats counter section",
    ],
    image: "/images/project/thelastclicks.png",
    liveUrl: "https://thelastclicks.com/",
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
    liveUrl: "https://groupsgyani.org/",
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
    gitUrl: "https://github.com/kartikxisk/library-management-system",
  },
];
