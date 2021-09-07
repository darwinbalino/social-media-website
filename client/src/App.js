import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Form from "./components/Form/Form";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import Posts from "./components/Posts/Posts";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className="h-screen bg-gray-100">
      <Header />
      <main className="flex">
        <Sidebar />
        <InputBox />
      </main>
      <Form setCurrentId={setCurrentId} currentId={currentId} />
      <Posts setCurrentId={setCurrentId} />
    </div>
  );
};

export default App;
