import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import tr from "../../img/T/tr.svg";

const Turkey = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Turkey : Country With The Oldest Temple In The World ("Göbekli")
        </title>
        <meta
          name="description"
          content="The “Evil Eye” is their best-selling souvenir. The “Nazar
 boncuğu”, or “evil eye”, is a stone made from molten glass,
  iron and copper."
        />
        <meta
          name="keyboard"
          content="
      Turkey, ankara, Country With Oldest Temple In The World, Göbekli      
 "
        />
        <link rel="icon" href={tr} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/turkmenistan" country="Turkmenistan" />
      {/* header */}
      <Header
        header='
      Turkey : Country With The Oldest Temple In The World ("Göbekli")      '
      />

      {/* article  */}
      <Article flag={tr} />

      {/* features */}
      <Features
        capital="Ankara"
        area="783,356 km²"
        population="83,614,362 (2021)"
        continent="Asia"
        hdi="0.820"
        currency="Turkish Lira"
        language="Turkish"
        religion="Islam(99.8%)"
        literacy="96.1%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
The “Evil Eye” is their best-selling souvenir. The “Nazar
 boncuğu”, or “evil eye”, is a stone made from molten glass,
  iron and copper. A 3000-year old tradition, it is worn to 
  protect the wearer from evil forces. The belief is that the
   blue colour of the stone has the power to shield from 
   negative energy.
"
        page="/turkmenistan"
        country="Turkmenistan"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/turkmenistan"
        two="/bulgaria"
        three="/armenia"
        four="greece"
        con1="Turkmenistan"
        con2="Bulgaria"
        con3="Armenia"
        con4="Greece"
      />
    </>
  );
};

export default Turkey;
