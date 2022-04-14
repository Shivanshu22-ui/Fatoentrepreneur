import React from "react";
import Footer from "../Footer/Footer";
import DropDownNav from "./Navbarmenu";
import "./Places.css";
import { PlacesCards } from "../Cards/Cards";
import PlacesInfo from "./PlacesInfo/PlacesInfo";

function Places() {
  const placesData = [
    {
      place: "London",
      image:
        "https://layover.city/wp-content/uploads/2019/11/Bar-Fisk__2018_Sherylleysner_Bar-Fisk_RK10280-540x480.jpg",
      type: "Resturant",
      stars: 4,
      reviews: 19277,
      name:"Flor"
    },
    {
      place: "Delhi",
      image:
        "https://layover.city/wp-content/uploads/2019/11/Flor-London-2019-1-540x480.jpg",
      type: "Sight",
      stars: 3,
      reviews: 1758,
      name:"The 9 Streets"
    },
    {
      place: "London",
      image:
        "https://layover.city/wp-content/uploads/2019/10/photo-1536918861100-77e1e6a4480d-540x480.jpeg",
      type: "Sight",
      stars: 5,
      reviews: 2064,
      name:"Bar Fisk"
    },
    {
      place: "London",
      image:
        "https://layover.city/wp-content/uploads/2019/10/Bedroom-ChilternFirehouse-London-CRHotel-540x480.jpg",
      type: "Hotel",
      stars: 4,
      reviews: 1879,
      name:"The Dylan"
    },
    {
      place: "Jaipur",
      image:
        "https://layover.city/wp-content/uploads/2019/10/pexels-photo-2372978-540x480.jpeg",
      type: "Museum",
      stars: 4,
      reviews: 879,
      name:"Van Gogh Museum"
    },
    {
      place: "Amsterdam",
      image:
        "https://layover.city/wp-content/uploads/2019/10/photo-1523475616631-f24c7e4c17ba-540x480.jpeg",
      type: "Activity",
      stars: 3,
      reviews: 19277,
      name:"Tolhuistuin"
    },
  ];
  return (
    <div className="places">
       <DropDownNav />
      <div className="placesCards d-flex flex-wrap justify-content-center align-items-center">
        {placesData.map((places, index) => {
          return <PlacesCards place = {places.place} image={places.image} type={places.type} stars={places.stars} reviews={places.reviews} name={places.name}/>;
        })}
      </div>

     
      <PlacesInfo/>
      <Footer />
    </div>
  );
}

export default Places;
