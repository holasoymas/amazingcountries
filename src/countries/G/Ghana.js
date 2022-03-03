import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import gh from "../../img/G/gh.svg";

const Ghana = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ghana : First Country To Get Independence In Sub-Saharan</title>
        <meta
          name="description"
          content="Ghana has the largest market in West Africa. It’s called
 Kejetia market and it’s located in Kumasi, the Ashanti 
 region’s capital. "
        />
        <meta
          name="keyboard"
          content="ghana, aacra, First Country To Get Independence In Sub-Saharan"
        />
        <link rel="icon" href={gh} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/greece" country="Greece" />

      {/* header */}
      <Header header="Ghana : First Country To Get Independence In Sub-Saharan" />

      {/* article  */}
      <Article flag={gh} />

      {/* features */}
      <Features
        features="Ghana"
        capital="Accra"
        area="239,567 km²"
        population="31,072,940 (2020)"
        continent="Africa"
        hdi="0.611"
        currency="Ghanaian cedi"
        language="English"
        religion="Christianity(71.2%)"
        literacy="79.04%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Ghana has the largest market in West Africa. It’s called
 Kejetia market and it’s located in Kumasi, the Ashanti 
 region’s capital. There you can find everything under the 
 hot Ghanaian sun, from local crafts — beads, cloth and 
 sandals — to second-hand jeans and clothing, and meats, 
 fruit and vegetables.
"
        page="/greece"
        country="Greece"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/greece"
        two="/cotedivoire"
        three="/burkina-faso"
        four="/togo"
        con1="Greece"
        con2="Côte d'Ivoir"
        con3="Burkina Faso"
        con4="Togo"
      />
    </>
  );
};

export default Ghana;
