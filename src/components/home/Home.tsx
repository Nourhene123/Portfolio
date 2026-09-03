import { motion } from "framer-motion";
import { useRef } from "react";
import profilePic from "../../assets/images/profilePic.png";
import cv from "../../assets/pdf/NourheneFerchichi_CV.pdf";
import { HiDownload } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";
import {
  FaLinkedin,
  FaHandPeace,
  FaCode,
  FaArrowRight
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import ParticleBackground from "../shared/ParticleBackground";
import { useTyping } from "../../hooks/useTyping";
import "./Home.css";

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/nourhene-ferchichi/", label: "LinkedIn", color: "#8C4555" },
  { icon: IoLogoGithub, href: "https://github.com/Nourhene123", label: "GitHub", color: "#8C4555" },
  { icon: MdEmail, href: "mailto:nourhene.ferchichi2001@gmail.com", label: "Email", color: "#8C4555" },
];

/* Dot grid SVG pattern */
const DotGrid = ({ className, rows = 5, cols = 5 }: { className?: string; rows?: number; cols?: number }) => (
  <svg className={className} width={cols * 16} height={rows * 16} viewBox={`0 0 ${cols * 16} ${rows * 16}`}>
    {Array.from({ length: rows * cols }).map((_, i) => (
      <circle
        key={i}
        cx={(i % cols) * 16 + 4}
        cy={Math.floor(i / cols) * 16 + 4}
        r={2.5}
        fill="rgba(140, 69, 85, 0.25)"
      />
    ))}
  </svg>
);

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { displayed: roleText, isTyping: isTypingRole } = useTyping("Junior Full-Stack & AI Developer", { speed: 80, delay: 800 });

  return (
    <div
      ref={containerRef}
      id="home"
      className="home-container"
    >
      <ParticleBackground />

      <div className="home-content">
        {/* LEFT — Text content */}
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
            <span className="home-welcome-badge">
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
            <span className="home-title-highlight">Nourhene Ferchichi</span>
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
            Fresh graduate from{" "}
            <span style={{ color: "#8C4555", fontWeight: 600 }}>TEK-UP University</span>{" "}
            developing websites and{" "}
            <span style={{ color: "#B58169", fontWeight: 600 }}>multi-agent AI systems</span>, working from{" "}
            <span style={{ color: "#B58169", fontWeight: 600 }}>development to production</span> on{" "}
            <span style={{ color: "#8C4555", fontWeight: 600 }}>AWS</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
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

        {/* RIGHT — Photo with decorative shapes */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="home-right"
        >
          <div className="home-photo-scene">
            {/* Background blob */}
            <motion.div
              className="home-blob"
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Dot grids */}
            <motion.div
              className="home-dots home-dots-top"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <DotGrid rows={4} cols={5} />
            </motion.div>
            <motion.div
              className="home-dots home-dots-bottom"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <DotGrid rows={3} cols={4} />
            </motion.div>

            {/* Decorative circles */}
            <motion.div
              className="home-deco-circle home-deco-circle-1"
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="home-deco-circle home-deco-circle-2"
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="home-deco-circle home-deco-circle-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Decorative lines */}
            <motion.div
              className="home-deco-line home-deco-line-1"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            />
            <motion.div
              className="home-deco-line home-deco-line-2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
            />

            {/* Cross / plus shape */}
            <motion.div
              className="home-deco-cross"
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span />
              <span />
            </motion.div>

            {/* Profile photo */}
            <motion.div
              className="home-photo-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.7, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={profilePic}
                alt="Nourhene Ferchichi"
                className="home-profile-img"
                loading="eager"
              />
            </motion.div>

            {/* Floating stat badge */}
            <motion.div
              className="home-float-badge"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6, type: "spring" }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className="home-float-badge-dot" />
              <span>Available for work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
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