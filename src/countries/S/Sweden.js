import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import se from "../../img/S/se.svg";

const Sweden = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Sweden : Country With Most Islands In The World ( 221,831 )
        </title>
        <meta
          name="description"
          content="Walking into a Stockholm metro station is said to be entering
 the “world’s longest art exhibition”, which is over 68 miles
  (110km) long."
        />
        <meta
          name="keyboard"
          content="
      Sweden, stockholm, europe, Country With Most Islands In The World 
"
        />
        <link rel="icon" href={se} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/switzerland" country="Switzerland" />

      {/* header */}
      <Header header="Sweden : Country With Most Islands In The World ( 221,831 ) " />

      {/* article  */}
      <Article flag={se} />

      {/* features */}
      <Features
        capital="Stockholm"
        area="450,295 km²"
        population="10,402,070 (2021)"
        continent="Europe"
        hdi="0.945"
        currency="Swedish krona"
        language="Swedish"
        religion="Christianity(66.8%)"
        literacy="99%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
Walking into a Stockholm metro station is said to be entering
 the “world’s longest art exhibition”, which is over 68 miles
  (110km) long. Around 90% of the stations have been decorated
   by over 150 artists in different themes and in various 
   forms, including mosaics, paintings, graffiti, installations,
    sculptures, and so on.
"
        page="/switzerland"
        country="Switzerland"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/switzerland"
        two="/finland"
        three="/norway"
        four="/denmark"
        con1="Switzerland"
        con2="Finland"
        con3="Norway"
        con4="Denmark"
      />
    </>
  );
};

export default Sweden;
