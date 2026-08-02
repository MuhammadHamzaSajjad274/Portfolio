"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const SPRING = { stiffness: 300, damping: 40 };

export default function ScrollProgress() {
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(
    scrollYProgress,
    reducedMotion ? { stiffness: 1000, damping: 100 } : SPRING,
  );

  const scaleX = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 right-0 left-0 z-50 h-[2px] origin-left bg-accent"
      style={{ scaleX }}
    >
      <span className="sr-only">Scroll progress</span>
    </motion.div>
  );
}
