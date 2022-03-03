import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import dj from "../../img/D/dj.svg";

const Djibouti = () => {
  return (
    <>
      <Helmet>
        <title>
          Djibouti : The Only US Military Base Country In Africa ( Camp
          Lemonnier )
        </title>
        <meta
          name="description"
          content="Djibouti officially dissolved their national football team
 in the year 2017 due to constant poor performance. The 
 team never once qualified for a major international 
 tournament."
        />
        <meta
          name="keyboard"
          content="djibouti, Only US Military Base Country In Africa,  Camp
          Lemonnier "
        />
        <link rel="icon" href={dj} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/dominica" country="Dominica" />

      {/* header */}
      <Header
        header="Djibouti : The Only US Military Base Country In Africa ( Camp
          Lemonnier )"
      />

      {/* article  */}
      <Article flag={dj} />

      {/* features */}
      <Features
        capital="Djibouti"
        area="23,200 km²"
        population="973,560 (2019) "
        continent="Africa"
        hdi="0.524"
        currency="Djiboutian franc"
        language="French, Arabic"
        religion="Islam(94%)"
        literacy="30%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Djibouti officially dissolved their national football team
 in the year 2017 due to constant poor performance. The 
 team never once qualified for a major international 
 tournament and are ranked one hundred and eighty-fifth 
 (185th) in the world.
"
        page="/dominica"
        country="Dominica"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/dominica"
        two="/ethiopia"
        three="/eritrea"
        four="/somalia"
        con1="Dominica"
        con2="Ethiopia"
        con3="Eritrea"
        con4="Somalia"
      />
    </>
  );
};

export default Djibouti;
