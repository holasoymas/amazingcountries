import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import zw from "../../img/Z/zw.svg";

const Zimbabwe = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zimbabwe : Largest Producer Of Tobacco In Africa</title>
        <meta
          name="description"
          content="Zimbabwe is believed to be the location of Ophir, the ancient
 wealthy country from which King Solomon got ivory, gold, and
  such other precious items."
        />
        <meta
          name="keyboard"
          content="
          Zimbabwe, Harare, africa, Largest Producer Of Tobacco In Africa
            
 "
        />

        <link rel="icon" href={zw} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/afghanistan" country="Afghanistan" />

      {/* header */}
      <Header
        header="
          Zimbabwe : Largest Producer Of Tobacco In Africa"
      />

      {/* article  */}
      <Article flag={zw} />

      {/* features */}
      <Features
        capital="Harare"
        area="390,757 km²"
        population="15,092,171 (2019)"
        continent="Africa"
        hdi="0.571"
        currency="Zimbabwean dollar"
        language="Shona,English"
        religion="Christianity(84.1%)"
        literacy="88.7%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Zimbabwe is believed to be the location of Ophir, the ancient
 wealthy country from which King Solomon got ivory, gold, and
  such other precious items. Great Zimbabwe was an ancient 
  Shona city stood at the hub of a vast trade network in 
  Southern Africa, trading in Gold and Iron with Portuguese 
  and Indian traders.
"
        page="/afghanistan"
        country="Afghanistan"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/afghanistan"
        two="/zambia"
        three="/botswana"
        four="/south-africa"
        con1="Afghanistan"
        con2="Zambia"
        con3="Botswana"
        con4="South Africa"
      />
    </>
  );
};

export default Zimbabwe;
