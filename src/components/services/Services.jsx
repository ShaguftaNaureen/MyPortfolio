import React from 'react'
import './services.css'
import {MdCheck} from 'react-icons/md'
const Services = () => {
  return (
    <section id = 'services'>
    <h5>What I offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className='service__list'>
          <li>
            <MdCheck className='service__list-icon'/>
            <p>Create Figma Designs of an App or a Website</p>
          </li>
          <li>
            <MdCheck className='service__list-icon'/>
            <p>Create front end UI using Reactjs, HTML & CSS</p>
          </li>
          <li>
            <MdCheck className='service__list-icon'/>
            <p>Create logos for the app/website or posters </p>
          </li>
          <li>
            <MdCheck className='service__list-icon'/>
            <p>Collect and analyze data to create data-driven UI designs and user experiences</p>
          </li>
        </ul>
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          <li>
            <MdCheck className='service__list-icon'/>
            <p>Designing user interfaces and navigation menus</p>
          </li>
          <li>
            <MdCheck className='service__list-icon'/>
            <p>Create & Test website across different platforms</p>
          </li>
          <li>
            <MdCheck className='service__list-icon'/>
            <p>Writing and reviewing code for sites, typically HTML, CSS, Reactjs</p>
           </li>
          <li>
            <MdCheck className='service__list-icon' />
            <p>Integrate & test both backend and frontend</p>
           </li>
          <li>
            <MdCheck className='service__list-icon'/>
            <p>Troubleshooting problems with performance or user experience</p>
          </li>
        </ul>
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Mobile Development</h3>
        </div>
        <ul className='service__list'>
          <li>
            <MdCheck className='service__list-icon'/>
            <p>Research & Designing user interfaces which fits all types of mobile devices</p>
          </li>
          <li>
            <MdCheck className='service__list-icon'/>
            <p>Writing and reviewing code for app, typically ReactNative or flutter </p>
          </li>
          <li>
            <MdCheck className='service__list-icon'/>
            <p>Create & Test application using different mobile devices</p>
          </li>
          <li>
            <MdCheck className='service__list-icon'/>
            <p>Deploy the application to playstore or appstore</p>
          </li>
          <li>
            <MdCheck className='service__list-icon'/>
            <p>Update by releasing new versions of application</p>
          </li>
        </ul>
      </article>
    </div>
    </section>
  )
}

export default Services