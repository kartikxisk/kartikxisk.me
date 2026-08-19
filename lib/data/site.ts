/** Central personal/site configuration — single source of truth. */

export const siteConfig = {
  name: "Kartik Kumar",
  shortName: "Kartik",
  url: "https://kartikxisk.me",
  role: "Frontend Engineer",
  roles: ["Frontend Engineer", "React / Next.js", "LMS & Ed-tech Platforms"],
  description:
    "Frontend engineer with 3+ years building LMS platforms, exam portals and client web apps with React, Next.js and TypeScript.",
  email: "ki.kartik11@gmail.com",
  phone: "+91 87438 70095",
  phoneRaw: "+918743870095",
  location: "Delhi, India",
  timezone: "IST · UTC+5:30",
  pronouns: "he/him",
  github: "https://github.com/kartikxisk",
  medium: "https://kartikxisk.medium.com",
  linkedin: "https://linkedin.com/in/kartikxisk",
  repo: "https://github.com/kartikxisk/kartikxisk.me",
  /** Drop a PDF at public/resume.pdf to switch the resume CTA on. */
  resumeUrl: "",
  /** Drives the availability stamp in the header, hero and contact block. */
  availability: {
    open: true,
    label: "Open to work",
    detail: "Full-time and freelance · Delhi NCR or Noida · hybrid or remote",
  },
  /** Title-block metadata, drawing-sheet style. */
  sheet: {
    drawing: "PORTFOLIO / 2026",
    revision: "REV 03",
    scale: "1:1",
  },
} as const;

export type SiteConfig = typeof siteConfig;
