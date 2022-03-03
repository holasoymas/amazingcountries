import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import southafr from "../../img/S/southafr.svg";

const SouthAfrica = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>South Africa : Largest Meat Producing Country In Africa</title>
        <meta
          name="description"
          content="The world's largest known diamond was discovered in 1905
 at the Premier Mine near Pretoria. The size: 3,106 carats
  and roughly 1.3 pounds."
        />
        <meta
          name="keyboard"
          content="
           South Africa, Pretoria, CapeTown, Largest Meat Producing Country In Africa"
        />
        <link rel="icon" href={southafr} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/south-korea" country="South Korea" />

      {/* header */}
      <Header header="South Africa : Largest Meat Producing Country In Africa" />

      {/* article  */}
      <Article flag={southafr} />

      {/* features */}
      <Features
        capital="Pretoria,CapeTown"
        area="1,221,037 km²"
        population="60,142,978 (2021)"
        continent="Africa"
        hdi="0.709"
        currency="South African rand"
        language="Afrikaans,English"
        religion="Christianity(78%)"
        literacy="94.4%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The world's largest known diamond was discovered in 1905
 at the Premier Mine near Pretoria. The size: 3,106 carats
  and roughly 1.3 pounds.
"
        page="/south-korea"
        country="South Korea"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/south-korea"
        two="/botswana"
        three="/zimbabwe"
        four="/namibia"
        con1="South Korea"
        con2="Botswana"
        con3="Zimbabwe"
        con4="Namibia"
      />
    </>
  );
};

export default SouthAfrica;
