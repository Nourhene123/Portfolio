import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaLightbulb, FaRocket, FaChartLine } from "react-icons/fa";

interface Project {
  title: string;
  short: string;
  description: string;
  details: string[];
  technologies: string[];
  github: string;
  liveDemo?: string;
  problem?: string;
  solution?: string;
  impact?: string[];
  architecture?: string;
  images?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture">("overview");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setActiveTab("overview");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-gradient-to-br from-gray-900 via-[#1a2a4f] to-black rounded-2xl z-50 overflow-hidden border border-bordeaux-500/30 shadow-2xl shadow-bordeaux-500/20"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 hover:rotate-90"
              aria-label="Close modal"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <div className="h-full overflow-y-auto custom-scrollbar">
              <div className="p-6 md:p-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-bordeaux-300 text-lg">{project.short}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative mb-8 rounded-xl overflow-hidden bg-gradient-to-br from-bordeaux-900/30 to-gray-800/30 border border-bordeaux-500/20 aspect-video flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-bordeaux-500 to-pink-600 flex items-center justify-center">
                      <FaRocket className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-gray-400 text-sm">Project Demo Preview</p>
                    <p className="text-gray-500 text-xs mt-1">
                      Add screenshots/GIFs to project.images array
                    </p>
                  </div>
                  {project.images && project.images.length > 0 && (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </motion.div>

                <div className="flex gap-4 mb-6 border-b border-white/10 pb-4">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`text-sm font-medium transition-all duration-300 pb-2 border-b-2 ${
                      activeTab === "overview"
                        ? "text-bordeaux-400 border-bordeaux-500"
                        : "text-gray-400 border-transparent hover:text-white"
                    }`}
                  >
                    Problem → Solution → Impact
                  </button>
                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`text-sm font-medium transition-all duration-300 pb-2 border-b-2 ${
                      activeTab === "architecture"
                        ? "text-bordeaux-400 border-bordeaux-500"
                        : "text-gray-400 border-transparent hover:text-white"
                    }`}
                  >
                    Architecture
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {activeTab === "overview" ? (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                            <FaLightbulb className="w-5 h-5 text-red-400" />
                          </div>
                          <h3 className="text-lg font-semibold text-red-300">Problem</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {project.problem || project.description}
                        </p>
                      </div>

                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <FaRocket className="w-5 h-5 text-blue-400" />
                          </div>
                          <h3 className="text-lg font-semibold text-blue-300">Solution</h3>
                        </div>
                        <ul className="space-y-2">
                          {project.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <span className="text-blue-400 mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                            <FaChartLine className="w-5 h-5 text-green-400" />
                          </div>
                          <h3 className="text-lg font-semibold text-green-300">Impact</h3>
                        </div>
                        {project.impact ? (
                          <ul className="space-y-2">
                            {project.impact.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-300">
                                <span className="text-green-400 mt-1">✓</span>
                                <span className="font-medium text-green-200">{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-400 italic">
                            Impact metrics coming soon...
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="architecture"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-800/50 rounded-xl p-6 border border-white/10"
                    >
                      <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                        {project.architecture ||
                          "Architecture diagram and description coming soon...\n\nTypical stack includes:\n• Frontend: Angular / React / Next.js\n• Backend: Spring Boot / Django / .NET\n• Database: PostgreSQL / MongoDB / SQL Server\n• AI/ML: RAG pipeline with vector database\n• Deployment: Docker + CI/CD pipeline"}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-bordeaux-900/40 to-bordeaux-800/40 text-bordeaux-200 text-sm font-medium rounded-full border border-bordeaux-500/30 hover:border-bordeaux-400/50 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-lg text-white transition-all duration-300 hover:-translate-y-1"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>View on GitHub</span>
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-bordeaux-600 to-bordeaux-700 hover:from-bordeaux-500 hover:to-bordeaux-600 rounded-lg text-white transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-bordeaux-500/25"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
