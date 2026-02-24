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
