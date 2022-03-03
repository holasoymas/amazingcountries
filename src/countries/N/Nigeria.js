import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ng from "../../img/N/ng.svg";

const Nigeria = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Niger : Country With Highest Population In Africa (206 millions)
        </title>
        <meta
          name="description"
          content="Kofar Mata Dye Pit in Kano was established in 1498 and 
is Africa's oldest. It continues to preserve the traditional
 tye and dye production process used in northern Nigeria."
        />
        <meta
          name="keyboard"
          content="nigeria, Abuja, africa, Country With Highest Population In Africa"
        />
        <link rel="icon" href={ng} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/north-korea" country="North Korea" />

      {/* header */}
      <Header
        header='
      Niger : Country With Highest Population In Africa ("206 millions")'
      />

      {/* article  */}
      <Article flag={ng} />

      {/* features */}
      <Features
        capital="Abuja"
        area="923,769 km²"
        population="206,139,589 (2021)"
        continent="Africa"
        hdi="0.593"
        currency="Naira"
        language="English"
        religion="Christianity(49.3%)"
        literacy="62.02%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Kofar Mata Dye Pit in Kano was established in 1498 and 
is Africa's oldest. It continues to preserve the traditional
 tye and dye production process used in northern Nigeria.
  Methods and skills used are ancient, and handed down from
   generation to generation.
"
        page="/north-korea"
        country="North Korea"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/north-korea"
        two="/chad"
        three="/cameroon"
        four="/niger"
        con1="North Korea"
        con2="Chad"
        con3="Cameroon"
        con4="Niger"
      />
    </>
  );
};

export default Nigeria;
