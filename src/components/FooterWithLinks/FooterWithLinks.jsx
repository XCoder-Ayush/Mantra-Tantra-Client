import React from 'react'
import './FooterWithLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../Navbar/Navbar'
const FooterWithLinks = () => {
  return (
    <div>
    
    <div className="footer-main-div">

        <div className= "footer-left-div ">
        <p>This is an endeavour to please Bhagwan Swaminarayan by typing “Swaminarayan” mahamantra online.</p>
        <a className='linktag' href="/topusers">Top Users</a>
        <a className='linktag' href="/BhagwanSwaminarayan">Bhagwan Swaminarayan</a>
        <a className='linktag' href="/faq">Frequently Asked Questions</a>
        <a className='linktag' href="/testimonial">Testimonials</a>
        </div>
       
      
        <div className= "footer-right-div ">
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        <p>Stay In Touch</p>
        </div>
        
    
    </div>
    </div>
  );
}

export default FooterWithLinks