import React from "react";
import { NavLink } from "react-router-dom";

const V = () => {
  return (
    <>
      <div className="v_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>V</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/vanuatu">Vanuatu</NavLink>
          </li>
          <li>
            <NavLink to="/venezuela">Venezuela</NavLink>
          </li>
          <li>
            <NavLink to="/vietnam">Vietnam</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default V;
