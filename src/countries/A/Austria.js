import React from "react";

import Header from "../../components/Header";
import Article from "../../components/Article";
import Features from "../../components/Features";
import Fact from "../../components/Fact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import Message from "../../components/Message";
import { Helmet } from "react-helmet";
import at from "../../img/A/at.svg";
const Austria = () => {
  return (
    <>
      <Helmet>
        <title>Austria : BirthPlace Of Adolf Hitler</title>
        <meta
          name="description"
          content="Austria is birthplace of several influencial 
          musical figures including,Mozart, Haydn, Schubert, 
          Mahler and many more."
        />
        <meta name="keyboard" content="Austria, Europe, Vienna, Adolf Hitler" />
        <link rel="icon" href={at} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/azerbaijan" country="Azerbaijan" />

      {/* header */}
      <Header header='Austria : BirthPlace Of "Adolf Hitler"' />

      {/* article  */}
      <Article flag={at} />

      {/* features */}
      <Features
        capital="Vienna"
        area="83,879 km²"
        population="8,935,112 (2020)"
        continent="Europe"
        hdi="0.922"
        currency="Euro"
        language="Deutsch"
        religion="Christianity(69.0%)"
        literacy="98%(2020)"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
      Austria is birthplace of several influencial musical
      figures including, Mozart, Haydn, Schubert, Mahler,
      Czerny, Liszt ( then Hungary; now located in Raiding,
      Austria ), Kriesler and many more."
        page="/azerbaijan"
        country="Azerbaijan"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/azerbaijan"
        two="/germany"
        three="/slovakia"
        four="/hungary"
        con1="Azerbaijan"
        con2="Germany"
        con3="Slovakia"
        con4="Hungary"
      />
    </>
  );
};

export default Austria;
