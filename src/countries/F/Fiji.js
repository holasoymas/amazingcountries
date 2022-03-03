import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import fj from "../../img/F/fj.svg";

const Fiji = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fiji : Soft Coral Capital Of The World</title>
        <meta
          name="description"
          content="Cannibalism was once common practice among Fijians. King Ratu
 Cakobau, this ended in 1871 when he encouraged his people to
  stop eating other humans."
        />
        <meta
          name="keyboard"
          content="fiji, suva, oceana, Soft Coral Capital Of The World"
        />
        <link rel="icon" href={fj} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/finland" country="Finland" />

      {/* header */}
      <Header header="Fiji : Soft Coral Capital Of The World" />

      {/* article  */}
      <Article flag={fj} />

      {/* features */}
      <Features
        capital="Suva"
        area="18,274 km²"
        population="889,953 (2019)"
        continent="Oceana"
        hdi="0.743"
        currency="Fijian Dollar"
        language="Fijian, English, Hindi"
        religion="Christianity(64.4%)"
        literacy="99.1%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Cannibalism was once common practice among Fijians. King Ratu
 Cakobau, this ended in 1871 when he encouraged his people to
  stop eating other humans. The residents of Fiji also believed
   that eating someone's flesh allowed one to possess their
    knowledge.
"
        page="/finland"
        country="Finland"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/finland"
        two="/vanuatu"
        three="/tonga"
        four="/samoa"
        con1="Finland"
        con2="Vanuatu"
        con3="Tonga"
        con4="Samoa"
      />
    </>
  );
};

export default Fiji;
