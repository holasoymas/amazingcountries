import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import sril from "../../img/S/sril.svg";

const SriLanka = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sri Lanka : The Pearl Of The Indian Ocean</title>
        <meta
          name="description"
          content="Sri Lanka has two names that it’s also known as. The first is
 ‘pearl of the Indian Ocean’, this is said to be named after 
 its incredible beauty, varied biodiversity (the highest in
  Asia!)."
        />
        <meta
          name="keyboard"
          content="
  Sri Lanka, colombo, asia, The Pearl Of The Indian Ocean"
        />
        <link rel="icon" href={sril} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/sudan" country="Sudan" />

      {/* header */}
      <Header header="Sri Lanka : The Pearl Of The Indian Ocean" />

      {/* article  */}
      <Article flag={sril} />

      {/* features */}
      <Features
        capital="Colombo"
        area="65,610 km²"
        population="21,919,000 (2020)"
        continent="Asia"
        hdi="0.782"
        currency="Sri Lankan Rupee"
        language="Sinhala, Tamil"
        religion="Buddhism(70.2%)"
        literacy="91.7%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Sri Lanka has two names that it’s also known as. The first is
 ‘pearl of the Indian Ocean’, this is said to be named after 
 its incredible beauty, varied biodiversity (the highest in
  Asia!), as well as one of its main exports being precious 
  gemstones. The second, the ‘teardrop of India’, is a little
   more obvious, due to its perfect teardrop shape and being 
   off the coast of India.
"
        page="/sudan"
        country="Sudan"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/sri-lanka"
        two="/india"
        three="/maldivs"
        four="/bangladesh"
        con1="Sri Lanka"
        con2="India"
        con3="Maldivs"
        con4="Bangladesh"
      />
    </>
  );
};

export default SriLanka;
