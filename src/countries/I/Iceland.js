import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import is from "../../img/I/is.svg";

const Iceland = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Iceland : The Safest Country In The World</title>
        <meta
          name="description"
          content="It is known as one of the youngest landmasses on the 
planet and was one of the last places on earth to be settled 
by humans.Over 1,100 years ago Vikings from Norway discovered
 Iceland by accident."
        />
        <meta
          name="keyboard"
          content="iceland, reykjavik, safest country in the world, europe, scandinavia"
        />
        <link rel="icon" href={is} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/india" country="India" />

      {/* header */}
      <Header header="Iceland : The Safest Country In The World" />

      {/* article  */}
      <Article flag={is} />

      {/* features */}
      <Features
        capital="Reykjavik"
        area="103,000 km²"
        population="356,991(2019)"
        continent="Europe"
        hdi="0.949"
        currency="Icelandic króna"
        language="Icelandic"
        religion="Christianity(75.1%)"
        literacy="99%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Iceland is known as one of the youngest landmasses on the 
planet and was one of the last places on earth to be settled 
by humans. Surprisingly, over 1,100 years ago Vikings from 
Norway discovered Iceland by accident.
"
        page="/india"
        country="India"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/india"
        two="/norway"
        three="/sweden"
        four="/uk"
        con1="India"
        con2="Norway"
        con3="Sweden"
        con4="United Kingdom"
      />
    </>
  );
};

export default Iceland;
