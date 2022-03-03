import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ir from "../../img/I/ir.svg";

const Iran = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Iran : The Nose Job Capital Of The World</title>
        <meta
          name="description"
          content="Iranians use their own calendar which is a solar calendar,
 meaning that its time reckoning is based on the Earth's 
 movements around the Sun."
        />
        <meta
          name="keyboard"
          content="Iran, tehran, middle east, Nose Job Capital Of The World"
        />
        <link rel="icon" href={ir} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/iraq" country="Iraq" />

      {/* header */}
      <Header header="Iran : The Nose Job Capital Of The World" />

      {/* article  */}
      <Article flag={ir} />

      {/* features */}
      <Features
        capital="Tehran"
        area="1,648,195 km²"
        population="83,183,741 (2019)"
        continent="Asia"
        hdi="0.783"
        currency="Iranian rial"
        language="Persian"
        religion="Muslim(99.39%)"
        literacy="85.5%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Iranians use their own calendar which is a solar calendar,
 meaning that its time reckoning is based on the Earth's 
 movements around the Sun. The first day of the year is the
  first day of spring and it is called Nowrouz. The first 6 
  months have 31 days, the following 5 months have 30 days and
   the last month normally has 29 days but 30 days
    in leap years.
"
        page="/iraq"
        country="Iraq"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/iraq"
        two="/armenia"
        three="/turkey"
        four="/pakistan"
        con1="Iraq"
        con2="Armenia"
        con3="Turkey"
        con4="Pakistan"
      />
    </>
  );
};

export default Iran;
