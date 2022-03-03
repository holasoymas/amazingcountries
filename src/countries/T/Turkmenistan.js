import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import tm from "../../img/T/tm.svg";

const Turkmenistan = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Turkmenistan : Country With Door To The Hell ("Darvaza Gas Crater")
        </title>
        <meta
          name="description"
          content='The Darvaza gas crater or most commonly referred to as 
"Gates of Hell" it is actually the result of a mistake made by
 a group of Soviet geologists who were drilling for natural 
 gas in 1971.'
        />
        <meta
          name="keyboard"
          content="
Turkmenistan, Ashgabat, Door To The Hell, Darvaza Gas Crater
 "
        />

        <link rel="icon" href={tm} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/tuvalu" country="Tuvalu" />

      {/* header */}
      <Header
        header='
          Turkmenistan : Country With Door To The Hell ("Darvaza Gas Crater")
            '
      />

      {/* article  */}
      <Article flag={tm} />

      {/* features */}
      <Features
        capital="Ashgabat"
        area="491,210  km²"
        population="6,031,187 (2020)"
        continent="Asia"
        hdi="0.715"
        currency="Turkmenistan manat"
        language="Turkmen"
        religion="Muslims(93.7%)"
        literacy="99.7%"
      />

      {/* fact field */}
      <Fact
        didYouKnow='
The Darvaza gas crater or most commonly referred to as 
"Gates of Hell" it is actually the result of a mistake made by
 a group of Soviet geologists who were drilling for natural 
 gas in 1971. After their equipment and transport fell into 
 the hole and gas began escaping, they opted to light it on 
 fire, imagining it would take only a few days to burn off. 
 Considering that the crater still burns over 48 years later,
  you could say their calculation of available subterranean 
  gas was a bit off.
'
        page="/tuvalu"
        country="Tuvalu"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/tuvalu"
        two="/kazakhstan"
        three="/afghanistan"
        four="/china"
        con1="Tuvalu"
        con2="Kazakhstan"
        con3="Afghanistan"
        con4="China"
      />
    </>
  );
};

export default Turkmenistan;
