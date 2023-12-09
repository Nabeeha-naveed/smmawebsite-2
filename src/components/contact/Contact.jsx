import React from 'react'
import "./contact.css"
import img1 from "../../assets/instagram.png"
import img2 from "../../assets/facebook-removebg-preview.png"
import img3 from "../../assets/twitter.png"
import rightIMG1 from "../../assets/location_on_FILL0_wght400_GRAD0_opsz24.svg"
import rightIMG2 from "../../assets/mail_FILL0_wght400_GRAD0_opsz24.svg"
import rightIMG3 from "../../assets/call_FILL0_wght400_GRAD0_opsz24.svg"

export default function Contact() {
  return (
    <div className='Maincontact'>
      <div className="contact-container">
        <div className="contact-left">
          <h3 className="contact-logo-head contact-left-head">Universe</h3>
          <h3 className="contact-logo-head contact-left-head">M.</h3>
          <p className="contact-left-text">Social Media Marketing Agency</p>
          <div className="contactLeftSVGS">
            <div className="contact-left contact-left-insta">
              <img src={img1} alt="logo" className='left-contact-img'/>
            </div>
            <div className="contact-left contact-left-facebook">
              <img src={img2} alt="logo" className='left-contact-img'/>
            </div>
            <div className="contact-left contact-left-twitter">
              <img src={img3} alt="logo" className='left-contact-img'/>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h3 className="contact-right-head">Contact Us</h3>
          <div className="contact-right-container contact-right-locationContainer">
            <div className="right-svg contact-right-location">
              <img src={rightIMG1} alt="" className="right-img" />
            </div>
            <p className="right-svg-text contact-right-location-head">Location</p>
          </div>
          <p className="rightText locationText">Turkey,Istanbul,yakuplu OsmanGazi street82</p>

          <div className="contact-right-container contact-right-EmailContainer">
            <div className="right-svg contact-right-Email">
              <img src={rightIMG2} alt="" className="right-img" />
            </div>
            <p className="right-svg-text contact-right-Email-head">Email</p>
          </div>
          <p className="rightText EmailText">agency.universe.media@gmail.com</p>
          <div className="contact-right-container contact-right-PhoneContainer">
            <div className="right-svg contact-right-Phone">
              <img src={rightIMG3} alt="" className="right-img" />
            </div>
            <p className="right-svg-text contact-right-Phone-head">Phone</p>
          </div>
          <p className="rightText PhoneText">+90 531 454 76 27</p>
        </div>
      </div>
    </div>
  )
}
