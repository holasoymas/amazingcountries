import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import be from "../../img/B/be.svg";

const Belgium = () => {
  return (
    <>
      <Helmet>
        <title>Belgium : Diamond Capital Of The World ( Antwerp )</title>
        <meta
          name="description"
          content="Belgium has more castles per kilometer than
        any other country in the world. The world record for a
         democratic nation to be without an elected government is
         held by Belgium."
        />
        <meta
          name="keyboard"
          content="belgium, Europe, brussls, diamond capital of the world"
        />
        <link rel="icon" href={be} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/belize" country="Belize" />

      {/* header */}
      <Header header="Belgium : Diamond Capital Of The World ( Antwerp )" />

      {/* article  */}
      <Article flag={be} />

      {/* features */}
      <Features
        capital="Brussels"
        area="30,689 km²"
        population="11,492,641 (2020)"
        continent="Europe"
        hdi="0.919"
        currency="Euro"
        language="French,Dutch,German"
        religion="Christianity(60%)"
        literacy="99%(2020)"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
       Belgium has more castles per kilometer than
        any other country in the world. The world record for a
         democratic nation to be without an elected government is
         held by Belgium, which lasted for 589 days in 2010-11.
         Following national elections, the opposing Flemish and
          Walloon regions were unable to agree on policy issues
          and form a governing coalition."
        page="/belize"
        country="Belize"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/belize"
        two="/france"
        three="/germany"
        four="/netherlands"
        con1="Belize"
        con2="France"
        con3="Germany"
        con4="Netherlands"
      />
    </>
  );
};

export default Belgium;
