import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import mh from "../../img/M/mh.svg";

const MarshallIslands = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Marshall Islands : Home To The World's Largest Shark Sanctuary
        </title>
        <meta
          name="description"
          content="There are 29 separate atolls in the Marshalls, containing a 
total of 1,225 islands, 870 reef systems, and 160 species of
 coral."
        />
        <meta
          name="keyboard"
          content="Marshall Islands, Majuro, Home To The World's Largest Shark Sanctuary"
        />
        <link rel="icon" href={mh} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/mauritania" country="Mauritania" />

      {/* header */}
      <Header header="Marshall Islands : Home To The World's Largest Shark Sanctuary" />

      {/* article  */}
      <Article flag={mh} />

      {/* features */}
      <Features
        capital="Majuro"
        area="181.43 km²"
        population=" 58,413 (2018)"
        continent="Oceania"
        hdi="0.704"
        currency="US Dollar"
        language="Marshallese, English"
        religion="Christianity(97%)"
        literacy="98.3%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
There are 29 separate atolls in the Marshalls, containing a 
total of 1,225 islands, 870 reef systems, and 160 species of
 coral. The Marshalls is one of only four atoll nations in 
 the world and is also one of the world's youngest nations,
  independent since just 1986.
"
        page="/mauritania"
        country="Mauritania"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/mauritania"
        two="/kiribati"
        three="/nauru"
        four="/micronesia"
        con1="Mauritania"
        con2="Kiribati"
        con3="Nauru"
        con4="Micronesia"
      />
    </>
  );
};

export default MarshallIslands;
