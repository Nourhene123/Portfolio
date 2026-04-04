import { memo, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendar, FaBuilding, FaChevronDown } from "react-icons/fa";
import type { ExperienceEntry } from "../Data";

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
  }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState("0px");
    const [opacity, setOpacity] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
      if (!contentRef.current) return;

      const el = contentRef.current;
      const fullHeight = el.scrollHeight;

      if (isOpen) {
        // Expand smoothly
        setAnimating(true);
        setMaxHeight(`${fullHeight}px`);
        setOpacity(1);
        const timeout = setTimeout(() => setAnimating(false), 600);
        return () => clearTimeout(timeout);
      } else {
        // Collapse smoothly
        setAnimating(true);
        setMaxHeight(`${el.scrollHeight}px`);
        setOpacity(0);
        const timeout = setTimeout(() => setAnimating(false), 600);
        requestAnimationFrame(() => {
          setMaxHeight("0px");
        });

        // Force a reflow before setting height to 0 (critical for smooth collapse)

        return () => clearTimeout(timeout);
      }
    }, [isOpen]);

    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className={`bg-white rounded-2xl p-6 border border-slate-200 cursor-pointer transition-all duration-300 hover:border-bordeaux-500/40 hover:shadow-lg ${isOpen ? "border-bordeaux-500/50" : ""}`}
        onClick={onToggle}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onToggle();
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 text-bordeaux-400 text-sm font-semibold mb-1">
              <FaBuilding className="w-4 h-4" />
              {exp.company}
            </div>
            <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-bordeaux-400"
          >
            <FaChevronDown className="w-5 h-5" />
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
          <span className="flex items-center gap-1">
            <FaCalendar className="w-3 h-3 text-bordeaux-400" />
            {exp.period}
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="w-3 h-3 text-bordeaux-400" />
            {exp.location}
          </span>
        </div>

        <div
          ref={contentRef}
          className={`overflow-hidden transition-all duration-500 ${animating ? "" : ""}`}
          style={{ maxHeight, opacity }}
        >
          <div className="pt-4 border-t border-slate-200">
            <ul className="space-y-2">
              {exp.bullets.map((b, i) => (
                <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                  <span className="text-bordeaux-400 mt-1">•</span>
                  <span dangerouslySetInnerHTML={{ __html: b.replace(/\*\*(.+?)\*\*/g, "<strong class='text-slate-800 font-semibold'>$1</strong>") }} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {exp.tools.map((tool, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-bordeaux-900/30 text-bordeaux-300 text-xs font-medium rounded-full border border-bordeaux-700/50"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.article>
    );
  }
);
