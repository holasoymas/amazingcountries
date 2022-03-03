import React from "react";
import { NavLink } from "react-router-dom";

const M = () => {
  return (
    <>
      <div className="m_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>M</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/madagascar">Madagascar</NavLink>
          </li>
          <li>
            <NavLink to="/malawi">Malawi</NavLink>
          </li>
          <li>
            <NavLink to="/malaysia">Malaysia</NavLink>
          </li>
          <li>
            <NavLink to="/mali">Mali</NavLink>
          </li>
          <li>
            <NavLink to="/malta">Malta</NavLink>
          </li>
          <li>
            <NavLink to="/marshall-islands">Marshall Islands</NavLink>
          </li>
          <li>
            <NavLink to="/mauritania">Mauritania</NavLink>
          </li>
          <li>
            <NavLink to="/mauritius">Mauritius</NavLink>
          </li>
          <li>
            <NavLink to="/mexico">Mexico</NavLink>
          </li>
          <li>
            <NavLink to="/micronesia">Micronesia</NavLink>
          </li>
          <li>
            <NavLink to="/moldova">Moldova</NavLink>
          </li>
          <li>
            <NavLink to="/monaco">Monaco</NavLink>
          </li>
          <li>
            <NavLink to="/mongolia">Mongolia</NavLink>
          </li>
          <li>
            <NavLink to="/montenegro">Montenegro</NavLink>
          </li>
          <li>
            <NavLink to="/morocco">Morocco</NavLink>
          </li>
          <li>
            <NavLink to="/mozambique">Mozambique</NavLink>
          </li>
          <li>
            <NavLink to="/myanmar">Myanmar</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default M;
