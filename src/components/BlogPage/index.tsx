import React, { useState } from "react";
import BlogNav from "../BlogNav";
import BlogPost from "../BlogPost";
import Loader from "../Loader";
import blogData from "./blogData";
import "./blogpage.css";
const BlogPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleBlogClick = () => {
    return;
  };
  const fetchBlogPosts = async () => {
    await null;
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return;
  };
  fetchBlogPosts();
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <h1>Blog</h1>
      <BlogNav />
      <div id="blog-page">
        <br />
        {blogData.map((post) => {
          return (
            <BlogPost
              id={post.id}
              author={post.author}
              postedAt={post.postedAt}
              title={post.title}
              tags={post.tags}
              body={post.body}
              image={post.image}
            />
          );
        })}
      </div>
    </>
  );
};
export default BlogPage;
