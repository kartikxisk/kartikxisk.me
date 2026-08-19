export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  percentage: string;
  /** Lucide icon name to render */
  iconName: "GraduationCap" | "Award";
}

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Ganga Institute of Technology & Management (Aff. MDU)",
    location: "Haryana, IN",
    period: "June 2021 - June 2024",
    percentage: "69%",
    iconName: "GraduationCap",
  },
  {
    degree: "Diploma in Computer Science Engineering",
    institution: "Guru Tegh Bahadur Polytechnic Institute (Aff. BTE)",
    location: "New Delhi, IN",
    period: "June 2019 - June 2021",
    percentage: "86%",
    iconName: "Award",
  },
];

export interface Certification {
  name: string;
  issuer: string;
  issued: string;
  credentialId: string;
  /** Public verification link. */
  url: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    name: "React — The Complete Guide (incl. React Router & Redux)",
    issuer: "Udemy",
    issued: "Sep 2023",
    credentialId: "UC-45dc68b1-45cd-4614-baa5-685abd7c0799",
    url: "https://www.udemy.com/certificate/UC-45dc68b1-45cd-4614-baa5-685abd7c0799/",
    skills: ["React.js", "Redux", "React Router"],
  },
  {
    name: "Reactjs Essentials Bootcamp",
    issuer: "LetsUpgrade",
    issued: "Jun 2023",
    credentialId: "LUERJSJUN123179",
    url: "https://verify.letsupgrade.in/certificate/LUERJSJUN123179",
    skills: ["JavaScript", "React"],
  },
];
