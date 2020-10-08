import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Tag from "../Tag";
import "./blogpost.css";
interface Props {
  title: string;
  tags: any;
  body: string;
  image: string;
  id: number;
  author: string;
  postedAt: string;
}
const BlogPost = (props: Props) => {
  return (
    <Link to={`/blog/posts/${props.id}`}>
      <article className="blog-post">
        <img className="blog-post-image" src={props.image} />
        <section className="blog-post-content">
          <h2 className="blog-post-title">{props.title}</h2>
          <h5 className="blog-post-details">Posted by {props.author}</h5>
          <h6>{props.postedAt}</h6>
          <section className="tags-section">
            {props.tags.map((tag: string) => {
              return <Tag tag={tag} />;
            })}
          </section>
          <p className="blog-post-body">{props.body.substr(0, 140) + "..."}</p>
          <a className="read-more-link" href="#">
            Read more <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </section>
      </article>
    </Link>
  );
};
export default BlogPost;
