import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ec from "../../img/E/ec.svg";

const Ecuador = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Ecuador : The First Country In The World To Recognize The Rights Of
          Nature
        </title>
        <meta
          name="description"
          content="The country is home to the closest point on earth to space.
 The Earth is not a perfect sphere, it bulges around the 
 equator. Ecuador sits right on the bulge."
        />
        <meta
          name="keyboard"
          content="ecuador, quito, first country to recognize the rights of nature"
        />
        <link rel="icon" href={ec} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/egypt" country="Egypt" />

      {/* header */}
      <Header
        header="Ecuador : The First Country In The World To Recognize The Rights Of
          Nature"
      />

      {/* article  */}
      <Article flag={ec} />

      {/* features */}
      <Features
        capital="Quito"
        area="283,561 km²"
        population="17,684,536 (2021)"
        continent="South America"
        hdi="0.759"
        currency="US Dollar"
        language="Spanish"
        religion="Christianity(93.1%)"
        literacy="92.8%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The country is home to the closest point on earth to space.
 The Earth is not a perfect sphere, it bulges around the 
 equator. Ecuador sits right on the bulge. Ecuador’s highest
  mountain, Mount Chimborazo, at its peak is the furthest 
  point from the Earth’s center.
"
        page="/egypt"
        country="Egypt"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/egypt"
        two="/colombia"
        three="/peru"
        four="/brazil"
        con1="Egypt"
        con2="Colobia"
        con3="Peru"
        con4="Brazil"
      />
    </>
  );
};

export default Ecuador;
