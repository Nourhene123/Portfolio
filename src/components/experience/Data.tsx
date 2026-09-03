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
  period: "Jan 2026 - Juin 2026 · 6 mos",
  location: "Remote",
  bullets: [
    "Subul — AI-Powered Learning Platform, an intelligent education platform that uses AI agents to generate personalized certification roadmaps (IoT, Cloud, AI, Cybersecurity) tailored to each learner's level, pace, and goals, built on a comprehensive, scalable microservices architecture.",
  ],
  sections: [
    {
      emoji: "🤖",
      title: "AI-Driven Features — 8 Specialized Agents",
      items: [
        "Assessment Generator Agent — generates 20 questions per domain (IoT, Cloud, AI, Cybersecurity), calling 4 LLMs in parallel, then scores the learner's dominant domain and skill percentages across the others",
        "Level Quiz Generator Agent — takes the learner's profile as input and generates 10 targeted questions to determine their proficiency level",
        "ReAct Orchestrator Agent (LangGraph) — coordinates 5 specialized tools to build and validate personalized roadmaps, with up to 12 reasoning iterations",
        "Learner Profile Evaluator — assesses who the learner really is beyond a numeric score",
        "Diagnostic Level Evaluator — identifies pedagogical gaps and recommends a study strategy (weekly hours, focus areas)",
        "Roadmap Generator — builds a complete certification roadmap (phases, certifications, duration) pulling real courses from the Subul catalog",
        "Roadmap Critic — scores the roadmap across 4 criteria (validation, certification order, level fit, duration) on a 1–10 scale, auto-triggering an LLM correction when the score falls below 7",
        "Roadmap Evaluator — performs a final quality check for logical progression and content depth before delivery",
      ],
    },
    {
      emoji: "🏗️",
      title: "Technical Excellence",
      items: [
        "Microservices Architecture: 6 specialized services (Auth, User, Course, Goals, Learner, AI) with RabbitMQ messaging and PostgreSQL databases",
        "AI Infrastructure: Azure OpenAI GPT-4o-mini + Azure AI vector search, with 6-hour question caching to reduce LLM token consumption",
        "Modern Stack: Next.js frontend, NestJS backend, TypeScript throughout, Docker containerization",
      ],
    },
    {
      emoji: "☁️",
      title: "Cloud & DevOps",
      items: [
        "CI/CD Pipeline: GitHub Actions runs lint (ESLint/TypeScript), Prisma schema validation, and Jest unit tests on every push, then builds and pushes Docker images to Amazon ECR",
        "Kubernetes Deployment: Helm-based deployment to Amazon EKS, pulling images from ECR for fully automated, repeatable releases",
        "Multi-AZ AWS Architecture: VPC with public and private subnets across 2 Availability Zones — public subnet hosts load-balanced frontend (Next.js) and API Gateway, private subnet isolates EKS microservices, RDS PostgreSQL, ElastiCache Redis, and RabbitMQ",
        "Networking & Security: NAT Gateway for outbound-only access to external APIs (Azure OpenAI), Elastic Load Balancers for both the web frontend and API gateway",
      ],
    },
    {
      emoji: "💡",
      title: "Impact",
      items: [
        "Delivers a fully personalized certification roadmap for every learner — from skill assessment to guided study path — powered by an 8-agent AI pipeline running at scale",
      ],
    },
  ],
  tools: [
    "NestJS",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "RabbitMQ",
    "Docker",
    "LangGraph",
    "Azure AI Search",
    "RAG",
    "LLMs",
    "FastAPI",
    "Python",
    "Turborepo",
    "CI/CD",
    "AWS EKS",
    "Amazon ECR",
    "Helm",
    "Terraform",
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
    "University Management Platform — Enterprise Academic System. A comprehensive university management system built with Spring Boot 3.5 and Angular 16, providing secure role-based administration for educational institutions — delivering 40% improvement in administrative efficiency through automated academic operations.",
  ],
  sections: [
    {
      emoji: "🎓",
      title: "Core Features",
      items: [
        "Role-Based Access Control — secure, permission-driven administration for admins, teachers, and students",
        "Grade Tracking — course organization with coefficient-based grade calculations",
        "Performance Analytics — real-time dashboards for admins, teachers, and students",
        "LMD-Compliant Workflow — modular system with a 7-step guided enrollment process",
      ],
    },
  ],
  tools: [
    "Spring Boot",
    "Spring Security",
    "Angular",
    "PostgreSQL",
    "JWT",
    "Tailwind CSS",
    "Chart.js",
  ],
  color: "#B58169",
  icon: "school",
},
  {
  role: "Full-Stack Developer Intern – End-of-Studies Project",
  company: "coffee&brackets",
  logo: "/logos/coffee_brackets.png",
  period: "February 2023 – June 2023 · 6 mos",
  location: "Tunis, Bizerte · On-site",
  bullets: [
    "Shared Workspace Reservation Platform — a full-stack booking system built with React, NestJS, and PostgreSQL, handling 500+ bookings with real-time availability and secure payments.",
  ],
  sections: [
    {
      emoji: "📅",
      title: "Core Features",
      items: [
        "Booking System — real-time reservation flow handling 500+ bookings",
        "Payment Integration — JWT authentication and secure payment processing for e-commerce features",
        "Admin Dashboard — automated product management workflows, reducing management time by 50%",
      ],
    },
    {
      emoji: "📊",
      title: "Analytics & Reliability",
      items: [
        "Real-Time Analytics Dashboard — tracks product popularity and user behavior metrics",
        "High Availability — 99.9% uptime with a responsive, scalable UI across desktop and mobile",
      ],
    },
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