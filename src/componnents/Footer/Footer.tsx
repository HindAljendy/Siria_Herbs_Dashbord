import './Footer.css'
import facebook from './../../assets/images/footer/facebook.svg'
import instagram from './../../assets/images/footer/instagram.svg'
import mail from './../../assets/images/footer/mail.svg'
import call from './../../assets/images/footer/call.svg'
import focalX from './../../assets/images/footer/FocalX.png'
const Footer = () => {
  return (
    <div className='MA_footer'>
            <div>
                <ul>
                    <li><img src={facebook} alt="facebook" /></li>
                    <li><img src={instagram} alt="instagram" /></li>
                    <li><img src={call}  alt="call" /><label>+963 41 2020</label></li>
                    <li><img src={mail} alt="mail" /><label>info@siriaherbs.com</label></li>
                </ul>
            </div>
            <div className='row'>
                <label>Siria Herbs 2023 © All Rights Reserved | Designed and Developed by</label>
                <img src={focalX} alt='focal' className='focal'/>
            </div>
        
    </div>
  )
}

export default Footer