import React from "react";

const PostCards = ({ title, body, id }) => {
  return (
    <div
      className="post-card"
      style={{
        border: "2px solid blue",
        margin: "50px",
        borderRadius: "15px",
        padding: "13px",
      }}
    >
      <span>{id}</span>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostCards;
