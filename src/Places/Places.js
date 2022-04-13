import React from "react";
import Footer from "../Footer/Footer";
import DropDownNav from "./DropDownNav";
import "./Places.css";
import { PlacesCards } from "../Cards/Cards";

function Places() {
  const placesData = [
    {
      name: "London",
      image:
        "https://layover.city/wp-content/uploads/2019/11/Bar-Fisk__2018_Sherylleysner_Bar-Fisk_RK10280-540x480.jpg",
      type: "Resturant",
      stars: 4,
      reviews: 19277,
    },
    {
      name: "Delhi",
      image:
        "https://layover.city/wp-content/uploads/2019/11/Flor-London-2019-1-540x480.jpg",
      type: "Sight",
      stars: 3,
      reviews: 1758,
    },
    {
      name: "London",
      image:
        "https://layover.city/wp-content/uploads/2019/10/photo-1536918861100-77e1e6a4480d-540x480.jpeg",
      type: "Sight",
      stars: 5,
      reviews: 2064,
    },
    {
      name: "London",
      image:
        "https://layover.city/wp-content/uploads/2019/10/Bedroom-ChilternFirehouse-London-CRHotel-540x480.jpg",
      type: "Hotel",
      stars: 4,
      reviews: 1879,
    },
    {
      name: "Jaipur",
      image:
        "https://layover.city/wp-content/uploads/2019/10/pexels-photo-2372978-540x480.jpeg",
      type: "Museum",
      stars: 4,
      reviews: 879,
    },
    {
      name: "Amsterdam",
      image:
        "https://layover.city/wp-content/uploads/2019/10/photo-1523475616631-f24c7e4c17ba-540x480.jpeg",
      type: "Activity",
      stars: 3,
      reviews: 19277,
    },
  ];
  return (
    <div className="places">
      <div className="placesCards d-flex flex-wrap justify-content-center align-items-center">
        {placesData.map((places, index) => {
          return <PlacesCards name = {places.name}  />;
        })}
      </div>

      <DropDownNav />
      <Footer />
    </div>
  );
}

export default Places;
