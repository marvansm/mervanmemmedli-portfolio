"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  as: Component = "span",
}: AnimatedTextProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });

  const words = text.split(" ");

  return (
    <div ref={ref} className="overflow-hidden">
      <Component className={className}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <span
              className="inline-block"
              style={{
                transform: isVisible ? "translateY(0)" : "translateY(100%)",
                opacity: isVisible ? 1 : 0,
                transition: `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * 0.05}s, opacity 0.8s ease ${delay + i * 0.05}s`,
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </Component>
    </div>
  );
}

interface AnimatedLettersProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedLetters({
  text,
  className = "",
  delay = 0,
}: AnimatedLettersProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            transform: isVisible
              ? "translateY(0) rotate(0deg)"
              : "translateY(100%) rotate(10deg)",
            opacity: isVisible ? 1 : 0,
            transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * 0.03}s, opacity 0.6s ease ${delay + i * 0.03}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
