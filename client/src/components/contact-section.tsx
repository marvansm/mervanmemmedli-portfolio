"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { AnimatedText } from "./animated-text";
import { MagneticButton } from "./magnetic-button";

export function ContactSection() {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      id="contact"
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
            {t.contact.label}
          </span>
          <AnimatedText
            text={t.contact.title}
            as="h2"
            className="font-sans text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance"
            delay={0.1}
          />
          <p
            className="text-muted-foreground mt-4 max-w-xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease 0.2s",
            }}
          >
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div
              className="flex items-start gap-4 group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-30px)",
                transition: "all 0.6s ease 0.3s",
              }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold text-foreground tracking-wider mb-1">
                  {t.contact.email}
                </h3>
                <a
                  href="mailto:hello@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@example.com
                </a>
              </div>
            </div>

            <div
              className="flex items-start gap-4 group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-30px)",
                transition: "all 0.6s ease 0.4s",
              }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold text-foreground tracking-wider mb-1">
                  {t.contact.location}
                </h3>
                <p className="text-muted-foreground">
                  {t.contact.locationValue}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="space-y-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.6s ease 0.3s",
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="font-sans text-sm font-medium text-foreground block mb-2"
                >
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="font-sans w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-sans text-sm font-medium text-foreground block mb-2"
                >
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="font-sans w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="font-sans text-sm font-medium text-foreground block mb-2"
              >
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="font-sans w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                placeholder={t.contact.form.messagePlaceholder}
              />
            </div>

            <MagneticButton strength={0.15}>
              <button
                type="submit"
                className="font-sans inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold tracking-wider uppercase transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                {t.contact.form.send}
                <Send className="w-4 h-4" />
              </button>
            </MagneticButton>
          </form>
        </div>
      </div>
    </section>
  );
}
