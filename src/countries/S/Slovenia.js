import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import si from "../../img/S/si.svg";

const Slovenia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Slovenia : Country With The World's Longest Stone-arch Bridge Railway
        </title>
        <meta
          name="description"
          content="Hayracks are a unique cultural symbol of Slovenia and the
 country is also known as the Land of Hayracks. Farmers are 
 very proud of their hayracks, so never ever mess with the 
 hack rays in Slovenia."
        />
        <meta
          name="keyboard"
          content="
          Slovenia, Ljubljana, europe, World's Longest Stone-arch Bridge Railway"
        />
        <link rel="icon" href={si} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/solomon-islands" country="Solomon Islands" />

      {/* header */}
      <Header
        header="
          Slovenia : Country With The World's Longest Stone-arch Bridge Railway"
      />

      {/* article  */}
      <Article flag={si} />

      {/* features */}
      <Features
        capital="Ljubljana"
        area="20,271 km²"
        population="2,108,977 (2021)"
        continent="Europe"
        hdi="0.917"
        currency="Euro"
        language="Slovene"
        religion="Christianity(77.8%)"
        literacy="99.7%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Hayracks are a unique cultural symbol of Slovenia and the
 country is also known as the Land of Hayracks. Farmers are 
 very proud of their hayracks, so never ever mess with the 
 hack rays in Slovenia.
"
        page="/solomon-islands"
        country="Solomon Islands"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/solomon-islands"
        two="/austria"
        three="/italy"
        four="/hungary"
        con1="Solomon Islands"
        con2="Austria"
        con3="Italy"
        con4="Hungary"
      />
    </>
  );
};

export default Slovenia;
