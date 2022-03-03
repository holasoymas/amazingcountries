import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ml from "../../img/M/ml.svg";

const Mali = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Mali : Country With The History's Richest Man ("Mansa Musa")
        </title>
        <meta
          name="description"
          content="The richest man to ever live is Malian. Mansa Musa was an 
emperor of the Mali Empire during the 14th century. He was the
 first African ruler to be widely known throughout Europe and
  the Middle East."
        />
        <meta
          name="keyboard"
          content="Mali, Bamako, Country With The History's Richest Man , Mansa Musa"
        />
        <link rel="icon" href={ml} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/malta" country="Malta" />

      {/* header */}
      <Header header="Mali : Country With The History's Richest Man ('Mansa Musa')" />

      {/* article  */}
      <Article flag={ml} />

      {/* features */}
      <Features
        capital="Bamako"
        area="1,240,192 km²"
        population="19,329,841 (2018)"
        continent="Africa"
        hdi="0.434"
        currency="West African CFA franc"
        language="French"
        religion="Muslims(95%)"
        literacy="35.5%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The richest man to ever live is Malian. Mansa Musa was an 
emperor of the Mali Empire during the 14th century. He became
 emperor in 1312. He was the first African ruler to be widely
  known throughout Europe and the Middle East.
"
        page="/malta"
        country="Malta"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/malta"
        two="/algeria"
        three="/niger"
        four="/senigal"
        con1="Malta"
        con2="Algeria"
        con3="Niger"
        con4="Senigal"
      />
    </>
  );
};

export default Mali;
