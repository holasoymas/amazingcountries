import React from "react";
import { NavLink } from "react-router-dom";

const Q = () => {
  return (
    <>
      <div className="q_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>Q</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/qatar">Quatar</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Q;
