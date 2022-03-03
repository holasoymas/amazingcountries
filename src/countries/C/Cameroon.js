import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import cm from "../../img/C/cm.svg";

const Cameroon = () => {
  return (
    <>
      <Helmet>
        <title>
          Cameroon : First African Country To Make It To The Quarter-finals Of
          FIFA World Cup
        </title>
        <meta
          name="description"
          content=" Cameroon has the longest ruling non-royal national leader.
  Paul Biya was elected as president of Cameroon in November 
  1982 and has been the president since then."
        />
        <meta
          name="keyboard"
          content="cameroon , Yaoundé, africa,  Flag Which Has Building On It"
        />
        <link rel="icon" href={cm} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/canada" country="Canada" />

      {/* header */}
      <Header
        header="Cameroon : First African Country To Make It To The Quarter-finals Of
          FIFA World Cup"
      />

      {/* article  */}
      <Article flag={cm} />

      {/* features */}
      <Features
        capital="Yaoundé"
        area="475,442 km²"
        population=" 26,545,864 (2020)"
        continent="Africa"
        hdi="0.563"
        currency="Central African CFA franc"
        language="French,English"
        religion="Christianity(70.7%)"
        literacy="77.1%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
 Cameroon has the longest ruling non-royal national leader.
  Paul Biya was elected as president of Cameroon in November 
  1982 and has been the president since then. As of November
   2018, the people re-elected him as president where he will 
   remain for another seven years. He changed the terms of the
    presidency from four years to seven years and wins every 
    election.
"
        page="/canada"
        country="Canada"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/canada"
        two="/nigeria"
        three="chad"
        four="/gabon"
        con1="Canada"
        con2="Nigeria"
        con3="Chad"
        con4="Gabon"
      />
    </>
  );
};

export default Cameroon;
