import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import tg from "../../img/T/tg.svg";

const Togo = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Togo : The Pearl Of The West Africa ("Lomé")</title>
        <meta
          name="description"
          content="Togo and its surrounding regions were known as “the slave 
coast” between the 16th and the 18th century because Europeans
 would come to the region in search of slaves."
        />
        <meta
          name="keyboard"
          content="
Togo, Lomé, africa , Pearl Of West Africa, paris of africa    
      
 "
        />
        <link rel="icon" href={tg} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/tonga" country="Tonga" />

      {/* header */}
      <Header header='Togo : The Pearl Of The West Africa ("Lomé")  ' />

      {/* article  */}
      <Article flag={tg} />

      {/* features */}
      <Features
        capital="Lomé"
        area="56,785 km²"
        population="8,608,444 (2020)"
        continent="Africa"
        hdi="0.515"
        currency="West African CFA franc"
        language="French"
        religion="Christianity(43.7%)"
        literacy="77.3%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Togo and its surrounding regions were known as “the slave 
coast” between the 16th and the 18th century because Europeans
 would come to the region in search of slaves. Modern 
 historians estimate that between two and three million people
  were transported out of this region and traded for goods like
   alcohol and tobacco from the Americas and textiles from 
   Europe as part of the triangular trade.
"
        page="/tonga"
        country="Tonga"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/tonga"
        two="/benin"
        three="/burkina-faso"
        four="/ghana"
        con1="Tonga"
        con2="Benin"
        con3="Burkina Faso"
        con4="Ghana"
      />
    </>
  );
};

export default Togo;
