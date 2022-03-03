import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import mu from "../../img/M/mu.svg";

const Mauritius = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Mauritius : Most Developed Country In The Continent In Africa
        </title>
        <meta
          name="description"
          content="The long-extinct Dodo bird was endemic to Mauritius, with the
 main island of Mauritius being the only known habitat of the
  flightless bird, which is still considered to be the national
   bird of Mauritius."
        />
        <meta
          name="keyboard"
          content="Mauritius, port louis, africa, Most Developed Country In Africa"
        />
        <link rel="icon" href={mu} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/mexico" country="Mexico" />

      {/* header */}
      <Header header="Mauritius : Most Developed Country In The Continent In Africa" />

      {/* article  */}
      <Article flag={mu} />

      {/* features */}
      <Features
        capital="Port Louis"
        area="2,040 km²"
        population="1,265,475 (2019)"
        continent="Africa"
        hdi="0.804"
        currency="Mauritian Rupee"
        language="Arabic, French"
        religion="Hinduism(48.54%)"
        literacy="91.3%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The long-extinct Dodo bird was endemic to Mauritius, with the
 main island of Mauritius being the only known habitat of the
  flightless bird, which is still considered to be the national
   bird of Mauritius (it’s also represented in the national 
   Coat of Arms). It is said that the dodo evolved from
    pigeons who had lost their way.
"
        page="/mexico"
        country="Mexico"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/mexico"
        two="/madagascar"
        three="/india"
        four="/seychelles"
        con1="Mexico"
        con2="Madagascar"
        con3="India"
        con4="Seychelles"
      />
    </>
  );
};

export default Mauritius;
