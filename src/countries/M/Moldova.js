import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import md from "../../img/M/md.svg";

const Moldova = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Moldova : Country With Largest Underground Wine Cellar In The World
          ("Mileștii Mici")
        </title>
        <meta
          name="description"
          content="Traditionally Moldova’s biggest export market was Russia, 
which consumed up to 90 % of its wine. However, a diplomatic
 dispute in 2006 resulted in a Russian ban on Moldovan  and
 Georgian produce."
        />
        <meta
          name="keyboard"
          content=" Moldova, Chisinau, Country With Largest Underground Wine Cellar 
          ,Mileștii Mici"
        />
        <link rel="icon" href={md} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/monaco" country="Monaco" />

      {/* header */}
      <Header
        header=' Moldova : Country With Largest Underground Wine Cellar In The World
          ("Mileștii Mici")'
      />

      {/* article  */}
      <Article flag={md} />

      {/* features */}
      <Features
        capital="Chisinau"
        area="33,843.5 km²"
        population="2,597,100 (2021)"
        continent="Europe"
        hdi="0.750"
        currency="Moldovan leu"
        language="Romanian"
        religion="Christianity(91.8%)"
        literacy="99.4%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Traditionally Moldova’s biggest export market was Russia, 
which consumed up to 90 % of its wine. However, a 
diplomatic dispute in 2006 resulted in a Russian ban on 
Moldovan and Georgian produce, which has been devastating
 for its economy. Nevertheless, it remains the 20th largest
  wine-producing nation on Earth.
"
        page="/monaco"
        country="Monaco"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/monaco"
        two="/ukraine"
        three="/romania"
        four="/hungary"
        con1="Monaco"
        con2="Ukraine"
        con3="Romania"
        con4="Hungary"
      />
    </>
  );
};

export default Moldova;
