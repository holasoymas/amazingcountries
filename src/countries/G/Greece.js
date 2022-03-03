import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import gr from "../../img/G/gr.svg";

const Greece = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Greece : The First Country Where Democracy Was Born</title>
        <meta
          name="description"
          content="Greece ranks third in the world in olive oil production. 
The cultivation of olive in the country began in ancient
 times.some olive trees which  have been planted in the 
 thirteenth century still produce fruit."
        />
        <meta
          name="keyboard"
          content="greece, athens, europe, First Country Where Democracy Was Born"
        />
        <link rel="icon" href={gr} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/grenada" country="Grenada" />

      {/* header */}
      <Header header="Greece : The First Country Where Democracy Was Born" />

      {/* article  */}
      <Article flag={gr} />

      {/* features */}
      <Features
        capital="Athens"
        area="131,957 km²"
        population="10,718,565 (2020)"
        continent="Europe"
        hdi="0.888"
        currency="Euro"
        language="Greek"
        religion="Christianity(93%)"
        literacy="79.9%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Greece ranks third in the world in olive oil production. 
The cultivation of olive trees in the country began in ancient
 times. Indeed, some olive trees which are known to have been
  planted in the thirteenth century still produce fruit.
"
        page="/grenada"
        country="Grenada"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/grenada"
        two="/turkey"
        three="/bulgaria"
        four="/albania"
        con1="Grenada"
        con2="Turkey"
        con3="Bulgaria"
        con4="Albania"
      />
    </>
  );
};

export default Greece;
