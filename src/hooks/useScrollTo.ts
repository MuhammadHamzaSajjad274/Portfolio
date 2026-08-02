"use client";

import { useCallback } from "react";
import { useLenis } from "@/components/effects/SmoothScroll";

const NAVBAR_OFFSET = -88;

export function useScrollTo() {
  const lenis = useLenis();

  return useCallback(
    (target: string) => {
      if (target === "top") {
        if (lenis) {
          lenis.scrollTo(0);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      const element = document.getElementById(target);
      if (!element) return;

      if (lenis) {
        lenis.scrollTo(element, { offset: NAVBAR_OFFSET });
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [lenis],
  );
}
