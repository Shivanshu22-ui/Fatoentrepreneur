import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar(porps) {
  return (
    <div className="sidebar">
      <div className="sidebar1">
      <div className="sidebarItem">
        <span className="sidebarTitle"><span className="chgedcolor"> ABOUT</span> ME</span>
        <img
          src={porps.image}
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle ">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
      </div>
    </div>
  );
}
