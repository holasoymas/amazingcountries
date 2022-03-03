import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ind from "../../img/I/in.svg";

const India = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          India : The Country Who Introduced Shampoo, Yoga, Buttons And Zero To
          The World
        </title>
        <meta
          name="description"
          content="Snakes and Ladders originated in India. Earlier known as 
Moksha Patamu, the game was initially invented as a moral
 lesson about karma to be taught to children."
        />
        <meta
          name="keyboard"
          content="india, new delhi, first country to introduce shampoo , buttons, zero"
        />
        <link rel="icon" href={ind} />
      </Helmet>

      {/* navbar */}
      <Navbar page="/indonesia" country="Indonesia" />

      {/* header */}
      <Header header="India : The Country Who Introduced Shampoo, Yoga, Buttons And Zero To The World" />

      {/* article  */}
      <Article flag={ind} />

      {/* features */}
      <Features
        capital="New Delhi"
        area="3,287,263 km²"
        population="1,352,642,280 (2018)"
        continent="Asia"
        hdi="0.645"
        currency="Indian Rupee"
        language="Hindi,English"
        religion="Hinduism(79.8%)"
        literacy="74.04%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Snakes and Ladders originated in India. Earlier known as 
Moksha Patamu, the game was initially invented as a moral
 lesson about karma to be taught to children. It was later
  commercialized and has become one of the most popular board
   games in the world.
"
        page="/indonesia"
        country="Indonesia"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/indonesia"
        two="/china"
        three="/pakistan"
        four="/nepal"
        con1="Indonesia"
        con2="China"
        con3="Pakistan"
        con4="Nepal"
      />
    </>
  );
};

export default India;
