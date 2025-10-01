import React from "react";
import "./error.css";
import Button from "../Button/Button";
const Errors = () => {
  return (
    <section className="errorCont">
      <h1 className="heading1">404</h1>
      <h4 className="heading4">Page not found</h4>
      <h5 className="heading5">
        We can't seem to find the page you looking for.
      </h5>
      <Button href="/" rounded className="ErrorBtn">
        GO BACK HOME
      </Button>
    </section>
  );
};

export default Errors;
