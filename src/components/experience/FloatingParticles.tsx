import { motion } from "framer-motion";
import { useParticles } from "../../hooks/useParticles";

export const FloatingParticles = () => {
  const particles = useParticles({
    count: 20,
    colors: ["#8C4555", "#B58169", "#858376"],
    minSize: 2,
    maxSize: 6,
    minDuration: 15,
    maxDuration: 35,
    maxDelay: 10,
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.id % 2 === 0 ? 25 : -25, 0],
            opacity: [0, 0.6, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
