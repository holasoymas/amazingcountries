import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import cu from "../../img/C/cu.svg";

const Cuba = () => {
  return (
    <>
      <Helmet>
        <title>Cuba : Country Which Has Won Most Baseball's World Cup</title>
        <meta
          name="description"
          content="When Fidel Castro’s communist government came to power in 1959,
 Cuba was declared an atheist state. In 1969, Castro abolished
  Christmas as an official (paid) holiday."
        />
        <meta
          name="keyboard"
          content="cuba, havana, Country Which Has Won Most Baseball's World Cup"
        />
        <link rel="icon" href={cu} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/cyprus" country="Cyprus" />

      {/* header */}
      <Header header="Cuba : Country Which Has Won Most Baseball's World Cup" />

      {/* article  */}
      <Article flag={cu} />

      {/* features */}
      <Features
        features="Cuba"
        capital="Havana"
        area="109,884 km²"
        population="11,193,470 (2019)"
        continent="North America"
        hdi="0.783"
        currency="Cuban Peso"
        language="Spanish"
        religion="Christianity(59.2%)"
        literacy="99.9%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
When Fidel Castro’s communist government came to power in 1959,
 Cuba was declared an atheist state. In 1969, Castro abolished
  Christmas as an official (paid) holiday, the reason being
   that it had a negative impact on the country’s production
    of sugar. Cuba’s 30-year ban on Christmas came to an end 
    in 1997, after Pope John Paul II’s historic visit to the 
    country. 
"
        page="/cyprus"
        country="Cyprus"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/cyprus"
        two="/bahamas"
        three="/mexico"
        four="/usa"
        con1="Cyprus"
        con2="Bahamas"
        con3="Mexico"
        con4="USA"
      />
    </>
  );
};

export default Cuba;
