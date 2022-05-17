import React,{useState} from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function Navbar() {

  const navItems = [
    {
      it: "Home",
      li: "/",
    },
    {
      it: "Places",
      li: "/Places",
    },
    {
      it: "Stories",
      li: "/Stories",
    },
    {
      it: "About Us",
      li: "/AboutUs",
    },
    {
      it: "Contact Us",
      li: "/ContactUs",
    },
  ];

  const [active, setActive] = useState(1);
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
              {navItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={
                      active === index + 1 ? "active m-2 p-2" : "m-2 p-2"
                    }
                    onClick={()=>setActive(index + 1)}
                  >
                    <Link to={item.li}>{item.it}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-3 pt-1 d-flex flex-wrap justify-content-center align-items-center">
            <li className="m-2 p-2">
              <Link to="/Login"> LogIn/SignUp</Link>
            </li>
            <Link to="/AddPlaces">
              {" "}
              <button>Add Places/Story</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
