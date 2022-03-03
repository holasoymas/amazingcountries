import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import sm from "../../img/S/sm.svg";

const SanMarino = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          San Marino : Country With More Registered Vehicles Than Its Citizens
        </title>
        <meta
          name="description"
          content="It is considered to have the oldest surviving national 
constitution in the world. The San Marino constitution was
 drafted in 1600, in Latin, and comprises a series of six 
 books."
        />
        <meta
          name="keyboard"
          content="
San Marino, Country With More Registered Vehicles Than Its Citizens"
        />
        <link rel="icon" href={sm} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/sao-tome-and-principe" country="São Tomé & Príncipe" />

      {/* header */}
      <Header header="San Marino : Country With More Registered Vehicles Than Its Citizens" />

      {/* article  */}
      <Article flag={sm} />

      {/* features */}
      <Features
        capital="San Marino"
        area="61.2 km²"
        population="33,600 (2021)"
        continent="Europe"
        hdi="0.875"
        currency="Euro"
        language="Italy"
        religion="Catholicism(97%)"
        literacy="99.1%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
It is considered to have the oldest surviving national 
constitution in the world. The San Marino constitution was
 drafted in 1600, in Latin, and comprises a series of six 
 books, referred to as The Statutes of 1600.
"
        page="/sao-tome-and-principe"
        country="São Tomé & Príncipe"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/sao-tome-and-principe"
        two="/italy"
        three="/holy-see"
        four="/spain"
        con1="São Tomé & Príncipe"
        con2="Itlay"
        con3="Holy See"
        con4="Spain"
      />
    </>
  );
};

export default SanMarino;
