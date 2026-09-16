"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import { usePreloader } from "@/components/effects/PreloaderContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useScrollTo } from "@/hooks/useScrollTo";
import { REVEAL_EASE } from "@/lib/motion";
import RoleRotator from "./RoleRotator";

const TAGS = ["RAG", "Multi-Agent Systems", "LLM Fine-tuning", "Deep Learning"];

interface AnimatedLineProps {
  text: string;
  active: boolean;
  baseDelay: number;
  reducedMotion: boolean;
}

function AnimatedLine({
  text,
  active,
  baseDelay,
  reducedMotion,
}: AnimatedLineProps) {
  if (reducedMotion) {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: baseDelay }}
        className="block"
      >
        {text}
      </motion.span>
    );
  }

  return (
    <span className="flex">
      {text.split("").map((char, index) => (
        <span key={`${text}-${index}`} className="overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "115%" }}
            animate={active ? { y: 0 } : { y: "115%" }}
            transition={{
              duration: 0.65,
              delay: baseDelay + index * 0.035,
              ease: REVEAL_EASE,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

interface FadeUpProps {
  active: boolean;
  delay: number;
  reducedMotion: boolean;
  children: ReactNode;
  className?: string;
}

function FadeUp({
  active,
  delay,
  reducedMotion,
  children,
  className = "",
}: FadeUpProps) {
  return (
    <motion.div
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      animate={
        active
          ? reducedMotion
            ? { opacity: 1 }
            : { opacity: 1, y: 0 }
          : reducedMotion
            ? { opacity: 0 }
            : { opacity: 0, y: 24 }
      }
      transition={{ duration: 0.6, delay, ease: REVEAL_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const { isComplete } = usePreloader();
  const reducedMotion = usePrefersReducedMotion();
  const scrollTo = useScrollTo();
  const [photoLoaded, setPhotoLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="section-container relative flex min-h-screen flex-col justify-center pt-28 pb-12 md:pt-32 md:pb-12"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <FadeUp active={isComplete} delay={0.05} reducedMotion={reducedMotion}>
            <div className="glass mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              <span className="font-mono text-[11px] tracking-[0.18em] text-muted-strong uppercase">
                Available for opportunities
              </span>
            </div>
          </FadeUp>

          <h1 className="font-display text-5xl leading-[0.95] font-bold sm:text-6xl md:text-7xl">
            <AnimatedLine
              text="Hamza"
              active={isComplete}
              baseDelay={0.12}
              reducedMotion={reducedMotion}
            />
            <AnimatedLine
              text="Sajjad"
              active={isComplete}
              baseDelay={0.28}
              reducedMotion={reducedMotion}
            />
          </h1>

          <FadeUp active={isComplete} delay={0.55} reducedMotion={reducedMotion}>
            <p className="mt-6 text-lg text-muted-strong md:text-xl">
              I&apos;m an <RoleRotator active={isComplete} />
            </p>
          </FadeUp>

          <FadeUp active={isComplete} delay={0.68} reducedMotion={reducedMotion}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-[17px]">
              I build LLM applications, multi-agent systems, machine learning
              models, and intelligent automations. Looking for AI/ML engineering
              roles, full-time or remote.
            </p>
          </FadeUp>

          <FadeUp active={isComplete} delay={0.8} reducedMotion={reducedMotion}>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {TAGS.map((tag) => (
                <li
                  key={tag}
                  className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm text-muted-strong"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {tag}
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp active={isComplete} delay={0.92} reducedMotion={reducedMotion}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                data-cursor="link"
                data-cursor-text="Projects"
                onClick={() => scrollTo("projects")}
                className="btn-accent btn-sweep hover-lift rounded-full px-6 py-3 text-sm font-medium text-background"
              >
                View My Work
              </button>
              <button
                type="button"
                data-cursor="link"
                data-cursor-text="Contact"
                onClick={() => scrollTo("contact")}
                className="glass hover-lift rounded-full border border-surface-border-strong px-6 py-3 text-sm font-medium text-foreground"
              >
                Get in Touch
              </button>
            </div>
          </FadeUp>
        </div>

        <FadeUp
          active={isComplete}
          delay={0.35}
          reducedMotion={reducedMotion}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden
            className="absolute inset-0 scale-110 rounded-[2rem] bg-[radial-gradient(circle,rgba(224,169,94,0.22)_0%,transparent_68%)] blur-2xl"
          />

          <div className="glass relative overflow-hidden rounded-[2rem] border border-surface-border-strong p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-background-elevated">
              {/* TODO: Swap in real photo at public/profile.png */}
              {!photoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/15 via-background-elevated to-signal/10">
                  <span className="font-display text-sm tracking-widest text-muted uppercase">
                    Photo
                  </span>
                </div>
              )}
              <Image
                src="/profile.png"
                alt="Hamza Sajjad"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover"
                onLoad={() => setPhotoLoaded(true)}
                onError={() => setPhotoLoaded(false)}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>
        </FadeUp>
      </div>

      <motion.div
        initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
        animate={
          isComplete
            ? reducedMotion
              ? { opacity: 1 }
              : { opacity: 1, y: 0 }
            : reducedMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 12 }
        }
        transition={{ duration: 0.55, delay: reducedMotion ? 0 : 1.15, ease: REVEAL_EASE }}
        className="mt-16 flex justify-center md:mt-20"
      >
        <button
          type="button"
          aria-label="Scroll to about section"
          data-cursor="link"
          onClick={() => scrollTo("about")}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase">
            Scroll
          </span>
          <motion.span
            animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={18} className="text-accent" />
          </motion.span>
        </button>
      </motion.div>
    </section>
  );
}
