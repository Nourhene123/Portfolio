export type ProjectCategory = "AI/ML" | "Full-Stack" | "Cloud" | "DevOps";

export interface Project {
  id: string;
  title: string;
  short: string;
  description: string;
  details: string[];
  technologies: string[];
  github: string;
  liveDemo?: string;
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
    short: "AI-powered SaaS platform for medical clinic management with role-based portals.",
    description:
      "MedFlow is a full-stack SaaS solution for clinics, featuring role-based access (admin, doctor, receptionist, patient), real-time dashboards, appointment scheduling, patient records, and an AI diagnostic assistant powered by LLMs.",
    details: [
      "Built responsive portals for all user roles using Next.js 14 + Tailwind + shadcn/ui",
      "Implemented RBAC authentication with Auth.js and secure session management",
      "Developed real-time communication via WebSocket for notifications and updates",
      "Integrated AI diagnostic assistant using LLM for symptom analysis and triage suggestions",
      "Deployed on Vercel with CI/CD pipeline",
    ],
    technologies: [
      "Next.js 14", "Tailwind", "shadcn/ui", "Django", "PostgreSQL", "Zod", "Auth.js", "Vercel", "WebSocket",
    ],
    github: "",
    liveDemo: "",
    problem: "Medical clinics struggle with fragmented patient management systems and lack AI-assisted triage capabilities, leading to inefficient workflows and longer patient wait times.",
    impact: [
      "Reduced patient wait times by 40% through AI-assisted triage",
      "Streamlined clinic operations with unified role-based platform",
      "Improved patient satisfaction with real-time updates",
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
    github: "",
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
  {
    id: "4",
    title: "E-commerce Analytics",
    short: "Full-stack online store with real-time product and user analytics dashboard.",
    description:
      "A Spring Boot + Angular e-commerce platform with secure authentication, shopping cart, payment integration, and a powerful admin dashboard displaying real-time analytics on products, users, and traffic.",
    details: [
      "Built full authentication system with JWT and role-based access",
      "Implemented shopping cart, wishlist, and secure checkout flow",
      "Developed real-time analytics engine tracking views, clicks, and conversions",
      "Created interactive admin dashboard with charts and filters",
      "Optimized database queries for high-traffic performance",
    ],
    technologies: [
      "Spring Boot", "Angular", "MySQL", "GitLab", "JWT", "Chart.js", "REST API",
    ],
    github: "",
    problem: "Small businesses lack affordable e-commerce solutions with built-in analytics, forcing them to use multiple disconnected tools for sales and customer insights.",
    impact: [
      "Unified e-commerce and analytics in single platform",
      "Enabled data-driven inventory decisions",
      "Reduced operational costs by eliminating third-party analytics tools",
    ],
    category: "Full-Stack",
    color: "#4A90A4",
    year: "2024"
  },
  {
    id: "5",
    title: "Event Booking System",
    short: "Full-cycle event and space reservation platform with secure booking and CI/CD.",
    description:
      "A secure and intuitive event management system allowing users to browse, book, and manage events and spaces. Includes full testing suite, Docker containerization, and automated deployment.",
    details: [
      "Designed full-cycle event and space reservation workflow with availability calendar",
      "Implemented secure and intuitive booking system with confirmation emails",
      "Wrote comprehensive unit, functional, and integration tests for reliability",
      "Containerized application with Docker for consistent environments",
      "Set up CI/CD pipeline with GitLab for automated testing and deployment",
    ],
    technologies: [
      "Symfony", "Twig", "MySQL", "GitLab", "Docker", "PHPUnit", "CI/CD", "Nginx",
    ],
    github: "",
    problem: "Venues struggle with double bookings, manual confirmation processes, and lack of visibility into space utilization across multiple locations.",
    impact: [
      "Eliminated double bookings with real-time availability system",
      "Reduced booking confirmation time by 90%",
      "Improved space utilization visibility by 60%",
    ],
    category: "DevOps",
    color: "#B58169",
    year: "2023"
  },
];

export const getCategories = (projectList: Project[]): (ProjectCategory | "All")[] => {
  return ["All", ...new Set(projectList.map(p => p.category))];
};
