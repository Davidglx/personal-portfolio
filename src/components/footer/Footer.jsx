import React from 'react';
import './Footer.css';
import {ImFacebook2} from 'react-icons/im';
import {BsInstagram} from 'react-icons/bs';
import {FiTwitter} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>JOHNSON DAVID</a>
      
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'></a></li>
      </ul>

      <div className='footer__socials'>
        <a href='http://facebook.com'><ImFacebook2 /></a>
        <a href='http://twitter.com'><BsInstagram/></a>
        <a href='http://instagram.com'><FiTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; JOHNSON DAVID INC. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer