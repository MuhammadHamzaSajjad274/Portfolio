"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";
import SectionHeader from "./SectionHeader";
import { REVEAL_EASE, VIEWPORT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const STATS = [
  { value: 3, suffix: "+", label: "Internships" },
  { value: 4, suffix: "", label: "Projects Built" },
  { value: 98, suffix: "%", label: "Best Model Accuracy" },
  { value: 1, suffix: "", label: "National Finalist" },
] as const;

export default function About() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="about" className="section-container py-24 md:py-32">
      <SectionHeader
        eyebrow="About"
        heading="Recently graduated. Ready to build."
        subhead="AI/ML engineer with three internships and a research-grade project behind me — here's the short version."
        animateHeading
      />

      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: REVEAL_EASE }}
          className="max-w-xl space-y-5 text-base leading-relaxed text-muted md:text-[17px]"
        >
          <p>
            I&apos;m Hamza Sajjad, a recent Artificial Intelligence graduate
            from the University of Wah, Pakistan. Over the past few years
            I&apos;ve completed three internships and built several AI projects
            — from an assistant that helps patients quickly get the right
            medical guidance, to a model that predicts how the brain might
            respond to different treatments.
          </p>
          <p>
            What draws me to AI is the moment an idea stops being just an
            experiment and becomes something that actually works — something
            people can use. I like turning smart ideas into real, working
            systems, not leaving them as research notebooks.
          </p>
          <p>
            Before I trust any result, I test it carefully to make sure it
            holds up on new, unseen data — and I build things so they&apos;re
            easy to check, understand, and improve later. I&apos;m just starting
            out, but I&apos;m looking to keep growing in this space and join a
            team where I can keep building things that matter.
          </p>
        </motion.div>

        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, delay: 0.12, ease: REVEAL_EASE }}
          className="glass-strong relative overflow-hidden rounded-3xl p-6 md:p-8"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-dots opacity-60"
          />
          <div className="relative grid grid-cols-2 gap-6">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + index * 0.1,
                  ease: REVEAL_EASE,
                }}
                className="rounded-2xl border border-surface-border bg-surface/40 p-4 md:p-5"
              >
                <p className="font-display text-3xl font-bold text-foreground md:text-4xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
