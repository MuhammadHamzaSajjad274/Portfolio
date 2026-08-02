"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useMarkPreloaderComplete, usePreloader } from "./PreloaderContext";

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

export default function Preloader() {
  const reducedMotion = usePrefersReducedMotion();
  const { isComplete } = usePreloader();
  const markComplete = useMarkPreloaderComplete();
  const [visible, setVisible] = useState(!isComplete);

  useEffect(() => {
    if (isComplete) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    if (reducedMotion) {
      const timer = window.setTimeout(() => setVisible(false), 120);
      return () => {
        window.clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }

    const timer = window.setTimeout(() => setVisible(false), 300);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [isComplete, reducedMotion]);

  const handleExitComplete = () => {
    document.body.style.overflow = "";
    markComplete();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: reducedMotion ? 1 : 0.96,
          }}
          transition={{
            duration: reducedMotion ? 0.12 : 0.2,
            ease: "easeOut",
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {reducedMotion ? (
            <span className="font-display text-7xl font-bold md:text-9xl">
              H<span className="text-accent">S</span>
            </span>
          ) : (
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.25, ease: REVEAL_EASE }}
              >
                <span className="font-display text-7xl font-bold md:text-9xl">
                  H<span className="text-accent">S</span>
                </span>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
