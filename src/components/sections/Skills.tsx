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
                  className="group inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-3 py-1 text-sm text-muted-strong transition-colors duration-300 hover:border-surface-border-strong hover:text-accent-strong"
                >
                  <span className="h-1.5 w-1.5 scale-100 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
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
