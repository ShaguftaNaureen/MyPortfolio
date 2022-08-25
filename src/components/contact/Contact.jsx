import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import { BsLinkedin } from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uq95v5k', 'template_rjaqcc6', form.current, '4cdf-SF2qKqpTNPxP')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>shaguftanaureen0506@gmail.com</h5>
            <a href="mailto:shaguftanaureen0506@gmail.com" target="_blank" rel="noreferrer">Send an email</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>ShaguftaZ</h5>
            <a href="http://www.linkedin.com/in/shagufta-z" target="_blank" rel="noreferrer">Follow me on LinkedIn</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>8660244351</h5>
            <a href="https://api.whatsapp.com/send?phone=8660244351" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTION */}

        <form ref={form} onSubmit={sendEmail}>
          <input Type="text" name="name" placeholder='Your Full Name' required/>

          <input type='email' name='email' placeholder="Your Email" required/>
          <textarea type='message' name="message" rows="7" placeholder="Your Message" required/>
          <button type='submit' className=" btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact