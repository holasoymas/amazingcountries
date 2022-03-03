import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import nm from "../../img/N/nm.svg";

const NorthMacedonia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          North Macedonia : Birthplace Of Alexander The Great ("Pella")
        </title>
        <meta
          name="description"
          content="Among 1000s of Churches in North Macedonia, three of them 
(St. Bogodorica Prechista in Kichevo, St. Jovan Bigorski near
 Gostivar, and St. Georgji Pobedonosec in Debar) has parts of
the cross Jesus was crucified on."
        />
        <meta
          name="keyboard"
          content="north macedonia, Skopje, pella, Birthplace of alexander the great"
        />
        <link rel="icon" href={nm} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/norway" country="Norway" />

      {/* header */}
      <Header header='North Macedonia : Birthplace Of Alexander The Great ("Pella")' />

      {/* article  */}
      <Article flag={nm} />

      {/* features */}
      <Features
        capital="Skopje"
        area="25,713 km²"
        population="2,077,132 (2019)"
        continent="Europe"
        hdi="0.774"
        currency="Macedonian denar"
        language="Macedonian, Albanian"
        religion="Eastern Orthodoxy(69.6)"
        literacy="97.8%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Among 1000s of Churches in North Macedonia, three of them 
(St. Bogodorica Prechista in Kichevo, St. Jovan Bigorski near
 Gostivar, and St. Georgji Pobedonosec in Debar) has parts of
the cross Jesus was crucified on.
"
        page="/norway"
        country="Norway"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/norway"
        two="/serbia"
        three="/albania"
        four="/greece"
        con1="Norway"
        con2="Serbia"
        con3="Albania"
        con4="Greece"
      />
    </>
  );
};

export default NorthMacedonia;
