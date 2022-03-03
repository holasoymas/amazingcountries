import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import by from "../../img/B/by.svg";

const Belarus = () => {
  return (
    <>
      <Helmet>
        <title>Belarus : Silicon Valley of Eastern Europe</title>
        <meta
          name="description"
          content="The
        country has 2 official languages, Belarusian and Russian
        , the first one is only studied on a separate subject at
         school, while all the other classes"
        />
        <meta
          name="keyboard"
          content="belarus, minsk, Silicon Valley of Eastern Europe, europe"
        />
        <link rel="icon" href={by} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/belgium" country="Belgium" />

      {/* header */}
      <Header header="Belarus :  Silicon Valley of Eastern Europe" />

      {/* article  */}
      <Article flag={by} />

      {/* features */}
      <Features
        capital="Minsk"
        area=" 207,595 km²"
        population=" 9,413,446 (2019)"
        continent="Europe"
        hdi="0.823"
        currency="Belarusian ruble"
        language=" Bealrusian,Russian"
        religion="Christianity(55.4%)"
        literacy="99.8%(2020)"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
       In Belarus, people do not speak Belarusian. The
        country has 2 official languages, Belarusian and Russian
        , the first one is only studied on a separate subject at
         school, while all the other classes, as well as official
          documentation are conducted in Russian."
        page="/belgium"
        country="Belgium"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/belgium"
        two="/poland"
        three="/russia"
        four="/latvia"
        con1="Belgium"
        con2="Poland"
        con3="Russia"
        con4="Latvia"
      />
    </>
  );
};

export default Belarus;
