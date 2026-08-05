"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePreloader } from "@/components/effects/PreloaderContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { NAV_LINKS } from "@/lib/motion";
import { useScrollTo } from "@/hooks/useScrollTo";

export default function Navbar() {
  const { isComplete } = usePreloader();
  const reducedMotion = usePrefersReducedMotion();
  const scrollTo = useScrollTo();

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const ratiosRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navSections = NAV_LINKS.map((link) =>
      document.getElementById(link.id),
    ).filter(Boolean) as HTMLElement[];

    const heroSection = document.getElementById("hero");
    const sections = heroSection
      ? [heroSection, ...navSections]
      : navSections;

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratiosRef.current.set(entry.target.id, entry.intersectionRatio);
        });

        let bestId = "";
        let bestRatio = 0;

        ratiosRef.current.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestRatio > 0) {
          setActiveSection(bestId === "hero" ? "" : bestId);
        }
      },
      {
        rootMargin: "-42% 0px -42% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={reducedMotion ? false : { opacity: 0, y: -24 }}
        animate={
          isComplete
            ? { opacity: 1, y: 0 }
            : reducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -24 }
        }
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 right-0 left-0 z-40 px-4 md:top-6"
      >
        <nav
          className={`mx-auto flex max-w-4xl items-center justify-between rounded-full px-3 py-2 transition-all duration-300 md:px-4 md:py-2.5 ${
            scrolled ? "glass-strong shadow-[0_8px_32px_var(--glow)]" : "glass"
          }`}
        >
          <button
            type="button"
            data-cursor="link"
            data-cursor-text="Top"
            onClick={() => scrollTo("top")}
            className="font-display text-lg tracking-tight text-foreground"
          >
            HS<span className="text-accent">.</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  data-cursor="link"
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-1.5 text-sm transition-colors ${
                    activeSection === link.id
                      ? "text-foreground"
                      : "text-muted hover:text-muted-strong"
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-accent/12"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <button
              type="button"
              data-cursor="link"
              data-cursor-text="Contact"
              onClick={() => handleNavClick("contact")}
              className="btn-accent rounded-full px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_24px_var(--glow)]"
            >
              Get in Touch
            </button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 glass-strong md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-6">
              {NAV_LINKS.map((link, index) => (
                <motion.button
                  key={link.id}
                  type="button"
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: reducedMotion ? 0 : 0.08 + index * 0.07 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`font-display text-3xl ${
                    activeSection === link.id ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                type="button"
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: reducedMotion ? 0 : 0.08 + NAV_LINKS.length * 0.07 }}
                onClick={() => handleNavClick("contact")}
                className="btn-accent mt-4 rounded-full px-6 py-3 text-base font-medium text-background"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
