import React from 'react'

export default function About() {
  return (
    <section id='about' className="about">
      <h2 className='heading'>About <span>Me</span></h2>
      <div className="container about-container">

        <div className="about-img">
          <img src="Home_hero.png" alt="" />
          <span className="circle-spin img-fluid"></span>
        </div>

        <div className="about-content">
          <h3>Full-Stack Devloper</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio a accusantium, consequatur mollitia ex, recusandae cupiditate quas molestias, dolor odit numquam ipsum qui. Assumenda fuga odio a culpa sit aperiam deserunt reiciendis temporibus accusantium esse? Facilis incidunt possimus ipsum dolor accusantium eos! Sit aspernatur ipsa molestiae quidem, architecto in dolor.</p>

          <div className="btn-box btns">
            <a href="" className="btn">Read More</a>
          </div>
        </div>
      </div>
    </section>
  )
}
