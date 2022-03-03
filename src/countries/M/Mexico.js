import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import mx from "../../img/M/mx.svg";

const Mexico = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Mexico : Country That Produces The Most Lemons In The World
        </title>
        <meta
          name="description"
          content="Mexico has the hardest working citizens on earth, with the
 average citizen working 2,148 hours a year, around 41.3 hours
  of work per week!."
        />
        <meta
          name="keyboard"
          content="Mexico, north america, Country That Produces The Most Lemons"
        />
        <link rel="icon" href={mx} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/micronesia" country="Micronesia" />

      {/* header */}
      <Header header="Mexico : Country That Produces The Most Lemons In The World" />

      {/* article  */}
      <Article flag={mx} />

      {/* features */}
      <Features
        capital="Mexico City"
        area="1,972,550 km²"
        population="126,014,024 (2020)"
        continent="North America"
        hdi="0.546"
        currency="Mexican Peso "
        language="Spanish"
        religion="Christianity(88.9%)"
        literacy="95.4%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Mexico has the hardest working citizens on earth, with the
 average citizen working 2,148 hours a year, around 41.3 hours
  of work per week!.
"
        page="/micronesia"
        country="Micronesia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/micronesia"
        two="/usa"
        three="/guatemala"
        four="/cuba"
        con1="Micronesia"
        con2="USA"
        con3="Guatemala"
        con4="Cuba"
      />
    </>
  );
};

export default Mexico;
