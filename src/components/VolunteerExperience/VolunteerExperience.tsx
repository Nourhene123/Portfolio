import { useState, useRef, useCallback, memo } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaTrophy,
  FaHandsHelping,
  FaUsers,
  FaStar,
  FaHeart,
  FaGlobe,
  FaLinkedin,
} from "react-icons/fa";

interface VolunteerExperience {
  id: string;
  title: string;
  organization: string;
  date: string;
  short: string;
  description: string;
  details: string[];
  technologies: string[];
  link?: string;
  metrics: string[];
  color: string;
  icon: string;
}

const VolunteerStats = ({ experiences }: { experiences: VolunteerExperience[] }) => {
  const totalEvents = experiences.length;
  const totalMetrics = experiences.reduce((acc, exp) => acc + exp.metrics.length, 0);
  
  const stats = [
    { 
      icon: <FaHandsHelping size={20} />, 
      value: totalEvents.toString(), 
      label: "Roles",
      color: "#8C4555"
    },
    { 
      icon: <FaUsers size={20} />, 
      value: "100+", 
      label: "People Impacted",
      color: "#4A90A4"
    },
    { 
      icon: <FaTrophy size={20} />, 
      value: totalMetrics.toString(), 
      label: "Achievements",
      color: "#6B5B95"
    },
    { 
      icon: <FaGlobe size={20} />, 
      value: "3+", 
      label: "Years Active",
      color: "#B58169"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, idx) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="relative group"
        >
          <div 
            className="relative p-5 rounded-xl overflow-hidden transition-all duration-300"
            style={{ 
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              border: `1px solid ${stat.color}20`
            }}
          >
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
              style={{ 
                background: `radial-gradient(circle at center, ${stat.color}15 0%, transparent 70%)`
              }}
            />
            
            <div className="relative z-10 flex items-center gap-3">
              <motion.div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ 
                  background: `${stat.color}15`,
                  border: `1px solid ${stat.color}30`
                }}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <span style={{ color: stat.color }}>{stat.icon}</span>
              </motion.div>
              
              <div>
                <motion.span 
                  className="text-2xl font-bold block"
                  style={{ color: "#2C2A35" }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-xs font-medium" style={{ color: "#858376" }}>
                  {stat.label}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};


