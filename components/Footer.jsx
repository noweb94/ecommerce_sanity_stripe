import React from 'react';
import { AiFillInstagram, AiFillGithub, AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>Copyright © 2022 NoWeBB All Rights Reserved!</p>
      <div className='icons'>
        <a href="https://www.instagram.com/">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/noweb94/">
          <AiFillGithub />
        </a>
        <a href="mailto:domanglad@gmail.com">
          <AiOutlineMail />
        </a>
      </div>
    </div>
  )
}

export default Footer