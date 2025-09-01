import React from 'react'
import { FaArrowLeft, FaGithub } from 'react-icons/fa'
import projectsData from '../api/projectsData.json'  // 👈 import json file

export default function Projects() {
  return (
    <section id='project' className="project">
      <div className="project-container container">
        <h2 className="heading">My <span>Work's</span></h2>
        <div className="container-grid">
          {projectsData.map((project) => (
            <div className="container-item" key={project.id}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
