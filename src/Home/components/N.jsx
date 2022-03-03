import React from "react";
import { NavLink } from "react-router-dom";

const N = () => {
  return (
    <>
      <div className="n_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>N</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/namibia">Namibia</NavLink>
          </li>
          <li>
            <NavLink to="/nauru">Nauru</NavLink>
          </li>
          <li>
            <NavLink to="/nepal">Nepal</NavLink>
          </li>
          <li>
            <NavLink to="/netherlands">Netherlands</NavLink>
          </li>
          <li>
            <NavLink to="/new-zealand">New Zealand</NavLink>
          </li>
          <li>
            <NavLink to="/nicaragua">Nicaragua</NavLink>
          </li>
          <li>
            <NavLink to="/niger">Niger</NavLink>
          </li>
          <li>
            <NavLink to="/nigeria">Nigeria</NavLink>
          </li>
          <li>
            <NavLink to="/north-korea">North Korea</NavLink>
          </li>
          <li>
            <NavLink to="/north-macedonia">North Macedonia</NavLink>
          </li>
          <li>
            <NavLink to="/norway">Norway</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default N;
