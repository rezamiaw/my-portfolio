import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.contentContainer}>
        {/* About Me Content */}
        <div style={styles.content}>
          <h1 style={styles.heading}>About Me</h1>
          <p style={styles.paragraph}>
            Recent graduate with a Bachelor's degree in Informatics, with 4
            months of experience as a front-end developer. Experienced in mobile
            and web application development, using programming languages such as
            HTML5, CSS, ReactJS, NextJS, and Flutter. My education has provided
            me with a strong understanding of technology.
          </p>

          {/* Knowledges Section */}
          <h1 style={styles.knowledgeHeading}>Knowledges</h1>
          <div style={styles.knowledgeList}>
            <span style={styles.knowledgeItem}>CSS</span>
            <span style={styles.knowledgeItem}>HTML</span>
            <span style={styles.knowledgeItem}>JavaScript</span>
            <span style={styles.knowledgeItem}>ReactJS</span>
            <span style={styles.knowledgeItem}>SQL</span>
          </div>

          {/* Education and Work Experience Section */}
          <div style={styles.experienceContainer}>
            {/* Education Section */}
            <div style={styles.educationContainer}>
              <h1 style={styles.educationHeading}>Education</h1>
              <div style={styles.educationItem}>
                <FaGraduationCap style={styles.icon} />
                <div style={styles.textContainer}>
                  <h2 style={styles.schoolName}>SMK Telkom Purwokerto</h2>
                  <p style={styles.degree}>Rekayasa Perangkat Lunak</p>
                  <p style={styles.date}>2017 - 2020</p>
                </div>
              </div>
              <div style={styles.educationItem}>
                <FaGraduationCap style={styles.icon} />
                <div style={styles.textContainer}>
                  <h2 style={styles.schoolName}>Telkom University</h2>
                  <p style={styles.degree}>S1 Informatika</p>
                  <p style={styles.date}>2020 - 2024</p>
                </div>
              </div>
            </div>

            {/* Work Experience Section */}
            <div style={styles.workExperienceContainer}>
              <h1 style={styles.workExperienceHeading}>Work Experience</h1>
              <div style={styles.workExperienceItem}>
                <FaBriefcase style={styles.icon} />
                <div style={styles.textContainer}>
                  <h2 style={styles.jobTitle}>Researcher Intern</h2>
                  <p style={styles.company}>Telkom Indonesia</p>
                  <p style={styles.date}>December 2018 - Maret 2019</p>
                </div>
              </div>
              <div style={styles.workExperienceItem}>
                <FaBriefcase style={styles.icon} />
                <div style={styles.textContainer}>
                  <h2 style={styles.jobTitle}>Frontend Developer Intern</h2>
                  <p style={styles.company}>Gikslab Indonesia</p>
                  <p style={styles.date}>Juli 2023 - September 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#1A1A1A",
  },
  contentContainer: {
    display: "flex",
    maxWidth: "1000px",
    width: "100%",
    padding: "20px",
  },
  content: {
    maxWidth: "100%",
    paddingRight: "20px",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "10px",
    color: "#FFFFFF",
  },
  paragraph: {
    fontSize: "18px",
    color: "#FFFFFF",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  knowledgeHeading: {
    fontSize: "32px",
    color: "#FFFFFF",
    marginBottom: "15px",
  },
  knowledgeList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    color: "#FFFFFF",
    marginBottom: "30px",
  },
  knowledgeItem: {
    fontSize: "18px",
    padding: "10px",
    backgroundColor: "rgba(128, 128, 128, 0.3)",
    borderRadius: "5px",
  },
  experienceContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "40px",
  },
  educationContainer: {
    flex: 1,
    color: "#FFFFFF",
  },
  educationHeading: {
    fontSize: "32px",
    color: "#FFFFFF",
    marginBottom: "15px",
  },
  educationItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  icon: {
    fontSize: "24px",
    color: "#1A1A1A",
    marginRight: "10px",
    backgroundColor: "#F5F9FF",
    padding: "10px",
    borderRadius: "50%",
  },
  textContainer: {
    textAlign: "left",
    marginLeft: "10px",
  },
  schoolName: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  degree: {
    fontSize: "18px",
    marginBottom: "5px",
    color: "#BBBBBB",
  },
  date: {
    fontSize: "16px",
    color: "#AAAAAA",
  },
  workExperienceContainer: {
    flex: 1,
    color: "#FFFFFF",
  },
  workExperienceHeading: {
    fontSize: "32px",
    color: "#FFFFFF",
    marginBottom: "15px",
  },
  workExperienceItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  jobTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  company: {
    fontSize: "18px",
    marginBottom: "5px",
    color: "#BBBBBB",
  },
};

export default About;
