import React from 'react'

export default function About() {
  return (
    <section id='about' className="about">
      <h2 className='heading'>About <span>Me</span></h2>
      <div className="container about-container">

        <div className="about-img">
          <img src="public\1000011453.png" alt="" />
          <span className="circle-spin img-fluid"></span>
        </div>

        <div className="about-content">
          <h3>Full-Stack Devloper</h3>
          <p>I’m a Full-Stack Developer skilled in Java, HTML, CSS, JavaScript, React, Node.js, and MongoDB. I enjoy building responsive, user-friendly web applications with clean code and modern design, combining frontend creativity with backend efficiency. Always eager to learn and adapt, I strive to deliver scalable and innovative digital solutions.</p>

          <div className="btn-box btns">
            <a href="" className="btn">Read More</a>
          </div>
        </div>
      </div>
    </section>
  )
}
