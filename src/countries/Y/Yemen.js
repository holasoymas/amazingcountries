import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ye from "../../img/Y/ye.svg";

const Yemen = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Yemen : Country With The World Oldest Skyscraper City ("Shibam")
        </title>
        <meta
          name="description"
          content="Although the country faces many issues in the modern times, 
it was known as Arabia Felix in the past. The term means 
“fortunate” or “happy”."
        />
        <meta
          name="keyboard"
          content="
          yemen, Sana's, Country With The World Oldest Skyscraper City, Shibam
 "
        />

        <link rel="icon" href={ye} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/zambia" country="Zambia" />

      {/* header */}
      <Header
        header='
          Yemen : Country With The World Oldest Skyscraper City ("Shibam") 
'
      />

      {/* article  */}
      <Article flag={ye} />

      {/* features */}
      <Features
        capital="Sana's"
        area="555,000 km²"
        population="28,498,683 (2018)"
        continent="Asia"
        hdi="0.470"
        currency="Yemeni rial"
        language="Arabic"
        religion="Islam(99%)"
        literacy="90.2%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Although the country faces many issues in the modern times, 
it was known as Arabia Felix in the past. The term means 
“fortunate” or “happy.” It was called so since Yemen was 
more fertile than most of the Arabian Peninsula. The mountains
 of the country invited rains that contributed to a flourishing
  agriculture in the region.
"
        page="/zambia"
        country="Zambia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/zambia"
        two="/saudi-arabia"
        three="/oman"
        four="/djibouti"
        con1="Zambia"
        con2="Saudi Arabia"
        con3="Oman"
        con4="Djibouti"
      />
    </>
  );
};

export default Yemen;
