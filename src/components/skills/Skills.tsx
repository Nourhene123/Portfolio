import { motion } from "framer-motion";
import { skills, skillGroups } from "../../data/skills.data";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import SectionReveal from "../shared/SectionReveal";

const Skills = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionReveal>
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: "rgba(140, 69, 85, 0.1)", color: "#8C4555" }}
            >
              My Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#2C2A35" }}>
              Technical <span style={{ color: "#8C4555" }}>Skills</span>
            </h2>
            <div
              className="w-24 h-1 mx-auto rounded-full mb-6"
              style={{ background: "linear-gradient(90deg, #8C4555, #B58169)" }}
            />
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#65635a" }}>
              From shipping LLM agents and RAG pipelines to production web systems — these are the tools I build with.
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, gi) => {
            const groupSkills = skills.filter((s) => group.categories.includes(s.category));
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: gi * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={prefersReducedMotion ? {} : { y: -4 }}
                className="group relative h-full rounded-2xl p-6 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${group.color}16, ${group.color}05)`,
                  border: `1px solid ${group.color}33`,
                  boxShadow: `0 4px 20px ${group.color}12`,
                }}
              >
                <group.icon
                  className="absolute -top-3 -right-3 w-24 h-24 opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.1]"
                  style={{ color: group.color }}
                />

                <div className="relative z-10 flex items-center gap-3 mb-4">
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${group.color}1f`, color: group.color }}
                  >
                    <group.icon className="w-4 h-4" />
                  </span>
                  <h3 className="font-bold text-lg" style={{ color: "#2C2A35" }}>
                    {group.label}
                  </h3>
                  <span
                    className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${group.color}18`, color: group.color }}
                  >
                    {groupSkills.length}
                  </span>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2">
                  {groupSkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-transform hover:scale-105"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        border: `1px solid ${group.color}2e`,
                        color: "#2C2A35",
                      }}
                    >
                      <skill.icon className="w-4 h-4 flex-shrink-0" style={{ color: skill.color }} />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
