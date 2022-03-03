import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import uz from "../../img/U/uz.svg";

const Uzbekistan = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Uzbekistan : Country With The World Largest Open-Pit Gold Mine
          ("Muruntau Gold Mine")
        </title>
        <meta
          name="description"
          content="The Aral Sea was formerly the world’s fourth largest lake, 
covering an area of 26,300 square miles. However, from the 
1960s, the lake has been gradually shrinking."
        />
        <meta
          name="keyboard"
          content="
           Uzbekistan, Tashkent, World Largest OpenPit Gold Mine, Muruntau Gold Mine
 "
        />

        <link rel="icon" href={uz} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/vanuatu" country="Vanuatu" />

      {/* header */}
      <Header
        header='
       Uzbekistan : Country With The World Largest Open-Pit Gold Mine
          ("Muruntau Gold Mine")'
      />

      {/* article  */}
      <Article flag={uz} />

      {/* features */}
      <Features
        capital="Tashkent"
        area="448,978 km²"
        population="34,588,900 (2020)"
        continent="Asia"
        hdi="0.720"
        currency="Uzbek som"
        language="Uzbek"
        religion="Muslims(93%)"
        literacy="99.9%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The Aral Sea was formerly the world’s fourth largest lake, 
covering an area of 26,300 square miles. However, from the 
1960s, the lake has been gradually shrinking. As of 2009, the
 larger part of the south-eastern lake had already dried up,
  and most of the southwestern lake had shrunk to form a small
   strip along the former southern sea.
"
        page="/vanuatu"
        country="Vanuatu"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/vanuatu"
        two="/kazakhstan"
        three="/afghanistan"
        four="/turkmenistan"
        con1="Vanuatu"
        con2="Kazakhstan"
        con3="Afghanistan"
        con4="Turkmenistan"
      />
    </>
  );
};

export default Uzbekistan;
