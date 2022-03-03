import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import hn from "../../img/H/hn.svg";

const Honduras = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Honduras : Country Where It Rains Fish Annually ( Yoro )</title>
        <meta
          name="description"
          content="The city of Comayagua holds the oldest cathedral and clock in
 the American continent. This historical monument was built 
 in 1634 and inaugurated on December 8, 1711."
        />
        <meta
          name="keyboard"
          content="honduras, tegucigalpa, Country Where It Rains Fish Annually, ('Yoro')"
        />
        <link rel="icon" href={hn} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/hungary" country="Hungary" />

      {/* header */}
      <Header header="Honduras : Country Where It Rains Fish Annually ('Yoro')" />

      {/* article  */}
      <Article flag={hn} />

      {/* features */}
      <Features
        capital="Tegucigalpa"
        area="112,492 km²"
        population="9,587,522 (2018)"
        continent="North America"
        hdi="0.632"
        currency="Honduran lempira"
        language="Spanish"
        religion="Christianity(87%)"
        literacy="87.21%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The city of Comayagua holds the oldest cathedral and clock in
 the American continent. This historical monument was built 
 in 1634 and inaugurated on December 8, 1711. The cathedral 
 houses the oldest working clock in the American continent: 
 an antique that has been in operation for more than 900 years.
"
        page="/hungary"
        country="Hungary"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/hungary"
        two="/el-salvador"
        three="/nicaragua"
        four="/mexico"
        con1="Hungary"
        con2="El Salvador"
        con3="Nicaragua"
        con4="Mexico"
      />
    </>
  );
};

export default Honduras;
