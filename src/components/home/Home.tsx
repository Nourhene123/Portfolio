import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import profilePic from "../../assets/images/profilePic.png";
import cv from "../../assets/pdf/NourheneFerchichi_CV.pdf";
import { HiDownload } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaBriefcase, FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaAngular } from "react-icons/fa";
import { SiTypescript, SiSpring, SiDjango, SiPostgresql } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import ParticleBackground from "../shared/ParticleBackground";
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
  { Icon: FaHtml5, delay: 0.8, angle: 288, color: "#E34F26" },
  { Icon: FaCss3Alt, delay: 0.9, angle: 324, color: "#1572B6" },
];

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/nourhene-ferchichi/", label: "LinkedIn" },
  { icon: IoLogoGithub, href: "https://github.com/Nourhene123", label: "GitHub" },
];

const Home = () => {
  const y = useMotionValue(0);
  const ySmooth = useTransform(y, (value) => value);

  useEffect(() => {
    const controls = animate(y, [-8, 8, -8], {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [y]);

  return (
    <div id="home" className="home-container">
      <ParticleBackground />

      <div className="home-content">
       
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="home-left"
        >
        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="home-greeting">Hi, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="home-title"
          >
            Nourhene
            <br />
            <span className="home-title-highlight">Ferchichi</span>
          </motion.h1>

      
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="home-role"
          >
            Full-Stack & <span className="home-role-highlight">AI Engineer</span>
          </motion.p>

          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="home-bio"
          >
            5th-year Software Engineering student at TEK-UP.
            Building intelligent full-stack solutions with modern technologies.
          </motion.p>

          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="home-badge"
          >
            <div className="home-badge-icon">
              <FaBriefcase className="w-5 h-5 text-white" />
            </div>
            <div className="home-badge-text">
              <p className="home-badge-title">Seeking Full-Stack AI Internship</p>
              <p className="home-badge-subtitle">January 2026 • 6 months</p>
            </div>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="home-buttons"
          >
            <a href={cv} download className="home-btn-primary">
              <HiDownload className="w-5 h-5" />
              Resume
            </a>
            <a href="#contact" className="home-btn-secondary">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="home-social"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="home-social-link"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="home-right"
        >
          <div className="home-image-wrapper">
            {floatingIcons.map(({ Icon, delay, angle, color }, index) => {
              const distance = 160;
              const angleRad = (angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * distance;
              const y = Math.sin(angleRad) * distance;
              return (
                <motion.div
                  key={index}
                  className="home-floating-icon"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                  }}
                  transition={{
                    opacity: { delay: 0.8 + delay, duration: 0.4 },
                    scale: { delay: 0.8 + delay, duration: 0.4 },
                  }}
                  style={{ 
                    left: `calc(50% + ${x}px)`, 
                    top: `calc(50% + ${y}px)`,
                    color: color,
                    animation: `icon-float 3s ease-in-out ${delay}s infinite`,
                  }}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
              );
            })}

            <motion.div
              style={{ y: ySmooth }}
              className="home-image-container"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
            
              <div className="home-image-ring" />
           
              <div className="home-image-inner">
                <img
                  src={profilePic}
                  alt="Nourhene Ferchichi"
                  className="home-profile-img"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="home-scroll"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="home-scroll-mouse"
        >
          <div className="home-scroll-wheel" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;