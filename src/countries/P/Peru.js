import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import pe from "../../img/P/pe.svg";

const Peru = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Peru : Only Country That Can Be Typed On A Single Row Of Keyboard
        </title>
        <meta
          name="description"
          content="Peruvians celebrate New Year’s by gifting one another yellow
 underpants on New Year Eve to bring good luck in the coming
year. It is tradition to wear them inside out (underneath 
clothing) until midnight."
        />
        <meta
          name="keyboard"
          content="peru, Lima, Country That Can Be Typed On Single Row"
        />
        <link rel="icon" href={pe} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/philippines" country="Philippines" />

      {/* header */}
      <Header header="Peru : Only Country That Can Be Typed On A Single Row Of Keyboard" />

      {/* article  */}
      <Article flag={pe} />

      {/* features */}
      <Features
        capital="Lima"
        area="1,285,216 km²"
        population="31,237,385 (2017)"
        continent="South America"
        hdi="0.777"
        currency="Sol"
        language="Spanish"
        religion="Christianity(94.51%)"
        literacy="94.41%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Peruvians celebrate New Year’s by gifting one another yellow
 underpants on New Year’s Eve to bring good luck in the coming
  year. It is tradition to wear them inside out (underneath 
  clothing) until midnight, then flip them around at the 
  stroke of midnight.
"
        page="/philippines"
        country="Philippines"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/philippines"
        two="/colombia"
        three="/bolivia"
        four="/chile"
        con1="Philippines"
        con2="Colombia"
        con3="Bolovia"
        con4="Chile"
      />
    </>
  );
};

export default Peru;
