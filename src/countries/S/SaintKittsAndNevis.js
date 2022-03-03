import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import skan from "../../img/S/skan.svg";

const SaintKittsAndNevis = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Saint Kitts And Nevis : The Sugar-cane Island Of The World
        </title>
        <meta
          name="description"
          content="St. Kitts was known throughout the world as a sugar-cane island
 and is still commonly known today as Sugar City, but this
  wasn’t the first crop to be cultivated for export."
        />
        <meta
          name="keyboard"
          content="Saint Kitts And Nevis, Basseterre, Sugar-cane Island"
        />
        <link rel="icon" href={skan} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/saint-lucia" country="Saint Lucia" />

      {/* header */}
      <Header
        header="
          Saint Kitts And Nevis : The Sugar-cane Island Of The World
          "
      />
      {/* article  */}
      <Article flag={skan} />

      {/* features */}
      <Features
        capital="Basseterre"
        area="261 km²"
        population="52,441 (2018)"
        continent="North America"
        hdi="0.779"
        currency="East Caribbean dollar"
        language="English"
        religion="Christianity(87.6%)"
        literacy="97%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
St. Kitts was known throughout the world as a sugar-cane island
 and is still commonly known today as Sugar City, but this
  wasn’t the first crop to be cultivated for export. The first
   English governor, Sir Thomas Warner, started a tobacco 
   plantation in 1624, but soon switched to sugar after facing
    stiff competition from the colony of Virginia. Tobacco
     plants can still be seen growing wild around the 
     17th-century Wingfield Estate.
"
        page="/saint-lucia"
        country="Saint Lucia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/saint-lucia"
        two="/venezuela"
        three="/antigua-and-barbuda"
        four="/dominican-republic"
        con1="Saint Lucia"
        con2="Venezuela"
        con3="Antigua & Barbuda"
        con4="Dominican Republic"
      />
    </>
  );
};

export default SaintKittsAndNevis;
