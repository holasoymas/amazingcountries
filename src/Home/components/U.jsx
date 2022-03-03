import React from "react";
import { NavLink } from "react-router-dom";

const U = () => {
  return (
    <>
      <div className="u_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>U</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/uganda">Uganda</NavLink>
          </li>
          <li>
            <NavLink to="/ukraine">Ukraine</NavLink>
          </li>
          <li>
            <NavLink to="/uae">United Arab Emirates</NavLink>
          </li>
          <li>
            <NavLink to="/uk">United Kingdom</NavLink>
          </li>
          <li>
            <NavLink to="/usa">United State Of America</NavLink>
          </li>
          <li>
            <NavLink to="/uruguay">Uruguay</NavLink>
          </li>
          <li>
            <NavLink to="/uzbekistan">Uzbekistan</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default U;
