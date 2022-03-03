import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import mn from "../../img/M/micronesia.svg";

const Micronesia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Micronesia : Wreck Driving Capital Of The World ("Chuuk")</title>
        <meta
          name="description"
          content="Micronesia occupies just a small landmass of 702 sq km, but
 the country is dispersed across an ocean expanse of nearly 
 3 million sq km, an area approximately five times the size 
 of France."
        />
        <meta
          name="keyboard"
          content="Micronesia, Palikir, Wreck Driving Capital Of The World, Chuuk"
        />
        <link rel="icon" href={mn} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/moldova" country="Moldova" />

      {/* header */}
      <Header header='Micronesia : Wreck Driving Capital Of The World ("Chuuk")' />

      {/* article  */}
      <Article flag={mn} />

      {/* features */}
      <Features
        capital="Palikir"
        area="702 km²"
        population="104,468 (2019)"
        continent="Oceania"
        hdi="0.620"
        currency="US Dollar"
        language="English"
        religion="Christianity(95.3%)"
        literacy="98.8%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Micronesia occupies just a small landmass of 702 sq km, but
 the country is dispersed across an ocean expanse of nearly 
 3 million sq km, an area approximately five times the size 
 of France.
"
        page="/moldova"
        country="Moldova"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/moldova"
        two="/palau"
        three="/papua-new-guinea"
        four="/indonesia"
        con1="Moldova"
        con2="Palau"
        con3="Papua New Guinea"
        con4="Indonesia"
      />
    </>
  );
};

export default Micronesia;
