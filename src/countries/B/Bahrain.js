import React from "react";

import Header from "../../components/Header";
import Article from "../../components/Article";
import Features from "../../components/Features";
import Fact from "../../components/Fact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import Message from "../../components/Message";
import { Helmet } from "react-helmet";
import bh from "../../img/B/bh.svg";
const Bahrain = () => {
  return (
    <>
      <Helmet>
        <title>Bahrain : Island of Pearls</title>
        <meta
          name="description"
          content=" Bahrain is home to the Tree of Life, a 9.75 meters
      high Prosopis cineraria tree planted around 1583 on a hill
       in barren area of Arabian desert."
        />
        <meta
          name="keyboard"
          content="bahrain, manama, asia, 0 personal income tax country"
        />
        <link rel="icon" href={bh} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/bangladesh" country="Bangladesh" />

      {/* header */}
      <Header header="Bahrain : Island of Pearls" />

      {/* article  */}
      <Article flag={bh} />

      {/* features */}
      <Features
        capital="Manama"
        area="785.08 km²"
        population="1,501,635(2020)"
        continent="Aisa"
        hdi="0.852"
        currency="Bahrani Dinar"
        language="Arabic"
        religion="Islam(73.3%)"
        literacy="97.5%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
     Bahrain is home to the Tree of Life, a 9.75 meters (32 feet)
      high Prosopis cineraria tree planted around 1583 on a hill
       in barren area of Arabian desert. It is still unclear what
        sustains the tree as there are no obvious water sources
        nearby."
        page="/bangladesh"
        country="Bangladesh"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/bangladesh"
        two="/uae"
        three="/saudi-arabia"
        four="/qatar"
        con1="Bangladesh"
        con2="UAE"
        con3="Saudi Arabia"
        con4="Qatar"
      />
    </>
  );
};

export default Bahrain;
