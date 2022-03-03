import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import mw from "../../img/M/mw.svg";

const Malawi = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Malawi : Country Also Known As "The Warm Heart Of Africa"</title>
        <meta
          name="description"
          content="Lake Malawi is the third largest lake in Africa. It’s 
nicknamed “the calendar lake”. This is because, at its longest
 point it’s 365 miles long and at its widest point, it’s 52
  miles wide."
        />
        <meta
          name="keyboard"
          content=" Malawi, Lilongwe, The Warm Heart Of Africa, calender lake"
        />
        <link rel="icon" href={mw} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/malaysia" country="Malaysia" />

      {/* header */}
      <Header header='Malawi : Country Also Known As "The Warm Heart Of Africa"' />

      {/* article  */}
      <Article flag={mw} />

      {/* features */}
      <Features
        capital="Lilongwe"
        area="118,484 km²"
        population="17,563,749 (2018)"
        continent="Africa"
        hdi="0.483"
        currency="Malawian kwacha"
        language="English, Chewa"
        religion="Christianity(82.3%)"
        literacy="73%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Lake Malawi is the third largest lake in Africa. It’s 
nicknamed “the calendar lake”. This is because, at its longest
 point it’s 365 miles long and at its widest point, it’s 52
  miles wide.
"
        page="/malaysia"
        country="Malaysia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/malaysia"
        two="/zambia"
        three="/tanzania"
        four="/mozambique"
        con1="Malaysia"
        con2="Zambia"
        con3="Tanzania"
        con4="Mozambique"
      />
    </>
  );
};

export default Malawi;
