/**
 * Systems shipped during employment. Commit counts are this author's own
 * commits in each repository, measured 2022-08 → 2026-08.
 * Product-level detail only — no internal hosts, credentials or infra layout.
 */
export interface WorkSystem {
  name: string;
  kind: string;
  summary: string;
  stack: string[];
  commits: number;
  years: string;
}

export const workSystems: WorkSystem[] = [
  {
    name: "Cyberyami LMS",
    kind: "Learning platform",
    summary:
      "Course delivery for colleges and enterprise cohorts — SCORM playback, progress tracking, certificate generation and queued background jobs for the heavy work.",
    stack: ["Next.js", "Express", "MongoDB", "Redis", "BullMQ", "AWS S3"],
    commits: 3219,
    years: "2022 — 2026",
  },
  {
    name: "Cyberyami Platform",
    kind: "Product web app",
    summary:
      "The main product surface: jobs board, CTF compete module, micro-learning, learner dashboards and reporting charts.",
    stack: ["Next.js", "Redux Toolkit", "Recharts", "Socket.IO", "Express"],
    commits: 1477,
    years: "2023 — 2026",
  },
  {
    name: "Admin Console",
    kind: "Internal operations",
    summary:
      "Back-office for the whole platform — role-based permissions, bulk exports, generated PDF reports and payment reconciliation.",
    stack: ["Next.js", "MUI", "Redux Toolkit", "ExcelJS", "PDFKit", "Puppeteer"],
    commits: 811,
    years: "2023 — 2026",
  },
  {
    name: "Security Awareness Suite",
    kind: "Multi-tenant SaaS",
    summary:
      "Tenant-isolated training and phishing-simulation platform built as a Turborepo monorepo with shared typed contracts, a shared component library and end-to-end tests.",
    stack: ["TypeScript", "Turborepo", "pnpm", "Zod", "shadcn/ui", "Playwright"],
    commits: 229,
    years: "2026",
  },
  {
    name: "Partner Portal",
    kind: "B2B portal",
    summary:
      "Onboarding, catalogue access and revenue reporting for training partners and resellers.",
    stack: ["Next.js", "Redux Toolkit", "Express", "MongoDB"],
    commits: 101,
    years: "2023 — 2026",
  },
  {
    name: "Community Forum",
    kind: "Realtime community",
    summary:
      "Threaded discussions with live notifications, moderation tooling and single sign-on shared with the main platform.",
    stack: ["Next.js", "Socket.IO", "Express", "JWT"],
    commits: 71,
    years: "2022 — 2026",
  },
  {
    name: "Accounts & Billing",
    kind: "Auth service",
    summary:
      "Central sign-in shared across every product, plus subscription and invoice handling.",
    stack: ["Next.js", "Express", "Mongoose", "Stripe"],
    commits: 65,
    years: "2023 — 2026",
  },
  {
    name: "LevelUp Exam Suite",
    kind: "Proctored exams",
    summary:
      "Certification exam portal plus a locked-down Windows desktop client for supervised test sessions.",
    stack: ["Next.js", "Electron", "Nextron", "Express", "MongoDB"],
    commits: 66,
    years: "2024 — 2026",
  },
  {
    name: "Content Pipeline",
    kind: "Docs infrastructure",
    summary:
      "Single-source repository for every course, lab and script, rendered to an internal review portal with a git-based approval flow.",
    stack: ["MkDocs Material", "Markdown", "GitHub Actions"],
    commits: 9,
    years: "2026",
  },
  {
    name: "Remote Lab Gateway",
    kind: "Infrastructure",
    summary:
      "Browser access to hands-on lab machines through a small Go relay service.",
    stack: ["Go", "WebSockets", "VNC"],
    commits: 4,
    years: "2026",
  },
];

export const workTotals = {
  commits: workSystems.reduce((sum, s) => sum + s.commits, 0),
  systems: workSystems.length,
};
