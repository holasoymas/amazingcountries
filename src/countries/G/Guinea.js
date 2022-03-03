import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import gn from "../../img/G/gn.svg";

const Guinea = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Guinea : Country Which Has The World's Largest Bauxite Reserves
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
          content="guinea, Conakry, World's Largest Bauxite Reserves"
        />
        <link rel="icon" href={gn} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/guinea-bissau" country="Guinea Bissau" />

      {/* header */}
      <Header header="Guinea : Country Which Has The World's Largest Bauxite Reserves" />

      {/* article  */}
      <Article flag={gn} />

      {/* features */}
      <Features
        capital="Conakry"
        area="245,857 km²"
        population="12,414,293 (2018)"
        continent="Africa"
        hdi="0.477"
        currency="Guinean franc"
        language="French"
        religion="Muslim(85%)"
        literacy="32%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Despite the name’s prevalence, it is unclear where the name
 originates. Some trace it to a word in Tuareg, aginaw. 
 Others think it once referred to Djenné, a trading city 
 in Mali. In the 15th century, Portuguese sailors used 
 “Guiné” to describe what is now Senegal, and by the 18th 
 century, Europeans used “Guinea” to refer to much of West
  Africa. The region was also where the name “guinea” for 
  the British gold coin originated as significant quantities
   of gold was sourced from the area.
"
        page="/guinea-bissau"
        country="Guinea Bissau"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/guinea-bissau"
        two="/senigal"
        three="/mali"
        four="/cotedlvoire"
        con1="Guinea Bissau"
        con2="Senigal"
        con3="Mali"
        con4="Côte d'Ivoire"
      />
    </>
  );
};

export default Guinea;
