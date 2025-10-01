import React from "react";
import "./BlogThree.css";
import posts from "../../data/blog-data";
import { Card } from "../BlogCards/Cards";
import { data, Link, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

const BlogThree = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const BlogThree = data[id - 1];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="BlogThree">
      {posts.slice(0, 3).map((post) => (
        <Link to={`/blog-post/${post.id}`} key={post.id}>
          <Card post={post} />
        </Link>
      ))}
    </div>
  );
};

export default BlogThree;
