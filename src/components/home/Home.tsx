import { motion } from "framer-motion";
import { useRef } from "react";
import profilePic from "../../assets/images/profilePic.png";
import cv from "../../assets/pdf/NourheneFerchichi_CV.pdf";
import { HiDownload } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";
import { 
  FaLinkedin, 
  FaReact,  
  FaJs, 
  FaPython, 
  FaAngular, 
  FaHandPeace,
  FaCode,
  FaArrowRight
} from "react-icons/fa";
import { SiTypescript, SiSpring, SiDjango, SiOpenai, SiDocker } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import ParticleBackground from "../shared/ParticleBackground";
import { use3DTilt } from "../../hooks/use3DTilt";
import { useTyping } from "../../hooks/useTyping";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import "./Home.css";

const floatingIcons = [
  { Icon: VscCode, delay: 0, angle: 0, color: "#007ACC" },
  { Icon: FaReact, delay: 0.1, angle: 36, color: "#61DAFB" },
  { Icon: FaAngular, delay: 0.2, angle: 72, color: "#DD0031" },
  { Icon: SiSpring, delay: 0.3, angle: 108, color: "#6DB33F" },
  { Icon: FaPython, delay: 0.4, angle: 144, color: "#3776AB" },
  { Icon: SiDjango, delay: 0.5, angle: 180, color: "#092E20" },
  { Icon: SiTypescript, delay: 0.6, angle: 216, color: "#3178C6" },
  { Icon: FaJs, delay: 0.7, angle: 252, color: "#F7DF1E" },
  { Icon: SiOpenai, delay: 0.8, angle: 288, color: "#10A37F" },
  { Icon: SiDocker, delay: 0.9, angle: 324, color: "#2496ED" },
];

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/nourhene-ferchichi/", label: "LinkedIn", color: "#0077b5" },
  { icon: IoLogoGithub, href: "https://github.com/Nourhene123", label: "GitHub", color: "#333" },
  { icon: MdEmail, href: "mailto:nourhene.ferchichi@example.com", label: "Email", color: "#EA4335" },
];

const Home = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { ref: tiltRef, rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt({
    stiffness: 150,
    damping: 25,
    rotateRange: 5
  });

  const { displayed: roleText, isTyping: isTypingRole } = useTyping("Full-Stack & AI Engineer", { speed: 80, delay: 800 });


  return (
    <div 
      ref={containerRef}
      id="home" 
      className="home-container"
    >
      <ParticleBackground />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ 
            background: "radial-gradient(circle, rgba(140, 69, 85, 0.15) 0%, transparent 70%)",
            left: "10%",
            top: "20%",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ 
            background: "radial-gradient(circle, rgba(181, 129, 105, 0.12) 0%, transparent 70%)",
            right: "5%",
            bottom: "10%",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="home-content">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="home-left"
        >

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ 
                backgroundColor: "rgba(140, 69, 85, 0.1)", 
                color: "#8C4555" 
              }}
            >
              <FaHandPeace className="w-4 h-4" />
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="home-title"
          >
            Hi, I'm{" "}
            <motion.span 
              className="home-title-highlight"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(140, 69, 85, 0)",
                  "0 0 40px rgba(140, 69, 85, 0.3)",
                  "0 0 20px rgba(140, 69, 85, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Nourhene
            </motion.span>
            <br />
            <span style={{ color: "#65635a" }}>Ferchichi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="home-role"
          >
            <FaCode className="inline w-5 h-5 mr-2" style={{ color: "#8C4555" }} />
            <span className="home-role-highlight">{roleText}</span>
            {isTypingRole && (
              <motion.span
                className="inline-block w-[3px] h-[1.2em] bg-[#8C4555] ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="home-bio"
          >
            5th-year Software Engineering student at{" "}
            <span style={{ color: "#8C4555", fontWeight: 600 }}>TEK-UP</span>.
            Building intelligent full-stack solutions with{" "}
            <span style={{ color: "#B58169", fontWeight: 600 }}>AI</span> &{" "}
            <span style={{ color: "#B58169", fontWeight: 600 }}>Cloud</span> technologies.
          </motion.p>

       

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="home-buttons"
          >
            <motion.a 
              href={cv} 
              download 
              className="home-btn-primary"
              whileHover={{ scale: 1.03, y: -2, boxShadow: "0 10px 30px rgba(140, 69, 85, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <HiDownload className="w-5 h-5" />
              Download Resume
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight className="w-4 h-4 ml-1" />
              </motion.span>
            </motion.a>
            <motion.a 
              href="#contact" 
              className="home-btn-secondary"
              whileHover={{ scale: 1.03, y: -2, backgroundColor: "rgba(140, 69, 85, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <RiSendPlaneFill className="w-5 h-5" />
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="home-social"
          >
            {socialLinks.map(({ icon: Icon, href, label, color }, idx) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="home-social-link"
                aria-label={label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + idx * 0.1, duration: 0.4 }}
                whileHover={{ 
                  y: -4, 
                  scale: 1.1, 
                  backgroundColor: `${color}20`,
                  borderColor: color,
                  transition: { duration: 0.2 } 
                }}
                whileTap={{ scale: 0.95 }}
                style={{ border: "2px solid transparent" }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="home-right"
        >
          <motion.div 
            className="home-image-wrapper"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            ref={tiltRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {floatingIcons.map(({ Icon, delay, angle, color }, index) => {
              const distance = 160;
              const angleRad = (angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * distance;
              const y = Math.sin(angleRad) * distance;
              return (
                <motion.div
                  key={index}
                  className="home-floating-icon"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotate: 0,
                    y: prefersReducedMotion ? 0 : [0, -6, 0],
                  }}
                  transition={{
                    opacity: { delay: 0.8 + delay, duration: 0.5 },
                    scale: { delay: 0.8 + delay, duration: 0.5, type: "spring", stiffness: 200 },
                    rotate: { delay: 0.8 + delay, duration: 0.6, ease: "easeOut" },
                    y: prefersReducedMotion ? {} : { duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay: delay },
                  }}
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: 15,
                    transition: { duration: 0.3 } 
                  }}
                  style={{ 
                    left: `calc(50% + ${x}px)`, 
                    top: `calc(50% + ${y}px)`,
                    color: color,
                    boxShadow: `0 0 20px ${color}40`,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
              );
            })}

            <motion.div
              className="home-image-container"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
             
              <motion.div 
                className="home-image-ring"
                style={{ width: "120%", height: "120%" }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="home-image-ring"
                style={{ width: "140%", height: "140%" }}
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
           
              <div className="home-image-inner">
                <img
                  src={profilePic}
                  alt="Nourhene Ferchichi"
                  className="home-profile-img"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8C4555]/20 to-transparent rounded-full" />
              </div>

              <div 
                className="absolute -inset-4 rounded-full blur-2xl opacity-40 -z-10"
                style={{ background: "linear-gradient(135deg, #8C4555, #B58169)" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="home-scroll"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="home-scroll-mouse"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(140, 69, 85, 0.1)" }}
        >
          <div className="home-scroll-wheel" />
          <span className="text-xs mt-2" style={{ color: "#65635a" }}>Scroll</span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Home;