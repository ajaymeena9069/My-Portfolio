import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdOutlineCode } from 'react-icons/md';
import { FiAward } from 'react-icons/fi';

export default function About() {
  const highlights = [
    { icon: MdOutlineCode, label: "Projects", value: "10+", color: "#61dafb" },
    { icon: HiOutlineUserGroup, label: "Open Source", value: "5+", color: "#4caf50" },
    { icon: FiAward, label: "Certificates", value: "3+", color: "#ffd700" }
  ];

  return (
    <motion.section
      id='about'
      className="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='heading'>About <span>Me</span></h2>
          <div className="heading-line"></div>
        </motion.div>

        <div className="about-grid">
          {/* Image Section */}
          <motion.div
            className="about-image-wrapper"
            initial={{ x: -50, opacity: 0, scale: 0.95 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="image-card">
              <div className="image-bg"></div>
              <img
                src="/IMG_20260102_142636.jpg"
                alt="Ajay Meena"
                className="about-image"
              />
              <div className="image-overlay">
                <div className="overlay-icons">
                  <FaGithub />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="about-content"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="role-badge">
              <span>MERN-Stack Developer</span>
            </div>

            <p className="about-text">
              Aspiring MERN Stack Developer with hands-on project experience in React, Node.js, Express, and
              MongoDB. Seeking an opportunity to apply my skills, learn modern technologies, and contribute to
              real-world web development projects.
            </p>

            {/* Highlights Section */}
            <div className="highlights-grid">
              {highlights.map(({ icon: Icon, label, value, color }, index) => (
                <motion.div
                  key={label}
                  className="highlight-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  whileHover={{ y: -3 }}
                >
                  <div className="highlight-icon" style={{ background: `${color}15`, color }}>
                    <Icon />
                  </div>
                  <div className="highlight-info">
                    <h4 className="highlight-value">{value}</h4>
                    <p className="highlight-label">{label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="btn-box">
              <a href="https://github.com/ajaymeena9069" className="btn" target="_blank" rel="noopener noreferrer">
                View My Work
                <svg className="btn-arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}