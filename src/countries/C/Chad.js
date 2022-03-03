import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import chad from "../../img/C/chad.svg";

const Chad = () => {
  return (
    <>
      <Helmet>
        <title>
          Chad : Country With Most Expensive City In Africa ( N'Djamena )
        </title>
        <meta
          name="description"
          content="The country is named after Lake Chad. It is the second-largest
  lake in Africa and the largest wetland in Chad. Lake Chad is
   a freshwater lake that touches base with Nigeria, Cameroon,
    and Niger."
        />
        <meta
          name="keyboard"
          content="chad, N'Djamena, Most Expensive City In Africa ( N'Djamena )"
        />
        <link rel="icon" href={chad} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/chile" country="Chile" />

      {/* header */}
      <Header header="Chad : Country With Most Expensive City In Africa ( N'Djamena )" />

      {/* article  */}
      <Article flag={chad} />

      {/* features */}
      <Features
        capital="N'Djamena"
        area="1,284,000 km²"
        population="16,244,513 (2020)"
        continent="Africa"
        hdi="0.398"
        currency="Central African CFA franc"
        language="Arabic,French"
        religion="Islam(51.8%)"
        literacy="22.3%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
 The country is named after Lake Chad. It is the second-largest
  lake in Africa and the largest wetland in Chad. Lake Chad is
   a freshwater lake that touches base with Nigeria, Cameroon,
    and Niger. The lake has drastically reduced in size in
     recent times. In the 1960s, it covered an area of 25,000
      square kilometers, which has reduced to 1,350 kilometers
       today.
"
        page="/chile"
        country="Chile"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/chile"
        two="/libya"
        three="/sudan"
        four="/nigeria"
        con1="Chile"
        con2="Libya"
        con3="Sudan"
        con4="Nigeria"
      />
    </>
  );
};

export default Chad;
