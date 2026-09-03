import { useState, useRef, useCallback, memo } from "react";
import { motion, useMotionValue, useSpring, useTransform} from "framer-motion";
import { 
  FaGraduationCap, 
  FaUniversity, 
  FaCalendar, 
  FaMapMarkerAlt, 
  FaAward, 
  FaCertificate,
  FaBookOpen,
  FaStar,
  FaMedal,
  FaTrophy,
  FaClock
} from "react-icons/fa";

interface EducationItem {
  id: string;
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  gpa: string;
  color: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  color: string;
}

const EducationStats = ({ education, certifications }: { education: EducationItem[]; certifications: Certification[] }) => {
  const yearsOfStudy = "5+";
  const totalAchievements = education.reduce((acc, edu) => acc + edu.achievements.length, 0);
  
  const stats = [
    { 
      icon: <FaGraduationCap size={20} />, 
      value: education.length.toString(), 
      label: "Degrees",
      color: "#8C4555"
    },
    { 
      icon: <FaCertificate size={20} />, 
      value: certifications.length.toString(), 
      label: "Certifications",
      color: "#4A90A4"
    },
    { 
      icon: <FaClock size={20} />, 
      value: yearsOfStudy, 
      label: "Years of Study",
      color: "#6B5B95"
    },
    { 
      icon: <FaTrophy size={20} />, 
      value: totalAchievements.toString(), 
      label: "Achievements",
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
                <span className="text-xs font-medium" style={{ color: "#65635a" }}>
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

const Education3DCard = memo(({
  edu,
  index
}: {
  edu: EducationItem;
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

  const IconComponent = edu.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.15, 
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
        className="group relative rounded-2xl overflow-hidden h-full"
        style={{ 
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          border: `1px solid ${edu.color}25`,
          boxShadow: `0 4px 20px ${edu.color}10, 0 1px 3px rgba(0,0,0,0.05)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div 
          className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
          style={{ 
            background: `linear-gradient(90deg, ${edu.color} 0%, #B58169 100%)` 
          }} 
        />

        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${edu.color}12 0%, transparent 70%)`
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

        <div className="relative z-10 p-6 md:p-8 pt-8">
          <div className="flex items-start gap-4 mb-6">
            <motion.div 
              className="w-16 h-16 rounded-xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${edu.color}15 0%, ${edu.color}08 100%)`,
                border: `1px solid ${edu.color}30`,
                boxShadow: `0 4px 15px ${edu.color}30`
              }}
              whileHover={{ rotate: [0, -8, 8, 0], scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <IconComponent className="w-8 h-8" style={{ color: edu.color }} />
            </motion.div>
            <div className="flex-1">
              <h3 
                className="text-xl md:text-2xl font-bold mb-1"
                style={{ color: "#2C2A35" }}
              >
                {edu.degree}
              </h3>
              <motion.p 
                style={{ color: edu.color }} 
                className="font-medium flex items-center gap-2"
                whileHover={{ x: 2 }}
              >
                <FaUniversity className="w-4 h-4" />
                {edu.school}
              </motion.p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm mb-4">
            <motion.span 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{ backgroundColor: `${edu.color}10`, color: "#65635a", border: `1px solid ${edu.color}20` }}
              whileHover={{ scale: 1.05, backgroundColor: `${edu.color}15` }}
            >
              <FaCalendar className="w-3 h-3" style={{ color: edu.color }} />
              {edu.period}
            </motion.span>
            <motion.span 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{ backgroundColor: `${edu.color}10`, color: "#65635a", border: `1px solid ${edu.color}20` }}
              whileHover={{ scale: 1.05, backgroundColor: `${edu.color}15` }}
            >
              <FaMapMarkerAlt className="w-3 h-3" style={{ color: edu.color }} />
              {edu.location}
            </motion.span>
            <motion.span 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{ backgroundColor: `${edu.color}12`, color: edu.color, border: `1px solid ${edu.color}25` }}
              whileHover={{ scale: 1.05 }}
            >
              <FaAward className="w-3 h-3" />
              {edu.gpa}
            </motion.span>
          </div>

          <p className="mb-4 leading-relaxed" style={{ color: "#65635a" }}>
            {edu.description}
          </p>

          <motion.div 
            className="rounded-xl p-4 mb-4"
            style={{ 
              backgroundColor: `${edu.color}06`,
              border: `1px solid ${edu.color}15`
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <FaMedal className="w-4 h-4" style={{ color: edu.color }} />
              <span 
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: edu.color }}
              >
                Key Achievements
              </span>
            </div>
            <div 
              className="space-y-2"
            >
              {edu.achievements.map((achievement, aIdx) => (
                <motion.div
                  key={aIdx}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "#65635a" }}
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: aIdx * 0.1 }}
                >
                  <motion.span 
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: edu.color }}
                    whileHover={{ scale: 1.5 }}
                  />
                  <span>{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.article>
    </motion.div>
  );
});

