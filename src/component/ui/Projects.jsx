import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { MdPreview } from 'react-icons/md';
import projectsData from '../json/projectsData.json';

export default function Projects() {
  return (
    <motion.section
      id='project'
      className="project"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="project-container">
        <motion.div
          className="project-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading">My <span>Work's</span></h2>
          <p className="project-subtitle">Some of my recent projects and work</p>
          <div className="heading-line"></div>
        </motion.div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              className="project-card"
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-image-wrapper">
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.title}
                />
                <div className="project-overlay">
                  <div className="tech-stack">
                    {project.tech.split(', ').slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                    {project.tech.split(', ').length > 3 && (
                      <span className="tech-tag">+{project.tech.split(', ').length - 3}</span>
                    )}
                  </div>
                </div>
              </div>

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
                  {project.tech.split(', ').slice(0, 4).map((tech, i) => (
                    <span key={i} className="tech-item">{tech}</span>
                  ))}
                  {project.tech.split(', ').length > 4 && (
                    <span className="tech-item">+{project.tech.split(', ').length - 4}</span>
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
        </div>
      </div>
    </motion.section>
  );
}