import { BackgroundGrid } from "@/components/ui/background-grid";
import { ForkRepoButton } from "@/components/ui/fork-repo-button";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { Navigation } from "@/components/navigation";

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
      <Navigation />
      <ForkRepoButton />
    </BackgroundGrid>
  );
}
