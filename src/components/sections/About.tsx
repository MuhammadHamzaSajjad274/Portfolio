"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";
import SectionHeader from "./SectionHeader";
import { aboutStats } from "@/lib/data";
import { REVEAL_EASE, VIEWPORT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function About() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="about" className="section-container py-16 md:py-24">
      <SectionHeader
        eyebrow="About"
        heading="Building AI that actually works."
        subhead="Multi-agent systems, LLM applications, and machine learning pipelines built to solve real problems."
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
            I&apos;m Hamza Sajjad, an Artificial Intelligence graduate who
            builds AI tools that actually work in the real world. Through three
            internships, I&apos;ve worked on real projects like fraud detection
            and automated data reporting, and on my own I&apos;ve built an
            assistant that helps people get quick answers to medical questions,
            a system that tracks crisis events in real time, and a chatbot that
            remembers what you&apos;ve told it.
          </p>
          <p>
            I care about building things that are reliable and genuinely useful,
            not just impressive on paper. I&apos;m currently looking to join a
            team where I can keep learning and help build AI that makes a real
            difference.
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
            {aboutStats.map((stat, index) => (
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
