import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import sa from "../../img/S/sa.svg";

const SaudiArabia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Saudi Arabia : The Birthplace Of Islam ("Mecca")</title>
        <meta
          name="description"
          content="The Arabian oryx, native to the country, was once classified
 as extinct in the wild. However, thanks to a government 
 conservation project."
        />
        <meta
          name="keyboard"
          content="
       Saudi Arabia, riyadh, The Birthplace Of Islam, Mecca, Arabian oryx
 "
        />
        <link rel="icon" href={sa} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/senegal" country="Senegal" />

      {/* header */}
      <Header header='Saudi Arabia : The Birthplace Of Islam ("Mecca")' />

      {/* article  */}
      <Article flag={sa} />

      {/* features */}
      <Features
        capital="Riyadh"
        area="2,149,690 km²"
        population="34,218,169 (2019)"
        continent="Asia"
        hdi="0.854"
        currency="Saudi Riyal"
        language="Arabic"
        religion="Sunni Muslim(84%)"
        literacy="95.3%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The Arabian oryx, native to the country, was once classified
 as extinct in the wild. However, thanks to a government 
 conservation project, the species has been reintroduced in to
  the desert from captivity and is making a comeback. This is
   the only documented case in history of an extinct animal 
   being restored.
"
        page="/senegal"
        country="Senegal"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/senegal"
        two="/jordan"
        three="/uae"
        four="/iraq"
        con1="Senegal"
        con2="Jordan"
        con3="UAE"
        con4="Iraq"
      />
    </>
  );
};

export default SaudiArabia;
