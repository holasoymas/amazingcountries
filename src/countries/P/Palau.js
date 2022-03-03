import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import pw from "../../img/P/pw.svg";

const Palau = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Palau : The Land Of Underwater Serengeti</title>
        <meta
          name="description"
          content="Palau became the world’s first country to require
 tourists to sign an ‘Eco-Pledge’ upon arrival. Every incoming
visitor must sign a stamped pledge in their passport to be a
 good environmental steward."
        />
        <meta
          name="keyboard"
          content="palau, Ngerulmud, Oceania, The Land Of Underwater Serengeti, Eco-Pledge"
        />
        <link rel="icon" href={pw} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/palestine" country="Palestine" />

      {/* header */}
      <Header header="Palau : The Land Of Underwater Serengeti" />

      {/* article  */}
      <Article flag={pw} />

      {/* features */}
      <Features
        capital="Ngerulmud"
        area="459 km²"
        population="17,907 (2018)"
        continent="Oceania"
        hdi="0.826"
        currency="US Dollar"
        language="Palauan, English"
        religion="Christianity(89.7%)"
        literacy="59%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
In 2017, Palau became the world’s first country to require
 tourists to sign an ‘Eco-Pledge’ upon arrival. Every incoming
  visitor must sign a stamped pledge in their passports to be 
  a good environmental steward throughout their stay.
"
        page="/palestine"
        country="Palestine"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/palestine"
        two="/micronesia"
        three="/indonesia"
        four="/philippines"
        con1="Palestine"
        con2="Micronesia"
        con3="Indonesia"
        con4="Philippines"
      />
    </>
  );
};

export default Palau;
