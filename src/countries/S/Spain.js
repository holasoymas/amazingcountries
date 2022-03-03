import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import spain from "../../img/S/spain.svg";

const Spain = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Spain : Largest Olive Oil Producing Country In The World</title>
        <meta
          name="description"
          content="And any budding naturists
   out there will be pleased to know nudity is legal in Spain,
    although it’s considered inappropriate in plenty of places."
        />
        <meta
          name="keyboard"
          content="
  spain, madrid, europe, Largest Olive Oil Producing Country"
        />
        <link rel="icon" href={spain} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/sri-lanka" country="Sri Lanka" />

      {/* header */}
      <Header header="Spain : Largest Olive Oil Producing Country In The World" />

      {/* article  */}
      <Article flag={spain} />

      {/* features */}
      <Features
        capital="Madrid"
        area="505,990 km²"
        population="47,450,795"
        continent="Europe"
        hdi="0.904"
        currency="Euro"
        language="Spanish"
        religion="Christianity(58.6%)"
        literacy="98.4%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
With its Mediterranean climate of hot, dry summers and mild,
 wet winters, you might be tempted to strip off while in Spain.
  With 3,000 hours of sunshine a year, there are also few 
  better places to top up your tan. And any budding naturists
   out there will be pleased to know nudity is legal in Spain,
    although it’s considered inappropriate in plenty of places.
"
        page="/sri-lanka"
        country="Sri Lanka"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/sri-lanka"
        two="/portugal"
        three="/france"
        four="/andorra"
        con1="Sri Lanka"
        con2="Portugal"
        con3="France"
        con4="Andorra"
      />
    </>
  );
};

export default Spain;
