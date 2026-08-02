"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface Particle {
  id: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
}

const PARTICLES: Particle[] = [
  { id: 0, left: "14%", top: "22%", duration: 5.2, delay: 0.4 },
  { id: 1, left: "72%", top: "18%", duration: 6.8, delay: 1.6 },
  { id: 2, left: "38%", top: "64%", duration: 4.6, delay: 2.8 },
  { id: 3, left: "84%", top: "48%", duration: 7.4, delay: 0.9 },
  { id: 4, left: "26%", top: "78%", duration: 5.9, delay: 3.5 },
  { id: 5, left: "58%", top: "34%", duration: 6.2, delay: 1.2 },
  { id: 6, left: "91%", top: "72%", duration: 4.9, delay: 4.1 },
  { id: 7, left: "46%", top: "88%", duration: 7.1, delay: 2.3 },
];

export default function SiteBackground() {
  const reducedMotion = usePrefersReducedMotion();
  const spotlightRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 50, y: 50 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (reducedMotion) return;

    const updateSpotlight = () => {
      rafRef.current = 0;
      spotlightRef.current?.style.setProperty(
        "--spotlight-x",
        `${mouseRef.current.x}%`,
      );
      spotlightRef.current?.style.setProperty(
        "--spotlight-y",
        `${mouseRef.current.y}%`,
      );
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      };

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateSpotlight);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-grid opacity-40 mask-fade-y" />

      <div
        className={`absolute -top-[15%] -left-[10%] h-[600px] w-[600px] rounded-full blur-2xl ${
          reducedMotion ? "" : "animate-aurora"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(224,169,94,0.16) 0%, transparent 70%)",
          animationDelay: "0s",
        }}
      />
      <div
        className={`absolute top-[20%] -right-[12%] h-[550px] w-[550px] rounded-full blur-2xl ${
          reducedMotion ? "" : "animate-aurora"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(224,169,94,0.14) 0%, transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className={`absolute -bottom-[10%] left-[25%] h-[700px] w-[700px] rounded-full blur-2xl ${
          reducedMotion ? "" : "animate-aurora"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(127,199,196,0.1) 0%, transparent 70%)",
          animationDelay: "-11s",
        }}
      />

      {!reducedMotion &&
        PARTICLES.map((particle) => (
          <span
            key={particle.id}
            className="absolute h-px w-px animate-float rounded-full bg-accent/40"
            style={{
              left: particle.left,
              top: particle.top,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}

      <div
        ref={spotlightRef}
        className="absolute inset-0"
        style={{
          background: reducedMotion
            ? "radial-gradient(circle 600px at 50% 40%, rgba(224,169,94,0.06) 0%, transparent 70%)"
            : "radial-gradient(circle 500px at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(224,169,94,0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
