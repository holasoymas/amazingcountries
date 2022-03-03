import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import comoros from "../../img/C/comoros.svg";

const Comoros = () => {
  return (
    <>
      <Helmet>
        <title>Comoros : The World’s Largest Producers Of Ylang Ylang</title>
        <meta
          name="description"
          content="  They are the world’s largest producers of ylang ylang, an 
  essential oil with both fragrant properties (causing it be
   used a base of many perfumes) and medicinal properties."
        />
        <meta
          name="keyboard"
          content="comoros, moroni,The World’s Largest Producers Of Ylang Ylang "
        />
        <link rel="icon" href={comoros} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/congo" country="Congo" />

      {/* header */}
      <Header header="Comoros : The World’s Largest Producers Of Ylang Ylang" />

      {/* article  */}
      <Article flag={comoros} />

      {/* features */}
      <Features
        capital="Moroni"
        area="1,861 km²"
        population="850,886 (2019)"
        continent="Africa"
        hdi="0.554"
        currency="Comorian franc"
        language="Comorian, French, Arabic"
        religion="Islam(98%)"
        literacy="58.82%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
  They are the world’s largest producers of ylang ylang, an 
  essential oil with both fragrant properties (causing it be
   used a base of many perfumes) and medicinal properties.
    They are also the second largest producers 
    of vanilla and also major producers of cloves.
     These crop exports led to “perfume islands” 
     name being coined for them.
"
        page="/congo"
        country="Congo"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/congo"
        two="/madagascar"
        three="/mozambique"
        four="/seychelles"
        con1="Congo"
        con2="Madagascar"
        con3="Mozambique"
        con4="Seychelles"
      />
    </>
  );
};

export default Comoros;
