import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ci from "../../img/C/ci.svg";

const CotedIvoire = () => {
  return (
    <>
      <Helmet>
        <title>Côte d'Ivoire : Largest Producers Of Cocoa</title>
        <meta
          name="description"
          content="During the 1980s and 1990s, Abidjan was known as the “the
  Paris of West Africa” and its business district as “the
   Manhattan of West Africa” due to the city’s impressive 
   skyline and location beside a lagoon."
        />
        <meta
          name="keyboard"
          content="Côte d'Ivoire,Yamoussoukro, Abidjan, Largest Producers Of Cocoa"
        />
        <link rel="icon" href={ci} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/croatia" country="Croatia" />

      {/* header */}
      <Header header="Côte d'Ivoire : Largest Producers Of Cocoa" />

      {/* article  */}
      <Article flag={ci} />

      {/* features */}
      <Features
        capital="Yamoussoukro, Abidjan"
        area="322,463 km²"
        population="26,378,274 (2020)"
        continent="Africa"
        hdi="0.538"
        currency="West African CFA franc"
        language="French"
        religion="Christianity(44%)"
        literacy="47.2 %"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
 During the 1980s and 1990s, Abidjan was known as the “the
  Paris of West Africa” and its business district as “the
   Manhattan of West Africa” due to the city’s impressive 
   skyline and location beside a lagoon. It was also 
   considered one of Africa’s principal cities in terms 
   of fashion, culture and standard of living.
"
        page="/croatia"
        country="Croatia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/croatia"
        two="/ghana"
        three="/burkina-faso"
        four="/guinea"
        con1="Croatia"
        con2="Ghana"
        con3="Burkina Faso"
        con4="Guinea"
      />
    </>
  );
};

export default CotedIvoire;
