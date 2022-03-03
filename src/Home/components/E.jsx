import React from "react";
import { NavLink } from "react-router-dom";

const E = () => {
  return (
    <>
      <div className="e_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>E</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/ecuador">Ecuador</NavLink>
          </li>
          <li>
            <NavLink to="/egypt">Egypt</NavLink>
          </li>
          <li>
            <NavLink to="/el-salvador">El Salvador</NavLink>
          </li>
          <li>
            <NavLink to="/equatorial-guinea">Equatorial Guinea</NavLink>
          </li>
          <li>
            <NavLink to="/eritrea">Eritrea</NavLink>
          </li>
          <li>
            <NavLink to="/estonia">Estonia</NavLink>
          </li>
          <li>
            <NavLink to="/eswatini">Eswatini</NavLink>
          </li>
          <li>
            <NavLink to="/ethiopia">Ethiopia</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default E;
