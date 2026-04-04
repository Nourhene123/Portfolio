import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaLightbulb, 
  FaRocket, 
  FaChartLine, 
  FaFolderOpen,
  FaCode,
  FaLayerGroup,
  FaBrain,
  FaFilter,
  FaTimes,
  FaCalendarAlt
} from "react-icons/fa";
import { projects, categoryColors, type Project, type ProjectCategory } from "../../data/projects.data";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { use3DTilt } from "../../hooks/use3DTilt";

const categoryOrder: ProjectCategory[] = ["AI/ML", "Full-Stack", "Cloud", "DevOps"];


const ProjectStats = ({ projects }: { projects: Project[] }) => {
  const prefersReducedMotion = useReducedMotion();
  const stats = useMemo(() => [
    { 
      icon: <FaFolderOpen size={20} />, 
      value: projects.length.toString(), 
      label: "Projects",
      color: "#8C4555"
    },
    { 
      icon: <FaCode size={20} />, 
      value: "25+", 
      label: "Technologies",
      color: "#4A90A4"
    },
    { 
      icon: <FaBrain size={20} />, 
      value: projects.filter(p => p.category === "AI/ML").length.toString(), 
      label: "AI Projects",
      color: "#6B5B95"
    },
    { 
      icon: <FaLayerGroup size={20} />, 
      value: categoryOrder.length.toString(), 
      label: "Categories",
      color: "#B58169"
    }
  ], [projects]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, idx) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
          whileHover={{ y: prefersReducedMotion ? 0 : -5, scale: prefersReducedMotion ? 1 : 1.02 }}
          className="relative group"
        >
          <div 
            className="relative p-5 rounded-xl overflow-hidden transition-all duration-300"
            style={{ 
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              border: `1px solid ${stat.color}20`
            }}
          >
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
              style={{ 
                background: `radial-gradient(circle at center, ${stat.color}15 0%, transparent 70%)`
              }}
            />
            
            <div className="relative z-10 flex items-center gap-3">
              <motion.div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ 
                  background: `${stat.color}15`,
                  border: `1px solid ${stat.color}30`
                }}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <span style={{ color: stat.color }}>{stat.icon}</span>
              </motion.div>
              
              <div>
                <motion.span 
                  className="text-2xl font-bold block"
                  style={{ color: "#2C2A35" }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-xs font-medium" style={{ color: "#858376" }}>
                  {stat.label}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
const Project3DCard = ({
  project,
  onClick,
  index
}: {
  project: Project;
  onClick: () => void;
  index: number;
}) => {
  const prefersReducedMotion = useReducedMotion();
  const { ref: cardRef, rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt({
    stiffness: 400,
    damping: 30,
    rotateRange: 10
  });
  const colors = categoryColors[project.category];

  const getInitials = (title: string): string => {
    const words = title.trim().split(" ");
    if (words.length >= 2)
      return (words[0][0] + words[1][0]).toUpperCase();
    return title.slice(0, 2).toUpperCase();
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="cursor-pointer"
    >
      <motion.article
        whileHover={{ y: prefersReducedMotion ? 0 : -8, scale: prefersReducedMotion ? 1 : 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative rounded-2xl overflow-hidden h-full flex flex-col"
        style={{ 
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          border: `1px solid ${colors.border}`,
          boxShadow: `0 4px 20px ${colors.text}10, 0 1px 3px rgba(0,0,0,0.05)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div 
          className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
          style={{ background: colors.gradient }} 
        />
        <div className="absolute top-3 right-3 z-20">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="px-3 py-1 text-xs font-semibold rounded-full"
            style={{
              backgroundColor: colors.bg,
              color: colors.text,
              border: `1px solid ${colors.border}`
            }}
          >
            {project.category}
          </motion.span>
        </div>

        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${colors.text}15 0%, transparent 70%)`
          }}
        />

        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ x: "-100%", opacity: 0 }}
          whileHover={{ x: "100%", opacity: [0, 0.4, 0] }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            background: prefersReducedMotion ? "none" : "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
          }}
        />

        <div className="relative z-10 p-6 flex flex-col h-full pt-8">
         
          <div className="flex items-start justify-between mb-4">
            <motion.div 
              className="w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold"
              style={{
                background: colors.gradient,
                boxShadow: `0 4px 15px ${colors.text}40`
              }}
              whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white">{getInitials(project.title)}</span>
            </motion.div>
            
            <div className="flex gap-2">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg transition-all duration-300"
                  style={{ 
                    backgroundColor: `${colors.text}10`,
                    color: colors.text
                  }}
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1, backgroundColor: `${colors.text}20` }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
              )}
              {project.liveDemo && (
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg transition-all duration-300"
                  style={{ 
                    backgroundColor: `${colors.text}10`,
                    color: colors.text
                  }}
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1, backgroundColor: `${colors.text}20` }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <FaCalendarAlt className="w-3 h-3" style={{ color: "#858376" }} />
            <span className="text-xs font-medium" style={{ color: "#858376" }}>
              {project.year}
            </span>
          </div>

          <h3 
            className="text-xl font-bold mb-2 transition-colors duration-300"
            style={{ color: "#2C2A35" }}
          >
            {project.title}
          </h3>
          <p 
            className="text-sm font-medium mb-3"
            style={{ color: colors.text }}
          >
            {project.short}
          </p>
          <p 
            className="text-sm leading-relaxed mb-4 flex-grow"
            style={{ color: "#858376" }}
          >
            {project.description.slice(0, 120)}...
          </p>

          <motion.div 
            className="rounded-lg p-3 mb-4"
            style={{ 
              backgroundColor: colors.bg,
              border: `1px solid ${colors.border}`
            }}
            whileHover={{ scale: 1.02 }}
          >
            <p 
              className="text-xs font-medium flex items-center gap-2"
              style={{ color: colors.text }}
            >
              <FaChartLine className="w-3 h-3" />
              {project.impact[0]}
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.slice(0, 4).map((t, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -2,
                  backgroundColor: `${colors.text}15`,
                  boxShadow: `0 4px 10px ${colors.text}20`
                }}
                className="px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: colors.bg,
                  color: colors.text,
                  border: `1px solid ${colors.border}`
                }}
              >
                {t}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <span 
                className="px-2.5 py-1 text-xs font-medium rounded-full"
                style={{ color: "#858376" }}
              >
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <motion.div 
            className="mt-4 pt-4 flex items-center justify-between"
            style={{ borderTop: `1px solid ${colors.border}` }}
            whileHover={{ x: 4 }}
          >
            <span 
              className="text-sm font-semibold flex items-center gap-2"
              style={{ color: colors.text }}
            >
              View Details
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <FaFolderOpen className="w-4 h-4" style={{ color: colors.text }} />
          </motion.div>
        </div>
      </motion.article>
    </motion.div>
  );
};

