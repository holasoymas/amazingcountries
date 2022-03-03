import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import elsalva from "../../img/E/elsalva.svg";

const ElSlavador = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>El Salvador : Smallest Country In Central America</title>
        <meta
          name="description"
          content=" El Salvador is known as the Land of Volcanoes because it has
 more than 100 volcanos. Around twenty volcanos are potentially
  active. Standing at 2,381 metres above sea level."
        />
        <meta
          name="keyboard"
          content="el salvador, san salvador, smallest Country in central america"
        />
        <link rel="icon" href={elsalva} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/equatorial-guinea" country="Equatorial Guinea" />

      {/* header */}
      <Header header="El Salvador : Smallest Country In Central America" />

      {/* article  */}
      <Article flag={elsalva} />

      {/* features */}
      <Features
        capital="San Salvador"
        area="21,041 km²"
        population="6,825,935 (2021)"
        continent="North America"
        hdi="0.673"
        currency="US Dollar"
        language="Spanish"
        religion="Christianity(84.1%)"
        literacy="89%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
 El Salvador is known as the Land of Volcanoes because it has
 more than 100 volcanos. Around twenty volcanos are potentially
  active. Standing at 2,381 metres above sea level, Santa
   Ana is the highest volcano in El Salvador. Locals call
    Volcan Santa Ana Ilamatepec or Mother Mountain.
"
        page="/equatorial-guinea"
        country="Equatorial Guinea"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/equatorial-guinea"
        two="/honduras"
        three="/guatemala"
        four="/panama"
        con1="Equatorial Guinea"
        con2="Honduras"
        con3="Guatemala"
        con4="Panama"
      />
    </>
  );
};

export default ElSlavador;
