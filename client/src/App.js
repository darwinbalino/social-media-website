import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Form from "./components/Form/Form";
import Header from "./components/Header";
import Posts from "./components/Posts/Posts";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className="h-screen bg-gray-100">
      <Header />
      <Form setCurrentId={setCurrentId} currentId={currentId} />
      <Posts setCurrentId={setCurrentId} />
    </div>
  );
};

export default App;
