import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import nl from "../../img/N/nl.svg";

const Netherlands = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Netherlands : Bicycle Capital Of The World</title>
        <meta
          name="description"
          content="There are more bicycles in the Netherlands than people. 
There are over 22 million bicycles in the country and only
 17 million residents."
        />
        <meta
          name="keyboard"
          content="
          Netherlands, Amsterdam, europe, Bicycle Capital Of The World"
        />
        <link rel="icon" href={nl} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/new-zealand" country="New Zealand" />

      {/* header */}
      <Header header="Netherlands : Bicycle Capital Of The World" />

      {/* article  */}
      <Article flag={nl} />

      {/* features */}
      <Features
        capital="Amsterdam"
        area="41,865 km²"
        population="17,621,500 (2021)"
        continent="Europe"
        hdi="0.944"
        currency="Euro, US Dollar"
        language="Dutch"
        religion="No Religion(54.1%)"
        literacy="99%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
There are more bicycles in the Netherlands than people. 
There are over 22 million bicycles in the country and only
 17 million residents. This includes the clever (if not so
  elegant) bakfiets which combine a bike with a large container
   at the front to transport children, pets, and shopping.
"
        page="/new-zealand"
        country="New Zealand"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/new-zealand"
        two="/germany"
        three="/belgium"
        four="/denmark"
        con1="New Zealand"
        con2="Germany"
        con3="Belgium"
        con4="Denmark"
      />
    </>
  );
};

export default Netherlands;
