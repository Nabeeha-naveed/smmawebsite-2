import React from 'react'
import "./main.css"
import Cards from "../../components/content/Cards"
import adIMG from "../../assets/adCreating.jpg"
import modelingIMG from "../../assets/modeling.jpg"
import devolapmentIMG from "../../assets/webDevolapment.jpg"

export default function Main() {
  return (
    <div className='main'>
      <Cards
        img= {adIMG}
        title= "Creating Ads" 
      />

      <Cards
        img= {modelingIMG}
        title= "Modeling" 
      />

      <Cards
        img= {devolapmentIMG}
        title= "WEB Development" 
      />
    </div>
  )
}
