import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import sb from "../../img/S/sb.svg";

const SolomonIslands = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Solomon Islands : Country With The Largest Raised Coral Atoll In The
          World
        </title>
        <meta
          name="description"
          content="The discovery of the Solomon Islands happened in 1568, 
Spaniard Ìlvaro de MendaÌ±a chose the name Islas SalomÌn 
(“Solomon Islands”) after the biblical King Solomon."
        />
        <meta
          name="keyboard"
          content="
          Solomon Islands, Honiara, Country With The Largest Raised Coral Atoll"
        />
        <link rel="icon" href={sb} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/somalia" country="Somalia" />

      {/* header */}
      <Header header="Solomon Islands : Country With The Largest Raised Coral Atoll In The World" />

      {/* article  */}
      <Article flag={sb} />

      {/* features */}
      <Features
        capital="Honiara"
        area="28,400 km²"
        population="652,857 (2018)"
        continent="Oceania"
        hdi="0.567"
        currency="Solomon Islands dollar"
        language="English"
        religion="Christianity(97.4%)"
        literacy="76.6%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The discovery of the Solomon Islands happened in 1568, 
Spaniard Ìlvaro de MendaÌ±a chose the name Islas SalomÌn 
(“Solomon Islands”) after the biblical King Solomon. He 
believed at the time, like the king, that the islands were in
 possession of a hearty wealth of gold and riches.
"
        page="/somalia"
        country="Somalia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/somalia"
        two="/vanuatu"
        three="/papua-new-guinea"
        four="/tuvalu"
        con1="Somalia"
        con2="Vanuatu"
        con3="Papua New Guinea"
        con4="Tuvalu"
      />
    </>
  );
};

export default SolomonIslands;
