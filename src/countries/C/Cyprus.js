import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import cy from "../../img/C/cy.svg";

const Cyprus = () => {
  return (
    <>
      <Helmet>
        <title>Cyprus : Country Which Has A Map On It's Flag </title>
        <meta
          name="description"
          content="Oldest perfumes ever discovered by archaeologists were
 discovered on Cyprus. Excavations between 2004 and 2005
  discovered evidence of a factory that existed up to 4000
   years ago, during the Bronze Age."
        />
        <meta
          name="keyboard"
          content="cyprus, nicosia, Country Which Has A Map On It's Flag"
        />
        <link rel="icon" href={cy} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/czech-republic" country="Czech Republic" />

      {/* header */}
      <Header header="Cyprus : Country Which Has A Map On It's Flag" />

      {/* article  */}
      <Article flag={cy} />

      {/* features */}
      <Features
        capital="Nicosia"
        area="9,251 km²"
        population="875,899 (2019)"
        continent="Europe"
        hdi="0.887"
        currency="Cyprusn Peso"
        language="Greek, Turkish"
        religion="Christianity(72.3%)"
        literacy="98.7%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Oldest perfumes ever discovered by archaeologists were
 discovered on Cyprus. Excavations between 2004 and 2005
  discovered evidence of a factory that existed up to 4000
   years ago, during the Bronze Age.
"
        page="/czech-republic"
        country="Czech Republic"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/czech-republic"
        two="/turkey"
        three="/isreal"
        four="/greece"
        con1="Czech Republic"
        con2="Turkey"
        con3="Isreal"
        con4="Greece"
      />
    </>
  );
};

export default Cyprus;
