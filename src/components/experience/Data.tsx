export interface ExperienceSection {
  title: string;
  emoji: string;
  items: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  logo?: string;
  period: string;
  location: string;
  bullets: string[];
  sections?: ExperienceSection[];
  tools: string[];
  color: string;
  icon: string;
}

export const EXPERIENCES: ExperienceEntry[] = [
  {
    role: "Software Engineering Intern – AI & FullStack",
    company: "Smartovate | سمارتوفيت",
    logo: "/logos/smartovate.png",
    period: "Jan 2026 - Present · 4 mos",
    location: "Remote",
    sections: [
      {
        emoji: "🏗️",
        title: "Microservices Architecture",
        items: [
          "Built platform with 5+ NestJS services (User, Course, Enrollment, Goals, AI Agent) with API Gateway",
          "Designed database-per-service pattern with separate PostgreSQL instances for scalability",
          "Implemented event-driven communication using RabbitMQ message queues between services",
          "AI Agent Service: LangGraph agent with self-correction, RAG with Azure AI Search, CAT assessment",
        ],
      },
      {
        emoji: "🤖",
        title: "AI-Powered Assessment & Learning Flow",
        items: [
          "Adaptive assessment agent using CAT (Computerized Adaptive Testing) for profile detection",
          "Smart quiz niveau system that adjusts difficulty based on learner responses",
          "AI-generated personalized roadmap based on assessment results and career goals",
          "RAG pipeline with vector embeddings for intelligent course/content recommendations",
        ],
      },
      {
        emoji: "💻",
        title: "Full-Stack Development",
        items: [
          "Developed SUBUL landing page with modern UI/UX using Next.js, React, TypeScript",
          "Built complete authentication system with JWT, role-based access for learners and admins",
          "Admin Dashboard: Course management, user enrollment tracking, analytics & reporting",
          "Learner Dashboard: Course browsing & enrollment, daily learning goals, progress tracking",
          "Real-time SSE streaming from FastAPI AI service for live assessment experience",
          "Learner workflow: Register → Browse courses → Enroll → Set daily goals → Track progress → Pass evaluations",
        ],
      },
      {
        emoji: "🎯",
        title: "Prompt Engineering & LLM Orchestration",
        items: [
          "Structured LLM outputs with Pydantic for reliable assessment generation",
          "Intelligent fallback systems and retry logic for resilient quiz/roadmap generation",
        ],
      },
      {
        emoji: "🛠️",
        title: "DevOps & Infrastructure",
        items: [
          "Docker & Docker Compose multi-service containerization",
          "CI/CD pipelines and cloud monitoring with Grafana",
          "Scalable, secure distributed systems handling assessment + learning workflows",
        ],
      },
    ],
    bullets: [
      "Contributing to the development of SUBUL, an AI-driven career guidance and personalized learning platform",
    ],
    tools: [
      "NestJS",
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "RabbitMQ",
      "Docker",
      "Turborepo",
      "LangGraph",
      "Azure AI Search",
      "FastAPI",
      "RAG",
      "LLMs",
      "Python",
      "Pydantic",
      "React Query",
      "Radix UI",
      "CI/CD",
      "Grafana",
    ],
    color: "#8C4555",
    icon: "brain",
  },
  {
    role: "Software Engineering Intern",
    company: "Nst group ",
    logo: "/logos/nst-group.png",
    period: "June 2025 – August 2025 · 2 mos",
    location: "Tunis, Ariana Soghra · On-site",
    bullets: [
      "Developed a University Management Platform using Angular & Spring Boot",
      "Implemented secure role-based access with Spring Security",
      "Created dashboards for students, teachers & admins",
      "Designed modular LMD-compliant system with 7-step guided workflow, improving registration efficiency by 60%",

    ],
    tools: [
      "Spring Boot",
      "Spring Security",
      "Angular",
      "PostgreSQL",
    ],
    color: "#B58169",
    icon: "school",
  },
 
  {
    role: "Full-Stack Developer Intern – End-of-Studies Project",
    company:"coffee&brackets",
    logo: "/logos/coffee_brackets.png",
    period: "February 2023 – June 2023 · 6 mos",
    location: "Tunis, Bizerte · On-site",
    bullets: [
      "Built shared workspace reservation platform with React, NestJS, and PostgreSQL, handling 500+ bookings",
      "Implemented real-time analytics dashboard tracking product popularity and user behavior metrics",
      "Designed admin dashboard reducing product management time by 50% through automated workflows",
      "Integrated JWT authentication and secure payment processing for e-commerce features",
      "Ensured 99.9% uptime with responsive, scalable UI across desktop and mobile devices",
    ],
    tools: [
      "React",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "GitLab",
      "REST API",
      "JWT",
    ],
    color: "#6B5B95",
    icon: "rocket",
  },
];