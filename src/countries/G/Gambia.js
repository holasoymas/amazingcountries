import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import gm from "../../img/G/gm.svg";

const Gambia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gambia : Smallest Country In Africa ( 10,689 km² )</title>
        <meta
          name="description"
          content="The Gambia is a long strip of land that follows the course
  of the River Gambia, bordered on either side by Senegal.
   It's incredibly narrow, measuring less than 30 miles wide."
        />
        <meta
          name="keyboard"
          content="gambia, Banjul, africa, Smallest Country In Africa ( 10,689 km² )"
        />
        <link rel="icon" href={gm} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/georgia" country="Georgia" />

      {/* header */}
      <Header header="Gambia : Smallest Country In Africa ( 10,689 km² )" />

      {/* article  */}
      <Article flag={gm} />

      {/* features */}
      <Features
        capital="Banjul"
        area="10,689 km²"
        population="2,173,999 (2020)"
        continent="Africa"
        hdi="0.496"
        currency="Gambian dalasi"
        language="English"
        religion="Muslims(96%)"
        literacy="63.9%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
 The Gambia is a long strip of land that follows the course
  of the River Gambia, bordered on either side by Senegal.
   It's incredibly narrow, measuring less than 30 miles wide
    at its widest! Although small, the country is densely
     populated with approximately 2.28 million people.
"
        page="/georgia"
        country="Georgia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/georgia"
        two="/senegal"
        three="/guinea"
        four="/mauritania"
        con1="Georgia"
        con2="Senegal"
        con3="Guinea"
        con4="Mauritania"
      />
    </>
  );
};

export default Gambia;
