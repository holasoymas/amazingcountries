import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import sy from "../../img/S/sy.svg";

const Syria = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Syria : Oldest Capital City In The World ("Damascus")</title>
        <meta
          name="description"
          content="Damascus is widely believed to be one of the oldest continuously
 inhabited cities in the world, with evidence of habitation
  dating back to around 10,000 to 8,000 BCE."
        />
        <meta
          name="keyboard"
          content="
             Syria, Damascus, aisa, Oldest Capital City In The World"
        />
        <link rel="icon" href={sy} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/tajikistan" country="Tajikistan" />

      {/* header */}
      <Header header='Syria : Oldest Capital City In The World ("Damascus")' />

      {/* article  */}
      <Article flag={sy} />

      {/* features */}
      <Features
        capital="Damascus"
        area="185,180 km²"
        population="17,500,657 (2020)"
        continent="Asia"
        hdi="0.567"
        currency="Syrian pound"
        language="Arabic"
        religion="Islam(87%)"
        literacy="80.8%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Damascus is widely believed to be one of the oldest continuously
 inhabited cities in the world, with evidence of habitation
  dating back to around 10,000 to 8,000 BCE. Its location and
   persistence have made the city a nexus for civilizations 
   come and gone. In 2018, its metropolitan area was home to
    about 2.3 million people, and in 2008 UNESCO named the city
     the Arab Capital of Culture.
"
        page="/tajikistan"
        country="Tajikistan"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/tajikistan"
        two="/turkey"
        three="/jordan"
        four="/isreal"
        con1="Tajikistan"
        con2="Turkey"
        con3="Jordan"
        con4="Isreal"
      />
    </>
  );
};

export default Syria;
