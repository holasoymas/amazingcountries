import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import bo from "../../img/B/bo.svg";

const Bolivia = () => {
  return (
    <>
      <Helmet>
        <title>
          Bolivia : Capital With The Highest Altitude, La Paz (3,869 m)
        </title>
        <meta
          name="description"
          content=" Bolivia has 37 official languages, In addition to Spanish,
       there are 36 official indigenous languages. The four most
        widely spoken indigenous languages are Aymara, Quechua."
        />
        <meta
          name="keyboard"
          content="bolivia, la paz, South America, Capital With The Highest Altitude"
        />
        <link rel="icon" href={bo} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/bosnia-and-herzegovina" country="Bosnia & Herzegovina" />

      {/* header */}
      <Header header="Bolivia : Capital With The Highest Altitude, La Paz (3,869 m)" />

      {/* article  */}
      <Article flag={bo} />

      {/* features */}
      <Features
        capital=" La Paz"
        area="1,098,581 km²"
        population="11,428,245 (2019)"
        continent="South America"
        hdi="0.718"
        currency="Boliviano"
        language="Spanish"
        religion="Christianity(88.9%)"
        literacy="92.46%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
      Bolivia has 37 official languages. In addition to Spanish,
       there are 36 official indigenous languages. The four most
        widely spoken indigenous languages are Aymara, Quechua,
         Chiquitano and Guaraní.
"
        page="/bosnia-and-herzegovina"
        country="Bosnia & Herzegovina"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/bosnia-and-herzegovina"
        two="/brazil"
        three="/argentina"
        four="peru"
        con1="Bosnia & Herzegovina"
        con2="Brazil"
        con3="Argentina"
        con4="Peru"
      />
    </>
  );
};

export default Bolivia;
