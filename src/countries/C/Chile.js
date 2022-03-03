import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import cl from "../../img/C/cl.svg";

const Chile = () => {
  return (
    <>
      <Helmet>
        <title>
          Chile : Country With The Driest Place On Earth ( Atacama Desert )
        </title>
        <meta
          name="description"
          content=" The oldest known deliberate mummy is a child, one of the
  Chinchorro mummies found in the Camarones Valley in Chile
   around 5050 BC."
        />
        <meta name="keyboard" content="chile, santiago, " />
        <link rel="icon" href={cl} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/china" country="China" />

      {/* header */}
      <Header header="Chile : Country With The Driest Place On Earth ( Atacama Desert )" />

      {/* article  */}
      <Article flag={cl} />

      {/* features */}
      <Features
        capital="Santiago"
        area="756,096.3 km²"
        population="17,574,003 (2017)"
        continent="South America"
        hdi="0.851"
        currency="Chilean Peso"
        language="Spanish"
        religion="Christianity(63%)"
        literacy="96.4%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
 The oldest known deliberate mummy is a child, one of the
  Chinchorro mummies found in the Camarones Valley in Chile
   around 5050 BC. So far a total of 282 Chinchorro mummies
    have been removed from burial sites along the narrow 
    coastal strip from Ilo in southern Peru to Antofagasta in
     northern Chile. Of these, 149 were created by Chinchorro
      artisans, and the rest were the work of nature.
"
        page="/china"
        country="China"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/china"
        two="/argentina"
        three="/peru"
        four="/bolivia"
        con1="China"
        con2="Argentina"
        con3="Peru"
        con4="Bolivia"
      />
    </>
  );
};

export default Chile;
