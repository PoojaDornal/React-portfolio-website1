import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>EGATOR</a>

      <ul className='permalinks'>
        <li ><a href='#'>Home</a></li>
        <li ><a href='#about'>About</a></li>
        <li ><a href='#experience'>Experience</a></li>
        <li ><a href='#portfolio'>Portfolio</a></li>
        <li ><a href='#contact'>Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href='https://www.linkedin.com/in/pooja-d-5a4b29159/'> <BsLinkedin /></a>
          <a href='https://instagram.com'><BsInstagram /> </a>
          <a href='https://github.com/PoojaDornal'> <BsGithub /></a>
        </div>

        <div className="footer__copyright">
          <small>&copy;EGATOR Tutorials. All rights reserved.</small>
        </div>
    </footer>
    
    )
}

export default footer