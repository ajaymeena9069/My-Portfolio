import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDownload, FaPaperPlane, FaCode, FaReact, FaNodeJs, FaSpinner } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import Tilt from "react-parallax-tilt";

// CSS-based Outline Fill Typing Animation
const OutlineTypewriter = ({ text }) => {
  return (
    <h3 
      className="outline-typewriter" 
      data-text={text}
    >
      {text}
    </h3>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  // Loading state for download
  const [isDownloading, setIsDownloading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0, filter: 'blur(8px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { type: "spring", stiffness: 120, damping: 20, filter: { type: "tween", duration: 0.4 } }
    }
  };

  const socialLinks = [
    { icon: FaFacebookF, url: "#", label: "Facebook", color: "#1877f2" },
    { icon: FaGithub, url: "https://github.com/ajaymeena9069", label: "GitHub", color: "#333" },
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/ajay-meena-0719ab28a/", label: "LinkedIn", color: "#0a66c2" },
    { icon: FaTwitter, url: "https://twitter.com/", label: "Twitter", color: "#1da1f2" }
  ];

  const techStack = [
    { icon: FaReact, name: "React", color: "#61dafb" },
    { icon: FaNodeJs, name: "Node.js", color: "#68a063" },
    { icon: SiMongodb, name: "MongoDB", color: "#4ea94b" },
    { icon: SiExpress, name: "Express", color: "#ffffff" }
  ];

  // Handle download with loading state
  const handleDownload = async (e) => {
    e.preventDefault();
    setIsDownloading(true);

    // Possible file paths
    const possiblePaths = [
      '/ajay_meena_resume.pdf',
      '/resume.pdf',
      '/Resume.pdf',
      '/RESUME.pdf',
      '/Ajay_Meena_Resume.pdf',
      '/ajay-meena-resume.pdf',
      '/cv.pdf'
    ];

    const downloadFile = async (url) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const blob = await response.blob();
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'Ajay_Meena_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(link.href);
          return true;
        }
        return false;
      } catch {
        return false;
      }
    };

    // Try each path
    let downloaded = false;
    for (const path of possiblePaths) {
      const success = await downloadFile(path);
      if (success) {
        downloaded = true;
        break;
      }
    }

    // If all fail, open in new tab
    if (!downloaded) {
      window.open('/ajay_meena_resume.pdf', '_blank');
    }

    // Hide loading after download starts
    setTimeout(() => {
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <motion.section
      id='home'
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
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

            <motion.div variants={itemVariants}>
              <OutlineTypewriter text="Full Stack Developer" />
            </motion.div>

            <motion.p variants={itemVariants}>
              MERN Stack Developer with a strong foundation in modern web technologies. I build responsive web applications and learn by creating practical projects.
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
              <button
                onClick={handleDownload}
                className="btn btn-secondary"
                disabled={isDownloading}
                style={{ opacity: isDownloading ? 0.7 : 1, cursor: isDownloading ? 'wait' : 'pointer' }}
              >
                {isDownloading ? (
                  <>
                    <FaSpinner className="btn-icon spinner" />
                    Preparing Resume...
                  </>
                ) : (
                  <>
                    <FaDownload className="btn-icon" />
                    Download CV
                  </>
                )}
              </button>
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
                  whileHover={{ y: -3, scale: 1.05 }}
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
            style={{ scale, opacity, y: yParallax }}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={false}
              transitionSpeed={800}
              perspective={800}
              scale={1.01}
              gyroscope={false}
              className="tilt-wrapper"
            >
              <div className="hero-image-wrapper">
                <div className="hero-glow"></div>
                <div className="hero-blob"></div>
                <img
                  className='hero-image'
                  src="/premium_hero_transparent.png"
                  alt="Ajay Meena - Full Stack Developer"
                  loading="eager"
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

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
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