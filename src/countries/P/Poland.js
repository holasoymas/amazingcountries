import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import pl from "../../img/P/pl.svg";

const Poland = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Poland : The Birthplace Of Madam Curie</title>
        <meta
          name="description"
          content="The Warsaw radio mast in Konstantynow was the world’s tallest
 structure from 1974, until its collapse in 1991. It was the 
 second tallest structure ever built after Burj Khalifa, 
 completed in 2010."
        />
        <meta
          name="keyboard"
          content="poland, Warsaw, europe, Konstantynow, The Birthplace Of Madam Curie"
        />
        <link rel="icon" href={pl} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/portugal" country="Portugal" />

      {/* header */}
      <Header header="Poland : The Birthplace Of Madam Curie" />

      {/* article  */}
      <Article flag={pl} />

      {/* features */}
      <Features
        capital="Warsaw"
        area="312,696 km²"
        population="38,268,000 (2020)"
        continent="Europe"
        hdi="0.880"
        currency="Złoty"
        language="Polish"
        religion="Christianity(90%)"
        literacy="98.7%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="

The Warsaw radio mast in Konstantynow was the world’s tallest
 structure from 1974, until its collapse in 1991. It was the 
 second tallest structure ever built after Burj Khalifa, 
 completed in 2010. The mast was 646.38 meters (2,120.7 ft) tall.
"
        page="/portugal"
        country="Portugal"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/portugal"
        two="/germany"
        three="/ukraine"
        four="/czech-republic"
        con1="Portugal"
        con2="Germany"
        con3="Ukraine"
        con4="Czech Republic"
      />
    </>
  );
};

export default Poland;
