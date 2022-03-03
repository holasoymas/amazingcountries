import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import tl from "../../img/T/tl.svg";

const TimorLeste = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Timor-Leste : Only Asian Country Whose Official Currency Is US Dollar
          Colonised
        </title>
        <meta
          name="description"
          content="There is a large cave on the island of Timor-Leste called 
Lena Hara. There, scientists found beads and fishhooks that
 were dated to 30,000 years ago using radiocarbon tests."
        />
        <meta
          name="keyboard"
          content="
          Timor-Leste, Dili, Asian Country Whose Official Currency Is US Dollar         
 "
        />
        <link rel="icon" href={tl} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/togo" country="Togo" />

      {/* header */}
      <Header
        header="
          Timor-Leste : Only Asian Country Whose Official Currency Is US Dollar    
      "
      />

      {/* article  */}
      <Article flag={tl} />

      {/* features */}
      <Features
        capital="Dili"
        area="15,007 km²"
        population="1,340,513 (2021)"
        continent="Asia"
        hdi="0.606"
        currency="US Dollar"
        language="Tetum,Portuguese"
        religion="Christianity(99.53%)"
        literacy="68.1%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
There is a large cave on the island of Timor-Leste called 
Lena Hara. There, scientists found beads and fishhooks that
 were dated to 30,000 years ago using radiocarbon tests. In
  addition, there are carved faces on the walls that are dated
   back 10,000 years and paintings that are believed to be up
    to 6,000 years old.
"
        page="/togo"
        country="Togo"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/togo"
        two="/indonesia"
        three="/australia"
        four="/papua-new-guinea"
        con1="Togo"
        con2="Indonesia"
        con3="Australia"
        con4="Papua New Guinea"
      />
    </>
  );
};

export default TimorLeste;
