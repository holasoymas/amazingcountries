import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import sn from "../../img/S/sn.svg";

const Senegal = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Senegal : The Gateway To Africa ("Dakar")</title>
        <meta
          name="description"
          content="There is an annual pilgrimage where over 1 million West
 Africans participate in. Known as the Hajj of Senegal, Magal
  Touba is the event for Baay Fall practitioners."
        />
        <meta
          name="keyboard"
          content="Senegal, Gateway To Africa, Dakar ,african Country To Host Olympic"
        />
        <link rel="icon" href={sn} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/serbia" country="Serbia" />

      {/* header */}
      <Header header='Senegal : The Gateway To Africa ("Dakar")' />

      {/* article  */}
      <Article flag={sn} />

      {/* features */}
      <Features
        capital="Dakar"
        area="196,712 km²"
        population="14,668,522 (2016)"
        continent="Africa"
        hdi="0.512"
        currency="West African CFA franc"
        language="French"
        religion="Muslim(90%)"
        literacy="51.9%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
There is an annual pilgrimage where over 1 million West
 Africans participate in. Known as the Hajj of Senegal, Magal
  Touba is the event for Baay Fall practitioners. Each October,
   followers from all parts of West Africa will trek to the 
   illustrious religious capital of Touba and pray for their 
   founder Serigne Touba. Leading up to the event, major cities
    will host week-long festivals filled with food and praying.
     Another prominent holiday Mourids celebrate is Tabaski.
"
        page="/serbia"
        country="Serbia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/serbia"
        two="/mali"
        three="/guinea-bissau"
        four="/mauritania"
        con1="Serbia"
        con2="Mali"
        con3="Guinea Bissau"
        con4="Mauritania"
      />
    </>
  );
};

export default Senegal;
