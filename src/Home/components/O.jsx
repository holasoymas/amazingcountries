import React from "react";
import { NavLink } from "react-router-dom";

const O = () => {
  return (
    <>
      <div className="o_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>O</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/oman">Oman</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default O;
