import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return !posts.length ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {posts.map((post) => (
        <div key={post._id} className="w-50 h-50">
          <Post post={post} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};

export default Posts;