import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import bz from "../../img/B/bz.svg";

const Belize = () => {
  return (
    <>
      <Helmet>
        <title>Belize : Only Country To Have Humans On Their Flag</title>
        <meta
          name="description"
          content="  When Queen Elizabeth visited Belize, she was served with
        one of the country’s finest delicacies, gibnut meat.
        Locally referred to as the “royal rat”."
        />
        <meta
          name="keyboard"
          content="belize, belmopan, Only Country To Have Humans On Their Flag"
        />
        <link rel="icon" href={bz} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/benin" country="Benin" />

      {/* header */}
      <Header header="Belize : Only Country To Have Humans On Their Flag" />

      {/* article  */}
      <Article flag={bz} />

      {/* features */}
      <Features
        features="Beleze"
        capital="Belmopan"
        area="22,966 km²"
        population="419,199 (2020)"
        continent="North America"
        hdi="0.761"
        currency="Belize Dollar"
        language="English"
        religion="Christianity(63.8%)"
        literacy="82.33%(2020)"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
       When Queen Elizabeth visited Belize, she was served with
        one of the country’s finest delicacies, gibnut meat.
        Locally referred to as the “royal rat”, this large rodent
        looks something like a cross between a chipmunk and a tapir
        and tastes similar to rabbit. Incidentally, it called the
        “royal rat” because it was served to Queen Elizabeth."
        page="/benin"
        country="Benin"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/benin"
        two="/mexico"
        three="/guatemala"
        four="/honduras"
        con1="Benin"
        con2="Mexico"
        con3="Guatemala"
        con4="Honduras"
      />
    </>
  );
};

export default Belize;
