import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import dcongo from "../../img/D/dcongo.svg";

const DemocraticRC = () => {
  return (
    <>
      <Helmet>
        <title>
          Democratic Rep. Of Congo : City With The Highest No. Of French
          Sperakers ("Kinshasa")
        </title>
        <meta
          name="description"
          content="The people of the DRC represent over 200 ethnic groups, 
         with nearly 250 languages and dialects spoken throughout 
         the country. Kinshasa, the capital, is the  largest 
         French-speaking city in the world."
        />
        <meta
          name="keyboard"
          content="congo , kinshasa, City With The Highest No. Of French
          Sperakers"
        />
        <link rel="icon" href={dcongo} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/denmark" country="Denmark" />

      {/* header */}
      <Header header='Democratic Rep. Of Congo : City With The Highest No. Of French Sperakers ("Kinshasa")' />

      {/* article  */}
      <Article flag={dcongo} />

      {/* features */}
      <Features
        capital="Kinshasa"
        area="2,345,409 km²"
        population="105,044,646 (2021)"
        continent="Africa"
        hdi="0.480"
        currency="Congolese franc"
        language="French"
        religion="Christianity(94.9%)"
        literacy="77.4%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The people of the DRC represent over 200 ethnic groups, 
with nearly 250 languages and dialects spoken throughout 
the country. Kinshasa, the capital, is the  largest 
French-speaking city in the world.
"
        page="/denmark"
        country="Denmark"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/denmark"
        two="/uganda"
        three="/burudi"
        four="/zambia"
        con1="Denmark"
        con2="Uganda"
        con3="Burundi"
        con4="Zambia"
      />
    </>
  );
};

export default DemocraticRC;
