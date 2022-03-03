import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import sk from "../../img/S/sk.svg";

const Slovakia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Slovakia : Only Capital In The World That Borders Two Countries
          ("Bratislava")
        </title>
        <meta
          name="description"
          content="It has the highest wooden altar in the world. The wooden 
structure reaches almost 19 metres high and 6 metres wide,
 made without a single nail."
        />
        <meta
          name="keyboard"
          content="
          Slovakia, Only Capital That Borders Two Countries, Bratislava
          "
        />
        <link rel="icon" href={sk} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/slovenia" country="Slovenia" />

      {/* header */}
      <Header
        header='
          Slovakia : Only Capital In The World That Borders Two Countries ("Bratislava")
      '
      />

      {/* article  */}
      <Article flag={sk} />

      {/* features */}
      <Features
        capital="Bratislava"
        area="49,035 km²"
        population="5,464,060 (2020)"
        continent="Europe"
        hdi="0.860"
        currency="Euro"
        language="Slovak"
        religion="Christianity(75.9%)"
        literacy="99.6%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
It has the highest wooden altar in the world. The wooden 
structure reaches almost 19 metres high and 6 metres wide,
 made without a single nail. The altar of St. Jakub, created
  by Master Paul, is located in the Church of St. James in 
  Levoča. The entire town became a Unesco World Heritage Site
   in 1993.
"
        page="/slovenia"
        country="Slovenia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/slovenia"
        two="/poland"
        three="/hungary"
        four="/austria"
        con1="Slovenia"
        con2="Poland"
        con3="Hungary"
        con4="Austria"
      />
    </>
  );
};

export default Slovakia;
