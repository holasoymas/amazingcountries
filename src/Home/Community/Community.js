import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Community.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import PublicIcon from "@material-ui/icons/Public";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const Community = (props) => {
  // ?     user message
  const [messages, setMessages] = useState([
    {
      name: "",
      country: "",
      message: "",
    },
  ]);

  // todo ===>>> Fetching Data
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("/community")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setMessages(jsonRes));
  }, []);

  //todo -------->  message field
  const [input, setInput] = useState({
    name: "",
    country: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!input.name && !input.message) {
      toast.error("Please , Write your Name and Message");
    } else if (!input.name) {
      toast.error("Please , Enter your Name");
    } else if (!input.message) {
      toast.error("Opps !, you forget your message");
    } else {
      toast.success("Your , Message has been send");
    }

    const newMessage = {
      name: input.name,
      country: input.country,
      message: input.message,
    };
    axios.post("/community", newMessage);
    setInput({
      name: "",
      country: "",
      message: "",
    });
  };
  return (
    <>
      <Helmet>
        <title>Community | MyAmazingCountry</title>
        <meta name="description" content="" />
        <meta name="keyboard" content="Feature of Every Country" />
        <link rel="icon" href="earth.ico" />
      </Helmet>

      <section className="message-field">
        <div className="container">
          <h1>Leave a Message :</h1>
          <p>We Love To Hear About You !</p>
          <form method="post">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
            &nbsp;&nbsp;&nbsp;
            <input
              type="text"
              id="country"
              placeholder="Country ( Optional )"
              name="country"
              value={input.country}
              onChange={handleChange}
            />
            <br />
            <br />
            <textarea
              cols="20"
              rows="2"
              placeholder="Leave a Message"
              name="message"
              value={input.message}
              onChange={handleChange}
            ></textarea>
            <br />
            <button className="btn" id="btn" onClick={handleClick}>
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
        <br />
        <NavLink to="/">
          <p style={{ color: "hsl(136, 65%, 51%)" }}>Go Back To Home Page</p>
        </NavLink>
      </section>

      {/* user message */}
      <div className="container">
        <div className="containers">
          <h1 style={{ textAlign: "center" }}>Your Messages :</h1>
          <br />

          {messages.map((msg) => (
            <div className="messages">
              <h1 key={props.key} className="name">
                <span>
                  <AccountCircleIcon className="svg_icons" />
                  &nbsp;
                </span>
                {msg.name}
              </h1>

              <li key={props.key} className="country">
                <span>
                  <PublicIcon className="svg_icons" />
                  &nbsp; &nbsp;
                </span>
                {!msg.country ? "Unknown" : msg.country}
                {/* {msg.country} */}
              </li>

              <li key={props.key} className="message">
                <span>
                  <InsertCommentIcon className="svg_icons" />
                  &nbsp; &nbsp;
                </span>
                {msg.message}
              </li>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Community;
