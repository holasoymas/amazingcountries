import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import rw from "../../img/R/rw.svg";

const Rwanda = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Rwanda : Country With Highest Percentage Of Women In Parliament
        </title>
        <meta
          name="description"
          content="Every last Saturday of every month from 8am to 11am people
 nationwide participate in community projects. It's known as
  Umuganda and its mandatory. People all over the country take
   part in cleaning the streets."
        />
        <meta
          name="keyboard"
          content="Rwanda, Kigali, Country With Highest Percentage Of Women In Parliament"
        />
        <link rel="icon" href={rw} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/saint-kitts-and-nevis" country="St. Kitts & Nevis" />

      {/* header */}
      <Header
        header="
         Rwanda : Country With Highest Percentage Of Women In Parliament"
      />
      {/* article  */}
      <Article flag={rw} />

      {/* features */}
      <Features
        capital="Kigali"
        area="26,338 km²"
        population="12,374,397 (2019)"
        continent="Africa"
        hdi="0.543"
        currency="Rwandan franc"
        language="Kinyarwanda,French,English"
        religion="Christianity(93.8%)"
        literacy="73.2%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Every last Saturday of every month from 8am to 11am people
 nationwide participate in community projects. It's known as
  Umuganda and its mandatory. People all over the country take
   part in cleaning the streets, helping to build schools, 
   cutting grass, etc. The idea behind this practice is not 
   only to keep everything clean and tidy, but also to help 
   unite people after the Genocide.
"
        page="/saint-kitts-and-nevis"
        country="St. Kitts & Nevis"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/saint-kitts-and-nevis"
        two="/uganda"
        three="/burundi"
        four="/tanzania"
        con1="St. Kitts & Nevis"
        con2="Uganda"
        con3="Burundi"
        con4="Tanzania"
      />
    </>
  );
};

export default Rwanda;
