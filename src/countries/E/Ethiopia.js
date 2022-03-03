import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import et from "../../img/E/et.svg";

const Ethiopia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Ethiopia : The First Country To Discover Coffee In The World
        </title>
        <meta
          name="description"
          content="An Ethiopian year is comprised of 13 months, and is seven
  years behind the Gregorian calendar. In fact, Ethiopians
   celebrated the new millennium on September 11, 2007."
        />
        <meta
          name="keyboard"
          content="ethiopia, addis ababa, africa ,First Country To Discover Coffee"
        />
        <link rel="icon" href={et} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/fiji" country="Fiji" />

      {/* header */}
      <Header header="Ethiopia : The First Country To Discover Coffee In The World" />

      {/* article  */}
      <Article flag={et} />

      {/* features */}
      <Features
        capital="Addis Ababa"
        area="1,104,300  km²"
        population="117,876,227 (2021)"
        continent="Africa"
        hdi="0.485"
        currency="Ethiopian birr"
        language="Afar,Amharic,Oromo"
        religion="Christianity(67.3%)"
        literacy="51.8%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
 An Ethiopian year is comprised of 13 months, and is seven
  years behind the Gregorian calendar. In fact, Ethiopians
   celebrated the new millennium on September 11, 2007; this
    is because the Ethiopians continued with the same calendar
     that the Roman church amended in 525 AD.
"
        page="/fiji"
        country="Fiji"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/fiji"
        two="/djibouti"
        three="/somalia"
        four="/kenya"
        con1="Fiji"
        con2="Djibouti"
        con3="Somalia"
        con4="Kenya"
      />
    </>
  );
};

export default Ethiopia;
