import React from "react";
import aksunImage from "../assets/aksun.png";

const ProjectCard = ({ image, title, description, technologies, link }) => {
  return (
    <div
      id="projects"
      style={{ ...styles.card, ...styles.cardHover }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={styles.imageContainer}>
        <img src={image} alt={title} style={styles.image} />
      </div>
      <div style={styles.info}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        <div style={styles.technologies}>
          {technologies.map((tech, index) => (
            <span key={index} style={styles.tech}>
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <div style={styles.icon}>↗</div>
        </a>
      </div>
    </div>
  );
};

const styles = {
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A1A1A",
    minHeight: "100vh",
    textAlign: "center",
  },
  projectList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    marginTop: "20px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    width: "300px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease-in-out",
    animation: "popIn 0.5s ease", // Pop in effect saat muncul
  },
  cardHover: {
    transform: "scale(1.05)", // Efek scale di hover
  },
  imageContainer: {
    width: "100%",
    height: "180px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out",
  },
  info: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    animation: "slideIn 0.5s ease", // Animasi text slide saat card muncul
  },
  title: {
    fontSize: "18px",
    margin: "0 0 8px",
    fontWeight: "bold",
  },
  description: {
    fontSize: "14px",
    margin: "0 0 8px",
    color: "#ccc",
    lineHeight: "1.4",
  },
  technologies: {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
    marginTop: "10px",
  },
  tech: {
    backgroundColor: "#55BBE5",
    borderRadius: "4px",
    padding: "4px 8px",
    fontSize: "12px",
    animation: "fadeInUp 0.5s ease", // Animasi fade dan slide di tech tags
  },
  link: {
    alignSelf: "flex-end",
    color: "#00aaff",
    textDecoration: "none",
    fontSize: "24px",
    marginTop: "10px",
    transition: "color 0.2s",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#55BBE5",
    color: "#fff",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    fontSize: "16px",
    animation: "rotateIn 1s ease", // Animasi rotate pada ikon
  },
  work: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#FFFFFF",
    animation: "fadeInDown 1s ease", // Fade in down pada judul section
  },
  "@keyframes fadeIn": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
  "@keyframes popIn": {
    "0%": { transform: "scale(0.9)", opacity: 0 },
    "100%": { transform: "scale(1)", opacity: 1 },
  },
  "@keyframes slideIn": {
    "0%": { transform: "translateY(20px)", opacity: 0 },
    "100%": { transform: "translateY(0)", opacity: 1 },
  },
  "@keyframes fadeInUp": {
    "0%": { opacity: 0, transform: "translateY(10px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
  "@keyframes rotateIn": {
    "0%": { transform: "rotate(-45deg)", opacity: 0 },
    "100%": { transform: "rotate(0)", opacity: 1 },
  },
  "@keyframes fadeInDown": {
    "0%": { opacity: 0, transform: "translateY(-10px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
};

const Education = () => {
  const projects = [
    {
      image: aksunImage,
      title: "Aplikasi Pembelajaran Aksun",
      description:
        "Aplikasi Pembelajaran bernama “Aksun” adalah sebuah platform inovatif yang dirancang untuk memudahkan pengguna dalam belajar membaca aksara Sunda. Aplikasi ini menyediakan materi pembelajaran, memungkinkan pengguna untuk mengerjakan kuis dengan tiga level kategori yang berbeda, dan melihat ranking berdasarkan hasil kuis. Dengan Aksun, belajar aksara Sunda menjadi lebih interaktif dan menyenangkan.",
      technologies: ["Dart", "C++", "CMake"],
      link: "https://github.com/rezamiaw/aplikasi_aksun",
    },
  ];

  return (
    <section style={styles.section}>
      <p style={styles.work}>Some of my Work</p>
      <div style={styles.projectList}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Education;
