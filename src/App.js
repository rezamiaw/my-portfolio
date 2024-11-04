import React, { useRef, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  const sectionsRef = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
    setCurrentSection(index);
  };

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0 && currentSection < sectionsRef.current.length - 1) {
        // Scroll down
        setCurrentSection((prev) => prev + 1);
      } else if (event.deltaY < 0 && currentSection > 0) {
        // Scroll up
        setCurrentSection((prev) => prev - 1);
      }
    };

    // Add event listener for wheel
    window.addEventListener("wheel", handleWheel);

    // Scroll to current section whenever currentSection state changes
    scrollToSection(currentSection);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection]);

  return (
    <div>
      <Navbar onNavClick={scrollToSection} currentSection={currentSection} />
      <div ref={(el) => (sectionsRef.current[0] = el)}>
        <Home />
      </div>
      <div ref={(el) => (sectionsRef.current[1] = el)}>
        <About />
      </div>
      <div ref={(el) => (sectionsRef.current[2] = el)}>
        <Projects />
      </div>
    </div>
  );
};

export default App;
