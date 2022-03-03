import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import cambodia from "../../img/C/cambodia.svg";

const Cambodia = () => {
  return (
    <>
      <Helmet>
        <title>Cambodia : Only Flag Which Has Building On It</title>
        <meta
          name="description"
          content="In the past 60 years, Cambodia went through a number of name
   changes. The first one being ‘The Kingdom of Cambodia,’ 
   then ‘The Khmer Republic’."
        />
        <meta
          name="keyboard"
          content="cambodia , phnom penh, asia,  Flag Which Has Building On It"
        />
        <link rel="icon" href={cambodia} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/cameroon" country="Cameroon" />

      {/* header */}
      <Header header="Cambodia : Only Flag Which Has Building On It" />

      {/* article  */}
      <Article flag={cambodia} />

      {/* features */}
      <Features
        capital=" Phnom Penh"
        area="181,035 km²"
        population=" 15,552,211 (2019)"
        continent="Asia"
        hdi="0.594"
        currency="Cambodian riel"
        language="Khmer"
        religion="Buddhism(97.1%)"
        literacy="80.5%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
  In the past 60 years, Cambodia went through a number of name
   changes. The first one being ‘The Kingdom of Cambodia,’ 
   then ‘The Khmer Republic’. And then later ‘Democratic 
   Kampuchea’ during the Khmer Rouge, and then ‘The People’s
    Republic of Kampuchea’ after the war had ended, as a 
    suggestion by the Vietnamese. Today, the monarchy has
     chosen to use the original name, ‘The Kingdom of Cambodia,
     ’ which is what we know it as now.
"
        page="/cameroon"
        country="Cameroon"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/cameroon"
        two="/thailand"
        three="/vietnam"
        four="/laos"
        con1="Cameroon"
        con2="Thailand"
        con3="Vietnam"
        con4="Laos"
      />
    </>
  );
};

export default Cambodia;
