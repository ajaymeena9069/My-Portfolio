import React from 'react'
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import Tilt from "react-parallax-tilt";

export default function Home() {
  return (
    <motion.section
      id='home'
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className='home-section grid grid-col-2'>
        <motion.div
          className="home-content"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Hi, I'm <br /> <span>Ajay Meena</span></h1>
          <div className="text-animate">
            <h3>MERN-STACK Developer</h3>
          </div>
          <p>Full Stack Developer skilled in Java, React, Node.js, MySQL & modern web technologies. I turn ideas into functional digital products.</p>
          <div className="btn-box">
            <a href="#contact" className="btn">Hire Me</a>
            <a href="/resume.pdf" download={`ajay_meena_resume.pdf`} className="btn">Resume</a>
          </div>
          <div className="home-sci">
            <a href="#">
              <FaFacebookF className='home-section-sci-icons' />
            </a>
            <a href="https://github.com/ajaymeena9069" target='_blank'>
              <FaGithub className='home-section-sci-icons' />
            </a>
            <a href="https://www.linkedin.com/in/ajay-meena-0719ab28a/" target='_blank'>
              <FaLinkedinIn className='home-section-sci-icons' />
            </a>
          </div>
        </motion.div>

        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          glareEnable={true}
          transitionSpeed={1000}
          perspective={1000}
          scale={1.05}
          gyroscope={true}
          glareColor="transparent"
        >
          <motion.div
            className='home-hero-img'
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* FIX: image path */}
            <img
              className='img-fluid'
              src="/Home_hero.png"
              alt=""
            />
          </motion.div>
        </Tilt>

      </div>
    </motion.section>
  )
}