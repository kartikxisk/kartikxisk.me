import { BackgroundGrid } from "@/components/ui/background-grid";
import { FloatingDock } from "@/components/ui/floating-dock";
import { ForkRepoButton } from "@/components/ui/fork-repo-button";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import {
  Home as HomeIcon,
  User,
  Code2,
  Briefcase,
  FolderOpen,
  GraduationCap,
  Mail,
} from "lucide-react";

const navItems = [
  { title: "Home", icon: <HomeIcon className="h-full w-full" />, href: "#home" },
  { title: "About", icon: <User className="h-full w-full" />, href: "#about" },
  { title: "Skills", icon: <Code2 className="h-full w-full" />, href: "#skills" },
  {
    title: "Experience",
    icon: <Briefcase className="h-full w-full" />,
    href: "#experience",
  },
  {
    title: "Projects",
    icon: <FolderOpen className="h-full w-full" />,
    href: "#projects",
  },
  {
    title: "Education",
    icon: <GraduationCap className="h-full w-full" />,
    href: "#education",
  },
  {
    title: "Contact",
    icon: <Mail className="h-full w-full" />,
    href: "#contact",
  },
];

export default function Home() {
  return (
    <BackgroundGrid className="min-h-screen">
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <FloatingDock items={navItems} />
      <ForkRepoButton />
    </BackgroundGrid>
  );
}
