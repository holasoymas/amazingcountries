import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import cr from "../../img/C/cr.svg";

const CostaRica = () => {
  return (
    <>
      <Helmet>
        <title>
          Costa Rica : Where Sun Rises And Sets At The Same Time 365 Days A Year
        </title>
        <meta
          name="description"
          content="More than 25% of the land in Costa Rica is dedicated to
  Conservation. Costa Rica has a strong commitment to
   preserving its biggest asset."
        />
        <meta
          name="keyboard"
          content="costa rica, San José,Only Place Where You Can Find The Bonobo "
        />
        <link rel="icon" href={cr} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/cotedivoire" country="Côte d'Ivoire" />

      {/* header */}
      <Header header="Costa Rica : Where Sun Rises And Sets At The Same Time 365 Days A Year" />

      {/* article  */}
      <Article flag={cr} />

      {/* features */}
      <Features
        capital="San José"
        area="51,100 km²"
        population="5,094,118 (2020)"
        continent="North America"
        hdi="0.801"
        currency="Costa Rican colón"
        language="Spanish"
        religion="Christianity(79%)"
        literacy="97.9%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
 More than 25% of the land in Costa Rica is dedicated to
  Conservation. Costa Rica has a strong commitment to
   preserving its biggest asset. Boasting 20 national parks,
    eight biological parks, and numerous protected areas and
     animal refuges, more than a quarter of the land in this
      unique country is protected.
"
        page="/cotedivoire"
        country="Côte d'Ivoire"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/cotedivoire"
        two="/panama"
        three="/nicaragua"
        four="/mexico"
        con1="Côte d'Ivoire"
        con2="Panama"
        con3="Nicaragua"
        con4="Mexico"
      />
    </>
  );
};

export default CostaRica;
