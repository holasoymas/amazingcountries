import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import mv from "../../img/M/mv.svg";

const Maldives = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Maldives : Most Flattest Country In The World</title>
        <meta
          name="description"
          content="During Medieval times, Cowry shells were used as money. 
They can be now found in millions in Maldives. This is also
 why shells commonly ornate Maldivian coins."
        />
        <meta
          name="keyboard"
          content="Maldives, male, asia, Most Flattest Country In The World"
        />
        <link rel="icon" href={mv} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/mali" country="Mali" />

      {/* header */}
      <Header header="Maldives : Most Flattest Country In The World" />

      {/* article  */}
      <Article flag={mv} />

      {/* features */}
      <Features
        capital="Male"
        area="300 km²"
        population="437,535 (2014)"
        continent="Asia"
        hdi="0.740"
        currency="Maldivian rufiyaa"
        language="Dhivehi"
        religion="Sunni Islam(100%)"
        literacy="97.7%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
During Medieval times, Cowry shells were used as money. 
They can be now found in millions in Maldives. This is also
 why shells commonly ornate Maldivian coins.
"
        page="/mali"
        country="Mali"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/mali"
        two="/india"
        three="/sri-lanka"
        four="/seychelles"
        con1="Mali"
        con2="India"
        con3="Sri Lanka"
        con4="Seychelles"
      />
    </>
  );
};

export default Maldives;
