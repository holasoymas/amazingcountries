import React from "react";
import { NavLink } from "react-router-dom";

const F = () => {
  return (
    <>
      <div className="f_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>F</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/fiji">Fiji</NavLink>
          </li>
          <li>
            <NavLink to="/finland">Finland</NavLink>
          </li>
          <li>
            <NavLink to="/france">France</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default F;
