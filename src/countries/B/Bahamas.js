import React from "react";

import Header from "../../components/Header";
import Article from "../../components/Article";
import Features from "../../components/Features";
import Fact from "../../components/Fact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import Message from "../../components/Message";
import { Helmet } from "react-helmet";
import bs from "../../img/B/bs.svg";
const Bahamas = () => {
  return (
    <>
      <Helmet>
        <title>
          Bahama : Land Of World's Deepest Blue Hole (Dean's Blue Hole)
        </title>
        <meta
          name="description"
          content="  On January 17, 1977, a cold wave swept southern Florida and
       brought cold weather all the way to the Bahamas. On that day,
    for the only time in recorded history, snow fell on the city
        of Freeport on the island of Grand Bahama."
        />
        <meta
          name="keyboard"
          content="Bahamas , Nassau, 0 income tax country, Caribbean"
        />
        <link rel="icon" href={bs} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/bahrain" country="Bahrain" />

      {/* header */}
      <Header header="Bahamas : Land Of World's Deepest Blue Hole (Dean's Blue Hole)" />

      {/* article  */}
      <Article flag={bs} />

      {/* features */}
      <Features
        capital="Nassau"
        area="13,878 km²"
        population="385,637 (2018)"
        continent="North America"
        hdi="0.814"
        currency=" Bahamian Dollar"
        language="English"
        religion="Christianity(95.8%)"
        literacy="93%(2020)"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
      On January 17, 1977, a cold wave swept southern Florida and
       brought cold weather all the way to the Bahamas. On that day,
    for the only time in recorded history, snow fell on the city
        of Freeport on the island of Grand Bahama. The snow didn’t
         accumulate, but snowflakes did fall!"
        page="/bahrain"
        country="Bahrain"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/bahrain"
        two="/cuba"
        three="/haiti"
        four="/usa"
        con1="Bahrain"
        con2="Cuba"
        con3="Haiti"
        con4="USA"
      />
    </>
  );
};

export default Bahamas;
