import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ni from "../../img/N/ni.svg";

const Nicaragua = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nicaragua : Country With The Only Lake In The World To Contain
          Fresh-water Sharks
        </title>
        <meta
          name="description"
          content="The Mosquito Coast of present-day Nicaragua in the eastern
 coast of the country is not named after mosquitos but 
 derives its name from the indigenous Miskito Amerindians 
 who lived in the area."
        />
        <meta
          name="keyboard"
          content="Nicaragua, Managua, Only lake to Fresh-water sharks, lake nicaragua"
        />
        <link rel="icon" href={ni} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/niger" country="Niger" />

      {/* header */}
      <Header
        header="Nicaragua : Country With Only Lake In The World To Contain
          Fresh-water Sharks ('Lake Nicaragua')"
      />

      {/* article  */}
      <Article flag={ni} />

      {/* features */}
      <Features
        capital="Managua"
        area="130,375 km²"
        population="6,486,201(2019)"
        continent="North America"
        hdi="0.660"
        currency="Nicaraguan cordoba"
        language="Spanish"
        religion="Christianity(84.4%)"
        literacy="82.6%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The Mosquito Coast of present-day Nicaragua in the eastern
 coast of the country is not named after mosquitos but 
 derives its name from the indigenous Miskito Amerindians 
 who lived in the area.
"
        page="/niger"
        country="Niger"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/niger"
        two="/honduras"
        three="/costa-rica"
        four="/guatemala"
        con1="Niger"
        con2="Honduras"
        con3="Costa Rica"
        con4="Guatemala"
      />
    </>
  );
};

export default Nicaragua;
