import React from "react";
import "../index.css";

const Header = (props) => {
  return (
    <>
      <header>
        <div className="container">
          <h1>{props.header}</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
