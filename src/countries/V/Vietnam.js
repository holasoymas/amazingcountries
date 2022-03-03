import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import vn from "../../img/V/vn.svg";

const Vietnam = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Vietnam : World's Largest Producer Of Cashew Nuts And Black Pepper
        </title>
        <meta
          name="description"
          content="Sepak Takraw is a traditional sport played in Vietnam. 
It’s also known as ‘kick volleyball’. Participants must pass
a ball over a net, slightly smaller than a badminton net, using
only their feet and heads."
        />
        <meta
          name="keyboard"
          content="
          vietnam, hanoi, Largest Producer Of Cashew Nuts And Black Pepper
 "
        />

        <link rel="icon" href={vn} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/yemen" country="Yemen" />

      {/* header */}
      <Header
        header="
          Vietnam : World's Largest Producer Of Cashew Nuts And Black Pepper 
"
      />

      {/* article  */}
      <Article flag={vn} />

      {/* features */}
      <Features
        capital="Hanoi"
        area="331,699 km²"
        population="96,208,984 (2019)"
        continent="Asia"
        hdi="0.704"
        currency="Vietnamese dong"
        language="Vietnamese"
        religion="No Religion/Folk(73.7%)"
        literacy="95%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Sepak Takraw is a traditional sport played in Vietnam. 
It’s also known as ‘kick volleyball’. Participants must pass
 a ball over a net, slightly smaller than a badminton net, 
 using only their feet and heads. It is also played in 
 Thailand, Laos, Myanmar and Cambodia.
"
        page="/yemen"
        country="Yemen"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/yemen"
        two="/china"
        three="/thailand"
        four="/cambodia"
        con1="Yemen"
        con2="China"
        con3="Thailand"
        con4="Cambodia"
      />
    </>
  );
};

export default Vietnam;
