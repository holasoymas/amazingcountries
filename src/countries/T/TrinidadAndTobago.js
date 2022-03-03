import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import tt from "../../img/T/tt.svg";

const TrinidadAndTobago = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Trinidad & Tobago : The Land Of Hummingbirds </title>
        <meta
          name="description"
          content="The World’s Largest Natural Deposit Of Asphalt Is Located In
 Trinidad. Pitch Lake is located in the town of La Brea in
  Trinidad’s southwestern region."
        />
        <meta
          name="keyboard"
          content="
Trinidad & Tobago, port of spain, The Land Of Hummingbirds  
      
 "
        />
        <link rel="icon" href={tt} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/tunisia" country="Tunisisa" />

      {/* header */}
      <Header header="Trinidad & Tobago : The Land Of Hummingbirds  " />

      {/* article  */}
      <Article flag={tt} />

      {/* features */}
      <Features
        capital="Port of Spain"
        area="5,131 km²"
        population="1,366,725 (2020)"
        continent="South America"
        hdi="0.796"
        currency="Trinidad & Tobago dollar"
        language="English"
        religion="Christianity(55.3%)"
        literacy="98.7%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The World’s Largest Natural Deposit Of Asphalt Is Located In
 Trinidad. Pitch Lake is located in the town of La Brea in
  Trinidad’s southwestern region. The lake occupies an area of
   nearly 100 acres and has a depth of about 250 feet. Pitch
    Lake is the world’s largest natural deposit of asphalt,
     containing nearly 10 million tons.
"
        page="/tunisia"
        country="Tunisisa"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/tunisia"
        two="/barbados"
        three="/venezuela"
        four="/guyana"
        con1="Tunisia"
        con2="Barbados"
        con3="Venezuela"
        con4="Guyana"
      />
    </>
  );
};

export default TrinidadAndTobago;
