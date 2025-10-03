import React from "react";
import "./Contact.css";
import Button from "../Button/Button";
const Contact = () => {
  return (
    <section className="ContactContainer">
      <h1 className="heading1">Let’s chat.</h1>
      <h6 className="heading6">
        Send us a message and we’ll get right back to you,
      </h6>
      <div className="EmailCont">
        {" "}
        <form className="contact-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
            />
            <input type="email" placeholder="Email" className="input-field" />
          </div>
          <textarea
            placeholder="How can we help you?"
            className="textarea-field"
          ></textarea>
        </form>
      </div>
      <Button rounded className={"ContactBtn"}>
        SEND MESSAGE
      </Button>
    </section>
  );
};

export default Contact;
