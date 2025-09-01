import React from 'react'

export default function Skills() {
  return (
    <section id='skills' className="skills">
      <div className="skills-section container">

        <h2 className='heading'>My <span>Skills</span></h2>
        <div className="skills-row">
          <div className="skills-col">
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
          </div>

          <div className="skills-col">
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
          </div>
        </div>
      </div>
    </section>
  )
}
