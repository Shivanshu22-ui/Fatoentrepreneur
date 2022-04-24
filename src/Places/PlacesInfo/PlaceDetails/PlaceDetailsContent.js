import React from "react";
import "./PlaceDetailsContent.css";

function PlaceDetailsContent() {
  return (
    <div className="container ">
      <div className="row placeDetailsContent">
        <div className="col-7">
          <nav className="miniNav">
            <ul className="d-flex my-4">
              <li className="mx-2">Paris</li>
              <li className="mx-2">Food & Drinks</li>
            </ul>
          </nav>
          <p className="mx-2 placeName">
            Le Servan{" "}
            <span>
              <i class="fa-regular fa-circle-check verified mx-3"></i>
            </span>
          </p>
          <div className="d-flex place-info-details">
            <p className="mx-2 star-review">
              5.0{" "}
              <span>
                <i className="fa fa-star checked mx-1"></i>
              </span>
            </p>
            <p className="mx-2">(2 reviews)</p>
            <p className="mx-4">Free</p>
            <p className="mx-4">Coffee Shop</p>
          </div>
        </div>
        <div className="col-5">
            
        </div>
      </div>
    </div>
  );
}

export default PlaceDetailsContent;