const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? "#8C4555" : i % 3 === 1 ? "#B58169" : "#4A90A4",
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.5, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Volunteer3DCard = memo(({
  exp,
  isExpanded,
  onToggle,
  index
}: {
  exp: VolunteerExperience;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const getInitials = (title: string) => {
    const w = title.trim().split(" ");
    return w.length >= 2 ? (w[0][0] + w[1][0]).toUpperCase() : title.slice(0, 2).toUpperCase();
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.article
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer"
        style={{ 
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          border: `1px solid ${exp.color}25`,
          boxShadow: `0 4px 20px ${exp.color}10, 0 1px 3px rgba(0,0,0,0.05)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div 
          className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
          style={{ 
            background: `linear-gradient(90deg, ${exp.color} 0%, #B58169 100%)` 
          }} 
        />

        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${exp.color}12 0%, transparent 70%)`
          }}
        />

        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ x: "-100%", opacity: 0 }}
          whileHover={{ x: "100%", opacity: [0, 0.35, 0] }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
          }}
        />

        <div className="relative z-10 p-6 flex flex-col h-full pt-8">
     
          <div className="flex items-start justify-between mb-4">
            <motion.div 
              className="w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold"
              style={{
                background: `linear-gradient(135deg, ${exp.color}15 0%, ${exp.color}08 100%)`,
                border: `1px solid ${exp.color}30`,
                color: exp.color,
                boxShadow: `0 4px 15px ${exp.color}25`
              }}
              whileHover={{ rotate: [0, -8, 8, 0], scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              {getInitials(exp.title)}
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
              style={{ 
                backgroundColor: `${exp.color}10`,
                color: "#858376",
                border: `1px solid ${exp.color}20`
              }}
              whileHover={{ scale: 1.05 }}
            >
              <FaCalendarAlt className="w-3 h-3" style={{ color: exp.color }} />
              {exp.date}
            </motion.div>
          </div>

          <h3 
            className="text-lg font-bold mb-1 transition-colors duration-300"
            style={{ color: "#2C2A35" }}
          >
            {exp.title}
          </h3>
          <motion.p 
            className="text-sm font-medium mb-3 flex items-center gap-2"
            style={{ color: exp.color }}
            whileHover={{ x: 2 }}
          >
            <FaHandsHelping className="w-3 h-3" />
            {exp.organization}
          </motion.p>

          <p 
            className="text-sm mb-4 flex-grow"
            style={{ color: "#858376" }}
          >
            {exp.short}
          </p>

          <motion.div 
            className="rounded-xl p-3 mb-4"
            style={{ 
              backgroundColor: `${exp.color}08`,
              border: `1px solid ${exp.color}18`
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <FaTrophy className="w-4 h-4" style={{ color: exp.color }} />
              <span 
                className="text-xs font-semibold"
                style={{ color: exp.color }}
              >
                Key Achievements
              </span>
            </div>
            <ul className="space-y-1.5">
              {exp.metrics.map((metric, idx) => (
                <motion.li 
                  key={idx} 
                  className="text-xs flex items-center gap-2"
                  style={{ color: "#858376" }}
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <motion.span 
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: exp.color }}
                    whileHover={{ scale: 1.5 }}
                  />
                  {metric}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className="flex items-center gap-2 text-sm font-medium mb-3 transition-colors duration-300 px-3 py-1.5 rounded-lg self-start"
            style={{ 
              color: exp.color,
              backgroundColor: isExpanded ? `${exp.color}15` : "transparent",
              border: `1px solid ${isExpanded ? exp.color + "30" : "transparent"}`
            }}
            whileHover={{ scale: 1.02, backgroundColor: `${exp.color}10` }}
            whileTap={{ scale: 0.98 }}
          >
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.span
                  key="up"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="flex items-center gap-2"
                >
                  Hide Details <FaChevronUp className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="down"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="flex items-center gap-2"
                >
                  Show Details <FaChevronDown className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <ul 
                  className="space-y-2 text-sm mb-4 pb-4"
                  style={{ borderBottom: `1px solid ${exp.color}12` }}
                >
                  {exp.details.map((d, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start gap-2"
                      style={{ color: "#858376" }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <motion.span 
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: exp.color }}
                        whileHover={{ scale: 1.5 }}
                      />
                      <span>{d}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap gap-2 mt-auto">
            {exp.technologies.map((t, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -2,
                  backgroundColor: `${exp.color}15`,
                  boxShadow: `0 4px 10px ${exp.color}20`
                }}
                className="px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: `${exp.color}08`,
                  color: exp.color,
                  border: `1px solid ${exp.color}20`
                }}
              >
                {t}
              </motion.span>
            ))}
          </div>

          {exp.link && (
            <motion.a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-4 flex items-center gap-2 text-xs font-medium transition-colors duration-300"
              style={{ 
                color: exp.color,
                borderTop: `1px solid ${exp.color}12`
              }}
              onClick={(e) => e.stopPropagation()}
              whileHover={{ x: 4 }}
            >
              <FaLinkedin className="w-4 h-4" />
              <span>View on LinkedIn</span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaExternalLinkAlt className="w-3 h-3" />
              </motion.span>
            </motion.a>
          )}
        </div>
      </motion.article>
    </motion.div>
  );
});

Volunteer3DCard.displayName = "Volunteer3DCard";

const VolunteerExperience = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const experiences: VolunteerExperience[] = [
    {
      id: "1",
      title: "Local Vice President – AIESEC, Outgoing Global Volunteer",
      organization: "AIESEC Bizerte",
      date: "2024 – 2025",
      short: "Led a team to promote global volunteering opportunities.",
      description:
        "Led a team to promote global volunteering opportunities. Increased program participation by 10% through marketing and micro-events. Partnered with international organizations to facilitate cross-cultural exchange.",
      details: [
        "Led a team to promote global volunteering opportunities",
        "Increased program participation by 10% through marketing and micro-events",
        "Partnered with international organizations to facilitate cross-cultural exchange",
        "Conducted training sessions and strategic planning",
      ],
      technologies: ["Leadership", "Marketing", "Event Planning", "Team Management"],
      link: "https://www.linkedin.com/in/nourhene-ferchichi-3aa058251/",
      metrics: [
        "Increased participation by 10%",
        "Led team of 15+ members",
        "Organized 5+ micro-events",
      ],
      color: "#8C4555",
      icon: "leadership"
    },
    {
      id: "2",
      title: "Conference Manager",
      organization: "AIESEC Bizerte",
      date: "17, 18 Nov 2024",
      short: "Coordinated a 90+ participant local conference.",
      description:
        "Coordinated a 90+ participant local conference: sessions, themes, and logistics. Adapted real-time schedules to maximize engagement. Managed guest speakers and ensured smooth execution.",
      details: [
        "Coordinated a 90+ participant local conference: sessions, themes, and logistics",
        "Adapted real-time schedules to maximize engagement",
        "Managed guest speakers and ensured smooth execution",
      ],
      technologies: ["Event Management", "Logistics", "Public Speaking", "Coordination"],
      link: "https://www.linkedin.com/in/nourhene-ferchichi-3aa058251/",
      metrics: [
        "Managed 90+ participants",
        "100% on-time execution",
        "95% satisfaction rate",
      ],
      color: "#4A90A4",
      icon: "conference"
    },
    {
      id: "3",
      title: "Conference Organizer",
      organization: "AIESEC Bizerte",
      date: "2023 – 2024",
      short: "Directed a 3-day conference with cross-functional team management.",
      description:
        "Directed a 3-day conference with cross-functional team management. Ensured quality delivery and timely execution across all event activities.",
      details: [
        "Directed a 3-day conference with cross-functional team management",
        "Ensured quality delivery and timely execution across all event activities",
      ],
      technologies: ["Project Management", "Agile", "Team Leadership", "Execution"],
      link: "https://www.linkedin.com/in/nourhene-ferchichi-3aa058251/",
      metrics: [
        "3-day conference execution",
        "Led cross-functional team",
        "Zero incidents",
      ],
      color: "#6B5B95",
      icon: "organizer"
    },
  ];

  const toggleExpand = (id: string) => setExpanded(expanded === id ? null : id);

  return (
    <section 
      id="volunteering" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: "#f5f4f2" }}
    >
      <FloatingParticles />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #B58169 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #8C4555 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #4A90A4 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12"
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
            <FaHeart className="w-4 h-4" />
            <span>Community Impact</span>
            <FaStar className="w-4 h-4" />
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: "#2C2A35" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Volunteering{" "}
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
            style={{ color: "#858376" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Leadership and organizational skills demonstrated through impactful community initiatives.
          </motion.p>
        </motion.div>
        <VolunteerStats experiences={experiences} />

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {experiences.map((exp, i) => (
              <Volunteer3DCard
                key={exp.id}
                exp={exp}
                isExpanded={expanded === exp.id}
                onToggle={() => toggleExpand(exp.id)}
                index={i}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerExperience;
