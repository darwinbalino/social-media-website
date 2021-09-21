import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Feed from "./components/Feed";
import Form from "./components/Form/Form";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";

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
        <Feed setCurrentId={setCurrentId} currentId={currentId} />
        <Widgets />
      </main>
      <Form setCurrentId={setCurrentId} currentId={currentId} />
    </div>
  );
};

export default App;
