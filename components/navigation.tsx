"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import { navItems } from "@/lib/data/navigation";
import {
  Home,
  User,
  Code2,
  Briefcase,
  FolderOpen,
  GraduationCap,
  Mail,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="h-full w-full" />,
  User: <User className="h-full w-full" />,
  Code2: <Code2 className="h-full w-full" />,
  Briefcase: <Briefcase className="h-full w-full" />,
  FolderOpen: <FolderOpen className="h-full w-full" />,
  GraduationCap: <GraduationCap className="h-full w-full" />,
  Mail: <Mail className="h-full w-full" />,
};

const items = navItems.map((item) => ({
  title: item.title,
  icon: iconMap[item.iconName] ?? <Home className="h-full w-full" />,
  href: item.href,
}));

export const Navigation = () => {
  return <FloatingDock items={items} />;
};
