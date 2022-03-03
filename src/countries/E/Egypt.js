import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import eg from "../../img/E/eg.svg";

const Egypt = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Egypt : First Country In The World Who Introduced 365 days Calender
        </title>
        <meta
          name="description"
          content="The Egyptians were probably the first to adopt a mainly solar
  calendar. This so-called ‘heliacal rising’ always preceded
   the flood by a few days."
        />
        <meta
          name="keyboard"
          content="egypt, cairo, The Country Who Introduced 365 days Calender"
        />
        <link rel="icon" href={eg} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/el-slavador" country="El Slavador" />

      {/* header */}
      <Header header="Egypt : First Country In The World Who Introduced 365 days Calender" />

      {/* article  */}
      <Article flag={eg} />

      {/* features */}
      <Features
        capital="Cairo"
        area="1,010,408 km²"
        population="101,478,581 (2021)"
        continent="Africa"
        hdi="0.707"
        currency="Egyptian pound"
        language="Arabic"
        religion="Islam(90.3%)"
        literacy="71.2%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
 The Egyptians were probably the first to adopt a mainly solar
  calendar. This so-called ‘heliacal rising’ always preceded
   the flood by a few days. Based on this knowledge, they
    devised a 365-day calendar that seems to have begun in
     4236 B.C.E, the earliest recorded year in history.
"
        page="/el-slavador"
        country="El Slavador"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/el-slavador"
        two="/libya"
        three="/sudan"
        four="/isreal"
        con1="El Slavador"
        con2="Libya"
        con3="Sudan"
        con4="Isreal"
      />
    </>
  );
};

export default Egypt;
