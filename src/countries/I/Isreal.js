import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import il from "../../img/I/il.svg";

const Isreal = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Isreal : The Country With The Highest Number Of Museums Per Capita
        </title>
        <meta
          name="description"
          content="At the Church of the Holy Sepulchre an old wooden ladder has
 been propped up against a window. No one can move it because
  the building is managed by six different churches and none
   can agree who owns the ladder."
        />
        <meta
          name="keyboard"
          content="
        Isreal, jerusalem, Country With Highest Number Of Museums Per Capita"
        />
        <link rel="icon" href={il} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/italy" country="Italy" />

      {/* header */}
      <Header header="Isreal : The Country With The Highest Number Of Museums Per Capita" />

      {/* article  */}
      <Article flag={il} />

      {/* features */}
      <Features
        capital="Jerusalem"
        area="22,145 km²"
        population="9,378,290 (2021)"
        continent="Asia"
        hdi="0.919"
        currency="New shekel"
        language="Hebrew"
        religion="Judaism(74.2%)"
        literacy="97.8%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
At the Church of the Holy Sepulchre an old wooden ladder has
 been propped up against a window since the 18th century in Isreal. 
 No one can move it because the building is managed by six 
 different churches and none can agree on who owns the ladder.
"
        page="/italy"
        country="Italy"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/italy"
        two="/lebanon"
        three="/egypt"
        four="/syria"
        con1="Italy"
        con2="Lebanon"
        con3="Egypt"
        con4="Syria"
      />
    </>
  );
};

export default Isreal;
