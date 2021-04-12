import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Checklist from "./components/Checklist";
import Anketa from "./components/Anketa";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

const todoItems = [
  {
    id: 0,
    text: "Learn React",
  },
  {
    id: 1,
    text: "Walk with dog",
  },
  {
    id: 2,
    text: "Play the guitar",
  },
  {
    id: 3,
    text: "Go to sleep",
  },
];

const todo = [
  {
    id: 0,
    text: "dddddddddd",
  },
  {
    id: 1,
    text: "fffffffff",
  },
];

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Checklist title="Plan for today" tasks={todoItems} />
    <Checklist title="Plan for sunday" tasks={todo} /> */}
    <Anketa title="What football club is the most titled in the English Premier League?" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
