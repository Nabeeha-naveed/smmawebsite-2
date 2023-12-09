import React from 'react'
import "./contact.css"

export default function Contact() {
  return (
    <div className='Maincontact'>
      <div className="contact-container">
        <div className="contact-left">
          <h3 className="contact-left-head">Universe</h3>
          <h3 className="contact-left-head">M.</h3>
          <p className="contact-left-text">Social Media Marketing Agency</p>
          <div className="contactLeftSVGS">
            <div className="contact-left contact-left-insta"></div>
            <div className="contact-left contact-left-facebook"></div>
            <div className="contact-left contact-left-twitter"></div>
          </div>
        </div>
        <div className="contact-right">
          <h3 className="contact-right-head">Contact Us</h3>
          <div className="contact-right-container contact-right-locationContainer">
            <div className="right-svg contact-right-location"></div>
            <p className="right-svg-text contact-right-location-head">Location</p>
          </div>
          <p className="rightText locationText">Turkey,Istanbul,yakuplu OsmanGazi street82</p>

          <div className="contact-right-container contact-right-EmailContainer">
            <div className="right-svg contact-right-Email"></div>
            <p className="right-svg-text contact-right-Email-head">Email</p>
          </div>
          <p className="rightText EmailText">agency.universe.media@gmail.com</p>
          <div className="contact-right-container contact-right-PhoneContainer">
            <div className="right-svg contact-right-Phone"></div>
            <p className="right-svg-text contact-right-Phone-head">Phone</p>
          </div>
          <p className="rightText PhoneText">+90 531 454 76 27</p>
        </div>
      </div>
    </div>
  )
}
