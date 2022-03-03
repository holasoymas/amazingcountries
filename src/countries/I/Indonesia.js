import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import id from "../../img/I/id.svg";

const Indonesia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Indonesia : The Largest Producer Of Coconut In The World</title>
        <meta
          name="description"
          content="Puncak Jaya is the tallest summit of Mount Jayawijaya in the
 Papua Province of Indonesia. It sits 4,884 metres above sea
  level and is also the highest island peak in the whole 
  world."
        />
        <meta
          name="keyboard"
          content="Indonesia, jakarta, Largest Producer Of Coconut In The World, asia"
        />
        <link rel="icon" href={id} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/iran" country="Iran" />

      {/* header */}
      <Header header="Indonesia : The Largest Producer Of Coconut In The World" />

      {/* article  */}
      <Article flag={id} />

      {/* features */}
      <Features
        capital="Jakarta"
        area="1,904,569 km²"
        population="270,203,917 (2020)"
        continent="Asia"
        hdi="0.718"
        currency="Indonesian rupiah"
        language="Indonesian"
        religion="Islam(86.70%)"
        literacy="99.8%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Puncak Jaya is the tallest summit of Mount Jayawijaya in the
 Papua Province of Indonesia. It sits 4,884 metres above sea
  level and is also the highest island peak in the whole 
  world. It is also the only place in Indonesia where you 
  can find any snow to frolic in.
"
        page="/iran"
        country="Iran"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/iran"
        two="/malaysia"
        three="/papua-new-guinea"
        four="philippines"
        con1="Iran"
        con2="Malaysia"
        con3="Papua New Guinea"
        con4="Philippines"
      />
    </>
  );
};

export default Indonesia;
