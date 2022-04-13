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
  const list = []
  for (let index = 0; index < props.stars; index++) {
    list.push(<span className="fa fa-star checked"></span>)
  };
  console.log(list);
  return (
    <div className="placesCard">
      <div className="imgDetails">
        <img
          src={props.image}
          alt=""
        />
      </div>
      <div className="placeCardsDetails">
        <h3>{props.name}</h3>
        <div className="placeInfo d-flex align-items-center justify-content-start">
          <p>{props.type}</p>
          <div className="placesStarRating mx-2">
            {/* {{list}} */}
          {/* <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span> */}
          </div>
          <span className="placeCardRating mx-2 mt-1" >   <span className="numberOfReview mx-2">({props.reviews} Reviews)</span> </span>
        </div>
      </div>
    </div>
  );
};

// export default Cards;
export { PopularCityCards, PlacesCards };
