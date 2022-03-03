import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ma from "../../img/M/ma.svg";

const Morocco = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Morocco : The Land Of Berbers</title>
        <meta
          name="description"
          content="The Kingdom of Morocco is also known as the Land of the
  Berbers because roughly 40% of the population are, well,
   Berbers."
        />
        <meta
          name="keyboard"
          content="Morocco, Land Of Berbers, Rabat, most visited african country"
        />
        <link rel="icon" href={ma} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/mozambique" country="Mozambique" />

      {/* header */}
      <Header header="Morocco : The Land Of Berbers" />

      {/* article  */}
      <Article flag={ma} />

      {/* features */}
      <Features
        capital="Rabat"
        area="710,850  km²"
        population="37,112,080 (2020)"
        continent="Africa"
        hdi="0.686"
        currency="Moroccan dirham"
        language="Arabic, Berber"
        religion="Christianity(99%)"
        literacy="73.75%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
 The Kingdom of Morocco is also known as the Land of the
  Berbers because roughly 40% of the population are, well,
   Berbers.Descendants of the first inhabitants of Morocco,
    the Berbers have a very colorful and nature-driven culture.
     A large chunk of them prefer to live in the harshest 
     condition possible, like the High Atlas Mountains or the
      Sahara Desert.
"
        page="/mozambique"
        country="Mozambique"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/mozambique"
        two="/algeria"
        three="/tunasia"
        four="/spain"
        con1="Mozambique"
        con2="Algeria"
        con3="Tunasia"
        con4="Spain"
      />
    </>
  );
};

export default Morocco;
