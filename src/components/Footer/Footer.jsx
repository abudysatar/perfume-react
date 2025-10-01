import React from "react";
import { useState } from "react";
import "./Footer.css";
import Button from "../Button/Button";
import Logo from "../../svg/Logo";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <section className="footerContainer">
      <div className="textCont">
        <div className="leftTex">
          <Logo />
          <h4 className="heading4">
            We send <span>great</span> emails.
          </h4>

          <div className="email">
            <div>
              <>
                {" "}
                <label className="emails" htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </>
            </div>
            <Button rounded>subscribe</Button>
          </div>
        </div>

        <div className="rightTex">
          <div>
            <h4 className="heading4">Company</h4>
            <a href="/collection">Shop</a>
            <a href="/About">About</a>
            <a href="/Blog">Blog</a>
            <a href="/Contact">Contact</a>
            <a href="/t&c">T&C</a>
          </div>
          <div>
            <h4 className="heading4">Social</h4>
            <a href="/Tiktok">Tiktok</a>
            <a href="/instagram">Instagram</a>
            <a href="/facebook">Facebook</a>
            <a href="/youtube">Youtube</a>
          </div>
          <div>
            <h4 className="heading4">Template</h4>{" "}
            <a href="/style-guide">Style Guide</a>
            <a href="/changlog">Changelog</a>
            <a href="/licenses">Licenses</a>
            <a href="/all-templates">All Templates</a>
          </div>
        </div>
      </div>
      <img src="/logos/PARFUM.png" alt="logo" />
      <div className="FooterComp">
        <p>
          Devloped By{" "}
          <a target="_blank" href="https://www.instagram.com/abudy.satar/">
            Abdulrahman
          </a>
        </p>
        <p>Website template by Callisto Digital Studio.</p>
      </div>
    </section>
  );
};

export default Footer;
