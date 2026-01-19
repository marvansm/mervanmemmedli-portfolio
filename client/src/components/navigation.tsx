"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { MagneticButton } from "./magnetic-button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.about, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "az" : "en");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex items-center justify-between">
          <MagneticButton strength={0.3}>
            <a
              href="#"
              className="font-sans text-lg font-bold tracking-wider text-foreground hover:text-primary transition-colors"
            >Marvan Mammadli</a>
          </MagneticButton>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <MagneticButton key={item.href} strength={0.2}>
                <a
                  href={item.href}
                  className="font-sans text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase relative group"
                  style={{
                    animation: "fadeInDown 0.5s ease forwards",
                    animationDelay: `${i * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </MagneticButton>
            ))}

            <MagneticButton strength={0.3}>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:border-primary text-sm font-medium text-muted-foreground hover:text-primary transition-all"
                style={{
                  animation: "fadeInDown 0.5s ease forwards",
                  animationDelay: "0.4s",
                  opacity: 0,
                }}
              >
                <Globe className="w-4 h-4" />
                <span className="font-sans uppercase">{language}</span>
              </button>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded border border-border text-xs font-medium text-muted-foreground"
            >
              <Globe className="w-3 h-3" />
              <span className="font-sans uppercase">{language}</span>
            </button>
            <button
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-sans block text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
              style={{
                transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                opacity: isOpen ? 1 : 0,
                transition: `all 0.3s ease ${i * 0.05}s`,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
