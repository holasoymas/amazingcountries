import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import sl from "../../img/S/slucia.svg";

const SaintLucia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Saint Lucia : First Country In The World To Be Named After A Woman
        </title>
        <meta
          name="description"
          content="St Lucia was the first country to be named after a woman.
 One of just two countries in the world to be named after a 
 woman (Ireland was named after the Celtic goddess of fertility
  Eire)."
        />
        <meta
          name="keyboard"
          content="Saint Lucia, Castries, First Country To Be Named After Woman
          "
        />
        <link rel="icon" href={sl} />
      </Helmet>

      {/* navbar */}
      <Navbar
        page="/saint-vincent-and-the-grenadines"
        country="St. Vincent & Grenadines"
      />

      {/* header */}
      <Header
        header="
          Saint Lucia : First Country In The World To Be Named After A Woman
         "
      />
      {/* article  */}
      <Article flag={sl} />

      {/* features */}
      <Features
        capital="Castries"
        area="617 km²"
        population="184,401 (2021)"
        continent="Oceania"
        hdi="0.759"
        currency="East Caribbean dollar"
        language="English"
        religion="Christianity(90.4%)"
        literacy="90%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
St Lucia was the first country to be named after a woman.
 One of just two countries in the world to be named after a 
 woman (Ireland was named after the Celtic goddess of fertility
  Eire). St Lucia was named after Saint Lucy of Syracuse.
   Although, St Lucia is the only country to be named after
    a historical woman.
"
        page="/saint-vincent-and-the-grenadines"
        country="St. Vincent & Grenadines"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/saint-vincent-and-the-grenadines"
        two="/martinique"
        three="/haiti"
        four="/cuba"
        con1="St. Vincent & Grenadines"
        con2="Martinique"
        con3="Haiti"
        con4="Cuba"
      />
    </>
  );
};

export default SaintLucia;
