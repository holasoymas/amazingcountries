import React from "react";
import Header from "../../components/Header";
import Article from "../../components/Article";
import Features from "../../components/Features";
import Fact from "../../components/Fact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import Message from "../../components/Message";
import { Helmet } from "react-helmet";
import am from "../../img/A/am.svg";
const Armenia = () => {
  return (
    <>
      <Helmet>
        <title>Armenia : The Land Of Free Water</title>
        <meta
          name="description"
          content="Armenia was the first conutry to adopt 
          Chiristanity. Christianity spread to the now-defunct
           Kingdom of Armenia soon after the death of Jesus.
           "
        />
        <meta
          name="keyboard"
          content="armenia, Europe, yerevan, land of free-water"
        />
        <link rel="icon" href={am} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/australia" country="Australia" />

      {/* header */}
      <Header header="Armenia : The Land Of Free Water" />

      {/* article  */}
      <Article flag={am} />

      {/* features */}
      <Features
        capital="Yerevan"
        area=" 29,743 km²"
        population="2,967,900(2020)"
        continent="Asia"
        hdi="0.776"
        currency=" Armenian dram"
        language="Armenian"
        religion="Christianity"
        literacy="99.7%(2020)"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
       Armenia was the first conutry to adopt  Chiristanity.
        Christianity spread to the now-defunct Kingdom of Armenia
        soon after the death of Jesus, though it took until the
        early 4th century for it to be adopted as the state religion.
        Still, that was earlier than any other country on the planet."
        page="/australia"
        country="Australia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/australia"
        two="/georgia"
        three="/azerbaijan"
        four="/turkey"
        con1="Australia"
        con2="Georgia"
        con3="Azerbaijan"
        con4="Turkey"
      />
    </>
  );
};

export default Armenia;
