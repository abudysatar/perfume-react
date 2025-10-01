import posts from "../../data/blog-data";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import { DotMark } from "@carbon/icons-react";
import "./BlogPost.css";

const BlogPostH = () => {
  const { id } = useParams();
  const post = posts.find((item) => item.id == id);
  return (
    <section className="BlogPostCont">
      <img src={post.image} alt="" />
      <div className="BlogPostTxt">
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
        <h1 className="heading1 black">{post.title}</h1>
        <p className="pargraf1">
          {post.date}|{post.readTime}
        </p>
      </div>
    </section>
  );
};

export default BlogPostH;
