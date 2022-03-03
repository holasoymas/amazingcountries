import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import cz from "../../img/C/cz.svg";

const Czechia = () => {
  return (
    <>
      <Helmet>
        <title>
          Czech Republic : Country With The Highest Beer Consumption Per Capita{" "}
        </title>
        <meta
          name="description"
          content="The word robot first hit the scene when Czech writer, Karl
 Capek, used in a play to describe creatures that could 
 perform all the work humans didn’t want to do and had no soul."
        />
        <meta
          name="keyboard"
          content="czechia, prague, Country With The Highest Beer Consumption Per Capita"
        />
        <link rel="icon" href={cz} />
      </Helmet>
      {/* navbar */}
      <Navbar
        page="/democratic-republic-of-congo"
        country="Dem. Rep. of Congo"
      />

      {/* header */}
      <Header header="Czech Republic : Country With The Highest Beer Consumption Per Capita" />

      {/* article  */}
      <Article flag={cz} />

      {/* features */}
      <Features
        capital="Prague"
        area="78,871 km²"
        population="10,701,777 (2021)"
        continent="Europe"
        hdi="0.900"
        currency="Czech koruna"
        language="Czech"
        religion="No religion(34.5%)"
        literacy="99.8%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The word robot first hit the scene when Czech writer, Karl
 Capek, used in a play to describe creatures that could 
 perform all the work humans didn’t want to do and had no soul.
"
        page="/democratic-republic-of-congo"
        country="Dem. Rep. of Congo"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/democratic-republic-of-congo"
        two="/poland"
        three="/germany"
        four="/austria"
        con1="Dem. Rep. Of Congo"
        con2="Poland"
        con3="Germany"
        con4="Austria"
      />
    </>
  );
};

export default Czechia;
