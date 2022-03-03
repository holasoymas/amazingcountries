import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import fi from "../../img/F/fi.svg";

const Finland = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Finland : Country With The Most Metal Bands Per Residents ( 37.14
          metal bands/100,000 perople )
        </title>
        <meta
          name="description"
          content="Even though
   Turkey is the home of St. Nicholas, the Finnish folklore
    and the idea of St. Nicholas were combined in the 1500s,
     and became the Santa we have today."
        />
        <meta
          name="keyboard"
          content="finland, helsinki, europe, happiest country, Most Metal Bands Per Residents"
        />
        <link rel="icon" href={fi} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/france" country="France" />

      {/* header */}
      <Header
        header="Finland : Country With The Most Metal Bands Per Residents ( 37.14
          metal bands/100,000 perople )"
      />

      {/* article  */}
      <Article flag={fi} />

      {/* features */}
      <Features
        capital="Helsinki"
        area="338,455 km²"
        population="5,536,146 (2020)"
        continent="Europe"
        hdi="0.938"
        currency="Euro"
        language="Finnish,Swedish"
        religion="Christianity(69.8%)"
        literacy="99%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
According to early folklore in Lapland, which was inspired
 by Norse mythology, there were Santa-like creatures who
  allegedly delivered gifts on Midwinter’s night. Even though
   Turkey is the home of St. Nicholas, the Finnish folklore
    and the idea of St. Nicholas were combined in the 1500s,
     and became the Santa we have today.
"
        page="/france"
        country="France"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/france"
        two="/sweden"
        three="/norway"
        four="/russia"
        con1="France"
        con2="Sweden"
        con3="Norway"
        con4="Russia"
      />
    </>
  );
};

export default Finland;
