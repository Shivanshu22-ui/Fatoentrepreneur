import React from "react";
// import { Carousel } from 'react-carousel-minimal';
import "./PlacesInfoHero.css"
import { Carousel } from "3d-react-carousal";

function PlacesInfoHero() {
  const data = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
  ];

  return (
    <div className="container">
      <div className="row placesInfoHero d-flex align-items-center justify-content-center flex-wrap">
        <div className="col-4  ">
          <div className="placeTitle">
            <h3>Welcome to </h3>
            <p>Flor</p>
          </div>
          <div className="placeSubtitle">
            <p> <span><i class="fa-solid fa-location-dot  px-2 "></i></span> Resturant</p>
          </div>
          <div className="placeContent">
              
          </div>
        </div>
        <div className="col-8 ">
          <Carousel
          className="carousel"
            slides={data}
            autoplay={true}
            interval={3000}
            style={{ width: "100vw" }}
          />
        </div>
      </div>
      
    </div>
  );
}

export default PlacesInfoHero;
