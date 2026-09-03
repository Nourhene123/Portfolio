import { BiLogoJava, BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoSpringBoot, BiLogoPostgresql, BiLogoDocker, BiLogoKubernetes, BiLogoGit, BiLogoAws } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { SiMysql, SiNextdotjs, SiDjango, SiPython, SiGitlab, SiTensorflow, SiOpenai, SiGrafana, SiJenkins, SiPostman, SiNestjs, SiLangchain, SiFastapi } from "react-icons/si";
import { FaAngular, FaBrain, FaCloud, FaCode, FaDatabase, FaServer, FaWrench } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";

export interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  level: number;
  category: SkillCategory;
}

export type SkillCategory = "all" | "languages" | "frontend" | "backend" | "database" | "ai" | "devops" | "tools";

export interface CategoryDef {
  id: SkillCategory;
  label: string;
  icon: React.ElementType;
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
  { name: "RAG",          icon: GrDocumentText,    color: "#ff6b6b", level: 88, category: "ai" },
  { name: "LangChain",    icon: SiLangchain,       color: "#1C3C3C", level: 82, category: "ai" },
  { name: "LangGraph",    icon: FaBrain,           color: "#4a9eff", level: 80, category: "ai" },
  { name: "TensorFlow",   icon: SiTensorflow,      color: "#FF6F00", level: 70, category: "ai" },
  // DevOps
  { name: "AWS",          icon: BiLogoAws,         color: "#ff9900", level: 85, category: "devops" },
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

export const categories: CategoryDef[] = [
  { id: "all",       label: "All Skills", icon: FaCode         },
  { id: "languages", label: "Languages",  icon: FaCode         },
  { id: "frontend",  label: "Frontend",   icon: BiLogoReact    },
  { id: "backend",   label: "Backend",    icon: FaServer       },
  { id: "database",  label: "Database",   icon: FaDatabase     },
  { id: "ai",        label: "AI & ML",    icon: FaBrain        },
  { id: "devops",    label: "DevOps",     icon: FaCloud        },
  { id: "tools",     label: "Tools",      icon: FaWrench       },
];

export interface FeaturedSkill {
  name: string;
  desc: string;
  icon: React.ElementType;
  color: string;
  size: "large" | "medium" | "small";
  gradient: string;
}

export const featuredSkills: FeaturedSkill[] = [
  {
    name: "AI & LLMs",
    desc: "RAG, LangChain, LangGraph, NLP, AI Agents,React pattern ",
    icon: FaBrain,
    color: "#8C4555",
    size: "large",
    gradient: "from-[#8C4555] to-[#B58169]",
  },
  {
    name: "Full-Stack",
    desc: " Next.js, Angular, NestJS, Spring Boot, Django,FastApi",
    icon: BiLogoReact,
    color: "#61dafb",
    size: "medium",
    gradient: "from-[#61dafb] to-[#3178c6]",
  },
  {
    name: "Cloud & DevOps",
    desc: "AWS, Docker, Kubernetes, CI/CD,Azure",
    icon: FaCloud,
    color: "#ff9900",
    size: "medium",
    gradient: "from-[#ff9900] to-[#2496ed]",
  },
  {
    name: "Python",
    desc: "Django, ML Stack, Data Science",
    icon: SiPython,
    color: "#3776ab",
    size: "small",
    gradient: "from-[#3776ab] to-[#6db33f]",
  },
  {
    name: "Java",
    desc: "Spring Boot Ecosystem",
    icon: BiLogoJava,
    color: "#f89820",
    size: "small",
    gradient: "from-[#f89820] to-[#dd0031]",
  },
  {
    name: "Databases",
    desc: "PostgreSQL, MySQL",
    icon: BiLogoPostgresql,
    color: "#336791",
    size: "medium",
    gradient: "from-[#336791] to-[#47a248]",
  },
];
