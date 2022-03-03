import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ve from "../../img/V/ve.svg";

const Venezuela = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Venezuela : Home To The World's Highest Waterfall ("Angel Falls")
        </title>
        <meta
          name="description"
          content="There’s a tribe that worships Prince Philip. It started with a
 visit the Queen and Duke made to Vanuatu in 1974. A warrior
  named Chief Jack Naiva, who died in 2009."
        />
        <meta
          name="keyboard"
          content="
          Venezuela, caracas, Home To The World's Highest Waterfall, Angel Falls

 "
        />

        <link rel="icon" href={ve} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/vietnam" country="Vietnam" />

      {/* header */}
      <Header
        header='
          Venezuela : Home To The World Highest Waterfall ("Angel Falls")
'
      />

      {/* article  */}
      <Article flag={ve} />

      {/* features */}
      <Features
        capital="Caracas"
        area="916,445 km²"
        population="28,887,118 (2018)"
        continent="South America"
        hdi="0.711"
        currency="Venezuelan bolívar"
        language="Spanish"
        religion="Christianity(91%)"
        literacy="97.1%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
There’s an everlasting lightning storm in Venezuala. Formed
 over the mouth of the Catatumbo river, when cold mountain air
  collides with the heat of Lake Maracaibo, the ‘Catatumbo 
  lightning’ entered the Guinness Book of World Records in 
  2015 as the most likely place on the planet to see lightning.
   Sometimes there are more than 100,000 lightning strikes a 
   night.
"
        page="/vietnam"
        country="Vietnam"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/vietnam"
        two="/guyana"
        three="/brazil"
        four="/colombia"
        con1="Vietnam"
        con2="Guyana"
        con3="Brazil"
        con4="Colombia"
      />
    </>
  );
};

export default Venezuela;
