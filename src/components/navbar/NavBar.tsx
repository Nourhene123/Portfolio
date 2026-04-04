import { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Handle menu item click (close menu when item is clicked)
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar fixed top-0 left-0 w-full h-16 flex items-center justify-between px-8 z-50 ${scrolled ? "scrolled" : ""}`}>
      <div className="text-white font-bold text-xl">Portfolio</div>
      <button 
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <li className="text-gray-400 text-md font-semibold hover:text-gray-300 transition-colors duration-300 cursor-pointer">
          <a href="#about" onClick={handleMenuItemClick}>About</a>
        </li>
        <li className="text-gray-400 text-md font-semibold hover:text-gray-300 transition-colors duration-300 cursor-pointer">
          <a href="#skills" onClick={handleMenuItemClick}>Skills</a>
        </li>
     
        <li className="text-gray-400 text-md font-semibold hover:text-gray-300 transition-colors duration-300 cursor-pointer">
          <a href="#experience" onClick={handleMenuItemClick}>Experience</a>
        </li>
        <li className="text-gray-400 text-md font-semibold hover:text-gray-300 transition-colors duration-300 cursor-pointer">
          <a href="#projects" onClick={handleMenuItemClick}>Projects</a>
        </li>
           <li className="text-gray-400 text-md font-semibold hover:text-gray-300 transition-colors duration-300 cursor-pointer">
          <a href="#VolunteerExperience" onClick={handleMenuItemClick}>VolunteerExperience </a>
        </li>
       
        <li className="text-gray-400 text-md font-semibold hover:text-gray-300 transition-colors duration-300 cursor-pointer">
          <a href="#contact" onClick={handleMenuItemClick}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
