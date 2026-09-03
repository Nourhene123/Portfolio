import { memo, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCalendar,
  FaBuilding,
  FaChevronDown,
  FaBriefcase,
  FaBrain,
  FaSchool,
  FaRocket,
} from "react-icons/fa";
import type { ExperienceEntry } from "../Data";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  brain: FaBrain,
  school: FaSchool,
  rocket: FaRocket,
};

export const ExperienceCard = memo(
  ({
    exp,
    isOpen,
    onToggle,
    index,
  }: {
    exp: ExperienceEntry;
    isOpen: boolean;
    onToggle: () => void;
    index: number;
    isLeft: boolean;
  }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const IconComponent = iconMap[exp.icon] || FaBriefcase;

    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="relative pl-10 sm:pl-14"
      >
        {/* Timeline dot */}
        <div
          className="absolute left-0 top-6 w-5 h-5 rounded-full border-4 border-white shadow-md z-10 flex-shrink-0"
          style={{ backgroundColor: exp.color }}
        />

        {/* Card */}
        <article
          className="rounded-2xl bg-white cursor-pointer"
          style={{
            border: `1px solid ${exp.color}25`,
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
          onClick={onToggle}
          role="button"
          aria-expanded={isOpen}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onToggle();
          }}
        >
          <div className="p-5 sm:p-6">
            {/* Header row */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3 min-w-0">
                {/* Logo / icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                  style={{
                    background: exp.logo ? "white" : `${exp.color}15`,
                    border: `1px solid ${exp.color}25`,
                  }}
                >
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      loading="lazy"
                      className="w-7 h-7 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : (
                    <IconComponent className="w-4 h-4" style={{ color: exp.color }} />
                  )}
                </div>

                {/* Company badge */}
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: `${exp.color}10`,
                    color: exp.color,
                    border: `1px solid ${exp.color}20`,
                  }}
                >
                  <FaBuilding className="w-3 h-3" />
                  {exp.company}
                </span>
              </div>

              {/* Chevron toggle */}
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${exp.color}10`,
                  color: exp.color,
                }}
              >
                <FaChevronDown className="w-3.5 h-3.5" />
              </motion.div>
            </div>

            {/* Role title */}
            <h3 className="text-lg font-bold mb-3" style={{ color: "#2C2A35" }}>
              {exp.role}
            </h3>

            {/* Meta: date + location */}
            <div
              className="flex flex-wrap gap-3 text-xs pb-4"
              style={{ color: "#65635a", borderBottom: `1px solid ${exp.color}15` }}
            >
              <span className="flex items-center gap-1.5">
                <FaCalendar className="w-3 h-3" style={{ color: exp.color }} />
                {exp.period}
              </span>
              <span className="flex items-center gap-1.5">
                <FaMapMarkerAlt className="w-3 h-3" style={{ color: exp.color }} />
                {exp.location}
              </span>
            </div>

            {/* Expandable content */}
            <motion.div
              ref={contentRef}
              className="overflow-hidden"
              initial={false}
              animate={{
                maxHeight: isOpen ? (contentRef.current?.scrollHeight ?? 1000) : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="pt-4 space-y-4">
                {/* Plain bullets (no sections) */}
                {!exp.sections && exp.bullets.length > 0 && (
                  <ul className="space-y-2.5">
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="text-sm flex items-start gap-2.5 leading-relaxed"
                        style={{ color: "#65635a" }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: exp.color }}
                        />
                        <span
                          dangerouslySetInnerHTML={{
                            __html: b.replace(
                              /\*\*(.+?)\*\*/g,
                              `<strong style='color:${exp.color}'>$1</strong>`
                            ),
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                )}

                {/* Sectioned content (e.g. Smartovate) */}
                {exp.sections && (
                  <>
                    {/* Optional overview bullet above sections */}
                    {exp.bullets.length > 0 && (
                      <ul className="space-y-2 mb-2">
                        {exp.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="text-sm flex items-start gap-2.5 leading-relaxed"
                            style={{ color: "#65635a" }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: exp.color }}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.sections.map((section, si) => (
                      <div
                        key={si}
                        className="rounded-xl overflow-hidden"
                        style={{
                          border: `1px solid ${exp.color}18`,
                          backgroundColor: `${exp.color}04`,
                        }}
                      >
                        <div
                          className="px-4 py-2 flex items-center gap-2"
                          style={{
                            backgroundColor: `${exp.color}10`,
                            borderBottom: `1px solid ${exp.color}15`,
                          }}
                        >
                          <span className="text-sm">{section.emoji}</span>
                          <span className="text-xs font-semibold" style={{ color: exp.color }}>
                            {section.title}
                          </span>
                        </div>
                        <ul className="p-4 space-y-2">
                          {section.items.map((item, ii) => (
                            <li
                              key={ii}
                              className="text-sm flex items-start gap-2.5 leading-relaxed"
                              style={{ color: "#65635a" }}
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: `${exp.color}80` }}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </motion.div>

            {/* Tech tags — always visible */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4" style={{ borderTop: `1px solid ${exp.color}12` }}>
              {exp.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    backgroundColor: `${exp.color}08`,
                    color: exp.color,
                    border: `1px solid ${exp.color}20`,
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </article>
      </motion.div>
    );
  }
);

ExperienceCard.displayName = "ExperienceCard";

export default ExperienceCard;
