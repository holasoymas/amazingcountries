import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ht from "../../img/H/ht.svg";

const Haiti = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Haiti : First Country In The Western Hemisphere To Abolish Slavery
        </title>
        <meta
          name="description"
          content="Cock fighting is an official sport in Haiti.
           Animal rights activists in the U.S. denounce the
            activity as cruel and inhumane, but in Haiti, the
             popularity of Cock Fighting skyrockets."
        />
        <meta
          name="keyboard"
          content="haiti, port-au-prince, First Country In  Western Hemisphere To Abolish Slavery"
        />
        <link rel="icon" href={ht} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/holy-see" country="Holy See" />

      {/* header */}
      <Header header="Haiti : First Country In The Western Hemisphere To Abolish Slavery" />

      {/* article  */}
      <Article flag={ht} />

      {/* features */}
      <Features
        capital="Port-au-Prince"
        area="27,750 km²"
        population="11,439,646 (2018)"
        continent="North America"
        hdi="0.510"
        currency="Haitian Gourde"
        language="French,Haitian Creole"
        religion="Christianity(86.9%)"
        literacy="61%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Cock fighting is an official sport in Haiti. Animal rights
 activists in the U.S. denounce the activity as cruel and 
 inhumane, but in Haiti, the popularity of Cock Fighting 
 skyrockets. Raw meat and hot pepper soaked in rum is fed to
  cocks to make them tough and aggressive and the owner of 
  the winning cock wins $70 which is what more than 80% of 
  Haitians earn in a month, making it very lucrative.
"
        page="/holy-see"
        country="Holy See"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/holy-see"
        two="/dominican-republic"
        three="/cuba"
        four="/jamaica"
        con1="Holy See"
        con2="Dominica Republic"
        con3="Cuba"
        con4="Jamaica"
      />
    </>
  );
};

export default Haiti;
