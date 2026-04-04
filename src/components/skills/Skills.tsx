import { motion } from "framer-motion";
import { DiMsqlServer } from "react-icons/di";
import {
  BiLogoJava,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoDocker,
  BiLogoKubernetes,
  BiLogoGit,
  BiLogoAws,
} from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import {
  SiMysql,
  SiNextdotjs,
  SiDjango,
  SiSymfony,
  SiPython,
  SiGitlab,
} from "react-icons/si";
import { FaAngular, FaRobot } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlinePsychology } from "react-icons/md";
import SectionReveal from "../shared/SectionReveal";

interface SkillCategory {
  title: string;
  skills: { name: string; icon: React.ElementType; color: string }[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: BiLogoJava, color: "#f89820" },
        { name: "JavaScript", icon: BiLogoJavascript, color: "#f7df1e" },
        { name: "TypeScript", icon: BiLogoTypescript, color: "#3178c6" },
        { name: "Python", icon: SiPython, color: "#3776ab" },
      ],
    },
    {
      title: "Frontend Frameworks",
      skills: [
        { name: "React", icon: BiLogoReact, color: "#61dafb" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "Angular", icon: FaAngular, color: "#dd0031" },
      ],
    },
    {
      title: "Backend Frameworks",
      skills: [
        { name: "Spring Boot", icon: BiLogoSpringBoot, color: "#6db33f" },
        { name: "Django", icon: SiDjango, color: "#092e20" },
        { name: "Symfony", icon: SiSymfony, color: "#000000" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#4479a1" },
        { name: "MongoDB", icon: BiLogoMongodb, color: "#47a248" },
        { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927" },
        { name: "PostgreSQL", icon: BiLogoPostgresql, color: "#336791" },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", icon: BiLogoDocker, color: "#2496ed" },
        { name: "Kubernetes", icon: BiLogoKubernetes, color: "#326ce5" },
        { name: "AWS", icon: BiLogoAws, color: "#ff9900" },
        { name: "Git", icon: BiLogoGit, color: "#f05032" },
        { name: "GitHub", icon: IoLogoGithub, color: "#ffffff" },
        { name: "GitLab", icon: SiGitlab, color: "#fc6d26" },
      ],
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "RAG", icon: GrDocumentText, color: "#ff6b6b" },
        { name: "NLP", icon: MdOutlinePsychology, color: "#9b59b6" },
        { name: "LLM", icon: SiPython, color: "#10a37f" },
        { name: "Ollama", icon: FaRobot, color: "#ffffff" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-500 text-center mb-16 max-w-2xl mx-auto">
            Full-stack expertise spanning modern frontend frameworks, robust backends, AI technologies, and cloud infrastructure.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SectionReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-bordeaux-500/40 hover:shadow-xl transition-all duration-500"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-6 pb-3 border-b border-slate-200">
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.15, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col items-center gap-2 group cursor-pointer"
                    >
                      <motion.div
                        whileHover={{
                          boxShadow: `0 0 20px ${skill.color}40`,
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 group-hover:border-slate-300 transition-all duration-300"
                      >
                        <skill.icon
                          className="w-8 h-8 md:w-9 md:h-9 transition-all duration-300"
                          style={{ color: skill.color }}
                        />
                      </motion.div>
                      <span className="text-xs md:text-sm text-slate-600 group-hover:text-slate-800 transition-colors duration-300 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.6}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Frontend", value: "React, Angular, Next.js" },
              { label: "Backend", value: "Spring Boot, Django, .NET" },
              { label: "AI/ML", value: "RAG, LLM, NLP" },
              { label: "DevOps", value: "Docker, AWS, CI/CD" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-slate-100 rounded-xl border border-slate-200"
              >
                <p className="text-bordeaux-300 font-semibold mb-1">{item.label}</p>
                <p className="text-slate-500 text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Skills;
