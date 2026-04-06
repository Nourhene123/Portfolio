import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #f5f4f2 0%, #ebe9e6 50%, #e2e0dc 100%)",
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <motion.div
          className="w-24 h-24 mx-auto mb-8 rounded-2xl flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #8C4555, #B58169)",
            boxShadow: "0 20px 60px -10px rgba(140, 69, 85, 0.4)",
          }}
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-4xl font-bold text-white">N</span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-2"
          style={{ color: "#2C2A35" }}
        >
          Welcome to my Portfolio
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg mb-8"
          style={{ color: "#858376" }}
        >
          Nourhene Ferchichi
        </motion.p>

        <div className="w-64 h-1 mx-auto rounded-full overflow-hidden" style={{ backgroundColor: "rgba(140, 69, 85, 0.1)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #8C4555, #B58169)",
            }}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-sm"
          style={{ color: "#8C4555" }}
        >
          {progress < 100 ? "Loading..." : "Ready!"}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
