import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import dm from "../../img/D/dm.svg";

const Dominica = () => {
  return (
    <>
      <Helmet>
        <title>
          Djibouti : The Last Caribbean Island To Be Colonised By Europeans
        </title>
        <meta
          name="description"
          content="Dominica is often known as “The Nature Island of the Caribbean”
 due to its spectacular, lush, and varied flora and fauna,
  which are protected by an extensive natural park system."
        />
        <meta
          name="keyboard"
          content="dominica, roseau ,last Caribbean island to be colonised by Europeans"
        />
        <link rel="icon" href={dm} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/dominican-republic" country="Dominican Rep." />

      {/* header */}
      <Header header="Dominica : The Last Caribbean Island To Be Colonised By Europeans" />

      {/* article  */}
      <Article flag={dm} />

      {/* features */}
      <Features
        capital="Roseau"
        area="750 km²"
        population="71,808 (2019)"
        continent="South America"
        hdi="0.742"
        currency="Eastern Caribbean Dollar"
        language="English"
        religion="Christianity(94.4%)"
        literacy="93.8%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Dominica is often known as “The Nature Island of the Caribbean”
 due to its spectacular, lush, and varied flora and fauna,
  which are protected by an extensive natural park system.
   There are three national parks in Dominica. Other protected
    areas include two forest reserves and the Syndicate Parrot
     Preserve.
"
        page="/dominican-republic"
        country="Dominican Republic"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/dominican-republic"
        two="/martinique"
        three="trinidad-and-tobago"
        four="/antigua-and-barbuda"
        con1="Dominican Republic"
        con2="Martinique"
        con3="Trinidad & Tobago"
        con4="Antigua & Barbuda"
      />
    </>
  );
};

export default Dominica;
