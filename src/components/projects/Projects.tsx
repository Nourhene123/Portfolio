import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLightbulb, FaRocket, FaChartLine } from "react-icons/fa";
import SectionReveal from "../shared/SectionReveal";

interface Project {
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
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
      github: "",
      problem: "Medical clinics struggle with fragmented patient management systems and lack AI-assisted triage capabilities, leading to inefficient workflows and longer patient wait times.",
      impact: [
        "Reduced patient wait times by 40% through AI-assisted triage",
        "Streamlined clinic operations with unified role-based platform",
        "Improved patient satisfaction with real-time updates",
      ],
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
      problem: "HR departments spend excessive time manually processing CVs and tracking candidate applications, resulting in delayed hiring decisions and poor candidate experience.",
      impact: [
        "Reduced application processing time by 15%",
        "Automated 80% of CV screening with AI-powered parsing",
        "Improved candidate experience with real-time tracking",
      ],
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
      github: "",
      problem: "Recruiters spend 70% of their time manually screening CVs for job matches, missing qualified candidates due to keyword limitations in traditional ATS systems.",
      impact: [
        "Reduced manual screening time by 70%",
        "Increased candidate-job match accuracy by 45%",
        "Identified qualified candidates missed by keyword-based systems",
      ],
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
      github: "",
      problem: "Small businesses lack affordable e-commerce solutions with built-in analytics, forcing them to use multiple disconnected tools for sales and customer insights.",
      impact: [
        "Unified e-commerce and analytics in single platform",
        "Enabled data-driven inventory decisions",
        "Reduced operational costs by eliminating third-party analytics tools",
      ],
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
      problem: "Venues struggle with double bookings, manual confirmation processes, and lack of visibility into space utilization across multiple locations.",
      impact: [
        "Eliminated double bookings with real-time availability system",
        "Reduced booking confirmation time by 90%",
        "Improved space utilization visibility by 60%",
      ],
    },
  ];

  const getInitials = (title: string): string => {
    const words = title.trim().split(" ");
    if (words.length >= 2)
      return (words[0][0] + words[1][0]).toUpperCase();
    return title.slice(0, 2).toUpperCase();
  };

  return (
    <>
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
              Full-stack applications showcasing AI integration, modern architectures, and measurable business impact.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <motion.article
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-bordeaux-500/50 hover:shadow-xl transition-all duration-500 cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedProject(p)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-bordeaux-600 to-bordeaux-800 flex items-center justify-center text-slate-800 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {getInitials(p.title)}
                    </div>
                    <div className="flex gap-2">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-bordeaux-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      )}
                      {p.liveDemo && (
                        <a
                          href={p.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-bordeaux-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-bordeaux-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-bordeaux-300 font-medium mb-3">
                    {p.short}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
                    {p.description.slice(0, 120)}...
                  </p>

                  <div className="bg-bordeaux-900/20 border border-bordeaux-500/20 rounded-lg p-3 mb-4">
                    <p className="text-xs text-bordeaux-300 font-semibold flex items-center gap-1">
                      <FaChartLine className="w-3 h-3" />
                      {p.impact[0]}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.technologies.slice(0, 4).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                    {p.technologies.length > 4 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{p.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <span className="text-sm text-bordeaux-400 font-medium group-hover:text-bordeaux-300 transition-colors flex items-center gap-2">
                      View Details
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 4 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </div>
                </motion.article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-bordeaux-500/30 shadow-2xl"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-all duration-300"
            >
              ✕
            </button>

            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-bordeaux-300">{selectedProject.short}</p>
              </div>

              <div className="aspect-video bg-gradient-to-br from-bordeaux-900/30 to-gray-800/30 rounded-xl mb-6 flex items-center justify-center border border-bordeaux-500/20">
                <div className="text-center">
                  <FaRocket className="w-12 h-12 text-bordeaux-400 mx-auto mb-3" />
                  <p className="text-slate-500">Project Demo Preview</p>
                  <p className="text-slate-400 text-sm mt-1">
                    Add screenshots to project.images array
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FaLightbulb className="w-5 h-5 text-red-400" />
                    <h3 className="font-semibold text-red-300">Problem</h3>
                  </div>
                  <p className="text-slate-600 text-sm">{selectedProject.problem}</p>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FaRocket className="w-5 h-5 text-blue-400" />
                    <h3 className="font-semibold text-blue-300">Solution</h3>
                  </div>
                  <ul className="space-y-1">
                    {selectedProject.details.map((detail, idx) => (
                      <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FaChartLine className="w-5 h-5 text-green-400" />
                    <h3 className="font-semibold text-green-300">Impact</h3>
                  </div>
                  <ul className="space-y-1">
                    {selectedProject.impact.map((item, idx) => (
                      <li key={idx} className="text-green-200 text-sm flex items-start gap-2 font-medium">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-bordeaux-900/40 text-bordeaux-200 text-sm rounded-full border border-bordeaux-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    View on GitHub
                  </a>
                )}
                {selectedProject.liveDemo && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-bordeaux-600 to-bordeaux-700 hover:from-bordeaux-500 hover:to-bordeaux-600 rounded-lg text-white transition-all"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Projects;
