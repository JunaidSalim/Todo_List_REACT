import "./App.css";
import Header from "./Components/Header";
import Todo from "./Components/Todo";
// import Footer from "./Components/Footer";
import Add from "./Components/Add";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  let inittask;

  if (localStorage.getItem("task") === null) {
    inittask = [];
  } else {
    inittask = JSON.parse(localStorage.getItem("task"));
  }
  const onDelete = (tasks) => {
    settask(
      task.filter((e) => {
        return e !== tasks;
      })
    );
  };
  const AddTask = (tit, desc) => {
    const nextTask = {
      no: task.length !== 0 ? task.length - 1 : 0,
      title: tit,
      description: desc,
    };
    settask([...task, nextTask]);
  };

  const [task, settask] = useState(inittask);
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Todo tasks={task} onDelete={onDelete} />} />
        <Route path="/add" element={<Add add={AddTask} />} />
      </Routes>
    </>
  );
}

export default App;
