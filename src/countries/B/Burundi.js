import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import bi from "../../img/B/bi.svg";

const Burundi = () => {
  return (
    <>
      <Helmet>
        <title>Burundi : Poorest Nation To Win An Olympic Title </title>
        <meta
          name="description"
          content="Gustave, the man-eating crocodile from Burundi, is believed to
   be the biggest crocodile in the world (over 18 feet and 2,000
   pounds)."
        />
        <meta
          name="keyboard"
          content="burundi, gitega, africa, Poorest Nation To Win An Olympic Title  "
        />
        <link rel="icon" href={bi} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/cambodia" country="Cambodia" />

      {/* header */}
      <Header header="Burundi : Poorest Nation To Win An Olympic Title " />

      {/* article  */}
      <Article flag={bi} />

      {/* features */}
      <Features
        capital="Gitega"
        area="27,834 km²"
        population="11,865,821 (2020)"
        continent="Africa"
        hdi="0.433"
        currency=" Burundian franc"
        language="Kirundi, French, English"
        religion="Christianity(91.5%)"
        literacy="68.38%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
  Gustave, the man-eating crocodile from Burundi, is believed to
   be the biggest crocodile in the world (over 18 feet and 2,000
   pounds). He lives in the Ruzizi River and the northern shores
    of Lake Tanganyika and is believed to have killed more than
    300 people. Records of his attacks on villagers living on
   the northeastern shores of Lake Tanganyika date back to 1987.
"
        page="/cambodia"
        country="Cambodia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/cambodia"
        two="/rwanda"
        three="/tanzania"
        four="/democratic-republic-of-congo"
        con1="Cambodia"
        con2="Rwanda"
        con3="Tanzania"
        con4="Dem. Rep. Of Congo"
      />
    </>
  );
};

export default Burundi;
