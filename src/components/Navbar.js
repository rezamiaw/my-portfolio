import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects"]; // Samain dengan tombol yang ada
      let currentSection = activeSection;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            currentSection = sectionId;
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <button
            onClick={() => scrollToSection("home")}
            style={{
              ...styles.link,
              color: activeSection === "home" ? "#55BBE5" : "#8C8D8D",
            }}
          >
            Home
          </button>
        </li>
        <li style={styles.navItem}>
          <button
            onClick={() => scrollToSection("about")}
            style={{
              ...styles.link,
              color: activeSection === "about" ? "#55BBE5" : "#8C8D8D",
            }}
          >
            About
          </button>
        </li>
        <li style={styles.navItem}>
          <button
            onClick={() => scrollToSection("projects")}
            style={{
              ...styles.link,
              color: activeSection === "projects" ? "#55BBE5" : "#8C8D8D",
            }}
          >
            Projects
          </button>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    padding: "10px",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1,
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  navItem: {
    margin: "0 10px",
  },
  link: {
    textDecoration: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "5px 0px",
    transition: "color 0.3s ease",
    fontFamily: "Inter, sans-serif",
  },
};

export default Navbar;
