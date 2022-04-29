import React from "react";
// import { Carousel } from 'react-carousel-minimal';
import "./PlacesInfoHero.css"
import { Carousel } from "3d-react-carousal";

function PlacesInfoHero(props) {
  const data = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
  ];

  console.log(props.city)

  return (
    <div className="container">
      <div className="row placesInfoHero d-flex align-items-center justify-content-center flex-wrap">
        <div className="col-5  ">
          <div className="placeTitle">
            <h3>{props.city.place}</h3>
            <p>{props.city.name}</p>
          </div>
          <div className="placeSubtitle">
            {/* <p> <span><i class="fa-solid fa-location-dot  px-2 "></i></span> Resturant</p> */}
          </div>
          <div className="placeContent ">
              <ul className="d-flex justify-content-between p-3 my-2">
                <li className="mx-2">
                  <div>
                    <p className="text-center"><span className="px-2"><i class="fa-solid fa-sack-dollar"></i></span> <i>Dollar</i> </p>
                    <h3 className="chgedcolor mt-2"> CURRENCY</h3>
                  </div>
                </li>
                <li className="mx-2">
                  <div>
                    <p className="text-center"><span className="px-2"><i class="fa-solid fa-language"></i></span> <i>English</i> </p>
                    <h3 className="chgedcolor mt-2"> LANGUAGE</h3>
                  </div>
                </li>
                <li className="mx-2 bline">
                  <div>
                    <p className="text-center"> <span className="px-2"><i class="fa-solid fa-calendar-days"></i></span><i>Anytime</i> </p>
                    <h3 className="chgedcolor mt-2"> BEST TIME TO VISIT
</h3>
                  </div>
                </li>
              </ul>
          </div>
        </div>
        <div className="col-7 ">
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
