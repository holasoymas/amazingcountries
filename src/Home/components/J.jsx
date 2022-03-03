import React from "react";
import { NavLink } from "react-router-dom";

const J = () => {
  return (
    <>
      <div className="j_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>J</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/jamaica">Jamaica</NavLink>
          </li>
          <li>
            <NavLink to="/japan">Japan</NavLink>
          </li>
          <li>
            <NavLink to="/jordan">Jordan</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default J;
