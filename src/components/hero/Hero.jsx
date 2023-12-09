import React from 'react'
import "./hero.css"

export default function Hero() {
  return (
    <div className='mainhero'>
      <div className='navbar'>
        <p className="logo">Universe M.</p>

        <ul className='list'>
          <li className="listitems">Services</li>
          <li className="listitems">Contact Us</li>
          <li className="listitems">Footer</li>
        </ul>
      </div>
      <div className="hero">
        <h2 className="hero-title">Drive sales through paid ads on social media</h2>
        <p className="hero-text">We bring customers to our clients through social media marketing with a breathtaking ROI</p>
        <button className="btn">More</button>
      </div>
    </div>
  )
}
