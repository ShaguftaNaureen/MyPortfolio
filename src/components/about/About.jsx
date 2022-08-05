import React from 'react'
import './about.css'
import ME from '../../assets/me2.png'
import {FaAward} from 'react-icons/fa'
import {TbUsers} from 'react-icons/tb'
import {TiFolderOpen} from 'react-icons/ti'

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About_Image" />
        </div>
      </div>
      <div className="about__content">
       <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icons'/>
          <h5>Experience</h5>
          <small>0Years working</small>
        </article>
        <article className='about__card'>
          <TbUsers className='about__icons'/>
          <h5>Clients</h5>
          <small>0 Clients</small>
        </article>
        <article className='about__card'>
          <TiFolderOpen className='about__icons'/>
          <h5>Projects</h5>
          <small>0 Projects</small>
        </article>
       </div>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat maxime, odio quo praesentium tempore itaque. Ut, error. Quia quod sint omnis cum praesentium quis voluptatum voluptatibus amet ex tempore?
       </p>
       <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About