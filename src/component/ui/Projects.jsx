import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCode } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import projectsData from "../json/projectsData.json";
import ImageLoader from "./ImageLoader";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  return (
    <motion.section
      id="project"
      className="project"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-container">
        <motion.div
          className="project-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <h2 className="heading">
            My <span>Work's</span>
          </h2>
          <p className="project-subtitle">
            Some of my recent projects and work
          </p>
          <div className="heading-line"></div>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              className="project-card"
              key={project.id}
              variants={itemVariants}
            >
              <motion.div
                className="project-image-wrapper"
              >
                <ImageLoader
                  className="project-image"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="tech-stack">
                    {project.tech
                      .split(", ")
                      .slice(0, 3)
                      .map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    {project.tech.split(", ").length > 3 && (
                      <span className="tech-tag">
                        +{project.tech.split(", ").length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>

              <div className="project-content">
                <div className="project-title-section">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-badge">
                    <FaCode />
                    <span>Project</span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech
                    .split(", ")
                    .slice(0, 4)
                    .map((tech, i) => (
                      <span key={i} className="tech-item">
                        {tech}
                      </span>
                    ))}
                  {project.tech.split(", ").length > 4 && (
                    <span className="tech-item">
                      +{project.tech.split(", ").length - 4}
                    </span>
                  )}
                </div>

                <div className="project-links">
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link preview-link"
                    aria-label="Live Preview"
                  >
                    <MdPreview />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
