import React from "react";
import BlogPost from "../BlogPost";
import blogData from "./blogData";
import "./blogpage.css";
const BlogPage = () => {
  const handleBlogClick = () => {
    return;
  };
  return (
    <>
      <h1>Blog</h1>
      <div id="blog-page">
        <br />
        {blogData.map((post) => {
          return (
            <BlogPost
              id={post.id}
              author={post.author}
              postedAt={post.postedAt}
              title={post.title}
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
