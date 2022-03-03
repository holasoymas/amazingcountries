import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import tv from "../../img/T/tv.svg";

const Tuvalu = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tuvalu : Least Visited Country In The World</title>
        <meta
          name="description"
          content="The islands were once known as the Ellice Islands. They
 were named after the British MP Edward Ellice when one
  of his ships visited Funafuta."
        />
        <meta
          name="keyboard"
          content="
          Tuvalu, Funafuti, Oceania, Least Visited Country In The World
 "
        />

        <link rel="icon" href={tv} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/uganda" country="Uganda" />

      {/* header */}
      <Header
        header="
          Tuvalu : Least Visited Country In The World
            "
      />

      {/* article  */}
      <Article flag={tv} />

      {/* features */}
      <Features
        capital="Funafuti"
        area="26 km²"
        population="10,645 (2017)"
        continent="Oceania"
        hdi="0.715"
        currency="Tuvaluan dollar,AUS. $"
        language="Tuvaluan,English"
        religion="Christianity(99%)"
        literacy="99%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The islands were once known as the Ellice Islands. They
 were named after the British MP Edward Ellice when one
  of his ships visited Funafuta. The name was later applied 
  to all the islands.
"
        page="/uganda"
        country="Uganda"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/uganda"
        two="/kiribati"
        three="/australia"
        four="/fiji"
        con1="Uganda"
        con2="Kiribati"
        con3="Australia"
        con4="Fiji"
      />
    </>
  );
};

export default Tuvalu;