Education3DCard.displayName = "Education3DCard";

const Education = () => {
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);

  const education: EducationItem[] = [
    {
      id: "1",
      degree: "Software Information Systems Engineering Degree",
      school: "TEK-UP University",
      location: "Tunis, Tunisia",
      period: "2024 – 2026",
      description:
        "Engineering program specializing in software development, information systems, and full-stack technologies.",
      achievements: [
        "Specialized in AI/ML and full-stack development",
        "Completed end-of-study project with industry partner",
        "Active member of university tech community",
      ],
      gpa: "In Progress",
      color: "#8C4555",
      icon: FaUniversity,
    },
    {
      id: "2",
      degree: "Professional Master's in Data Science",
      school: "Faculté des Sciences de Bizerte",
      location: "Bizerte, Tunisia",
      period: "2023 – 2024",
      description:
        "Advanced studies in data science, machine learning, and statistical analysis.",
      achievements: [
        "Specialized in ML and data analysis",
        "Research projects in AI applications",
      ],
      gpa: "In Progress",
      color: "#4A90A4",
      icon: FaUniversity,
    },
    {
      id: "3",
      degree: "Bachelor's in Software Engineering and Information Systems",
      school: "Faculté des Sciences de Bizerte",
      location: "Bizerte, Tunisia",
      period: "2020 – 2023",
      description:
        "Undergraduate studies in software engineering fundamentals, programming, and system design.",
      achievements: [
        "Strong foundation in computer science",
        "Multiple academic projects in software development",
      ],
      gpa: "Honors",
      color: "#B58169",
      icon: FaGraduationCap,
    },
    {
      id: "4",
      degree: "High School Diploma in Experimental Sciences",
      school: "Lycée Mixte de Menzel Bourguiba",
      location: "Menzel Bourguiba, Tunisia",
      period: "2019 – 2020",
      description:
        "Experimental sciences baccalaureate providing strong foundation in mathematics, physics, and chemistry.",
      achievements: [
        "Strong foundation in mathematics and sciences",
        "Developed analytical thinking skills",
      ],
      gpa: "Honors",
      color: "#6B5B95",
      icon: FaGraduationCap,
    },
  ];

  const certifications: Certification[] = [
    {
      id: "1",
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      color: "#8C4555",
    },
    {
      id: "2",
      name: "Oracle Certified Associate",
      issuer: "Oracle",
      date: "2024",
      color: "#4A90A4",
    },
  ];

  return (
    <section 
      id="education" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: "#f5f4f2" }}
    >
      <FloatingParticles />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #8C4555 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #B58169 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full opacity-10"
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
            <FaBookOpen className="w-4 h-4" />
            <span>Academic Background</span>
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
            Education &{" "}
            <span 
              className="relative inline-block"
              style={{ color: "#8C4555" }}
            >
              Certifications
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
            Academic background and continuous learning journey in software engineering and AI.
          </motion.p>
        </motion.div>

        <EducationStats education={education} certifications={certifications} />

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {education.map((edu, idx) => (
            <Education3DCard
              key={edu.id}
              edu={edu}
              index={idx}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <motion.h3 
            className="text-2xl font-bold mb-8"
            style={{ color: "#2C2A35" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Professional Certifications
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1, type: "spring", stiffness: 200 }}
                onMouseEnter={() => setHoveredCert(cert.id)}
                onMouseLeave={() => setHoveredCert(null)}
                className="relative group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: hoveredCert === cert.id ? cert.color : `${cert.color}10`,
                    border: `1px solid ${hoveredCert === cert.id ? cert.color : `${cert.color}30`}`,
                    boxShadow: hoveredCert === cert.id ? `0 8px 25px ${cert.color}40` : `0 4px 15px ${cert.color}20`
                  }}
                >
                  <motion.div
                    animate={{ rotate: hoveredCert === cert.id ? [0, -10, 10, 0] : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaCertificate 
                      className="w-5 h-5 transition-colors duration-300" 
                      style={{ color: hoveredCert === cert.id ? "#ffffff" : cert.color }} 
                    />
                  </motion.div>
                  <span 
                    className="font-semibold text-sm transition-colors duration-300"
                    style={{ color: hoveredCert === cert.id ? "#ffffff" : "#2C2A35" }}
                  >
                    {cert.name}
                  </span>
                  <span 
                    className="text-xs transition-colors duration-300"
                    style={{ color: hoveredCert === cert.id ? "rgba(255,255,255,0.8)" : "#65635a" }}
                  >
                    • {cert.issuer} • {cert.date}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
