import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import svag from "../../img/S/svag.svg";

const SaintVincentAndTheGrenadines = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          St. Vincent & The Grenadines : Country With The City Of Arches
          ("Kingstown")
        </title>
        <meta
          name="description"
          content="Due to the island’s volcanic origin, most of St Vincent 
beaches are black sand with two notable exceptions at Villa 
and Indian Bay, where many hotels are located."
        />
        <meta
          name="keyboard"
          content="
          St. Vincent & The Grenadines, The City Of Arches, Kingstown 
          "
        />
        <link rel="icon" href={svag} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/samoa" country="Samoa" />

      {/* header */}
      <Header
        header='
  St. Vincent & The Grenadines : Country With The City Of Arches ("Kingstown") 
'
      />
      {/* article  */}
      <Article flag={svag} />

      {/* features */}
      <Features
        capital="Kingstown"
        area="389 km²"
        population="100,455 (2021)"
        continent="North America"
        hdi="0.738"
        currency="East Caribbean dollar"
        language="Spanish"
        religion="Christianity(82.1%)"
        literacy="95.6%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Due to the island’s volcanic origin, most of St Vincent 
beaches are black sand with two notable exceptions at Villa 
and Indian Bay, where many hotels are located. Classic white 
sand beaches, are located in the Grenadines such as Union
 Island, Canouan, Mustique and Bequia.
"
        page="/samoa"
        country="Samoa"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/samoa"
        two="/saint-lucia"
        three="/trinidad-and-tobago"
        four="/venezuela"
        con1="Samoa"
        con2="Saint Lucia"
        con3="Trinidad & Tobago"
        con4="Venezuela"
      />
    </>
  );
};

export default SaintVincentAndTheGrenadines;
