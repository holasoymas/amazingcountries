import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ph from "../../img/P/ph.svg";

const Philippines = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Philippines : Only Christian Nation In The Continent Of Asia
        </title>
        <meta
          name="description"
          content="The Philippines is the only Asian nation that is predominantly
 Christian. While many of its Southeast Asian neighbors 
 practice Buddhism."
        />
        <meta
          name="keyboard"
          content="Philippines, manila, asia, philopino, Only Christian Nation In Asia"
        />
        <link rel="icon" href={ph} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/poland" country="Poland" />

      {/* header */}
      <Header header="Philippines : Only Christian Nation In The Continent Of Asia" />

      {/* article  */}
      <Article flag={ph} />

      {/* features */}
      <Features
        capital="Manila"
        area="300,000 km²"
        population="109,035,343 (2020)"
        continent="Asia"
        hdi="0.718"
        currency="Philippine peso"
        language="Filipino, English"
        religion="Christianity(92.2%)"
        literacy="98.2%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
The Philippines is the only Asian nation that is predominantly
 Christian. While many of its Southeast Asian neighbors 
 practice Buddhism, 86 percent of the Filipino population is 
 Roman Catholic.
"
        page="/poland"
        country="Poland"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/poland"
        two="/japan"
        three="/vietnam"
        four="/indonesia"
        con1="Poland"
        con2="Japan"
        con3="Vietnam"
        con4="Indonesia"
      />
    </>
  );
};

export default Philippines;
