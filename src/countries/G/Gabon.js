import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ga from "../../img/G/ga.svg";

const Gabon = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Gabon : Home Of The World's Largest Species Of Turtle ( Leatherback
          Turtle )
        </title>
        <meta
          name="description"
          content=" In a 2004 National Geographic article, Gabon was described
  as “the land of the surfing hippos” when a photographer 
  captured hippos playing in the ocean just off the beach in
   Loango National Park."
        />
        <meta
          name="keyboard"
          content="Libreville, Gabon, Home Of World's Largest Species Of Sea Turtle"
        />
        <link rel="icon" href={ga} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/gambia" country="Gambia" />

      {/* header */}
      <Header header="Gabon : Home Of The World's Largest Species Of Turtle ( Leatherback Turtle )" />

      {/* article  */}
      <Article flag={ga} />

      {/* features */}
      <Features
        capital="Libreville"
        area="267,667 km²"
        population="2,119,275 (2018)"
        continent="Africa"
        hdi="0.703"
        currency="Central African CFA franc"
        language="French"
        religion="Christianity(82%)"
        literacy="84.7%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
 In a 2004 National Geographic article, Gabon was described
  as “the land of the surfing hippos” when a photographer 
  captured hippos playing in the ocean just off the beach in
   Loango National Park.
"
        page="/gambia"
        country="Gambia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/gambia"
        two="/equatorial-guinea"
        three="/cameroon"
        four="/congo"
        con1="Gambia"
        con2="Equatorial Guinea"
        con3="Cameroon"
        con4="Congo"
      />
    </>
  );
};

export default Gabon;
