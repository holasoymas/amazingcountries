import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import no from "../../img/N/no.svg";

const Norway = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Norway : Country Of Midnight Sun</title>
        <meta
          name="description"
          content="The Colonel-in-Chief of the Norwegian King's Guard is
 a Scottish penguin.Brigadier Sir Nils Olav has held the title 
 since 2005,but the involvement goes back to 1972 when the
regiment adopted a penguin"
        />
        <meta
          name="keyboard"
          content="norway, oslo, europe, nordic,scandinavia, Country Of Midnight Sun"
        />
        <link rel="icon" href={no} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/oman" country="Oman" />

      {/* header */}
      <Header header="Norway : Country Of Midnight Sun" />

      {/* article  */}
      <Article flag={no} />

      {/* features */}
      <Features
        capital="Oslo"
        area="385,207 km²"
        population="5,391,369 (2021)"
        continent="Europe"
        hdi="0.957"
        currency="Norwegian krone"
        language="Norwegian"
        religion="Christianity(75.6%)"
        literacy="99%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The Colonel-in-Chief of the Norwegian King's Guard is
 a Scottish penguin. Brigadier Sir Nils Olav has held 
 the title since 2005, but the involvement goes back to
  1972 when the regiment adopted a penguin from Edinburgh
   Zoo, and to the zoo’s opening in 1913 when Norway presented
    it with its first king penguin.The name ‘Nils Olav' and
     ranks in the Norwegian military have been passed down
      through three king penguins since 1972. The current
       holder is Nils Olav III.
"
        page="/oman"
        country="Oman"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/oman"
        two="/sweden"
        three="finland"
        four="/iceland"
        con1="Oman"
        con2="Sweden"
        con3="Finland"
        con4="Iceland"
      />
    </>
  );
};

export default Norway;
