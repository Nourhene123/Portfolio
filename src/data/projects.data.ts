export type ProjectCategory = "AI/ML" | "Full-Stack" | "Cloud" | "DevOps";

export interface Project {
  id: string;
  title: string;
  short: string;
  description: string;
  details: string[];
  technologies: string[];
  github: string;
  githubFrontend?: string;
  githubBackend?: string;
  video?: string;
  liveDemo?: string;
  presentation?: string;
  problem: string;
  impact: string[];
  images?: string[];
  category: ProjectCategory;
  color: string;
  year: string;
}

export interface CategoryColors {
  bg: string;
  text: string;
  border: string;
  gradient: string;
}

export const categoryColors: Record<ProjectCategory | "All", CategoryColors> = {
  "All": {
    bg: "rgba(140, 69, 85, 0.1)",
    text: "#8C4555",
    border: "rgba(140, 69, 85, 0.2)",
    gradient: "linear-gradient(135deg, #8C4555 0%, #B58169 100%)"
  },
  "AI/ML": {
    bg: "rgba(140, 69, 85, 0.1)",
    text: "#8C4555",
    border: "rgba(140, 69, 85, 0.2)",
    gradient: "linear-gradient(135deg, #8C4555 0%, #B58169 100%)"
  },
  "Full-Stack": {
    bg: "rgba(74, 144, 164, 0.1)",
    text: "#4A90A4",
    border: "rgba(74, 144, 164, 0.2)",
    gradient: "linear-gradient(135deg, #4A90A4 0%, #6B5B95 100%)"
  },
  "Cloud": {
    bg: "rgba(107, 91, 149, 0.1)",
    text: "#6B5B95",
    border: "rgba(107, 91, 149, 0.2)",
    gradient: "linear-gradient(135deg, #6B5B95 0%, #8C4555 100%)"
  },
  "DevOps": {
    bg: "rgba(181, 129, 105, 0.1)",
    text: "#B58169",
    border: "rgba(181, 129, 105, 0.2)",
    gradient: "linear-gradient(135deg, #B58169 0%, #4A90A4 100%)"
  }
};

export const projects: Project[] = [
  {
    id: "1",
    title: "MedFlow",
    short: "Multi-tenant SaaS platform digitizing private clinic operations with AI-powered medical assistance and real-time workflows.",
    description:
      "MedFlow is a comprehensive healthcare SaaS platform built to close the digital transformation gap in Tunisia's private sector. It replaces paper-based records, phone bookings, and manual billing with a secure, real-time, AI-assisted system — serving 5 distinct roles across multiple clinics from a single platform.",
    details: [
      "Architected multi-tenant SaaS with complete data isolation across clinics and 5 RBAC roles (Admin, Clinic Manager, Receptionist, Doctor, Patient)",
      "Built real-time appointment engine with WebSockets — instant sync, drag-and-drop calendar, and live notifications across all interfaces",
      "Integrated Stripe for online payments alongside automated PDF invoice and prescription generation",
      "Developed AI chat interface for diagnostic suggestions and intelligent health recommendations for doctors",
      "Deployed on Amazon EKS with Docker & Kubernetes, Redis caching, and scalable microservices architecture",
    ],
    technologies: [
      "Next.js 15", "React 19", "TypeScript", "TailwindCSS v4",
      "Django 5", "Django REST Framework", "PostgreSQL", "Redis",
      "WebSockets", "Stripe", "Docker", "Kubernetes", "Amazon EKS", "JWT",
    ],
    github: "",
    githubFrontend: "https://github.com/Nourhene123/MedFlow-frontend",
    githubBackend: "https://github.com/Nourhene123/MedFlow-Backend",
    video: "/video/medflow_demo.mp4",
    liveDemo: "",
    problem: "Tunisia's private clinics rely on paper records, phone-only bookings, and cash payments — fragmented workflows that slow care delivery and limit growth.",
    impact: [
      "40% improvement in administrative efficiency through automated clinical workflows",
      "End-to-end digitalization: from patient booking to AI-assisted diagnosis and digital prescriptions",
      "Scalable multi-clinic architecture supporting concurrent growth across healthcare providers",
    ],
    category: "AI/ML",
    color: "#8C4555",
    year: "2025"
  },
  {
    id: "2",
    title: "HR Automation Platform",
    short: "AI-powered HR system with CV parsing, candidate scoring, and employee engagement portals.",
    description:
      "A full-featured .NET + Angular HR platform for job posting, candidate management, and employee engagement. Automates CV parsing, skill matching, onboarding, and delivers real-time performance dashboards.",
    details: [
      "Developed candidate portal with real-time application tracking and AI chatbot support",
      "Built employee portal with performance dashboards, surveys, and goal tracking",
      "Automated PDF CV parsing using NLP to extract skills, experience, and education",
      "Implemented intelligent skill matching with dynamic scoring and match percentage",
      "Reduced application processing time by 15% via automated workflows",
    ],
    technologies: [
      ".NET", "Angular", "SQL Server", "Ollama", "GitLab", "NLP", "CI/CD",
    ],
    github: "",
    githubFrontend: "https://github.com/Nourhene123/HrAutomation_Frontend",
    githubBackend: "https://github.com/Nourhene123/HR-Automation-backend-",
    presentation: "https://canva.link/90scqbmcihe7t8o",
    problem: "HR departments spend excessive time manually processing CVs and tracking candidate applications, resulting in delayed hiring decisions and poor candidate experience.",
    impact: [
      "Reduced application processing time by 15%",
      "Automated 80% of CV screening with AI-powered parsing",
      "Improved candidate experience with real-time tracking",
    ],
    category: "AI/ML",
    color: "#6B5B95",
    year: "2025"
  },
  {
    id: "3",
    title: "CV-Job Matching System",
    short: "RAG-powered platform for intelligent candidate-to-job matching with automated scoring.",
    description:
      "An AI-driven system that analyzes CVs and job offers using Retrieval-Augmented Generation (RAG), extracts competencies, scores candidates, and reduces manual screening effort.",
    details: [
      "Designed ETL pipeline with Airflow to process CVs and job descriptions",
      "Implemented RAG architecture with Django backend and vector database",
      "Built NLP engine to extract skills, experience levels, and soft competencies",
      "Created scoring algorithm with weighted relevance and match percentage",
      "Reduced manual screening time by 70% in internal testing",
    ],
    technologies: [
      "Django", "Angular", "PostgreSQL", "Airflow", "RAG", "NLP", "ETL", "Vector DB",
    ],
    github: "https://github.com/Nourhene123/SmartRecruitAI",
    presentation: "https://canva.link/q33ltiwn6oytned",
    problem: "Recruiters spend 70% of their time manually screening CVs for job matches, missing qualified candidates due to keyword limitations in traditional ATS systems.",
    impact: [
      "Reduced manual screening time by 70%",
      "Increased candidate-job match accuracy by 45%",
      "Identified qualified candidates missed by keyword-based systems",
    ],
    category: "AI/ML",
    color: "#8C4555",
    year: "2024"
  },
  
 
];

export const getCategories = (projectList: Project[]): (ProjectCategory | "All")[] => {
  return ["All", ...new Set(projectList.map(p => p.category))];
};
