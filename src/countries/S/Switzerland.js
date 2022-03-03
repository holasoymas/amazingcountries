import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import sw from "../../img/S/sw.svg";

const Switzerland = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Switzerland : Most Innovative Country In The World</title>
        <meta
          name="description"
          content="Amongst industrialized nations, Switzerland has one of the
 highest rates of gun ownership. However, that does not 
 necessarily have to lead to more crime."
        />
        <meta
          name="keyboard"
          content="
             Switzerland, Bern, Most Innovative Country In The World"
        />
        <link rel="icon" href={sw} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/syria" country="Syria" />

      {/* header */}
      <Header header="Switzerland : Most Innovative Country In The World" />

      {/* article  */}
      <Article flag={sw} />

      {/* features */}
      <Features
        capital="Bern"
        area="41,285 km²"
        population="8,570,146 (2019)"
        continent="Europe"
        hdi="0.955"
        currency="Swiss franc"
        language="German,French,Italian"
        religion="Christianity(65.5%)"
        literacy="99%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Amongst industrialized nations, Switzerland has one of the
 highest rates of gun ownership. However, that does not 
 necessarily have to lead to more crime; Switzerland has
  nearly half the gun-related deaths the United States has.
   Switzerland actually has one of the lowest crime rates of
    all industrialized countries.
"
        page="/syria"
        country="Syria"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/syria"
        two="/france"
        three="/germany"
        four="/italy"
        con1="Syria"
        con2="France"
        con3="Germany"
        con4="Italy"
      />
    </>
  );
};

export default Switzerland;
