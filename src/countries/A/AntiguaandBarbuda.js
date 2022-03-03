import React from "react";

import Header from "../../components/Header";
import Article from "../../components/Article";
import Features from "../../components/Features";
import Fact from "../../components/Fact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Helmet } from "react-helmet";
import ag from "../../img/A/ag.svg";
const AntiguaandBarbuda = () => {
  return (
    <>
      <Helmet>
        <title>Antigua & Barbuda : Nelson’s Dockyard National Park</title>
        <meta
          name="description"
          content="Highest peak of Antigua and Barbuda is named after Former
        US Persident Barack Obama, When he was elected as President.
          "
        />
        <meta
          name="keyboard"
          content="Antigua & Barbuda, St.John's, Caribbean,Nelson’s Dockyard National Park"
        />
        <link rel="icon" href={ag} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/argentina" country="Argentina" />
      {/* header */}
      <Header header="Antigua & Barbuda : Nelson’s Dockyard National Park" />
      {/* article  */}
      <Article flag={ag} />
      {/* features */}
      <Features
        capital="St.John's"
        area=" 440 km²"
        population="99,337 (2011)"
        continent="Caribbean Sea"
        hdi="0.778"
        currency="East Caribbean Dollar"
        language="English"
        religion="Christianity(76.5%)"
        literacy="98.95%(2020)"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
       Highest peak of Antigua and Barbuda is named after Former
        US Persident Barack Obama, When he was elected as President
         it was so heartfelt by Antiguans that they decided to name
          their highest peak formerly Boogy Peak rising to height of
          402 meters, Mount Obama"
        page="/argentina"
        country="Argentina"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/argentina"
        two="/saint-kitts-and-nevis"
        three="/usa"
        four="/cuba"
        con1="Argentina"
        con2="St. Kitts & Nevis"
        con3="USA"
        con4="Cuba"
      />
    </>
  );
};

export default AntiguaandBarbuda;
