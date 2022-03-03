import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import bt from "../../img/B/bt.svg";

const Bhutan = () => {
  return (
    <>
      <Helmet>
        <title>Bhutan : Country Of Thunderbolt</title>
        <meta
          name="description"
          content=" Bhutan has a mandatory national dress code. Men wear
       traditional, knee-length garments and women must wear
       ankle-length dresses."
        />
        <meta
          name="keyboard"
          content="bhutan, asia, thimpu, country of thunderbolt,"
        />
        <link rel="icon" href={bt} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/bolivia" country="Bolivia" />

      {/* header */}
      <Header header="Bhutan : Country Of Thunderbolt" />

      {/* article  */}
      <Article flag={bt} />

      {/* features */}
      <Features
        capital="Thimpu"
        area="38,394 km²"
        population="727,145 (2017)"
        continent="Asia"
        hdi="0.654"
        currency=" Ngultrum"
        language=" Dzongkha"
        religion="Buddhism(74.8%)"
        literacy="66.6%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
      Bhutan has a mandatory national dress code. Men wear
       traditional, knee-length garments and women must wear
       ankle-length dresses. The colors give away someone's
       social class and status."
        page="/bolivia"
        country="Bolivia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/bolivia"
        two="/china"
        three="/india"
        four="/nepal"
        con1="Bolivia"
        con2="China"
        con3="Inida"
        con4="Nepal"
      />
    </>
  );
};

export default Bhutan;
