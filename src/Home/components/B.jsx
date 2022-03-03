import React from "react";
import { NavLink } from "react-router-dom";

const B = () => {
  return (
    <>
      <div className="b_con" style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ textDecoration: "underLine" }}>
          <span style={{ color: "whiteSmoke" }}>B</span> Countries List
        </h1>
        <ol style={{ marginTop: "10px", lineHeight: "1.5" }}>
          <li>
            <NavLink to="/bahamas">Bahamas</NavLink>
          </li>
          <li>
            <NavLink to="/bahrain">Bahrain</NavLink>
          </li>
          <li>
            <NavLink to="/bangladesh">Bangladesh</NavLink>
          </li>
          <li>
            <NavLink to="/barbados">Barbados</NavLink>
          </li>
          <li>
            <NavLink to="/belarus">Belarus</NavLink>
          </li>
          <li>
            <NavLink to="/belgium">Belgium</NavLink>
          </li>
          <li>
            <NavLink to="/belize">Belize</NavLink>
          </li>
          <li>
            <NavLink to="/benin">Benin</NavLink>
          </li>
          <li>
            <NavLink to="/bulgaria">Bulgaria</NavLink>
          </li>
          <li>
            <NavLink to="/bhutan">Bhutan</NavLink>
          </li>
          <li>
            <NavLink to="/bolivia">Bolivia</NavLink>
          </li>
          <li>
            <NavLink to="/bosnia-and-herzegovina">Bosnia & Herzegovina</NavLink>
          </li>
          <li>
            <NavLink to="/botswana">Botswana</NavLink>
          </li>
          <li>
            <NavLink to="/brazil">Brazil</NavLink>
          </li>
          <li>
            <NavLink to="/brunei">Brunei</NavLink>
          </li>
          <li>
            <NavLink to="/burkina-faso">Burkina Faso</NavLink>
          </li>
          <li>
            <NavLink to="/burundi">Burundi</NavLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default B;
