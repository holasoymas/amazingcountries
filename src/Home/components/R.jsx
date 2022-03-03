import React from "react";
import { NavLink } from "react-router-dom";

const R = () => {
  return (
    <>
      <div className="r_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>R</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/romania">Romania</NavLink>
          </li>
          <li>
            <NavLink to="/russia">Russia</NavLink>
          </li>
          <li>
            <NavLink to="/rwanda">Rwanda</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default R;
