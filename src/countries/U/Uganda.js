import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ug from "../../img/U/ug.svg";

const Uganda = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Uganda : Country With The Highest Number Of Mountain Gorillas
        </title>
        <meta
          name="description"
          content="Uganda is home to half of the world’s remaining mountain 
gorilla population. They take conservation seriously and are 
committed to preserving populations."
        />
        <meta
          name="keyboard"
          content="
          uganda, kampala, Country With The Highest Number Of Mountain Gorillas
 "
        />

        <link rel="icon" href={ug} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/ukraine" country="Ukraine" />

      {/* header */}
      <Header
        header="
Uganda : Country With The Highest Number Of Mountain Gorillas
            "
      />

      {/* article  */}
      <Article flag={ug} />

      {/* features */}
      <Features
        capital="Kampala"
        area="241,038 km²"
        population="42,729,036 (2018)"
        continent="Africa"
        hdi="0.544"
        currency="Ugandan Shilling"
        language="English,Swahili"
        religion="Christianity(84.4%)"
        literacy="76.5%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Uganda is home to half of the world’s remaining mountain 
gorilla population. They take conservation seriously and are 
committed to preserving populations. In fact, in addition to
 preserving wildlife, Uganda has a rule that if you cut down
  one tree, you need to plan three in its place.
"
        page="/ukraine"
        country="Ukraine"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/ukraine"
        two="/kenya"
        three="/south-sudan"
        four="/rwanda"
        con1="Ukraine"
        con2="Kenya"
        con3="South Sudan"
        con4="Rwanda"
      />
    </>
  );
};

export default Uganda;
