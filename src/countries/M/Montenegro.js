import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import me from "../../img/M/me.svg";

const Montenegro = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Montenegro : The land of black mountains</title>
        <meta
          name="description"
          content="The country is located in 4 climatic zones, which means that
 even on a hot summer day, you can take one of the many
  Montenegro day trips to the remote mountainous areas and 
  find snow there."
        />
        <meta
          name="keyboard"
          content="Montenegro, Podgorica, euripe, The land of black mountains"
        />
        <link rel="icon" href={me} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/morocco" country="Morocco" />

      {/* header */}
      <Header header="Montenegro : The land of black mountains" />

      {/* article  */}
      <Article flag={me} />

      {/* features */}
      <Features
        capital="Podgorica"
        area="13,812 km²"
        population="621,873 (2020)"
        continent="Europe"
        hdi="0.737"
        currency="Europe"
        language="Montenegrin"
        religion="Christianity(75.93%)"
        literacy="98.8%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
The country is located in 4 climatic zones, which means that
 even on a hot summer day, you can take one of the many
  Montenegro day trips to the remote mountainous areas and 
  find snow there!.
"
        page="/morocco"
        country="Morocco"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/morocco"
        two="/croatia"
        three="/serbia"
        four="/bosnia-and-herzegovina"
        con1="Morocco"
        con2="Croatia"
        con3="Serbia"
        con4="Bosnia & Herzegovina"
      />
    </>
  );
};

export default Montenegro;
