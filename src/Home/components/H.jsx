import React from "react";
import { NavLink } from "react-router-dom";

const H = () => {
  return (
    <>
      <div className="h_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>H</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/haiti">Haiti</NavLink>
          </li>
          <li>
            <NavLink to="/holy-see">Holy See</NavLink>
          </li>
          <li>
            <NavLink to="/honduras">Honduras</NavLink>
          </li>
          <li>
            <NavLink to="/hungary">Hungary</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default H;
