import React from 'react'
import "./main.css"

export default function Cards(props) {
  return (
    <div className='cards'>
      <img src={props.img} alt="images of adcreating,modeling and webdevolapment" className="cards-img" />
      <p className="cards-title">{props.title}</p>
    </div>
  )
}
