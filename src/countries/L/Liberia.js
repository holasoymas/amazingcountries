import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import lr from "../../img/L/lr.svg";

const Liberia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Liberia : First African Country To Have A Female President
        </title>
        <meta
          name="description"
          content="It was created for freed slaves. The American Colonization
 Society founded Liberia in 1821 as a place for free African
  Americans to migrate to. More than 10,000 made the journey
   across the Atlantic."
        />
        <meta
          name="keyboard"
          content="
             Liberia, Monrovia, First African Country To Have A Female President"
        />
        <link rel="icon" href={lr} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/libya" country="Libya" />

      {/* header */}
      <Header header="Liberia : First African Country To Have A Female President" />
      {/* article  */}
      <Article flag={lr} />

      {/* features */}
      <Features
        capital="Monrovia"
        area="111,369 km²"
        population="5,214,030 (2021)"
        continent="Africa"
        hdi="0.480"
        currency="Liberian Dollar"
        language="English"
        religion="Christianity(86.2%)"
        literacy="48.3%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
It was created for freed slaves. The American Colonization
 Society founded Liberia in 1821 as a place for free African
  Americans to migrate to. More than 10,000 made the journey
   across the Atlantic, aided by the society, until Liberia
    declared independence in 1847. Joseph Jenkins Roberts, a
     freed slave from Virginia, became the first president.
"
        page="/libya"
        country="Libya"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/libya"
        two="/sierra-leone"
        three="/cotedivoire"
        four="/guinea"
        con1="Libya"
        con2="Sierra Leone"
        con3="Côte d'Ivoire"
        con4="Guinea"
      />
    </>
  );
};

export default Liberia;
