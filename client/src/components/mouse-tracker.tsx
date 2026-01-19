"use client";

import { useEffect, useState, useRef } from "react";

export function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Smooth animation loop
  useEffect(() => {
    const animate = () => {
      setSmoothPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.15,
        y: prev.y + (mousePosition.y - prev.y) * 0.15,
      }));
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mousePosition]);

  return (
    <>
      {/* Main large glow effect - follows with delay */}
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(800px circle at ${smoothPosition.x}px ${smoothPosition.y}px, rgba(45, 212, 191, 0.04), transparent 40%)`,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Secondary medium glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(400px circle at ${smoothPosition.x}px ${smoothPosition.y}px, rgba(45, 212, 191, 0.06), transparent 40%)`,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Inner bright glow - immediate follow */}
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 212, 191, 0.08), transparent 50%)`,
          transition: "opacity 0.2s ease",
        }}
      />

      {/* Dot cursor */}
      <div
        className="pointer-events-none fixed z-50 w-2 h-2 rounded-full bg-primary mix-blend-difference"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      />
    </>
  );
}
