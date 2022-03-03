import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import nr from "../../img/N/nr.svg";

const Nauru = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nauru : Smallest Island Nation In The World</title>
        <meta
          name="description"
          content="Nauru was once the world’s richest country. So rich were
 Nauru’s phosphate reserves that for a brief period in the
  Sixties it had the highest per capita GDP in the world."
        />
        <meta
          name="keyboard"
          content="Nauru, yaren, oceania, Smallest Island Nation In The World"
        />
        <link rel="icon" href={nr} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/nepal" country="Nepal" />

      {/* header */}
      <Header header="Nauru : Smallest Island Nation In The World" />

      {/* article  */}
      <Article flag={nr} />

      {/* features */}
      <Features
        capital="Yaren"
        area="825,615 km²"
        population="10,670 (2018)"
        continent="Oceania"
        hdi="-"
        currency="Australian Dollar"
        language="Nauruan,English"
        religion="Nauru Congregational(35.7%)"
        literacy="96.5%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Nauru was once the world’s richest country. So rich were
 Nauru’s phosphate reserves that for a brief period in the
  Sixties it had the highest per capita GDP in the world.
"
        page="/nepal"
        country="Nepal"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/nepal"
        two="/kiribati"
        three="/papua-new-guinea"
        four="/micronesia"
        con1="Nepal"
        con2="Kiribati"
        con3="Papua New Guinea"
        con4="Micronesia"
      />
    </>
  );
};

export default Nauru;
