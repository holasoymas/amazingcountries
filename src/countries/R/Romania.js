import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ro from "../../img/R/ro.svg";

const Romania = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Romania : Country With The World's Haviest Building ("4.10 million
          tonnes")
        </title>
        <meta
          name="description"
          content="The Parliament Palace in Romania’s capital of Bucharest is 
the second largest building in the world, behind only the 
Pentagon. The building is 84m high."
        />
        <meta
          name="keyboard"
          content="Romania, Bucharest, Country With World's Haviest Building"
        />
        <link rel="icon" href={ro} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/russia" country="Russia" />

      {/* header */}
      <Header
        header="
          Romania : Country With The World's Haviest Building ('4.10
          million tonnes')
     "
      />

      {/* article  */}
      <Article flag={ro} />

      {/* features */}
      <Features
        capital="Bucharest"
        area="238,397 km²"
        population="19,317,984 (2020)"
        continent="Europe"
        hdi="0.828"
        currency="Romanian Leu"
        language="Romanian"
        religion="Christianity(92.3%)"
        literacy="98.8%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The Parliament Palace in Romania’s capital of Bucharest is 
the second largest building in the world, behind only the 
Pentagon. The building is 84m high. It is also the heaviest
bvx,xc, building in the world.
"
        page="/russia"
        country="Russia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/russia"
        two="/ukraine"
        three="/hungary"
        four="/bulgaria"
        con1="Russia"
        con2="Ukraine"
        con3="Hungary"
        con4="Bulgaria"
      />
    </>
  );
};

export default Romania;
