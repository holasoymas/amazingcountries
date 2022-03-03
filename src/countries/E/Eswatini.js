import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import eswatini from "../../img/E/eswatini.svg";

const Eswatini = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Eswatini : Country With Highest Prevalence Of HIV/AIDS In The World (
          27.10% )
        </title>
        <meta
          name="description"
          content="In December 1899, the king of Swaziland (now Eswatini) Ngwane
  V died at the age of 23. He was succeeded by his 4-month-old
   son."
        />
        <meta
          name="keyboard"
          content="eswatini, Mbabane, africa, country with Highest Prevalence Of HIV/AIDS"
        />
        <link rel="icon" href={eswatini} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/ethiopia" country="Ethiopia" />

      {/* header */}
      <Header
        header="Eswatini : Country With Highest Prevalence Of HIV/AIDS In The
          World ( 27.10% )"
      />

      {/* article  */}
      <Article flag={eswatini} />

      {/* features */}
      <Features
        capital="Mbabane"
        area="17,364  km²"
        population="1,093,238 (2017)"
        continent="Africa"
        hdi="0.611"
        currency="South African rand, Swazi lilangeni"
        language="Swati,English"
        religion="Christianity(89.3%)"
        literacy="88.4%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
 In December 1899, the king of Swaziland (now Eswatini) Ngwane
  V died at the age of 23. He was succeeded by his 4-month-old
   son, who would be given the royal name Sobhuza II and would
    continue to reign until his death in August 1982. He spent
     82 years and 253 days on the throne. This makes him the
      longest reigning monarch in world history.
"
        page="/ethiopia"
        country="Ethiopia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/ethiopia"
        two="/south-africa"
        three="/mozambique"
        four="/botswana"
        con1="Ethiopia"
        con2="South Africa"
        con3="Mozambique"
        con4="Botswana"
      />
    </>
  );
};

export default Eswatini;
