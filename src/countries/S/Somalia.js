import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import so from "../../img/S/so.svg";

const Somalia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Somalia : Most Corrupted Country In The World </title>
        <meta
          name="description"
          content="In Somalia, people often perfume homes after large meals or on
 special occasions when guests are visiting their homes. 
 Dabqaads, a white clay or soapstone pot, is used as an
  incense burner."
        />
        <meta
          name="keyboard"
          content="
          Somalia, Mogadishu, Most Corrupted Country In The World, africa"
        />
        <link rel="icon" href={so} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/south-africa" country="South Africa" />

      {/* header */}
      <Header header="Somalia : Most Corrupted Country In The World" />

      {/* article  */}
      <Article flag={so} />

      {/* features */}
      <Features
        capital="Mogadishu"
        area="637,657 km²"
        population="15,893,219 (2020)"
        continent="Africa"
        hdi="0.361"
        currency="Somali shilling"
        language="Somali,Arabic"
        religion="Islam(99%)"
        literacy="37.8%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
In Somalia, people often perfume homes after large meals or on
 special occasions when guests are visiting their homes. 
 Dabqaads, a white clay or soapstone pot, is used as an
  incense burner. Frankincense or other incense is placed on
   hot charcoal inside a dabqaad which then burns for about
    ten minutes.
"
        page="/south-africa"
        country="South Africa"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/south-africa"
        two="/kenya"
        three="/djibouti"
        four="/ethiopia"
        con1="South Africa"
        con2="Kenya"
        con3="Djibouti"
        con4="Ethiopia"
      />
    </>
  );
};

export default Somalia;
