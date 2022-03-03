import React from "react";
import "../index.css";

const Features = (props) => {
  return (
    <>
      {/* <!-- &emsp; and &ensp; --> */}
      <section className="features">
        <div className="container">
          {/* <div className="ads">
            <h1>this is ads</h1>
          </div> */}
          <h1>Country Profile</h1>
          <br />
          <br />
          <table>
            <tbody>
              <tr>
                <td>
                  <p>Capital</p>
                </td>
                <td>
                  <p>:{props.capital}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Population</p>
                </td>
                <td>
                  <p> :{props.population}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p> Continent</p>
                </td>
                <td>
                  <p>:{props.continent}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>HDI</p>
                </td>
                <td>
                  <p>:{props.hdi}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Area</p>
                </td>
                <td>
                  <p>:{props.area}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p> Currency</p>
                </td>
                <td>
                  <p> : {props.currency}</p>
                </td>
              </tr>
              <tr>
                <td id="tb">
                  <p>Language</p>
                </td>
                <td>
                  <p> : {props.language}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p> Religion</p>
                </td>
                <td>
                  <p> : {props.religion}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p> Literacy Rate</p>
                </td>
                <td>
                  <p> : {props.literacy}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Features;
