export type ProjectType = "portfolio" | "project";

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  features: string[];
  image: string;
  type: ProjectType;
  liveUrl?: string;
  gitUrl?: string;
}

export const projectTabs: { label: string; value: ProjectType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Portfolio", value: "portfolio" },
  { label: "Projects", value: "project" },
];

export const projectsData: Project[] = [
  {
    title: "Crysta",
    subtitle: "B2B E-Commerce & Quotation Platform",
    description:
      "A wholesale e-commerce platform for premium kitchen and wardrobe accessories, built for dealers and fabricators. Combines a retail storefront with a B2B quote workflow, price-on-request items, downloadable catalogs, and Razorpay checkout.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Razorpay",
      "SEO",
      "ISR Caching",
    ],
    features: [
      "Quote cart with bulk RFQ flow",
      "402-product catalogue with faceted filters",
      "Customer accounts, orders & addresses",
    ],
    image: "/images/project/crysta.png",
    type: "project",
    liveUrl: "https://crysta.in/",
  },
  {
    title: "VMD Events",
    subtitle: "Brand Experience & Event Agency",
    description:
      "A Delhi-based brand experience agency website covering corporate events, artist management, manpower deployment, and fabrication & branding. Dark editorial design with a work showcase and an enquiry funnel.",
    tech: ["Laravel", "Blade", "Vite", "Tailwind CSS", "JavaScript"],
    features: [
      "Service & case study showcase",
      "Enquiry form with validation",
      "SEO-optimised marketing pages",
    ],
    image: "/images/project/vmdevents.png",
    type: "portfolio",
    liveUrl: "https://vmdevents.com/",
  },
  {
    title: "Vedang Homecare",
    subtitle: "Home Healthcare Services Website",
    description:
      "A multi-city home healthcare website offering nursing, caregivers, ICU at home, doctor visits, and medical equipment rental. Bilingual (English/Hindi) with location-wise service pages and a lead capture flow.",
    tech: ["Laravel", "Blade", "Alpine.js", "Tailwind CSS", "Hreflang i18n"],
    features: [
      "Bilingual EN/HI pages with hreflang",
      "City-wise service landing pages",
      "Enquiry & callback lead capture",
    ],
    image: "/images/project/vedanghomecare.png",
    type: "portfolio",
    liveUrl: "https://vedanghomecare.com/",
  },
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
    type: "portfolio",
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
    type: "portfolio",
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
    type: "project",
  },
  {
    title: "The Last Clicks",
    subtitle: "Photography & Videography Portfolio",
    description:
      "A modern creative agency website showcasing photography, videography, and editing services. Features elegant dark theme design with smooth animations and a streamlined production process flow.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    features: [
      "Dark theme with gradient accents",
      "Service showcase cards",
      "Stats counter section",
    ],
    image: "/images/project/thelastclicks.png",
    type: "portfolio",
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
    type: "portfolio",
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
    type: "project",
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
    type: "project",
    gitUrl: "https://github.com/kartikxisk/library-management-system",
  },
];
