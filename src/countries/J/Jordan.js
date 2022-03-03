import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import jo from "../../img/J/jo.svg";

const Jordan = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jordan : The Country Of Lost City ( "Petra" )</title>
        <meta
          name="description"
          content="Jordan is home to more than 100,000 archaeological, religious
 and tourist sights. Like Petra, Dead Sea, Wadi Rum and Jerash
 , only to name a few. Jordan is rich in history and culture."
        />
        <meta
          name="keyboard"
          content="aman, Jordan, middle east, The Country Of Lost City, Petra"
        />
        <link rel="icon" href={jo} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/kazakhstan" country="Kazakhstan" />

      {/* header */}
      <Header header='Jordan : The Country Of Lost City ( "Petra" )' />

      {/* article  */}
      <Article flag={jo} />

      {/* features */}
      <Features
        capital="Amman"
        area="89,342 km²"
        population="9,531,712 (2015)"
        continent="Asia"
        hdi="0.729"
        currency="Jordanian dinar"
        language="Arabic"
        religion="Islam(95%)"
        literacy="98.2%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Jordan is home to more than 100,000 archaeological, religious
 and tourist sights. Like Petra, Dead Sea, Wadi Rum and Jerash
 , only to name a few. Jordan is rich in history and culture,
  it is a great holiday destination to enjoy your time and 
  educate yourself on Middle Eastern heritage.
"
        page="/kazakhstan"
        country="Kazakhstan"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/"
        two="/isreal"
        three="/syria"
        four="/iraq"
        con1="Kazakhstan"
        con2="Isreal"
        con3="Syria"
        con4="Iraq"
      />
    </>
  );
};

export default Jordan;
