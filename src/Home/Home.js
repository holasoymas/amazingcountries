import React from "react";
import Header from "../components/Navbar";
import { NavLink } from "react-router-dom";
import "./Home.css";
import { Helmet } from "react-helmet";
import Countries from "./Countries";
import earth from "./earth.ico";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page | My Amazing Country</title>
        <meta
          name="description"
          content="Know the amazing information of different countries and 
          increase you General Knowledge. In this website you will know amazing
          facts about every country."
        />
        <meta
          name="keyboard"
          content="my amazing country, USA, China, Russia, Countries facts"
        />
        <link rel="icon" href={earth} />
      </Helmet>

      {/* Header Part */}
      <Header page="/afghanistan" country="Afghanistan" />

      {/* body Part */}
      <div className="home_container">
        <header>
          <h1>Do Come And Visit </h1>
        </header>

        <section className="home">
          <div className="home_countries">
            <Countries />
          </div>
        </section>
      </div>

      {/* Footer Part */}
      <footer>
        <div className="one">
          <div id="topic">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <h1>
                <span>
                  {/* <PublicIcon className="svg_icons2" /> */}
                  {/* {af} */}
                  &nbsp;&nbsp;
                </span>
                <span id="topic1">Amazing</span>Country
              </h1>
            </NavLink>
          </div>
        </div>
        <div className="two">
          <h1>Some Countries</h1>
          <ul>
            <li>
              <NavLink to="/afghanistan">Afghanistan</NavLink>
            </li>
            <li>
              <NavLink to="/china">China</NavLink>
            </li>
            <li>
              <NavLink to="/germany">Germany</NavLink>
            </li>
            <li>
              <NavLink to="/usa">USA</NavLink>
            </li>
            {/* <li>
              <NavLink to="/community">Community</NavLink>
            </li> */}
          </ul>
        </div>
        <div className="three">
          <NavLink to="/afghanistan">
            <button className="btn">Afghanistan</button>
          </NavLink>
          <p>© A.Countries || All right reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
