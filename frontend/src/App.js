import React from "react";
import './App.css';
import TodoList from "./components/ToDoList";
import Login from "./components/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<TodoList/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
