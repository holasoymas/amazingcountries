import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import co from "../../img/C/co.svg";

const Colombia = () => {
  return (
    <>
      <Helmet>
        <title>Colombia : Most Biodiverse Country in Birdlife</title>
        <meta
          name="description"
          content="70-90% of the world’s emeralds come from Colombia! The
 Colombian emerald is highly esteemed in the gemstone world
  because of its deep bright green hue. It’s the standard for
   quality gemstones."
        />
        <meta
          name="keyboard"
          content="colombia, bogota,Most Biodiverse Country in Birdlife "
        />
        <link rel="icon" href={co} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/comoros" country="Comoros" />

      {/* header */}
      <Header header="Colombia : Most Biodiverse Country in Birdlife" />

      {/* article  */}
      <Article flag={co} />

      {/* features */}
      <Features
        capital="Bogota"
        area=" 1,141,748  km²"
        population=" 50,372,424(2020)"
        continent="South America"
        hdi="0.767"
        currency="Colombian peso"
        language="Spanish"
        religion="Christianity(88.6%)"
        literacy="95.09%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
70-90% of the world’s emeralds come from Colombia! The
 Colombian emerald is highly esteemed in the gemstone world
  because of its deep bright green hue. It’s the standard for
   quality gemstones.
"
        page="/comoros"
        country="Comoros"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/comoros"
        two="/brazil"
        three="/ecuador"
        four="/venezuela"
        con1="Comoros"
        con2="Brazil"
        con3="Ecuador"
        con4="Venezuela"
      />
    </>
  );
};

export default Colombia;
