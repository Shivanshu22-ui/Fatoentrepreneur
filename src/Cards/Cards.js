import React from "react";
import styled from "styled-components";
import "./Cards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  const list = [];
  for (let index = 0; index < props.stars; index++) {
    list.push(<span className="fa fa-star checked"></span>);
  }
  console.log(list);
  return (
    <div className="placesCard">
      <div className="imgDetails">
        <img src={props.image} alt="" />
        <div className="imageContent">
          <div className="imgtext">
            <h1> {props.name}</h1>
          </div>
          <div className="savePlace align-items-center d-flex">
          <i class="fa-solid fa-bookmark"></i>
          </div>
        </div>
      </div>
      <div className="placeCardsDetails">
        <h3>{props.place}</h3>
        <div className="placeInfo d-flex align-items-center justify-content-start">
          <p>{props.type}</p>
          <div className="placesStarRating mx-2">{list}</div>
          <span className="placeCardRating mx-2 mt-1">
            {" "}
            <span className="numberOfReview mx-4">
              ({props.reviews} Reviews)
            </span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

const ClientCards=()=>{
  return(
    <div className="clientCards">
      <div className="clientImg">
        <img src="https://media.istockphoto.com/photos/portrait-of-men-looking-at-camera-picture-id1181083533?k=20&m=1181083533&s=612x612&w=0&h=JRcWzFmJhmnTPkT0MU1gGGcax-_p4eT0M_eRXWRqxgU=" alt="" />
      </div>
      <div className="clientContent text-center">
        <div className="clientName p-2">
          <h3>Shivanshu Singh</h3>
        </div>
        <div className="clientReview">
           <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quia ducimus in placeat non ratione aspernatur ex molestiae optio vel.</p>
        </div>
      </div>
      
    </div>
  )
}


// export default Cards;
export { PopularCityCards, PlacesCards , ClientCards};
