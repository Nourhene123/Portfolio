import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { VscCode } from "react-icons/vsc";
import { BiLogoReact, BiLogoPython, BiLogoAws } from "react-icons/bi";
import { FaCode, FaDatabase, FaCloud } from "react-icons/fa";

const Skeleton = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    return () => {
      clearTimeout(fadeTimer);
      clearInterval(progressInterval);
    };
  }, []);

  const floatingTech = [
    { Icon: VscCode, delay: 0, x: "10%", y: "20%", color: "#8C4555" },
    { Icon: BiLogoReact, delay: 0.2, x: "85%", y: "15%", color: "#B58169" },
    { Icon: BiLogoPython, delay: 0.4, x: "75%", y: "75%", color: "#8C4555" },
    { Icon: BiLogoAws, delay: 0.6, x: "15%", y: "70%", color: "#B58169" },
    { Icon: FaCode, delay: 0.8, x: "50%", y: "10%", color: "#8C4555" },
    { Icon: FaDatabase, delay: 1, x: "90%", y: "50%", color: "#B58169" },
    { Icon: FaCloud, delay: 1.2, x: "5%", y: "45%", color: "#8C4555" },
  ];

  const letterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const welcomeText = "Welcome!";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col justify-center items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f5f4f2 0%, #ebe9e6 50%, #e2e0dc 100%)",
      }}
    >
      {/* Floating Tech Icons */}
      {floatingTech.map(({ Icon, delay, x, y, color }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.15,
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { delay: delay, duration: 0.5 },
            scale: { delay: delay, duration: 0.5 },
            y: {
              delay: delay + 0.5,
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute text-4xl"
          style={{ left: x, top: y, color: color }}
        >
          <Icon />
        </motion.div>
      ))}

      {/* Decorative Circles */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, #8C4555 0%, transparent 70%)",
          top: "-20%",
          right: "-10%",
        }}
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.08 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, #B58169 0%, transparent 70%)",
          bottom: "-15%",
          left: "-5%",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Animated Welcome Text */}
        <div className="perspective-1000 mb-8">
          <motion.p className="text-6xl sm:text-7xl font-bold tracking-wide flex justify-center">
            {welcomeText.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{
                  color: i % 2 === 0 ? "#8C4555" : "#B58169",
                  textShadow: "0 4px 20px rgba(140, 69, 85, 0.15)",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="w-64 sm:w-80 mx-auto mb-6"
        >
          <div
            className="h-1.5 rounded-full overflow-hidden"
            style={{ backgroundColor: "rgba(140, 69, 85, 0.15)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #8C4555, #B58169)",
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.p
            className="text-sm mt-3 font-medium"
            style={{ color: "#8C4555" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Loading portfolio... {progress}%
          </motion.p>
        </motion.div>

        {/* Name Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
          style={{
            backgroundColor: "rgba(140, 69, 85, 0.08)",
            border: "1px solid rgba(140, 69, 85, 0.2)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "#8C4555" }}
          />
          <span className="text-sm font-medium" style={{ color: "#8C4555" }}>
            Nourhene Ferchichi
          </span>
        </motion.div>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #8C4555, #B58169, transparent)",
        }}
      />
    </motion.div>
  );
};

export default Skeleton;
