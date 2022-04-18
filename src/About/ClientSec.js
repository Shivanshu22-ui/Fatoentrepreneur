import React, { Component }  from 'react'
import "./ClientSec.css"
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {ClientCards} from "../Cards/Cards"

function clientsec() {
  return (
    <div>

<ClientCards/>
        {/* <Carousel  >
         
            
        </Carousel> */}
    </div>
  )
}

export default clientsec;