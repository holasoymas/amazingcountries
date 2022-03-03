import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import pt from "../../img/P/pt.svg";

const Portugal = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Portugal : Country With The Oldest Bookstore In The World ("Livraria
          Bertrand")
        </title>
        <meta
          name="description"
          content="Portugal holds the record for the shortest and 
longest-reigning monarchs.Henrique of Portugal was the king 
of Portugal for more than 73 years.  Luis Filipe, on the other
hand,was king for only 20 minutes."
        />
        <meta
          name="keyboard"
          content="portugal, lisbon, Country With Oldest Bookstore, Livraria
          Bertrand"
        />
        <link rel="icon" href={pt} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/qatar" country="Qatar" />

      {/* header */}
      <Header
        header='Portugal : Country With Oldest Bookstore In The World ("Livraria
          Bertrand")'
      />

      {/* article  */}
      <Article flag={pt} />

      {/* features */}
      <Features
        capital="Lisbon"
        area="92,212 km²"
        population="10,347,892 (2021)"
        continent="Europe"
        hdi="0.864"
        currency="Euro"
        language="Portuguese"
        religion="Christianity(84.3%)"
        literacy="99.5%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Portugal holds the record for the shortest and 
longest-reigning monarchs. Henrique of Portugal was the king 
of Portugal for more than 73 years.  Luis Filipe, on the other
 hand, was king for only 20 minutes.
"
        page="/qatar"
        country="Qatar"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/qatar"
        two="/spain"
        three="/france"
        four="/algeria"
        con1="Qatar"
        con2="Spain"
        con3="France"
        con4="Algeria"
      />
    </>
  );
};

export default Portugal;
