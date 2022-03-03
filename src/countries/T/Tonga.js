import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import to from "../../img/T/to.svg";

const Tonga = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Tonga : Only Pasafic Country Which Has Nerver Been Colonised
        </title>
        <meta
          name="description"
          content="Sunday is a day of rest in Tonga. Most of Tonga shuts down on
 Sunday in favour of family, church, resting and eating. 
 Conducting any kind of business is banned."
        />
        <meta
          name="keyboard"
          content="
Tonga, Nukuʻalofa, Only Pasafic Country Which Has Nerver Been Colonised    
      
 "
        />
        <link rel="icon" href={to} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/trinidad-and-tobago" country="Trinidad & Tobago" />

      {/* header */}
      <Header header=" Tonga : Only Pasafic Country Which Has Nerver Been Colonised" />

      {/* article  */}
      <Article flag={to} />

      {/* features */}
      <Features
        capital="Nukuʻalofa"
        area="748 km²"
        population="100,651 (2016)"
        continent="Oceania"
        hdi="0.725"
        currency="Paʻanga"
        language="English,Tongan"
        religion="Christianity(98%)"
        literacy="99.4%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Sunday is a day of rest in Tonga. Most of Tonga shuts down on
 Sunday in favour of family, church, resting and eating. 
 Conducting any kind of business is banned. You are even 
 prohibited to play sports, exercise or even swim. It is a day
  of rest and that’s what you should do.
"
        page="/trinidad-and-tobago"
        country="Trinidad & Tobago"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/trinidad-and-tobago"
        two="/fiji"
        three="/samoa"
        four="/australia"
        con1="Trinidad & Tobago"
        con2="Fiji"
        con3="Samoa"
        con4="Australia"
      />
    </>
  );
};

export default Tonga;
