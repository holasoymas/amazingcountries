import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ba from "../../img/B/ba.svg";

const BosniaandHerzegovina = () => {
  return (
    <>
      <Helmet>
        <title>Bosnia & Herzegovina : The Heart Shaped Country</title>
        <meta
          name="description"
          content="Bosnia’s anthem is one of the few anthems in
           the world that lacks lyrics. Despite many efforts to
            officially adopt lyrics to go along with the melody,
             to this day the Bosnian parliament has yet to vote
              in favour of any hem."
        />
        <meta
          name="keyboard"
          content="Bosnia & Herzegovina, sarajevo, europe, heart shaped country"
        />
        <link rel="icon" href={ba} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/botswana" country="Botswana" />

      {/* header */}
      <Header header="Bosnia & Herzegovina : The Heart Shaped Country" />

      {/* article  */}
      <Article flag={ba} />

      {/* features */}
      <Features
        capital="Sarajevo"
        area="51,129 km²"
        population="3,332,593 (2019)"
        continent="Europe"
        hdi="0.780"
        currency="Bosnia-Herzegovina "
        language="Bosnian, Serbian"
        religion="Islam(51%)"
        literacy="96.99%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
      Bosnia’s anthem is one of the few anthems in the world
       that lacks lyrics. Despite many efforts to officially 
       adopt lyrics to go along with the melody, to this day 
       the Bosnian parliament has yet to vote in favour of any 
       hem. This is a result of the ethnic divisions of the country,
        which make it hard to find a set of lyrics that represent 
        all three major ethnicities equally.
"
        page="/botswana"
        country="Botswana"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/botswana"
        two="/croatia"
        three="/serbia"
        four="/montenegro"
        con1="Botswana"
        con2="Croatia"
        con3="Serbia"
        con4="Montenegro"
      />
    </>
  );
};

export default BosniaandHerzegovina;
