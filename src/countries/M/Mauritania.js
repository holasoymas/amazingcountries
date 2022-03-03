import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import mr from "../../img/M/mr.svg";

const Mauritania = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mauritania : Last Country To Abolish Slavery In The World</title>
        <meta
          name="description"
          content="Mauritania became the last country in the world to abolish 
slavery when the practice was finally banned in 1981. In 2012,
 it was estimated that 10% - 20% of the population still 
 lived in slavery."
        />
        <meta
          name="keyboard"
          content="Mauritania, Nouakchott, africa, Last Country To Abolish Slavery"
        />
        <link rel="icon" href={mr} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/mauritius" country="Mauritius" />

      {/* header */}
      <Header header="Mauritania : Last Country To Abolish Slavery In The World" />

      {/* article  */}
      <Article flag={mr} />

      {/* features */}
      <Features
        capital="Nouakchott"
        area="1,030,000 km²"
        population="4,403,313 (2018)"
        continent="Africa"
        hdi="0.546"
        currency="Ouguiya"
        language="Arabic, French"
        religion="Islam(100%)"
        literacy="53.5%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Mauritania became the last country in the world to abolish 
slavery when the practice was finally banned in 1981. In 2012,
 it was estimated that 10% to 20% of the population still 
 lived in slavery.
"
        page="/mauritius"
        country="Mauritius"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/mauritius"
        two="/morocco"
        three="/algeria"
        four="/mali"
        con1="Mauritius"
        con2="Morocco"
        con3="Algeria"
        con4="Mali"
      />
    </>
  );
};

export default Mauritania;
