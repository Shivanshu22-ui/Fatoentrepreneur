import React ,{ Component, useEffect } from "react";
import Footer from "../Footer/Footer";
import DropDownNav from "./Navbarmenu";
import "./Places.css";
import { PlacesCards } from "../Cards/Cards";
import PlacesInfo from "./PlacesInfo/PlacesInfo";
import { NavLink, Link } from "react-router-dom";
import {useHistory } from 'react-router-dom'

function Places () {
  const location = useHistory();

  const placesData = [
    {
      place: "London",
      image:
        "https://layover.city/wp-content/uploads/2019/11/Bar-Fisk__2018_Sherylleysner_Bar-Fisk_RK10280-540x480.jpg",
      type: "Resturant",
      stars: 4,
      reviews: 19277,
      name:"Flor",
      linkto :"/placesInfo"
    },
    {
      place: "Delhi",
      image:
        "https://layover.city/wp-content/uploads/2019/11/Flor-London-2019-1-540x480.jpg",
      type: "Sight",
      stars: 3,
      reviews: 1758,
      name:"The 9 Streets",
      linkto :"/placesInfo"
    },
    {
      place: "London",
      image:
        "https://layover.city/wp-content/uploads/2019/10/photo-1536918861100-77e1e6a4480d-540x480.jpeg",
      type: "Sight",
      stars: 5,
      reviews: 2064,
      name:"Bar Fisk",
      linkto :"/placesInfo"
    },
    {
      place: "London",
      image:
        "https://layover.city/wp-content/uploads/2019/10/Bedroom-ChilternFirehouse-London-CRHotel-540x480.jpg",
      type: "Hotel",
      stars: 4,
      reviews: 1879,
      name:"The Dylan",
      linkto :"/placesInfo"
    },
    {
      place: "Jaipur",
      image:
        "https://layover.city/wp-content/uploads/2019/10/pexels-photo-2372978-540x480.jpeg",
      type: "Museum",
      stars: 4,
      reviews: 879,
      name:"Van Gogh Museum",
      linkto :"/placesInfo"
    },
    {
      place: "Amsterdam",
      image:
        "https://layover.city/wp-content/uploads/2019/10/photo-1523475616631-f24c7e4c17ba-540x480.jpeg",
      type: "Activity",
      stars: 3,
      reviews: 19277,
      name:"Tolhuistuin",
      linkto :"/placesInfo"
    },
  ];

const getData = () => {
    fetch(
"https://fatoentrepreneur.herokuapp.com/places")
        .then((res) => res.json())
        .then((json) => {
           placesData=json.result
        })
}
// q1
getData(); 

const clickHandler = (name) => {
  location.push(`place/${name}`)
}

  return (
    <div className="places ">
       <DropDownNav />
       <h3 className=" mt-4 mx px-5 container-fluid chgedcolor" >Recommended For You</h3>
      <div className="placesCards d-flex flex-wrap justify-content-center align-items-center">
        
        <hr />
        {placesData.map((places, index) => {
          return <PlacesCards clickHandler= {() => clickHandler(places.place)} place = {places.place} image={places.image} type={places.type} stars={places.stars} reviews={places.reviews} name={places.name}/>
        })}
      </div>
       <h3 className=" my-4 mx px-5 container-fluid chgedcolor" >Nearest To You</h3>
      <div className="placesCards d-flex flex-wrap justify-content-center align-items-center">
        
        <hr />
        {placesData.map((places, index) => {
          return <PlacesCards place = {places.place} image={places.image} type={places.type} stars={places.stars} reviews={places.reviews} name={places.name}/>
        })}
      </div>

{/*      
      <PlacesInfo/> */}
      <Footer />
    </div>
  );
}

export default Places;
