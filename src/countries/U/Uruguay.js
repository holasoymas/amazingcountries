import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import uy from "../../img/U/uy.svg";

const Uruguay = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Uruguay : The First Country To Win FIFA World Cup</title>
        <meta
          name="description"
          content="Pharmacies can sell cannabis to registered Uruguayan residents
 and there are cannabis clubs for those who want to home grow.
  Many companies are forming to enter the medical cannabis 
  market."
        />
        <meta
          name="keyboard"
          content="
           Uruguay, Montevideo, The First Country To Win FIFA World Cup
 "
        />

        <link rel="icon" href={uy} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/uzbekistan" country="Uzbekistan" />

      {/* header */}
      <Header header="Uruguay : The First Country To Win FIFA World Cup" />

      {/* article  */}
      <Article flag={uy} />

      {/* features */}
      <Features
        capital="Montevideo"
        area="176,215 km²"
        population="3,518,552 (2019)"
        continent="South America"
        hdi="0.817"
        currency="Uruguayan peso"
        language="Spanish"
        religion="Christianity(57%)"
        literacy="98.7%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Pharmacies can sell cannabis to registered Uruguayan residents
 and there are cannabis clubs for those who want to home grow.
  Many companies are forming to enter the medical cannabis 
  market, which could be Uruguay’s next big industry.
"
        page="/uzbekistan"
        country="Uzbekistan"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/uzbekistan"
        two="/brazil"
        three="/argentina"
        four="/paraguay"
        con1="Uzbekistan"
        con2="Brazil"
        con3="Aregntina"
        con4="Paraguay"
      />
    </>
  );
};

export default Uruguay;
