import React from 'react'
import Services from './Services';
import PopularCity from './PopularCity'
import "./HomePage.css"
import bgimage from "./hero.png"

function Homepage() {
  return (
    <div className='container-fluid overflow-x-hidden'>
      <div className="home px-5  ">
      <div className="herobgImage  d-flex align-items-center justify-content-center ">
        <img src={bgimage} alt="" />
      </div>
      <div className="content d-flex align-items-center justify-content-center">
        <div className="title text-center px-4">
          <h1>Discover the world through the eyes of flight crew members.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
            tenetur!
          </p>
        </div>
        </div>
      
      </div>
      <Services/>
      <PopularCity/>
    </div>
  )
}

export default Homepage