import React from 'react';
import styled from "styled-components";
import "./Cards.css"

import info1 from "./info1.png";
import info2 from "./info2.png";

const PopularCityCards = (destination) => {
  return (
    <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.city}</h3>
              <span>{destination.title}</span>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                
                <span>{destination.duration}</span>
              </div>
            </div>
  )
}

// export default Cards;
export {PopularCityCards};