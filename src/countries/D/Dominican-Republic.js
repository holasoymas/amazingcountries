import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import dr from "../../img/D/dr.svg";
const DominicanRep = () => {
  return (
    <>
      <Helmet>
        <title>
          Dominican Republic : Only Country To Have An Image Of Bible On It's
          Flag
        </title>
        <meta
          name="description"
          content="Santo Domingo is the oldest city in the new world. The capital
 that was founded in 1496 by Bartholomew Columbus carries a
  rich history."
        />
        <meta
          name="keyboard"
          content="dominican republic, Santo Domingo, Bible On It's Flag"
        />
        <link rel="icon" href={dr} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/ecuador" country="Ecuador" />

      {/* header */}
      <Header
        header="Dominican Republic : Only Country To Have An Image Of Bible On It's
          Flag"
      />

      {/* article  */}
      <Article flag={dr} />

      {/* features */}
      <Features
        capital="Santo Domingo"
        area="48,670 km²"
        population="10,878,246 (2018)"
        continent="North America"
        hdi="0.756"
        currency="Dominican peso"
        language="Spanish"
        religion="Christianity(69.1%)"
        literacy="93.8%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Santo Domingo is the oldest city in the new world. The capital
 that was founded in 1496 by Bartholomew Columbus carries a
  rich history. The first colonial rule by Spanish Crown
   began here and it is no wonder the first cathedral, 
   university, and municipal building were established here.
"
        page="/ecuador"
        country="Ecuador"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/ecuador"
        two="colombia"
        three="Venezuela"
        four="/Haiti"
        con1="Ecuador"
        con2="Colombia"
        con3="Venezuela"
        con4="Haiti"
      />
    </>
  );
};

export default DominicanRep;
