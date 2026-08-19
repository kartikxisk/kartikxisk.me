export interface Stat {
  label: string;
  value: string;
  note?: string;
}

/** Opening statement — plain language, no agency filler. */
export const aboutIntro = [
  "I'm a frontend engineer in Delhi. For the last four years I've worked on one thing almost continuously: education software that real cohorts log into every day — learning platforms, exam portals, admin consoles and the reporting behind them.",
  "That means most of my work isn't a landing page. It's role-based permissions, SCORM playback, exports that don't time out, dashboards that stay fast after the data grows, and desktop builds for proctored exams. I own features end to end — interface, API contract, queue worker, deploy.",
  "Alongside that I take on client work: e-commerce with B2B quoting, agency and healthcare sites, directories. Same standard, smaller surface.",
];

/** Short, checkable claims a recruiter can scan in five seconds. */
export const aboutFacts: { k: string; v: string }[] = [
  { k: "Currently", v: "Sr. Software Developer, Wissenhive E-Learning" },
  { k: "Pronouns", v: "he/him" },
  { k: "Core stack", v: "React · Next.js · TypeScript · Node" },
  { k: "Also ship", v: "Express · MongoDB · Redis · Laravel · Electron" },
  { k: "Focus areas", v: "LMS, SCORM, RBAC, performance, accessibility" },
  { k: "Working style", v: "Own the feature end to end, ship weekly" },
  { k: "Known for", v: "Cleaning up half-finished, AI-generated codebases" },
  { k: "Open to", v: "Full-time · Delhi NCR or Noida · hybrid or remote" },
];

export const aboutStats: Stat[] = [
  { value: "4", label: "Years shipping", note: "2022 — present" },
  { value: "6,052", label: "Commits at work", note: "11 repositories" },
  { value: "10", label: "Systems in production", note: "LMS, exams, portals" },
  { value: "20+", label: "Projects delivered", note: "work and client" },
];
