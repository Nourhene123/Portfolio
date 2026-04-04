import { useState } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Project {
  title: string;
  short: string;
  description: string;
  details: string[];
  technologies: string[];
  github: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
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
        "Next.js 14",
        "Tailwind",
        "shadcn/ui",
        "Django",
        "PostgreSQL",
        "Zod",
        "Auth.js",
        "Vercel",
        "WebSocket",
      ],
      github: "", // Ajoute le lien si public
    },
    {
  title: "Human Resources Automation Platform",
  short: "AI-powered HR system with CV parsing, candidate scoring, and employee engagement portals.",
  description:
    "A full-featured .NET + Angular HR platform for job posting, candidate management, and employee engagement. Automates CV parsing, skill matching, onboarding, and delivers real-time performance dashboards for candidates and employees.",
  details: [
    "Developed candidate portal with real-time application tracking and AI chatbot support (Ollama-powered)",
    "Built employee portal with performance dashboards, surveys, and goal tracking",
    "Automated PDF CV parsing using NLP to extract skills, experience, and education",
    "Implemented intelligent skill matching with dynamic scoring and match percentage",
    "Reduced application processing time by 15% via automated workflows and email onboarding",
    "Designed responsive, role-based dashboards using Angular and SQL Server backend",
  ],
  technologies: [
    ".NET",
    "Angular",
    "SQL Server",
    "Ollama",
    "GitLab",
   
  ],
  github: "",
},
    {
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
        "Django",
        "Angular",
        "PostgreSQL",
        "Airflow",
        "RAG",
        "NLP",
        "ETL",
      ],
      github: "", // Ajoute le lien si public
    },
    {
      title: "E-commerce with Traffic Analytics",
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
        "Spring Boot",
        "Angular",
        "MySQL",
        "GitLab",
        "JWT",
        "Chart.js",
      ],
      github: "", // Ajoute le lien si disponible
    },
    {
      title: "Event Management & Space Booking System",
      short: "Full-cycle event and space reservation platform with secure booking and CI/CD.",
      description:
        "A secure and intuitive event management system allowing users to browse, book, and manage events and spaces. Includes full testing suite, Docker containerization, and automated deployment via GitLab CI/CD.",
      details: [
        "Designed full-cycle event and space reservation workflow with availability calendar",
        "Implemented secure and intuitive booking system with confirmation emails",
        "Wrote comprehensive unit, functional, and integration tests for reliability",
        "Containerized application with Docker for consistent environments",
        "Set up CI/CD pipeline with GitLab for automated testing and deployment",
      ],
      technologies: [
        "Symfony",
        "Twig",
        "MySQL",
        "GitLab",
        "Docker",
        "PHPUnit",
        "CI/CD",
      ],
      github: "",
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const getInitials = (title: string): string => {
    const words = title.trim().split(" ");
    if (words.length >= 2)
      return (words[0][0] + words[1][0]).toUpperCase();
    return title.slice(0, 2).toUpperCase();
  };

  return (
    <section id="projects" className="projects-section py-16 md:py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
        Projects
      </h2>
      <div className="projects-grid max-w-7xl mx-auto px-6">
        {projects.map((p, i) => (
          <article
            key={i}
            className="project-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-bordeaux-500/50 transition-all duration-300"
            aria-labelledby={`proj-${i}-title`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="thumbnail-text bg-bordeaux-600 text-white">
                {getInitials(p.title)}
              </div>
              {p.github ? (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-bordeaux-300 transition-colors"
                  aria-label={`GitHub repository for ${p.title}`}
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              ) : (
                <div className="w-6 h-6" />
              )}
            </div>

            <h3 id={`proj-${i}-title`} className="text-xl font-bold text-white mb-2">
              {p.title}
            </h3>

            <p className="text-sm text-bordeaux-300 font-medium mb-3">{p.short}</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">{p.description}</p>

            <button
              className="flex items-center gap-2 text-bordeaux-400 hover:text-bordeaux-300 text-sm font-medium transition-colors"
              onClick={() => toggleExpand(i)}
              aria-expanded={expanded === i}
              aria-controls={`details-${i}`}
            >
              {expanded === i ? (
                <>Hide Details <FaChevronUp className="w-4 h-4" /></>
              ) : (
                <>Show Details <FaChevronDown className="w-4 h-4" /></>
              )}
            </button>

            <div
              id={`details-${i}`}
              className={`details-container mt-4 space-y-2 transition-all duration-300 ${
                expanded === i ? "expanded" : ""
              }`}
            >
              <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                {p.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-5">
              {p.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-bordeaux-900/30 text-bordeaux-300 text-xs font-medium rounded-full border border-bordeaux-700/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;