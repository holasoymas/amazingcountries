import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import cn from "../../img/C/cn.svg";

const China = () => {
  return (
    <>
      <Helmet>
        <title>
          China : First Country To Invent Printing Press, Paper Money And
          Ice-Cream
        </title>
        <meta
          name="description"
          content="China despite geographically spanning over 5 time zones,
   only uses one standard time. All 5 time zones were in use
    during the Republic of China from 1912 to 1949."
        />
        <meta
          name="keyboard"
          content="china, beijing,Invent Printing Press,paper money, ice cream "
        />
        <link rel="icon" href={cn} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/colombia" country="Colombia" />

      {/* header */}
      <Header
        header="China : First Country To Invent Printing Press, Paper Money And
          Ice-Cream"
      />

      {/* article  */}
      <Article flag={cn} />

      {/* features */}
      <Features
        capital="Beijing"
        area="9,596,961  km²"
        population="1,411,778,724 (2020)"
        continent="Asia"
        hdi="0.761"
        currency="Renminbi"
        language="Chinese"
        religion="No Religion(74.5%),Buddhism(18%)"
        literacy="96.8%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
  China despite geographically spanning over 5 time zones,
   only uses one standard time. All 5 time zones were in use
    during the Republic of China from 1912 to 1949, but since
     then China has decided to use just one standard time. The 
     time in China follows a single standard time offset of 
     UTC+08:00 (eight hours ahead of Coordinated Universal Time).
"
        page="/colombia"
        country="Colombia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/colombia"
        two="/india"
        three="/russia"
        four="/mongolia"
        con1="Colombia"
        con2="India"
        con3="Russia"
        con4="Mongolia"
      />
    </>
  );
};

export default China;
