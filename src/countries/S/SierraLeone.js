import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import sl from "../../img/S/sl.svg";

const SierraLeone = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sierra Leone : The Land Of Blood Diamonds</title>
        <meta
          name="description"
          content="The nation is rich in mineral deposits, especially diamonds,
 and has long relied on the mining industry and mining exports
  to fuel its economy."
        />
        <meta
          name="keyboard"
          content="Sierra Leone, Freetown, africa, The Land Of Blood Diamonds"
        />
        <link rel="icon" href={sl} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/singapore" country="Singapore" />

      {/* header */}
      <Header header="Sierra Leone : The Land Of Blood Diamonds" />

      {/* article  */}
      <Article flag={sl} />

      {/* features */}
      <Features
        capital="Freetown"
        area="71,740 km²"
        population="8,059,155 (2015)"
        continent="Africa"
        hdi="0.452"
        currency="Leone"
        language="English"
        religion="Islam(78%)"
        literacy="43.2%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The nation is rich in mineral deposits, especially diamonds,
 and has long relied on the mining industry and mining exports
  to fuel its economy. Sierra Leone is also known around the
   world for its blood diamonds (also commonly referred to as
    conflict or war diamonds) which were mined and sold for
     weapons during the country’s violent civil war from 1991
      to 2002.
"
        page="/singapore"
        country="Singapore"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/singapore"
        two="/guinea"
        three="/liberia"
        four="/senegal"
        con1="Singapore"
        con2="Guinea"
        con3="Liberia"
        con4="Senegal"
      />
    </>
  );
};

export default SierraLeone;
