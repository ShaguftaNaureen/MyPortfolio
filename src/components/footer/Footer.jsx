import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {GrTwitter} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">SHAGUFTA</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target='_blank' rel='noreferrer'><FaFacebookSquare/></a>
        <a href="https://instagram.com" target='_blank' rel='noreferrer'><BsInstagram/></a>
        <a href="https://twitter.com" target='_blank' rel='noreferrer'><GrTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SHAGUFTA's PORTFOLIO. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer