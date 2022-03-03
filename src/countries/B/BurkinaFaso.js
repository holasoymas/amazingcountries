import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import bf from "../../img/B/bf.svg";

const BurkinaFaso = () => {
  return (
    <>
      <Helmet>
        <title>
          Burkina Faso : Country With The Highest Unemployment Rate In The World
        </title>
        <meta
          name="description"
          content="Burkina Faso translates as “Land of the honest men.” 
   The capital city, Ouagadougou, is a French adaptation of the
    native name “Wogodogo,” meaning “where people get honour and
     respect”."
        />
        <meta
          name="keyboard"
          content="burkina faso, Ouagadougou, africa, Highest unemployment rate in the world "
        />
        <link rel="icon" href={bf} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/burundi" country="Burundi" />

      {/* header */}
      <Header header="Burkina Faso : Country With The Highest Unemployment Rate In The World" />

      {/* article  */}
      <Article flag={bf} />

      {/* features */}
      <Features
        capital="Ouagadougou"
        area="274,200 km²"
        population="21,510,181 (2020)"
        continent="Africa"
        hdi="0.452"
        currency=" West African CFA franc"
        language="French"
        religion="Islam(60.5%)"
        literacy="41.2%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
   Burkina Faso translates as “Land of the honest men.” 
   The capital city, Ouagadougou, is a French adaptation of the
    native name “Wogodogo,” meaning “where people get honour and
     respect”.
"
        page="/burundi"
        country="Burundi"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/burundi"
        two="/niger"
        three="/benin"
        four="/ghana"
        con1="Burundi"
        con2="Niger"
        con3="Benin"
        con4="Ghana"
      />
    </>
  );
};

export default BurkinaFaso;
