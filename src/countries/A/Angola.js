import React from "react";

import Header from "../../components/Header";
import Article from "../../components/Article";
import Features from "../../components/Features";
import Fact from "../../components/Fact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Helmet } from "react-helmet";
import ao from "../../img/A/ao.svg";
const Angola = () => {
  return (
    <>
      <Helmet>
        <title>Angola : second-largest Portuguese-speaking country</title>
        <meta
          name="description"
          content="  Thought to be long extinct, the giant sable antelope was
         recently found in Angola and is a national icon. This
         enormous animal is famous for its massive horns and broad
          stature."
        />
        <meta
          name="keyboard"
          content="Angola, Africa, Luanda,largest portuguese-speaking country , duty-free shopping"
        />
        <link rel="icon" href={ao} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/antigua-and-barbuda" country="Antigua & Barbuda" />

      {/* header */}
      <Header header="Angola : second-largest Portuguese-speaking country" />

      {/* article  */}
      <Article flag={ao} />

      {/* features */}
      <Features
        capital="Luanda"
        area="1,246,700 km²"
        population="25,789,024 (2014)"
        continent="Africa"
        hdi="0.581"
        currency="Angolan kwanza"
        language="Portuguese"
        religion="Christianity(93.4%)"
        literacy="71.1%(2020)"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
        Thought to be long extinct, the giant sable antelope was
         recently found in Angola and is a national icon. This
         enormous animal is famous for its massive horns and broad
          stature. To paint a picture, males’ horns can reach nearly
           five and a half feet or 165 centimetres."
        page="/antigua-and-barbuda"
        country="Antigua & Barbuda"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/antigua-and-barbuda"
        two="/zambia"
        three="/namibia"
        four="/democratic-republic-of-congo"
        con1="Antigua & Barbuda"
        con2="Zambia"
        con3="Namibia"
        con4="Democratic Republic Of Congo"
      />
    </>
  );
};

export default Angola;
