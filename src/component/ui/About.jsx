import React from 'react'
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id='about'
      className="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className='heading'>About <span>Me</span></h2>
      <div className="container about-container">

        <motion.div
          className="about-img"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          {/* FIX: correct image path */}
          <img src="/IMG_20260102_142636.jpg" alt="" />
          <span className="circle-spin img-fluid"></span>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3>MERN-Stack Devloper</h3>
          <p>Aspiring MERN Stack Developer with hands-on project experience in React, Node.js, Express, and
            MongoDB. Seeking an opportunity to apply my skills, learn modern technologies, and contribute to
            real world-web development projects.</p>

          <div className="btn-box btns">
            <a href="https://github.com/ajaymeena9069" className="btn">Read More</a>
          </div>
        </motion.div> {/* FIX: closing motion.div properly */}

      </div>
    </motion.section>
  )
}