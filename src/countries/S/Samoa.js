import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import samoa from "../../img/S/samoa.svg";

const Samoa = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Samoa : Country With Gender Specific Tattoos</title>
        <meta
          name="description"
          content="Samoans have gender-specific tattoos that are culturally
 significant in the region. Samoan girls receive the malu 
 tattoo that stretches from the upper thighs to just below
  the knees."
        />
        <meta
          name="keyboard"
          content="
          Samoa, Country With Gender Specific Tattoos, Apia, Oceania
          "
        />
        <link rel="icon" href={samoa} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/san-marino" country="San Marino" />

      {/* header */}
      <Header header="  Samoa : Country With Gender Specific Tatoos " />

      {/* article  */}
      <Article flag={samoa} />

      {/* features */}
      <Features
        capital="Apia"
        area="2,842 km²"
        population=" 202,506 (2020)"
        continent="Oceania"
        hdi="0.715"
        currency="Tala"
        language="Samoan,English"
        religion="Christianity(98%)"
        literacy="99.1%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Samoans have gender-specific tattoos that are culturally
 significant in the region. Samoan girls receive the malu 
 tattoo that stretches from the upper thighs to just below
  the knees. In males, the tattoo is known as Pe’a and it is
   more intricate in design and stretches all the way from the
    upper waist area to the knees.
"
        page="/san-marino"
        country="San Marino"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/san-marino"
        two="/new-zealand"
        three="/australia"
        four="/tuvalu"
        con1="San Marino"
        con2="New Zealand"
        con3="Australia"
        con4="Tuvalu"
      />
    </>
  );
};

export default Samoa;
