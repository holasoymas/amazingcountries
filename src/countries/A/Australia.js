import React from "react";
import Header from "../../components/Header";
import Article from "../../components/Article";
import Features from "../../components/Features";
import Fact from "../../components/Fact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import Message from "../../components/Message";
import { Helmet } from "react-helmet";
import au from "../../img/A/au.svg";
const Australia = () => {
  return (
    <>
      <Helmet>
        <title>Australia : Home Of The Longest Fence</title>
        <meta
          name="description"
          content="Australia is home to the longest fence in the world.
       Originally built to keep dingos away from fertile land,
       the fence is now 5,614 km long."
        />
        <meta
          name="keyboard"
          content="Australia,Canberra, longest fence, kangaroo,Sydney,Melbourne"
        />
        <link rel="icon" href={au} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/austria" country="Austria" />

      {/* header */}
      <Header header="Australia : Home Of The Longest Fence" />

      {/* article  */}
      <Article flag={au} />

      {/* features */}
      <Features
        capital="Canberra"
        area="7,692,024 km²"
        population=" 23,401,892 (2016)"
        continent="Australia"
        hdi="0.944"
        currency="Australian Dollar"
        language="English"
        religion="Christianity(52.1%)"
        literacy="95.34%(2020)"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
      Australia is home to the longest fence in the world.
       Originally built to keep dingos away from fertile land,
       the fence is now 5,614 km long."
        page="/austria"
        country="Austria"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/austria"
        two="/new-zealand"
        three="/papua-new-guinea"
        four="/solomon-islands"
        con1="Austria"
        con2="New Zealand"
        con3="Papua New Guinea"
        con4="Solomon Islands"
      />
    </>
  );
};

export default Australia;
