import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ee from "../../img/E/ee.svg";

const Estonia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Estonia : The First Country To Adopt An Online Political Voting System
        </title>
        <meta
          name="description"
          content=" In 2005, Estonia officially became the first nation to allow
  its citizens to vote online. It’s no wonder Estonia is
   consistently touted as one of the most digitally advanced
    societies."
        />
        <meta
          name="keyboard"
          content="estonia, Tallinn, First Country To Adopt An Online Voting System"
        />
        <link rel="icon" href={ee} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/eswatini" country="Eswatini" />

      {/* header */}
      <Header header="Estonia : The First Country To Adopt An Online Political Voting System" />

      {/* article  */}
      <Article flag={ee} />

      {/* features */}
      <Features
        capital="Tallinn"
        area="45,339 km²"
        population="1,330,068 (2021)"
        continent="Europe"
        hdi="0.892"
        currency="Euro"
        language="Estonian"
        religion="No Religion(64.87%)"
        literacy="99.9%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
 In 2005, Estonia officially became the first nation to allow
  its citizens to vote online. It’s no wonder Estonia is
   consistently touted as one of the most digitally advanced
    societies in Europe and the world as a whole. To add to
     the tech-savvy CV, the entire country is covered in wifi
      hotspots. Even in the woods.
"
        page="/eswatini"
        country="Eswatini"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/eswatini"
        two="/russia"
        three="/latvia"
        four="/finland"
        con1="Eswatini"
        con2="Russia"
        con3="Latvia"
        con4="Finland"
      />
    </>
  );
};

export default Estonia;
