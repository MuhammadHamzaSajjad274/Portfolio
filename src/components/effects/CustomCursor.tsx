"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const SPRING = { stiffness: 500, damping: 40 };

export default function CustomCursor() {
  const [active, setActive] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [label, setLabel] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, SPRING);
  const springY = useSpring(cursorY, SPRING);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setActive(mq.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setActive(event.matches);
    };

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!active) return;

    document.body.classList.add("custom-cursor-active");

    const handleMouseMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = (event.target as Element).closest("[data-cursor]");
      if (target?.getAttribute("data-cursor") === "link") {
        setIsLink(true);
        setLabel(target.getAttribute("data-cursor-text") ?? "");
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      const related = event.relatedTarget as Element | null;
      if (!related?.closest("[data-cursor]")) {
        setIsLink(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [active, cursorX, cursorY]);

  if (!active) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        animate={{ scale: isLink ? 2.2 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className="relative -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            opacity: isLink ? 1 : 0,
            scale: isLink ? 1 : 0.6,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 -m-3 rounded-full border border-accent/60"
        />
        <div className="h-2 w-2 rounded-full bg-accent" />
      </motion.div>

      <AnimatePresence>
        {label && (
          <motion.span
            key={label}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 16 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-1/2 left-1/2 -translate-y-1/2 font-mono text-[10px] tracking-widest whitespace-nowrap text-accent uppercase"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
