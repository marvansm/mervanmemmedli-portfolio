"use client";

import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { AnimatedText } from "./animated-text";

export function ExperienceSection() {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
  });

  const experiences = [
    {
      period: `2025 — ${t.experience.present}`,
      title: "MERN Stack Developer",
      company: "Bepositive",
      companyUrl: "https://bepositive.az/",
      description: t.experience.descriptions.senior,
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express.js",
      ],
    },
    {
      period: "2025 — 2026",
      title: "MERN-Stack Developer",
      company: "Codexpert Lab",
      companyUrl: "https://codexpert.az/",
      description: t.experience.descriptions.fullstack,
      skills: ["Node.js", "React", "TypeScript", "Figma", "Git"],
    },
    {
      period: "2023 — 2025",
      title: "Frontend Developer",
      company: "",
      companyUrl: "#",
      description: t.experience.descriptions.frontend,
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Figma", "Git"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
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
            {t.experience.label}
          </span>
          <AnimatedText
            text={t.experience.title}
            as="h2"
            className="font-sans text-3xl md:text-4xl font-bold text-foreground mt-2"
            delay={0.1}
          />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-40px)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + index * 0.15}s`,
              }}
            >
              <div className="hidden md:block absolute left-[200px] top-0 bottom-0 w-px">
                <div
                  className="h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"
                  style={{
                    transform: isVisible ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "top",
                    transition: `transform 0.8s ease ${0.4 + index * 0.15}s`,
                  }}
                />
              </div>

              <div
                className="hidden md:block absolute left-[196px] top-1 w-2 h-2 rounded-full bg-primary"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "scale(1)" : "scale(0)",
                  transition: `all 0.4s ease ${0.5 + index * 0.15}s`,
                }}
              />

              <div className="font-sans text-sm text-muted-foreground tracking-wider">
                {exp.period}
              </div>

              <div className="space-y-3 pl-0 md:pl-8">
                <div>
                  <h3 className="font-sans text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    <span className="font-sans text-sm font-medium">
                      {exp.company}
                    </span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="font-sans text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "scale(1)" : "scale(0.8)",
                        transition: `all 0.3s ease ${0.6 + index * 0.15 + skillIndex * 0.05}s`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
