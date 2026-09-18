"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  Cpu,
  Database,
  Link2,
  MessageSquare,
  Network,
  ScanSearch,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { ComponentType, CSSProperties } from "react";
import {
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGooglegemini,
  SiHuggingface,
  SiJavascript,
  SiNodedotjs,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import SectionHeader from "./SectionHeader";
import { skills } from "@/lib/data";
import { REVEAL_EASE, VIEWPORT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type SkillIcon = ComponentType<{
  className?: string;
  size?: number;
  style?: CSSProperties;
  strokeWidth?: number;
}>;

const skillIcons: Record<string, SkillIcon> = {
  python: SiPython,
  pytorch: SiPytorch,
  tensorflow: SiTensorflow,
  "scikit-learn": SiScikitlearn,
  pandas: SiPandas,
  numpy: SiNumpy,
  "machine-learning": Brain,
  "deep-learning": Cpu,
  nlp: MessageSquare,
  "computer-vision": ScanSearch,
  "generative-ai": Sparkles,
  llms: MessageSquare,
  rag: Link2,
  "ai-agents": Bot,
  "ai-automation": Workflow,
  langchain: Link2,
  langgraph: Network,
  "hugging-face": SiHuggingface,
  "openai-apis": Bot,
  chromadb: Database,
  gemini: SiGooglegemini,
  fastapi: SiFastapi,
  flask: SiFlask,
  "node-js": SiNodedotjs,
  sql: Database,
  "rest-apis": Network,
  docker: SiDocker,
  git: SiGit,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  "next-js": SiNextdotjs,
  "tailwind-css": SiTailwindcss,
};

const BRAND_COLORS: Record<string, string> = {
  Python: "#3776AB",
  PyTorch: "#EE4C2C",
  TensorFlow: "#FF6F00",
  "Scikit-learn": "#F7931E",
  Pandas: "#150458",
  NumPy: "#4DABCF",
  Docker: "#2496ED",
  GitHub: "#FFFFFF",
  React: "#61DAFB",
  "Next.js": "#FFFFFF",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  "Node.js": "#339933",
  FastAPI: "#009688",
  Flask: "#FFFFFF",
  Git: "#F05032",
  "Hugging Face": "#FFD21E",
  "OpenAI APIs": "#FFFFFF",
  Gemini: "#8E75B2",
  "Tailwind CSS": "#06B6D4",
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

      <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {skills.map((skill, index) => {
          const Icon = skillIcons[skill.iconKey];
          const brandColor = BRAND_COLORS[skill.name] ?? "var(--accent)";

          return (
            <motion.div
              key={skill.name}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT}
              transition={{
                duration: 0.4,
                delay: reducedMotion ? 0 : Math.min(index * 0.03, 0.6),
                ease: REVEAL_EASE,
              }}
              className="glass group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-surface-border p-4 transition-all duration-300 hover:-translate-y-1 hover:border-surface-border-strong hover:bg-surface-strong"
            >
              <Icon
                aria-hidden
                size={34}
                style={{ color: brandColor }}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
              <span
                style={{ "--skill-brand-color": brandColor } as CSSProperties}
                className="text-center font-mono text-xs text-muted transition-colors duration-300 group-hover:text-[var(--skill-brand-color)]"
              >
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
