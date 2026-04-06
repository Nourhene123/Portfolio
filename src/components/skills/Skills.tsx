import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, categories, featuredSkills } from "../../data/skills.data";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import SectionReveal from "../shared/SectionReveal";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") return skills;
    return skills.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  const backgroundParticleDelays = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: `${(i * 37) % 100}%`,
      y: `${(i * 53) % 100}%`,
      duration: 3 + (i % 3),
      delay: (i % 5) * 0.4,
    })),
  []);

  const featuredSkillDelays = useMemo(() =>
    featuredSkills.map((_, i) => i * 0.1),
  []);

  return (
    <section
      id="skills"
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#f5f4f2" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {backgroundParticleDelays.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full opacity-20"
            style={{
              background: particle.id % 2 === 0 ? "#8C4555" : "#B58169",
              left: particle.x,
              top: particle.y,
            }}
            animate={prefersReducedMotion ? {} : {
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionReveal>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ 
                backgroundColor: "rgba(140, 69, 85, 0.1)", 
                color: "#8C4555" 
              }}
            >
              My Expertise
            </motion.span>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#2C2A35" }}
            >
              Technical{" "}
              <span style={{ color: "#8C4555" }}>Skills</span>
            </h2>
            <div 
              className="w-24 h-1 mx-auto rounded-full mb-6"
              style={{ background: "linear-gradient(90deg, #8C4555, #B58169)" }}
            />
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#65635a" }}>
              A dynamic ecosystem of technologies I work with, from AI/ML to cloud infrastructure.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {featuredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: featuredSkillDelays[idx] }}
                whileHover={{ scale: prefersReducedMotion ? 1 : 1.02, y: prefersReducedMotion ? 0 : -5 }}
                className={`relative rounded-2xl p-5 overflow-hidden cursor-pointer group ${
                  skill.size === "large" ? "col-span-2 row-span-2" : 
                  skill.size === "medium" ? "col-span-2" : ""
                }`}
                style={{ 
                  background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)`,
                  border: `1px solid ${skill.color}30`,
                }}
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <motion.div
                  animate={prefersReducedMotion ? {} : { y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4"
                >
                  <skill.icon 
                    className="w-8 h-8 opacity-30 group-hover:opacity-60 transition-opacity"
                    style={{ color: skill.color }}
                  />
                </motion.div>
                <div className="relative z-10">
                  <h3 className={`font-bold mb-1 ${skill.size === "large" ? "text-2xl" : "text-lg"}`} style={{ color: "#2C2A35" }}>
                    {skill.name}
                  </h3>
                  <p className="text-sm" style={{ color: "#65635a" }}>{skill.desc}</p>
                  {skill.size === "large" && (
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="h-1 mt-4 rounded-full"
                      style={{ background: `linear-gradient(90deg, ${skill.color}, transparent)` }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-pressed={activeCategory === cat.id}
              className={`px-5 py-2.5 rounded-full flex items-center gap-2 font-medium transition-all duration-300 ${
                activeCategory === cat.id ? "shadow-lg" : "hover:shadow-md"
              }`}
              style={{
                backgroundColor: activeCategory === cat.id ? "#8C4555" : "#ffffff",
                color: activeCategory === cat.id ? "#ffffff" : "#65635a",
                border: "1px solid rgba(140, 69, 85, 0.2)",
              }}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="flex flex-wrap justify-center gap-3 min-h-[300px] content-center">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: idx * 0.03, type: "spring", stiffness: 300, damping: 25 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative group"
              >
                <motion.div
                  whileHover={{ 
                    scale: prefersReducedMotion ? 1 : 1.1, 
                    y: prefersReducedMotion ? 0 : -8,
                    boxShadow: prefersReducedMotion ? "none" : `0 20px 40px ${skill.color}30`
                  }}
                  animate={{ y: hoveredSkill === skill.name ? (prefersReducedMotion ? 0 : -8) : (prefersReducedMotion ? 0 : [0, -3, 0]) }}
                  transition={{ y: hoveredSkill === skill.name ? { duration: 0.2 } : { duration: 2 + (idx % 3), repeat: Infinity, ease: "easeInOut" } }}
                  className="relative px-5 py-3 rounded-2xl flex items-center gap-3 cursor-pointer"
                  style={{
                    backgroundColor: "#ffffff",
                    border: `2px solid ${hoveredSkill === skill.name ? skill.color : "rgba(140, 69, 85, 0.1)"}`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: hoveredSkill === skill.name ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${skill.color}15` }}
                  >
                    <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm" style={{ color: "#2C2A35" }}>{skill.name}</span>
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: hoveredSkill === skill.name ? 1 : 0, width: hoveredSkill === skill.name ? 60 : 0 }}
                      className="h-1 mt-1 rounded-full overflow-hidden"
                      style={{ backgroundColor: "#f5f4f2" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </motion.div>
                  </div>
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl"
                    style={{ backgroundColor: `${skill.color}30` }}
                  />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: hoveredSkill === skill.name ? 1 : 0, scale: hoveredSkill === skill.name ? 1 : 0 }}
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.level}
                </motion.span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

     
      </div>
    </section>
  );
};

export default Skills;
