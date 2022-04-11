import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container-fluid sticky-top navBar">
        <div className=" d-flex flex-wrap justify-content-center">
          <div className="col-2 d-flex flex-wrap justify-content-center">
            <img className="logo p-3 mt-2" src={logo} alt="" />
            <h6 className="logo-text pt-4">Layover City</h6>
          </div>
          <div className="navItems col-7 pt-2">
            <ul className="d-flex flex-wrap justify-content-center align-items-center">
              <li className="m-2 p-2">
                <Link to="/"> Home</Link>
              </li>
              <li className="m-2 p-2">
                <Link to="/Places"> Places</Link>
              </li>
              <li className="m-2 p-2">
                <Link to="/Stories"> Stories</Link>
              </li>
              <li className="m-2 p-2">
                <Link to="/AboutUs"> About Us</Link>
              </li>
              <li className="m-2 p-2 pl-2">
                <Link to="/ContactUs"> Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-3 pt-1 d-flex flex-wrap justify-content-center align-items-center">
            <li className="m-2 p-2">
              <Link to="/Login"> LogIn/SignUp</Link>
            </li>
            <button>Add Places/Story</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
