import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import gw from "../../img/G/gw.svg";

const GuineaBissau = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Guinea Bissau: Country Which Has The World's Largest Bauxite Reserves
        </title>
        <meta
          name="description"
          content="Despite the name’s prevalence, it is unclear where the name
 originates. Some trace it to a word in Tuareg, aginaw. 
 Others think it once referred to Djenné, a trading city 
 in Mali."
        />
        <meta
          name="keyboard"
          content="guinea bissau, Bissau, World's Largest Bauxite Reserves"
        />
        <link rel="icon" href={gw} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/guyana" country="Guyana" />

      {/* header */}
      <Header header="Guinea Bissau : Country Which Has The World's Largest Bauxite Reserves" />

      {/* article  */}
      <Article flag={gw} />

      {/* features */}
      <Features
        capital="Bissau"
        area="36,125 km²"
        population="1,874,303 (2018)"
        continent="Africa"
        hdi="0.480"
        currency="West African CFA franc"
        language="Portuguese"
        religion="Christianity(45.1%)"
        literacy="45.6%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The reason the Guinea-Bissau flag is so similar to the Ghanaian
 flag is that the country has independence today only because
  they were inspired by the struggle and effort by the
   Ghanaians for Independence.
"
        page="/guyana"
        country="Guyana"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/guyana"
        two="/senigal"
        three="/guinea"
        four="/mali"
        con1="Guyana"
        con2="Senigal"
        con3="Guinea"
        con4="Mali"
      />
    </>
  );
};

export default GuineaBissau;
