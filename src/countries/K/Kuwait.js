import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import kw from "../../img/K/kw.svg";

const Kuwait = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Kuwait : Country With The Most Expensive Currency In The World ( $1 =
          0.30KWD )
        </title>
        <meta
          name="description"
          content='"Kuwait" is derived from an Arabic word meaning fort. Until
 the 18th century, Kuwait hardly had any settlements but
  the area was visited by nomads who would come and go.'
        />
        <meta
          name="keyboard"
          content="kuwait, asia, Country With The Most Expensive Currency In The World"
        />
        <link rel="icon" href={kw} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/kyrgyzstan" country="Kyrgyzstan" />

      {/* header */}
      <Header header="Kuwait : The Country With The Most Expensive Currency In The World ( $1 = 0.30 KWD )" />

      {/* article  */}
      <Article flag={kw} />

      {/* features */}
      <Features
        features="Kuwait"
        capital="Kuwait City"
        area="17,818 km²"
        population="4,420,110 (2019)"
        continent="Asia"
        hdi="0.806"
        currency="Kuwaiti dinar"
        language="Arabic"
        religion="Islam(74.36%)"
        literacy="96%"
      />

      {/* fact field */}
      <Fact
        didYouKnow='

"Kuwait" is derived from an Arabic word meaning fort. Until
 the 18th century, Kuwait hardly had any settlements but
  the area was visited by nomads who would come and go.
   However, when drought struck the desert area that the
    nomads depended on for their survival, they started 
    settling down near the coast of the Persian Gulf in what
     is today Kuwait. They fortified settlements in the area
      from where the name Kuwait was derived.
'
        page="/kyrgyzstan"
        country="Kyrgyzstan"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/kyrgyzstan"
        two="/iraq"
        three="/saudi-arabia"
        four="/iran"
        con1="Kyrgyzstan"
        con2="Iraq"
        con3="Saudi Arabia"
        con4="Iran"
      />
    </>
  );
};

export default Kuwait;
