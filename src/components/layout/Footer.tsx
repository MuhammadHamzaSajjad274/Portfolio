"use client";

import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/data";
import { NAV_LINKS } from "@/lib/motion";
import { useScrollTo } from "@/hooks/useScrollTo";

export default function Footer() {
  const scrollTo = useScrollTo();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border">
      <div className="section-container py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <button
              type="button"
              onClick={() => scrollTo("top")}
              className="font-display text-xl text-foreground"
            >
              HS<span className="text-accent">.</span>
            </button>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              AI/ML Engineer building agents, RAG systems, and intelligent
              applications.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              data-cursor="link"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <GitHubIcon size={16} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-cursor="link"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <LinkedInIcon size={16} />
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-surface-border pt-6 text-center text-xs text-muted md:text-left">
          © {year} Hamza Sajjad. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
