import React from "react";
import { NavLink } from "react-router-dom";

const Y = () => {
  return (
    <>
      <div className="y_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>Y</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/yemen">Yemen</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Y;
