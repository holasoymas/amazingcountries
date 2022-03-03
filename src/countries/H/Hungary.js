import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import hu from "../../img/H/hu.svg";

const Hungary = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hungary : The Country Of Thermal Water</title>
        <meta
          name="description"
          content="According to the legend, when the 1848 Hungarian revolution
 against the Habsburgs was defeated, 13 Hungarian generals
  were executed, with the Austrians clinking their beer 
  glasses after each execution."
        />
        <meta
          name="keyboard"
          content="hungary, budapest, The Country Of Thermal Water,europe"
        />
        <link rel="icon" href={hu} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/iceland" country="Iceland" />

      {/* header */}
      <Header header="Hungary : The Country Of Thermal Water" />

      {/* article  */}
      <Article flag={hu} />

      {/* features */}
      <Features
        capital="Budapest"
        area="93,030 km²"
        population="9,730,000 (2021)"
        continent="Europe"
        hdi="0.854"
        currency="Hungarian forint"
        language="Hungarian"
        religion="Christianity(54.3%)"
        literacy="99.1%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
According to the legend, when the 1848 Hungarian revolution
 against the Habsburgs was defeated, 13 Hungarian generals
  were executed, with the Austrians clinking their beer 
  glasses after each execution. After this, Hungarians 
  vowed to not cheer with the beer for 150 years. That 
  time has passed, but it’s still a custom.
"
        page="/iceland"
        country="Iceland"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/iceland"
        two="/ukraine"
        three="/austria"
        four="/romania"
        con1="Iceland"
        con2="Ukraine"
        con3="Austria"
        con4="Romania"
      />
    </>
  );
};

export default Hungary;
