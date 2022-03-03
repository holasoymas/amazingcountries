import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import it from "../../img/I/it.svg";

const Italy = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Italy : The Largest Producers Of Wine In The World</title>
        <meta
          name="description"
          content="Founded in 1088, the University of Bologna 
          in Italy is the oldest university in the actual world,
           beating Oxford Universityby a decade or so. This 
           university even coined the word “university.”"
        />
        <meta
          name="keyboard"
          content="Italy, rome, europe, Largest Producers Of Wine In The World"
        />
        <link rel="icon" href={it} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/jamaica" country="Jamaica" />

      {/* header */}
      <Header header="Italy : The Largest Producers Of Wine In The World" />

      {/* article  */}
      <Article flag={it} />

      {/* features */}
      <Features
        capital="Rome"
        area="301,340 km²"
        population="60,317,116 (2020)"
        continent="Europe"
        hdi="0.892"
        currency="Euro"
        language="Italian"
        religion="Christianity(83.%)"
        literacy="99.2%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Founded in 1088, the University of Bologna in Italy is the oldest 
university in the actual world, beating Oxford University
 by a decade or so. This university even coined the word 
 “university.” As you’d expect, today it’s still a 
 prestigious university in Italy.
"
        page="/jamaica"
        country="Jamaica"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/jamaica"
        two="/france"
        three="/switzerland"
        four="/austria"
        con1="Jamaica"
        con2="France"
        con3="Switzerland"
        con4="Austria"
      />
    </>
  );
};

export default Italy;
