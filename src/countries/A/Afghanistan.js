import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import af from "../../img/A/af.svg";

const Afghanistan = () => {
  return (
    <>
      <Helmet>
        <title>Afghanistan : First Country To Make Oil Paintings</title>
        <meta
          name="description"
          content="Oil paintings were falsely credited to have
           been started by northern Europeans during 15th 
           century."
        />
        <meta
          name="keyboard"
          content="Afghanistan, Talibans, terrorist, kabul, muslims, dari persian"
        />
        <link rel="icon" href={af} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/albania" country="Albania" />

      {/* header */}
      <Header header="Afghanistan : First Country To Make Oil Paintings" />

      {/* article  */}
      <Article flag={af} />

      {/* features */}
      <Features
        capital="Kabul"
        area="652,230 km²"
        population=" 32,225,560 (2019)"
        continent="Asia"
        hdi="0.511"
        currency="Afghan afghani"
        language="Dari Persian(77%)"
        religion="Islam(99.7% )"
        literacy="43%(2018)"
      />

      {/* fact field */}
      <Fact
        didYouKnow="Oil paintings were falsely credited to 
        have been started by northern Europeans during 15th 
        century, Earliest known surviving oil painting are by 
        Buddhist murals found in Bamiyan, central highlands of 
        Afghanistan from around 650 AD behind two giant Buddha 
        statues after being 
      destroyed by Talibans in March 2001."
        country="Albania"
        page="/albania"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/albania"
        two="/pakistan"
        three="/iran"
        four="/china"
        con1="Albania"
        con2="Pakistan"
        con3="Iran"
        con4="China"
      />
    </>
  );
};

export default Afghanistan;
