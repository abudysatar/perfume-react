import React from "react";
import "./StandardDetals.css";

const StandardDetals = () => {
  const items = [
    {
      img: "/logos/Group.png",
      text: "Sustainable Sourcing ",
      description:
        "We meticulously source our ingredients from sustainable and eco-friendly suppliers, ensuring that the delicate balance of nature is preserved. ",
    },
    {
      img: "/logos/clean.png",
      text: "Clean Formulations ",
      description:
        "Our perfumes are crafted using clean and non-toxic ingredients, free from harmful chemicals that could compromise your health or the environment. ",
    },
    {
      img: "/logos/minimalist.png",
      text: "Minimalist Packaging ",
      description:
        "Our bottles and boxes are thoughtfully designed to minimize waste, using eco-friendly materials that are both beautiful and sustainable.  ",
    },
    {
      img: "/logos/heart.png",
      text: "Cruelty-Free Practices ",
      description:
        "We are proud to be a cruelty-free brand, never testing our products on animals.Our dedication to safety extends to our furry friends. ",
    },
  ];

  return (
    <section className="standard2Container">
      <div className="standard2Txt">
        <h2 className="heading2">Safe for you, safe for the earth.</h2>
        <div className="standardCards">
          {items.map((item, index) => (
            <div key={index} className="standardCard">
              {item.img && <img src={item.img} alt={item.text} />}
              <h3>{item.text}</h3>
              <p className="pargraf2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <img
        className="standardImg"
        src="/sectionImage/section2.png"
        alt="Section visual"
      />
    </section>
  );
};

export default StandardDetals;
