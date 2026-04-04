import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaCode, FaRocket } from "react-icons/fa";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
  delay: number;
}

const StatItem = ({ icon, value, label, color, delay }: StatItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, type: "spring", stiffness: 100 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="relative group"
  >
    <div 
      className="relative p-6 rounded-2xl overflow-hidden transition-all duration-300"
      style={{ 
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(140, 69, 85, 0.1)"
      }}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ 
          background: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)`
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div 
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-3"
          style={{ 
            background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
            border: `1px solid ${color}30`
          }}
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <span style={{ color }}>{icon}</span>
        </motion.div>
        
        <motion.span 
          className="text-3xl font-bold mb-1"
          style={{ color: "#2C2A35" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.5 }}
        >
          {value}
        </motion.span>
        
        <span className="text-sm font-medium" style={{ color: "#858376" }}>
          {label}
        </span>
      </div>
    </div>
  </motion.div>
);

export const CareerStats = () => {
  const stats = [
    {
      icon: <FaBriefcase size={24} />,
      value: "4",
      label: "Companies",
      color: "#8C4555",
      delay: 0.1
    },
    {
      icon: <FaCalendarAlt size={24} />,
      value: "15+",
      label: "Months Experience",
      color: "#B58169",
      delay: 0.2
    },
    {
      icon: <FaCode size={24} />,
      value: "25+",
      label: "Technologies",
      color: "#8C4555",
      delay: 0.3
    },
    {
      icon: <FaRocket size={24} />,
      value: "10+",
      label: "Projects Delivered",
      color: "#B58169",
      delay: 0.4
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
};

export default CareerStats;
