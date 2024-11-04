import React, { useState } from "react";
import profileImage from "../assets/profile1.png";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="home" style={styles.section}>
      <div style={styles.content}>
        <img
          src={profileImage}
          alt="Profile"
          style={{
            ...styles.profileImage,
            ...(isHovered ? styles.profileImageHover : {}),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <h1 style={styles.heading}>Hello, I'm Reza Dwi Andrianto</h1>
        <h1 style={styles.gradientText}>Front-end Developer</h1>
        <p style={styles.paragraph}>
          Recent graduate with a Bachelor's degree in Informatics, with 4 months
          of experience as a front-end developer. Experienced in mobile and web
          application development, using programming languages such as HTML5,
          CSS, ReactJS, NextJS, and Flutter. My education has provided me with a
          strong understanding of technology.
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "100vh",
    backgroundColor: "#1A1A1A",
  },
  content: {
    maxWidth: "800px",
    padding: "20px",
  },
  profileImage: {
    borderRadius: "50%",
    width: "250px",
    height: "250px",
    objectFit: "cover",
    marginBottom: "20px",
    transition: "transform 0.3s ease",
  },
  profileImageHover: {
    transform: "scale(1.1)", // Zoom 10% saat di-hover
  },
  heading: {
    fontSize: "36px",
    marginBottom: "20px",
    color: "#FFFFFF",
  },
  paragraph: {
    lineHeight: "1.6",
    fontSize: "20px",
    color: "#FFFFFF",
  },
  gradientText: {
    fontSize: "36px",
    marginBottom: "20px",
    background: "linear-gradient(90deg, #55BBE5, #FFFFFF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
};

export default Home;
