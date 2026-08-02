"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const ROLES = [
  "AI Engineer",
  "LLM Developer",
  "Machine Learning Engineer",
  "Deep Learning Engineer",
  "AI Researcher",
] as const;

const DISPLAY_MS = 2200;

interface RoleRotatorProps {
  active: boolean;
}

export default function RoleRotator({ active }: RoleRotatorProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!active || reducedMotion) return;

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % ROLES.length);
    }, DISPLAY_MS);

    return () => window.clearInterval(interval);
  }, [active, reducedMotion]);

  if (reducedMotion) {
    return (
      <span className="gradient-text inline-block min-w-[22ch]">
        {ROLES[0]}
      </span>
    );
  }

  return (
    <span className="relative inline-block min-w-[22ch] align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[index]}
          initial={{ opacity: 0, filter: "blur(8px)", y: "60%" }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(8px)", y: "-30%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-text absolute inset-x-0 bottom-0 inline-block"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
      <span aria-hidden className="invisible gradient-text">
        Machine Learning Engineer
      </span>
    </span>
  );
}
