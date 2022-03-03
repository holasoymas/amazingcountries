import React from "react";
import Header from "../../components/Header";
import Article from "../../components/Article";
import Features from "../../components/Features";
import Fact from "../../components/Fact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import Message from "../../components/Message";
import { Helmet } from "react-helmet";
import ar from "../../img/A/ar.svg";
const Argentina = () => {
  return (
    <>
      <Helmet>
        <title>Argentina : The Birthplace Of Lionel Messi</title>
        <meta
          name="description"
          content="Argentina was the first country to use fingerprinting as a
        method of identification."
        />
        <meta
          name="keyboard"
          content="Argentina, Buenos aries,messi, first-fingerprint country,south-america "
        />
        <link rel="icon" href={ar} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/armenia" country="Armenia" />

      {/* header */}
      <Header header='Argentina : The Birthplace Of "Lionel Messi"' />

      {/* article  */}
      <Article flag={ar} />

      {/* features */}
      <Features
        capital="Buenos Aires"
        area=" 2,780,400 km²"
        population="44,938,712 (2019)"
        continent="South America"
        hdi="0.845"
        currency=" Argentine Peso"
        language="Spanish"
        religion="Christianity(79.6%)"
        literacy="99%(2020)"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
       Argentina was the first country to use fingerprinting as a
        method of identification. In 1892, the small Argentinian town
        of Necochea in the Province of Buenos Aires, was rocked by the
        gruesome stabbing of two children. With no witnesses to the
        crime, local police were unable to tie the murder to any
        particular suspect. Utilizing a bloody fingerprint left on
        a door handle, a local detective discovered the murderer to
        be the kids’ mother (who not long after, eventually confessed
        to the crime."
        page="/armenia"
        country="Armenia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/armenia"
        two="/brazil"
        three="/chile"
        four="/colombia"
        con1="Armenia"
        con2="Brazil"
        con3="Chile"
        con4="Colombia"
      />
    </>
  );
};

export default Argentina;
