import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import gy from "../../img/G/gy.svg";

const Guyana = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Guyana : Only Country In South America With English As The Official
          Language
        </title>
        <meta
          name="description"
          content="According to the Worldwide Waterfall Database’s rankings of 
 the top waterfalls in the world, Guyana is home to the No. 2
  waterfall – Kaieteur Falls."
        />
        <meta
          name="keyboard"
          content="guyana, georgetown, South-America Only Country as English Official Language"
        />
        <link rel="icon" href={gy} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/haiti" country="Haiti" />

      {/* header */}
      <Header header="Guyana : Only Country In South America With English As The Official Language" />

      {/* article  */}
      <Article flag={gy} />

      {/* features */}
      <Features
        capital="Georgetown"
        area="214,970 km²"
        population="782,766 (2019)"
        continent="South America"
        hdi="0.682"
        currency="Guyanese dollar"
        language="English"
        religion="Christianity(62.7%)"
        literacy="85.6%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
According to the Worldwide Waterfall Database’s rankings of 
 the top waterfalls in the world, Guyana is home to the No. 2
  waterfall – Kaieteur Falls. This waterfall has a single drop
   of 741 feet. In comparison, Niagara Falls is 167 feet. It
    is considered to be the largest single-drop waterfall by
     volume in the world.
"
        page="/haiti"
        country="Haiti"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/haiti"
        two="/brazl"
        three="/venezuela"
        four="/suriname"
        con1="Haiti"
        con2="Brazil"
        con3="Venezuela"
        con4="Suriname"
      />
    </>
  );
};

export default Guyana;
