import { CursorClickIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../actions/posts";

const InputBox = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    message: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ message: "", selectedFile: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-2 mt-6 flex-grow font-medium text-gray-500 bg-white shadow-md rounded-2xl">
        <div className="flex items-center p-4 space-x-4">
          <img
            className="object-cover rounded-full max-h-10"
            src="https://www.onthisday.com/images/people/andre-the-giant-medium.jpg"
            alt=""
          />
          <div  className="flex flex-1">
            <input
              className="flex-grow h-12 px-5 bg-gray-100 rounded-full focus:outline-none"
              type="text"
              placeholder="What's on your mind André?"
              value={postData.message}
              onChange={(e) => setPostData({ ...postData, message: e.target.value })}
            />
          </div>
        </div>
        <div className="cursor-pointer pl-8">
         <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
         />
        </div>
        <div className="flex items-center justify-center bg-white rounded-b-2xl">
        <button
        type="submit"
        className="inputIcon flex items-center h-12 text-gray-400">
          <CursorClickIcon className="h-4" />
          <p className="text-sm">Submit</p>
        </button>
        </div>
        {/* <div className="flex p-3 border-t justify-evenly">
          <div className="inputIcon cursor-default flex items-center">
            <VideoCameraIcon className="text-red-400 h-7" />
            <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
          </div>
          <div className="inputIcon flex items-center">
            <CameraIcon className="text-blue-400 h-7" />
            <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          </div>
          <div className="inputIcon cursor-default flex items-center">
            <EmojiHappyIcon className="text-yellow-300 h-7" />
            <p className="text-xs sm:text-sm xl:text-base">Feeling</p>
          </div>
        </div> */}
      </div>
    </form>
  );
};

export default InputBox;
