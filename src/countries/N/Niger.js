import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ne from "../../img/N/ne.svg";

const Niger = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Niger : Country With Highest Fertility Rate In The World ("7
          children")
        </title>
        <meta
          name="description"
          content="Niger sits on some of the world's largest uranium deposits,
 but is one of the 'Heavily Indebted Poor Countries' (HIPC)
. Its economy is based on subsistence agriculture, like 
 crops and livestock."
        />
        <meta
          name="keyboard"
          content="niger, Niamey, Country With Highest Fertility Rate In The World"
        />
        <link rel="icon" href={ne} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/nigeria" country="Nigeria" />

      {/* header */}
      <Header
        header='
      Niger : Country With Highest Fertility Rate In The World ("7 children")'
      />
      {/* article  */}
      <Article flag={ne} />

      {/* features */}
      <Features
        capital="Niamey"
        area="1,267,000 km²"
        population="24,112,753 (2021)"
        continent="Africa"
        hdi="0.394"
        currency="West African CFA franc"
        language="French"
        religion="Islam(99.3%)"
        literacy="35%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
Niger sits on some of the world's largest uranium deposits,
 but is one of the 'Heavily Indebted Poor Countries'
  (HIPC). Its economy is based on subsistence agriculture, 
  like crops and livestock, and the export of raw commodities.
"
        page="/nigeria"
        country="Nigeria"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/nigeria"
        two="/algeria"
        three="/chad"
        four="/benin"
        con1="Nigeria"
        con2="Algeria"
        con3="Chad"
        con4="Benin"
      />
    </>
  );
};

export default Niger;
