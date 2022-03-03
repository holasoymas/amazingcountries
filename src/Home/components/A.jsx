import React from "react";
import { NavLink } from "react-router-dom";

const A = () => {
  return (
    <>
      <div className="a_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>A</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/afghanistan">Afghanistan</NavLink>
          </li>
          <li>
            <NavLink to="/albania">Albania</NavLink>
          </li>
          <li>
            <NavLink to="/algeria">Algeria</NavLink>
          </li>
          <li>
            <NavLink to="/andorra">Andorra</NavLink>
          </li>
          <li>
            <NavLink to="/angola">Angola</NavLink>
          </li>
          <li>
            <NavLink to="/antigua-and-barbuda">Antigua & Barbuda</NavLink>
          </li>
          <li>
            <NavLink to="/argentina">Argentina</NavLink>
          </li>
          <li>
            <NavLink to="/armenia">Armenia</NavLink>
          </li>
          <li>
            <NavLink to="/australia">Australia</NavLink>
          </li>
          <li>
            <NavLink to="/austria">Austria</NavLink>
          </li>
          <li>
            <NavLink to="/azerbijan">Azerbijan</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default A;
