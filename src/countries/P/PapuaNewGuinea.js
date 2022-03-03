import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import pg from "../../img/P/pg.svg";

const PapaNewGuinea = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Papua New Guinea : Country With Largest Number Of Spoken Languages
          ("840")
        </title>
        <meta
          name="description"
          content="According to government statistics, there are 851 languages
 within the country. The most popular language is Tok Pisin, 
 an English-based creole with German-language elements."
        />
        <meta
          name="keyboard"
          content="Papua New Guinea, Port Moresby, Country With The Oldest Olive Tree"
        />
        <link rel="icon" href={pg} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/paraguay" country="Paraguay" />

      {/* header */}
      <Header header='Papua New Guinea : Country With Largest Number Of Spoken Languages ("840")' />

      {/* article  */}
      <Article flag={pg} />

      {/* features */}
      <Features
        capital="Port Moresby"
        area="462,840 km²"
        population="8,935,000 (2020)"
        continent="Oceania"
        hdi="0.555"
        currency="Kina"
        language="English, Hiri Motu"
        religion="Christianity(95.5%)"
        literacy="61.6%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
According to government statistics, there are 851 languages
 within the country. The most popular language is Tok Pisin, 
 an English-based creole with German-language elements. The
  country also has an official sign language. There are also 
  an estimated 1000 different cultural groups in Papua New 
  Guinea, and because of the nation’s sheer diversity, they 
  all have their own weaponry, costumes, music, architecture,
   and dance.
"
        page="/paraguay"
        country="Paraguay"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/paraguay"
        two="/australia"
        three="/indonesia"
        four="/solomon-islands"
        con1="Paraguay"
        con2="Australia"
        con3="Indonesia"
        con4="Solomon Islands"
      />
    </>
  );
};

export default PapaNewGuinea;
