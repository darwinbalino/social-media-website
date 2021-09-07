import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import React from "react";

const InputBox = () => {
  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="p-2 mt-6 font-medium text-gray-500 bg-white shadow-md rounded-2xl">
        {/* Add Image */}
        <div className="flex items-center p-4 space-x-4">
          <form className="flex flex-1">
            <input
              className="flex-grow h-12 px-5 bg-gray-100 rounded-full focus:outline-none"
              type="text"
              placeholder="What's on your mind?" //Add session
            />
            <button hidden onClick={sendPost} type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className="flex p-3 border-t justify-evenly">
          <div className="inputIcon">
            <VideoCameraIcon className="text-red-500 h-7" />
            <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
          </div>
          <div className="inputIcon">
            <CameraIcon className="text-green-400 h-7" />
            <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          </div>
          <div className="inputIcon">
            <EmojiHappyIcon className="text-yellow-300 h-7" />
            <p className="text-xs sm:text-sm xl:text-base">Feeling</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
