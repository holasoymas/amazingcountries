import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ie from "../../img/I/ie.svg";

const Ireland = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Ireland : The Country With The Highest Number Of Red-Headed People Per
          Capita
        </title>
        <meta
          name="description"
          content="Leo Varadkar became Ireland’s prime minister
 in 2017. Not only is he the youngest prime minister that the
  country has ever ushered into power, but he is also the 
  first of Indian heritage."
        />
        <meta
          name="keyboard"
          content="Ireland, dublin, Highest Number Of Red-Headed People Per Capita "
        />
        <link rel="icon" href={ie} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/isreal" country="Isreal" />

      {/* header */}
      <Header header="Ireland :  The Country With The Highest Number Of Red-Headed People Per Capita" />

      {/* article  */}
      <Article flag={ie} />

      {/* features */}
      <Features
        capital="Dublin"
        area="84,421 km²"
        population="6,572,728 (2016)"
        continent="Europe"
        hdi="0.955"
        currency="Euro"
        language="English,Irish"
        religion="Christianity(78.3%)"
        literacy="99%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Leo Varadkar, born in 1979, became Ireland’s prime minister
 in 2017. Not only is he the youngest prime minister that the
  country has ever ushered into power, but he is also the 
  first of Indian heritage. Leo Varadkar is also Ireland’s
   first openly gay party leader and prime minister.
"
        page="/isreal"
        country="Isreal"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/isreal"
        two="/uk"
        three="/france"
        four="/netherlands"
        con1="Isreal"
        con2="United Kingdom"
        con3="France"
        con4="Netherlands"
      />
    </>
  );
};

export default Ireland;
