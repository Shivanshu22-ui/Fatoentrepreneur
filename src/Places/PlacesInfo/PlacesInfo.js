import React from 'react'
import "./PLacesInfo.css"
import PlacesInfoHero from './PlacesInfoHero'
import PlaceContentMain from './PlaceContentMain'
import Footer from '../../Footer/Footer'

function PlacesInfo() {
    

  return (
    <div className='container-fluid p-0'>
      <div className="placesInfo">

     <PlacesInfoHero/>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L40,96C80,128,160,192,240,192C320,192,400,128,480,122.7C560,117,640,171,720,165.3C800,160,880,96,960,69.3C1040,43,1120,53,1200,80C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      </div>
      <PlaceContentMain/>
      <Footer/>
    </div>
  )
}

export default PlacesInfo