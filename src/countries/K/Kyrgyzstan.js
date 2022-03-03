import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import kg from "../../img/K/kg.svg";

const Kyrgyzstan = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Kyrgyzstan : Country With The Longest Poem In The History ("Epic Of
          Manas")
        </title>
        <meta
          name="description"
          content="Epic of Manas is the longest poem in history. Weighing in at
 a whopping 500,000 lines, this epic poem about the life of
  the warrior Manas is 20 times longer than The Odyssey."
        />
        <meta
          name="keyboard"
          content="kyrgyzstan, Bishkek, Longest Poem In The History, Epic Of Manas"
        />
        <link rel="icon" href={kg} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/laos" country="Laos" />

      {/* header */}
      <Header header='Kyrgyzstan : Country With The Longest Poem In The History ("Epic Of Manas")' />

      {/* article  */}
      <Article flag={kg} />

      {/* features */}
      <Features
        capital="Bishkek"
        area="199,900 km²"
        population="6,586,600 (2020)"
        continent="Asia"
        hdi="0.697"
        currency="Kyrgyzstani som"
        language="Kyrgyz"
        religion="Islam(82%)"
        literacy="99%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Epic of Manas is the longest poem in history. Weighing in at
 a whopping 500,000 lines, this epic poem about the life of
  the warrior Manas is 20 times longer than The Odyssey. Most 
  records date the piece to the 18th century, though the
   Kyrgyz people claim it is much older, an oral tale that
    was passed down until it was recorded in writing in the
     1700s. The first complete version was published in 1920.
"
        page="/laos"
        country="Laos"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/laos"
        two="/china"
        three="/kazakhstan"
        four="/uzbekistan"
        con1="Laos"
        con2="China"
        con3="Kazakhstan"
        con4="Uzbekistan"
      />
    </>
  );
};

export default Kyrgyzstan;
