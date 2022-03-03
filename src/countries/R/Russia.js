import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ru from "../../img/R/ru.svg";

const Russia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Russia : Country Whose Surface Is Grater Than Pluto</title>
        <meta
          name="description"
          content="In the vault/museum beneath the Monument to the Heroic 
Defenders of Leningrad, the only sound is the steady ticking
 of a metronome."
        />
        <meta
          name="keyboard"
          content="Russia, Moscow, Country Whose Surface Is Grater Than Pluto"
        />
        <link rel="icon" href={ru} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/rwanda" country="Rwanda" />

      {/* header */}
      <Header
        header="
          Russia : Country Whose Surface Is Grater Than Pluto"
      />
      {/* article  */}
      <Article flag={ru} />

      {/* features */}
      <Features
        capital="Moscow"
        area="17,098,246 km²"
        population="146,171,015 (2021)"
        continent="Europe"
        hdi="0.828"
        currency="Russian ruble"
        language="Russian"
        religion="Christianity(73%)"
        literacy="99.7%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
In the vault/museum beneath the Monument to the Heroic 
Defenders of Leningrad, the only sound is the steady ticking
 of a metronome - it is the noise that played out on local 
 radio during the seige so that residents knew the city was 
 still alive.
"
        page="/rwanda"
        country="Rwanda"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/rwanda"
        two="/china"
        three="/georgia"
        four="/ukraine"
        con1="Rwanda"
        con2="China"
        con3="Georgia"
        con4="Ukraine"
      />
    </>
  );
};

export default Russia;
