import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import uae from "../../img/U/uae.svg";

const UnitedArabEmirates = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          United Arab Emirates : Country With The Tallest Building In The World
          ("Burj Khalifa")
        </title>
        <meta
          name="description"
          content="The country's form of government is an absolute monarchy. Each
 emirate of the UAE is ruled by a separate royal family, but 
 the emir of Abu Dhabi is the country's president and head of
  state."
        />
        <meta
          name="keyboard"
          content="
  uae, abu dhabi, Tallest Building In The World, Burj Khalifa
 "
        />

        <link rel="icon" href={uae} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/uk" country="United Kingdom" />

      {/* header */}
      <Header
        header='
        United Arab Emirates : Country With The Tallest Building In The World
      ("Burj Khalifa")'
      />

      {/* article  */}
      <Article flag={uae} />

      {/* features */}
      <Features
        capital="Abu Dhabi"
        area="83,600 km²"
        population="9,890,400 (2020)"
        continent="Asia"
        hdi="0.890"
        currency="UAE Dirham"
        language="Arabic"
        religion="Islam(76%)"
        literacy="93.2%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
The country's form of government is an absolute monarchy. Each
 emirate of the UAE is ruled by a separate royal family, but 
 the emir of Abu Dhabi is the country's president and head of
  state, while the emir of Dubai serves as the nation's prime
   minister.
"
        page="/uk"
        country="United Kingdom"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/uk"
        two="/oman"
        three="/saudi-arabia"
        four="/bahrain"
        con1="United Kingdom"
        con2="Oman"
        con3="Saudi Arabia"
        con4="Bahrain"
      />
    </>
  );
};

export default UnitedArabEmirates;
