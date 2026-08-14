"use client";

import { useCallback } from "react";
import { useLenis } from "@/components/effects/SmoothScroll";
import { NAVBAR_SCROLL_OFFSET } from "@/lib/motion";

const NAVBAR_OFFSET = -NAVBAR_SCROLL_OFFSET;

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
        const top =
          element.getBoundingClientRect().top +
          window.scrollY -
          NAVBAR_SCROLL_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    [lenis],
  );
}
