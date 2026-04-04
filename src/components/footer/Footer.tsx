import "./Footer.css";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <button
            onClick={() => scrollToSection("home")}
            className="nav-link"
            aria-label="Home"
          >
            <BsHouseDoor className="nav-icon" />
            <span>Home</span>
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="nav-link"
            aria-label="Experience"
          >
            <AiOutlineFundProjectionScreen className="nav-icon" />
            <span>Experience</span>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link"
            aria-label="Contact"
          >
            <BiMessageDetail className="nav-icon" />
            <span>Contact</span>
          </button>
        </nav>
        <div className="footer-credits">
          <p>© 2025 Nourhene Ferchichi</p>
          <p className="built-with">
            Built with <span className="tech">React 19</span> •{" "}
            <span className="tech">Tailwind CSS</span> •{" "}
            <span className="tech">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;