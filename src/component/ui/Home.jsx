import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDownload, FaPaperPlane, FaCode, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import Tilt from "react-parallax-tilt";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const socialLinks = [
    { icon: FaFacebookF, url: "#", label: "Facebook", color: "#1877f2" },
    { icon: FaGithub, url: "https://github.com/ajaymeena9069", label: "GitHub", color: "#333" },
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/ajay-meena-0719ab28a/", label: "LinkedIn", color: "#0a66c2" },
    { icon: FaTwitter, url: "https://twitter.com/yourusername", label: "Twitter", color: "#1da1f2" }
  ];

  const techStack = [
    { icon: FaReact, name: "React", color: "#61dafb" },
    { icon: FaNodeJs, name: "Node.js", color: "#68a063" },
    { icon: SiMongodb, name: "MongoDB", color: "#4ea94b" },
    { icon: SiExpress, name: "Express", color: "#ffffff" }
  ];

  return (
    <motion.section
      id='home'
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="home-container">
        <div className='home-section'>
          <motion.div
            className="home-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="greeting-badge">
              <span className="badge">👋 Welcome to my portfolio</span>
            </motion.div>

            <motion.h1 variants={itemVariants}>
              Hi, I'm <br />
              <span className="gradient-text">Ajay Meena</span>
            </motion.h1>

            <motion.div className="text-animate" variants={itemVariants}>
              <h3>MERN-STACK Developer</h3>
            </motion.div>

            <motion.p variants={itemVariants}>
              Full Stack Developer skilled in Java, React, Node.js, MySQL & modern web technologies.
              I turn ideas into functional digital products with clean code and beautiful design.
            </motion.p>

            <motion.div className="tech-stack" variants={itemVariants}>
              {techStack.map(({ icon: Icon, name, color }) => (
                <div key={name} className="tech-item" style={{ '--tech-color': color }}>
                  <Icon />
                  <span>{name}</span>
                </div>
              ))}
            </motion.div>

            <motion.div className="btn-box" variants={itemVariants}>
              <a href="#contact" className="btn btn-primary">
                <FaPaperPlane className="btn-icon" />
                Hire Me
              </a>
              <a
                href="/resume.pdf"
                download="ajay_meena_resume.pdf"
                className="btn btn-secondary"
              >
                <FaDownload className="btn-icon" />
                Download CV
              </a>
            </motion.div>

            <motion.div className="home-sci" variants={itemVariants}>
              {socialLinks.map(({ icon: Icon, url, label, color }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-link"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ '--hover-color': color }}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="home-hero"
            style={{ scale, opacity }}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              transitionSpeed={1000}
              perspective={1000}
              scale={1.02}
              gyroscope={true}
              glareColor="rgba(0, 171, 240, 0.4)"
              className="tilt-wrapper"
            >
              <div className="hero-image-wrapper">
                <div className="hero-glow"></div>
                <div className="hero-blob"></div>
                <img
                  className='hero-image'
                  src="/Home_hero.png"
                  alt="Ajay Meena - Full Stack Developer"
                />
                <div className="floating-cards">
                  <div className="card card-1">
                    <FaCode />
                    <span>10+ Projects</span>
                  </div>
                  <div className="card card-2">
                    <FaReact />
                    <span>React Expert</span>
                  </div>
                  <div className="card card-3">
                    <FaNodeJs />
                    <span>Backend Pro</span>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll Down</span>
        </motion.div>
      </div>
    </motion.section>
  );
}