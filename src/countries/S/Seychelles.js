import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import sc from "../../img/S/sc.svg";

const Seychelles = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Seychelles : Country With The Highest Literacy Rate In Africa
        </title>
        <meta
          name="description"
          content="The Seychelles was once a pirate hideout, in particular Anse
 Forbans (Pirate’s Cove) on Mahé and Côte d’Or on Praslin. It
is believed that famous pirate Olivier hid a treasure worth
 more than $160,000."
        />
        <meta
          name="keyboard"
          content="Seychelles, Victoria, Country With The Highest Literacy Rate In Africa"
        />
        <link rel="icon" href={sc} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/sierra-leone" country="Sierra Leone" />

      {/* header */}
      <Header header="Seychelles : Country With The Highest Literacy Rate In Africa" />

      {/* article  */}
      <Article flag={sc} />

      {/* features */}
      <Features
        capital="Victoria"
        area="459 km²"
        population="98,462 (2020)"
        continent="Africa"
        hdi="0.796"
        currency="Seychellois rupee"
        language="English,French,Creole"
        religion="Christianity(89.2%)"
        literacy="95.9%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The Seychelles was once a pirate hideout, in particular Anse
 Forbans (Pirate’s Cove) on Mahé and Côte d’Or on Praslin. It
  is believed that famous pirate Olivier Levasseur hid a
   treasure worth more than $160,000 that remains unfound.
"
        page="/sierra-leone"
        country="Sierra Leone"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/sierra-leone"
        two="/kenya"
        three="/madagascar"
        four="/india"
        con1="Sierra Leone"
        con2="Kenya"
        con3="Madagascar"
        con4="India"
      />
    </>
  );
};

export default Seychelles;
