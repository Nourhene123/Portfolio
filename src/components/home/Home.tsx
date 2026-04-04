import "./Home.css";
import profilePic from "../../assets/images/profilePic.png";
import cv from "../../assets/pdf/NourheneFerchichi_CV.pdf";
import CustomButton from "../../tools/buttons/CustomButton";
import { HiDownload } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaRobot } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
   <div
  id="home"
  className="home-container relative overflow-hidden min-h-screen flex items-center justify-center px-6 py-16 md:py-20"
>

  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="home-waves"></div>
  </div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
    
 
    <div
      className="space-y-5 md:space-y-7 text-center md:text-left"
      data-aos="fade-right"
      data-aos-delay="200"
    >
   
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
        <span className="block">Nourhene</span>
        <span className="block text-bordeaux-400 drop-shadow-lg">Ferchichi</span>
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl font-mono text-gray-200 tracking-widest uppercase">
        Full-stack & AI Engineer
      </p>

      <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0 font-light">
        5th-year Software Engineering student at <strong className="text-white">TEK-UP</strong>, I’m seeking a{" "}
        <span className="text-bordeaux-300 font-semibold">full-stack AI internship</span> starting{" "}
        <span className="text-bordeaux-400 font-bold">January 2026</span>.
        <br className="hidden md:block" />
        Specialized in <strong className="text-white">Angular • Spring Boot • Django • RAG • LLM</strong>.
      </p>

    
      <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-3">
        <a href={cv} download>
          <CustomButton
            text="Télécharger CV"
            color="bordeaux"
            icon={<HiDownload />}
           
          />
        </a>
        <a href="https://www.linkedin.com/in/nourhene-ferchichi/" target="_blank" rel="noopener noreferrer">
          <CustomButton text="LinkedIn" color="gray" icon={<FaLinkedin />}  />
        </a>
        <a href="https://github.com/Nourhene123" target="_blank" rel="noopener noreferrer">
          <CustomButton text="GitHub" color="gray" icon={<IoLogoGithub />}  />
        </a>
      </div>
    </div>

   
    <div
      className="relative flex justify-center"
      data-aos="fade-left"
      data-aos-delay="400"
    >
      
      <div className="absolute inset-0 -z-10 animate-orbit">
        <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full border border-bordeaux-500/20 blur-3xl"></div>
      </div>


      <div className="relative group p-3 profile-image-container">
      
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-bordeaux-600/30 to-transparent rounded-full blur-3xl scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

   
        <div className="relative rounded-full overflow-hidden bg-black/40 backdrop-blur-3xl p-3 border-4 border-white/20 shadow-2xl neon-border group-hover:scale-105 transition-all duration-500">
          <img
            src={profilePic}
            alt="Nourhene Ferchichi"
            className="w-full h-full object-cover rounded-full transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            loading="eager"
          />

          <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-bordeaux-600 to-bordeaux-700 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 animate-bounce">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
            Jan 2026
          </div>

          <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
            <FaRobot className="w-5 h-5 text-bordeaux-300" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Home;