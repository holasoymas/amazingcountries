import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import bb from "../../img/B/bb.svg";

const Barbados = () => {
  return (
    <>
      <Helmet>
        <title>Barbados : The BirthPlace Of Rum</title>
        <meta
          name="description"
          content='The name Barbados was chosen by a Portuguese
           explorer.He liked the islands fig trees which have
            a beard like appearance and named the island "Los Barbados"(The Bearded One!) '
        />
        <meta
          name="keyboard"
          content="Barbados, Caribbean, bridgetown, tax-haven, duty-free shopping"
        />
        <link rel="icon" href={bb} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/belarus" country="Belarus" />

      {/* header */}
      <Header header="Barbados : The BirthPlace Of Rum" />

      {/* article  */}
      <Article flag={bb} />

      {/* features */}
      <Features
        capital="Bridgetown"
        area="431 km²"
        population=" 287,025 (2019)"
        continent="North America"
        hdi="0.814"
        currency="Barbados Dollar"
        language="English"
        religion="Christianity(75.6%)"
        literacy="99.6%(2020)"
      />

      {/* fact field */}
      <Fact
        didYouKnow='
        The name Barbados was chosen by a Portuguese explorer
         called Pedro a Campos. He liked the islands fig trees
          which have a beard like appearance and hence named
          the island "Los Barbados" which means The Bearded One!'
        page="/belarus"
        country="Belarus"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/belarus"
        two="/trinidad-and-tobago"
        three="/saint-kettis-and-nevis"
        four="/saint-lucia"
        con1="Belarus"
        con2="Trinidad & Tobago"
        con3="St.Kettis & Nevis"
        con4="Saint Lucia"
      />
    </>
  );
};

export default Barbados;
