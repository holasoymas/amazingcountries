import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ki from "../../img/K/ki.svg";

const Kiribati = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Kiribati : Only Country In The World Which Is Situated In All Four
          Hemispheres
        </title>
        <meta
          name="description"
          content="Kiribati is the only country in the world that lies in all
 four hemispheres. The islands are widespread and lie on 
 both sides of the equator which is the northern and southern
  hemisphere."
        />
        <meta
          name="keyboard"
          content="kiribati, south tarawa, country which is situated in all hemispheries"
        />
        <link rel="icon" href={ki} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/kuwait" country="Kuwait" />

      {/* header */}
      <Header header="Kiribati : Only Country In The World Which Is Situated In All Four Hemispheres" />

      {/* article  */}
      <Article flag={ki} />

      {/* features */}
      <Features
        capital="South Tarawa"
        area="811 km²"
        population="119,940 (2020)"
        continent="Oceana"
        hdi="0.630"
        currency="Australian dollar"
        language="English, Gilbertese"
        religion="Christianity(96.2%)"
        literacy="97.7%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Kiribati is the only country in the world that lies in all
 four hemispheres. The islands are widespread and lie on 
 both sides of the equator which is the northern and southern
  hemisphere. The country also lies along the Prime Meridian
   of the globe occupying the eastern and western hemispheres.
"
        page="/kuwait"
        country="Kuwait"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/kuwait"
        two="/japan"
        three="/fiji"
        four="/australia"
        con1="Kuwait"
        con2="Japan"
        con3="Fiji"
        con4="Australia"
      />
    </>
  );
};

export default Kiribati;
