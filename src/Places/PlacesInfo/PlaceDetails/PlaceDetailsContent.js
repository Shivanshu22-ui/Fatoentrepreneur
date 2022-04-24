import React from "react";
import "./PlaceDetailsContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "react-bootstrap/Accordion";
import { PlacesCards } from "../../../Cards/Cards";


function PlaceDetailsContent() {
  return (
    <div className="container placeDetailsContent">
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
      <hr />
      <div className="placeServices d-flex">
        <li className="d-flex flex-column justify-content-center align-items-center mx-4">
          <i class="fa-solid fa-car my-2"></i>
          <p className="my-2"> Car Parking</p>
        </li>
        <li className="d-flex flex-column justify-content-center align-items-center mx-4">
          <i class="fa-brands fa-cc-mastercard my-2"></i>
          <p className="my-2">Credit Cards</p>
        </li>
        <li className="d-flex flex-column justify-content-center align-items-center mx-4">
          <i class="fa-solid fa-calendar-days my-2"></i>
          <p className="my-2">Reservations</p>
        </li>
        <li className="d-flex flex-column justify-content-center align-items-center mx-4">
          <i class="fa-solid fa-wifi my-2"></i>
          <p className="my-2"> Wifi</p>
        </li>
      </div>
      <hr />
      <div className="showHideText">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
          quisquam, consectetur, fugit, quae eos odit asperiores fugiat nostrum
          numquam distinctio enim debitis cumque temporibus animi dolores autem
          consequatur maiores neque aliquid tenetur. Consectetur, quasi cum.
        </p>
        .
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
          quisquam, consectetur, fugit, quae eos odit asperiores fugiat nostrum
          numquam distinctio enim debitis cumque temporibus animi dolores autem
          consequatur maiores neque aliquid tenetur. Consectetur, quasi cum.
        </p>
        .<p className="star-review">Show more</p>
      </div>

      <hr />
      <div className="accordion">
        <Accordion>
          <Accordion.Item eventKey="0" className="my-4">
            <Accordion.Header >What it is like to have your first date in this place?</Accordion.Header>
            <Accordion.Body>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="my-4">
            <Accordion.Header>How is this business operating during COVID-19?</Accordion.Header>
            <Accordion.Body>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="similarPlaces">

      </div>
    </div>
  );
}

export default PlaceDetailsContent;
