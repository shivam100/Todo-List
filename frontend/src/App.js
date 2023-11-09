import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "../src/components/Todo.js";

const App = () => {
  const headStyle = {
    textAlign: "center",
  };

  return (
    <div>
      <h1 style={headStyle}>Todo List</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
