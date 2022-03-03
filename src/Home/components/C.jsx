import React from "react";
import { NavLink } from "react-router-dom";

const C = () => {
  return (
    <>
      <div className="c_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>C</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/cambodia">Cambodia</NavLink>
          </li>
          <li>
            <NavLink to="/cameroon">Cameroon</NavLink>
          </li>
          <li>
            <NavLink to="/canada">Canada</NavLink>
          </li>
          <li>
            <NavLink to="/capeverde">Cape Verde</NavLink>
          </li>
          <li>
            <NavLink to="/central-african-republic">Central Afr. Rep.</NavLink>
          </li>
          <li>
            <NavLink to="/chad">Chad</NavLink>
          </li>
          <li>
            <NavLink to="/chile">Chile</NavLink>
          </li>
          <li>
            <NavLink to="/china">China</NavLink>
          </li>
          <li>
            <NavLink to="/colombia">Colombia</NavLink>
          </li>
          <li>
            <NavLink to="/comoros">Comoros</NavLink>
          </li>
          <li>
            <NavLink to="/congo">Congo</NavLink>
          </li>
          <li>
            <NavLink to="/costa-rica">Costa Rica</NavLink>
          </li>
          <li>
            <NavLink to="/cotedivoire">Côte d'Ivoire</NavLink>
          </li>
          <li>
            <NavLink to="/croatia">Croatia</NavLink>
          </li>
          <li>
            <NavLink to="/cuba">Cuba</NavLink>
          </li>
          <li>
            <NavLink to="/cyprus">Cyprus</NavLink>
          </li>
          <li>
            <NavLink to="/czech-republic">Czech Republic</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default C;
