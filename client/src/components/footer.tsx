"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { MagneticButton } from "./magnetic-button";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative px-6 py-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-6">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
          ].map((item) => (
            <MagneticButton key={item.label} strength={0.4}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                aria-label={item.label}
              >
                <item.icon className="w-5 h-5" />
              </a>
            </MagneticButton>
          ))}
        </div>
      </div>
    </footer>
  );
}
