import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import eq from "../../img/E/eq.svg";

const EquatorialGuinea = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Equatorial Guinea : The Only Spanish Speaking Country In Africa
        </title>
        <meta
          name="description"
          content=" Equatorial Guinea was a Spanish colony on 2 separate 
 occasions: between 1778-1810 and from 1844-1968.
  Because of its long influence over the country, Spanish
   has remained an important language."
        />
        <meta
          name="keyboard"
          content="equatorial Guinea , Malabo, Only Spanish Speaking Country In Africa"
        />
        <link rel="icon" href={eq} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/eritrea" country="Eritrea" />

      {/* header */}
      <Header header="Equatorial Guinea : The Only Spanish Speaking Country In Africa" />

      {/* article  */}
      <Article flag={eq} />

      {/* features */}
      <Features
        capital="Malabo"
        area="28,050 km²"
        population="1,454,789 (2020)"
        continent="Africa"
        hdi="0.592"
        currency="Central African CFA franc"
        language="Spanish,French,Portuguese"
        religion="Christianity(86.8%)"
        literacy="95%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
 Equatorial Guinea was a Spanish colony on 2 separate 
 occasions: between 1778 and 1810 and from 1844 to 1968.
  Because of its long influence over the country, Spanish
   has remained an important language. In fact, Equatorial
    Guinea is the only country in Africa where Spanish is 
    an official language. Approximately 67.6% of the population
     can speak it.
"
        page="/eritrea"
        country="Eritrea"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/eritrea"
        two="/cameroon"
        three="/gabon"
        four="/nigeria"
        con1="Eritrea"
        con2="Cameroon"
        con3="Gabon"
        con4="Nigeria"
      />
    </>
  );
};

export default EquatorialGuinea;
