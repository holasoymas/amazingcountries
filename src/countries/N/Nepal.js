import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import nep from "../../img/N/nep.svg";

const Nepal = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nepal : Only County In The World Having Non-Rectangular National Flag
        </title>
        <meta
          name="description"
          content="Nepal follows the Bikram Sambat calendar a combination of 
the solar and lunar calendar.Its is calculated for 67 years
,eight and half months ahead of the Gregorian Calendar  which 
is used almost globally."
        />
        <meta
          name="keyboard"
          content="
          Nepal, Kathmandu, mount everest, County Having Non-Rectungluar National Flag"
        />
        <link rel="icon" href={nep} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/netherlands" country="Netherlands" />

      {/* header */}
      <Header header="Nepal : Only County In The World Having Non-Rectangular National Flag" />

      {/* article  */}
      <Article flag={nep} />

      {/* features */}
      <Features
        capital="Kathmandu"
        area="147,516 km²"
        population="28,095,714 (2018)"
        continent="Asia"
        hdi="0.602"
        currency="Nepalese rupee"
        language="Nepalese"
        religion="Hinduism(81.3%)"
        literacy="67.9%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Nepal follows the Bikram Sambat calendar a combination of 
the solar and lunar calendar. Its is calculated for 67 years
, eight and a half months ahead of the Gregorian Calendar
 which is used almost globally, barring a few countries. 
 The Nepali New Year is celebrated in mid-April.
"
        page="/netherlands"
        country="Netherlands"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/netherlands"
        two="/china"
        three="/india"
        four="/bhutan"
        con1="Netherlands"
        con2="China"
        con3="India"
        con4="Bhutan"
      />
    </>
  );
};

export default Nepal;
