import React from "react";
import { NavLink } from "react-router-dom";

const D = () => {
  return (
    <>
      <div className="d_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>D</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/democratic-republic-of-congo">
              Dem. Rep. of Congo
            </NavLink>
          </li>
          <li>
            <NavLink to="/denmark">Denmark</NavLink>
          </li>
          <li>
            <NavLink to="/djibouti">Djibouti</NavLink>
          </li>
          <li>
            <NavLink to="/dominica">Dominica</NavLink>
          </li>
          <li>
            <NavLink to="/dominican-republic">Dominican Republic</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default D;
