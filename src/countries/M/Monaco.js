import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import mc from "../../img/M/mc.svg";

const Monaco = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Monaco : Billionares Playground Of The World</title>
        <meta
          name="description"
          content="Monaco is home to 12,261 millionaiers in less than one square
 mile. Almost 1 in 3 people living there is a milllionaire. 
 Average home cost in Monaco is also very high (i.e, $4,560/ft2).
 More than 32% of the population are millionaires."
        />
        <meta
          name="keyboard"
          content=" Monaco, Billionares Playground Of The World, most millionaries country"
        />
        <link rel="icon" href={mc} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/mongolia" country="Mongolia" />

      {/* header */}
      <Header header="Monaco : Billionares Playground Of The World" />

      {/* article  */}
      <Article flag={mc} />

      {/* features */}
      <Features
        features="Monaco"
        capital="Monaco"
        area="2.02 km²"
        population="38,300 (2019)"
        continent="Europe"
        hdi="-"
        currency="Euro"
        language="French"
        religion="Christianity(86%)"
        literacy="99%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Monaco is home to 12,261 millionaiers in less than one square
 mile. Almost 1 in 3 people living there is a milllionaire. 
 Average home cost in Monaco is also very high 
 (i.e, $4,560/ft2), buyer can expect to pay atleast $1.6 
 million for small one bedroom apartment in Monaco.
"
        page="/mongolia"
        country="Mongolia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/mongolia"
        two="/france"
        three="/italy"
        four="/malta"
        con1="Mongolia"
        con2="France"
        con3="Italy"
        con4="Malta"
      />
    </>
  );
};

export default Monaco;
