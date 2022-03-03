import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import mg from "../../img/M/mg.svg";

const Madacasgar = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Madacasgar : Country With More Than 50 % Of The World's Chameleons
        </title>
        <meta
          name="description"
          content="Bare-knuckle fighting is a national sport in Madacasgar. 
Moraingy is a form of bare-fisted combat sport, and it’s very
 popular throughout the island, as well as in Reunion, 300
  miles to the east."
        />
        <meta
          name="keyboard"
          content="
            Madacasgar, Antananarivo, Country With 50 % Of  World's Chameleons"
        />
        <link rel="icon" href={mg} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/malawi" country="Malawi" />

      {/* header */}
      <Header
        header="
      Madacasgar : Country With More Than 50 % Of The World's Chameleons"
      />

      {/* article  */}
      <Article flag={mg} />

      {/* features */}
      <Features
        capital="Antananarivo"
        area="587,041 km²"
        population="28,427,328 (2021)"
        continent="Africa"
        hdi="0.528"
        currency="Ariary"
        language="Malagasy, French"
        religion="Christianity(85.3%)"
        literacy="74.8%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
Bare-knuckle fighting is a national sport in Madacasgar. 
Moraingy is a form of bare-fisted combat sport, and it’s very
 popular throughout the island, as well as in Reunion, 300
  miles to the east.
"
        page="/malawi"
        country="Malawi"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/malawi"
        two="/comoros"
        three="/mauritius"
        four="/mozambique"
        con1="Malawi"
        con2="Comoros"
        con3="Mauritius"
        con4="Mozambique"
      />
    </>
  );
};

export default Madacasgar;
