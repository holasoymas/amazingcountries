import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import jm from "../../img/J/jm.svg";

const Jamaica = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jamaica : Country With The Most Churches per Square Mile</title>
        <meta
          name="description"
          content="Jamaica has the most Churches per square mile. According to 
the National Library of Jamaica, there are approximately
 2.75 churches per square mile, a fact recognized by the 
 'Guinness World Book of Records'."
        />
        <meta
          name="keyboard"
          content="jamaica, kingston, Country With The Most Churches per Square Mile"
        />
        <link rel="icon" href={jm} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/japan" country="Japan" />

      {/* header */}
      <Header header="Jamaica : Country With The Most Churches per Square Mile" />

      {/* article  */}
      <Article flag={jm} />

      {/* features */}
      <Features
        capital="Kingston"
        area="10,991 km²"
        population="2,726,667 (2018)"
        continent="North America"
        hdi="0.734"
        currency="Jamaican dollar"
        language="Italian"
        religion="Christianity(68.9%)"
        literacy="87%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Jamaica has the most Churches per square mile. According to 
the National Library of Jamaica, there are approximately
 2.75 churches per square mile, a fact recognized by the 
 'Guinness World Book of Records'. There are also churches
  in people's backyards and living rooms that haven't been
   taken into consideration.
"
        page="/japan"
        country="Japan"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/japan"
        two="/haiti"
        three="/cuba"
        four="/colombia"
        con1="Japan"
        con2="Haiti"
        con3="Cuba"
        con4="Colombia"
      />
    </>
  );
};

export default Jamaica;
