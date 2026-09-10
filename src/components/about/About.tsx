import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {FaCode, FaBrain, FaUsers, FaRocket, FaQuoteLeft, FaArrowRight } from "react-icons/fa";
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
    { number: 6, suffix: "+", label: "Projects Completed", icon: FaRocket },
    { number: 3, suffix: "", label: "Internships", icon: FaCode },
    { number: 20, suffix: "", label: "Team Members Led", icon: FaUsers },
  ];

  const traits = [
    { text: "Multi-Agent Systems", color: "#8C4555", icon: SiOpenai },
    { text: "Web Apps (Next.js · Nest.js · FastAPI)", color: "#B58169", icon: BiLogoReact },
    { text: "Team Lead · 20 members", color: "#8C4555", icon: FaUsers },
    { text: "Microservices & DevOps", color: "#B58169", icon: BiLogoSpringBoot },
    { text: "Leads with Empathy", color: "#8C4555", icon: FaBrain },
    { text: "Relentless on Goals", color: "#B58169", icon: FaRocket },
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
    >
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

                <div className="relative w-72 h-80 sm:w-80 sm:h-[26rem] md:w-96 md:h-[30rem] lg:w-[27rem] lg:h-[36rem] xl:w-[30rem] xl:h-[42rem] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={profilePic}
                    alt="Nourhene Ferchichi"
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
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
                style={{ color: "#65635a" }}
              >
                Hey, I'm <strong style={{ color: "#8C4555" }}>Nourhene</strong> — a Junior Software & AI Engineer
                who takes an AI feature from a rough idea to running in production, on my own: the agent logic,
                the backend, the interface, and the pipeline that ships it. For a startup that's{" "}
                <strong style={{ color: "#B58169" }}>one hire who closes the loop</strong>; for a bigger team,
                someone who fills the gaps between people.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-lg leading-relaxed"
                style={{ color: "#65635a" }}
              >
                What I deliver: <strong style={{ color: "#8C4555" }}>multi-agent systems and RAG pipelines</strong>{" "}
                that hold up with real users, full-stack apps (Next.js, NestJS, Spring Boot), and the AWS around
                them — EKS, Docker, CI/CD, monitoring. I've shipped this to production, not just to a demo, and I
                move fast without needing much hand-holding.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="text-lg leading-relaxed"
                style={{ color: "#65635a" }}
              >
                And I bring real <strong style={{ color: "#B58169" }}>energy</strong> to a team. I lead with{" "}
                <strong style={{ color: "#8C4555" }}>empathy</strong> as much as logic — I listen, I read what
                people actually need, and I lift teammates up when they're stuck. I thrive across different
                backgrounds and cultures, and once I commit to a goal I'll work{" "}
                <strong style={{ color: "#8C4555" }}>night after night</strong> until it's done right. In an era
                where AI writes the code, that mix — ownership, drive, and knowing how to work with people — is
                what I'd want on my own team.
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
                  <div className="text-xs" style={{ color: "#65635a" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#projects"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white shadow-lg"
                style={{ background: "linear-gradient(135deg, #8C4555, #B58169)" }}
              >
                <FaRocket className="w-5 h-5" />
                <span>See My Work</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.a>

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.3 }}
                whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(140, 69, 85, 0.08)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold"
                style={{
                  border: "2px solid #8C4555",
                  color: "#8C4555",
                  background: "transparent",
                }}
              >
                <span>Let's Talk</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
