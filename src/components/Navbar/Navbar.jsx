import "./navbar.css";
import { ShoppingBag } from "@carbon/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isNewsBar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar" data-news={isNewsBar}>
      <button
        className="burger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      <span className={`pargraf4 leftNav ${isOpen ? "show" : ""}`}>
        <a href="/collection">SHOP</a>
        <a href="/about">ABOUT</a>
      </span>
      <Link className="navBarImg" to={"/"} onClick={handleClick}>
        <img src="/PARFUM.svg" alt="logo" className="logo" />
      </Link>

      <span className={`pargraf4 rightNav ${isOpen ? "show" : ""}`}>
        <a href="/blog">BLOG</a>
        <a href="/contact">CONTACT</a>
        <a href="/error">
          <ShoppingBag />
        </a>
      </span>
    </div>
  );
};

export default Navbar;
