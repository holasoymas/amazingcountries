import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import fr from "../../img/F/fr.svg";

const France = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>France : Most-Visited Country In The World</title>
        <meta
          name="description"
          content="In 1915, French Army was the first to create a dedicated 
camouflage unit in 1915. Guns and vehicles were painted by
 artists called camofleurs."
        />
        <meta
          name="keyboard"
          content="france, paris, europe, Most-Visited Country In The World"
        />
        <link rel="icon" href={fr} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/gabon" country="Gabon" />

      {/* header */}
      <Header header="France : Most-Visited Country In The World" />

      {/* article  */}
      <Article flag={fr} />

      {/* features */}
      <Features
        capital="Paris"
        area="640,679 km²"
        population="67,413,000 (2021)"
        continent="Europe"
        hdi="0.901"
        currency="Euro"
        language="France"
        religion="Christianity(51%)"
        literacy="99%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
In 1915, French Army was the first to create a dedicated 
camouflage unit in 1915. Guns and vehicles were painted by
 artists called camofleurs. The following year, the British
  Army followed suit and established its own camouflage 
  section under the command of Lieutenant-Colonel Francis
   Wyatt. It was known as the Special Works Park RE 
   (Royal Engineers).
"
        page="/gabon"
        country="Gabon"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/gabon"
        two="/germany"
        three="/belgium"
        four="/italy"
        con1="Gabon"
        con2="Germany"
        con3="Belgium"
        con4="Italy"
      />
    </>
  );
};

export default France;
