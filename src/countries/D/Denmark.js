import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import dk from "../../img/D/dk.svg";

const Denmark = () => {
  return (
    <>
      <Helmet>
        <title>Denmark : The Country With The Oldest Flag In The World</title>
        <meta
          name="description"
          content="Denmark is home to the world's oldest amusement park, Bakken,
 as well as the second oldest one, Tivoli Gardens. People 
 originally came to Bakken to drink from the healing spring
  during the summer."
        />
        <meta
          name="keyboard"
          content="denmark, copenhagen, country with the oldest flag in the world
          Sperakers"
        />
        <link rel="icon" href={dk} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/djibouti" country="Djibouti" />

      {/* header */}
      <Header header="Denmark : The Country With The Oldest Flag In The World" />

      {/* article  */}
      <Article flag={dk} />

      {/* features */}
      <Features
        capital=" Copenhagen"
        area="42,933 km²"
        population="5,843,347 (2021)"
        continent="Europe"
        hdi="0.940"
        currency="Danish krone"
        language="Danish"
        religion="No religion(75.8%)"
        literacy="99%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Denmark is home to the world's oldest amusement park, Bakken,
 as well as the second oldest one, Tivoli Gardens. People 
 originally came to Bakken to drink from the healing spring
  during the summer. Later visitors began erecting tents and
   stalls to entertain and sell items. Over time, it became
    the site for celebrations.
"
        page="/djibouti"
        country="Djibouti"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/djibouti"
        two="/germany"
        three="/norway"
        four="/sweden"
        con1="Djibouti"
        con2="Germany"
        con3="Norway"
        con4="Sweden"
      />
    </>
  );
};

export default Denmark;
