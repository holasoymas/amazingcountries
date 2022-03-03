import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import tj from "../../img/T/tj.svg";

const Tajikistan = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tajikistan : Second Most Mountainous Country In The World</title>
        <meta
          name="description"
          content="Dushanbe is the capital of Tajikistan. The name Dushanbe means
 Monday in the Tajik language. The name was chosen since 
 Dushanbe grew to a city from a village that hosted a very
  popular market every week on a Monday."
        />
        <meta
          name="keyboard"
          content="
             Tajikistan, Dushanbe, Second Most Mountainous Country In The World"
        />
        <link rel="icon" href={tj} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/tanzania" country="Tanzania" />

      {/* header */}
      <Header header="Tajikistan : Second Most Mountainous Country In The World" />

      {/* article  */}
      <Article flag={tj} />

      {/* features */}
      <Features
        capital="Dushanbe"
        area="143,100 km²"
        population="9,537,645 (2020)"
        continent="Asia"
        hdi="0.668"
        currency="Somoni"
        language="Tajik"
        religion="Muslims(98%)"
        literacy="98%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="

Dushanbe is the capital of Tajikistan. The name Dushanbe means
 Monday in the Tajik language. The name was chosen since 
 Dushanbe grew to a city from a village that hosted a very
  popular market every week on a Monday.
"
        page="/tanzania"
        country="Tanzania"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/tanzania"
        two="/kyrgyzstan"
        three="/china"
        four="/afghanistan"
        con1="Tanzania"
        con2="Kyrgyzstan"
        con3="China"
        con4="Afghanistan"
      />
    </>
  );
};

export default Tajikistan;
