import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import pk from "../../img/P/pk.svg";

const Pakistan = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pakistan : Oldest Independent State In The Arab World</title>
        <meta
          name="description"
          content="Pakistan International Airlines (PIA) has a world record for
 flying the fastest between London and Karachi. The airline
  achieved this feat in 1962 when they completed the flight in 
6 hrs,43 min,55 sec"
        />
        <meta
          name="keyboard"
          content="pakistan, Islamabad, Sialkot, Largest Producers Of Footballs In The World"
        />
        <link rel="icon" href={pk} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/palau" country="Palau" />

      {/* header */}
      <Header header='Pakistan : Largest Producers Of Footballs In The World ("Sialkot")' />

      {/* article  */}
      <Article flag={pk} />

      {/* features */}
      <Features
        capital="Islamabad"
        area=" 881,913 km²"
        population="225,199,937 (2021)"
        continent="Asia"
        hdi="0.557"
        currency="Pakistani Rupee"
        language="Urdu"
        religion="Islam(96.47%)"
        literacy="59%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Pakistan International Airlines (PIA) has a world record for
 flying the fastest between London and Karachi. The airline
  achieved this feat in 1962 when they completed the flight
   in 6 hours, 43 minutes, 55 seconds, a record which remains
    unbroken to this day.
"
        page="/palau"
        country="Palau"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/palau"
        two="/afghanistan"
        three="/china"
        four="/iran"
        con1="Palau"
        con2="Afghanistan"
        con3="China"
        con4="Iran"
      />
    </>
  );
};

export default Pakistan;
