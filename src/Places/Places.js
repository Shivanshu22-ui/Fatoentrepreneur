import React from "react";
import Footer from "../Footer/Footer";
import DropDownNav from "./DropDownNav";
import "./Places.css";
import { PlacesCards } from "../Cards/Cards";

function Places() {
  return (
    <div className="places">
      <div className="placesCards d-flex flex-wrap justify-content-center align-items-center">
        <PlacesCards />
        <PlacesCards />
        <PlacesCards />
        <PlacesCards />
        <PlacesCards />
        <PlacesCards />
      </div>

      <DropDownNav />
      <Footer />
    </div>
  );
}

export default Places;
