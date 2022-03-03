import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ad from "../../img/A/ad.svg";

const Andorra = () => {
  return (
    <>
      <Helmet>
        <title>
          Andorra : Capital With The Highest Altitude In Europe ( 1,023m )
        </title>
        <meta
          name="description"
          content=" Andorra is worlds only co-principality, meaning Andorra 
        is ruled two princes. Surprisingly, neither of them are from
         Andorra."
        />
        <meta
          name="keyboard"
          content="Andorra, Andorra la Vella, capital with highest altitude in europe"
        />
        <link rel="icon" href={ad} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/angola" country="Angola" />

      {/* header */}
      <Header header="Andorra : Capital With The Highest Altitude In Europe ( 1,023m )" />

      {/* article  */}
      <Article flag={ad} />

      {/* features */}
      <Features
        capital="Andorra la Vella"
        area=" 467.63 km²"
        population="77,142 (2019)"
        continent="Europe"
        hdi="0.868"
        currency="Euro"
        language="Catalan"
        religion=" Roman Catholicism"
        literacy="100%(2020)"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
        Andorra is worlds only co-principality, meaning Andorra 
        is ruled two princes. Surprisingly, neither of them are from
         Andorra. The president of France, Emmanuel Macron and the 
         Bishop of Urgell, who is currently Joan Enric Vives Sicília 
         serve as co-princes for the country."
        page="/angola"
        country="Angola"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/angola"
        two="/france"
        three="/spain"
        four="/austria"
        con1="Angola"
        con2="France"
        con3="Spain"
        con4="Austria"
      />
    </>
  );
};

export default Andorra;
