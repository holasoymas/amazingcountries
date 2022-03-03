import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import mz from "../../img/M/mz.svg";

const Mozambique = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mozambique : Only Country Which Has AK-47 On It's Flag</title>
        <meta
          name="description"
          content="Mozambique was governed from Goa until 1752, when it was
 brought under direct control from Lisbon. As a result of this
  link with India, numerous Indians trading communities 
  settled in the country."
        />
        <meta
          name="keyboard"
          content="Mozambique, Maputo, Country Which Has AK-47 On It's Flag"
        />
        <link rel="icon" href={mz} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/myanmar" country="Myanmar" />

      {/* header */}
      <Header header="Mozambique : Only Country Which Has AK-47 On It's Flag" />

      {/* article  */}
      <Article flag={mz} />

      {/* features */}
      <Features
        capital="Maputo"
        area="801,590 km²"
        population="30,066,648 (2020)"
        continent="Africa"
        hdi="0.456"
        currency="Metical"
        language="Portuguese"
        religion="Christianity(57.6%)"
        literacy="47%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Mozambique was governed from Goa until 1752, when it was
 brought under direct control from Lisbon. As a result of this
  link with India, numerous Indians trading communities 
  settled in the country, and their influence can still be 
  seen today. Independent Arab trading 'states' survived until
   the end of the 19th century.
"
        page="/myanmar"
        country="Myanmar"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/myanmar"
        two="/south-africa"
        three="/zimbabwe"
        four="/tanzania"
        con1="Myanmar"
        con2="South Africa"
        con3="Zimbabwe"
        con4="Tanzania"
      />
    </>
  );
};

export default Mozambique;
