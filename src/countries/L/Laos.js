import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import la from "../../img/L/la.svg";

const Laos = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Laos : The Land Of A Million Elephants</title>
        <meta
          name="description"
          content="Laos translates to the ‘Land of a Million Elephants’. The
 symbol of an elephant was used by the kingdom of Lan Xang that
ruled in Laos between the fourteenth and earlyeighteenth century."
        />
        <meta
          name="keyboard"
          content="laos, asia, Vientiane, The Land Of A Million Elephants"
        />
        <link rel="icon" href={la} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/latvia" country="Latvia" />

      {/* header */}
      <Header header="Laos : The Land Of A Million Elephants" />
      {/* article  */}
      <Article flag={la} />

      {/* features */}
      <Features
        capital="Vientiane"
        area="237,955 km²"
        population="6,492,228 (2015)"
        continent="Asia"
        hdi="0.613"
        currency="Lao kip"
        language="Lao"
        religion="Buddhism(66%)"
        literacy="84.7%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Laos translates to the ‘Land of a Million Elephants’. The
 symbol of an elephant was used by the kingdom of Lan Xang 
 that ruled in Laos between the fourteenth and early
  eighteenth century. While there aren’t as many elephants
   roaming around today,  it’s a powerful reminder of the might 
   of an ancient civilisation.
"
        page="/latvia"
        country="Latvia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/latvia"
        two="/vietnam"
        three="/cambodia"
        four="/china"
        con1="Latvia"
        con2="/Vietnam"
        con3="Cambodia"
        con4="China"
      />
    </>
  );
};

export default Laos;
