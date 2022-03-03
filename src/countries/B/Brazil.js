import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import br from "../../img/B/br.svg";

const Brazil = () => {
  return (
    <>
      <Helmet>
        <title>Brazil : Largest Coffee Producing Country In The World</title>
        <meta
          name="description"
          content=" The largest amount of money stolen from a bank by robbers
    occurred on Aug. 6-7, 2005, in Fortaleza, Brazil, according
     to the Guinness Book of World Records."
        />
        <meta
          name="keyboard"
          content="brzil, brasilia , Largest Coffee Producing Country In The World"
        />
        <link rel="icon" href={br} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/brunei" country="Brunei" />

      {/* header */}
      <Header header="Brazil : Largest Coffee Producing Country In The World" />

      {/* article  */}
      <Article flag={br} />

      {/* features */}
      <Features
        capital="Brasilia"
        area="8,515,767 km²"
        population=" 210,147,125 (2019)"
        continent="South America"
        hdi="0.765"
        currency="Brazilian real"
        language="Portuguese"
        religion="Christianity(88.8%)"
        literacy="93.23%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
    The largest amount of money stolen from a bank by robbers
    occurred on Aug. 6-7, 2005, in Fortaleza, Brazil, according
     to the Guinness Book of World Records. A gang of up to 10
      people dug a 256-foot long tunnel to seize five containers
     of currency estimated at nearly $70 million.
"
        page="/brunei"
        country="Brunei"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/brunei"
        two="/argentina"
        three="/colombia"
        four="/venezuela"
        con1="Brunei"
        con2="Argentina"
        con3="Colombia"
        con4="Venezuela"
      />
    </>
  );
};

export default Brazil;
