import { useState } from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "./Data";
import { ExperienceCard } from "./card/ExperienceCard";
import { CareerStats } from "./CareerStats";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: "#f5f4f2" }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{
              backgroundColor: "rgba(140, 69, 85, 0.1)",
              color: "#8C4555",
              border: "1px solid rgba(140, 69, 85, 0.2)",
            }}
          >
            <FaBriefcase className="w-3.5 h-3.5" />
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#2C2A35" }}>
            Professional{" "}
            <span style={{ color: "#8C4555" }}>Experience</span>
          </h2>

          <div
            className="w-24 h-1 mx-auto rounded-full mb-6"
            style={{ background: "linear-gradient(90deg, #8C4555, #B58169)" }}
          />

          <p className="text-lg max-w-xl mx-auto" style={{ color: "#65635a" }}>
            3 internships across AI, full-stack, and enterprise platforms — each one shipping real features to real users.
          </p>
        </motion.div>

        <CareerStats />

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical line */}
          <div
            className="absolute left-2 sm:left-2.5 top-0 bottom-0 w-0.5 rounded-full"
            style={{ background: "linear-gradient(180deg, #8C4555 0%, #B58169 60%, #d1c9c4 100%)" }}
          />

          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <ExperienceCard
                key={idx}
                exp={exp}
                isOpen={openIndex === idx}
                onToggle={() => toggle(idx)}
                index={idx}
                isLeft={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
