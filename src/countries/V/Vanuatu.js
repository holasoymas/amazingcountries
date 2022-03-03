import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import vu from "../../img/V/vu.svg";

const Vanuatu = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vanuatu : The Country Which Invent Bungee Jumping</title>
        <meta
          name="description"
          content="There’s a tribe that worships Prince Philip. It started with a
 visit the Queen and Duke made to Vanuatu in 1974. A warrior
  named Chief Jack Naiva, who died in 2009."
        />
        <meta
          name="keyboard"
          content="
Vanuatu, Port Vila, oceania, Country Which Invent Bungee Jumping
 "
        />

        <link rel="icon" href={vu} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/venezuela" country="Venezuela" />

      {/* header */}
      <Header
        header="
Vanuatu : The Country Which Invent Bungee Jumping"
      />

      {/* article  */}
      <Article flag={vu} />

      {/* features */}
      <Features
        capital="Port Vila"
        area="12,189 km²"
        population="307,815 (2020)"
        continent="Oceania"
        hdi="0.609"
        currency="Vatu"
        language="Bislama,English,French"
        religion="Christianity(93.3%)"
        literacy="87.5%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
There’s a tribe that worships Prince Philip. It started with a
 visit the Queen and Duke made to Vanuatu in 1974. A warrior
  named Chief Jack Naiva, who died in 2009, was one of the
   paddlers of a war canoe that greeted the royal yacht 
   Britannia at the nation's capital, Port Vila. Chief Jack
    became convinced that Prince Philip was the descendant of
     a Tanna spiritual ancestor. Prince Philip had since then 
     exchanged gifts with the islanders, including sending them
      a signed portrait of himself.
"
        page="/venezuela"
        country="Venezuela"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/venezuela"
        two="/fiji"
        three="/australia"
        four="/tonga"
        con1="Venezuela"
        con2="Fiji"
        con3="Australia"
        con4="Tonga"
      />
    </>
  );
};

export default Vanuatu;
