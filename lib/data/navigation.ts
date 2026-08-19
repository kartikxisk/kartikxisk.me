export interface NavItem {
  title: string;
  /** Source-path style annotation shown in the section header. */
  path: string;
  href: string;
}

export const navItems: NavItem[] = [
  { title: "Index", path: "app/page.tsx", href: "#home" },
  { title: "Profile", path: "lib/data/about.ts", href: "#about" },
  { title: "Stack", path: "lib/data/skills.ts", href: "#skills" },
  { title: "Work history", path: "lib/data/experience.ts", href: "#experience" },
  { title: "Projects", path: "lib/data/projects.ts", href: "#projects" },
  { title: "Education", path: "lib/data/education.ts", href: "#education" },
  { title: "Contact", path: "lib/data/site.ts", href: "#contact" },
];

/** Zero-padded sheet number for a section, e.g. 03. */
export const sheetNo = (i: number) => String(i + 1).padStart(2, "0");
