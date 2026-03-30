import React from 'react'
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <motion.section
      id='skills'
      className="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="skills-section container">

        <h2 className='heading'>My <span>Skills</span></h2>
        <div className="skills-row">
          <motion.div
            className="skills-col"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>HTML <span>90%</span></h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>CSS <span>80%</span></h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>JavaScript <span>70%</span></h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>Java <span>80%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="skills-col"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>React <span>90%</span></h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>NodeJs <span>85%</span></h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>MongoDB <span>70%</span></h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>My-SQL <span>80%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
