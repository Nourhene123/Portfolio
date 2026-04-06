import { memo, useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaCalendar, 
  FaBuilding, 
  FaChevronDown, 
  FaBriefcase,
  FaBrain,
  FaSchool,
  FaUniversity,
  FaRocket
} from "react-icons/fa";
import type { ExperienceEntry } from "../Data";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  brain: FaBrain,
  school: FaSchool,
  university: FaUniversity,
  rocket: FaRocket,
};

export const ExperienceCard = memo(
  ({
    exp,
    isOpen,
    onToggle,
    index,
    isLeft,
  }: {
    exp: ExperienceEntry;
    isOpen: boolean;
    onToggle: () => void;
    index: number;
    isLeft: boolean;
  }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
    
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
    const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }, [x, y]);

    const handleMouseLeave = useCallback(() => {
      x.set(0);
      y.set(0);
    }, [x, y]);

    useEffect(() => {
    }, [isOpen]);

    const IconComponent = iconMap[exp.icon] || FaBriefcase;

    return (
      <div className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-4 lg:gap-8`}>
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 z-20 hidden lg:flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
        >
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
            style={{ 
              background: `linear-gradient(135deg, ${exp.color} 0%, ${exp.color}dd 100%)`,
              boxShadow: `0 0 20px ${exp.color}40, 0 0 40px ${exp.color}20`
            }}
          >
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: `${exp.color}30` }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            delay: index * 0.1, 
            duration: 0.6, 
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`flex-1 ${isLeft ? 'lg:pr-16' : 'lg:pl-16'}`}
        >
          <motion.article
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative rounded-2xl overflow-hidden cursor-pointer"
            style={{ 
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              border: `1px solid ${exp.color}20`,
              boxShadow: `0 4px 20px ${exp.color}10, 0 1px 3px rgba(0,0,0,0.05)`,
              transformStyle: "preserve-3d",
            }}
            onClick={onToggle}
            role="button"
            aria-expanded={isOpen}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onToggle();
            }}
          >
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${exp.color}20 0%, transparent 50%, ${exp.color}10 100%)`,
                padding: '1px',
              }}
            />

            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
              style={{
                background: `radial-gradient(circle at ${useTransform(glowX, v => `${v}%`)} ${useTransform(glowY, v => `${v}%`)}, ${exp.color}25 0%, transparent 60%)`,
              }}
            />

            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: `inset 0 0 20px ${exp.color}15, 0 0 30px ${exp.color}20`,
              }}
            />

            <motion.div 
              className="absolute inset-0 pointer-events-none"
              initial={{ x: "-100%", opacity: 0 }}
              whileHover={{ x: "100%", opacity: [0, 0.3, 0] }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              }}
            />

            <div className="relative z-10 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden"
                      style={{ 
                        background: exp.logo ? "white" : `linear-gradient(135deg, ${exp.color}15 0%, ${exp.color}08 100%)`,
                        border: `1px solid ${exp.color}25`
                      }}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          loading="lazy"
                          className="w-8 h-8 object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <IconComponent className="w-5 h-5" style={{ color: exp.color }} />
                      )}
                    </motion.div>
                    
                    <motion.div 
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium"
                      style={{ 
                        backgroundColor: `${exp.color}10`,
                        color: exp.color,
                        border: `1px solid ${exp.color}20`
                      }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <FaBuilding className="w-3 h-3" />
                      {exp.company}
                    </motion.div>
                  </div>
                  
                  <h3 
                    className="text-xl font-bold leading-tight"
                    style={{ color: "#2C2A35" }}
                  >
                    {exp.role}
                  </h3>
                </div>
                
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                  className="ml-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ 
                    backgroundColor: isOpen ? `${exp.color}20` : `${exp.color}10`,
                    color: exp.color,
                    border: `1px solid ${exp.color}30`
                  }}
                >
                  <FaChevronDown className="w-4 h-4" />
                </motion.div>
              </div>

              <div 
                className="flex flex-wrap gap-3 text-sm mb-4 pb-4" 
                style={{ 
                  color: "#65635a", 
                  borderBottom: `1px solid ${exp.color}12`
                }}
              >
                <motion.span 
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors duration-300"
                  style={{ backgroundColor: `${exp.color}08` }}
                  whileHover={{ backgroundColor: `${exp.color}15`, scale: 1.02 }}
                >
                  <FaCalendar className="w-3.5 h-3.5" style={{ color: exp.color }} />
                  {exp.period}
                </motion.span>
                <motion.span 
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors duration-300"
                  style={{ backgroundColor: `${exp.color}08` }}
                  whileHover={{ backgroundColor: `${exp.color}15`, scale: 1.02 }}
                >
                  <FaMapMarkerAlt className="w-3.5 h-3.5" style={{ color: exp.color }} />
                  {exp.location}
                </motion.span>
              </div>

              <motion.div
                ref={contentRef}
                className="overflow-hidden"
                initial={false}
                animate={{ 
                  maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
                  opacity: isOpen ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="pt-2">
                  {/* Overview bullets */}
                  {exp.bullets.length > 0 && (
                    <ul className="space-y-3 mb-4">
                      {exp.bullets.map((b, i) => (
                        <motion.li 
                          key={i} 
                          className="text-sm flex items-start gap-3 leading-relaxed"
                          style={{ color: "#65635a" }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
                          transition={{ delay: i * 0.05, duration: 0.3 }}
                        >
                          <motion.span 
                            className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: exp.color }}
                            whileHover={{ scale: 1.5 }}
                          />
                          <span>{b}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {/* Sections with headers */}
                  {exp.sections && (
                    <div className="space-y-4">
                      {exp.sections.map((section, sectionIdx) => (
                        <motion.div
                          key={sectionIdx}
                          className="border rounded-xl overflow-hidden"
                          style={{ 
                            borderColor: `${exp.color}15`,
                            backgroundColor: `${exp.color}04`
                          }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
                          transition={{ delay: 0.1 + sectionIdx * 0.08, duration: 0.3 }}
                        >
                          {/* Section Header */}
                          <div 
                            className="px-4 py-2 flex items-center gap-2"
                            style={{ 
                              backgroundColor: `${exp.color}10`,
                              borderBottom: `1px solid ${exp.color}15`
                            }}
                          >
                            <span className="text-base">{section.emoji}</span>
                            <span 
                              className="text-sm font-semibold"
                              style={{ color: exp.color }}
                            >
                              {section.title}
                            </span>
                          </div>
                          
                          {/* Section Items */}
                          <ul className="p-4 space-y-2">
                            {section.items.map((item, itemIdx) => (
                              <motion.li 
                                key={itemIdx}
                                className="text-sm flex items-start gap-2.5 leading-relaxed"
                                style={{ color: "#65635a" }}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -5 }}
                                transition={{ delay: 0.2 + sectionIdx * 0.08 + itemIdx * 0.03, duration: 0.2 }}
                              >
                                <span 
                                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                  style={{ backgroundColor: `${exp.color}80` }}
                                />
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Fallback: regular bullets if no sections */}
                  {!exp.sections && exp.bullets.length > 0 && (
                    <ul className="space-y-3">
                      {exp.bullets.map((b, i) => (
                        <motion.li 
                          key={i} 
                          className="text-sm flex items-start gap-3 leading-relaxed"
                          style={{ color: "#65635a" }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
                          transition={{ delay: i * 0.05, duration: 0.3 }}
                        >
                          <motion.span 
                            className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: exp.color }}
                            whileHover={{ scale: 1.5 }}
                          />
                          <span dangerouslySetInnerHTML={{ 
                            __html: b.replace(/\*\*(.+?)\*\*/g, `<strong style='color:${exp.color}'>$1</strong>`) 
                          }} />
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-wrap gap-2 mt-4 pt-4" 
                style={{ borderTop: isOpen ? `1px solid ${exp.color}12` : "none" }}
              >
                {exp.tools.map((tool, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -2,
                      backgroundColor: `${exp.color}20`,
                      boxShadow: `0 4px 12px ${exp.color}20`
                    }}
                    className="px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 cursor-default"
                    style={{
                      backgroundColor: `${exp.color}08`,
                      color: exp.color,
                      border: `1px solid ${exp.color}20`
                    }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    );
  }
);

ExperienceCard.displayName = "ExperienceCard";

export default ExperienceCard;
