import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import cf from "../../img/C/cf.svg";

const CAR = () => {
  return (
    <>
      <Helmet>
        <title>
          Central African Republic : Country With The Lowest Life Expectancy (
          53.34 yrs. )
        </title>
        <meta
          name="description"
          content="CAR counts a myriad of armed groups and militias. It is 
 estimated that armed groups and militias run up to 80 % 
 of the territory."
        />
        <meta
          name="keyboard"
          content="central african republic, Bangui, country with the lowest life expectancy"
        />
        <link rel="icon" href={cf} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/chad" country="Chad" />

      {/* header */}
      <Header
        header="Central African Republic :  Country With The Lowest Life Expectancy (
          53.34 yrs. )"
      />

      {/* article  */}
      <Article flag={cf} />

      {/* features */}
      <Features
        capital="Bangui"
        area="622,984 km²"
        population="4,666,368 (2018)"
        continent="Africa"
        hdi="0.397"
        currency="Central African CFA franc"
        language="French,Sango"
        religion="Christianity(89.5%)"
        literacy="37.4%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
 CAR counts a myriad of armed groups and militias. It is 
 estimated that armed groups and militias run up to 80 % 
 of the territory, challenging the authority of the central
  government everywhere they operate. The presence of armed
   groups has prevented many internally displaced people from
    returning to their homes.
"
        page="/chad"
        country="Chad"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/chad"
        two="/sudan"
        three="/democratic-republic-of-congo"
        four="/cameroon"
        con1="Chad"
        con2="Sudan"
        con3="Dem. Rep. of Congo"
        con4="Cameroon"
      />
    </>
  );
};

export default CAR;
