"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";
import SectionHeader from "./SectionHeader";
import { aboutStats, education } from "@/lib/data";
import { REVEAL_EASE, VIEWPORT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function About() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="about" className="section-container py-16 md:py-24">
      <SectionHeader
        eyebrow="About"
        heading="Building AI that actually works."
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
            I&apos;m Hamza Sajjad, an AI Engineer who builds things that actually work.
            I&apos;ve created a medical assistant that responds in under two seconds, a
            system that tracks crisis events in real time, and a chatbot that
            remembers what you tell it, work that&apos;s been recognized nationally,
            including a strong result at the Huawei ICT Competition and a first-place
            win at a national tech competition.
          </p>
          <p>
            I care about AI that&apos;s reliable, not just impressive on paper. I&apos;m
            looking to join a team where I can keep building things that matter.
          </p>
          
          <div className="mt-10 md:mt-12">
            <h3 className="font-display text-xl font-bold text-foreground">Education</h3>
            {education.map(entry => (
              <div key={entry.id} className="mt-4 rounded-2xl border border-surface-border bg-surface/40 p-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-foreground">{entry.degree}</h4>
                    <p className="mt-1 text-sm text-muted-strong">{entry.institution}</p>
                  </div>
                  <span className="rounded-full border border-surface-border px-3 py-1 font-mono text-[10px] tracking-wider text-muted uppercase">
                    {entry.date}
                  </span>
                </div>
                {entry.detail && <p className="mt-3 text-sm text-muted">{entry.detail}</p>}
              </div>
            ))}
          </div>
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
