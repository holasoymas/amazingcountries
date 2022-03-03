import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import nz from "../../img/N/nz.svg";

const NewZealand = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          New Zealand : Country With World's Steepest Road ("Baldwin Street")
        </title>
        <meta
          name="description"
          content="Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu,
 This is the name of a town on the east coast of New Zealand and
 its translation from Maori goes something like this:"
        />
        <meta
          name="keyboard"
          content="new zealand, Wellington, Baldwin Street, Country With World's Steepest Road"
        />
        <link rel="icon" href={nz} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/nicaragua" country="Nicaragua" />

      {/* header */}
      <Header header="New Zealand : Country With World's Steepest Road ('Baldwin Street')" />

      {/* article  */}
      <Article flag={nz} />

      {/* features */}
      <Features
        capital="Wellington"
        area="268,021 km²"
        population="4,699,755 (2018)"
        continent="Oceania"
        hdi="0.931"
        currency="New Zealand Dollar"
        language="English, Maori"
        religion="No Religion(48.5%)"
        literacy="99%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu,
 This is the name of a town on the east coast of New Zealand
  and its translation from Maori goes something like this: 
  “The place where Tamatea, the man on the big knees who
   slipped, climbed and swallowed mountains, known as the 
   land eater, he played the flute to his loved one ”.
"
        page="/nicaragua"
        country="Nicaragua"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/nicaragua"
        two="/australia"
        three="/tuvalu"
        four="/fiji"
        con1="Nicaragua"
        con2="Australia"
        con3="Tuvalu"
        con4="Fiji"
      />
    </>
  );
};

export default NewZealand;
