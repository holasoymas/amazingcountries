import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import lt from "../../img/L/lt.svg";

const Lithuania = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Lithuania : The Last Country In Europe To Adopt Christianity
        </title>
        <meta
          name="description"
          content="Lithuania was the last nation in Europe to adopt Christianity
 in 1387. That’s almost 1000 years after the official
  conversion of the Roman Empire."
        />
        <meta
          name="keyboard"
          content="
               Lithuania, Vilnius, europe, Last Country In Europe To Adopt Christianity"
        />
        <link rel="icon" href={lt} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/luxembourg" country="Luxembourg" />

      {/* header */}
      <Header header="Lithuania : The Last Country In Europe To Adopt Christianity" />
      {/* article  */}
      <Article flag={lt} />

      {/* features */}
      <Features
        capital="Vilnius"
        area="65,300 km²"
        population="2,784,279 (2021)"
        continent="Europe"
        hdi="0.822"
        currency="Euro"
        language="Lithuanian"
        religion="Christianity(93%)"
        literacy="99.8%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Lithuania was the last nation in Europe to adopt Christianity
 in 1387. That’s almost 1000 years after the official
  conversion of the Roman Empire. Prior to that time,
   Lithuanians primarily practised Romuva, an indigenous pagan
    religion. Today an overwhelming amount of Lithuania 
    identifies as Christian, however, many pagan traditions 
    are still in place with many younger Lithuanians looking
     to revive their roots.
"
        page="/luxembourg"
        country="Luxembourg"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/luxembourg"
        two="/poland"
        three="/russia"
        four="/belarus"
        con1="Luxembourg"
        con2="Poland"
        con3="Russia"
        con4="Belarus"
      />
    </>
  );
};

export default Lithuania;
