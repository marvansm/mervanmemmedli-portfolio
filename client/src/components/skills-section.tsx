"use client";

import { useLanguage } from "@/context/language-context";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { AnimatedText } from "./animated-text";

const skills = [
  { name: "React", icon: "⚛", color: "from-cyan-500/20 to-cyan-500/5" },
  { name: "Next.js", icon: "▲", color: "from-foreground/20 to-foreground/5" },
  { name: "TypeScript", icon: "TS", color: "from-blue-500/20 to-blue-500/5" },
  { name: "Node.js", icon: "⬢", color: "from-green-500/20 to-green-500/5" },
  { name: "JavaScript", icon: "🟨", color: "from-blue-400/20 to-blue-400/5" },
  { name: "Tailwind", icon: "🌊", color: "from-teal-500/20 to-teal-500/5" },
];

const technologies = [
  { name: "JavaScript", category: "language" },
  { name: "Firebase", category: "language" },
  { name: "Strapi", category: "api" },
  { name: "REST APIs", category: "api" },
  { name: "Sanity", category: "devops" },
  { name: "Cloudinary", category: "cloud" },
  { name: "Git", category: "tool" },
  { name: "Figma", category: "design" },
  { name: "Prisma", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "NextAuth", category: "auth" },
  { name: "JWT", category: "auth" },
  { name: "Supabase", category: "database" },
];

export function SkillsSection() {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative px-6 py-24 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span
            className="font-sans text-sm tracking-[0.3em] text-primary uppercase inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            {t.skills.label}
          </span>
          <AnimatedText
            text={t.skills.title}
            as="h2"
            className="font-sans text-3xl md:text-4xl font-bold text-foreground mt-2"
            delay={0.1}
          />
        </div>

        {/* Core Technologies - Hexagonal Grid */}
        <div className="mb-20">
          <h3
            className="font-sans text-lg font-semibold text-foreground mb-10 tracking-wide"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.6s ease 0.2s",
            }}
          >
            {t.skills.mainTech}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0) scale(1)"
                    : "translateY(30px) scale(0.9)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + index * 0.1}s`,
                }}
              >
                <div
                  className={`relative aspect-square rounded-2xl bg-linear-to-br ${skill.color} border border-border p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 group-hover:border-primary/50 group-hover:scale-105 group-hover:-translate-y-2 overflow-hidden`}
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
                  </div>

                  <span className="relative text-3xl md:text-4xl transition-transform duration-500 group-hover:scale-110">
                    {skill.icon}
                  </span>

                  {/* Name */}
                  <span className="relative font-sans text-sm font-medium text-foreground text-center tracking-wide">
                    {skill.name}
                  </span>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-primary/20 rotate-45 translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Technologies - Floating Tags */}
        <div>
          <h3
            className="font-sans text-lg font-semibold text-foreground mb-10 tracking-wide"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.6s ease 0.5s",
            }}
          >
            {t.skills.otherTech}
          </h3>

          <div className="relative">
            {/* Connecting lines background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <svg
                className="w-full h-full opacity-10"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-primary"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative flex flex-wrap gap-4 justify-center">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group relative"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.6 + index * 0.05}s`,
                  }}
                >
                  <div className="relative px-6 py-3 bg-card border border-border rounded-xl overflow-hidden transition-all duration-500 group-hover:border-primary/50 group-hover:-translate-y-1">
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    {/* Dot indicator */}
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />

                    <span className="relative font-sans text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 pl-2">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
      </div>
    </section>
  );
}
