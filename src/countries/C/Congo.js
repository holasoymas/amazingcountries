import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import cg from "../../img/C/cg.svg";

const Congo = () => {
  return (
    <>
      <Helmet>
        <title>
          Congo : Only Place Where You Can Find The Bonobo ( Species Of
          Chimpanzee )
        </title>
        <meta
          name="description"
          content="The Nouabale-Ndoki National Park in the country is the last
  natural habitat on earth where you can’t identify any type
   of mankind’s interference and it has remained undisturbed
    by global changes."
        />
        <meta
          name="keyboard"
          content="congo, Brazzaville,Only Place Where You Can Find The Bonobo "
        />
        <link rel="icon" href={cg} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/costa-rica" country="Costa Rica" />

      {/* header */}
      <Header
        header="Congo : Only Place Where You Can Find The Bonobo ( Species Of
          Chimpanzee )"
      />

      {/* article  */}
      <Article flag={cg} />

      {/* features */}
      <Features
        capital="Brazzaville"
        area="342,000 km²"
        population="5,244,359 (2018)"
        continent="Africa"
        hdi="0.574"
        currency="Central African CFA franc"
        language="French"
        religion="Christianity(88.5%)"
        literacy="80.03%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
 The Nouabale-Ndoki National Park in the country is the last
  natural habitat on earth where you can’t identify any type
   of mankind’s interference and it has remained undisturbed
    by global changes. This has made the park earn the title
     of Last Eden on the Earth.
"
        page="/costa-rica"
        country="Costa Rica"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/costa-rica"
        two="/cameroon"
        three="/democratic-republic-of-congo"
        four="/gabon"
        con1="Costa Rica"
        con2="Cameroon"
        con3="Dem. Rep. of Congo"
        con4="Gabon"
      />
    </>
  );
};

export default Congo;
