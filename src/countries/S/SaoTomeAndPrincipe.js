import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import st from "../../img/S/st.svg";

const SaoTomeAndPrincipe = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          São Tomé & Príncipe : First Country To Adopt Democracy In Africa
        </title>
        <meta
          name="description"
          content="It was one of the first countries in Africa to adopt democracy.
 The first elections were held in 1991 which were transparent
  and fair, a little unusual and rare in the African continent."
        />
        <meta
          name="keyboard"
          content="
      São Tomé Príncipe, First Country To Adopt Democracy In Africa
 "
        />
        <link rel="icon" href={st} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/saudi-arabia" country="Saudi Arabia" />

      {/* header */}
      <Header
        header="
      São Tomé & Príncipe : First Country To Adopt Democracy In Africa"
      />

      {/* article  */}
      <Article flag={st} />

      {/* features */}
      <Features
        capital="São Tomé"
        area="1,001 km²"
        population="211,028 (2018)"
        continent="Africa"
        hdi="0.625"
        currency="Dobra"
        language="Portuguese"
        religion="Christianity(82.2%)"
        literacy="92.8%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
It was one of the first countries in Africa to adopt democracy.
 The first elections were held in 1991 which were transparent
  and fair, a little unusual and rare in the African continent.
   The elections are still held without any chaos and violence
    which is a major feat for the country.
"
        page="/saudi-arabia"
        country="Saudi Arabia"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/saudi-arabia"
        two="/gabon"
        three="/equatorial-guinea"
        four="/gabon"
        con1="Saudi Arabia"
        con2="Gabon"
        con3="Equatorial Guinea"
        con4="Nigeria"
      />
    </>
  );
};

export default SaoTomeAndPrincipe;
