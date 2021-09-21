import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return !posts.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="">
      {posts.reverse().map((post) => (
        <div key={post._id} className="">
          <Card post={post} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
