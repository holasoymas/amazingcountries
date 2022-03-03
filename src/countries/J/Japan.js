import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import jp from "../../img/J/jp.svg";

const Japan = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Japan : Country With The Oldest Company In The World ("Kongo Gumi")
        </title>
        <meta
          name="description"
          content="The Kanamara Matsuri festival that celebrates the penis and
 female fertility is held every year. It is celebrated in the
  Japanese city of Kawasaki on the first Sunday in April."
        />
        <meta
          name="keyboard"
          content="japan, tokyo,asia, Kanamara, Country With Oldest Company, ( Kongo Gumi )"
        />
        <link rel="icon" href={jp} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/jordan" country="Jordan" />

      {/* header */}
      <Header header='Japan : Country With The Oldest Company In The World ("Kongo Gumi")' />

      {/* article  */}
      <Article flag={jp} />

      {/* features */}
      <Features
        capital="Tokyo"
        area="377,975 km²"
        population="126,226,568 (2020)"
        continent="Asia"
        hdi="0.919"
        currency="Japanese yen"
        language="Japanese"
        religion="Shinto(50.7%)"
        literacy="99%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The Kanamara Matsuri festival that celebrates the penis and
 female fertility is held every year. It is celebrated in the
  Japanese city of Kawasaki on the first Sunday in April. 
  During this time, almost everything, including vegetables
  , candy, and decorations are given the shape of the male
   reproductive organ or other things related to fertility.
"
        page="/jordan"
        country="Jordan"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/jordan"
        two="/china"
        three="/south-korea"
        four="/philippines"
        con1="Jordan"
        con2="China"
        con3="South Korea"
        con4="Philippines"
      />
    </>
  );
};

export default Japan;
