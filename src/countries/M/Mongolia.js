import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import mn from "../../img/M/mn.svg";

const Mongolia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Mongolia : Country With Most Horses Per Person (66 per 100 people)
        </title>
        <meta
          name="description"
          content="There is a theory that Mongolian horsemen first invented
 ice cream. They would take animal intestines on long journeys.
 The combination of freezing and being jolted around the horse
  produced ice-cream like substance."
        />
        <meta
          name="keyboard"
          content="Mongolia, Ulaanbaatar, asia, gobi, Country With Most Horses Per Person"
        />
        <link rel="icon" href={mn} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/montenegro" country="Montenegro" />

      {/* header */}
      <Header header="Mongolia : Country With Most Horses Per Person (66 Horses / 100 people)" />

      {/* article  */}
      <Article flag={mn} />

      {/* features */}
      <Features
        capital="Ulaanbaatar"
        area="1,566,000 km²"
        population="3,353,470 (2020)"
        continent="Asia"
        hdi="0.737"
        currency="Mongolian Togrog"
        language="Mongolian"
        religion="Buddhism(51.7%)"
        literacy="98%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
There is a theory that Mongolian horsemen first invented the
 ice cream. They would take animal intestines on long journeys.
  The combination of freezing and being jolted around on the 
  horse produced an ice-cream like substance. This then made 
  its way to China, Marco Polo, then Italy!.
"
        page="/montenegro"
        country="Montenegro"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/montenegro"
        two="/russia"
        three="/china"
        four="/kazakhstan"
        con1="Montenegro"
        con2="Russia"
        con3="China"
        con4="Kazakhstan"
      />
    </>
  );
};

export default Mongolia;
