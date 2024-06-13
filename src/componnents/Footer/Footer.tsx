import React from 'react'
import './Footer.css'
import facebook from './../../assets/images/footer/facebook.svg'
import instagram from './../../assets/images/footer/instagram.svg'
import mail from './../../assets/images/footer/mail.svg'
import call from './../../assets/images/footer/call.svg'
import focalX from './../../assets/images/footer/FocalX.png'

const Footer = () => {
  return (
    <>
      <div className='MA_line'></div>
      <div className='MA_footer'>
        <div className='Info_Contacts'>
          <ul>
            <li><span className='MA_email'>info@siriaherbs.com</span><img src={mail} alt="mail" /></li>
            <li><span className='MA_call'>+963 41 2020</span><img src={call} alt="call" /></li>
            <li><img src={instagram} alt="instagram" /></li>
            <li><img src={facebook} alt="facebook" /></li>
          </ul>
        </div>
        <div className='MA_info_Footer'>
          <img src={focalX} alt='focal' className='MA_IMG_focal' />
          <span>Siria Herbs 2023 © All Rights Reserved | Designed and Developed by</span>
        </div>
      </div>
    </>

  )
}

export default Footer