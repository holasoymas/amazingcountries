import React from "react";

import Header from "../../components/Header";
import Article from "../../components/Article";
import Features from "../../components/Features";
import Fact from "../../components/Fact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Helmet } from "react-helmet";
import bd from "../../img/B/bd.svg";
const Bangladesh = () => {
  return (
    <>
      <Helmet>
        <title>Bangladesh : Country With The Most Polluted Air</title>
        <meta
          name="description"
          content=" Cox’s Bazar is the longest uninterrupted sea beach in the
       world with the total length of 120 km. It lies in the Bay
        of Bangal."
        />
        <meta
          name="keyboard"
          content="Bangladesh, Dhaka , Taka, most polluted air,most densely city"
        />
        <link rel="icon" href={bd} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/barbados" country="Barbados" />

      {/* header */}
      <Header header="Bangladesh : Country With The Most Polluted Air" />

      {/* article  */}
      <Article flag={bd} />

      {/* features */}
      <Features
        features="Bangladesh"
        capital="Dhaka"
        area="147,570 km²"
        population=" 161,376,708 (2018)"
        continent="Aaia"
        hdi="0.632"
        currency="Taka"
        language="Bangali"
        religion="Islam(90.4%)"
        literacy="74.7%(2020)"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
      Cox’s Bazar is the longest uninterrupted sea beach in the
       world with the total length of 120 km. It lies in the Bay
        of Bangal, in the most southern part of Bangladesh."
        page="/barbados"
        country="Barbados"
      />

      {/* message field  */}

      {/* footer part  */}
      <Footer
        one="/barbados"
        two="/india"
        three="myanmar"
        four="/nepal"
        con1="Barbados"
        con2="India"
        con3="Myanmar"
        con4="Nepal"
      />
    </>
  );
};

export default Bangladesh;
