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
  /** Optional ML fine-tuning spec — rendered as a dedicated panel in the project modal. */
  modelTraining?: {
    /** Base checkpoint that was fine-tuned. */
    baseModel: string;
    /** Training data, in one short phrase. */
    dataset: string;
    /** Headline outcome (e.g. final loss / epochs). */
    result: string;
    /** Hyperparameters, each with an optional plain-language note. */
    params: { label: string; value: string; note?: string }[];
  };
  /** Primary category — drives the card/modal color theme. Keep it as categories[0]. */
  category: ProjectCategory;
  /** All areas this project covers. First entry is the primary (see `category`). */
  categories: ProjectCategory[];
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
    category: "Full-Stack",
    categories: ["Full-Stack", "Cloud", "AI/ML"],
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
    category: "Full-Stack",
    categories: ["Full-Stack", "AI/ML", "DevOps"],
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
      "Fine-tuned a Sentence-Transformers bi-encoder (all-mpnet-base-v2) on 10k+ CV–job pairs with a cosine-similarity objective",
      "Designed ETL pipeline with Airflow to process CVs and job descriptions",
      "Implemented RAG architecture with Django backend and vector database",
      "Built NLP engine to extract skills, experience levels, and soft competencies",
      "Created scoring algorithm with weighted relevance and match percentage",
      "Reduced manual screening time by 70% in internal testing",
    ],
    technologies: [
      "Sentence-Transformers", "PyTorch", "RAG", "NLP", "Django", "Angular", "PostgreSQL", "Airflow", "Vector DB", "ETL",
    ],
    github: "https://github.com/Nourhene123/SmartRecruitAI",
    presentation: "https://canva.link/q33ltiwn6oytned",
    problem: "Recruiters spend 70% of their time manually screening CVs for job matches, missing qualified candidates due to keyword limitations in traditional ATS systems.",
    modelTraining: {
      baseModel: "sentence-transformers/all-mpnet-base-v2",
      dataset: "10,000+ labelled CV–job pairs (matching and non-matching)",
      result: "Converged to a 0.018 cosine-similarity loss in just 2 epochs",
      params: [
        {
          label: "Batch size",
          value: "16",
          note: "The largest batch my laptop could train without running out of memory.",
        },
        {
          label: "Epochs",
          value: "2",
          note: "Two passes over the data — enough to converge without overfitting.",
        },
        {
          label: "Optimizer",
          value: "AdamW",
          note: "Adam with decoupled weight decay — a safe default for fine-tuning transformers.",
        },
        {
          label: "Learning rate",
          value: "2e-5",
          note: "Small steps so the model adapts to our recruitment data gently, without forgetting what it already knew — which is why the loss dropped so fast.",
        },
        {
          label: "Loss",
          value: "CosineSimilarityLoss",
          note: "Regresses cosine similarity toward 1.0 for matching pairs and 0.0 for non-matching ones — simple, stable, and a perfect fit for the supervised contrastive objective.",
        },
      ],
    },
    impact: [
      "Reduced manual screening time by 70%",
      "Increased candidate-job match accuracy by 45%",
      "Identified qualified candidates missed by keyword-based systems",
    ],
    category: "AI/ML",
    categories: ["AI/ML", "Full-Stack", "DevOps"],
    color: "#8C4555",
    year: "2024"
  },
  {
    id: "4",
    title: "Power Fitness",
    short: "Personal-coaching platform rebuilt from a legacy PHP monolith into a Spring Boot + Angular monorepo for a real training business.",
    description:
      "Power Fitness runs the online coaching business of a personal trainer: a member completes a science-based fitness assessment, receives a coach-reviewed 12-week workout & nutrition roadmap, and tracks progress week over week while the coach manages a full client roster. Originally a PHP/MySQL site that had hit the ceiling of monolithic architecture, it was rewritten ground-up into a layered Spring Boot + Angular monorepo with the same functionality end to end.",
    details: [
      "Rebuilt a live client business's platform as a Spring Boot 4 + Angular 17 monorepo with a build-enforced boundary — an ArchUnit test fails CI if a controller reaches into the data layer",
      "Ported the 7-step assessment → rule-based analyzer → 12-week roadmap generator, plus a full coach review/edit state machine (draft → in review → approve / request changes → resubmit)",
      "Implemented stateless JWT auth (access + rotating refresh tokens) with Member/Coach/Admin roles and a Flyway-migrated PostgreSQL schema",
      "Built the member dashboard (habit, weight, and workout tracking) and a coach-side risk-detection service that flags clients falling behind on adherence, with dark/light theming and a collapsible sidebar across both dashboards",
      "Added a cash-on-delivery shop module and containerized the full stack with Docker Compose and an Nginx reverse proxy",
      "Backed the rewrite with 80 automated backend tests across three layers — JUnit 5 + Mockito unit tests, Testcontainers + MockMvc integration tests against a real Postgres, and Playwright E2E tests driving the real Angular app — all run in GitHub Actions CI",
      "Deployed a public live demo on free infrastructure: Angular on Vercel (rewrites /api to the backend, so no CORS), Spring Boot in Docker on Render with the JVM tuned for a 512 MB instance, and Neon serverless PostgreSQL — secrets in environment variables, auto-redeploy on every push to main",
    ],
    technologies: [
      "Spring Boot 4", "Java 17", "Angular 17", "PostgreSQL 16", "Flyway",
      "Spring Security (JWT)", "ArchUnit", "Testcontainers", "JUnit 5", "Mockito",
      "Playwright", "Docker", "Nginx", "GitHub Actions", "Vercel", "Render", "Neon",
    ],
    github: "https://github.com/Nourhene123/Power-Fitness",
    liveDemo: "https://power-fitness-two.vercel.app",
    problem: "A personal trainer's real coaching business ran on a PHP/MySQL site that had hit the ceiling any monolithic PHP app eventually hits: business logic mixed into view scripts, no automated tests, and every new feature risking a regression somewhere unrelated.",
    impact: [
      "Rebuilt a live client business's platform end to end with zero functionality loss and an architectural boundary CI enforces automatically",
      "Took the backend from zero automated tests to 80, across unit, Testcontainers integration, and Playwright E2E layers covering the core auth, assessment, and program-review flows",
      "Added a coach-side at-risk detection system and full plan-review workflow that didn't exist in the original site",
      "Shipped a public live demo at zero hosting cost (Vercel + Render + Neon)",
    ],
    category: "Full-Stack",
    categories: ["Full-Stack", "DevOps", "Cloud"],
    color: "#4A90A4",
    year: "2026"
  },
];

export const getCategories = (projectList: Project[]): (ProjectCategory | "All")[] => {
  return ["All", ...new Set(projectList.flatMap(p => p.categories))];
};
