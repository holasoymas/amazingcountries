import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import sg from "../../img/S/sg.svg";

const Singapore = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Singapore : Country With The Fastest Pedestrians In The World
        </title>
        <meta
          name="description"
          content="Sang Nila Utama, a prince from Palembang, saw a creature he
 thought was a lion and named the island “Singapura” which
  means “Lion City” in Sanskrit."
        />
        <meta
          name="keyboard"
          content="Singapore, asia, Country With The Fastest Pedestrians  In The World"
        />
        <link rel="icon" href={sg} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/slovakia" country="Slovakia" />

      {/* header */}
      <Header header="Singapore : Country With The Fastest Pedestrians  In The World" />

      {/* article  */}
      <Article flag={sg} />

      {/* features */}
      <Features
        area="728.6 km²"
        population="5,685,800 (2020)"
        continent="Asia"
        hdi="0.938"
        currency="Singapore Dollar"
        language="English"
        religion="Buddhism(31.1%)"
        literacy="97.1%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Sang Nila Utama, a prince from Palembang, saw a creature he
 thought was a lion and named the island “Singapura” which
  means “Lion City” in Sanskrit. However, there have never
   been lions outside of captivity in Singapore.
"
        page="/slovakia"
        country="Slovakia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/slovakia"
        two="/malaysia"
        three="/indonesia"
        four="/philippines"
        con1="Slovakia"
        con2="Malaysia"
        con3="Indonesia"
        con4="Philippines"
      />
    </>
  );
};

export default Singapore;
