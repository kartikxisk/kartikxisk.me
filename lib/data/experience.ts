export interface ExperienceItem {
  title: string;
  subtitle: string;
  date: string;
  highlights: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    title: "Sr. Software Developer",
    subtitle: "Wissenhive E-Learning Pvt. Ltd. • Uttar Pradesh, IN",
    date: "April 2025 – Present",
    highlights: [
      "Architected and developed comprehensive LMS & Exam Portal solutions for schools, focusing on scalable and user-centric educational content delivery",
      "Implemented dynamic role-based access control (RBAC) system with configurable modules and feature-level permissions",
      "Implemented SCORM player integration in the LMS, enabling standardized content packaging, tracking, and reporting",
      "Worked extensively with Next.js 12, 13, and 14 to optimize performance, scalability, and maintainability",
      "Optimized application performance ensuring seamless cross-device compatibility",
    ],
  },
  {
    title: "Software Developer",
    subtitle: "Dreambig IT Solutions India Pvt. Ltd. • Uttar Pradesh, IN",
    date: "Nov 2022 – April 2025",
    highlights: [
      "Designed and developed Cyberyami Job and Compete module (including CTF integration), Micro Learning module, Partner Portal, and Community Forum",
      "Worked on the LevelUp Certification Exam Portal, a Windows-based examination application with integrated proctoring",
      "Developed and maintained LMS platforms for colleges and universities",
      "Redesigned a legacy web application using React and Next.js, resulting in a {{75% reduction}} in code complexity",
      "Built reusable components achieving {{50% reduction}} in development time",
    ],
  },
  {
    title: "Jr. Developer Trainee",
    subtitle: "Dreambig IT Solutions India Pvt. Ltd. • Uttar Pradesh, IN",
    date: "May 2022 – Nov 2022",
    highlights: [
      "Leveraged Laravel, HTML, CSS to create a dynamic and secure CTF web application",
      "Crafted a user-friendly custom form similar to Google Forms to collect data within the CTF application",
      "Demonstrated significant growth in JavaScript proficiency while working on the CTF project",
    ],
  },
];
