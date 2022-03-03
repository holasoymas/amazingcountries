import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import us from "../../img/U/us.svg";

const USA = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          United State Of America : The Gambling Capital Of The World ("Las
          Vegas")
        </title>
        <meta
          name="description"
          content="From 1785 until 1790, New York City served as the countries 
capital. While it may not be the capital today, over 8 million
 people reside in New York City, making it the most populous
  city in America."
        />
        <meta
          name="keyboard"
          content="
  uae, dubai, Tallest Building In The World, Burj Khalifa
 "
        />

        <link rel="icon" href={us} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/uruguay" country="Uruguay" />

      {/* header */}
      <Header
        header='
          United State Of America : The Gambling Capital Of The World ("Las Vegas")
        '
      />

      {/* article  */}
      <Article flag={us} />

      {/* features */}
      <Features
        capital="Washington DC"
        area="9,833,520 km²"
        population="331,449,281 (2020)"
        continent="North America"
        hdi="0.926"
        currency="US Dollar"
        language="English"
        religion="Christianity(87.3%)"
        literacy="65%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
From 1785 until 1790, New York City served as the countries 
capital. While it may not be the capital today, over 8 million
 people reside in New York City, making it the most populous
  city in America.
"
        page="/uruguay"
        country="Uruguay"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/uruguay"
        two="/canada"
        three="/mexico"
        four="/russia"
        con1="Uruguay"
        con2="Canada"
        con3="Mexico"
        con4="Russia"
      />
    </>
  );
};

export default USA;
