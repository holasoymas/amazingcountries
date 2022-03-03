import React from "react";
import { NavLink } from "react-router-dom";

const G = () => {
  return (
    <>
      <div className="g_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>G</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/gabon">Gabon</NavLink>
          </li>
          <li>
            <NavLink to="/gambia">Gambia</NavLink>
          </li>
          <li>
            <NavLink to="/georgia">Georgia</NavLink>
          </li>
          <li>
            <NavLink to="/germany">Germany</NavLink>
          </li>
          <li>
            <NavLink to="/ghana">Ghana</NavLink>
          </li>
          <li>
            <NavLink to="/greece">Greece</NavLink>
          </li>
          <li>
            <NavLink to="/grenada">Grenada</NavLink>
          </li>
          <li>
            <NavLink to="/guatemala">Guatemala</NavLink>
          </li>
          <li>
            <NavLink to="/guinea">Guinea</NavLink>
          </li>
          <li>
            <NavLink to="/guinea-bissau">Guinea Bissau</NavLink>
          </li>
          <li>
            <NavLink to="/guyana">Guyana</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default G;
