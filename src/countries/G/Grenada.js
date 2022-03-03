import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import gd from "../../img/G/gd.svg";

const Grenada = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Grenada : Country With The World's First Underwater Sculpture Park
        </title>
        <meta
          name="description"
          content="In 1651, Caribs committed mass suicide rather than surrender
 to Europeans after losing a battle. The islanders leapt off
  a cliff, now called Carib’s Leap or Leapers Hill."
        />
        <meta
          name="keyboard"
          content="grenada, st. george's,north-america, World's First Underwater Sculpture Park"
        />
        <link rel="icon" href={gd} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/guatemala" country="Guatemala" />

      {/* header */}
      <Header header="Grenada : Country With The World's First Underwater Sculpture Park" />

      {/* article  */}
      <Article flag={gd} />

      {/* features */}
      <Features
        capital="St. George's"
        area="348.5 km²"
        population="111,454 (2018)"
        continent="North America"
        hdi="0.779"
        currency="Eastern Caribbean dollar"
        language="English"
        religion="Christianity(86.4%)"
        literacy="98.6%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
In 1651, Caribs committed mass suicide rather than surrender
 to Europeans after losing a battle. The islanders leapt off
  a cliff, now called Carib’s Leap or Leapers Hill, in Grenada’s
   northernmost town of Sauteurs (French for “jumper”).
"
        page="/guatemala"
        country="Guatemala"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/guatemala"
        two="/venezuela"
        three="/trinidad-and-tobago"
        four="/colombia"
        con1="Guatemala"
        con2="Venezuela"
        con3="Trinidad & Tobago"
        con4="Colombia"
      />
    </>
  );
};

export default Grenada;
