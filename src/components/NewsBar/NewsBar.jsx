import "./newsbar.css";
import { useState } from "react";
const NewsBar = ({ setIsNewsBar }) => {
  const [hide, setHide] = useState(true);
  if (!hide) return null;

  return (
    <section className="newsBar pargraf3">
      <span></span>
      <p> Just Restocked | Shop Our Fragrance Collection</p>
      <button
        onClick={() => {
          setIsNewsBar(false);
          setHide(false);
        }}
      >
        x
      </button>
    </section>
  );
};

export default NewsBar;
