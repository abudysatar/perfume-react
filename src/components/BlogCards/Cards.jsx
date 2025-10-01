import "./Cards.css";
import clsx from "clsx";
import { DotMark } from "@carbon/icons-react";
import { Link } from "react-router-dom";
import posts from "../../data/blog-data";

const Cards = () => {
  return (
    <div className="BlogCont">
      <h2 className="BlogTxt heading1">All posts.</h2>
      <div className="blog-grid">
        {posts.map((post) => (
          <Card post={post} />
        ))}
      </div>
    </div>
  );
};

export default Cards;

export function Card({ post }) {
  return (
    <Link to={`/blog-post/${post.id}`} key={post.id} className="blog-card">
      <img src={post.image} alt={post.title} />
      <div className="content">
        <div
          className={clsx("tag", {
            news: post.category === "NEWS",
            products: post.category === "PRODUCTS",
            company: post.category === "COMPANY",
          })}
        >
          <DotMark
            className={clsx("Dot", {
              DotNews: post.category === "NEWS",
              DotProducts: post.category === "PRODUCTS",
              DotCompany: post.category === "COMPANY",
            })}
          />
          {post.category}
        </div>
        <h3>{post.title}</h3>
        <p className="meta">
          {post.date} | {post.readTime}
        </p>
      </div>
    </Link>
  );
}
