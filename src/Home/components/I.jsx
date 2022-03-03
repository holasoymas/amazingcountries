import React from "react";
import { NavLink } from "react-router-dom";

const I = () => {
  return (
    <>
      <div className="i_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>I</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/iceland">Iceland</NavLink>
          </li>
          <li>
            <NavLink to="/india">India</NavLink>
          </li>
          <li>
            <NavLink to="/indonesia">Indonesia</NavLink>
          </li>
          <li>
            <NavLink to="/iran">Iran</NavLink>
          </li>
          <li>
            <NavLink to="/iraq">Iraq</NavLink>
          </li>
          <li>
            <NavLink to="/ireland">Ireland</NavLink>
          </li>
          <li>
            <NavLink to="/isreal">Isreal</NavLink>
          </li>
          <li>
            <NavLink to="/italy">Italy</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default I;
