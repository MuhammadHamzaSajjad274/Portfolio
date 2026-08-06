"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { projects, type Project } from "@/lib/data";
import { REVEAL_EASE, VIEWPORT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

function ProjectActions({ project }: { project: Project }) {
  const hasGithub = Boolean(project.github);
  const hasLive = Boolean(project.liveUrl);
  const hasVideo = Boolean(project.videoUrl);

  if (!hasGithub && !hasLive && !hasVideo) {
    return (
      <p className="text-sm text-muted">
        Research Project. Code available on request
      </p>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {hasLive && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="link"
          data-cursor-text="Live"
          className="btn-accent btn-sweep hover-lift inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-background"
        >
          Visit Live Site
          <ExternalLink size={14} />
        </a>
      )}

      {hasVideo && (
        <a
          href={project.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="link"
          data-cursor-text="Demo"
          className="glass hover-lift inline-flex items-center gap-2 rounded-full border border-surface-border-strong px-4 py-2 text-sm font-medium text-foreground"
        >
          Watch Demo
          <Play size={14} className="fill-current" />
        </a>
      )}

      {hasGithub &&
        (hasLive ? (
          <a
            href={project.github!}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            data-cursor-text="GitHub"
            className="glass hover-lift inline-flex items-center gap-2 rounded-full border border-surface-border-strong px-4 py-2 text-sm font-medium text-foreground"
          >
            View on GitHub
            <ExternalLink size={14} />
          </a>
        ) : (
          <a
            href={project.github!}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            data-cursor-text="GitHub"
            className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-strong"
          >
            View on GitHub
            <ExternalLink size={14} />
          </a>
        ))}
    </div>
  );
}

export default function Projects() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="projects" className="section-container py-24 md:py-32">
      <SectionHeader
        eyebrow="Projects"
        heading="Things I've built"
        subhead="Research and independent projects built to solve real problems, not just to pass a course."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: REVEAL_EASE,
            }}
            className={`glass hover-lift group rounded-3xl p-6 transition-shadow md:p-7 ${
              project.featured ? "md:col-span-2" : ""
            }`}
          >
            <div
              className={
                project.featured
                  ? "grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-start"
                  : ""
              }
            >
              <div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="mt-1 text-sm text-accent">{project.subtitle}</p>
                    )}
                  </div>
                  {project.featured && (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] tracking-wider text-accent uppercase">
                      Featured
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-surface-border px-2.5 py-1 text-xs text-muted-strong"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={project.featured ? "md:pt-1" : "mt-5"}>
                <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                  Tech Stack
                </p>
                <p className="mt-2 text-sm text-muted-strong">
                  {project.tech.join(" · ")}
                </p>

                <div className="mt-5">
                  <ProjectActions project={project} />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
