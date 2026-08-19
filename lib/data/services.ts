/** What clients can hire me for — mirrors the services listed on LinkedIn. */
export interface Service {
  name: string;
  detail: string;
}

export const services: Service[] = [
  {
    name: "Web & product development",
    detail:
      "Marketing sites, portals and dashboards in React, Next.js and TypeScript — built to stay fast once real data arrives.",
  },
  {
    name: "SaaS & custom software",
    detail:
      "Multi-tenant products, role-based permissions, billing and admin tooling, front to back.",
  },
  {
    name: "Learning platforms & exam portals",
    detail:
      "LMS builds, SCORM playback, certificates, proctored exam flows — four years of it, not a first attempt.",
  },
  {
    name: "Vibe-code cleanup",
    detail:
      "AI-generated codebase that half works? I take it apart, fix the structure, and get it to something you can ship and maintain.",
  },
  {
    name: "Cloud & deployment",
    detail:
      "AWS, Docker, PM2 and GitHub Actions pipelines, so releases stop being an event.",
  },
  {
    name: "SEO & performance",
    detail:
      "Core Web Vitals, rendering strategy, structured data and the technical work that makes pages rank.",
  },
];
