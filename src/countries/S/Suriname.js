import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import sr from "../../img/S/sr.svg";

const Suriname = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Suriname : Only Country Outside Europe Whose Official Language Is
          Dutch
        </title>
        <meta
          name="description"
          content="More than 60% of the Surinamese speak Dutch as their mother
 tongue while the rest of the population speaks it as a second
  language."
        />
        <meta
          name="keyboard"
          content="
          Suriname, Paramaribo, Country Outside Europe Whose Official Language Is Dutch"
        />
        <link rel="icon" href={sr} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/sweden" country="Sweden" />

      {/* header */}
      <Header header=" Suriname : Only Country Outside Europe Whose Official Language Is Dutch" />

      {/* article  */}
      <Article flag={sr} />

      {/* features */}
      <Features
        capital="Paramaribo"
        area="163,821 km²"
        population="575,990 (2018)"
        continent="South America"
        hdi="0.738"
        currency="Surinamese dollar"
        language="Dutch"
        religion="Christianity(48.4%)"
        literacy="94.4%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
More than 60% of the Surinamese speak Dutch as their mother
 tongue while the rest of the population speaks it as a second
  language. Suriname is the only country outside Europe where
   Dutch is spoken by a majority of the population.
"
        page="/sweden"
        country="Sweden"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/sweden"
        two="/brazil"
        three="/guyana"
        four="/venezuela"
        con1="Sweden"
        con2="Brazil"
        con3="Guyana"
        con4="Venezuela"
      />
    </>
  );
};

export default Suriname;
