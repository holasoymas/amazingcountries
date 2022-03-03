import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ge from "../../img/G/ge.svg";

const Georgia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Georgia : Country With The Europe's Highest Human Settlement
        </title>
        <meta
          name="description"
          content="Georgia has almost every type of climate, from subtropical and
 alpine to semi-desert, but its land is also conducive to
  agriculture, with 49 different types of soil."
        />
        <meta
          name="keyboard"
          content="georgia, tibilisi, Country With The Europe's Highest Human Settlement"
        />
        <link rel="icon" href={ge} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/germany" country="Germany" />

      {/* header */}
      <Header header="Georgia : Country With The Europe's Highest Human Settlement" />

      {/* article  */}
      <Article flag={ge} />

      {/* features */}
      <Features
        capital="Tbilisi"
        area="69,700  km²"
        population="3,716,858 (2020)"
        continent="Europe,Asia"
        hdi="0.812"
        currency="Georgian lari"
        language="Georgian"
        religion="Christianity(88.1%)"
        literacy="63.9%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
Georgia has almost every type of climate, from subtropical and
 alpine to semi-desert, but its land is also conducive to
  agriculture, with 49 different types of soil. This makes the
   Georgian biosphere one of the most ecologically diverse on
    earth. Though a wide variety of species can be found all 
    over the country, dense forests cover 43% and are populated
     by animals such as lynxes, bears and a small number of
      leopards."
        page="/germany"
        country="Germany"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/germany"
        two="/russia"
        three="/armenia"
        four="/azerbaijan"
        con1="Germany"
        con2="Russia"
        con3="Armenia"
        con4="Azerbaijan"
      />
    </>
  );
};

export default Georgia;
