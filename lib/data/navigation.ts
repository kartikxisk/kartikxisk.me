export interface NavItem {
  title: string;
  /** Lucide icon name */
  iconName: string;
  href: string;
}

export const navItems: NavItem[] = [
  { title: "Home", iconName: "Home", href: "#home" },
  { title: "About", iconName: "User", href: "#about" },
  { title: "Skills", iconName: "Code2", href: "#skills" },
  { title: "Experience", iconName: "Briefcase", href: "#experience" },
  { title: "Projects", iconName: "FolderOpen", href: "#projects" },
  { title: "Education", iconName: "GraduationCap", href: "#education" },
  { title: "Contact", iconName: "Mail", href: "#contact" },
];
