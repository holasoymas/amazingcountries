import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import alg from "../../img/A/alg.svg";

const Algeria = () => {
  return (
    <>
      <Helmet>
        <title>Algeria : Largest African Country</title>
        <meta
          name="description"
          content="Only 12% of the land is inhabited,while 
      over 90% is covered by the Sahara desert, because of which 
      Algeria experiences the extreme climate of the desert. 
         "
        />
        <meta
          name="keyboard"
          content="Algeria, Algeris, Africa, , debt-free country, muslims"
        />
        <link rel="icon" href={alg} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/andorra" country="Andorra" />

      {/* header */}
      <Header header="Algeria : Largest African Country" />

      {/* article  */}
      <Article flag={alg} />

      {/* features */}
      <Features
        capital="Algeris"
        area=" 2,381,741 km²"
        population="43,851,044 (2020)"
        continent="Africa"
        hdi="0.748"
        currency="Algerian Dinar"
        language="Algerian Arabic(72%)"
        religion="Sunni( 99% )"
        literacy="81.4%(2020)"
      />

      {/* fact field */}
      <Fact
        didYouKnow="Only 12% of the land is inhabited,while 
      over 90% is covered by the Sahara desert, because of which 
      Algeria experiences the extreme climate of the desert."
        page="/andorra"
        country="Andorra"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/andorra"
        two="/morocco"
        three="/tunisia"
        four="/libya"
        con1="Andorra"
        con2="Morocco"
        con3="Tunisia"
        con4="Libya"
      />
    </>
  );
};

export default Algeria;
