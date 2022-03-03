import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ls from "../../img/L/ls.svg";

const Lethoso = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Lethoso : World's Only Nation To Be Completely Above An Elevation Of
          1,000 m
        </title>
        <meta
          name="description"
          content="Lesotho is one of 3 enclaves in the world, meaning a country
 that is entirely surrounded by the territory of one other
  state. Lesotho is entirely surrounded by the country of
   South Africa."
        />
        <meta
          name="keyboard"
          content="
            lethoso, maseru, Only nation Completely Above An Elevation Of 1000m"
        />
        <link rel="icon" href={ls} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/liberia" country="Liberia" />

      {/* header */}
      <Header header="Lethoso : World's Only Nation To Be Completely Above An Elevation Of 1,000 m" />
      {/* article  */}
      <Article flag={ls} />

      {/* features */}
      <Features
        capital="Maseru"
        area="30,355 km²"
        population="2,108,328 (2018)"
        continent="Africa"
        hdi="0.527"
        currency="Loti, South African rand"
        language="Sesotho, English"
        religion="Islam(92.3%)"
        literacy="76.6%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Lesotho is one of 3 enclaves in the world, meaning a country
 that is entirely surrounded by the territory of one other
  state. Lesotho is entirely surrounded by the country of
   South Africa. The other two enclaves are Vatican City and
    San Marino, both completely surrounded by Italy.
"
        page="/liberia"
        country="Liberia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/liberia"
        two="/south-afria"
        three="/botswana"
        four="/eswatini"
        con1="Liberia"
        con2="South Africa"
        con3="Botswana"
        con4="Eswatini"
      />
    </>
  );
};

export default Lethoso;
