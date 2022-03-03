import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import cv from "../../img/C/cv.svg";

const CapeVerde = () => {
  return (
    <>
      <Helmet>
        <title>
          Cape Verde : Country Where It Is Rude To Eat In Public Without Sharing
          Your Food
        </title>
        <meta
          name="description"
          content="Only 10% of the land is suitable for agriculture. The soil
  is good but the production of food is hampered by the lack
   of water and the legacy of the inefficient land tenure 
   system."
        />
        <meta
          name="keyboard"
          content="capeverde , Paraia, Rude To Eat In Public without sharing"
        />
        <link rel="icon" href={cv} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/central-african-republic" country="Central Afr. Rep." />

      {/* header */}
      <Header header="Cape Verde : Country  Where It Is Rude To Eat In Public Without Sharing Your Food" />

      {/* article  */}
      <Article flag={cv} />

      {/* features */}
      <Features
        capital="Paraia"
        area="4,033 km²"
        population=" 549,935 (2019)"
        continent="Africa"
        hdi="0.665"
        currency="Cape Verdean escudo"
        language="Portuguese"
        religion="Christianity(85.3%)"
        literacy="86.8%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
 Only 10% of the land is suitable for agriculture. The soil
  is good but the production of food is hampered by the lack
   of water and the legacy of the inefficient land tenure 
   system. Over 90% of all food eaten in Cape Verde is imported.
"
        page="/central-african-republic"
        country="Central African Rep."
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="central-african-republic"
        two="/senigal"
        three="/guinea-bissau"
        four="/gambia"
        con1="Central African Rep."
        con2="Senigal"
        con3="Guinea Bissau"
        con4="Gambia"
      />
    </>
  );
};

export default CapeVerde;
