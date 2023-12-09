import React from 'react'
import "./footer.css"
import footerLogo from "../../assets/Untitled_design-removebg-preview (2).png"


export default function Footer() {
  return (
    <div className='footer'>
      <img src={footerLogo} alt="main logo which says universal m." className='footer-img'/>
    </div>
  )
}
