import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import zm from "../../img/Z/zm.svg";

const Zambia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Zambia : Country With The Largest Man-made Lake In The World ("Lake
          Kariba")
        </title>
        <meta
          name="description"
          content="There’s a massive man-made lake that sustains life to the
 country. Lake Kariba is the world’s biggest man-made lake 
 and is used for commercial fishing and to supply electric
 hydropower to Zambia and Zimbabwe."
        />
        <meta
          name="keyboard"
          content="
          Zambia, Lusaka, Country With The Largest Man-made Lake , Lake Kariba
 "
        />

        <link rel="icon" href={zm} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/zimbabwe" country="Zimbabwe" />

      {/* header */}
      <Header
        header='
          Zambia : Country With The Largest Man-made Lake In The World ("Lake Kariba")
'
      />

      {/* article  */}
      <Article flag={zm} />

      {/* features */}
      <Features
        capital="Lusaka"
        area="752,618 km²"
        population="17,351,708 (2018)"
        continent="Africa"
        hdi="0.584"
        currency="Zambian kwacha"
        language="English"
        religion="Christianity(95.7%)"
        literacy="55.3%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
There’s a massive man-made lake that sustains life to the
 country. Lake Kariba is the world’s biggest man-made lake 
 and is used for commercial fishing operations and to supply
  electric hydropower to Zambia and Zimbabwe.
"
        page="/zimbabwe"
        country="Zimbabwe"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/zimbabwe"
        two="/malawi"
        three="/tanzania"
        four="/mozambique"
        con1="Zimbabwe"
        con2="Malawi"
        con3="Tanzania"
        con4="Mozambique"
      />
    </>
  );
};

export default Zambia;
