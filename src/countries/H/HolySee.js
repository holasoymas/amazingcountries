import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import hs from "../../img/H/hs.svg";

const HolySee = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Holy See : Smallest Sovereign Country In The World ( 0.49 km² )
        </title>
        <meta
          name="description"
          content="It has the world’s shortest railway. 
          With just two 300-metre tracks and one station, 
          the Vatican’s railway network is the shortest in
           the world and it the smallest country in the world."
        />
        <meta
          name="keyboard"
          content="vatican city, holy see, Smallest sovereign Country, ( 0.49 km² )"
        />
        <link rel="icon" href={hs} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/honduras" country="Honduras" />

      {/* header */}
      <Header header="Holy See : Smallest Sovereign Country In The World ( 0.49 km² )" />

      {/* article  */}
      <Article flag={hs} />

      {/* features */}
      <Features
        capital="Vatican City"
        area="0.49 km²"
        population="825 (2019)"
        continent="Europe"
        hdi="0.682"
        currency="Euro"
        language="Italian,Latin"
        religion="Christianity"
        literacy="100%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
It has the world’s shortest railway. With just two 300-metre
 tracks and one station, the Vatican’s railway network is the
  shortest in the world. It’s used for importing goods and for
   ceremonial purposes and there are no regular passenger 
   trains scheduled.
"
        page="/honduras"
        country="Honduras"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/honduras"
        two="/italy"
        three="/monaco"
        four="/switzerland"
        con1="Honduras"
        con2="Italy"
        con3="Monaco"
        con4="Switzerland"
      />
    </>
  );
};

export default HolySee;
