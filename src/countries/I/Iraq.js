import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import iq from "../../img/I/iq.svg";

const Iraq = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Iran : Home To The World's First Writing System In The World
        </title>
        <meta
          name="description"
          content="The country is home to the world’s earliest system of writing,
 cuneiform script, with characteristics including different 
 wedge-shaped marks on clay tablets. "
        />
        <meta
          name="keyboard"
          content="Iran, Bhagdad, Home To The World's First Writing System "
        />
        <link rel="icon" href={iq} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/ireland" country="Ireland" />

      {/* header */}
      <Header header="Iran : Home To The World's First Writing System In The World" />

      {/* article  */}
      <Article flag={iq} />

      {/* features */}
      <Features
        capital="Baghdad"
        area="438,317 km²"
        population="38,433,600 (2018)"
        continent="Asia"
        hdi="0.674"
        currency="Iraqi dinar"
        language=" Arabic,Kurdish"
        religion="Islam(98%)"
        literacy="85.60%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The country is home to the world’s earliest system of writing,
 cuneiform script, with characteristics including different 
 wedge-shaped marks on clay tablets. It was invented by the
  Sumerians and was first used around the 3000BC.
"
        page="/ireland"
        country="Ireland"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/ireland"
        two="/turkey"
        three="/iran"
        four="/syria"
        con1="Ireland"
        con2="Turkey"
        con3="Iran"
        con4="Syria"
      />
    </>
  );
};

export default Iraq;
