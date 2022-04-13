import React from "react";
import styled from "styled-components";
import "./Cards.css";

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
  );
};

const PlacesCards = (props) => {
  return (
    <div className="placesCard">
      <div className="imgDetails">
        <img
          src="https://layover.city/wp-content/uploads/2019/11/Flor-London-2019-1-540x480.jpg"
          alt=""
        />
      </div>
      <div className="placeCardsDetails">
        <h3>Delhi</h3>
        <div className="placeInfo d-flex align-items-center justify-content-start">
          <p>Restaurants</p>
          <div className="placesStarRating mx-2">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          </div>
          <span className="placeCardRating mx-2 mt-1" >   <span className="numberOfReview mx-2">(1927 Reviews)</span> </span>
        </div>
      </div>
    </div>
  );
};

// export default Cards;
export { PopularCityCards, PlacesCards };