Project3DCard.displayName = "Project3DCard";

const ProjectsFloatingParticles = () => {
  const prefersReducedMotion = useReducedMotion();
  const particles = useMemo(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: `${(i * 47) % 100}%`,
      y: `${(i * 67) % 100}%`,
      color: i % 3 === 0 ? "#8C4555" : i % 3 === 1 ? "#B58169" : "#4A90A4",
      duration: 10 + (i % 10),
      delay: (i % 5) * 0.5,
      xOffset: i % 2 === 0 ? 15 : -15,
    })),
  []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: p.x,
            top: p.y,
            background: p.color,
            filter: "blur(1px)",
          }}
          animate={prefersReducedMotion ? {} : {
            y: [0, -50, 0],
            x: [0, p.xOffset, 0],
            opacity: [0, 0.6, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = useMemo(() => ["All", ...new Set(projects.map(p => p.category))], []);
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <section 
        id="projects" 
        className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: "#f5f4f2" }}
      >
        <ProjectsFloatingParticles />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #B58169 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #8C4555 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div 
            className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #4A90A4 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold mb-6"
              style={{ 
                backgroundColor: "rgba(140, 69, 85, 0.1)", 
                color: "#8C4555",
                border: "1px solid rgba(140, 69, 85, 0.2)"
              }}
            >
              <FaFolderOpen className="w-4 h-4" />
              <span>Portfolio</span>
              <FaRocket className="w-4 h-4" />
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ color: "#2C2A35" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Featured{" "}
              <span 
                className="relative inline-block"
                style={{ color: "#8C4555" }}
              >
                Projects
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <motion.path
                    d="M0,8 Q50,0 100,8 T200,8"
                    fill="none"
                    stroke="#8C4555"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </motion.svg>
              </span>
            </motion.h2>

            <motion.p 
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "#858376" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Full-stack applications showcasing AI integration, modern architectures, 
              and measurable business impact.
            </motion.p>
          </motion.div>

          <ProjectStats projects={projects} />

          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {categories.map((category) => {
              const colors = category === "All" 
                ? { bg: "rgba(140, 69, 85, 0.1)", text: "#8C4555", border: "rgba(140, 69, 85, 0.2)" }
                : categoryColors[category as ProjectCategory];
              
              return (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2"
                  style={{
                    backgroundColor: activeFilter === category ? colors.text : colors.bg,
                    color: activeFilter === category ? "#ffffff" : colors.text,
                    border: `1px solid ${activeFilter === category ? colors.text : colors.border}`,
                    boxShadow: activeFilter === category ? `0 4px 15px ${colors.text}40` : "none"
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category === "All" ? <FaFilter className="w-3 h-3" /> : null}
                  {category}
                  {category !== "All" && (
                    <span 
                      className="ml-1 px-1.5 py-0.5 rounded-full text-xs"
                      style={{
                        backgroundColor: activeFilter === category ? "rgba(255,255,255,0.3)" : colors.text + "20",
                        color: activeFilter === category ? "#ffffff" : colors.text
                      }}
                    >
                      {projects.filter(p => p.category === category).length}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <Project3DCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                  index={i}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p style={{ color: "#858376" }}>No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 backdrop-blur-md"
              style={{ backgroundColor: "rgba(44, 42, 53, 0.7)" }}
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100, rotateX: 10 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.16, 1, 0.3, 1],
                type: "spring",
                stiffness: 200,
                damping: 25
              }}
              className="relative rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              style={{
                backgroundColor: "#ffffff",
                border: `1px solid ${categoryColors[selectedProject.category].border}`,
                transformStyle: "preserve-3d",
                perspective: 1000
              }}
            >
              <div 
                className="absolute top-0 left-0 right-0 h-2"
                style={{ 
                  background: categoryColors[selectedProject.category].gradient 
                }} 
              />

              <motion.button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: "rgba(140, 69, 85, 0.08)",
                  color: "#8C4555"
                }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="w-5 h-5" />
              </motion.button>

              <div className="p-8 pt-10">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="px-3 py-1 text-xs font-semibold rounded-full"
                      style={{
                        backgroundColor: categoryColors[selectedProject.category].bg,
                        color: categoryColors[selectedProject.category].text,
                        border: `1px solid ${categoryColors[selectedProject.category].border}`
                      }}
                    >
                      {selectedProject.category}
                    </span>
                    <span className="text-sm flex items-center gap-1" style={{ color: "#858376" }}>
                      <FaCalendarAlt className="w-3 h-3" />
                      {selectedProject.year}
                    </span>
                  </div>
                  
                  <h2 
                    className="text-3xl font-bold mb-2"
                    style={{ color: "#2C2A35" }}
                  >
                    {selectedProject.title}
                  </h2>
                  <p style={{ color: categoryColors[selectedProject.category].text }}>
                    {selectedProject.short}
                  </p>
                </div>

                <motion.div 
                  className="aspect-video rounded-xl mb-6 flex items-center justify-center"
                  style={{
                    background: categoryColors[selectedProject.category].gradient,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-center text-white">
                    <FaRocket className="w-16 h-16 mx-auto mb-3 opacity-80" />
                    <p className="text-lg font-medium opacity-90">Project Demo Preview</p>
                    <p className="text-sm mt-1 opacity-70">
                      Interactive demo coming soon
                    </p>
                  </div>
                </motion.div>

                <div className="space-y-4 mb-6">
                  <motion.div 
                    className="rounded-xl p-4"
                    style={{ 
                      backgroundColor: "rgba(140, 69, 85, 0.04)",
                      border: "1px solid rgba(140, 69, 85, 0.1)"
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FaLightbulb className="w-5 h-5" style={{ color: "#8C4555" }} />
                      <h3 className="font-semibold" style={{ color: "#2C2A35" }}>Problem</h3>
                    </div>
                    <p className="text-sm" style={{ color: "#858376" }}>
                      {selectedProject.problem}
                    </p>
                  </motion.div>

                  <motion.div 
                    className="rounded-xl p-4"
                    style={{ 
                      backgroundColor: "rgba(74, 144, 164, 0.04)",
                      border: "1px solid rgba(74, 144, 164, 0.1)"
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FaRocket className="w-5 h-5" style={{ color: "#4A90A4" }} />
                      <h3 className="font-semibold" style={{ color: "#2C2A35" }}>Solution</h3>
                    </div>
                    <ul className="space-y-2">
                      {selectedProject.details.map((detail, idx) => (
                        <motion.li 
                          key={idx} 
                          className="text-sm flex items-start gap-2"
                          style={{ color: "#858376" }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.05 }}
                        >
                          <span 
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: "#4A90A4" }}
                          />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="rounded-xl p-4"
                    style={{ 
                      backgroundColor: categoryColors[selectedProject.category].bg,
                      border: `1px solid ${categoryColors[selectedProject.category].border}`
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FaChartLine className="w-5 h-5" style={{ color: categoryColors[selectedProject.category].text }} />
                      <h3 className="font-semibold" style={{ color: "#2C2A35" }}>Impact</h3>
                    </div>
                    <ul className="space-y-2">
                      {selectedProject.impact.map((item, idx) => (
                        <motion.li 
                          key={idx} 
                          className="text-sm flex items-start gap-2 font-medium"
                          style={{ color: "#858376" }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.05 }}
                        >
                          <span style={{ color: categoryColors[selectedProject.category].text }}>✓</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

              
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-lg font-semibold mb-3" style={{ color: "#2C2A35" }}>
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1.5 text-sm rounded-full"
                        style={{
                          backgroundColor: categoryColors[selectedProject.category].bg,
                          color: categoryColors[selectedProject.category].text,
                          border: `1px solid ${categoryColors[selectedProject.category].border}`
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + idx * 0.03 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {selectedProject.github && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300"
                      style={{ 
                        backgroundColor: categoryColors[selectedProject.category].bg,
                        color: categoryColors[selectedProject.category].text,
                        border: `1px solid ${categoryColors[selectedProject.category].border}`
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-5 h-5" />
                      View on GitHub
                    </motion.a>
                  )}
                  {selectedProject.liveDemo && (
                    <motion.a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white transition-all duration-300"
                      style={{ 
                        background: categoryColors[selectedProject.category].gradient,
                        boxShadow: `0 4px 15px ${categoryColors[selectedProject.category].text}40`
                      }}
                      whileHover={{ scale: 1.05, boxShadow: `0 6px 25px ${categoryColors[selectedProject.category].text}60` }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                      Live Demo
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
