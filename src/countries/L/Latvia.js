import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import lv from "../../img/L/lv.svg";

const Latvia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Latvia : Country With The Widest Waterfall In Europe("The Venta
          Rapid")
        </title>
        <meta
          name="description"
          content="The tailor Jacob W. Davis was born Jākobs Jufess in Riga and
 emigrated to US as a young man in 1854. In 1870, he was
  asked by a customer to make a strong pair of trousers for 
  her woodcutter husband."
        />
        <meta
          name="keyboard"
          content="latvia, Riga, Country With Widest Waterfall In Europe, Venta Rapid"
        />
        <link rel="icon" href={lv} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/lebanon" country="Lebanon" />

      {/* header */}
      <Header
        header='Latvia : Country With The Widest Waterfall In Europe("The Venta
          Rapid")'
      />
      {/* article  */}
      <Article flag={lv} />

      {/* features */}
      <Features
        capital="Riga"
        area="64,589 km²"
        population="1,907,675 (2020) "
        continent="Europe"
        hdi="0.866"
        currency="Euro"
        language="Latvian"
        religion="Christianity(80%)"
        literacy="99.9%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The tailor Jacob W. Davis was born Jākobs Jufess in Riga and
 emigrated to the US as a young man in 1854. In 1870, he was
  asked by a customer to make a strong pair of trousers for 
  her woodcutter husband – his creation would become the
   template for modern denim jeans, and two years later, with
    help from Levi Strauss, he patented the product.
"
        page="/lebanon"
        country="Lebanon"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/lebanon"
        two="/estonia"
        three="/russia"
        four="/belarus"
        con1="Lebanon"
        con2="Estonia"
        con3="Russia"
        con4="Belarus"
      />
    </>
  );
};

export default Latvia;
