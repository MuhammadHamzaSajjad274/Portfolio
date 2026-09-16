"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skillCategories } from "@/lib/data";
import { REVEAL_EASE, VIEWPORT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const skillIcons: Record<string, string> = {
  "PyTorch": "pytorch",
  "TensorFlow": "tensorflow",
  "Scikit-learn": "scikitlearn",
  "LangChain": "langchain",
  "ChromaDB": "chroma",
  "Pandas": "pandas",
  "Python": "python",
  "FastAPI": "fastapi",
  "Docker": "docker",
  "MLflow": "mlflow",
  "Git": "git/white",
  "Next.js": "nextdotjs/white",
  "React": "react",
  "TypeScript": "typescript",
  "JavaScript": "javascript",
  "Tailwind CSS": "tailwindcss",
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

      <div className="grid gap-5 sm:grid-cols-2">
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
            className="glass rounded-3xl p-6 md:p-7"
          >
            <h3 className="font-display text-lg font-bold text-foreground md:text-xl">
              {category.name}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                const iconSlug = skillIcons[skill];
                return (
                  <li
                    key={skill}
                    className="group inline-flex items-center gap-2.5 rounded-full border border-surface-border bg-surface px-4 py-2 text-sm text-muted-strong transition-all duration-300 hover:border-surface-border-strong hover:text-accent-strong hover:bg-surface-elevated hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    {iconSlug ? (
                      <img 
                        src={`https://cdn.simpleicons.org/${iconSlug}`} 
                        alt={skill} 
                        className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100" 
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
    </section>
  );
}
