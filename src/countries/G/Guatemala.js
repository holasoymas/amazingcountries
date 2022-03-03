import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import gt from "../../img/G/gt.svg";

const Guatemala = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Guatemala : The Country Where It's Currency Is Named After It's
          National Bird ('Quetzal')
        </title>
        <meta
          name="description"
          content="All Saints Day Kite Festival is Guatemalans’ way of honoring
 their dead. Every year on November 1st, Guatemalans partake
  in this ritual that has been around for more than 3000 years."
        />
        <meta
          name="keyboard"
          content="guatemala, Where It's Currency Is Named After It's National Bird"
        />
        <link rel="icon" href={gt} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/guinea" country="Guinea" />

      {/* header */}
      <Header header="Guatemala : The Country Where It's Currency Is Named After It's National Bird ('Quetzal')" />

      {/* article  */}
      <Article flag={gt} />

      {/* features */}
      <Features
        capital="Guatemala City"
        area="108,889 km²"
        population="17,263,239 (2018)"
        continent="North America"
        hdi="0.633"
        currency="Guatemalan quetzal"
        language="Spanish"
        religion="Christianity(88%)"
        literacy="91.3%"
      />
      {/* fact field */}
      <Fact
        didYouKnow="
All Saints Day Kite Festival is Guatemalans’ way of honoring
 their dead. Every year on November 1st, Guatemalans partake
  in this ritual that has been around for more than 3000 years.
   People flock down to the cemeteries to clean and decorate 
   the graves of their loves ones. Then, Guatemalans fly 
   massive and intricately-decorated kites high in the sky 
   — it’s quite the sight to behold.
"
        page="/guinea"
        country="Guinea"
      />
      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/guinea"
        two="/mexico"
        three="/el-salvador"
        four="/belize"
        con1="Guinea"
        con2="Mexico"
        con3="El Salvador"
        con4="Belize"
      />
    </>
  );
};

export default Guatemala;
