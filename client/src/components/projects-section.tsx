"use client";

import React from "react";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { AnimatedText } from "./animated-text";
import { MagneticButton } from "./magnetic-button";

export function ProjectsSection() {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.05,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Bepositive",
      description: t.projects.descriptions.ecommerce,
      tags: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      thumbnail: "/bepositive.png",
      liveUrl: "https://bepositive.az/",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative px-6 py-24 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span
              className="font-sans text-sm tracking-[0.3em] text-primary uppercase inline-block"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              {t.projects.label}
            </span>
            <AnimatedText
              text={t.projects.title}
              as="h2"
              className="font-sans text-3xl md:text-4xl font-bold text-foreground mt-2"
              delay={0.1}
            />
          </div>

          <div
            className="hidden md:flex gap-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.6s ease 0.3s",
            }}
          >
            <MagneticButton strength={0.3}>
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </MagneticButton>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="relative cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-2"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "scale(1)" : "scale(0.95)",
                  transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + index * 0.1}s`,
                }}
              >
                <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <MagneticButton strength={0.5}>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary transition-all"
                          aria-label={`${project.title} Live Demo`}
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      </MagneticButton>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-sans text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="font-sans text-sm text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-sans text-xs px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full border border-border group-hover:border-primary/30 group-hover:text-primary transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div
          className="flex justify-center gap-3 mt-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-3 mt-6">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center text-foreground"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center text-foreground"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
