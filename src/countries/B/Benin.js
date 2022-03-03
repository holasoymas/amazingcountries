import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import bj from "../../img/B/bj.svg";

const Benin = () => {
  return (
    <>
      <Helmet>
        <title>Benin : Temple Of Pythons ( Ouidah's Temple )</title>
        <meta
          name="description"
          content="Benin is home to the Temple of Pythons, a sacred shrine inspired
        by the legends of King Kpasse, that’s home to dozens of royal
         pythons that move freely within the temple’s grounds."
        />
        <meta
          name="keyboard"
          content="benin, porto novo, , temple of pythons, Ouidah's Temple"
        />
        <link rel="icon" href={bj} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/bhutan" country="Bhutan" />

      {/* header */}
      <Header header="Benin : Temple Of Pythons ( Ouidah's Temple )" />

      {/* article  */}
      <Article flag={bj} />

      {/* features */}
      <Features
        capital="Porto Novo"
        area="114,763 km²"
        population="11,733,059 (2019)"
        continent="Africa"
        hdi="0.545"
        currency="West African CFA franc"
        language="French"
        religion="Christianity(52.2%)"
        literacy="42.36%(2020)"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
       Benin is home to the Temple of Pythons, a sacred shrine inspired
        by the legends of King Kpasse, that’s home to dozens of royal
         pythons that move freely within the temple’s grounds."
        page="/bhutan"
        country="Bhutan"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/bhutan"
        two="nigeria"
        three="/burkina-faso"
        four="/togo"
        con1="Bhutan"
        con2="Nigeria"
        con3="Burkina Faso"
        con4="Togo"
      />
    </>
  );
};

export default Benin;
