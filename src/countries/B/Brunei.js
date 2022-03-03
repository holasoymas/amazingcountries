import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import bn from "../../img/B/bn.svg";

const Brunei = () => {
  return (
    <>
      <Helmet>
        <title>Brunei : Venice Of The East</title>
        <meta
          name="description"
          content=" Brunei is home to the largest stilt settlement in the world.
    Founded over 1,000 years ago, Kampong Ayer consists of 42
    adjoining stilt villages which house around 30,000 people."
        />
        <meta
          name="keyboard"
          content="brunei, bandar seri begawan, venice of the east"
        />
        <link rel="icon" href={bn} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/bulgaria" country="Bulgaria" />

      {/* header */}
      <Header header="Brunei : Venice Of The East" />

      {/* article  */}
      <Article flag={bn} />

      {/* features */}
      <Features
        capital="Bandar Seri Begawan"
        area="5,765 km²"
        population="417,256 (2016)"
        continent="Asia"
        hdi="0.838"
        currency="Brunei Dollar"
        language="Malay"
        religion="Islam(80.9%)"
        literacy="97.2%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
   Brunei is home to the largest stilt settlement in the world.
    Founded over 1,000 years ago, Kampong Ayer consists of 42
    adjoining stilt villages which house around 30,000 people.
    The settlement has been nicknamed the ‘Venice of the East’.
"
        page="/bulgaria"
        country="Bulgaria"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/bulgaria"
        two="/china"
        three="/malaysia"
        four="/indonesia"
        con1="Bulgaria"
        con2="China"
        con3="Malaysia"
        con4="Indonesia"
      />
    </>
  );
};

export default Brunei;
