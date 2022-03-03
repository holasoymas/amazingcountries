import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import lb from "../../img/L/lb.svg";

const Lebanon = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Lebanon : First Arab Country To Permit Private Radio And TV
        </title>
        <meta
          name="description"
          content="Lebanon has an ancient wine culture dating back over 5,000
 years, possibly to 7000 BC. In fact, the Phoenicians were
  among the first wine producers in the world."
        />
        <meta
          name="keyboard"
          content="
            Lebanon, First Arab Country To Permit, Radio And TV, beriut"
        />
        <link rel="icon" href={lb} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/lethoso" country="Lethoso" />

      {/* header */}
      <Header header="Lebanon : First Arab Country To Permit Private Radio And TV" />
      {/* article  */}
      <Article flag={lb} />

      {/* features */}
      <Features
        capital="Beriut"
        area="10,452 km²"
        population="6,859,408 (2018)"
        continent="Asia"
        hdi="0.774"
        currency="Lebanese Pound"
        language="Arabic"
        religion="Islam(57.7%)"
        literacy="95%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Lebanon has an ancient wine culture dating back over 5,000
 years, possibly to 7000 BC. In fact, the Phoenicians were
  among the first wine producers in the world. Phoenician 
  merchants traded here for three thousand years as the
   epicentre of ancient wine.
"
        page="/lethoso"
        country="Lethoso"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/lethoso"
        two="/isreal"
        three="/syria"
        four="/turkey"
        con1="Lethoso"
        con2="Isreal"
        con3="Syria"
        con4="Turkey"
      />
    </>
  );
};

export default Lebanon;
