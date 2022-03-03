import React from "react";
import { NavLink } from "react-router-dom";

const K = () => {
  return (
    <>
      <div className="k_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>K</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/kazakhstan">Kazakhstan</NavLink>
          </li>
          <li>
            <NavLink to="/kenya">Kenya</NavLink>
          </li>
          <li>
            <NavLink to="/kiribati">Kiribati</NavLink>
          </li>
          <li>
            <NavLink to="/kuwait">Kuwait</NavLink>
          </li>
          <li>
            <NavLink to="/kyrgyzstan">Kyrgyzstan</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default K;
