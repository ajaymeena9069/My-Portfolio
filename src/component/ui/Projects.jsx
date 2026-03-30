import React from 'react'
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub } from 'react-icons/fa'
import projectsData from '../json/projectsData.json'  // 👈 import json file

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
      <div className="project-container container">
        <h2 className="heading">My <span>Work's</span></h2>
        <div className="container-grid">
          {projectsData.map((project, index) => (
            <motion.div
              className="container-item"
              key={project.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="work-img">
                <img className='img-fluid' src={project.image} alt={project.title} />
              </div>
              <div className="work-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="tech-used">
                  <p>{project.tech}</p>
                </div>
                <div className="project-icons work-icons">
                  <a href={project.previewLink} target="_blank" rel="noopener noreferrer">
                    <FaArrowLeft />
                    <span className="tooltip">Preview</span>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    <span className="tooltip">Github Repository</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
