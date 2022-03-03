import React from "react";

import Header from "../../components/Header";
import Article from "../../components/Article";
import Features from "../../components/Features";
import Fact from "../../components/Fact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import al from "../../img/A/al.svg";
import { Helmet } from "react-helmet";
const Albania = () => {
  return (
    <>
      <Helmet>
        <title>Albania : Mother Teresa's Home</title>
        <meta
          name="description"
          content="King Zog I (Leader of Albania from
         (1922-1939)) during his reign reputedly survived more 
         than 55 assassination attempts. There were about 600 blood
          feuds against him."
        />
        <meta
          name="keyboard"
          content="Albania, Tirana, Europe’s Balkan, albanian lek, mother teresa"
        />
        <link rel="icon" href={al} />
      </Helmet>
      <Navbar page="/algeria" country="Algeria" />

      {/* header */}
      <Header header="Albania : Mother Teresa's Home" />

      {/* article  */}
      <Article flag={al} />

      {/* features */}
      <Features
        capital="Tirana"
        area=" 28,748 km²"
        population="2,837,848 (2020)"
        continent="Europe"
        hdi="0.795"
        currency="Albanian Lek"
        language="Albanian(98%)"
        religion="Muslims(56.7% )"
        literacy="97.6%(2020)"
      />

      {/* fact field */}
      <Fact
        didYouKnow="King Zog I (Leader of Albania from
         (1922-1939)) during his reign reputedly survived more 
         than 55 assassination attempts. There were about 600 blood
          feuds against him. It is stated that it was because Zog 
          had a way of making his political opponents disappear or 
          go into exile and anyone who disagreed with Zog’s policies 
          was an enemy of freedom in his mind."
        page="/algeria"
        country="Algeria"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/algeria"
        two="/greece"
        three="/montenegro"
        four="/north-macedonia"
        con1="Algeria"
        con2="Greece"
        con3="Montenegro"
        con4="North Macedonia"
      />
    </>
  );
};

export default Albania;
