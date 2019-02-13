import React from "react";

const Singlepost = ({ post }) => {
  return (
    <div>
      <h4>{post.title}</h4>
      {post.isLink ? (
        <img className="post_img" alt="" src={post.body} />
      ) : (
        <p> {post.body}</p>
      )}
    </div>
  );
};

export default Singlepost;
