import { BiLogoJava, BiLogoJavascript, BiLogoTypescript, BiLogoSpringBoot, BiLogoPostgresql, BiLogoDocker, BiLogoKubernetes, BiLogoGit, BiLogoAws } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { SiMysql, SiNextdotjs, SiDjango, SiPython, SiGitlab, SiTensorflow, SiOpenai, SiGrafana, SiJenkins, SiPostman, SiNestjs, SiLangchain, SiFastapi } from "react-icons/si";
import { FaAngular, FaBrain, FaCloud, FaCode, FaDatabase, FaServer, FaWrench, FaMicrosoft, FaRobot } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";

export interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  level: number;
  category: SkillCategory;
}

export type SkillCategory = "all" | "languages" | "frontend" | "backend" | "database" | "ai" | "devops" | "tools";

/** How skills are grouped into cards on the page (each skill shown once). */
export interface SkillGroup {
  label: string;
  icon: React.ElementType;
  /** Accent colour — tints the card background, border and icon. */
  color: string;
  categories: SkillCategory[];
}

export const skills: Skill[] = [
  // Languages
  { name: "Java",         icon: BiLogoJava,       color: "#f89820", level: 90, category: "languages" },
  { name: "Python",       icon: SiPython,          color: "#3776ab", level: 88, category: "languages" },
  { name: "JavaScript",   icon: BiLogoJavascript,  color: "#f7df1e", level: 92, category: "languages" },
  { name: "TypeScript",   icon: BiLogoTypescript,  color: "#3178c6", level: 85, category: "languages" },
  // Frontend
  { name: "Next.js",      icon: SiNextdotjs,       color: "#d67e7e", level: 85, category: "frontend" },
  { name: "Angular",      icon: FaAngular,         color: "#dd0031", level: 80, category: "frontend" },
  // Backend
  { name: "Spring Boot",  icon: BiLogoSpringBoot,  color: "#6db33f", level: 88, category: "backend" },
  { name: "Django",       icon: SiDjango,          color: "#092e20", level: 75, category: "backend" },
  { name: "NestJS",       icon: SiNestjs,          color: "#e0234e", level: 75, category: "backend" },
  { name: "FastAPI",      icon: SiFastapi,         color: "#009688", level: 75, category: "backend" },
  // Database
  { name: "PostgreSQL",   icon: BiLogoPostgresql,  color: "#336791", level: 85, category: "database" },
  { name: "MySQL",        icon: SiMysql,           color: "#4479a1", level: 85, category: "database" },
  // AI & ML
  { name: "LLMs",         icon: SiOpenai,          color: "#10a37f", level: 85, category: "ai" },
  { name: "AI Agents",    icon: FaRobot,           color: "#8C4555", level: 85, category: "ai" },
  { name: "RAG",          icon: GrDocumentText,    color: "#ff6b6b", level: 88, category: "ai" },
  { name: "LangChain",    icon: SiLangchain,       color: "#1C3C3C", level: 82, category: "ai" },
  { name: "LangGraph",    icon: FaBrain,           color: "#4a9eff", level: 80, category: "ai" },
  { name: "NLP",          icon: GrDocumentText,    color: "#8b5cf6", level: 82, category: "ai" },
  { name: "TensorFlow",   icon: SiTensorflow,      color: "#FF6F00", level: 70, category: "ai" },
  // DevOps
  { name: "AWS",          icon: BiLogoAws,         color: "#ff9900", level: 85, category: "devops" },
  { name: "Azure AI",     icon: FaMicrosoft,       color: "#0078d4", level: 75, category: "devops" },
  { name: "Docker",       icon: BiLogoDocker,      color: "#2496ed", level: 88, category: "devops" },
  { name: "Kubernetes",   icon: BiLogoKubernetes,  color: "#326ce5", level: 75, category: "devops" },
  { name: "CI/CD",        icon: SiJenkins,         color: "#D24939", level: 80, category: "devops" },
  { name: "Grafana",      icon: SiGrafana,         color: "#F46800", level: 78, category: "devops" },
  // Tools
  { name: "Git",          icon: BiLogoGit,         color: "#f05032", level: 90, category: "tools" },
  { name: "GitHub",       icon: IoLogoGithub,      color: "#333333", level: 88, category: "tools" },
  { name: "GitLab",       icon: SiGitlab,          color: "#fc6d26", level: 82, category: "tools" },
  { name: "Postman",      icon: SiPostman,         color: "#FF6C37", level: 85, category: "tools" },
];

export const skillGroups: SkillGroup[] = [
  { label: "AI & ML",        icon: FaBrain,    color: "#8C4555", categories: ["ai"] },
  { label: "Languages",      icon: FaCode,     color: "#B58169", categories: ["languages"] },
  { label: "Web & Backend",  icon: FaServer,   color: "#4A90A4", categories: ["frontend", "backend"] },
  { label: "Databases",      icon: FaDatabase, color: "#6B5B95", categories: ["database"] },
  { label: "Cloud & DevOps", icon: FaCloud,    color: "#C67B3D", categories: ["devops"] },
  { label: "Dev Tools",      icon: FaWrench,   color: "#5E8B7E", categories: ["tools"] },
];

