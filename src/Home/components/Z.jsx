import React from "react";
import { NavLink } from "react-router-dom";

const Z = () => {
  return (
    <>
      <div className="z_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>Z</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/zambia">Zambia</NavLink>
          </li>
          <li>
            <NavLink to="/zimbabwe">Zimbabwe</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Z;
