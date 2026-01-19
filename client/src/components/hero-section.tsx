"use client";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { ProfileImage } from "./profile-image";
import { AnimatedText, AnimatedLetters } from "./animated-text";
import { MagneticButton } from "./magnetic-button";
import { useLanguage } from "@/context/language-context";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function HeroSection() {
  const { t } = useLanguage();
  const { ref: socialRef, isVisible: socialVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: scrollRef, isVisible: scrollVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-20 lg:px-24">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="mb-6 overflow-hidden">
            <span
              className="font-sans inline-block text-sm tracking-[0.3em] text-primary uppercase animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              MERN-Stack Developer
            </span>
          </div>

          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-2">
            <AnimatedLetters
              text={t.hero.title}
              className="text-balance"
              delay={0.3}
            />
          </h1>
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
            <AnimatedLetters
              text={t.hero.subtitle}
              className="text-primary"
              delay={0.5}
            />
          </h1>

          <div className="overflow-hidden mb-10">
            <p
              className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              {t.hero.description}
            </p>
          </div>

          <div
            className="flex flex-wrap gap-4 mb-12 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <MagneticButton strength={0.2}>
              <a
                href="#projects"
                className="font-sans inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold tracking-wider uppercase transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                {t.hero.viewProjects}
                <ExternalLink className="w-4 h-4" />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a
                href="#contact"
                className="font-sans inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg text-sm font-semibold tracking-wider uppercase transition-all hover:bg-secondary hover:border-primary/50"
              >
                {t.hero.contactMe}
              </a>
            </MagneticButton>
          </div>

          <div ref={socialRef} className="flex items-center gap-6">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://linkedin.com",
                label: "LinkedIn",
              },
              { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
            ].map((item, i) => (
              <MagneticButton key={item.label} strength={0.4}>
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  aria-label={item.label}
                  style={{
                    opacity: socialVisible ? 1 : 0,
                    transform: socialVisible
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition: `all 0.5s ease ${1.2 + i * 0.1}s`,
                  }}
                >
                  <item.icon className="w-6 h-6" />
                </a>
              </MagneticButton>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div
            className="animate-fade-in-scale"
            style={{ animationDelay: "0.6s" }}
          >
            <ProfileImage
              src="/marvan.png"
              alt="Developer Profile"
              size={350}
            />
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: scrollVisible ? 1 : 0,
          transform: scrollVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease 1.5s",
        }}
      >
        <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground uppercase">
          {t.hero.scrollToExplore}
        </span>
        <div className="w-px h-16 bg-linear-to-b from-primary to-transparent animate-pulse" />
      </div>
    </section>
  );
}
