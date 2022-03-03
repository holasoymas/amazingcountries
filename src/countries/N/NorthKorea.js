import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import nk from "../../img/N/nk.svg";

const NorthKorea = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>North Korea : Country Where Wearing Jeans Is Illegal</title>
        <meta
          name="description"
          content="North Koreans believe that all Americans have big noses,
 huge eyes, and hairy chests. According to defectors’ accounts,
  they are taught to kill American soldiers in their school
   PE classes."
        />
        <meta
          name="keyboard"
          content="north korea, Pyongyang, asia, Country Where Wearing Jeans Is Illegal"
        />
        <link rel="icon" href={nk} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/north-macedonia" country="North Macedonia" />

      {/* header */}
      <Header
        header="
          North Korea : Country Where Wearing Jeans Is Illegal"
      />

      {/* article  */}
      <Article flag={nk} />

      {/* features */}
      <Features
        capital="Pyongyang"
        area="120,540 km²"
        population="25,549,604 (2018)"
        continent="Asia"
        hdi="0.593"
        currency="Korean People's Won"
        language="Korean"
        religion="State atheism"
        literacy="100%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
North Koreans believe that all Americans have big noses,
 huge eyes, and hairy chests. According to defectors’ accounts,
  they are taught to kill American soldiers in their school
   PE classes. For this, they use cardboard mannequins made 
   to look like people in military uniforms, with giant noses
    and wide-open blue eyes.
"
        page="/north-macedonia"
        country="North Macedonia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/north-macedonia"
        two="/south-korea"
        three="/china"
        four="/russia"
        con1="North Macedonia"
        con2="South Korea"
        con3="China"
        con4="Russia"
      />
    </>
  );
};

export default NorthKorea;
