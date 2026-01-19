"use client";

import { useState, useRef, type MouseEvent } from "react";
import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: number;
}

export function ProfileImage({ src, alt, size = 320 }: ProfileImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -15;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 15;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative"
      style={{
        width: size,
        height: size,
        perspective: "1000px",
      }}
    >
      {/* Glowing ring effect */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from 0deg, var(--primary), transparent, var(--primary))`,
          opacity: isHovered ? 0.8 : 0.4,
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.05)`,
          transition: "opacity 0.3s ease, transform 0.2s ease-out",
          filter: "blur(20px)",
        }}
      />

      {/* Outer ring */}
      <div
        className="absolute inset-0 rounded-full border-2 border-primary/30"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.1)`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* Inner container */}
      <div
        className="relative w-full h-full rounded-full overflow-hidden border-4 border-card bg-card"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 0.2s ease-out",
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.1)"
            : "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover"
          priority
        />

        {/* Shine effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              ${135 + rotation.y}deg,
              rgba(255, 255, 255, 0.15) 0%,
              transparent 50%,
              rgba(0, 0, 0, 0.1) 100%
            )`,
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              opacity: isHovered ? 0.6 : 0,
              transform: isHovered
                ? `translate(${(Math.random() - 0.5) * 40}px, ${(Math.random() - 0.5) * 40}px) scale(${0.5 + Math.random()})`
                : "translate(0, 0) scale(0)",
              transition: `all 0.5s ease ${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
