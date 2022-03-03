import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import bw from "../../img/B/bw.svg";

const Botswana = () => {
  return (
    <>
      <Helmet>
        <title>Botswana : World’s Second Largest Producer Of Diamonds</title>
        <meta
          name="description"
          content="  Botswana is home to the world’s largest concentration of
       African elephants, of which the highest concentration is
        found in Chobe National Park."
        />
        <meta
          name="keyboard"
          content="botswana, Gaborone, Africa, world’s second largest producer of diamonds"
        />
        <link rel="icon" href={bw} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/brazil" country="Brazil" />

      {/* header */}
      <Header header="Botswana : World’s Second Largest Producer Of Diamonds" />

      {/* article  */}
      <Article flag={bw} />

      {/* features */}
      <Features
        capital="Gaborone"
        area=" 581,730 km²"
        population="2,254,068 (2018)"
        continent="Africa"
        hdi="0.735"
        currency=" Botswana pula"
        language="English,Setswana"
        religion="Christianity(73%)"
        literacy="88%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
      Botswana is home to the world’s largest concentration of
       African elephants, of which the highest concentration is
        found in Chobe National Park. An estimate of almost 
        130,000 elephants are in Botswana.
"
        page="/brazil"
        country="Brazil"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/brazil"
        two="/namibia"
        three="/zambia"
        four="/zimbabwe"
        con1="Brazil"
        con2="Namibia"
        con3="Zambia"
        con4="Zimbabwe"
      />
    </>
  );
};

export default Botswana;
