"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/lib/data";
import { REVEAL_EASE, VIEWPORT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function Experience() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.4"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-container py-16 md:py-24"
    >
      <SectionHeader
        eyebrow="Experience"
        heading="Where I've learned by doing."
        subhead="Three internships, real codebases, real results."
      />

      <div className="relative">
        <div className="absolute top-0 bottom-0 left-3 w-px bg-surface-border md:left-4">
          <motion.div
            style={{
              scaleY: reducedMotion ? 1 : lineScale,
              transformOrigin: "top",
            }}
            className="h-full w-full bg-gradient-to-b from-accent/80 via-accent/40 to-transparent"
          />
        </div>

        <div className="space-y-8 md:space-y-10">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: REVEAL_EASE,
              }}
              className="relative pl-10 md:pl-12"
            >
              <motion.span
                aria-hidden
                animate={
                  reducedMotion
                    ? undefined
                    : { scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }
                }
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_var(--glow)] md:left-1"
              />

              <div className="glass-strong relative rounded-3xl p-6 md:p-8">
                <span className="absolute top-5 right-5 rounded-full border border-surface-border bg-surface/60 px-3 py-1 font-mono text-[10px] tracking-wider text-muted-strong uppercase">
                  {exp.date}
                </span>

                <div className="flex flex-wrap items-center gap-2 pr-24">
                  <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
                    {exp.role}
                  </h3>
                  {exp.badge && (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs text-accent">
                      {exp.badge}
                    </span>
                  )}
                </div>

                <p className="mt-1 text-base text-muted-strong">{exp.company}</p>

                <span className="mt-3 inline-flex rounded-full border border-surface-border px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted uppercase">
                  {exp.location}
                </span>

                <ul className="mt-6 space-y-3">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 text-sm leading-relaxed text-muted md:text-[15px]"
                    >
                      <span className="mt-0.5 shrink-0 text-accent">›</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
