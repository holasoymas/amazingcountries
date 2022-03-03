import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ly from "../../img/L/ly.svg";

const Libya = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Libya : Home To The Largest Proven Oil Reserves In Africa</title>
        <meta
          name="description"
          content="Home To The Largest Proven Oil Reserves In Africa. The
 discovery of oil in Libya in the 1950s was a great
  turnaround for the country which had previously been ranked
   among the poorest in the world."
        />
        <meta
          name="keyboard"
          content="
              Libya, tripoli, Home To Largest Proven Oil Reserves In Africa"
        />
        <link rel="icon" href={ly} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/liechtenstein" country="Liechtenstein" />

      {/* header */}
      <Header header="Libya : Home To The Largest Proven Oil Reserves In Africa" />
      {/* article  */}
      <Article flag={ly} />

      {/* features */}
      <Features
        capital="Tripoli"
        area="1,759,541 km²"
        population="6,959,000 (2021)"
        continent="Africa"
        hdi="0.724"
        currency="Libyan dinar"
        language="Arabic"
        religion="Islam(97%)"
        literacy="99.6%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Home To The Largest Proven Oil Reserves In Africa. The
 discovery of oil in Libya in the 1950s was a great
  turnaround for the country which had previously been ranked
   among the poorest in the world. As of 2010, the country’s
    annual oil production was 1.65 million barrels per day.
"
        page="/liechtenstein"
        country="Liechtenstein"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/liechtenstein"
        two="/egypt"
        three="/algeria"
        four="/niger"
        con1="Liechtenstein"
        con2="Egypt"
        con3="Algeria"
        con4="Niger"
      />
    </>
  );
};

export default Libya;
