import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import uk from "../../img/U/uk.svg";

const UnitedKingdom = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>United Kingdom : Country Where Stamps Originated From</title>
        <meta
          name="description"
          content="The Queen might wish you a happy birthday. You might have 
heard about people turning 100 getting a telegram from the
 Queen."
        />
        <meta
          name="keyboard"
          content="
          United Kingdom, london, england's queen, Country Where Stamps Originated From
 "
        />

        <link rel="icon" href={uk} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/usa" country="USA" />

      {/* header */}
      <Header
        header="
          United Kingdom : Country Where Stamps Originated From
      "
      />

      {/* article  */}
      <Article flag={uk} />

      {/* features */}
      <Features
        capital="London"
        area="242,495 km²"
        population="67,886,004 (2020)"
        continent="Europe"
        hdi="0.932"
        currency="Pound Sterling"
        language="Arabic"
        religion="Christianity(59.5%)"
        literacy="99%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The Queen might wish you a happy birthday. You might have 
heard about people turning 100 getting a telegram from the
 Queen. In the modern day, it’s actually a personalized card,
  and it’s not just limited to your hundredth birthday, you 
  can apply for one for your 105th birthday too and for each
   birthday year after you turn 105.
"
        page="/usa"
        country="USA"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/usa"
        two="/ireland"
        three="/netherlands"
        four="/belgium"
        con1="USA"
        con2="Ireland"
        con3="Netherlands"
        con4="Belgium"
      />
    </>
  );
};

export default UnitedKingdom;
