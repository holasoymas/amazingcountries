import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import om from "../../img/O/om.svg";

const Oman = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Oman : Oldest Independent State In The Arab World</title>
        <meta
          name="description"
          content="Oman is the oldest independent state in the Arab world. Oman
 has been ruled by the Omani Al Said Family since 1744. It was
  one of the most isolated and traditional countries in the 
  Arab World."
        />
        <meta
          name="keyboard"
          content="oman, Muscat, aisa, Oldest Independent State In The Arab World"
        />
        <link rel="icon" href={om} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/pakistan" country="Pakistan" />

      {/* header */}
      <Header header="Oman : Oldest Independent State In The Arab World" />

      {/* article  */}
      <Article flag={om} />

      {/* features */}
      <Features
        capital="Muscat"
        area="309,500 km²"
        population="4,829,473 (2018)"
        continent="Asia"
        hdi="0.813"
        currency="Omani Rial"
        language="Arebic"
        religion="Muslim(85.6%)"
        literacy="95.6%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Oman is the oldest independent state in the Arab world. Oman
 has been ruled by the Omani Al Said Family since 1744. It was
  one of the most isolated and traditional countries in the 
  Arab World, until the 1970s when Sultan Qaboos became the 
  ruler.
"
        page="/pakistan"
        country="Pakistan"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/pakistan"
        two="/uae"
        three="/saudi-arabia"
        four="/yemen"
        con1="Pakistan"
        con2="UAE"
        con3="Saudi Arabia"
        con4="Yemen"
      />
    </>
  );
};

export default Oman;
