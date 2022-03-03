import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import pa from "../../img/P/pa.svg";

const Panama = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Panama : First Latin American Country To Accept US dollar As A Legal
          Tender
        </title>
        <meta
          name="description"
          content="The official currency of Panama is the Panamanian Balboa.
 Panama was the first Latin American country to adopt US
  currency as legal tender alongside its own."
        />
        <meta
          name="keyboard"
          content="Panama,latina, First Latin American Country To Accept US dollar"
        />
        <link rel="icon" href={pa} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/papua-new-guinea" country="Papua New Guinea" />

      {/* header */}
      <Header
        header="Panama : First Latin American Country To Accept US dollar As A Legal Tender
   "
      />

      {/* article  */}
      <Article flag={pa} />

      {/* features */}
      <Features
        capital="Panama City"
        area="75,417 km²"
        population="4,379,039 (2021)"
        continent="North America"
        hdi="0.815"
        currency="Balboa"
        language="Spanish"
        religion="Christianity(91.5%)"
        literacy="95.4%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The official currency of Panama is the Panamanian Balboa.
 Panama was the first Latin American country to adopt US
  currency as legal tender alongside its own.
"
        page="/papua-new-guinea"
        country="Papua New Guinea"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/papua-new-guinea"
        two="/colombia"
        three="/costa-rica"
        four="/nicaragua"
        con1="Papua New Guinea"
        con2="Colombia"
        con3="Costa Rica"
        con4="Nicaragua"
      />
    </>
  );
};

export default Panama;
