export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
    paper?: string;
  };
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
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  gpa?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Senior ML Engineer",
    company: "Company Name",
    location: "Remote",
    startDate: "2023-01",
    endDate: null,
    description: "Placeholder experience description.",
    highlights: ["Highlight one", "Highlight two"],
    technologies: ["Python", "PyTorch", "AWS"],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Project Title",
    description: "Short project description placeholder.",
    image: "/placeholder.jpg",
    tags: ["ML", "NLP"],
    links: { github: "#", demo: "#" },
    featured: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "skills-1",
    name: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn"],
  },
  {
    id: "skills-2",
    name: "Languages",
    skills: ["Python", "TypeScript", "SQL"],
  },
];

export const education: EducationEntry[] = [
  {
    id: "edu-1",
    degree: "M.S. Computer Science",
    institution: "University Name",
    location: "City, Country",
    startDate: "2019",
    endDate: "2021",
    description: "Placeholder education description.",
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "2024-06",
    credentialUrl: "#",
  },
];
