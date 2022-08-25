import React from 'react'
import './about.css'
import dp from '../../assets/dp.png'

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={dp} alt="About_Image" />
        </div>
      </div>
      <div className="about__content">
        <p>
          I'm Bangalore-based IT engineer working @LTI, aspiring to be a fullstack developer
          who has intermediate level of knowledge in HTML,CSS, JavaScript & React.
          In my spare time I enjoy DIY and building  own games using unity & other projects.
        </p>
       <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About