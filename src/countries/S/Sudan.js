import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import sd from "../../img/S/sd.svg";

const Sudan = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Sudan : Country With The World's Largest Collection Of Pyramids ( 225
          )
        </title>
        <meta
          name="description"
          content="While Egypt gets noticed for its pyramids, Sudan is known as
 the place with the world's largest collection of pyramids.
  There are over 200 recorded pyramids in the country."
        />
        <meta
          name="keyboard"
          content="
sudan, khartoum, Country With The World's Largest Collection Of Pyramids"
        />
        <link rel="icon" href={sd} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/suriname" country="Suriname" />

      {/* header */}
      <Header
        header="
      Sudan : Country With The World's Largest Collection Of Pyramids ( 225 )"
      />

      {/* article  */}
      <Article flag={sd} />

      {/* features */}
      <Features
        capital="Khartoum"
        area="1,886,068 km²"
        population="44,909,353"
        continent="Africa"
        hdi="0.510"
        currency="Sudanese Pound"
        language="Arabic,English"
        religion="Islam(90.7%)"
        literacy="72.5%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
While Egypt gets noticed for its pyramids, Sudan is known as
 the place with the world's largest collection of pyramids.
  There are over 200 recorded pyramids in the country.
"
        page="/suriname"
        country="Suriname"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/suriname"
        two="/egypt"
        three="/ethiopia"
        four="/chad"
        con1="Suriname"
        con2="Egypt"
        con3="Ethiopia"
        con4="Chad"
      />
    </>
  );
};

export default Sudan;
