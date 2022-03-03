import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ps from "../../img/P/ps.svg";

const Palestine = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Palestine : Country With The Oldest Olive Tree In The World
        </title>
        <meta
          name="description"
          content="For many centuries, olives have been a central part of
 Palestinian life, culture, and tradition. With over 45% of 
 land in the country dedicated to olive trees."
        />
        <meta
          name="keyboard"
          content="Palestine,east Jerusalem, Ramallah, Country With The Oldest Olive Tree"
        />
        <link rel="icon" href={ps} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/panama" country="Panama" />

      {/* header */}
      <Header header="Palestine : Country With The Oldest Olive Tree In The World" />

      {/* article  */}
      <Article flag={ps} />

      {/* features */}
      <Features
        capital="Ramallah, East Jerusalem"
        area="6,020 km²"
        population="5,159,076 (2020)"
        continent="Area"
        hdi="0.708"
        currency="Israeli new shekel"
        language="Arabic"
        religion="Muslim(83%)"
        literacy="96.3%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
For many centuries, olives have been a central part of
 Palestinian life, culture, and tradition. With over 45% of 
 land in the country dedicated to olive trees, it is no
  surprise that they are a highly revered and treasured aspect
   of Palestine’s identity.
"
        page="/panama"
        country="Panama"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/panama"
        two="/isreal"
        three="/egypt"
        four="/jordan"
        con1="Panama"
        con2="Isreal"
        con3="Egypt"
        con4="Jordan"
      />
    </>
  );
};

export default Palestine;
