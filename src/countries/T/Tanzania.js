import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import tz from "../../img/T/tz.svg";

const Tanzania = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Tanzania : Country With The Tallest Mountain In Africa ("Mt.
          Tanzania")
        </title>
        <meta
          name="description"
          content="Tanzania is made up of two different names, the “Tan” comes 
from Tanganyika (which means something like “sail in
 wilderness” in Swahili), the “Zan” from Zanzibar (from Arabic
  meaning “black coast”)."
        />
        <meta
          name="keyboard"
          content="
             Tanzania, Dodoma, Country With Tallest Mountain In Africa, Mt. Tanzania"
        />
        <link rel="icon" href={tz} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/thailand" country="Thailand" />

      {/* header */}
      <Header header='Tanzania : Country With The Tallest Mountain In Africa ("Mt. Tanzania")' />

      {/* article  */}
      <Article flag={tz} />

      {/* features */}
      <Features
        capital="Dodoma"
        area="947,303 km²"
        population="61,193,226 (2021)"
        continent="Asia"
        hdi="0.529"
        currency="Tanzanian shilling"
        language="English,Swahili"
        religion="Christianity(63.1%)"
        literacy="77.9%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Tanzania is made up of two different names, the “Tan” comes 
from Tanganyika (which means something like “sail in the
 wilderness” in Swahili), the “Zan” from Zanzibar (from Arabic
  meaning “black coast”).
"
        page="/thailand"
        country="Thailand"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/thailand"
        two="/kenya"
        three="/uganda"
        four="/rwanda"
        con1="Thailand"
        con2="Kenya"
        con3="Uganda"
        con4="Rwanda"
      />
    </>
  );
};

export default Tanzania;
