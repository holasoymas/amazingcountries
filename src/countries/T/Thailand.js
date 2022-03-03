import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import th from "../../img/T/th.svg";

const Thailand = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Thailand : Only Country In South-East Asia That Has Never Been
          Colonised
        </title>
        <meta
          name="description"
          content="The name Thailand in the Thai language is Prathet Thai, which
 directly translates to ‘Land of the Free’. As It is the only country in 
   South-East Asia to never have been colonised by any European
    nation."
        />
        <meta
          name="keyboard"
          content="
      Thailand, Bangkok, South-East Country That Has Never Been Colonised
 "
        />
        <link rel="icon" href={th} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/timor-leste" country="Timor Leste" />

      {/* header */}
      <Header
        header="
      Thailand : Only Country In South-East Asia That Has Never Been Colonised
      "
      />

      {/* article  */}
      <Article flag={th} />

      {/* features */}
      <Features
        capital="Bangkok"
        area="513,120 km²"
        population="69,950,850 (2021)"
        continent="Asia"
        hdi="0.777"
        currency="Baht"
        language="Thai"
        religion="Buddhism(93.5%)"
        literacy="93.8%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
The name Thailand in the Thai language is Prathet Thai, which
 directly translates to ‘Land of the Free’. It seems pretty apt
  then that this country is the sole country in the whole of
   South-East Asia to never have been colonised by any European
    nation. Considering that only very very few countries in
     the world have managed to escape European rule, this in
      itself is a huge accomplishment.
"
        page="/timor-leste"
        country="Timor Leste"
      />
      {/* message field  */}
      {/* <Message /> */}
      {/* footer part  */}
      <Footer
        one="/timor-leste"
        two="/myanmar"
        three="/cambodia"
        four="/vietnam"
        con1="Timor-Leste"
        con2="Myanmar"
        con3="Cambodia"
        con4="Vietnam"
      />
    </>
  );
};

export default Thailand;
