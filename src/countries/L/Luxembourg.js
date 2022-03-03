import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import lu from "../../img/L/lu.svg";

const Luxembourg = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Luxembourg : The First Country In The World To Make All Public
          Transport Free
        </title>
        <meta
          name="description"
          content="June 23 is the date of the Grand Duke’s official birthday but
 neither Henri, nor indeed any other Grand Duke was born on
  that day. "
        />
        <meta
          name="keyboard"
          content="
               Luxembourg, europe, First To Make All Public
          Transport Free"
        />
        <link rel="icon" href={lu} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/madagascar" country="Madagascar" />

      {/* header */}
      <Header header="Luxembourg : The First Country In The World To Make All Public Transport Free" />
      {/* article  */}
      <Article flag={lu} />

      {/* features */}
      <Features
        capital="Luxembourg City"
        area="2,586 km²"
        population="633,622 (2021)"
        continent="Europe"
        hdi="0.916"
        currency="Euro"
        language="Luxembourgiish,French,German"
        religion="Christianity(73.2%)"
        literacy="99%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
June 23 is the date of the Grand Duke’s official birthday but
 neither Henri, nor indeed any other Grand Duke was born on
  that day. The choice of date goes back to the early 20th
   century when the nation celebrated the actual birthday of
    Grand Duchess Charlotte (1919–1964) on 23 January. In 1962
     it moved to 23 June to take advantage of better weather.
      June 23 is a public holiday in Luxembourg.
"
        page="/madagascar"
        country="Madagascar"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/madagascar"
        two="/belgium"
        three="/germany"
        four="/france"
        con1="Madagascar"
        con2="Belgium"
        con3="Germany"
        con4="France"
      />
    </>
  );
};

export default Luxembourg;
