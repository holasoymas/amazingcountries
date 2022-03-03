import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import na from "../../img/N/na.svg";

const Namibia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Namibia : Home To The World's Largest Population Of Free-roaming
          Cheetahs
        </title>
        <meta
          name="description"
          content="Namibia lays claim to the highest sand dune in the world.
 Rising dramatically from the Namib Desert, the impressive
  mound known, rather boringly, as Dune 7, tops out at around
   383m."
        />
        <meta
          name="keyboard"
          content=" Namibia, Windhoek, World's Largest Population Of Free-roaming
          Cheetahs"
        />
        <link rel="icon" href={na} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/nauru" country="Nauru" />

      {/* header */}
      <Header
        header="Namibia : Home To The World's Largest Population Of Free-roaming
          Cheetahs"
      />

      {/* article  */}
      <Article flag={na} />

      {/* features */}
      <Features
        capital="Windhoek"
        area="825,615 km²"
        population="2,550,226 (2020)"
        continent="Africa"
        hdi="0.646"
        currency="Namibian Dollar"
        language="English"
        religion="Christianity(87.9%)"
        literacy="91.5%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Namibia lays claim to the highest sand dune in the world.
 Rising dramatically from the Namib Desert, the impressive
  mound known, rather boringly, as Dune 7, tops out at around
   383m. As a point of reference consider this: The Shard in 
   London is 310m tall.
"
        page="/nauru"
        country="Nauru"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/nauru"
        two="/angola"
        three="/zimbabwe"
        four="/zambia"
        con1="Nauru"
        con2="Angola"
        con3="Zimbabwe"
        con4="Zambia"
      />
    </>
  );
};

export default Namibia;
