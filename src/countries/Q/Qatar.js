import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import qa from "../../img/Q/qa.svg";

const Qatar = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Qatar : Country With The Best Airline In The World ("Qatar Airways")
        </title>
        <meta
          name="description"
          content="Qatar is known for being the first to make purple dye out of
 shellfish. The inhabitants of Al Khor Island hold this honor.
  Al Khor Island is one of the most beautiful and popular 
  tourist destinations."
        />
        <meta
          name="keyboard"
          content="Qatar, Doha, Best Airline In The World, Qatar Airways"
        />
        <link rel="icon" href={qa} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/romania" country="Romania" />

      {/* header */}
      <Header
        header='
          Qatar : Country With The Best Airline In The World ("Qatar Airways")'
      />

      {/* article  */}
      <Article flag={qa} />

      {/* features */}
      <Features
        capital="Doha"
        area="300,000 km²"
        population="2,795,484 (2020)"
        continent="Asia"
        hdi="0.848"
        currency="Quatari riyal"
        language="Arabic"
        religion="Christianity(92.2%)"
        literacy="93.5%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Qatar is known for being the first to make purple dye out of
 shellfish. The inhabitants of Al Khor Island hold this honor.
  Al Khor Island is one of the most beautiful and popular 
  tourist destinations in Qatar. There have been discoveries 
  of items from the second millennium BC, and the island is
   called the Purple Island due to the dye production that
    happens here.
"
        page="/romania"
        country="Romania"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/romania"
        two="/saudi-arabia"
        three="/uae"
        four="/bahrain"
        con1="Romania"
        con2="Saudi Arabia"
        con3="UAE"
        con4="Bahrain"
      />
    </>
  );
};

export default Qatar;
