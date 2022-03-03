import React from "react";
import { Helmet } from "react-helmet";
import Article from "../../components/Article";
import Fact from "../../components/Fact";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import kz from "../../img/K/kz.svg";

const Kazakhstan = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Kazakhstan : The Country With The Slepping City Of Kalachi
        </title>
        <meta
          name="description"
          content="Kazakhstan has a space launch facility. And not just any space
 launch facility, but the world's first and largest. Tim 
 Peake will be following in the footsteps of other famous
  astronauts."
        />
        <meta
          name="keyboard"
          content="Kazakhstan,nur-sultan,Country With The Slepping City Of Kalachi"
        />
        <link rel="icon" href={kz} />
      </Helmet>
      {/* navbar */}
      <Navbar page="/kenya" country="Kenya" />

      {/* header */}
      <Header header="Kazakhstan : The Country With The Slepping City Of Kalachi" />

      {/* article  */}
      <Article flag={kz} />

      {/* features */}
      <Features
        capital="Nur-Sultan"
        area="2,724,900 km²"
        population="18,711,560 (2020)"
        continent="Asia"
        hdi="0.825"
        currency="Kazakstani Tenge"
        language="Kazakh, Russian"
        religion="Muslim(70.2%)"
        literacy="99.8%"
      />

      {/* fact field */}
      <Fact
        didYouKnow="
Kazakhstan has a space launch facility. And not just any space
 launch facility, but the world's first and largest. Tim 
 Peake will be following in the footsteps of other famous
  astronauts when his rocket takes off from the Baikonur
   Cosmodrome in the Kazakh desert. The site, built in the
    1950s for the Soviet Union, is where Sputnik 1 took off.
     The facility is currently leased by the Russians and 
     remains at the centre of its space programme.
"
        page="/kenya"
        country="Kenya"
      />

      {/* message field  */}
      {/* <Message /> */}

      {/* footer part  */}
      <Footer
        one="/kenya"
        two="/russia"
        three="/kyrgyzstan"
        four="/turkmenistan"
        con1="Kenya"
        con2="Russia"
        con3="Kyrgyzstan"
        con4="Turkmenistan"
      />
    </>
  );
};

export default Kazakhstan;
