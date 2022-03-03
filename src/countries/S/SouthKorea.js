import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import southkor from "../../img/S/southkor.svg";

const SouthKorea = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>South Korea : The Plastic Surgery Capital Of The World</title>
        <meta
          name="description"
          content="Looks are a huge thing in Korea, with studies showing over 25%
of the population admits to have had plastic surgery. The beauty
 approach differs to the Western world’s – the focus is mainly
 on improving facial features."
        />
        <meta
          name="keyboard"
          content="
  South Korea, seoul, The Plastic Surgery Capital Of The World"
        />
        <link rel="icon" href={southkor} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/south-sudan" country="South Sudan" />

      {/* header */}
      <Header header="South Korea : The Plastic Surgery Capital Of The World" />

      {/* article  */}
      <Article flag={southkor} />

      {/* features */}
      <Features
        capital="Seoul"
        area="100,363 km²"
        population="51,709,098 (2019)"
        continent="Asia"
        hdi="0.916"
        currency="Korean Republic won"
        language="Korean"
        religion="No Religion(56.1%)"
        literacy="97.9%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Looks are a huge thing in Korea, with studies showing over 25%
 of the population admits to have had plastic surgery. The
  beauty approach differs to the Western world’s – the focus
   is mainly on improving facial features and Korean men also
    feel the pressure to undergo surgery in order to resemble
     the male beauty models imposed by K-Pop and Korean Dramas.
"
        page="/south-sudan"
        country="South Sudan"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/south-sudan"
        two="/japan"
        three="/north-korea"
        four="/china"
        con1="South Sudan"
        con2="Japan"
        con3="North Korea"
        con4="China"
      />
    </>
  );
};

export default SouthKorea;
