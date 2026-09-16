"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skillCategories } from "@/lib/data";
import { REVEAL_EASE, VIEWPORT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const skillIcons: Record<string, string> = {
  "Python": "python",
  "JavaScript": "javascript",
  "TypeScript": "typescript",
  "LangChain": "langchain",
  "LangGraph": "langchain",
  "Hugging Face": "huggingface",
  "OpenAI APIs": "openai/white",
  "FastAPI": "fastapi",
  "Flask": "flask/white",
  "React": "react",
  "Next.js": "nextdotjs/white",
  "Node.js": "nodedotjs",
};

export default function Skills() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="skills" className="section-container py-16 md:py-24">
      <SectionHeader
        eyebrow="Skills"
        heading="The stack behind the work"
        subhead="Tools and frameworks I reach for when building AI systems end to end."
      />

      <div className="relative mt-8">
        

        <div className="relative z-10 grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: REVEAL_EASE,
              }}
              className="glass group/card relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_15px_30px_-15px_rgba(224,169,94,0.25)] md:p-7"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
              
              <h3 className="gradient-text relative z-10 inline-block font-display text-lg font-bold md:text-xl">
                {category.name}
              </h3>
              <ul className="relative z-10 mt-6 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => {
                  const iconSlug = skillIcons[skill];
                  return (
                    <li
                      key={skill}
                      className="group inline-flex items-center gap-2.5 rounded-full border border-surface-border/50 bg-surface/50 px-4 py-2 text-sm text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-accent/60 hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(224,169,94,0.2)]"
                    >
                      {iconSlug ? (
                        <img 
                          src={`https://cdn.simpleicons.org/${iconSlug}`} 
                          alt={skill} 
                          className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" 
                        />
                      ) : (
                        <span className="h-1.5 w-1.5 scale-100 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
                      )}
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
