import React from "react";
import Singlepost from "./Singlepost";

const Postlist = ({ posts }) => {
  return posts.map(post => {
    return (
      <div className="single_post" key={post.id}>
        <div className="voter_div">
          <h3>Vote</h3>
          <h4> +</h4>
          <h4> -</h4>
        </div>
        <Singlepost post={post} />
      </div>
    );
  });
};

export default Postlist;
