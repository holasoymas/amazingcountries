import React, { useEffect } from "react";
import "../index.css";
// import { NavLink } from "react-router-dom";

const Fact = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="fact">
        <div className="container">
          <h1>Did you know ?</h1>
          <p>{props.didYouKnow}</p>
          {/* <NavLink to={props.page}>
            <button className="btn">{props.country}</button>
          </NavLink> */}
        </div>
      </section>
    </>
  );
};

export default Fact;
