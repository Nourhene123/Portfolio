import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaBars, FaTimes } from "react-icons/fa";

interface NavItem {
  label: string;
  href: string;
}

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      const sections = ["home", "about", "skills", "experience", "projects", "volunteering", "education", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {   
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Volunteering", href: "#volunteering" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const getNavItemStyle = (isActive: boolean): React.CSSProperties => ({
    color: isActive ? '#8C4555' : '#65635a',
    backgroundColor: isActive ? 'rgba(140, 69, 85, 0.1)' : 'transparent',
    border: isActive ? '1px solid rgba(140, 69, 85, 0.2)' : '1px solid transparent',
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-3 shadow-lg" : "py-5"
        }`}
        style={{
          backgroundColor: scrolled ? 'rgba(245, 244, 242, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(140, 69, 85, 0.15)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
       
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-3 group"
          >
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 group-hover:scale-105 shadow-md"
              style={{ 
                background: 'linear-gradient(135deg, #8C4555 0%, #703745 100%)',
                color: '#ffffff'
              }}
            >
              N
            </div>
            <span 
              className="font-semibold text-lg hidden sm:block"
              style={{ color: '#2C2A35' }}
            >
              Portfolio
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  style={getNavItemStyle(isActive)}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium transition-all duration-300 group shadow-md hover:shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #8C4555 0%, #B58169 100%)'
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span 
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: '#c99a82' }}
                ></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              <span>Open to Work</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-all duration-300"
            style={{ color: '#8C4555' }}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[68px] z-40 md:hidden"
          >
            <div 
              className="mx-4 rounded-2xl p-5 shadow-2xl"
              style={{ 
                backgroundColor: 'rgba(245, 244, 242, 0.98)',
                border: '1px solid rgba(140, 69, 85, 0.15)',
                backdropFilter: 'blur(12px)'
              }}
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className="px-5 py-3.5 text-sm font-medium rounded-xl transition-all duration-300"
                      style={getNavItemStyle(isActive)}
                    >
                      {item.label}
                    </a>
                  );
                })}

                <div className="pt-4 mt-3 border-t border-[rgba(140,69,85,0.15)]">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#contact");
                    }}
                    className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-white text-sm font-medium"
                    style={{ background: 'linear-gradient(135deg, #8C4555 0%, #B58169 100%)' }}
                  >
                    <FaBriefcase className="w-4 h-4" />
                    Open to Work
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;