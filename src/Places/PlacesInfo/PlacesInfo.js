import React from "react";
import "./PLacesInfo.css";
import PlacesInfoHero from "./PlacesInfoHero";
import PlaceContentMain from "./PlaceContentMain";
import PlaceInfoNav from "./PlaceInfoNav";
import Footer from "../../Footer/Footer";
import { PlacesCards } from "../../Cards/Cards";
import { NavLink, Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function PlacesInfo() {
  const placesData = [
    {
      place: "London",
      image:
        "https://layover.city/wp-content/uploads/2019/11/Bar-Fisk__2018_Sherylleysner_Bar-Fisk_RK10280-540x480.jpg",
      type: "Resturant",
      stars: 4,
      reviews: 19277,
      name: "Flor",
      linkto: "/placesInfo",
    },
    {
      place: "Delhi",
      image:
        "https://layover.city/wp-content/uploads/2019/11/Flor-London-2019-1-540x480.jpg",
      type: "Sight",
      stars: 3,
      reviews: 1758,
      name: "The 9 Streets",
      linkto: "/placesInfo",
    },
    {
      place: "London",
      image:
        "https://layover.city/wp-content/uploads/2019/10/photo-1536918861100-77e1e6a4480d-540x480.jpeg",
      type: "Sight",
      stars: 5,
      reviews: 2064,
      name: "Bar Fisk",
      linkto: "/placesInfo",
    },
    {
      place: "London",
      image:
        "https://layover.city/wp-content/uploads/2019/10/Bedroom-ChilternFirehouse-London-CRHotel-540x480.jpg",
      type: "Hotel",
      stars: 4,
      reviews: 1879,
      name: "The Dylan",
      linkto: "/placesInfo",
    },
    {
      place: "Jaipur",
      image:
        "https://layover.city/wp-content/uploads/2019/10/pexels-photo-2372978-540x480.jpeg",
      type: "Museum",
      stars: 4,
      reviews: 879,
      name: "Van Gogh Museum",
      linkto: "/placesInfo",
    },
    {
      place: "Amsterdam",
      image:
        "https://layover.city/wp-content/uploads/2019/10/photo-1523475616631-f24c7e4c17ba-540x480.jpeg",
      type: "Activity",
      stars: 3,
      reviews: 19277,
      name: "Tolhuistuin",
      linkto: "/placesInfo",
    },
    ,
    {
      place: "Delhi",
      image:
        "https://layover.city/wp-content/uploads/2019/11/Flor-London-2019-1-540x480.jpg",
      type: "Sight",
      stars: 3,
      reviews: 1758,
      name: "The 9 Streets",
      linkto: "/placesInfo",
    },
    {
      place: "London",
      image:
        "https://layover.city/wp-content/uploads/2019/10/photo-1536918861100-77e1e6a4480d-540x480.jpeg",
      type: "Sight",
      stars: 5,
      reviews: 2064,
      name: "Bar Fisk",
      linkto: "/placesInfo",
    },
    {
      place: "London",
      image:
        "https://layover.city/wp-content/uploads/2019/10/Bedroom-ChilternFirehouse-London-CRHotel-540x480.jpg",
      type: "Hotel",
      stars: 4,
      reviews: 1879,
      name: "The Dylan",
      linkto: "/placesInfo",
    },
    {
      place: "Jaipur",
      image:
        "https://layover.city/wp-content/uploads/2019/10/pexels-photo-2372978-540x480.jpeg",
      type: "Museum",
      stars: 4,
      reviews: 879,
      name: "Van Gogh Museum",
      linkto: "/placesInfo",
    }
  ];

  return (
    <div className="container-fluid p-0">
      <div className="placesInfo">
        <PlacesInfoHero />
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L40,96C80,128,160,192,240,192C320,192,400,128,480,122.7C560,117,640,171,720,165.3C800,160,880,96,960,69.3C1040,43,1120,53,1200,80C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
      </div>
      <PlaceContentMain />
      <PlaceInfoNav />
      {/* <Carousel
        // swipeable={false}
        // draggable={false}
        // showDots={true}
        // // ssr={true} // means to render carousel on server-side.
        // infinite={true}
        // autoPlaySpeed={1000}
        // keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
      >
        {placesData.map((places, index) => {
          return <Link to={places.linkto}> <PlacesCards place = {places.place} image={places.image} type={places.type} stars={places.stars} reviews={places.reviews} name={places.name}/></Link>;
        })}
      </Carousel> */}
      
       <div className="placesCards d-flex flex-wrap justify-content-between align-items-center">
        
        <hr />
        {placesData.map((places, index) => {
          return <Link to={places.linkto}> <PlacesCards place = {places.place} image={places.image} type={places.type} stars={places.stars} reviews={places.reviews} name={places.name}/></Link>;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default PlacesInfo;
