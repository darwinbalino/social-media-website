import React from "react";
import InputBox from "./InputBox";
import Posts from "./Posts/Posts";

const Feed = ({setCurrentId, currentId}) => {
  return (
    <div className="flex-grow h-screen pt-6 mr-4 overflow-y-auto pb-44 xl:mr-40 scrollbar-hide">
      <div className="max-w-md mx-auto md:max-w-lg lg:max-w-2xl">
        <InputBox setCurrentId={setCurrentId} currentId={currentId} />
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
