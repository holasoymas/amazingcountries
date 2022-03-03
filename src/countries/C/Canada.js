import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ca from "../../img/C/ca.svg";

const Canada = () => {
  return (
    <>
      <Helmet>
        <title>Canada : The Country With The Most Lakes In The World</title>
        <meta
          name="description"
          content=" Smith is ranked as the most popular surname  in seven Canadian
  territories and provinces. Across the entire country, Smith
   shows up as frequently as one in every 192 people."
        />
        <meta
          name="keyboard"
          content="canada , ottawa,north america , the country with the most lakes"
        />
        <link rel="icon" href={ca} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/capeverde" country="Cape Verde" />

      {/* header */}
      <Header header="Canada : The Country With The Most Lakes In The World" />

      {/* article  */}
      <Article flag={ca} />

      {/* features */}
      <Features
        capital="Ottawa"
        area="9,984,670 km²"
        population="35,151,728 (2016)"
        continent="North America"
        hdi="0.929"
        currency="Canadian Dollar"
        language="English,French"
        religion="Christianity(67.2%)"
        literacy="99%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
 Smith is ranked as the most popular surname  in seven Canadian
  territories and provinces. Across the entire country, Smith
   shows up as frequently as one in every 192 people. There are
    approximately 192,145 people with their surname as Smith
     followed by Brown(108,859) and Tremblay
      (	106,668) in Canada.
"
        page="/capeverde"
        country="Cape Verde"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/capeverde"
        two="/usa"
        three="/mexico"
        four="/russia"
        con1="Cape Verde"
        con2="USA"
        con3="Mexico"
        con4="Russia"
      />
    </>
  );
};

export default Canada;
