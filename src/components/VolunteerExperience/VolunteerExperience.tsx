import { useState, useRef, useCallback, memo, useMemo } from "react";
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
  FaImage,
  FaAward,
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
  photos?: string[];
  certificates?: { name: string; image: string }[];
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


const FloatingParticles = memo(() => {
  const particles = useMemo(() => 
    Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      color: i % 3 === 0 ? "#8C4555" : i % 3 === 1 ? "#B58169" : "#4A90A4",
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 4,
      xOffset: Math.random() * 20 - 10,
    })),
  []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: p.left,
            top: p.top,
            background: p.color,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, p.xOffset, 0],
            opacity: [0, 0.5, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

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
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });
  
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
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="group relative rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer"
        style={{ 
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          border: `1px solid ${exp.color}25`,
          boxShadow: `0 4px 20px ${exp.color}10, 0 1px 3px rgba(0,0,0,0.05)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div 
          className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
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
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
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
                      <span 
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: exp.color }}
                      />
                      <span>{d}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Photos Gallery with Horizontal Scroll */}
                {exp.photos && exp.photos.length > 0 && (
                  <motion.div 
                    className="mb-4 pb-4"
                    style={{ borderBottom: `1px solid ${exp.color}12` }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <FaImage className="w-4 h-4" style={{ color: exp.color }} />
                      <span className="text-xs font-semibold" style={{ color: exp.color }}>
                        Photos ({exp.photos.length})
                      </span>
                    </div>
                    <div 
                      className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent"
                      style={{ 
                        scrollbarWidth: 'thin',
                        scrollbarColor: `${exp.color}40 transparent`,
                        msOverflowStyle: 'none'
                      }}
                    >
                      {exp.photos.map((photo, idx) => (
                        <motion.div
                          key={idx}
                          className="relative flex-shrink-0 w-40 h-28 rounded-lg overflow-hidden cursor-pointer snap-start"
                          style={{ border: `1px solid ${exp.color}20` }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          onClick={() => window.open(photo, '_blank')}
                        >
                          <img 
                            src={photo} 
                            alt={`Experience photo ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                          <div 
                            className="absolute bottom-1 right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                            style={{ backgroundColor: exp.color, color: 'white' }}
                          >
                            {idx + 1}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Certificates Gallery with Horizontal Scroll */}
                {exp.certificates && exp.certificates.length > 0 && (
                  <motion.div 
                    className="mb-4 pb-4"
                    style={{ borderBottom: `1px solid ${exp.color}12` }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <FaAward className="w-4 h-4" style={{ color: exp.color }} />
                      <span className="text-xs font-semibold" style={{ color: exp.color }}>
                        Certificates ({exp.certificates.length})
                      </span>
                    </div>
                    <div 
                      className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent"
                      style={{ 
                        scrollbarWidth: 'thin',
                        scrollbarColor: `${exp.color}40 transparent`,
                        msOverflowStyle: 'none'
                      }}
                    >
                      {exp.certificates.map((cert, idx) => (
                        <motion.div
                          key={idx}
                          className="relative flex-shrink-0 w-40 h-52 rounded-lg overflow-hidden cursor-pointer snap-start"
                          style={{ 
                            backgroundColor: `${exp.color}08`,
                            border: `1px solid ${exp.color}20`
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          onClick={() => window.open(cert.image, '_blank')}
                        >
                          <img 
                            src={cert.image} 
                            alt={cert.name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <FaAward className="w-8 h-8" style={{ color: exp.color }} />
                          </div>
                          <div 
                            className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                          >
                            <span className="text-xs font-medium text-white break-words leading-tight">
                              {cert.name}
                            </span>
                          </div>
                          <div 
                            className="absolute top-1 right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                            style={{ backgroundColor: exp.color, color: 'white' }}
                          >
                            {idx + 1}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
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
      title: "Local Committee Vice President Outgoing Global Volunteer",
      organization: "AIESEC in Tunisia",
      date: "Feb 2024 - Feb 2025 · 1 yr 1 mo",
      short: "Led a team to boost collaboration and performance through strategic planning.",
      description:
        "As Vice President, Outgoing Global Volunteer – Local Committee at AIESEC, I led a team to boost collaboration and performance through strategic planning and communication, partnered with global stakeholders to facilitate internships and cross-cultural exchanges, and managed Global Volunteer projects to align with organizational goals. I organized conferences by defining themes and formats to enhance engagement, coordinated events with real-time adjustments for efficiency, oversaw speakers and sessions for timely delivery, and directed a dedicated team to ensure high-quality outcomes.",
      details: [
        "Led a team to boost collaboration and performance through strategic planning and communication",
        "Partnered with global stakeholders to facilitate internships and cross-cultural exchanges",
        "Managed Global Volunteer projects to align with organizational goals",
        "Organized conferences by defining themes and formats to enhance engagement",
        "Coordinated events with real-time adjustments for efficiency",
        "Oversaw speakers and sessions for timely delivery",
        "Directed a dedicated team to ensure high-quality outcomes",
      ],
      technologies: ["Leadership", "Strategic Planning", "Event Management", "Team Management", "Global Relations"],
      metrics: [
        "Led team for 1+ year",
        "Organized multiple conferences",
        "Managed cross-cultural exchanges",
      ],
      color: "#8C4555",
      icon: "leadership",
      certificates: [
        { name: "NourheneFerchichi_certification", image: "/certificates/nourhene-ferchichi-certification.jpg" }
      ]
    },
    {
      id: "2",
      title: "Team Lead",
      organization: "AIESEC in Tunisia",
      date: "Feb 2023 - Feb 2024 · 1 yr 1 mo",
      short: "Led team operations and international exchange programs.",
      description:
        "Served as Team Lead managing AIESEC Exchange Programs and web operations. Responsibilities included team management, AIESEC ExPa web management, international relations management, exchange participants management, and co-designing the exchange participant experience.",
      details: [
        "Team management and leadership",
        "AIESEC ExPa Web management",
        "International Relations Management",
        "Exchange Participants Management",
        "Responsible for Exchange Participant experience co-designing and tracking",
      ],
      technologies: ["Team Leadership", "Web Management", "International Relations", "Exchange Programs"],
      metrics: [
        "Led team for 1 year",
        "Managed exchange participants",
        "Coordinated international relations",
      ],
      color: "#4A90A4",
      icon: "team",
      certificates: [
        { name: "Certificate of Appreciation", image: "/certificates/team-lead-certificate.jpg" }
      ]
    },
    {
      id: "3",
      title: "Member",
      organization: "AIESEC in Tunisia",
      date: "Oct 2021 - Feb 2023 · 1 yr 5 mos",
      short: "Active member contributing to AIESEC initiatives and projects.",
      description:
        "Active AIESEC member for over 1 year and 5 months, contributing to various organizational initiatives and developing leadership skills through participation in events and projects.",
      details: [
        "Participated in AIESEC initiatives",
        "Developed leadership skills",
        "Contributed to organizational projects",
      ],
      technologies: ["Leadership", "Teamwork", "Event Participation"],
      metrics: [
        "1.5+ years active membership",
        "Contributed to multiple projects",
      ],
      color: "#B58169",
      icon: "member",
      certificates: [
        { name: "Certificate of Appreciation", image: "/certificates/member-certificate.jpg" }
      ]
    },
    {
      id: "4",
      title: "Conference Manager",
      organization: "AIESEC in Tunisia",
      date: "Aug 2024 - Oct 2024 · 3 mos",
      short: "Coordinated a 90+ participant local conference.",
      description:
        "Coordinated a 90+ participant local conference: sessions, themes, and logistics. Adapted real-time schedules to maximize engagement. Managed guest speakers and ensured smooth execution.",
      details: [
        "Coordinated a 90+ participant local conference: sessions, themes, and logistics",
        "Adapted real-time schedules to maximize engagement",
        "Managed guest speakers and ensured smooth execution",
      ],
      technologies: ["Event Management", "Logistics", "Public Speaking", "Coordination"],
      metrics: [
        "Managed 90+ participants",
        "100% on-time execution",
        "95% satisfaction rate",
      ],
      color: "#6B5B95",
      icon: "conference",
      photos: [
        "/photos/conference-manager-1.jpg",
        "/photos/conference-manager-2.jpg"
      ]
    },
    {
      id: "5",
      title: "Conference Organizer",
      organization: "AIESEC in Tunisia",
      date: "May 2023 - Aug 2023 · 4 mos",
      short: "Directed a 3-day conference with cross-functional team management.",
      description:
        "Directed a 3-day conference with cross-functional team management. Ensured quality delivery and timely execution across all event activities.",
      details: [
        "Directed a 3-day conference with cross-functional team management",
        "Ensured quality delivery and timely execution across all event activities",
      ],
      technologies: ["Project Management", "Agile", "Team Leadership", "Execution"],
      metrics: [
        "3-day conference execution",
        "Led cross-functional team",
        "Zero incidents",
      ],
      color: "#5B8C7A",
      icon: "organizer",
      certificates: [
        { name: "Certificate of Appreciation", image: "/certificates/conference-organizer-certificate.jpg" }
      ]
    },
    {
      id: "6",
      title: "Expansion Manager",
      organization: "AIESEC in Tunisia",
      date: "Jun 2023 - Dec 2023 · 7 mos",
      short: "Designed and executed market analysis and launch plans to grow AIESEC's footprint.",
      description:
        "Designed and executed market analysis, feasibility studies, and launch plans to grow AIESEC's footprint and youth leadership presence nationwide. Collaborated with the Member Committee to align expansion goals with national targets in membership growth, cross-cultural exchanges, and social impact initiatives.",
      details: [
        "Designed and executed market analysis, feasibility studies, and launch plans",
        "Grew AIESEC's footprint and youth leadership presence nationwide",
        "Collaborated with Member Committee to align expansion goals",
        "Focused on membership growth, cross-cultural exchanges, and social impact initiatives",
      ],
      technologies: ["Market Analysis", "Strategic Planning", "Expansion", "Social Impact"],
      metrics: [
        "7 months in role",
        "Nationwide expansion initiatives",
        "Aligned with national targets",
      ],
      color: "#8C6B45",
      icon: "expansion",
      certificates: [
        { name: "Certificate of Appreciation", image: "/certificates/expansion-manager-certificate.jpg" }
      ]
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
