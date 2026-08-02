"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface Particle {
  id: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
}

function createParticles(): Particle[] {
  return Array.from({ length: 8 }, (_, id) => ({
    id,
    left: `${8 + Math.random() * 84}%`,
    top: `${8 + Math.random() * 84}%`,
    duration: 4 + Math.random() * 5,
    delay: Math.random() * 6,
  }));
}

export default function SiteBackground() {
  const reducedMotion = usePrefersReducedMotion();
  const spotlightRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 50, y: 50 });
  const rafRef = useRef<number>(0);

  const particles = useMemo(() => createParticles(), []);

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
        particles.map((particle) => (
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
