"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skillCategories } from "@/lib/data";
import { REVEAL_EASE, VIEWPORT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function Skills() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="skills" className="section-container py-24 md:py-32">
      <SectionHeader
        eyebrow="Skills"
        heading="The stack behind the work"
        subhead="Tools and frameworks I reach for when building AI systems end to end."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{
              duration: 0.55,
              delay: index * 0.1,
              ease: REVEAL_EASE,
            }}
            className="glass rounded-3xl p-6 md:p-7"
          >
            <h3 className="font-display text-lg font-bold text-foreground md:text-xl">
              {category.name}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-surface-border bg-surface/50 px-3 py-1 text-sm text-muted-strong"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
