import React, { useEffect, useState, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/Navbar";
import Skeleton from "./tools/Skeleton";
import ScrollToTopButton from "./tools/ScrollToTopButton";

import Home from "./components/home/Home";

// Lazy loading des composants
const About = React.lazy(() => import("./components/about/About"));
const Skills = React.lazy(() => import("./components/skills/Skills"));
const Education = React.lazy(() => import("./components/education/Education"));
const VolunteerExperience = React.lazy(() => import("./components/VolunteerExperience/VolunteerExperience"));
const Experience = React.lazy(() => import("./components/experience/Experience"));
const Projects = React.lazy(() => import("./components/projects/Projects"));
const Contact = React.lazy(() => import("./components/contact/Contact"));

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setFadeIn(true), 100);
    }, 2000); // 2 secondes de skeleton
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div
      className={`transition-opacity duration-1000 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      } bg-gradient-to-b from-[#f5f4f2] via-[#ebe9e6] to-[#e2e0dc] min-h-screen text-[#2C2A35]`}
    >
      <NavBar />
      <Home />

      {/* Tous les composants lazy sont dans Suspense */}
      <Suspense fallback={<div className="h-96" />}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <VolunteerExperience /> 
        <Education />
        <Contact />
      </Suspense>

      <Footer />
      <Analytics />
      <ScrollToTopButton />
    </div>
  );
}

export default App;