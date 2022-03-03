import React from "react";
import { NavLink } from "react-router-dom";

const P = () => {
  return (
    <>
      <div className="p_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>P</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/pakistan">Pakistan</NavLink>
          </li>
          <li>
            <NavLink to="/palau">Palau</NavLink>
          </li>
          <li>
            <NavLink to="/palestine">Palestine</NavLink>
          </li>
          <li>
            <NavLink to="/panama">Panama</NavLink>
          </li>
          <li>
            <NavLink to="/papua-new-guinea">Papua New Guinea</NavLink>
          </li>
          <li>
            <NavLink to="/peru">Peru</NavLink>
          </li>
          <li>
            <NavLink to="/philippines">Philippines</NavLink>
          </li>
          <li>
            <NavLink to="/poland">Poland</NavLink>
          </li>
          <li>
            <NavLink to="/portugal">Portugal</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default P;
