"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { REVEAL_EASE, VIEWPORT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    title: "National Round",
    issuer: "Huawei ICT Competition",
    date: "2024-25",
    description: "Achieved outstanding performance in the Computing Track at the national round of Huawei ICT Competition.",
    image: "/huawei.png",
  },
  {
    id: "ach-2",
    title: "Organizing Committee",
    issuer: "Huawei ICT Academy Workshop",
    date: "2024",
    description: "Served on the organizing committee for the Huawei ICT Academy Workshop, facilitating training and technical development sessions.",
    image: "/workshop.png",
  },
  {
    id: "ach-3",
    title: "Project Award / Recognition",
    issuer: "Open House & Job Fair",
    date: "2026",
    description: "Received project award and recognition at the Open House & Job Fair 2026 for technical excellence.",
    image: "/fyp.png",
  },
  {
    id: "ach-4",
    title: "1st Place – Project Exhibition",
    issuer: "Mega Code War 4.0",
    date: "2026",
    description: "First place in the Project Exhibition at Mega Code War 4.0, a competitive inter-university event recognizing innovation, teamwork, and technical excellence.",
    image: "/national.png",
  },
  {
    id: "ach-5",
    title: "Instructor",
    issuer: "AI & ML Fundamentals",
    date: "2025",
    description: "Acted as an instructor for the AI & ML Fundamentals course, teaching core concepts and practical applications of machine learning.",
    image: "/ai.png",
  },
  {
    id: "ach-6",
    title: "Associate AI Engineer for Developers",
    issuer: "DataCamp",
    date: "2025",
    description: "Completed a structured program covering applied AI engineering for developers. Verifiable via DataCamp's certification registry.",
    image: "/associate.png",
  },
  {
    id: "ach-7",
    title: "1st Position – Speed Programming",
    issuer: "TECHON 2025",
    date: "2025",
    description: "Secured first position in the Speed Programming competition at TechOn 2025, demonstrating rapid problem-solving and coding skills.",
    image: "/Speed.png",
  }
];

export default function Achievements() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="achievements" className="section-container py-16 md:py-24">
      <SectionHeader
        eyebrow="Certifications & Achievements"
        heading="Recognized beyond the classroom."
        subhead="Competition wins, industry certifications, and technical training."
        animateHeading
      />

      <div className="flex flex-col gap-6">
        {ACHIEVEMENTS.map((achievement, index) => (
          <motion.article
            key={achievement.id}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: REVEAL_EASE,
            }}
            className="glass hover-lift group rounded-3xl p-6 transition-shadow md:p-7"
          >
            <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-start lg:grid-cols-[1fr_1.5fr]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              <div className="flex h-full flex-col justify-center">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
                      {achievement.title}
                    </h3>
                    <p className="mt-1 font-mono text-[13px] text-accent uppercase tracking-wide">
                      {achievement.issuer}
                    </p>
                  </div>
                  <span className="glass rounded-full px-3 py-1 font-mono text-[11px] tracking-wider text-muted-strong">
                    {achievement.date}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                  {achievement.description}
                </p>

                <div className="mt-6 md:mt-8">
                  <a
                    href={achievement.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    data-cursor-text="View"
                    className="glass hover-lift inline-flex items-center gap-2 rounded-full border border-surface-border-strong px-4 py-2 text-sm font-medium text-foreground"
                  >
                    View Certificate
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
