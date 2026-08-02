"use client";

import { motion } from "framer-motion";
import { REVEAL_EASE, VIEWPORT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  subhead?: string;
  animateHeading?: boolean;
}

export default function SectionHeader({
  eyebrow,
  heading,
  subhead,
  animateHeading = false,
}: SectionHeaderProps) {
  const reducedMotion = usePrefersReducedMotion();
  const words = heading.split(" ");

  return (
    <div className="mb-12 md:mb-16">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
          {eyebrow}
        </span>
        <span className="h-px flex-1 max-w-16 bg-surface-border-strong" />
      </div>

      <h2 className="font-display text-3xl leading-tight font-bold text-foreground md:text-4xl lg:text-[2.75rem]">
        {animateHeading && !reducedMotion ? (
          words.map((word, index) => (
            <span key={`${word}-${index}`} className="mr-[0.28em] inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                  ease: REVEAL_EASE,
                }}
              >
                {word}
              </motion.span>
            </span>
          ))
        ) : (
          heading
        )}
      </h2>

      {subhead && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5, delay: 0.2, ease: REVEAL_EASE }}
          className="mt-4 max-w-2xl text-base text-muted md:text-lg"
        >
          {subhead}
        </motion.p>
      )}
    </div>
  );
}
