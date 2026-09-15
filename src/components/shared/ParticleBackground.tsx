import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";



type Orb = {
  color: string;
  size: string;
  style: React.CSSProperties;
  drift: { x: number[]; y: number[] };
  duration: number;
};

const ORBS: Orb[] = [
  {
    color: "rgba(140, 69, 85, 0.08)",
    size: "clamp(320px, 44vw, 620px)",
    style: { top: "-12%", left: "-10%" },
    drift: { x: [0, 60, -30, 0], y: [0, -40, 30, 0] },
    duration: 34,
  },
  {
    color: "rgba(181, 129, 105, 0.07)",
    size: "clamp(300px, 40vw, 560px)",
    style: { top: "30%", right: "-14%" },
    drift: { x: [0, -50, 24, 0], y: [0, 36, -20, 0] },
    duration: 40,
  },
  {
    color: "rgba(168, 90, 107, 0.055)",
    size: "clamp(260px, 36vw, 480px)",
    style: { bottom: "-14%", left: "18%" },
    drift: { x: [0, 40, -40, 0], y: [0, -28, 16, 0] },
    duration: 46,
  },
];

const DOTS = [
  { left: "8%", top: "18%", size: 4, delay: 0 },
  { left: "82%", top: "12%", size: 3, delay: 2.5 },
  { left: "24%", top: "68%", size: 5, delay: 1.2 },
  { left: "68%", top: "78%", size: 3, delay: 3.4 },
  { left: "48%", top: "34%", size: 3, delay: 4.1 },
  { left: "92%", top: "54%", size: 4, delay: 1.8 },
  { left: "14%", top: "44%", size: 3, delay: 5 },
];

const ParticleBackground = () => {
  const reduce = useReducedMotion();

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -1, backgroundColor: "#f5f4f2" }}
      aria-hidden="true"
    >
   
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle at 35% 35%, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(72px)",
            ...orb.style,
          }}
          animate={
            reduce
              ? undefined
              : { x: orb.drift.x, y: orb.drift.y, scale: [1, 1.06, 0.97, 1] }
          }
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Sparse floating dots */}
      {DOTS.map((dot, i) => (
        <motion.span
          key={`d${i}`}
          className="absolute rounded-full"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            backgroundColor: "rgba(140, 69, 85, 0.16)",
          }}
          animate={
            reduce
              ? { opacity: 0.35 }
              : { y: [0, -22, 0], opacity: [0.12, 0.4, 0.12] }
          }
          transition={{
            duration: 9 + i * 1.5,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
