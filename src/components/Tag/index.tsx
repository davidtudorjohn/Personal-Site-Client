import React from "react";
import "./tag.css";
interface Props {
  tag: any;
}
const Tag = (props: Props) => {
  return <div className="post-tag">{props.tag}</div>;
};
export default Tag;
