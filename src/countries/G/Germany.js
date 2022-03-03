import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import germany from "../../img/G/germany.svg";

const Germany = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Germany : Largest Economy Of European Union ( about $3.9 trillion )
        </title>
        <meta
          name="description"
          content="Prison escape is not punishable by law in Germany.
         German law maintains that it’s a basic human instinct
        to be free and therefore, prisoners have the right
        to escape jail."
        />
        <meta
          name="keyboard"
          content="germany, berlin, Largest Economy Of European Union ( about $3.9 trillion )"
        />
        <link rel="icon" href={germany} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/ghana" country="Ghana" />
      {/* header */}
      <Header header="Germany : Largest Economy Of European Union ( about $3.9 trillion )" />
      {/* article  */}
      <Article flag={germany} />
      {/* features */}
      <Features
        capital="Berlin"
        area="357,022 km²"
        population="83,190,556 (2020)"
        continent="Europe"
        hdi="0.947"
        currency="Euro"
        language="Deutsch(German)"
        religion="Christianity(55%)"
        literacy="99%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
        Prison escape is not punishable by law in Germany.
         German law maintains that it’s a basic human instinct
        to be free and therefore, prisoners have the right
        to escape jail. Escapes, however, rarely go unpunished
         because prisoners are held liable if they cause damage
          to property or inflict bodily harm against any 
          individual upon their breakout.
        "
        page="/ghana"
        country="ghana"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/ghana"
        two="/netherlands"
        three="/Belgium"
        four="/switzerland"
        con1="Ghana"
        con2="Netherlands"
        con3="Belgium"
        con4="Switzerland"
      />
    </>
  );
};

export default Germany;
