import React from "react";
import "./Standard.css";
import Button from "../Button/Button";
const Standard = () => {
  return (
    <section className="standardContainer">
      <img src="public/sectionImage/section.png" alt="" />
      <div className="standardTxt">
        <h2 className="heading2">Smell like a dream.</h2>
        <p>
          With every delicate spritz, our scents weave a tapestry of dreams,
          enveloping you in an irresistible aura that lingers like the sweetest
          reverie. Each note is meticulously crafted to transport you to a realm
          where your aspirations come alive, leaving an impression that's as
          lasting as the memory of a cherished dream.
        </p>
        <Button href={"/collection"} className="cardBtn" rounded>
          SHOP NOW
        </Button>
      </div>
    </section>
  );
};

export default Standard;
