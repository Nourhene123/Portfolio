import { useState } from "react";
import "./Experience.css";
import { EXPERIENCES } from "./Data";
import { ExperienceCard } from "./card/ExperienceCard";

const getDateLabel = (period: string) => period.split("-")[0]?.trim() || period;

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div id="experience" className="experience-container">
      <p className="certifications-title text-4xl md:text-5xl font-bold text-white text-center mb-12">
        Experience
      </p>

      <div className="timeline">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-date">{getDateLabel(exp.period)}</div>
            <div className="timeline-content">
              <ExperienceCard
                exp={exp}
                isOpen={openIndex === idx}
                onToggle={() => toggle(idx)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
