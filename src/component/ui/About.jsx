import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdOutlineCode } from 'react-icons/md';
import { FiAward } from 'react-icons/fi';
import ImageLoader from "./ImageLoader";

export default function About() {
  const highlights = [
    { icon: MdOutlineCode, label: "Projects", value: "10+", color: "#61dafb" },
    { icon: HiOutlineUserGroup, label: "Open Source", value: "5+", color: "#4caf50" },
    { icon: FiAward, label: "Certificates", value: "3+", color: "#ffd700" }
  ];

  const scrollToProjects = useCallback(() => {
    const projectsSection = document.getElementById('project');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Reduced animation delays to prevent layout shift
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 }
    }
  };

  return (
    <motion.section
      id='about'
      className="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <h2 className='heading'>About <span>Me</span></h2>
          <div className="heading-line"></div>
        </motion.div>

        <div className="about-grid">
          {/* Image Section - Reduced animation complexity */}
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 150, damping: 20 }}
          >
            <div className="image-container">
              <div className="animated-border"></div>
              <div className="rotating-ring"></div>
              <div className="image-circle">
                <ImageLoader
                  src="IMG_20260403_164121.webp"
                  alt="Ajay Meena"
                  className="about-image"
                  loading="eager"
                />
                <div className="image-overlay-circle">
                  <div className="overlay-icons-circle">
                    <a href="https://github.com/ajaymeena9069" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/ajay-meena-0719ab28a/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
              {/* Floating elements - Simplified */}
              <motion.div
                className="floating-dot dot-1"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <MdOutlineCode />
              </motion.div>
              <motion.div
                className="floating-dot dot-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <FaGithub />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="role-badge">
              <span>MERN-Stack Developer</span>
            </motion.div>

            <motion.p variants={itemVariants} className="about-text">
              Dedicated Full Stack Developer with hands-on experience building and deploying over 5 real-world MERN stack projects. Skilled in modern web technologies including TypeScript, React.js, Next.js, and Node.js. Focused on writing clean code, optimizing databases with Redis, and handling end-to-end deployments using Docker, CI/CD pipelines, and AWS.
            </motion.p>

            <motion.div variants={itemVariants} className="highlights-grid">
              {highlights.map(({ icon: Icon, label, value, color }, index) => (
                <div
                  key={label}
                  className="highlight-card"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="highlight-icon" style={{ background: `${color}15`, color }}>
                    <Icon />
                  </div>
                  <div className="highlight-info">
                    <h4 className="highlight-value">{value}</h4>
                    <p className="highlight-label">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="btn-box">
              <button onClick={scrollToProjects} className="btn btn-primary">
                View My Work
                <FaArrowRight className="btn-arrow" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}