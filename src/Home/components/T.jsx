import React from "react";
import { NavLink } from "react-router-dom";

const T = () => {
  return (
    <>
      <div className="t_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>T</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/tajikistan">Tajikistan</NavLink>
          </li>
          <li>
            <NavLink to="/tanzania">Tanzania</NavLink>
          </li>
          <li>
            <NavLink to="/thailand">Thailand</NavLink>
          </li>
          <li>
            <NavLink to="/timor-leste">Timor-Leste</NavLink>
          </li>
          <li>
            <NavLink to="/togo">Togo</NavLink>
          </li>
          <li>
            <NavLink to="/tonga">Tonga</NavLink>
          </li>
          <li>
            <NavLink to="/trinidad-and-tobago">Trinidad & Tobago</NavLink>
          </li>
          <li>
            <NavLink to="/tunisia">Tunisia</NavLink>
          </li>
          <li>
            <NavLink to="/portugal">Portugal</NavLink>
          </li>
          <li>
            <NavLink to="/turkey">Turkey</NavLink>
          </li>
          <li>
            <NavLink to="/turkmenistan">Turkmenistan</NavLink>
          </li>
          <li>
            <NavLink to="/tuvalu">Tuvalu</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default T;
