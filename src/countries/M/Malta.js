import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import mt from "../../img/M/mt.svg";

const Malta = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Malta : Only Country In The EU Where Spring Hunting Is Legal
        </title>
        <meta
          name="description"
          content="The Maltese islands are home to some of the Oldest Man-made
 Structures in the world, with some thought to be dating back 
 3,600 BC, some 5,000 years ago."
        />
        <meta
          name="keyboard"
          content="Malta, valletta, Country In EU Where Spring Hunting Is Legal "
        />
        <link rel="icon" href={mt} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/marshall-islands" country="Marshall Islands" />

      {/* header */}
      <Header header="Malta : Only Country In The EU Where Spring Hunting Is Legal " />

      {/* article  */}
      <Article flag={mt} />

      {/* features */}
      <Features
        capital="Valletta"
        area="316 km²"
        population="514,564 (2019)"
        continent="Europe"
        hdi="0.895"
        currency="Euro"
        language="Maltese, English"
        religion="Christianity(90%)"
        literacy="94.5%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The Maltese islands are home to some of the Oldest Man-made
 Structures in the world, with some thought to be dating back 
 3,600 BC, some 5,000 years ago. Its megalithic temples are
  older than the Pyramids of Egypt, The Great Wall of China, 
  and even Stonehenge in England.
"
        page="/marshall-islands"
        country="Marshall Islands"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/marshall-islands"
        two="/italy"
        three="/spain"
        four="/tunisia"
        con1="Marshall Islands"
        con2="Italy"
        con3="Spain"
        con4="Tunisia"
      />
    </>
  );
};

export default Malta;
