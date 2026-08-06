"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { education } from "@/lib/data";
import { REVEAL_EASE, VIEWPORT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function Education() {
  const reducedMotion = usePrefersReducedMotion();
  const entry = education[0];

  if (!entry) return null;

  return (
    <section id="education" className="section-container py-16 md:py-24">
      <SectionHeader eyebrow="Education" heading="Where it started" />

      <motion.div
        initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.55, ease: REVEAL_EASE }}
        className="glass-strong max-w-2xl rounded-3xl p-6 md:p-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
              {entry.degree}
            </h3>
            <p className="mt-1 text-muted-strong">{entry.institution}</p>
          </div>
          <span className="rounded-full border border-surface-border px-3 py-1 font-mono text-[10px] tracking-wider text-muted uppercase">
            {entry.date}
          </span>
        </div>
        {entry.detail && (
          <p className="mt-4 text-sm text-muted">{entry.detail}</p>
        )}
      </motion.div>
    </section>
  );
}
