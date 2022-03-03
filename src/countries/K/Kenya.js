import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ke from "../../img/K/ke.svg";

const Kenya = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Kenya : The Country With The Village Where Men Are Banned To Live
          ("Umoja")
        </title>
        <meta
          name="description"
          content="It is a criminal act to hunt any protected animal in Kenya.
 Kenya’s minister  announced that the country will fast track a
  law to make the illegal  hunting of wildlife will be punishable
   by death penalty."
        />
        <meta
          name="keyboard"
          content="kenya, nairobi, Country With Village Where Men Are Banned, umoja"
        />
        <link rel="icon" href={ke} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/kiribati" country="Kiribati" />

      {/* header */}
      <Header header='Kenya : The Country With The Village Where Men Are Banned To Live ("Umoja")' />

      {/* article  */}
      <Article flag={ke} />

      {/* features */}
      <Features
        capital="Nairobi"
        area="580,367 km²"
        population="47,564,296 (2019)"
        continent="Africa"
        hdi="0.601"
        currency="Kenyan shilling"
        language="English, Swahili"
        religion="Christianity(85.5%)"
        literacy="81.53%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="

It is a criminal act to hunt any protected animal in Kenya.
 Kenya’s minister for tourism and wildlife also announced that
  the country will fast track a law to make the illegal 
  hunting of wildlife a capital offense punishable by the
   death penalty.
"
        page="/kiribati"
        country="Kiribati"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/kiribati"
        two="/ethiopia"
        three="sudan"
        four="/tanzania"
        con1="Kiribati"
        con2="Ethiopia"
        con3="Sudan"
        con4="Tanzania"
      />
    </>
  );
};

export default Kenya;
