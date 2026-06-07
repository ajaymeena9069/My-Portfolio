import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaJava,
  FaReact, FaNodeJs, FaDatabase, FaServer, FaAws
} from 'react-icons/fa';
import { SiMongodb, SiMysql, SiNextdotjs } from 'react-icons/si';

export default function Skills() {
  const frontendSkills = [
    { name: "HTML", level: 90, icon: FaHtml5, color: "#e34c26", description: "Semantic HTML5, SEO, Accessibility" },
    { name: "CSS", level: 85, icon: FaCss3Alt, color: "#264de4", description: "Flexbox, Grid, Animations, Responsive" },
    { name: "JavaScript", level: 75, icon: FaJs, color: "#f7df1e", description: "ES6+, Async/Await, DOM Manipulation" },
    { name: "React", level: 88, icon: FaReact, color: "#61dafb", description: "Hooks, Redux, Context API, Router" },
    { name: "Next.js", level: 75, icon: SiNextdotjs, color: "#ffffff", description: "SSR, SSG, File-based Routing" }
  ];

  const backendSkills = [
    { name: "Java", level: 85, icon: FaJava, color: "#007396", description: "OOP, Collections, Multithreading" },
    { name: "Node.js", level: 82, icon: FaNodeJs, color: "#68a063", description: "Express.js, REST APIs, JWT" },
    { name: "MongoDB", level: 78, icon: SiMongodb, color: "#4ea94b", description: "Aggregation, Indexing, Mongoose" },
    { name: "MySQL", level: 80, icon: SiMysql, color: "#4479a1", description: "Complex Queries, Optimization, Joins" },
    { name: "AWS", level: 70, icon: FaAws, color: "#ff9900", description: "EC2, S3, Deployment basics" }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      id='skills'
      className="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className='heading'>My <span>Skills</span></h2>
          <p className="skills-subtitle">Technologies & Tools I work with</p>
          <div className="heading-line"></div>
        </motion.div>

        <div className="skills-grid">
          {/* Frontend Skills */}
          <motion.div
            className="skills-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="category-header">
              <div className="category-icon">
                <FaServer />
              </div>
              <h3 className="category-title">Frontend Development</h3>
            </div>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                >
                  <div className="skill-card-header">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      <skill.icon />
                    </div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <p className="skill-description">{skill.description}</p>
                    </div>
                    <div className="skill-percentage">{skill.level}%</div>
                  </div>
                  <div className="skill-bar-container">
                    <motion.div
                      className="skill-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + (index * 0.05) }}
                      style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)` }}
                    >
                      <div className="skill-glow"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            className="skills-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="category-header">
              <div className="category-icon">
                <FaDatabase />
              </div>
              <h3 className="category-title">Backend & Database</h3>
            </div>
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                >
                  <div className="skill-card-header">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      <skill.icon />
                    </div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <p className="skill-description">{skill.description}</p>
                    </div>
                    <div className="skill-percentage">{skill.level}%</div>
                  </div>
                  <div className="skill-bar-container">
                    <motion.div
                      className="skill-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + (index * 0.05) }}
                      style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)` }}
                    >
                      <div className="skill-glow"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Tools Section */}
        <motion.div
          className="tools-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3 className="tools-title">Tools & Technologies</h3>
          <div className="tools-grid">
            {[
              { name: "Git", icon: "📚", color: "#f05032" },
              { name: "GitHub", icon: "🐙", color: "#ffffff" },
              { name: "VS Code", icon: "💻", color: "#007acc" },
              { name: "Postman", icon: "📮", color: "#ff6c37" },
              { name: "Figma", icon: "🎨", color: "#f24e1e" },
              { name: "Docker", icon: "🐳", color: "#2496ed" }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                className="tool-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.03) }}
                whileHover={{ y: -3, scale: 1.03 }}
              >
                <div className="tool-icon" style={{ background: `${tool.color}20`, color: tool.color }}>
                  <span>{tool.icon}</span>
                </div>
                <span className="tool-name">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}