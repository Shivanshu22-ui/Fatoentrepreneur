import React, { Component }  from 'react'
import "./ClientSec.css"
import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import {ClientCards} from "../Cards/Cards"
import { Carousel } from '@trendyol-js/react-carousel';
// import Carousel from 'carousel-react-rcdev'

function clientsec() {
  return (
<>
<h2 className='text-center' >What people say about us</h2>
      <div className="d-flex justify-content-center align-items-center"> 
      
      <div className='clientsCarousel'>
        <Carousel  show={3} slide={1} swiping={true} className="d-flex justify-content-center align-items-center">
        <ClientCards/>         
        <ClientCards/>         
        <ClientCards/>         
        <ClientCards/>         
            
        </Carousel>
    </div>
    </div>
    </>
  )
}

export default clientsec;