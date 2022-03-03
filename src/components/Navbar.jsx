import React, { useState } from "react";
import { SideBar } from "./SideBar";
// import PublicIcon from "@material-ui/icons/Public";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import "../index.css";

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="navbar">
        <NavLink to="#" className="menu-bars">
          <MenuIcon onClick={showSidebar} />
        </NavLink>
        <div id="topic">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h1>
              <span>
                {/* <PublicIcon className="svg_icons2" /> */}
                &nbsp;&nbsp;
              </span>
              <span id="topic1">Amazing.</span>Country
            </h1>
          </NavLink>
        </div>
        <div>
          <NavLink to={props.page}>
            <button className="btn">{props.country}</button>
          </NavLink>
        </div>
      </div>
      <div className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="nabvar-toggle">
            <NavLink to="#" className="menu-bars">
              <CloseIcon />
            </NavLink>
          </li>
          {SideBar.map((item, index) => {
            return (
              <li id="sidebars" key={index} className={item.cName}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
