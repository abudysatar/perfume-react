import React from "react";
import "./StandardBar.css";

const StandardBar = () => {
  const items = [
    "Created for everyone.",
    "Created for everyone.",
    "Created for everyone.",
    "Created for everyone.",
    "Created for everyone.",
    "Created for everyone.",
  ];

  return (
    <div className="StandardBar">
      {items.map((text, index) => (
        <div className="textConts" key={index}>
          <p> {text}</p>
          {index !== items.length - 1 && (
            <img src="/iconoir_flower medium.svg" alt="flower" />
          )}{" "}
        </div>
      ))}
    </div>
  );
};

export default StandardBar;
