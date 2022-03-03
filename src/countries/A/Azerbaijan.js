import React from "react";

import Header from "../../components/Header";
import Article from "../../components/Article";
import Features from "../../components/Features";
import Fact from "../../components/Fact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import Message from "../../components/Message";
import { Helmet } from "react-helmet";
import az from "../../img/A/az.svg";
const Azerbaijan = () => {
  return (
    <>
      <Helmet>
        <title>Azerbaijan : The Land of Fire</title>
        <meta
          name="description"
          content=" Andorra is worlds only co-principality, meaning Andorra
      is ruled two princes. Surprisingly, neither of them are from
       Andorra."
        />
        <meta
          name="keyboard"
          content="Azerbaijan, Baku, The Land of Fire, Azerbaijani"
        />
        <link rel="icon" href={az} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/bahamas" country="Bahamas" />

      {/* header */}
      <Header header="Azerbaijan : The Land of Fire" />

      {/* article  */}
      <Article flag={az} />

      {/* features */}
      <Features
        capital="Baku"
        area="86,600 km²"
        population="10,127,874 (2019)"
        continent="Europe"
        hdi="0.756"
        currency="Azerbaijani manat"
        language="Azerbaijani"
        religion="Islam(96.9%)"
        literacy="99.79%(2020)"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
      In the lowest reaches of Azokh Cave in western Azerbaijan,
       archaeologists have found tools and remains dating back 1.5
        million years. The six chambers of the cave complex hold a
        bounty of prehistoric remains, and it’s thought that the
        caverns were occupied for nearly two million years."
        page="/bahamas"
        country="Bahamas"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/bahamas"
        two="/russia"
        three="/armenia"
        four="/georgia"
        con1="Bahamas"
        con2="Russia"
        con3="Armenia"
        con4="Georgia"
      />
    </>
  );
};

export default Azerbaijan;
