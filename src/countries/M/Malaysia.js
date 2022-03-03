import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import my from "../../img/M/my.svg";

const Malaysia = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Malaysia : The Country With The Largest Cave Chamber In The World
          ("Sarawak Chamber")
        </title>
        <meta
          name="description"
          content="The largest cave chamber in the world, the Sarawak Cave
 Chamber, is located in Gunung Mulu National Park on the
  Borneo Island. It can accommodate 40 Boeing 747s."
        />
        <meta
          name="keyboard"
          content="Malaysia, sarawak, Kuala Lumpur, Country With The Largest Cave Chamber"
        />
        <link rel="icon" href={my} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/maldives" country="Maldives" />

      {/* header */}
      <Header header='Malaysia : Country With The Largest Cave Chamber In The World ("Sarawak Chamber")' />

      {/* article  */}
      <Article flag={my} />

      {/* features */}
      <Features
        capital="Kuala Lumpur"
        area="330,803 km²"
        population="32,730,000 (2020)"
        continent="Asia"
        hdi="0.810"
        currency="Ringgit"
        language="Malaysian"
        religion="Islam(61.3%)"
        literacy="94.9%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
The largest cave chamber in the world, the Sarawak Cave
 Chamber, is located in Gunung Mulu National Park on the
  Borneo Island. This cave chamber is so vast that according
   to rough mathematics, it can accommodate 40 Boeing 747s 
   without the planes even having to overlap their wings to
    fit in.
"
        page="/maldives"
        country="Maldives"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/maldives"
        two="/indonesia"
        three="/thailand"
        four="/philippines"
        con1="Maldives"
        con2="Indonesia"
        con3="Thailand"
        con4="Philippines"
      />
    </>
  );
};

export default Malaysia;
