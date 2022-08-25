import React from 'react'
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development & Others </h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>Django</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>Heroku</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>Unity</h4>
              <small className='text-light'>Experienced</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
                 <div>
                   <h4>QT Creator</h4>
                     <small className='text-light'>Experienced</small>
                   </div>
             </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience