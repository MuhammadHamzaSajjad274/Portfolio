"use client";

import { cancelFrame, frame } from "framer-motion";
import Lenis from "lenis";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { NAVBAR_SCROLL_OFFSET } from "@/lib/motion";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis(): Lenis | null {
  return useContext(LenisContext);
}

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (reducedMotion) {
      setLenis(null);
      return;
    }

    const instance = new Lenis({
      lerp: 0.15,
      duration: 1.0,
      anchors: {
        offset: -NAVBAR_SCROLL_OFFSET,
      },
    });

    setLenis(instance);

    function update({ timestamp }: { timestamp: number }) {
      instance.raf(timestamp);
    }

    frame.update(update, true);

    return () => {
      frame.update(update, false);
      cancelFrame(update);
      instance.destroy();
      setLenis(null);
    };
  }, [reducedMotion]);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
