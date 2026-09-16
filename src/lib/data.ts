export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  date: string;
  highlights: string[];
  badge?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  tech: string[];
  github: string | null;
  liveUrl?: string;
  videoUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  date: string;
  detail?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface AboutStat {
  value: number;
  suffix: string;
  label: string;
}

export const aboutStats: AboutStat[] = [
  { value: 1, suffix: "+ Year", label: "Experience" },
  { value: 6, suffix: "+", label: "Projects Built" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 1, suffix: "", label: "Huawei ICT, Nat. Round" },
];

export const EMAIL = "hamzasajjad293@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/m-hamza-s-7166a0268";
export const GITHUB_URL = "https://github.com/MuhammadHamzaSajjad274";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Data Analytics & AI Intern",
    company: "AFT / Digitt++",
    location: "Lahore, Pakistan",
    date: "Jul to Aug 2025",
    highlights: [
      "Built an XGBoost ensemble for fintech fraud detection on 100K+ transaction records using SMOTE and SHAP-based feature selection, achieving a 9% uplift in fraud recall.",
      "Engineered 5+ automated dashboards (Pandas, Matplotlib, Seaborn), reducing manual reporting effort by 40%; insights informed 3 product feature updates.",
    ],
  },
  {
    id: "exp-2",
    role: "Machine Learning Intern",
    company: "Arch Technologies",
    location: "Remote",
    date: "May to Jun 2025",
    highlights: [
      "Developed Random Forest and gradient boosting classifiers for business analytics (F1 0.88+) using stratified cross-validation and L2 regularization on imbalanced datasets.",
    ],
  },
  {
    id: "exp-3",
    role: "AI & ML Engineering Intern",
    company: "DevelopersHub Corporation",
    location: "Remote",
    date: "Dec 2024 to Feb 2025",
    badge: "⭐ Best Performance Award",
    highlights: [
      "Built automated ML pipelines for classification, regression, and clustering using Scikit-learn and PyTorch, earning Best Performance Award for the internship cohort.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "proj-4",
    title: "EEG-Guided Digital Brain Twin",
    subtitle: "National Finalist / 1st Prize Winner",
    description:
      "A research project simulating how the brain might respond to different treatments, using brain activity data, reaching 98% accuracy in predicting outcomes.",
    tags: ["Research Project", "Generative Modeling", "Healthcare AI"],
    tech: ["CVAE", "ChemBERTa", "Python"],
    github: null,
    liveUrl: "https://eeg-guided-digital-brain-twin.vercel.app/",
    featured: false,
  },
  {
    id: "proj-1",
    title: "MedOrch AI",
    subtitle: "Multi-Agent Medical Assistant",
    description:
      "An AI assistant that helps people quickly understand medical questions and get the right guidance, powered by a team of specialized AI agents working together, with voice support and sub-2-second response times.",
    tags: ["Multi-Agent System", "Voice Interface", "Fast Response Time"],
    tech: ["LangGraph", "Mistral-7B", "RAG", "FastAPI"],
    github:
      "https://github.com/MuhammadHamzaSajjad274/MedOrch-AI-Medical-Decision-Support-System",
    videoUrl:
      "https://github.com/user-attachments/assets/fee62239-e2e7-49ff-a909-ff8996924f2a",
    featured: false,
  },
  {
    id: "proj-3",
    title: "AI Chatbot with Long-Term Memory",
    description:
      "A chatbot that actually remembers past conversations over time, instead of forgetting everything after each chat, with full tracking of how well it performs and the flexibility to run on different AI models.",
    tags: ["Long-Term Memory", "Multi-Model Support", "Observability"],
    tech: ["ChromaDB", "MLflow", "Python"],
    github:
      "https://github.com/MuhammadHamzaSajjad274/LLM-Powered-AI-Chatbot-with-Memory",
    liveUrl: "https://hamza-llm-chatbot.streamlit.app/",
    featured: false,
  },
  {
    id: "proj-2",
    title: "CrisisWatch",
    subtitle: "Crisis Intelligence & Response System",
    description:
      "A system that uses a team of AI agents to monitor, understand, and respond to unfolding crisis events in real time, showing everything on a live interactive map dashboard.",
    tags: ["Multi-Agent System", "Real-Time Dashboard", "Live Mapping"],
    tech: ["Gemini", "React", "Leaflet"],
    github: "https://github.com/MuhammadHamzaSajjad274/CrisisWatch",
    videoUrl:
      "https://github.com/user-attachments/assets/fcc8f95c-ba37-4e59-8001-0b572588b331",
    featured: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "skills-1",
    name: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    id: "skills-2",
    name: "GenAI & LLMs",
    skills: [
      "Generative AI",
      "LLMs",
      "RAG",
      "AI Agents",
      "AI Automation",
      "LangChain",
      "LangGraph",
      "Hugging Face",
      "OpenAI APIs",
    ],
  },
  {
    id: "skills-3",
    name: "Backend & APIs",
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "Node.js",
      "SQL",
      "REST APIs",
      "API Integration",
    ],
  },
  {
    id: "skills-4",
    name: "Web & Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    id: "edu-1",
    degree: "B.Sc. Artificial Intelligence",
    institution: "University of Wah",
    date: "2022 to 2026",
    detail: "CGPA 3.4/4.0",
  },
];

// Achievement data lives in Achievements.tsx. This array is intentionally empty and kept for type compatibility.
export const certifications: Certification[] = [];
