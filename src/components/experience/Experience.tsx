import { useState } from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "./Data";
import { ExperienceCard } from "./card/ExperienceCard";
import { CareerStats } from "./CareerStats";
import { FloatingParticles } from "./FloatingParticles";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section 
      id="experience" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: "#f5f4f2" }}
    >
      {/* Floating particles background */}
      <FloatingParticles />

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #8C4555 0%, transparent 70%)" }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, #B58169 0%, transparent 70%)" }}
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #4A90A4 0%, transparent 70%)" }}
          animate={{ 
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
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
            <FaBriefcase className="w-4 h-4" />
            <span>Career Journey</span>
            <FaGraduationCap className="w-4 h-4" />
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: "#2C2A35" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Professional{" "}
            <span 
              className="relative inline-block"
              style={{ color: "#8C4555" }}
            >
              Experience
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
            style={{ color: "#65635a" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            A journey through innovative companies, building production-grade applications 
            with measurable business impact.
          </motion.p>
        </motion.div>

        <CareerStats />

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1">
            <div 
              className="absolute inset-0 rounded-full"
              style={{ 
                background: "linear-gradient(180deg, #8C4555 0%, #B58169 50%, #4A90A4 100%)",
                opacity: 0.3
              }}
            />
            <motion.div 
              className="absolute top-0 left-0 right-0 rounded-full origin-top"
              style={{ 
                background: "linear-gradient(180deg, #8C4555 0%, #B58169 50%, #4A90A4 100%)",
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-8 lg:space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <ExperienceCard
                key={idx}
                exp={exp}
                isOpen={openIndex === idx}
                onToggle={() => toggle(idx)}
                index={idx}
                isLeft={idx % 2 === 0}
              />
            ))}
          </div>

          <motion.div 
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2 mt-12"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <div 
              className="w-6 h-6 rounded-full"
              style={{ 
                background: "linear-gradient(135deg, #65635a 0%, #B58169 100%)",
                boxShadow: "0 0 20px rgba(133, 131, 118, 0.4)"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
