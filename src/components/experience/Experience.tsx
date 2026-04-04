import { useState } from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "./Data";
import { ExperienceCard } from "./card/ExperienceCard";
import SectionReveal from "../shared/SectionReveal";

const getDateLabel = (period: string) => period.split("-")[0]?.trim() || period;

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            Hands-on experience building production-grade applications with measurable business impact.
          </p>
        </SectionReveal>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-bordeaux-500/50 via-bordeaux-500/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`relative flex items-center ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-4 md:gap-8`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-bordeaux-500 border-4 border-gray-900 md:-translate-x-1/2 z-10" />

                <div className={`hidden md:block w-1/2 ${idx % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <span className="text-bordeaux-400 font-semibold">{getDateLabel(exp.period)}</span>
                </div>

                <div className="ml-12 md:ml-0 w-full md:w-1/2">
                  <ExperienceCard
                    exp={exp}
                    isOpen={openIndex === idx}
                    onToggle={() => toggle(idx)}
                    index={idx}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
