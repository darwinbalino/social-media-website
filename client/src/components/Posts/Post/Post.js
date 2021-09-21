import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{post.message}</h1>
      <h1>{moment(post.createdAt).fromNow()}</h1>
      <div className="">
        <button
          className="px-4 py-2"
          onClick={() => setCurrentId(post._id)}
        ></button>

        <img
        className="object-contain"
          src={
            post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          alt=""
        />
      </div>
      <button onClick={() => dispatch(likePost(post._id))}>Like</button>
      <h1>{post.likeCount}</h1>
      <button onClick={() => dispatch(deletePost(post._id))}>Delete</button>
    </div>
  );
};

export default Post;
