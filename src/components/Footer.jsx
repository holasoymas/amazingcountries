import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
      <footer>
        <div className="one">
          <div id="topic">
            <h1>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <span>
                  {/* <PublicIcon className="svg_icons2" /> */}
                  &nbsp;&nbsp;
                </span>
                <span id="topic1">Aamazing.</span>Country
              </NavLink>
            </h1>
          </div>
        </div>
        <div className="two">
          <h1>Some Countries</h1>
          <ul>
            <li>
              <NavLink to={props.one}>{props.con1}</NavLink>
            </li>
            <li>
              <NavLink to={props.two}>{props.con2}</NavLink>
            </li>
            <li>
              <NavLink to={props.three}>{props.con3}</NavLink>
            </li>
            <li>
              <NavLink to={props.four}>{props.con4}</NavLink>
            </li>
            {/* <li>
              <NavLink to="/community">Community</NavLink>
            </li> */}
          </ul>
        </div>
        <div className="three">
          <NavLink to={props.one}>
            <button className="btn">{props.con1}</button>
          </NavLink>
          <p>© A.Countries || All right reserved</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
