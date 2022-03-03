import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import mm from "../../img/M/mm.svg";

const Myanmar = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Myanmar : The Land of a Thousand Pagodas</title>
        <meta
          name="description"
          content="Shwedagon Pagoda,most sacred of sites is believed to hold,
 among other relics, eight strands of Gautama Buddha’s hair.
  According to legend, two merchants met the Buddha on their 
  travels."
        />
        <meta
          name="keyboard"
          content="Myanmar, naypyidaw, golden land, The Land of a Thousand Pagodas"
        />
        <link rel="icon" href={mm} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/namibia" country="Namibia" />

      {/* header */}
      <Header header="Myanmar : The Land of a Thousand Pagodas" />

      {/* article  */}
      <Article flag={mm} />

      {/* features */}
      <Features
        capital="Naypyidaw"
        area="676,578 km²"
        population=" 53,582,855 (2017)"
        continent="Asia"
        hdi="0.583"
        currency="Kyat"
        language="Burmese"
        religion="Buddhism(87.9%)"
        literacy="75.6%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Shwedagon Pagoda,most sacred of sites is believed to hold,
 among other relics, eight strands of Gautama Buddha’s hair.
  According to legend, two merchants met the Buddha on their 
  travels and returned to Burma with the strands of hair, 
  which were placed in the temple with the other relics.
"
        page="/namibia"
        country="Namibia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/nimibia"
        two="/india"
        three="/thailand"
        four="/china"
        con1="Nimibia"
        con2="India"
        con3="Thailand"
        con4="China"
      />
    </>
  );
};

export default Myanmar;
