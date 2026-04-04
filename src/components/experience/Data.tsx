export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tools: string[];
}

export const EXPERIENCES: ExperienceEntry[] = [
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
  },
];