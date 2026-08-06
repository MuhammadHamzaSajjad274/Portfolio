"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BarChart2,
  Code2,
  Medal,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { REVEAL_EASE, VIEWPORT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface Achievement {
  id: string;
  icon: LucideIcon;
  year: string;
  category: string;
  title: string;
  issuer: string;
  context: string;
  tags: string[];
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    icon: Trophy,
    year: "2024",
    category: "National Competition",
    title: "Outstanding Performance, National Round",
    issuer: "Huawei ICT Competition 2024-25",
    context:
      "Achieved outstanding performance in the Computing Track at the national round of Huawei ICT Competition, organized by Huawei Technologies Pakistan Pvt Ltd.",
    tags: ["Computing Track", "National Level"],
  },
  {
    id: "ach-2",
    icon: Medal,
    year: "2026",
    category: "Inter-University Competition",
    title: "Winner, Project Exhibition",
    issuer: "Mega Code War 4.0, HITEC University",
    context:
      "First place in the Project Exhibition at Mega Code War 4.0, a competitive inter-university event recognizing innovation, teamwork, and technical excellence.",
    tags: ["1st Place", "Team Event"],
  },
  {
    id: "ach-3",
    icon: BadgeCheck,
    year: "2026",
    category: "Industry Certification",
    title: "Associate AI Engineer for Developers",
    issuer: "DataCamp, Certificate #837,799",
    context:
      "Completed a 26-hour structured program covering applied AI engineering for developers. Verifiable via DataCamp's certification registry.",
    tags: ["AI Engineering", "Verified"],
  },
  {
    id: "ach-4",
    icon: Code2,
    year: "2025",
    category: "Technical Competition",
    title: "1st Place, Speed Programming",
    issuer: "TechOn 2025, University of Wah",
    context:
      "Secured first position in the Speed Programming competition at TechOn 2025, the annual flagship tech event of the Department of Computer Science.",
    tags: ["1st Place", "Programming"],
  },
  {
    id: "ach-5",
    icon: BarChart2,
    year: "2025",
    category: "Professional Bootcamp",
    title: "Data Analytics Bootcamp",
    issuer: "Atomcamp, Feb to Apr 2025",
    context:
      "Completed an intensive bootcamp covering Advanced Excel, SQL, Power BI, GIS, and Python for Data Analytics, directly applied in the AFT/Digitt++ internship.",
    tags: ["Data Analytics", "SQL & Python"],
  },
];

export default function Achievements() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="achievements" className="section-container py-24 md:py-32">
      <SectionHeader
        eyebrow="Achievements"
        heading="Recognized beyond the classroom."
        subhead="Competition wins, industry certifications, and technical training."
        animateHeading
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((achievement, index) => {
          const Icon = achievement.icon;
          const isLast = index === ACHIEVEMENTS.length - 1;

          return (
            <motion.article
              key={achievement.id}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: REVEAL_EASE,
              }}
              className={`glass-strong flex flex-col rounded-3xl p-6 transition-all duration-300 hover:border-surface-border-strong hover:bg-surface-strong md:p-7 ${
                isLast ? "md:col-span-2 lg:col-span-3 lg:mx-auto lg:w-full lg:max-w-sm" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <Icon size={22} className="shrink-0 text-accent" aria-hidden />
                <span className="glass rounded-full px-2.5 py-1 font-mono text-[10px] tracking-wider text-accent">
                  {achievement.year}
                </span>
              </div>

              <p className="mt-5 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                {achievement.category}
              </p>

              <h3 className="mt-2 font-display text-lg leading-tight font-bold text-foreground md:text-xl">
                {achievement.title}
              </h3>

              <p className="mt-2 font-mono text-xs text-accent">{achievement.issuer}</p>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {achievement.context}
              </p>

              <div className="mt-6 border-t border-surface-border pt-4">
                <ul className="flex flex-wrap gap-2">
                  {achievement.tags.map((tag) => (
                    <li
                      key={tag}
                      className="glass rounded-full px-2.5 py-1 font-mono text-[10px] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
