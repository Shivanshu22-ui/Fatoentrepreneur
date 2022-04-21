import React, { Component }  from 'react'
import "./ClientSec.css"
import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import {ClientCards} from "../Cards/Cards"
import { Carousel } from '@trendyol-js/react-carousel';
// import { Carousel } from "3d-react-carousal";

// import Carousel from 'carousel-react-rcdev'

function clientsec() {
  const Clientdata =[
      {
        name:"",
        img:"",
        review:""
      },
      {
        name:"",
        img:"",
        review:""
      },
      {
        name:"",
        img:"",
        review:""
      },
      {
        name:"",
        img:"",
        review:""
      },
      {
        name:"",
        img:"",
        review:""
      },
      {
        name:"",
        img:"",
        review:""
      }
  ]
  return (
   
<>
<h2 className='text-center my-5' >What people say <span className='chgedcolor'>About Us</span></h2>
      <div className="d-flex justify-content-center align-items-center my-2"> 
      
      <div className='clientsCarousel my-2 px-4'>
        <Carousel  show={3} slide={1} swiping={true} className="d-flex justify-content-center align-items-center"  >
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