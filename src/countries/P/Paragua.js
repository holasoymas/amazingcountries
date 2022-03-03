import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import py from "../../img/P/py.svg";

const Paraguay = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Paraguay : Only Country In The World Where Dueling Is Legal
        </title>
        <meta
          name="description"
          content="The Itaipu dam, located on Paraguay’s southeastern border 
(formed by the Parana River), is the largest hydroelectric
 power plant in the world."
        />
        <meta
          name="keyboard"
          content="Paraguay, Asuncion,south america, Only Country Where Dueling Is Legal"
        />
        <link rel="icon" href={py} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/peru" country="Peru" />

      {/* header */}
      <Header header="Paraguay : Only Country In The World Where Dueling Is Legal" />

      {/* article  */}
      <Article flag={py} />

      {/* features */}
      <Features
        capital="Asuncion"
        area="406,796 km²"
        population=" 7,359,000 (2021)"
        continent="South America"
        hdi="0.728"
        currency="Guarani"
        language="Spanish, Guarani"
        religion="Christianity(96.1%)"
        literacy="94%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The Itaipu dam, located on Paraguay’s southeastern border 
(formed by the Parana River), is the largest hydroelectric
 power plant in the world. Concrete used for the building of
  the Itaipu Dam was equivalent to concrete that can build 210
   football stadiums. Paraguay receives 75% of its electricity
    from this dam which is also a binational dam. The dam is 
    under the management of the Brazilian government.
"
        page="/peru"
        country="Peru"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/peru"
        two="/brazil"
        three="/argentina"
        four="/bolivia"
        con1="Peru"
        con2="Brazil"
        con3="Argentina"
        con4="Bolivia"
      />
    </>
  );
};

export default Paraguay;
