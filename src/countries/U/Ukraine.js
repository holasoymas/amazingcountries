import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ua from "../../img/U/ua.svg";

const Ukraine = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Ukraine : Country With The World's Deepest Metro Station ("Arsenalna")
        </title>
        <meta
          name="description"
          content="Ukraine was at the heart of one of the biggest catastrophes
 of the 20th century. Chornobyl Nuclear Powerplant exploded in
  1986, leaving a once-thriving community of Ukrainians 
  completely destroyed."
        />
        <meta
          name="keyboard"
          content="
          Uganda, kyev, Country With The World's Deepest Metro Station, Arsenalna
 "
        />

        <link rel="icon" href={ua} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/uae" country="United Arab Emirates" />

      {/* header */}
      <Header header="Ukraine : Country With The World's Deepest Metro Station ('Arsenalna')" />

      {/* article  */}
      <Article flag={ua} />

      {/* features */}
      <Features
        capital="Kyiv"
        area="603,628 km²"
        population="41,408,239 (2021)"
        continent="Europe"
        hdi="0.779"
        currency="Hryvnia"
        language="Ukrainian"
        religion="Christianity(87.3%)"
        literacy="99.9%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Ukraine was at the heart of one of the biggest catastrophes
 of the 20th century. Chornobyl Nuclear Powerplant exploded in
  1986, leaving a once-thriving community of Ukrainians 
  completely destroyed. The effects of the explosion were felt
   far and wide, and have recently been dramatized, albeit
    brutally honestly, in HBO’s recent series of the same name.
"
        page="/uae"
        country="United Arab Emirates"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/uae"
        two="/belarus"
        three="/hungary"
        four="/romania"
        con1="United Arab Emirates"
        con2="Belarus"
        con3="Hungary"
        con4="Romania"
      />
    </>
  );
};

export default Ukraine;
