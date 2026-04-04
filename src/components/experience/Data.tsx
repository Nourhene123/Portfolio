export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tools: string[];
  color: string;
  icon: string;
}

export const EXPERIENCES: ExperienceEntry[] = [
  {
    role: "End-of-Studies Intern – Software Engineering (AI & FullStack)",
    company: "Smartovate | سمارتوفيت",
    period: "Jan 2026 - Present · 4 mos",
    location: "Remote",
    bullets: [
      "Contributing to the development of SUBUL, an AI-driven career guidance and personalized learning platform",
      "Designed and implemented cloud infrastructure on AWS (EKS, RDS, CI/CD)",
      "Developed AI solutions using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG)",
      "Built and maintained full-stack web applications using Next.js (React) and Flask (Python)",
      "Implemented RESTful APIs and integrated AI services into backend systems",
      "Applied DevOps best practices including CI/CD pipelines, Docker, and cloud monitoring (Grafana)",
      "Focused on scalability, performance, security, and reliability of distributed systems",
      "Collaborated with cross-functional teams using Agile/Scrum methodologies",
    ],
    tools: [
      "AWS",
      "Python",
      "Flask",
      "Next.js",
      "React",
      "LLMs",
      "RAG",
      "Docker",
      "CI/CD",
      "REST APIs",
      "Git",
      "RDS",
      "EKS",
      "Grafana",
    ],
    color: "#8C4555",
    icon: "brain",
  },
  {
    role: "Software Engineering Intern",
    company: "NST GROUPE",
    period: "Jun 2025 - Aug 2025 · 3 mos",
    location: "On-site",
    bullets: [
      "Developed a University Management Platform using Angular & Spring Boot",
      "Implemented secure role-based access with Spring Security",
      "Created dashboards for students, teachers & admins",
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
    role: "Software Engineering Intern",
    company: "Neuro Smart Technologies",
    period: "June 2025 – August 2025 · 2 mos",
    location: "Tunis, Ariana Soghra · On-site",
    bullets: [
      "Developed full-stack University Management Platform serving 1000+ students using Angular, Spring Boot, and PostgreSQL",
      "Implemented RBAC with Spring Security, reducing unauthorized access incidents by 95%",
      "Built responsive dashboards for 3 user roles (admin, teachers, students) with real-time data updates",
      "Automated document generation (transcripts, certificates) saving 40+ hours/week of manual work",
      "Designed modular LMD-compliant system with 7-step guided workflow, improving registration efficiency by 60%",
      "Collaborated in Agile team using GitLab CI/CD with 20+ successful deployments",
    ],
    tools: [
      "Angular",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "GitLab CI/CD",
      "Java",
      "TypeScript",
    ],
    color: "#4A90A4",
    icon: "university",
  },
  {
    role: "Full-Stack Developer Intern – End-of-Studies Project",
    company: "HyperSpace",
    period: "February 2023 – June 2023 · 6 mos",
    location: "Tunis, Bizerte · On-site",
    bullets: [
      "Built shared workspace reservation platform with React, NestJS, and PostgreSQL, handling 500+ bookings",
      "Implemented real-time analytics dashboard tracking product popularity and user behavior metrics",
      "Designed admin dashboard reducing product management time by 50% through automated workflows",
      "Integrated JWT authentication and secure payment processing for e-commerce features",
      "Ensured 99.9% uptime with responsive, scalable UI across desktop and mobile devices",
      "Delivered project 2 weeks ahead of schedule with 95% client satisfaction rating",
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