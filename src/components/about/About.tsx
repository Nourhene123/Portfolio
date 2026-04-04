import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaDownload, FaCode, FaBrain, FaUsers, FaRocket, FaQuoteLeft } from "react-icons/fa";
import { BiLogoSpringBoot, BiLogoReact } from "react-icons/bi";
import { SiPython, SiOpenai } from "react-icons/si";
import profilePic from "../../assets/images/profilePic.png";
import { useCounter } from "../../hooks/useCounter";
import { use3DTilt } from "../../hooks/use3DTilt";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  
  const { ref: tiltRef, rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt({
    stiffness: 300,
    damping: 30,
    rotateRange: 5
  });

  const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const { count, ref } = useCounter(value, { duration: 2000, steps: 60 });
    return (
      <span ref={ref}>
        {count}{suffix}
      </span>
    );
  };
  const stats = [
    { number: 12, suffix: "+", label: "Projects Completed", icon: FaRocket },
    { number: 90, suffix: "+", label: "AIESEC Attendees", icon: FaUsers },
    { number: 20, suffix: "", label: "Team Members Led", icon: FaBrain },
  ];

  const traits = [
    { text: "Problem Solver", color: "#8C4555", icon: FaBrain },
    { text: "Team Leader", color: "#B58169", icon: FaUsers },
    { text: "AI-Driven", color: "#8C4555", icon: SiOpenai },
    { text: "Communicator", color: "#B58169", icon: FaRocket },
    { text: "Full-Stack", color: "#8C4555", icon: BiLogoReact },
    { text: "Creative", color: "#B58169", icon: FaCode },
  ];

  const techStack = [
    { icon: BiLogoReact, color: "#61dafb", name: "React", position: { top: "-10%", left: "0%" } },
    { icon: BiLogoSpringBoot, color: "#6db33f", name: "Spring", position: { top: "10%", right: "-5%" } },
    { icon: SiPython, color: "#3776ab", name: "Python", position: { bottom: "20%", left: "-10%" } },
    { icon: SiOpenai, color: "#10a37f", name: "AI/LLMs", position: { bottom: "0%", right: "10%" } },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#f5f4f2" }}
    >
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(140, 69, 85, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(140, 69, 85, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: 200 + i * 50,
            height: 200 + i * 50,
            background: i % 2 === 0 ? "rgba(140, 69, 85, 0.15)" : "rgba(181, 129, 105, 0.15)",
            left: `${15 + i * 20}%`,
            top: `${20 + i * 15}%`,
          }}
          animate={prefersReducedMotion ? {} : {
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="absolute w-12 h-12 rounded-xl flex items-center justify-center shadow-lg z-20"
                style={{
                  backgroundColor: "#ffffff",
                  border: `2px solid ${tech.color}40`,
                  ...tech.position,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1,
                  y: prefersReducedMotion ? 0 : [0, -15, 0],
                } : {}}
                transition={{ 
                  delay: 0.5 + i * 0.1, 
                  duration: 0.5,
                  y: prefersReducedMotion ? {} : { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: prefersReducedMotion ? 1 : 1.1, rotate: prefersReducedMotion ? 0 : 10 }}
              >
                <motion.div
                  animate={{ rotate: prefersReducedMotion ? 0 : 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                </motion.div>
              </motion.div>
            ))}

            <div
              ref={tiltRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative"
              >
                
                <div
                  className="absolute -inset-4 rounded-3xl blur-2xl opacity-50"
                  style={{
                    background: "linear-gradient(135deg, #8C4555, #B58169)",
                  }}
                />

                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={profilePic}
                    alt="Nourhene"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8C4555]/20 to-transparent" />
                </div>

                <motion.div
                  className="absolute -inset-6 rounded-3xl border-2 border-dashed"
                  style={{ borderColor: "rgba(140, 69, 85, 0.3)" }}
                  animate={prefersReducedMotion ? {} : { rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl shadow-lg"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className="flex items-center gap-2">
                    <FaQuoteLeft className="w-4 h-4" style={{ color: "#8C4555" }} />
                    <span className="text-sm font-medium" style={{ color: "#2C2A35" }}>
                      Building with passion
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            
            <div className="mb-8">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: "rgba(140, 69, 85, 0.1)", color: "#8C4555" }}
              >
                Get To Know Me
              </motion.span>

              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#2C2A35" }}>
                About{" "}
                <span style={{ color: "#8C4555" }}>Me</span>
              </h2>

              <div
                className="w-24 h-1 rounded-full"
                style={{ background: "linear-gradient(90deg, #8C4555, #B58169)" }}
              />
            </div>

            <div className="space-y-4 mb-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-lg leading-relaxed"
                style={{ color: "#858376" }}
              >
                Hey, I'm <strong style={{ color: "#8C4555" }}>Nourhene</strong> — a full-stack & AI engineer who codes, dreams,
                and turns ideas into real-world impact. Currently in my 5th year at TEK-UP, I build
                smart, user-centered systems.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-lg leading-relaxed"
                style={{ color: "#858376" }}
              >
                I love when code solves real problems: guiding a teacher through a dashboard,
                helping a doctor with an AI assistant, or matching the perfect CV to a job.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="text-lg leading-relaxed"
                style={{ color: "#858376" }}
              >
                As <strong style={{ color: "#8C4555" }}>Vice President of AIESEC Bizerte</strong>, I led a team of 20,
                increased international volunteer participation, and ran a 90+ attendee conference.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {traits.map((trait, index) => (
                <motion.span
                  key={trait.text}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 300 }}
                  whileHover={{
                    scale: prefersReducedMotion ? 1 : 1.1,
                    y: prefersReducedMotion ? 0 : -5,
                    boxShadow: prefersReducedMotion ? "none" : `0 10px 30px ${trait.color}30`,
                  }}
                  className="px-4 py-2 rounded-full flex items-center gap-2 font-medium cursor-default"
                  style={{
                    backgroundColor: "#ffffff",
                    color: trait.color,
                    border: `2px solid ${trait.color}30`,
                  }}
                >
                  <trait.icon className="w-4 h-4" />
                  {trait.text}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="p-4 rounded-xl text-center"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(140, 69, 85, 0.1)",
                  }}
                >
                  <stat.icon
                    className="w-6 h-6 mx-auto mb-2"
                    style={{ color: "#8C4555" }}
                  />
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ color: "#2C2A35" }}
                  >
                    <Counter value={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs" style={{ color: "#858376" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white shadow-lg"
              style={{
                background: "linear-gradient(135deg, #8C4555, #B58169)",
              }}
            >
              <FaDownload className="w-5 h-5" />
              <span>Let's Connect</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
