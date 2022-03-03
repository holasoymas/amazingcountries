import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import tn from "../../img/T/tn.svg";

const Tunisia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Tunisia : Country With The Largest Colosseum In North Africa ("El
          Jem")
        </title>
        <meta
          name="description"
          content="Tunisia’s holiest city is the UNESCO-listed city of Kairouan
 which is often referred to as the fourth holiest city of Islam
  after Mecca, Medina and Jerusalem."
        />
        <meta
          name="keyboard"
          content="
Tunisia, tunis, Largest Colosseum In North Africa ,El Jem 
      
 "
        />
        <link rel="icon" href={tn} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/turkey" country="Turkey" />

      {/* header */}
      <Header header='Tunisia : Country With The Largest Colosseum In North Africa ("El Jem")' />

      {/* article  */}
      <Article flag={tn} />

      {/* features */}
      <Features
        capital="Tunis"
        area="163,610 km²"
        population="11,708,370"
        continent="Africa"
        hdi="0.740"
        currency="Tunisian dinar"
        language="Arabic"
        religion="Islam(99%)"
        literacy="79%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Tunisia’s holiest city is the UNESCO-listed city of Kairouan
 which is often referred to as the fourth holiest city of Islam
  after Mecca, Medina and Jerusalem. In Islam, one pilgrimage 
  to Mecca can be equalled by seven pilgrimages to Kairouan.
"
        page="/turkey"
        country="Turkey"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/tunisia"
        two="/algeria"
        three="/libya"
        four="/morocco"
        con1="Tunisia"
        con2="Algeria"
        con3="Libya"
        con4="Morocco"
      />
    </>
  );
};

export default Tunisia;
