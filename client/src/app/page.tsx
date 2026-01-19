"use client";

import { MouseTracker } from "@/components/mouse-tracker";
import { GrainOverlay } from "@/components/grain-overlay";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/context/language-context";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        <MouseTracker />

        <GrainOverlay />

        <Navigation />

        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
