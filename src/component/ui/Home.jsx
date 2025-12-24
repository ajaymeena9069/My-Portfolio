import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import Tilt from "react-parallax-tilt";

export default function Home() {
  return (
    <section id='home' className="home container">
      <div className='home-section grid grid-col-2'>
        <div className="home-content">
          <h1>Hi, I'm <br /> <span>Ajay Meena</span></h1>
          <div className="text-animate">
            <h3>MERN-STACK Developer</h3>
          </div>
          <p>Full Stack Developer skilled in Java, React, Node.js, MySQL & modern web technologies. I turn ideas into functional digital products.</p>
          <div className="btn-box">
            <a href="" className="btn">Hire Me</a>
            <a href="" className="btn">Let's Talk</a>
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
        </div>
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

        <div className='home-hero-img'>
          <img
            className='img-fluid'
            src="public\Home_hero.png" alt="" />
        </div>
        </Tilt>

      </div>
    </section>
  )
}
