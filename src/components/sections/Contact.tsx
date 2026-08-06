"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import SectionHeader from "./SectionHeader";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/data";
import { REVEAL_EASE, VIEWPORT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: LINKEDIN_URL,
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "MuhammadHamzaSajjad274",
    href: GITHUB_URL,
    icon: GitHubIcon,
  },
] as const;

export default function Contact() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="contact" className="section-container py-24 md:py-32">
      <SectionHeader
        eyebrow="Contact"
        heading="Let's build something together."
        subhead="Open to AI/ML engineering roles and interesting collaborations. Reach out."
      />

      <motion.div
        initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6, ease: REVEAL_EASE }}
        className="glass-strong relative overflow-hidden rounded-[2.5rem] p-8 md:p-12"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid opacity-30"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(224,169,94,0.18)_0%,transparent_70%)] blur-2xl"
        />

        <div className="relative text-center">
          <p className="mx-auto max-w-lg text-base text-muted md:text-lg">
            Whether it&apos;s a full-time role, an internship, or a project
            worth building. I&apos;d love to hear from you.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            data-cursor="link"
            data-cursor-text="Email"
            className="btn-accent btn-sweep hover-lift mt-8 inline-flex rounded-full px-8 py-3.5 text-sm font-medium text-background"
          >
            Say Hello
          </a>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              data-cursor="link"
              data-cursor-text="Email"
              className="glass hover-lift flex items-center gap-3 rounded-full px-4 py-2.5 text-left"
            >
              <Mail size={16} className="shrink-0 text-accent" />
              <span>
                <span className="block font-mono text-[10px] tracking-wider text-muted uppercase">
                  Email
                </span>
                <span className="block text-sm text-muted-strong">{EMAIL}</span>
              </span>
            </a>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                data-cursor-text={link.label}
                className="glass hover-lift flex items-center gap-3 rounded-full px-4 py-2.5 text-left"
              >
                <link.icon size={16} className="shrink-0 text-accent" />
                <span>
                  <span className="block font-mono text-[10px] tracking-wider text-muted uppercase">
                    {link.label}
                  </span>
                  <span className="block text-sm text-muted-strong">
                    {link.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
