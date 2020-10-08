import React from "react";
import { Link } from "react-router-dom";
import "./blogpost.css";
interface Props {
  title: string;
  body: string;
  image?: string;
  id?: number;
  author?: string;
  postedAt?: string;
}
const BlogPost = (props: Props) => {
  return (
    <Link to={`/blog/posts/${props.id}`}>
      <article className="blog-post">
        <img className="blog-post-image" src={props.image} />
        <h5 className="blog-post-details">Posted by {props.author}</h5>
        <h6>{props.postedAt}</h6>
        <h2 className="blog-post-title">{props.title}</h2>
        <p className="blog-post-body">{props.body}</p>
      </article>
    </Link>
  );
};
export default BlogPost;
