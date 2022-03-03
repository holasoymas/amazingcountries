import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ss from "../../img/S/ss.svg";

const SouthSudan = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>South Sudan : Youngest Country In The World (2011 AD)</title>
        <meta
          name="description"
          content="During the South Sudanese civil war, at least 50,000 people 
have been killed, more than 2 million have become refugees
 in other countries and five million South Sudanese 
 have faced severe food shortages"
        />
        <meta
          name="keyboard"
          content="
  South Sudan, juba, Youngest Country In The World, africa"
        />
        <link rel="icon" href={ss} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/spain" country="Spain" />

      {/* header */}
      <Header header="South Sudan : Youngest Country In The World ('2011 AD')" />

      {/* article  */}
      <Article flag={ss} />

      {/* features */}
      <Features
        capital="Juba"
        area="644,329 km²"
        population="12,778,250 (2019)"
        continent="Africa"
        hdi="0.433"
        currency="South Sudanese Pound"
        language="English"
        religion="Christianity(60.5%)"
        literacy="27%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
During the South Sudanese civil war, at least 50,000 people 
have been killed, more than two million have become refugees
 in other countries and around five million South Sudanese 
 have faced severe food shortages.
"
        page="/spain"
        country="Spain"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/spain"
        two="/sudan"
        three="/ethiopia"
        four="/kenya"
        con1="Spain"
        con2="Sudan"
        con3="Ethiopia"
        con4="Kenya"
      />
    </>
  );
};

export default SouthSudan;
