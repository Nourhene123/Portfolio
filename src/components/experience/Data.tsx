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
    location: "Tunis,Ariana Soghra  · On-site",
    bullets: [
      "Developed a full-stack University Management Platform using Angular, Spring Boot, and PostgreSQL",
      "Implemented role-based access control with Spring Security for secure authentication",
      "Built **responsive dashboards** for administrators, teachers, and students to manage courses, absences, grades, and documents",
      "Designed a modular LMD-compliant system with a guided 7-step workflowfor course registration and validation",
      "Automated document generation(transcripts, certificates) and real-time grade calculation",
      "Used GitLab for version control and collaborative development",
    ],
    tools: [
      "Angular",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "GitLab",
      "Java",
      "TypeScript",
    ],
  },
  {
    role: "Full-Stack Developer Intern – End-of-Studies Project",
    company: "HyperSpace",
    period: "February 2023 – June 2023 · 6 mos",
    location: "Tunis, Bizerte  · On-site",
    bullets: [
      "Built a shared workspace reservation platform with React, NestJS, and PostgreSQL",
      "Developed full-stack features: user authentication, product browsing, cart management, order tracking, and billing",
      "Integrated real-time analytics for product popularity, page views, and user behavior",
      "Designed and implemented an admin dashboard for product management and review moderation",
      "Ensured responsive and scalable UI across all devices",
      "Collaborated using GitLab for version control and project management",
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