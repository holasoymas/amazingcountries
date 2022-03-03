import React from "react";
import { NavLink } from "react-router-dom";

const S = () => {
  return (
    <>
      <div className="s_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>S</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/saint-kitts-and-nevis">St. Kitts & Nevis</NavLink>
          </li>
          <li>
            <NavLink to="/saint-lucia">Saint Lucia</NavLink>
          </li>
          <li>
            <NavLink to="/saint-vincent-and-the-grenadines">
              St. Vincent & The Grenadines
            </NavLink>
          </li>
          <li>
            <NavLink to="/samoa">Samoa</NavLink>
          </li>
          <li>
            <NavLink to="/san-marino">San Marino</NavLink>
          </li>
          <li>
            <NavLink to="/sao-tome-and-principe">Sao Tome & Principe</NavLink>
          </li>
          <li>
            <NavLink to="/saudi-arabia">Saudi Arabia</NavLink>
          </li>
          <li>
            <NavLink to="/senegal">Senegal</NavLink>
          </li>
          <li>
            <NavLink to="/serbia">Serbia</NavLink>
          </li>
          <li>
            <NavLink to="/seychelles">Seychelles</NavLink>
          </li>
          <li>
            <NavLink to="/sierra-leone">Sierra Leone</NavLink>
          </li>
          <li>
            <NavLink to="/singapore">Singapore</NavLink>
          </li>
          <li>
            <NavLink to="/slovakia">Slovalia</NavLink>
          </li>
          <li>
            <NavLink to="/slovenia">Slovenia</NavLink>
          </li>
          <li>
            <NavLink to="/solomon-islands">Solomon Islands</NavLink>
          </li>
          <li>
            <NavLink to="/somalia">Somalia</NavLink>
          </li>
          <li>
            <NavLink to="/south-africa">South Africa</NavLink>
          </li>
          <li>
            <NavLink to="/south-korea">South Korea</NavLink>
          </li>
          <li>
            <NavLink to="/south-sudan">South Sudan</NavLink>
          </li>
          <li>
            <NavLink to="/spain">Spain</NavLink>
          </li>
          <li>
            <NavLink to="/sri-lanka">Sri Lanka</NavLink>
          </li>
          <li>
            <NavLink to="/sudan">Sudan</NavLink>
          </li>
          <li>
            <NavLink to="/suriname">Suriname</NavLink>
          </li>
          <li>
            <NavLink to="/sweden">Sweden</NavLink>
          </li>
          <li>
            <NavLink to="/switzerland">Switzerland</NavLink>
          </li>
          <li>
            <NavLink to="/syria">Syria</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default S;
