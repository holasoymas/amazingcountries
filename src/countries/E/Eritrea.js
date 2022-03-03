import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import er from "../../img/E/er.svg";

const Eritria = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Eritria : Country With The Most Modernist African City ( Asmara )
        </title>
        <meta
          name="description"
          content="A million years old skull with traits associated with both
  the Homo Sapien and Homo erectus was found in the Afar region
   in Eritrea."
        />
        <meta
          name="keyboard"
          content="Asmara, eritrea, africa, Most Modernist African City ( Asmara )"
        />
        <link rel="icon" href={er} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/estonia" country="Estonia" />

      {/* header */}
      <Header header="Eritrea : Country With The Most Modernist African City ( Asmara )" />

      {/* article  */}
      <Article flag={er} />

      {/* features */}
      <Features
        capital="Asmara"
        area="117,600 km²"
        population="3,546,421 (2020)"
        continent="Africa"
        hdi="0.459"
        currency="Eritrean nakfa"
        language="Tigrinya,Tigre"
        religion="Christianity(63%)"
        literacy="76.57%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
 A million years old skull with traits associated with both
  the Homo Sapien and Homo erectus was found in the Afar region
   in Eritrea. Before this discovery, the oldest fossil with
    modern human traits was the 600,000 years old, which was
     excavated in Bodo Ethiopia.
"
        page="/estonia"
        country="Estonia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/estonia"
        two="/djibouti"
        three="/ethiopia"
        four="/sudan"
        con1="Estonia"
        con2="Djibouti"
        con3="Ethiopia"
        con4="Sudan"
      />
    </>
  );
};

export default Eritria;
