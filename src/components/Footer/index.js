import {Component} from 'react'
import './index.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

class Footer extends Component{
    render(){
        return(
            <div className='Footer-container'>
                
                <div className='info-items'>
                    <h1 className='footer-heading'>Company</h1>
                    <ul type='none'>
                        <li className='links'>About</li>
                        <li className='links'>Careers</li>
                        <li className='links'>Press</li>
                        <li className='links'>News</li>
                        <li className='links'>Merch</li>
                    </ul>
                </div>
                <div className='terms-conditions-container'>
                    <h1 className='footer-heading'>Privacy Policy & Terms of Service</h1>
                    <ul type='none'>
                        <li className='conditions'>Privacy Policy</li>
                        <li className='conditions'>Biometrics Privacy Policy</li>
                        <li className='conditions'>Financial Privacy Notice</li>
                        <li className='conditions'>Terms of Service</li>
                        <li className='conditions'>Trade Desk Terms of Service</li>
                    </ul>
                </div>
                <div className='follow-us-container'>
                    <h1 className='footer-heading'>Follow Us</h1>
                    <div className='social-media'>
                        <FaTwitter className='social-media-icons'/>
                        <FaFacebookF className='social-media-icons'/>
                        <FaYoutube className='social-media-icons'/>
                        <FaLinkedinIn className='social-media-icons'/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer