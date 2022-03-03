import React from "react";
import { NavLink } from "react-router-dom";

const L = () => {
  return (
    <>
      <div className="l_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>L</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/laos">Laos</NavLink>
          </li>
          <li>
            <NavLink to="/latvia">Latvia</NavLink>
          </li>
          <li>
            <NavLink to="/lebanon">Lebanon</NavLink>
          </li>
          <li>
            <NavLink to="/lethoso">Lethoso</NavLink>
          </li>
          <li>
            <NavLink to="/liberia">Liberia</NavLink>
          </li>
          <li>
            <NavLink to="/liechtenstein">Liechtenstein</NavLink>
          </li>
          <li>
            <NavLink to="/lithuania">Lithuania</NavLink>
          </li>
          <li>
            <NavLink to="/luxembourg">Luxembourg</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default L;
