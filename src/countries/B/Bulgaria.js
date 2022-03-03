import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import bg from "../../img/B/bg.svg";

const Bulgaria = () => {
  return (
    <>
      <Helmet>
        <title>Bulgaria : Oldest Country Of Europe</title>
        <meta
          name="description"
          content=" The oldest golden treasure in the world was found in Varna,
    Bulgaria. In 1972, almost 300 graves were discovered in a
     necropolis in the industrial zone of Bulgaria’s Black Sea
      capital."
        />
        <meta
          name="keyboard"
          content="bulgaria, sofia, europe, Oldest Country Of Europe "
        />
        <link rel="icon" href={bg} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/burkina-faso" country="Burkina Faso" />

      {/* header */}
      <Header header="Bulgaria : Oldest Country Of Europe" />

      {/* article  */}
      <Article flag={bg} />

      {/* features */}
      <Features
        capital="Sofia"
        area="110,993.6 km²"
        population="6,916,548 (2020)"
        continent="Europe"
        hdi="0.816"
        currency="Bulgarian lev"
        language=" Bulgarian"
        religion="Christianity(61.1% )"
        literacy="98.4%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
   The oldest golden treasure in the world was found in Varna,
    Bulgaria. In 1972, almost 300 graves were discovered in a
     necropolis in the industrial zone of Bulgaria’s Black Sea
      capital. The artefacts are dated at 4600 – 4200 BC! The 
      treasure consists of a total of 3,000 items and weighs 
      six kilograms.
"
        page="/burkina-faso"
        country="Burkina Faso"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/burkina-faso"
        two="/romania"
        three="/serbia"
        four="greece"
        con1="Burkina Faso"
        con2="Romania"
        con3="Serbia"
        con4="Greece"
      />
    </>
  );
};

export default Bulgaria;
