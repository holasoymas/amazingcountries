import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import croatia from "../../img/C/croatia.svg";

const Croatia = () => {
  return (
    <>
      <Helmet>
        <title>
          Croatia : Country Which Has Smallest Town In The World ( Town Of Hum )
        </title>
        <meta
          name="description"
          content="The Croatian currency is named after a rodent. Croatian money
 is called the kuna, which is also the word for the marten, 
 a furry ferret-like little animal."
        />
        <meta
          name="keyboard"
          content="croatia,Zagreb, Country Which Has Smallest Town In The World"
        />
        <link rel="icon" href={croatia} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/cuba" country="Cuba" />

      {/* header */}
      <Header header='Croatia : Country Which Has Smallest Town In The World ( "Town Of Hum" )' />

      {/* article  */}
      <Article flag={croatia} />

      {/* features */}
      <Features
        capital="Zagreb"
        area="56,594 km²"
        population="4,058,165 (2020)"
        continent="Europe"
        hdi="0.851"
        currency="Croatian kuna"
        language="Croatian"
        religion="Christianity(91.06%)"
        literacy="99.1%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The Croatian currency is named after a rodent. Croatian money
 is called the kuna, which is also the word for the marten, 
 a furry ferret-like little animal. 
"
        page="/cuba"
        country="Cuba"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/cuba"
        two="/hungary"
        three="/serbia"
        four="/montenegro"
        con1="Cuba"
        con2="Hungary"
        con3="Serbia"
        con4="Montenegro"
      />
    </>
  );
};

export default Croatia;
