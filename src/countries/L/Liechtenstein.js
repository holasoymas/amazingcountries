import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import li from "../../img/L/li.svg";

const Liechtenstein = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Liechtenstein : Country With More Registered Companies Than Its
          Citizens
        </title>
        <meta
          name="description"
          content="Liechtenstein has one of the world’s lowest crime rates, with
 its last murder occurring in approximately 1997 and its 
 prison holding very few inmates."
        />
        <meta
          name="keyboard"
          content="
               Liechtenstein, vaduz, Country With More Registered Companies Than Its Citizens"
        />
        <link rel="icon" href={li} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/lithuania" country="Lithuania" />

      {/* header */}
      <Header header="Liechtenstein : Country With More Registered Companies Than Its Citizens" />
      {/* article  */}
      <Article flag={li} />

      {/* features */}
      <Features
        capital="Vaduz"
        area="160 km²"
        population="38,896 (2020)"
        continent="Europe"
        hdi="0.919"
        currency="Swiss franc"
        language="German"
        religion="Christianity(83.2%)"
        literacy="100%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Liechtenstein has one of the world’s lowest crime rates, with
 its last murder occurring in approximately 1997 and its 
 prison holding very few inmates. Citizens who are given
  prison sentences longer than two years are transferred over
   to Austria. The crime rate is so low that the average
    Liechtenstein resident reportedly doesn’t even lock their
     front door.
"
        page="/lithuania"
        country="Lithuania"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/lithuania"
        two="/switzerland"
        three="/austria"
        four="/germany"
        con1="Lithuania"
        con2="Switzerland"
        con3="Austria"
        con4="Germany"
      />
    </>
  );
};

export default Liechtenstein;
