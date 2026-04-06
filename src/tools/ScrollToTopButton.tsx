import { useEffect, useState } from "react";
import "./ScrollToTopButton.css";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const toggleVisibility = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 300);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`scroll-top-button ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <IoIosArrowUp className="text-xl" />
    </button>
  );
};

export default ScrollToTopButton;
