import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ser from "../../img/S/ser.svg";

const Serbia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Serbia : World's Biggest Exporters Of Raspberries</title>
        <meta
          name="description"
          content="Not less than 17  of the great Roman emperors were born on the
 territory of today’s Serbia. The widely celebrated Roman 
 emperor Constantine the Great, was born in today’s city of 
 Nis."
        />
        <meta
          name="keyboard"
          content="serbia, Belgrade, europe, roman emperors, World's Biggest Exporters Of Raspberries"
        />
        <link rel="icon" href={ser} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/seychelles" country="Seychelles" />

      {/* header */}
      <Header header="Serbia : World's Biggest Exporters Of Raspberries" />

      {/* article  */}
      <Article flag={ser} />

      {/* features */}
      <Features
        capital="Belgrade"
        area="88,361 km²"
        population="6,926,705"
        continent="Europe"
        hdi="0.806"
        currency="Serbian dinar"
        language="Serbian"
        religion="Christianity(90.6%)"
        literacy="98.8%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Not less than 17  of the great Roman emperors were born on the
 territory of today’s Serbia. The widely celebrated Roman 
 emperor Constantine the Great, was born in today’s city of 
 Nis. He was the first to declare Christianity as an official 
 religion.
"
        page="/seychelles"
        country="Seychelles"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/seychelles"
        two="/romania"
        three="/bulgaria"
        four="/hungary"
        con1="Seychelles"
        con2="Romania"
        con3="Bulgaria"
        con4="Hungary"
      />
    </>
  );
};

export default Serbia;
